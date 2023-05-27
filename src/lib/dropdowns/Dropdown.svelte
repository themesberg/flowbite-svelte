<script lang="ts">
  import classNames from 'classnames';
  import Popper from '$lib/utils/Popper.svelte';

  export let open: boolean = false;
  export let frameClass: string = '';
  export let headerClass: string = 'py-1 overflow-hidden rounded-t';
  export let ulClass: string = 'py-1 w-44';
  export let footerClass: string = 'py-1 overflow-hidden rounded-b';

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
  $: popoverClass = classNames('divide-y divide-gray-100 dark:divide-gray-600', frameClass);
</script>

<Popper activeContent {...$$restProps} class={popoverClass} on:show bind:open>
  {#if $$slots.header}
    <div class="{headerClass}">
      <slot name="header" />
    </div>
  {/if}
  <ul class={$$props.class ?? {ulClass}}>
    <slot />
  </ul>
  {#if $$slots.footer}
    <div class="{footerClass}">
      <slot name="footer" />
    </div>
  {/if}
</Popper>

<!--
  @component
  ## Features
  [Go to Dropdown](https://flowbite-svelte.com/docs/components/dropdown)

  @prop open: boolean = false;
  @prop frameClass: string = '';
  @prop headerClass: string = 'py-1 overflow-hidden rounded-t';
  @prop ulClass: string = 'py-1 w-44';
  @prop footerClass: string = 'py-1 overflow-hidden rounded-b';


-->