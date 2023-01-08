import { createEventDispatcher } from 'svelte';
export let open = false;

const backdropClasses = 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40';
export let placement: string;
// const placement:
// 		| 'top-left'
// 		| 'top-center'
// 		| 'top-right'
// 		| 'center-left'
// 		| 'center'
// 		| 'center-right'
// 		| 'bottom-left'
// 		| 'bottom-center'
// 		| 'bottom-right'='center';

export const init = (node: HTMLElement, _open: boolean) => {
  getPlacementClasses().map((c) => node.classList.add(c));
  _open && createBackdrop(node);

  return {
    update(_open: boolean) {
      allPlacementClasses.map((c) => node.classList.remove(c));
      getPlacementClasses().map((c) => node.classList.add(c));

      _open ? createBackdrop(node) : destroyBackdrop(node);
    },

    destroy() {
      destroyBackdrop(node);
    }
  };
};

const getPlacementClasses = () => {
  switch (placement) {
    // top
    case 'top-left':
      return ['justify-start', 'items-start'];
    case 'top-center':
      return ['justify-center', 'items-start'];
    case 'top-right':
      return ['justify-end', 'items-start'];

    // center
    case 'center-left':
      return ['justify-start', 'items-center'];
    case 'center':
      return ['justify-center', 'items-center'];
    case 'center-right':
      return ['justify-end', 'items-center'];

    // bottom
    case 'bottom-left':
      return ['justify-start', 'items-end'];
    case 'bottom-center':
      return ['justify-center', 'items-end'];
    case 'bottom-right':
      return ['justify-end', 'items-end'];

    default:
      return ['justify-center', 'items-center'];
  }
};

const createBackdrop = (node: Node) => {
  if (!backdropEl) {
    backdropEl = document.createElement('div');
    backdropEl.classList.add(...backdropClasses.split(' '));

    const body = document.body;
    body.append(backdropEl);
    body.style.overflow = 'hidden';

    document.addEventListener('keydown', handleEscape, true);
  }

  dispatch('show', node);
};

const destroyBackdrop = (node: Node) => {
  const body = document.body;
  body.style.overflow = 'auto';

  if (backdropEl) backdropEl.remove();
  backdropEl = undefined;

  document.removeEventListener('keydown', handleEscape, true);

  dispatch('hide', node);
};

let backdropEl: HTMLElement | undefined;

const handleEscape = (e: KeyboardEvent) => {
  if (open && e.key === 'Escape') open = false;
};

const dispatch = createEventDispatcher();

const allPlacementClasses = [
  'justify-start',
  'justify-center',
  'justify-end',
  'items-start',
  'items-center',
  'items-end'
];
