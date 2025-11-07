export function nonPassiveTouch(
  node: HTMLElement,
  handler: (event: TouchEvent) => void
) {

  node.addEventListener("touchstart", handler, { passive: false });

  return {
    destroy() {
      node.removeEventListener("touchstart", handler);
    }
  };
}
