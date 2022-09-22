<script lang="ts">
  import Frame from '../utils/Frame.svelte';
  import { createEventDispatcher } from 'svelte';
  import CloseButton from '../utils/CloseButton.svelte';
  import focusTrap from '../utils/focusTrap';

  export let open: boolean = false;
  export let title: string = '';
  export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
  export let placement:
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'center-left'
    | 'center'
    | 'center-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right' = 'center';
  export let autoclose: boolean = true;
  export let backdropClasses: string = 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80';

  const dispatch = createEventDispatcher();

  function blockEvent(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }

  function blockkeys(node: HTMLElement) {
    function preventScroll2(e: KeyboardEvent) {
      if (node.contains(e.target)) return true;

      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') return blockEvent(e);
    }

    document.addEventListener('keydown', preventScroll2, { passive: false });
    node.focus();

    return {
      destroy() {
        document.removeEventListener('keydown', preventScroll2);
      }
    };
  }

  function init(node: HTMLElement) {
    function preventScroll(e: Event) {
      if (e.target === node) {
        blockEvent(e);
        return;
      }
    }

    node.addEventListener('wheel', preventScroll, { passive: false });
    node.addEventListener('keydown', handleEscape, true);

    dispatch('show', node);

    return {
      destroy() {
        node.removeEventListener('wheel', preventScroll);
        node.removeEventListener('keydown', handleEscape, true);

        dispatch('hide', node);
      }
    };
  }

  const handleEscape = (e: KeyboardEvent) => {
    if (open && e.key === 'Escape') open = false;
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

  const sizes = {
    xs: 'max-w-md',
    sm: 'max-w-lg',
    md: 'max-w-2xl',
    lg: 'max-w-4xl',
    xl: 'max-w-7xl'
  };

  const onButtonsClick = (e: Event) => {
    const target: Element = e.target as Element;
    if (autoclose && target?.tagName === 'BUTTON') open = !open;
  };

  const hide = () => {
    open = false;
  };
</script>

<!-- Main modal -->
{#if open}
  <div
    tabindex="-1"
    class="flex overflow-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full {backdropClasses} {getPlacementClasses().join(
      ' '
    )}"
    aria-modal="true"
    role="dialog"
    use:init
    use:focusTrap={open}
    on:click={onButtonsClick}>
    <div class="flex p-4 w-full {sizes[size]} h-full md:h-auto ">
      <!-- Modal content -->
      <Frame rounded shadow class="relative flex flex-col max-h-screen">
        <!-- Modal header -->
        {#if $$slots.header || title}
          <div
            class="flex justify-between items-center p-4 rounded-t border-b dark:border-gray-600">
            <slot name="header">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white p-0">
                {title}
              </h3>
            </slot>
            <CloseButton name="Close modal" on:click={hide} />
          </div>
        {:else}
          <CloseButton name="Close modal" class="absolute top-3 right-2.5" on:click={hide} />
        {/if}
        <!-- Modal body -->
        <div
          class="p-6 space-y-6 flex-1 overflow-y-auto overscroll-contain"
          tabindex="0"
          use:blockkeys>
          <slot />
        </div>
        <!-- Modal footer -->
        {#if $$slots.footer}
          <div
            class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
            <slot name="footer" />
          </div>
        {/if}
      </Frame>
    </div>
  </div>
{/if}
