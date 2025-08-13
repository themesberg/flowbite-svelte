<script lang="ts">
  import clsx from "clsx";
  import { type TagsProps, CloseButton, P } from "$lib";
  import { tags } from "./theme";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";
  import { computePosition, offset, flip, shift, autoUpdate } from "@floating-ui/dom";
  import { onDestroy } from "svelte";

  let { value = $bindable([]), placeholder = "Enter tags", class: className, classes, itemClass, spanClass, closeClass, inputClass, closeBtnSize = "xs", unique = false, availableTags = [], showHelper = false, showAvailableTags = false, allowNewTags = true, ...restProps }: TagsProps = $props();

  warnThemeDeprecation("Tags", { itemClass, spanClass, closeClass, inputClass }, { itemClass: "tag", spanClass: "span", closeClass: "close", inputClass: "input" });
  const styling = $derived(
    classes ?? {
      tag: itemClass,
      span: spanClass,
      close: closeClass,
      input: inputClass
    }
  );

  const theme = getTheme("tags");

  const { base, tag: tagCls, span: spanCls, close, input: inputCls, info, warning, error } = $derived(tags());

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

  const checkDropdownPosition = () => {
    if (!inputContainer) return;
  };

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

  const handleInput = () => {
    checkDropdownPosition();
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
</script>

<svelte:window on:scroll={checkDropdownPosition} on:resize={checkDropdownPosition} />

{#if showAvailableTags && availableTags.length > 0}
  <P class={clsx(info(), classes?.info)}>Available tags: {availableTags.join(", ")}</P>
{/if}

{#if showHelper && contents.trim().length > 0}
  {#if unique && value.some((tag) => tag.toLowerCase() === contents.trim().toLowerCase())}
    <P class={clsx(warning(), classes?.warning)}>"{contents.trim()}" is already added.</P>
  {:else if availableTags.length > 0 && !allowNewTags && !availableTags.some((tag) => tag.toLowerCase() === contents.trim().toLowerCase())}
    <P class={clsx(error(), classes?.error)}>"{contents.trim()}" is not in the available tags.</P>
  {/if}
{/if}

<div
  {...restProps}
  class={base({
    class: clsx(theme?.base, className)
  })}
>
  {#each value as tag, index}
    <div class={tagCls({ class: clsx(theme?.tag, styling.tag) })}>
      <span class={spanCls({ class: clsx(theme?.span, styling.span) })}>
        {tag}
      </span>
      <CloseButton size={closeBtnSize} class={close({ class: clsx(theme?.close, styling.close) })} onclick={() => deleteField(index)} />
    </div>
  {/each}
  <div class="relative w-full" bind:this={inputContainer}>
    <input bind:this={inputElement} onkeydown={handleKeys} oninput={handleInput} bind:value={contents} placeholder={value.length === 0 ? placeholder : ""} type="text" autocomplete="off" class={inputCls({ class: clsx(styling.input) })} />
    {#if availableTags.length > 0 && contents.trim() !== ""}
      {@const filteredSuggestions = availableTags.filter((tag) => tag.toLowerCase().includes(contents.trim().toLowerCase()) && (!unique || !value.some((t) => t.toLowerCase() === tag.toLowerCase())))}
      {#if filteredSuggestions.length > 0}
        <ul bind:this={dropdownElement} class="z-10 max-h-48 w-full overflow-auto rounded border border-gray-300 bg-white shadow" style="position: absolute;">
          {#each filteredSuggestions as suggestion}
            <li>
              <button
                type="button"
                class="block w-full cursor-pointer px-3 py-2 text-left hover:bg-gray-100"
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
[TagsProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L879)
## Props
@prop value = $bindable([])
@prop placeholder = "Enter tags"
@prop class: className
@prop classes
@prop itemClass
@prop spanClass
@prop closeClass
@prop inputClass
@prop closeBtnSize = "xs"
@prop unique = false
@prop availableTags = []
@prop showHelper = false
@prop showAvailableTags = false
@prop allowNewTags = true
@prop ...restProps
-->
