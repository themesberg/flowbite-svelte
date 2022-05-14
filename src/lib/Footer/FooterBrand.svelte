<script lang="ts">
  import classNames from 'classnames';

  export let href: string = '';
  export let src: string = '';
  export let alt: string = '';
  export let name: string = '';
</script>

{#if href}
  <a {href} class={classNames('mb-4 flex items-center sm:mb-0', $$props.class)}>
    <img {src} class="mr-3 h-8" {alt} />
    <span class="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">{name}</span>
    <slot />
  </a>
{:else}
  <img {src} class="mr-3 h-8" {alt} />
{/if}
