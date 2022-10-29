<script lang="ts">
  import classNames from 'classnames';
  import Frame from '../utils/Frame.svelte';
  import { createEventDispatcher } from 'svelte';
  import CloseButton from '../utils/CloseButton.svelte';
  import focusTrap from '../utils/focusTrap';
  import type { SizeType } from '$lib/types';

  export let open: boolean = false;
  export let title: string = '';
  export let size: SizeType = 'md';
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
  export let permanent: boolean = false;
  export let backdropClasses: string = 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80';

  const dispatch = createEventDispatcher();
  $: dispatch(open ? 'open' : 'hide');

  function prepareFocus(node: HTMLElement) {
    const walker = document.createTreeWalker(node, NodeFilter.SHOW_ELEMENT);
    let n: Node | null;
    while ((n = walker.nextNode())) {
      if (n instanceof HTMLElement) {
        const el = n as HTMLElement;
        const [x, y] = isScrollable(el);
        if (x || y) el.tabIndex = 0;
      }
    }
    node.focus();
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
    if (autoclose && target?.tagName === 'BUTTON') open = false;
  };

  const hide = () => {
    open = false;
  };

  let mainClass: string;
  $: mainClass = classNames(
    'flex overflow-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full',
    backdropClasses,
    ...getPlacementClasses(),
    $$props.class
  );

  const isScrollable = (e: HTMLElement): boolean[] => [
    e.scrollWidth > e.clientWidth && ['scroll', 'auto'].indexOf(getComputedStyle(e).overflowX) >= 0,
    e.scrollHeight > e.clientHeight && ['scroll', 'auto'].indexOf(getComputedStyle(e).overflowY) >= 0
  ];

  function preventWheelDefault(e: Event) {
    // @ts-ignore
    const [x, y] = isScrollable(this);
    return x || y || e.preventDefault();
  }

  function handleKeys(e: KeyboardEvent) {
    if (e.key === 'Escape' && !permanent) return hide();
  }
</script>

{#if open}
  <div
    tabindex="-1"
    class={mainClass}
    aria-modal="true"
    role="dialog"
    on:keydown|preventDefault={handleKeys}
    on:wheel|preventDefault
    use:prepareFocus
    use:focusTrap
    on:click={autoclose ? onAutoClose : null}>
    <div class="flex p-4 w-full {sizes[size]} h-full md:h-auto max-h-screen">
      <!-- Modal content -->
      <Frame {...$$restProps} rounded shadow class="relative flex flex-col w-full h-full md:h-auto">
        <!-- Modal header -->
        {#if $$slots.header || title}
          <div class="flex justify-between items-center p-4 rounded-t border-b dark:border-gray-600">
            <slot name="header">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white p-0">
                {title}
              </h3>
            </slot>
            {#if !permanent}<CloseButton name="Close modal" on:click={hide} />{/if}
          </div>
        {:else if !permanent}
          <CloseButton name="Close modal" class="absolute top-3 right-2.5" on:click={hide} />
        {/if}
        <!-- Modal body -->
        <div
          id="modal"
          class="p-6 space-y-6 flex-1 overflow-y-auto overscroll-contain"
          on:keydown|stopPropagation={handleKeys}
          on:wheel|stopPropagation={preventWheelDefault}>
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
