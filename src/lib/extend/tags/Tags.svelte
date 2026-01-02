<script lang="ts">
  import clsx from "clsx";
  import type { TagsProps } from "$lib";
  import P from "$lib/typography/paragraph/P.svelte";
  import CloseButton from "$lib/utils/CloseButton.svelte";
  import { tags } from "./theme";
  import { getTheme } from "$lib/theme-provider/themeUtils";
  import { computePosition, offset, flip, shift, autoUpdate } from "@floating-ui/dom";
  import { onDestroy } from "svelte";

  let {
    value = $bindable([]),
    placeholder = "Enter tags",
    class: className,
    classes,
    unique = false,
    availableTags = [],
    showHelper = false,
    showAvailableTags = false,
    allowNewTags = true,
    inputProps = {},
    disabled,
    closeButtonProps,
    ...restProps
  }: TagsProps = $props();

  const styling = $derived(classes);

  const theme = $derived(getTheme("tags"));

  const { base, item: itemCls, label: labelCls, close, input: inputCls, info, warning, error, inputWrapper, option } = $derived(tags());

  let contents: string = $state("");
  let errorMessage: string = $state("");
  let inputElement: HTMLInputElement;
  let inputContainer: HTMLDivElement;
  // svelte-ignore non_reactive_update
  let dropdownElement: HTMLUListElement | null = null;
  let cleanupFloating: (() => void) | undefined;

  function updateDropdownPosition() {
    if (!inputContainer || !dropdownElement) return;

    cleanupFloating?.();

    cleanupFloating = autoUpdate(inputContainer!, dropdownElement!, async () => {
      const { x, y } = await computePosition(inputContainer!, dropdownElement!, {
        placement: "bottom-start",
        middleware: [offset(4), flip(), shift()]
      });

      Object.assign(dropdownElement!.style, {
        position: "absolute",
        left: `${x}px`,
        top: `${y}px`
      });
    });
  }

  const handleKeys = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const newTag = contents.trim();

      if (newTag.length === 0) return;

      // Add validation: if allowNewTags is false and availableTags is empty, show error
      if (!allowNewTags && availableTags.length === 0) {
        errorMessage = "No available tags provided. Please add available tags or enable allowNewTags.";
        return;
      }

      const isInAvailable = availableTags.length === 0 || availableTags.some((tag) => tag.toLowerCase() === newTag.toLowerCase());

      const alreadyExists = value.some((tag) => tag.toLowerCase() === newTag.toLowerCase());

      if (!allowNewTags && !isInAvailable) {
        errorMessage = `"${newTag}" is not in the available tags.`;
        return;
      }

      if (unique && alreadyExists) {
        errorMessage = `"${newTag}" is already added.`;
        return;
      }

      value = [...value, newTag];
      contents = "";
      if (inputElement) {
        inputElement.value = "";
      }
      errorMessage = "";
    }

    if (event.key === "Backspace" && contents.length === 0) {
      event.preventDefault();
      const lastTag = value[value.length - 1] ?? "";
      value = value.slice(0, -1);
      contents = lastTag;
      if (inputElement) {
        inputElement.value = lastTag;
      }
      errorMessage = "";
    }
  };

  const deleteField = (index: number) => {
    value = value.filter((_, i) => i !== index);
    errorMessage = "";
  };

  $effect(() => {
    const trimmed = contents.trim();

    const shouldShow = availableTags.length > 0 && trimmed !== "" && inputContainer && dropdownElement;

    if (!shouldShow) {
      cleanupFloating?.();
      return;
    }

    const filtered = availableTags.filter((tag) => tag.toLowerCase().includes(trimmed.toLowerCase()) && (!unique || !value.some((t) => t.toLowerCase() === tag.toLowerCase())));

    if (filtered.length > 0) {
      updateDropdownPosition();
    } else {
      cleanupFloating?.();
    }
  });

  onDestroy(() => {
    cleanupFloating?.();
  });

  const finalCloseProps = (index: number) => ({
    class: close({ class: clsx(theme?.close, styling?.close, closeButtonProps?.class) }),
    color: closeButtonProps?.color ?? "gray",
    ariaLabel: closeButtonProps?.ariaLabel ?? "Remove tag",
    disabled,
    size: closeButtonProps?.size ?? "xs",
    classes: closeButtonProps?.classes,
    name: closeButtonProps?.name,
    onclick: closeButtonProps?.onclick ?? (() => deleteField(index))
  });
</script>

<svelte:window />

{#if showAvailableTags && availableTags.length > 0}
  <P data-part="info" class={clsx(info(), styling?.info)}>Available tags: {availableTags.join(", ")}</P>
{/if}

{#if showHelper && contents.trim().length > 0}
  {#if unique && value.some((tag) => tag.toLowerCase() === contents.trim().toLowerCase())}
    <P data-part="warning" class={clsx(warning(), styling?.warning)}>"{contents.trim()}" is already added.</P>
  {:else if availableTags.length > 0 && !allowNewTags && !availableTags.some((tag) => tag.toLowerCase() === contents.trim().toLowerCase())}
    <P data-part="error" class={clsx(error(), styling?.error)}>"{contents.trim()}" is not in the available tags.</P>
  {/if}
{/if}

{#if errorMessage}
  <P data-part="error" class={clsx(error(), styling?.error)}>{errorMessage}</P>
{/if}

<div
  data-scope="tags"
  data-part="base"
  {...restProps}
  class={base({
    class: clsx(theme?.base, className)
  })}
>
  {#each value as tag, index (index)}
    <div data-part="item" class={itemCls({ class: clsx(theme?.item, styling?.item) })}>
      <span data-part="label" class={labelCls({ class: clsx(theme?.label, styling?.label) })}>
        {tag}
      </span>
      <CloseButton data-part="close-button" {...finalCloseProps(index)} />
    </div>
  {/each}
  <div data-part="input-wrapper" class={inputWrapper({ class: clsx(theme?.inputWrapper, styling?.inputWrapper)})} bind:this={inputContainer}>
    <input
      data-part="input"
      {...inputProps}
      {disabled}
      bind:this={inputElement}
      onkeydown={handleKeys}
      bind:value={contents}
      placeholder={value.length === 0 ? placeholder : ""}
      type="text"
      autocomplete="off"
      class={inputCls({ class: clsx(styling?.input) })}
    />
    {#if availableTags.length > 0 && contents.trim() !== ""}
      {@const filteredSuggestions = availableTags.filter((tag) => tag.toLowerCase().includes(contents.trim().toLowerCase()) && (!unique || !value.some((t) => t.toLowerCase() === tag.toLowerCase())))}
      {#if filteredSuggestions.length > 0}
        <ul data-part="list" bind:this={dropdownElement} class="z-10 max-h-48 w-full overflow-auto rounded border border-gray-300 bg-white shadow" style="position: absolute;">
          {#each filteredSuggestions as suggestion (suggestion)}
            <li data-part="suggestion-item">
              <button
                data-part="option"
                type="button"
                class={option({class: clsx(theme?.option, styling?.option)})}
                onclick={() => {
                  value = [...value, suggestion];
                  contents = "";
                  if (inputElement) {
                    inputElement.value = "";
                  }
                }}
              >
                {suggestion}
              </button>
            </li>
          {/each}
        </ul>
      {/if}
    {/if}
  </div>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[TagsProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L890)
## Props
@prop value = $bindable([])
@prop placeholder = "Enter tags"
@prop class: className
@prop classes
@prop unique = false
@prop availableTags = []
@prop showHelper = false
@prop showAvailableTags = false
@prop allowNewTags = true
@prop inputProps = {}
@prop disabled
@prop ...restProps
-->
