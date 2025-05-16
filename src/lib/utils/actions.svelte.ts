/**
 * Svelte action that traps focus within a DOM node and handles Escape key
 * @param node - The DOM node to trap focus within
 * @param options - Optional configuration object
 * @returns An action object with destroy method
 */
export function trapFocus(node: HTMLElement, options: { onEscape?: () => void; isClosing?: boolean } | null = {}) {
  // If options is null, don't trap focus at all
  if (options === null) {
    return {
      update(newOptions: { onEscape?: () => void; isClosing?: boolean } | null = {}) {
        options = newOptions;
      },
      destroy() {}
    };
  }

  const previous = document.activeElement as HTMLElement | null;
  // Track if we're currently closing via outside click
  let isClosingViaOutsideClick = false;
  // Create a flag to prevent re-focusing when focus is moved outside
  let isFocusMovedOutside = false;

  function focusable(): HTMLElement[] {
    return Array.from(
      node.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
    );
  }

  function handleKeydown(event: KeyboardEvent): void {
    if (event.key === 'Tab' && options !== null) {
      const current = document.activeElement;
      const elements = focusable();
      const first = elements.at(0);
      const last = elements.at(-1);

      if (event.shiftKey && current === first) {
        last?.focus();
        event.preventDefault();
      }

      if (!event.shiftKey && current === last) {
        first?.focus();
        event.preventDefault();
      }
    } else if (event.key === 'Escape' && options !== null && options.onEscape) {
      event.preventDefault();
      // Mark as closing via escape to prevent focus restoration
      isClosingViaOutsideClick = true;
      options.onEscape();
    }
  }

  // Handler for when focus moves outside the trapped area
  function handleFocusOut(event: FocusEvent) {
    // If focus is moving outside our node and not to one of our triggers
    if (!node.contains(event.relatedTarget as Node) && event.relatedTarget !== previous) {
      isFocusMovedOutside = true;
    }
  }

  $effect(() => {
    // Only add event listeners if options is not null
    if (options !== null) {
      // Check if we're currently in a closing state
      isClosingViaOutsideClick = !!options.isClosing;
      
      // Only auto-focus if not closing from outside click
      if (!isClosingViaOutsideClick && !isFocusMovedOutside) {
        const elements = focusable();
        if (elements.length > 0) {
          elements[0].focus();
        }
      }
      
      node.addEventListener('keydown', handleKeydown);
      node.addEventListener('focusout', handleFocusOut);

      return () => {
        node.removeEventListener('keydown', handleKeydown);
        node.removeEventListener('focusout', handleFocusOut);
        
        // Only restore focus if not closing via outside click and focus hasn't moved outside
        if (!isClosingViaOutsideClick && !isFocusMovedOutside && previous) {
          setTimeout(() => {
            previous.focus({ preventScroll: true });
          }, 0);
        }
      };
    }
  });
  
  // Return the action object with destroy method
  return {
    update(newOptions: { onEscape?: () => void; isClosing?: boolean } | null = {}) {
      // Update the closing state
      if (newOptions && newOptions.isClosing !== undefined) {
        isClosingViaOutsideClick = newOptions.isClosing;
      }
      
      options = newOptions;
      
      // Clean up existing listeners if options becomes null
      if (options === null) {
        node.removeEventListener('keydown', handleKeydown);
        node.removeEventListener('focusout', handleFocusOut);
      } else if (options !== null) {
        // Add listener if it wasn't already there
        node.removeEventListener('keydown', handleKeydown);
        node.removeEventListener('focusout', handleFocusOut);
        node.addEventListener('keydown', handleKeydown);
        node.addEventListener('focusout', handleFocusOut);
      }
    },
    destroy() {
      if (options !== null) {
        node.removeEventListener('keydown', handleKeydown);
        node.removeEventListener('focusout', handleFocusOut);
        
        // Only restore focus if not closing via outside click and focus hasn't moved outside
        if (!isClosingViaOutsideClick && !isFocusMovedOutside && previous) {
          setTimeout(() => {
            previous.focus({ preventScroll: true });
          }, 0);
        }
      }
    }
  };
}