<script lang="ts">
  import { type DropdownDividerProps as Props, dropdowndivider } from './';

  let { class: divClass, ...attributes }: Props = $props();
  const base = dropdowndivider({ class: divClass });
</script>

<div
  {...attributes}
  class={base}
></div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop class: divClass
@prop ...attributes
-->
