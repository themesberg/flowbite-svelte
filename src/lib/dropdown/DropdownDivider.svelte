<script lang="ts">
  import { type DropdownDividerProps as Props, dropdownDivider } from './';

  let { class: divClass, ...restProps }: Props = $props();
  const base = dropdownDivider({ class: divClass });
</script>

<div {...restProps} class={base}></div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@props: class: string;
-->
