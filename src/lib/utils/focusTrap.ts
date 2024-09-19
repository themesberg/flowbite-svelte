//
// Taken from github.com/carbon-design-system/carbon/packages/react/src/internal/keyboard/navigation.js
//

// add all the elements inside modal which you want to make focusable
import type { Action } from 'svelte/action';

const selectorTabbable = `
  a[href], area[href], input:not([disabled]):not([tabindex='-1']),
  button:not([disabled]):not([tabindex='-1']),select:not([disabled]):not([tabindex='-1']),
  textarea:not([disabled]):not([tabindex='-1']),
  iframe, object, embed, *[tabindex]:not([tabindex='-1']):not([disabled]), *[contenteditable=true]
`;

const focusTrap: Action<HTMLElement> = (node) => {
  const handleFocusTrap = (e: KeyboardEvent) => {
    const isTabPressed = e.key === 'Tab' || e.keyCode === 9;

    if (!isTabPressed) {
      return;
    }

    const tabbable = Array.from(node.querySelectorAll(selectorTabbable)).filter((el): el is HTMLElement => el instanceof HTMLElement && el.hidden !== true);

    let index = tabbable.indexOf(document.activeElement as HTMLElement);
    if (index === -1 && e.shiftKey) index = 0;
    index += tabbable.length + (e.shiftKey ? -1 : 1);
    index %= tabbable.length;
    tabbable[index].focus();

    e.preventDefault();
  };

  document.addEventListener('keydown', handleFocusTrap, true);

  return {
    destroy() {
      document.removeEventListener('keydown', handleFocusTrap, true);
    }
  };
};

export default focusTrap;
