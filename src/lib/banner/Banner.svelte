<script lang="ts">
  import classNames from 'classnames';
  import CloseButton from '../utils/CloseButton.svelte';
  export let id: string = 'sticky-banner';
  export let position: 'static'|'fixed'|'absolute'|'relative'|'sticky'='sticky';
  export let dismissable: boolean = true;
  export let bannerType: 'default'|'bottom'|'cta'|'signup'|'info'|'custom'='default';
  export let divDefault: string = 'z-10 flex justify-between p-4 dark:bg-gray-700 dark:border-gray-600';
  export let insideDiv: string ='flex';

  const divClasses = {
    default: 'top-0 left-0 w-full border-b border-gray-200 bg-gray-50',
    bottom: 'bottom-0 left-0 w-full border-t border-gray-200 bg-gray-50',
    cta: 'flex-col md:flex-row  w-[calc(100%-2rem)] -translate-x-1/2 bg-white border border-gray-100 rounded-lg shadow-sm lg:max-w-7xl left-1/2 top-6',
    signup: 'top-0 left-0 w-full border-b border-gray-200 bg-gray-50',
    info:'top-0 left-0 flex-col w-full border-b border-gray-200 md:flex-row bg-gray-50',
    custom: ''
  }

  const insideDivClasses = {
    default: 'items-center mx-auto',
    bottom: 'items-center mx-auto',
    cta: 'flex-col items-start mb-3 mr-4 md:items-center md:flex-row md:mb-0',
    signup: 'items-center flex-shrink-0 w-full mx-auto sm:w-auto',
    info: 'items-center flex-shrink-0',
    custom: ''
  }

  $: divClass = classNames(
    position,
    divDefault,
    divClasses[bannerType],
    $$props.outerDiv
  )
  $: div2Class = classNames(
    insideDiv,
    insideDivClasses[bannerType],
    $$props.innerDiv
  )
  let show = true;
  $: handleHide = () => {
    show = !show;
  };
</script>

{#if show}
  <div {id} tabindex="-1" class={divClass} {...$$restProps} >
    <slot name="header" />
    <div class={div2Class}>
        <slot />
    </div>
    {#if dismissable}
    <div class="flex items-center">
      <CloseButton
        class="-mx-1.5 -my-1.5"
        color={$$restProps.color}
        on:click={handleHide}
        on:click
        on:change
        on:keydown
        on:keyup
        on:focus
        on:blur
        on:mouseenter
        on:mouseleave />
    </div>
    {/if}
  </div>
{/if}
