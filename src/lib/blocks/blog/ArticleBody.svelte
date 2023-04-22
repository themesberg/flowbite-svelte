<script lang="ts">
  import classNames from 'classnames';
  export let h2Class: string =
    'mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white';
</script>

{#if $$slots.h2}
  <h2 class={classNames(h2Class, $$props.classH2)}><slot name="h2" /></h2>
{/if}
{#if $$slots.paragraph}
  <slot name="paragraph" />
{/if}
