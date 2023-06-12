<script lang="ts">
  import { twMerge } from 'tailwind-merge'
  export let aClass: string = 'flex items-center';
  export let spanClass: string = 'self-center text-2xl font-semibold whitespace-nowrap dark:text-white';
  export let imgClass: string = 'mr-3 h-8';
  export let href: string = '';
  export let src: string = '';
  export let alt: string = '';
  export let name: string = '';
  export let target: string | undefined = undefined;
</script>

{#if href}
  <a {...$$restProps} {href} {target} class={twMerge(aClass, $$props.class)}>
    <img {src} class={imgClass} {alt} />
    <span class={spanClass}>{name}</span>
    <slot />
  </a>
{:else}
  <img {...$$restProps} {src} class={imgClass} {alt} />
{/if}

<!--
  @component
  ## Feature
  [Go to Footer](https://flowbite-svelte.com/docs/components/footer)
  ## Props
  @prop aClass: string = 'flex items-center';
  @prop spanClass: string = 'self-center text-2xl font-semibold whitespace-nowrap dark:text-white';
  @prop imgClass: string = 'mr-3 h-8';
  @prop href: string = '';
  @prop src: string = '';
  @prop alt: string = '';
  @prop name: string = '';
  @prop target: string | undefined = undefined;
-->
