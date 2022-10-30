<script lang="ts">
  import classNames from 'classnames';
  export let href: string = '';
  export let ariaLabel: string = '';
  export let aClass: string = 'text-gray-500 hover:text-gray-900 dark:hover:text-white';
  export let target: string | undefined = undefined;
</script>

{#if href}
  <a {...$$restProps} {href} {target} aria-label={ariaLabel} class={classNames(aClass, $$props.class)}>
    <slot />
  </a>
{:else}
  <slot />
{/if}
