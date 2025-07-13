<script lang="ts">
  import { search, type SearchTheme } from ".";
  import { CloseButton, type SearchProps, cn } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, inputClass, size, placeholder = "Search", value = $bindable(), elementRef = $bindable(), clearable = false, clearableSvgClass, clearableColor = "none", clearableClass, clearableOnClick, ...restProps }: SearchProps = $props();

  const theme = getTheme("search");

  const { base, content, icon, closebutton, input: inputCls, leftDiv } = $derived(search({ size }));

  const clearAll = () => {
    if (elementRef) {
      elementRef.value = "";
      value = undefined;
    }
    if (clearableOnClick) clearableOnClick();
  };
</script>

<div class={cn(base(), (theme as SearchTheme)?.base)}>
  <div class={cn(leftDiv(), (theme as SearchTheme)?.leftDiv)}>
    <svg class={cn(icon(), (theme as SearchTheme)?.icon)} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
    </svg>
  </div>
  <input type="search" bind:value bind:this={elementRef} class={cn(inputCls(), inputClass, (theme as SearchTheme)?.input)} {placeholder} required {...restProps} />
  {#if children}
    <div class={cn(content(), (theme as SearchTheme)?.content)}>
      {@render children()}
    </div>
  {/if}
  {#if value !== undefined && value !== "" && clearable}
    <CloseButton onclick={clearAll} class={cn(closebutton(), clearableClass, (theme as SearchTheme)?.closebutton)} color={clearableColor} aria-label="Clear search value" svgClass={cn(clearableSvgClass)} />
  {/if}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[SearchProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L854)
## Props
@prop children
@prop inputClass
@prop size
@prop placeholder = "Search"
@prop value = $bindable()
@prop elementRef = $bindable()
@prop clearable = false
@prop clearableSvgClass
@prop clearableColor = "none"
@prop clearableClass
@prop clearableOnClick
@prop ...restProps
-->
