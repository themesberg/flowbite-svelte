// @ts-nocheck
export function uiHelpers() {
  let isOpen = $state(false);

  function toggle() {
    isOpen = !isOpen;
  }

  function close() {
    isOpen = false;
  }

  function open() {
    isOpen = true;
  }

  return {
    get isOpen() {
      return isOpen;
    },
    set isOpen(value) {
      isOpen = value;
    },

    toggle,
    close,
    open
  };
}

export function clickOutside(element, callbackFunction) {
  const onClick = (event) => {
    if (typeof callbackFunction === "function") {
      const targetNode = event.target;
      if (!element.contains(targetNode)) {
        callbackFunction(event);
      }
    } else {
      console.error("Callback function is not a function");
    }
  };

  element.ownerDocument.body.addEventListener("click", onClick);

  return {
    update(newCallbackFunction) {
      if (typeof newCallbackFunction === "function") {
        callbackFunction = newCallbackFunction;
      } else {
        console.error("New callback function is not a function");
      }
    },
    destroy() {
      element.ownerDocument.body.removeEventListener("click", onClick);
    }
  };
}
