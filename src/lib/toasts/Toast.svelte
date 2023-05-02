<script lang="ts">
  import Frame from '../utils/Frame.svelte';
  import classNames from 'classnames';
  import CloseButton from '../utils/CloseButton.svelte';
  import { fade } from 'svelte/transition';
  export let color:
    | 'gray'
    | 'red'
    | 'yellow'
    | 'green'
    | 'indigo'
    | 'default'
    | 'purple'
    | 'pink'
    | 'blue'
    | 'light'
    | 'dark'
    | 'dropdown'
    | 'navbar'
    | 'navbarUl'
    | 'form'
    | 'none' = 'blue';
  export let simple: boolean = false;
  export let position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'none' = 'none';
  export let open: boolean = true;
  export let divClass: string = 'w-full max-w-xs p-4';
  export let defaultIconClass: string = 'inline-flex items-center justify-center flex-shrink-0 w-8 h-8 mr-3';

  const positions = {
    'top-left': 'absolute top-5 left-5',
    'top-right': 'absolute top-5 right-5',
    'bottom-left': 'absolute bottom-5 left-5',
    'bottom-right': 'absolute bottom-5 right-5',
    none: ''
  };

  let classDiv: string;
  $: classDiv = classNames(divClass, positions[position], $$props.class);

  let iconClass: string;
  $: iconClass = classNames(defaultIconClass);
</script>

{#if open}
  <Frame rounded border transition={fade} {...$$restProps} class={classDiv} role="alert">
    <div class="flex {$$slots.extra ? 'items-start' : 'items-center'}">
      {#if $$slots.icon}
        <Frame {color} rounded class={iconClass}><slot name="icon" /></Frame>
      {/if}

      <div class="text-sm font-normal w-full">
        <slot />
        <slot name="extra" />
      </div>
      {#if !simple}
        <CloseButton on:click={() => (open = false)} />
      {/if}
    </div>
  </Frame>
{/if}
