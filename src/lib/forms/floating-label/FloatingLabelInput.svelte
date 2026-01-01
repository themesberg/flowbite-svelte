<script lang="ts">
  import { idGenerator } from "../../utils";
  import { floatingLabelInput } from "./theme";
  import clsx from "clsx";
  import type { FloatingLabelInputProps } from "$lib";
  import CloseButton from "$lib/utils/CloseButton.svelte";
  import { getTheme } from "$lib/theme-provider/themeUtils";
  import { createDismissableContext } from "$lib/utils/dismissable";

  let {
    children,
    id = idGenerator(),
    value = $bindable(),
    elementRef = $bindable(),
    variant = "standard",
    size = "default",
    validation = "none",
    disabled = false,
    withIcon = false,
    class: className,
    classes,
    clearable,
    clearableOnClick,
    data = [],
    maxSuggestions = 5,
    onSelect,
    placeholder,
    closeButtonProps,
    ...restProps
  }: FloatingLabelInputProps = $props();

  const styling = $derived(classes);

  const theme = $derived(getTheme("floatingLabelInput"));

  const { base, input, label, closeButton, comboList } = $derived(floatingLabelInput({ variant, size, validation, disabled, withIcon }));

  // Track if clear button should be shown
  const showClearButton = $derived(clearable && value !== undefined && value !== "");

  const clearAll = (_event?: MouseEvent) => {
    if (elementRef) {
      elementRef.value = "";
      value = "";
      backspaceUsed = false;
      updateSuggestions();
      dummyFocusDiv?.focus();
      setTimeout(() => {
        elementRef?.focus();
      }, 100);
    }
    if (clearableOnClick) clearableOnClick();
  };

  const isCombobox = $derived(Array.isArray(data) && data.length > 0);

  // svelte-ignore non_reactive_update
  let dummyFocusDiv: HTMLDivElement;

  let isFocused = $state(false);
  let filteredSuggestions: string[] = $state([]);
  let selectedIndex = $state(-1);
  let backspaceUsed = $state(false);

  function updateSuggestions() {
    if (!isCombobox || !isFocused) {
      filteredSuggestions = [];
      return;
    }

    const fullSearchTerm = ((value as string) || "").toLowerCase();
    const lastSpaceIndex = fullSearchTerm.lastIndexOf(" ");
    const searchTerm = lastSpaceIndex === -1 ? fullSearchTerm : fullSearchTerm.substring(lastSpaceIndex + 1);

    if (searchTerm === "" && !backspaceUsed) {
      filteredSuggestions = [];
    } else if (searchTerm) {
      filteredSuggestions = data.filter((item) => item.toLowerCase().includes(searchTerm)).slice(0, maxSuggestions);
    } else if (backspaceUsed) {
      filteredSuggestions = [...data].slice(0, maxSuggestions);
    }

    selectedIndex = -1;
  }

  $effect(() => {
    if (isCombobox) {
      updateSuggestions();
    }
  });

  function handleInput() {
    if ((value as string).length > 0) {
      backspaceUsed = false;
    }
    updateSuggestions();
  }

  function handleFocus() {
    isFocused = true;
    updateSuggestions();
  }

  function handleBlur() {
    setTimeout(() => {
      isFocused = false;
      backspaceUsed = false;
      filteredSuggestions = [];
    }, 200);
  }

  function handleKeydown(event: KeyboardEvent) {
    if (!isCombobox) return;

    if (event.key === "Backspace" || event.key === "Delete") {
      const currentValue = value as string;
      if (currentValue.length <= 1) {
        backspaceUsed = true;
      }
    }

    if (!filteredSuggestions.length) return;

    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        selectedIndex = (selectedIndex + 1) % filteredSuggestions.length;
        break;
      case "ArrowUp":
        event.preventDefault();
        selectedIndex = selectedIndex <= 0 ? filteredSuggestions.length - 1 : selectedIndex - 1;
        break;
      case "Enter":
        if (selectedIndex >= 0) {
          event.preventDefault();
          selectItem(filteredSuggestions[selectedIndex]);
        }
        break;
      case "Escape":
        event.preventDefault();
        filteredSuggestions = [];
        break;
    }
  }

  function selectItem(item: string) {
    const currentValue = (value as string) || "";
    const lastSpaceIndex = currentValue.lastIndexOf(" ");

    if (lastSpaceIndex === -1) {
      value = item + " "; // Replace the whole value if no space, add trailing space
    } else {
      value = currentValue.substring(0, lastSpaceIndex + 1) + item + " "; // Replace last word, add trailing space
    }

    if (onSelect) onSelect(item);
    filteredSuggestions = [];
    selectedIndex = -1;
    elementRef?.focus();
  }

  createDismissableContext(clearAll);

  const finalCloseProps = $derived({
    class: closeButton({ class: clsx(theme?.closeButton, styling?.closeButton) }),
    color: closeButtonProps?.color ?? "gray",
    ariaLabel: closeButtonProps?.ariaLabel ?? "Clear search value",
    size: closeButtonProps?.size,
    classes: closeButtonProps?.classes ?? { svg: clsx(theme?.closeIcon, styling?.closeIcon) },
    name: closeButtonProps?.name,
    onclick: closeButtonProps?.onclick
  });
</script>

{#if clearable}
  <div tabindex="-1" bind:this={dummyFocusDiv} class="sr-only"></div>
{/if}

<div class={base({ class: clsx(isCombobox ? "relative" : "", theme?.base, className) })} data-scope="floating-label-input" data-part="base">
  <input
    {id}
    {disabled}
    placeholder=" "
    bind:value
    bind:this={elementRef}
    {...restProps}
    class={input({ class: clsx(theme?.input, styling?.input) })}
    oninput={handleInput}
    onfocus={handleFocus}
    onblur={handleBlur}
    onkeydown={handleKeydown}
    data-scope="floating-label-input"
    data-part="input"
  />
  {#if showClearButton}
    <CloseButton {...finalCloseProps} data-scope="floating-label-input" data-part="close-button" />
  {/if}
  <label for={id} class={label({ class: clsx(theme?.label, styling?.label) })} data-scope="floating-label-input" data-part="label">
    {@render children()}
  </label>

  {#if isCombobox && isFocused && filteredSuggestions.length > 0}
    <div class={comboList({ class: clsx(theme?.comboList, styling?.comboList) })} data-scope="floating-label-input" data-part="combo-list">
      {#each filteredSuggestions as item, i (item)}
        <button
          type="button"
          class="w-full px-3 py-2 text-left {i === selectedIndex ? 'bg-gray-100 dark:bg-gray-700' : 'hover:bg-gray-50 dark:hover:bg-gray-700'} focus:outline-none"
          onclick={() => selectItem(item)}
          onmouseenter={() => (selectedIndex = i)}
          data-scope="floating-label-input"
          data-part="option"
        >
          {item}
        </button>
      {/each}
    </div>
  {/if}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[FloatingLabelInputProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L775)
## Props
@prop children
@prop id = idGenerator()
@prop value = $bindable()
@prop elementRef = $bindable()
@prop variant = "standard"
@prop size = "default"
@prop validation = "none"
@prop disabled = false
@prop withIcon = false
@prop class: className
@prop classes
@prop clearable
@prop clearableOnClick
@prop data = []
@prop maxSuggestions = 5
@prop onSelect
@prop placeholder
@prop closeButtonProps
@prop ...restProps
-->
