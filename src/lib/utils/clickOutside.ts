export const clickOutside=(node: HTMLElement, callback: () => void)=> {
  const handleClick = (event: MouseEvent) => {
    if (!event?.target) return;
    if (node && !node.contains(event.target as Node) && !event.defaultPrevented) {
      callback();
    }
  };

  document.addEventListener('click', handleClick, true);

  return {
    destroy() {
      document.removeEventListener('click', handleClick, true);
    },
  };
}