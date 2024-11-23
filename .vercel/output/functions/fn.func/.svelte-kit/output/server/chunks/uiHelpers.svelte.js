function uiHelpers() {
  let isOpen = false;
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
let n = Date.now();
function idGenerator() {
  return (++n).toString(36);
}
export {
  idGenerator as i,
  uiHelpers as u
};
