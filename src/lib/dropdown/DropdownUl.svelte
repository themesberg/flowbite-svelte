<script lang="ts">
  import { type DropdownulProps as Props, dropdownul } from '.'

  let {
    children,
    class: className,
    ...restProps
  }: Props = $props();

  const ulCls = $derived(dropdownul({ class: className }));
</script>

<ul class={ulCls} {...restProps}>
  {@render children()}
</ul>