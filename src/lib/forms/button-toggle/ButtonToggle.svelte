<script lang="ts">
  import { getContext } from "svelte";
  import CheckIcon from "./CheckIcon.svelte";
  import { buttonToggle, buttonToggleContent, buttonToggleText } from "./theme";
  import type { ButtonToggleVariants } from "./theme";
  import { type ButtonToggleProps, type ButtonToggleContext } from "$lib";

  let { value, selected = false, children, color }: ButtonToggleProps = $props();

  const { toggleSelected, isSelected } = getContext<ButtonToggleContext>("button-toggle-group");
  const multiSelect = getContext<boolean>("multiSelect");
  const actualColor = getContext<ButtonToggleVariants["color"]>("buttonToggleColor") ? getContext<ButtonToggleVariants["color"]>("buttonToggleColor") : color ? color : "primary";
  const size = getContext<ButtonToggleVariants["size"]>("buttonToggleSize");
  const roundedSize = getContext<ButtonToggleVariants["roundedSize"]>("buttonToggleRounded");

  function handleClick() {
    toggleSelected(value);
  }

  $effect(() => {
    selected = isSelected(value);
  });
</script>

<button type="button" class={buttonToggle({ selected, color: actualColor, size, roundedSize })} data-selected={selected} onclick={handleClick} role={multiSelect ? "checkbox" : "radio"} aria-checked={selected}>
  <div class={buttonToggleContent()}>
    {#if selected}
      <span class="absolute left-0 flex-shrink-0">
        <CheckIcon />
      </span>
    {/if}
    <span class={buttonToggleText({ selected })}>
      {@render children()}
    </span>
  </div>
</button>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ButtonToggleProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L372)
## Props
@prop value
@prop selected = false
@prop children
@prop color
-->
