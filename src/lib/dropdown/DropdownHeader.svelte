<script lang="ts">
  import { type DropdownHeaderProps as Props, dropdownHeader } from ".";

  let { children, class: className, ...restProps }: Props = $props();
  let headerClass = $derived(dropdownHeader({ class: className }));
</script>

<div class={headerClass} {...restProps}>
  {@render children()}
</div>