interface CustomToggleEvent extends Event {
  newState: string;
  oldState: string;
}

export function installPopoverPolyfill() {
  if (typeof document === "undefined" || typeof HTMLElement === "undefined") {
    return;
  }

  // ---------------------------------------------------------------------------
  // CSS: mimic native popover visibility behavior
  // ---------------------------------------------------------------------------
  if (!document.querySelector("[data-vitest-popover-polyfill]")) {
    const style = document.createElement("style");
    style.setAttribute("data-vitest-popover-polyfill", "true");
    style.textContent = `
      [popover="manual"]:not(:popover-open):not([data-popover-open="true"]),
      [popover="auto"]:not(:popover-open):not([data-popover-open="true"]) {
        display: none !important;
      }

      [popover="manual"]:popover-open,
      [popover="auto"]:popover-open,
      [popover="manual"][data-popover-open="true"],
      [popover="auto"][data-popover-open="true"] {
        display: block !important;
      }
    `;
    document.head.appendChild(style);
  }

  // ---------------------------------------------------------------------------
  // Popover API polyfill
  // ---------------------------------------------------------------------------
  if (!HTMLElement.prototype.showPopover) {
    Object.defineProperty(HTMLElement.prototype, "showPopover", {
      value: function (this: HTMLElement) {
        if (this.getAttribute("data-popover-open") === "true") return;

        const beforeEvent = new Event("beforetoggle", {
          bubbles: false,
          cancelable: false
        }) as CustomToggleEvent;

        beforeEvent.newState = "open";
        beforeEvent.oldState = "closed";
        this.dispatchEvent(beforeEvent);

        this.setAttribute("data-popover-open", "true");

        const toggleEvent = new Event("toggle", {
          bubbles: false,
          cancelable: false
        }) as CustomToggleEvent;

        toggleEvent.newState = "open";
        toggleEvent.oldState = "closed";
        this.dispatchEvent(toggleEvent);
      },
      configurable: true
    });
  }

  if (!HTMLElement.prototype.hidePopover) {
    Object.defineProperty(HTMLElement.prototype, "hidePopover", {
      value: function (this: HTMLElement) {
        if (this.getAttribute("data-popover-open") !== "true") return;

        const beforeEvent = new Event("beforetoggle", {
          bubbles: false,
          cancelable: false
        }) as CustomToggleEvent;

        beforeEvent.newState = "closed";
        beforeEvent.oldState = "open";
        this.dispatchEvent(beforeEvent);

        this.removeAttribute("data-popover-open");

        const toggleEvent = new Event("toggle", {
          bubbles: false,
          cancelable: false
        }) as CustomToggleEvent;

        toggleEvent.newState = "closed";
        toggleEvent.oldState = "open";
        this.dispatchEvent(toggleEvent);
      },
      configurable: true
    });
  }

  if (!HTMLElement.prototype.togglePopover) {
    Object.defineProperty(HTMLElement.prototype, "togglePopover", {
      value: function (this: HTMLElement, force?: boolean) {
        const isOpen = this.getAttribute("data-popover-open") === "true";

        if (force === undefined) {
          if (isOpen) {
            this.hidePopover();
          } else {
            this.showPopover();
          }
        } else if (force) {
          if (!isOpen) this.showPopover();
        } else {
          if (isOpen) this.hidePopover();
        }
      },
      configurable: true
    });
  }

  // ---------------------------------------------------------------------------
  // :popover-open pseudo-class support
  // ---------------------------------------------------------------------------
  const originalMatches = Element.prototype.matches;

  Element.prototype.matches = function (selector: string) {
    if (selector === ":popover-open") {
      return this.getAttribute("data-popover-open") === "true";
    }
    return originalMatches.call(this, selector);
  };
}
