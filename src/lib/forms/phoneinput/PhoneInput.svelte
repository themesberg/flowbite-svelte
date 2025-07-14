<script lang="ts">
  import { type PhoneInputProps, cn } from "$lib";
  import { phoneinput, type PhoneInputTheme } from ".";
  import clsx from "clsx";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, phoneIcon = true, pattern = "[0-9]{3}-[0-9]{3}-[0-9]{4}", phoneType = "default", floatingLabel = "Phone number", labelFor = "floating-phone-number", classes, ...restProps }: PhoneInputProps = $props();

  const theme = getTheme("phoneInput");

  const { defaultDiv, phonesvg, defaultInput, floatingSpan, floatingInput, labelFloating } = $derived(phoneinput({ phoneType, phoneIcon }));
</script>

{#snippet phoneIconSnippet()}
  <svg class={cn(phonesvg(), (theme as PhoneInputTheme)?.phonesvg)} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
    <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
  </svg>
{/snippet}

{#if phoneType === "default" || phoneType === "countryCode"}
  <div class="relative">
    {#if phoneIcon}
      <div class={cn(defaultDiv({ class: clsx(classes?.defaultDiv) }), (theme as PhoneInputTheme)?.defaultDiv)}>
        {@render phoneIconSnippet()}
      </div>
    {/if}
    <input type="tel" {pattern} {...restProps} class={cn(defaultInput({ class: clsx(classes?.defaultInput) }), (theme as PhoneInputTheme)?.defaultInput)} />
  </div>
{:else if phoneType === "floating"}
  <div class="relative">
    {#if phoneIcon}
      <span class={cn(floatingSpan({ class: clsx(classes?.floatingSpan) }), (theme as PhoneInputTheme)?.floatingSpan)}>
        {@render phoneIconSnippet()}
      </span>
    {/if}
    <input type="tel" class={cn(floatingInput({ class: clsx(classes?.floatingInput) }), (theme as PhoneInputTheme)?.floatingInput)} {pattern} {...restProps} />
    <label for={labelFor} class={cn(labelFloating({ class: clsx(classes?.labelFloating) }), (theme as PhoneInputTheme)?.labelFloating)}>{floatingLabel}</label>
  </div>
{/if}
