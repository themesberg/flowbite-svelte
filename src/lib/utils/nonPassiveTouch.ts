export function nonPassiveTouch(
  node: HTMLElement,
  handler: (event: TouchEvent) => void
) {
  const listener = (e: TouchEvent) => handler(e);

  node.addEventListener("touchstart", listener, { passive: false });

  return {
    destroy() {
      node.removeEventListener("touchstart", listener);
    }
  };
}
