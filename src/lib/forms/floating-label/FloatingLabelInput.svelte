<script lang="ts">
  import { idGenerator } from "../../utils";
  import { floatingLabelInput } from ".";
  import clsx from "clsx";
  import { type FloatingLabelInputProps, CloseButton } from "$lib";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";
  import { createDismissableContext } from "$lib/utils/dismissable";

  let { children, id = idGenerator(), value = $bindable(), elementRef = $bindable(), variant = "standard", size = "default", color = "default", class: className, classes, inputClass, labelClass, clearable, clearableSvgClass, clearableColor = "none", clearableClass, clearableOnClick, data = [], maxSuggestions = 5, onSelect, comboClass, ...restProps }: FloatingLabelInputProps = $props();

  warnThemeDeprecation("FloatingLabelInput", { inputClass, labelClass, clearableSvgClass, clearableClass, comboClass }, { inputClass: "input", labelClass: "label", clearableSvgClass: "svg", clearableClass: "close", comboClass: "combo" });
  const styling = $derived(classes ?? { input: inputClass, label: labelClass, svg: clearableSvgClass, close: clearableClass, combo: comboClass });

  const theme = getTheme("floatingLabelInput");

  const { base, input, label, close, combo } = $derived(floatingLabelInput({ variant, size, color }));

  const clearAll = () => {
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
</script>

{#if clearable}
  <div tabindex="-1" bind:this={dummyFocusDiv} class="sr-only"></div>
{/if}

<div class={base({ class: clsx(isCombobox ? "relative" : "", theme?.base, className) })}>
  <input {id} placeholder=" " bind:value bind:this={elementRef} {...restProps} class={input({ class: clsx(theme?.input, styling.input) })} oninput={handleInput} onfocus={handleFocus} onblur={handleBlur} onkeydown={handleKeydown} />
  {#if value !== undefined && value !== "" && clearable}
    <CloseButton class={close({ class: clsx(theme?.close, styling.close) })} color={clearableColor} aria-label="Clear search value" svgClass={clsx(styling.svg)} />
  {/if}
  <label for={id} class={label({ class: clsx(theme?.label, styling.label) })}>
    {@render children()}
  </label>

  {#if isCombobox && isFocused && filteredSuggestions.length > 0}
    <div class={combo({ class: clsx(theme?.combo, styling.combo) })}>
      {#each filteredSuggestions as item, i}
        <button type="button" class="w-full px-3 py-2 text-left {i === selectedIndex ? 'bg-gray-100 dark:bg-gray-700' : 'hover:bg-gray-50 dark:hover:bg-gray-700'} focus:outline-none" onclick={() => selectItem(item)} onmouseenter={() => (selectedIndex = i)}>
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
[FloatingLabelInputProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L703)
## Props
@prop children
@prop id = idGenerator()
@prop value = $bindable()
@prop elementRef = $bindable()
@prop variant = "standard"
@prop size = "default"
@prop color = "default"
@prop class: className
@prop classes
@prop inputClass
@prop labelClass
@prop clearable
@prop clearableSvgClass
@prop clearableColor = "none"
@prop clearableClass
@prop clearableOnClick
@prop data = []
@prop maxSuggestions = 5
@prop onSelect
@prop comboClass
@prop ...restProps
-->
