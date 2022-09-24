<script lang="ts">
  import classNames from 'classnames';
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

  function contentInit(node: HTMLElement) {
    function keydownHandler(e: KeyboardEvent) {
      if (open && e.key === 'Escape') return hide();

      const target: Node = e.target as Node;
      if (node.contains(target)) return true;
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') return blockEvent(e);

      return true;
    }

    document.addEventListener('keydown', keydownHandler, { passive: false });

    node.focus();

    return {
      destroy() {
        document.removeEventListener('keydown', keydownHandler);
      }
    };
  }

  function init(node: HTMLElement) {
    function preventScroll(e: Event) {
      if (e.target === node) return blockEvent(e);
    }

    node.addEventListener('wheel', preventScroll, { passive: false });
    dispatch('show', node);

    return {
      destroy() {
        node.removeEventListener('wheel', preventScroll);
        dispatch('hide', node);
      }
    };
  }

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

  const onAutoClose = (e: MouseEvent) => {
    const target: Element = e.target as Element;
    if (autoclose && target?.tagName === 'BUTTON') open = !open;
  };

  const hide = () => {
    open = false;
  };

  let mainClass: string;
  $: mainClass = classNames(
    'flex overflow-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full',
    backdropClasses,
    getPlacementClasses().join(' '),
    $$props.class
  );
</script>

<!-- Main modal -->
{#if open}
  <div
    tabindex="-1"
    class={mainClass}
    aria-modal="true"
    role="dialog"
    use:init
    use:focusTrap
    on:click={autoclose ? onAutoClose : null}>
    <div class="flex p-4 w-full {sizes[size]} h-full md:h-auto max-h-screen">
      <!-- Modal content -->
      <Frame rounded shadow class="relative flex flex-col w-full h-full md:h-auto">
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
          use:contentInit>
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
