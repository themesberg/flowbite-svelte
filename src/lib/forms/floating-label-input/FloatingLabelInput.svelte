<script lang="ts">
  import { idGenerator } from "../../uiHelpers.svelte";
  import { floatingLabelInput } from ".";
  import { type FloatingLabelInputProps, CloseButton } from "$lib";
  import clsx from "clsx";

  let { children, id = idGenerator(), value = $bindable(), elementRef = $bindable(), "aria-describedby": ariaDescribedby, variant = "standard", size = "default", color = "default", class: divClass, inputClass, labelClass, clearable, clearableSvgClass, clearableColor = "none", clearableClass, clearableOnClick, data = [], maxSuggestions = 5, onSelect, ...restProps }: FloatingLabelInputProps = $props();

  const { base, input, label, clearbtn } = $derived(floatingLabelInput({ variant, size, color }));

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

    const searchTerm = ((value as string) || "").toLowerCase();

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
    value = item;
    if (onSelect) onSelect(item);
    filteredSuggestions = [];
    selectedIndex = -1;
    elementRef?.focus();
  }
</script>

{#if clearable}
  <div tabindex="-1" bind:this={dummyFocusDiv} class="sr-only"></div>
{/if}

<div class={clsx(base({ class: clsx(divClass) }), isCombobox ? "relative" : "")}>
  <input {id} placeholder=" " bind:value bind:this={elementRef} {...restProps} aria-describedby={ariaDescribedby} class={input({ class: inputClass })} oninput={handleInput} onfocus={handleFocus} onblur={handleBlur} onkeydown={handleKeydown} />
  {#if value !== undefined && value !== "" && clearable}
    <CloseButton onclick={clearAll} class={clearbtn({ class: clearableClass })} color={clearableColor} aria-label="Clear search value" svgClass={clearableSvgClass} />
  {/if}
  <label for={id} class={label({ class: labelClass })}>
    {@render children()}
  </label>

  {#if isCombobox && isFocused && filteredSuggestions.length > 0}
    <div class="absolute top-full right-0 left-0 z-10 mt-1 max-h-60 overflow-y-auto rounded-md border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
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
[FloatingLabelInputProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L709)
## Props
@prop children
@prop id = idGenerator()
@prop value = $bindable()
@prop elementRef = $bindable()
@prop "aria-describedby": ariaDescribedby
@prop variant = "standard"
@prop size = "default"
@prop color = "default"
@prop class: divClass
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
@prop ...restProps
-->
