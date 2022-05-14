<script lang="ts">
  import classNames from 'classnames';
  import type { SvelteComponent } from 'svelte';

  export let href: string = '';
  export let ariaLabel: string = '';
  export let icon: typeof SvelteComponent | null = null;
</script>

{#if href}
  <a {href} aria-label={ariaLabel} class={classNames('text-gray-500 dark:hover:text-white', $$props.class)}>
    <svelte:component this={icon} class="h-5 w-5" />
  </a>
{:else}
  <svelte:component this={icon} class="h-5 w-5" />
{/if}
