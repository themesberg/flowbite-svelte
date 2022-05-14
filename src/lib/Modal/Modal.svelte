<script lang="ts">
  import classNames from 'classnames';
  import { createEventDispatcher, setContext } from 'svelte';
  const dispatch = createEventDispatcher();

  export let open = false;

  export let popup: boolean = false;
  export let size: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' = '2xl';
  export let placement: `${'top' | 'bottom'}-${'left' | 'center' | 'right'}` | `center${'' | '-left' | '-right'}` =
    'center';

  // Issue if popup is changed after initialisation
  setContext('modal', {
    onClose: () => {
      open = false;
      dispatch('close');
    },
    popup,
  });

  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
    '5xl': 'max-w-5xl',
    '6xl': 'max-w-6xl',
    '7xl': 'max-w-7xl',
  };

  const placementClasses = {
    'top-left': 'items-start justify-start',
    'top-center': 'items-start justify-center',
    'top-right': 'items-start justify-end',
    'center-left': 'items-center justify-start',
    center: 'items-center justify-center',
    'center-right': 'items-center justify-end',
    'bottom-right': 'items-end justify-end',
    'bottom-center': 'items-end justify-center',
    'bottom-left': 'items-end justify-start',
  };
</script>

<div
  class={classNames(
    'fixed top-0 right-0 left-0 z-50 h-modal overflow-y-auto overflow-x-hidden md:inset-0 md:h-full',
    placementClasses[placement],
    {
      'flex bg-gray-900 bg-opacity-50 dark:bg-opacity-80': open,
      hidden: !open,
    }
  )}
  aria-hidden={!open}
>
  <div class={classNames('relative h-full w-full p-4 md:h-auto', sizeClasses[size])}>
    <div class="relative rounded-lg bg-white shadow dark:bg-gray-700">
      <slot />
    </div>
  </div>
</div>
