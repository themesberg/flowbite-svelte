<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import Frame from '../utils/Frame.svelte';
  import { createEventDispatcher, type ComponentProps } from 'svelte';
  import CloseButton from '../utils/CloseButton.svelte';
  import focusTrap from '../utils/focusTrap';
  import type { SizeType } from '$lib/types';
  import type { ModalPlacementType } from '../types';

  // propagate props type from underlying Frame
  interface $$Props extends ComponentProps<Frame> {
    open?: boolean;
    title?: string;
    size?: SizeType;
    placement?:
      | 'top-left'
      | 'top-center'
      | 'top-right'
      | 'center-left'
      | 'center'
      | 'center-right'
      | 'bottom-left'
      | 'bottom-center'
      | 'bottom-right';
    autoclose?: boolean;
    permanent?: boolean;
    backdropClass?: string;
    defaultClass?: string;
    outsideclose?: boolean;
  }

  export let open: boolean = false;
  export let title: string = '';
  export let size: SizeType = 'md';
  export let placement: ModalPlacementType = 'center';
  export let autoclose: boolean = false;
  export let permanent: boolean = false;
  export let backdropClass: string = 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80';
  export let defaultClass: string = 'relative flex flex-col mx-auto';
  export let outsideclose: boolean = false;

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
    if (autoclose && target?.tagName === 'BUTTON') hide(e); // close on any button click
    if (outsideclose && target === e.currentTarget) hide(e); // close on click outside
  };

  const hide = (e: Event) => {
    e.preventDefault();
    open = false;
  };

  let frameClass: string;
  $: frameClass = twMerge(defaultClass, 'w-full', $$props.class);

  const isScrollable = (e: HTMLElement): boolean[] => [
    e.scrollWidth > e.clientWidth && ['scroll', 'auto'].indexOf(getComputedStyle(e).overflowX) >= 0,
    e.scrollHeight > e.clientHeight && ['scroll', 'auto'].indexOf(getComputedStyle(e).overflowY) >= 0
  ];

  let backdropCls: string = twMerge(backdropClass, $$props.classBackdrop);

  function handleKeys(e: KeyboardEvent) {
    if (e.key === 'Escape' && !permanent) return hide(e);
  }
</script>

{#if open}
  <!-- backdrop -->
  <div class={twMerge('fixed inset-0 z-40', backdropCls)} />
  <!-- dialog -->
  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  <div
    on:keydown={handleKeys}
    on:wheel|preventDefault|nonpassive
    use:prepareFocus
    use:focusTrap
    on:click={onAutoClose}
    class={twMerge(
      'fixed top-0 left-0 right-0 h-modal md:inset-0 md:h-full z-50 w-full p-4 flex',
      ...getPlacementClasses()
    )}
    tabindex="-1"
    aria-modal="true"
    role="dialog">
    <div class="flex relative {sizes[size]} w-full max-h-full">
      <!-- Modal content -->
      <Frame rounded shadow {...$$restProps} class={frameClass}>
        <!-- Modal header -->
        {#if $$slots.header || title}
          <Frame color={$$restProps.color} class="flex justify-between items-center p-4 rounded-t border-b">
            <slot name="header">
              <h3
                class="text-xl font-semibold {$$restProps.color ? '' : 'text-gray-900 dark:text-white'} p-0">
                {title}
              </h3>
            </slot>
            {#if !permanent}<CloseButton name="Close modal" on:click={hide} color={$$restProps.color} />{/if}
          </Frame>
        {:else if !permanent}
          <CloseButton
            name="Close modal"
            class="absolute top-3 right-2.5"
            on:click={hide}
            color={$$restProps.color} />
        {/if}
        <!-- Modal body -->
        <div
          class={twMerge('p-6 space-y-6 flex-1 overflow-y-auto overscroll-contain', $$props.bodyClass)}
          on:keydown|stopPropagation={handleKeys}
          role="document"
          on:wheel|stopPropagation|passive>
          <slot />
        </div>
        <!-- Modal footer -->
        {#if $$slots.footer}
          <Frame color={$$restProps.color} class="flex items-center p-6 space-x-2 rounded-b border-t">
            <slot name="footer" />
          </Frame>
        {/if}
      </Frame>
    </div>
  </div>
{/if}

<!--
  @component
  ## Features
  [Go to Modal](https://flowbite-svelte.com/docs/components/modal)
  - Setup
  - Default modal
  - Closing by clicking outside
  - Pop-up modal
  - Form element
  - Crypto wallet
  - Sizes
  - Placement
  - Colors
  - Scrolling behaviour
  ## Props
  @prop open: boolean = false;
  @prop title: string = '';
  @prop size: SizeType = 'md';
  @prop placement: ModalPlacementType = 'center';
  @prop autoclose: boolean = false;
  @prop permanent: boolean = false;
  @prop backdropClass: string = 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80';
  @prop defaultClass: string = 'relative flex flex-col mx-auto';
  @prop outsideclose: boolean = false; 
  ## Example
  ```
  <script>
    import { Button, Modal } from 'flowbite-svelte'
    let defaultModal = false;
  </script>

  <Button on:click={() => defaultModal = true}>Default modal</Button>
  <Modal id="default-modal" title="Terms of Service" bind:open={defaultModal} autoclose>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
    </p>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
    </p>
    <svelte:fragment slot='footer'>
      <Button on:click={() => alert('Handle "success"')}>I accept</Button>
      <Button color="alternative">Decline</Button>
    </svelte:fragment>
  </Modal>
  ``` 
-->
