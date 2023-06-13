<script lang="ts">
  import { getContext } from 'svelte';
  import type { TabCtxType } from './Tabs.svelte';
  import { writable } from 'svelte/store';
  import { twMerge } from 'tailwind-merge';

  export let open: boolean = false;
  export let title: string = 'Tab title';
  export let activeClasses: string | undefined = undefined;
  export let inactiveClasses: string | undefined = undefined;
  export let defaultClass: string =
    'inline-block text-sm font-medium text-center disabled:cursor-not-allowed';

  const ctx = getContext<TabCtxType>('ctx') ?? {};
  // single selection
  const selected = ctx.selected ?? writable<HTMLElement>();

  function init(node: HTMLElement) {
    selected.set(node);

    const destroy = selected.subscribe((x) => {
      if (x !== node) {
        open = false;
      }
    });

    return { destroy };
  }

  let buttonClass: string;
  $: buttonClass = twMerge(
    defaultClass,
    open ? activeClasses ?? ctx.activeClasses : inactiveClasses ?? ctx.inactiveClasses,
    open && 'active'
    // $$restProps.disabled && 'cursor-not-allowed pointer-events-none'
  );
</script>

<li class={twMerge('group', $$props.class)} role="presentation">
  <button
    type="button"
    on:click={() => (open = true)}
    on:blur
    on:click
    on:contextmenu
    on:focus
    on:keydown
    on:keypress
    on:keyup
    on:mouseenter
    on:mouseleave
    on:mouseover
    role="tab"
    {...$$restProps}
    class={buttonClass}>
    <slot name="title">{title}</slot>
  </button>

  {#if open}
    <div class="hidden tab_content_placeholder">
      <div use:init>
        <slot />
      </div>
    </div>
  {/if}
</li>

<!--
  @component
  ## Features
  [Go to Tab](https://flowbite-svelte.com/docs/components/tab)
  ## Props
  @prop open: boolean = false;
  @prop title: string = 'Tab title';
  @prop activeClasses: string | undefined = undefined;
  @prop inactiveClasses: string | undefined = undefined;
  @prop defaultClass: string =
    'inline-block text-sm font-medium text-center disabled:cursor-not-allowed';
  ## Event
  - on:blur
  - on:click
  - on:contextmenu
  - on:focus
  - on:keydown
  - on:keypress
  - on:keyup
  - on:mouseenter
  - on:mouseleave
  - on:mouseover
  ## Example
  ```
  <script>
    import { Tabs, TabItem } from 'flowbite-svelte';
  </script>
  
  <Tabs>
    <TabItem open title="Profile">
      <p class="text-sm text-gray-500 dark:text-gray-400"><b>Profile:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </TabItem>
    <TabItem title="Settings">
      <p class="text-sm text-gray-500 dark:text-gray-400"><b>Settings:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </TabItem>
    <TabItem title="Users">
      <p class="text-sm text-gray-500 dark:text-gray-400"><b>Users:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </TabItem>
    <TabItem title="Dashboard">
      <p class="text-sm text-gray-500 dark:text-gray-400"><b>Dashboard:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </TabItem>
    <TabItem disabled>
      <span slot="title" class="text-gray-400 dark:text-gray-500">Disabled</span>
      <p class="text-sm text-gray-500 dark:text-gray-400"><b>Disabled:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </TabItem>
  </Tabs>
  ```
  
-->
