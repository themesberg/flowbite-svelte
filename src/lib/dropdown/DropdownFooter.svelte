<script lang="ts">
  import { type DropdownFooterProps as Props, dropdownFooter } from ".";

  let { children, class: className, ...restProps }: Props = $props();
  let footerClass = $derived(dropdownFooter({ class: className }));
</script>

<div class={footerClass} {...restProps}>
  {@render children()}
</div>