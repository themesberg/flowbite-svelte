<script lang="ts">
  import type { PhoneInputProps } from "$lib";
  import { phoneInput } from "./theme";
  import clsx from "clsx";
  import { getTheme } from "$lib/theme-provider/themeUtils";

  let {
    children,
    phoneIcon = true,
    pattern,
    phoneType = "default",
    floatingLabel = "Phone number",
    labelFor = "floating-phone-number",
    class: className,
    classes,
    value = $bindable(""),
    ...restProps
  }: PhoneInputProps = $props();

  // Set default pattern if not provided
  const inputPattern = $derived(pattern ?? "[0-9]{3}-[0-9]{3}-[0-9]{4}");

  const theme = $derived(getTheme("phoneInput"));

  const { iconWrapper, icon, input, floatingIconWrapper, floatingInput, label } = $derived(phoneInput({ phoneType, phoneIcon }));
</script>

{#snippet phoneIconSnippet()}
  <svg data-part="icon" class={icon({ class: clsx(theme?.icon) })} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
    <path
      d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z"
    />
  </svg>
{/snippet}

{#if phoneType === "default" || phoneType === "countryCode"}
  <div data-scope="phone-input" data-part="base" class="relative">
    {#if phoneIcon}
      <div data-part="icon-wrapper" class={iconWrapper({ class: clsx(theme?.iconWrapper, classes?.iconWrapper) })}>
        {@render phoneIconSnippet()}
      </div>
    {/if}
    <input data-part="input" type="tel" pattern={inputPattern} bind:value {...restProps} class={input({ class: clsx(theme?.input, classes?.input) })} />
  </div>
{:else if phoneType === "floating"}
  <div data-scope="phone-input" data-part="base" class="relative">
    {#if phoneIcon}
      <span data-part="floating-icon-wrapper" class={floatingIconWrapper({ class: clsx(theme?.floatingIconWrapper, classes?.floatingIconWrapper) })}>
        {@render phoneIconSnippet()}
      </span>
    {/if}
    <input data-part="floating-input" type="tel" pattern={inputPattern} bind:value {...restProps} class={floatingInput({ class: clsx(theme?.floatingInput, classes?.floatingInput) })} />
    <label data-part="label" for={labelFor} class={label({ class: clsx(theme?.label, classes?.label) })}>{floatingLabel}</label>
  </div>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[PhoneInputProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L826)
## Props
@prop children
@prop phoneIcon = true
@prop pattern
@prop phoneType = "default"
@prop floatingLabel = "Phone number"
@prop labelFor = "floating-phone-number"
@prop class: className
@prop classes
@prop value = $bindable("")
@prop ...restProps
-->
