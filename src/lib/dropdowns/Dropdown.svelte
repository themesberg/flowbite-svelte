<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import Popper from '$lib/utils/Popper.svelte';

  export let open: boolean = false;
  export let headerClass: string = 'py-1 overflow-hidden rounded-t-lg';
  export let ulClass: string = 'py-1 w-44';
  export let footerClass: string = 'py-1 overflow-hidden rounded-b-lg';

  let headerCls: string = twMerge(headerClass, $$props.classHeader)
  let ulCls: string = twMerge(ulClass, $$props.classUl)
  let footerCls: string = twMerge(footerClass, $$props.classFooter)

  $: {
    // set default values
    $$restProps.arrow = $$restProps.arrow ?? false;
    $$restProps.trigger = $$restProps.trigger ?? 'click';
    $$restProps.placement = $$restProps.placement ?? 'bottom';
    $$restProps.color = $$restProps.color ?? 'dropdown';
    $$restProps.shadow = $$restProps.shadow ?? true;
    $$restProps.rounded = $$restProps.rounded ?? true;
  }

  let popoverClass: string;

  $: popoverClass = twMerge('divide-y divide-gray-100 dark:divide-gray-600', $$props.class);
</script>

<Popper activeContent {...$$restProps} class={popoverClass} on:show bind:open>
  {#if $$slots.header}
    <div class={headerCls}>
      <slot name="header" />
    </div>
  {/if}
  <ul class={$$props.class ?? ulCls}>
    <slot />
  </ul>
  {#if $$slots.footer}
    <div class={footerCls}>
      <slot name="footer" />
    </div>
  {/if}
</Popper>

<!--
  @component
  ## Features
  [Go to Dropdown](https://flowbite-svelte.com/docs/components/dropdown)
  - Setup
  - Examples
  - Dropdown divider
  - Dropdown header
  - Multi-level dropdown
  - Programatic open/close
  - Dropdown with checkbox
  - Background hover
  - Helper text
  - Dropdown with radio
  - Background hover
  - Helper text
  - Dropdown with toggle switch
  - Dropdown navbar
  - Dropdown with scrolling
  - Dropdown with search
  - Menu icon
  - Notification bell
  - User avatar
  - Avatar with name
  - Sizes
  - Placement
  - Double placement
  - Events
  ## Props
  @prop open: boolean = false;
  @prop headerClass: string = 'py-1 overflow-hidden rounded-t-lg';
  @prop ulClass: string = 'py-1 w-44';
  @prop footerClass: string = 'py-1 overflow-hidden rounded-b-lg';
  ## Example
  ```
  <script>
    import { Button, Dropdown, DropdownItem, Chevron } from 'flowbite-svelte'
  </script>
  
  <Button><Chevron>Dropdown button</Chevron></Button>
  <Dropdown >
    <DropdownItem>Dashboard</DropdownItem>
    <DropdownItem>Settings</DropdownItem>
    <DropdownItem>Earnings</DropdownItem>
    <DropdownItem>Sign out</DropdownItem>
  </Dropdown>
  ```

-->
