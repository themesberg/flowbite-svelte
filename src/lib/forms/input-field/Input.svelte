<script lang="ts">
  import { getContext } from "svelte";
  import { CloseButton, type SizeType, type InputProps, type InputValue } from "$lib";
  import { twMerge } from "tailwind-merge";
  import { input, clampSize } from ".";
  import clsx from "clsx";

  let {
    children,
    left,
    right,
    value = $bindable(),
    elementRef = $bindable(),
    clearable = false,
    size,
    color = "default",
    class: className,
    wrapperClass,
    classLeft,
    classRight,
    divClass,
    clearableSvgClass,
    clearableColor = "none",
    clearableClass,
    clearableOnClick,
    // Combobox props
    data = [],
    maxSuggestions = 5,
    onSelect,
    ...restProps
  }: InputProps<InputValue> = $props();

  // Automatically enable combobox when data is provided
  const isCombobox = $derived(Array.isArray(data) && data.length > 0);

  // tinted if put in component having its own background
  let background: boolean = getContext("background");

  // svelte-ignore non_reactive_update
  let dummyFocusDiv: HTMLDivElement;

  let group: { size: SizeType } = getContext("group");
  let isGroup = !!group;
  let _size = $derived(size || clampSize(group?.size) || "md");
  const _color = $derived(color === "default" && background ? "tinted" : color);

  const { base, input: inputCls, left: leftCls, right: rightCls, clearbtn } = $derived(input({ size: _size, color: _color, group: isGroup, class: clsx(className) }));

  const clearAll = () => {
    if (elementRef) {
      // in order to avoid type error in setTimeout()
      const input = elementRef;
      input.value = "";
      value = "";

      backspaceUsed = false;
      updateSuggestions();
      // hack to focus outside
      dummyFocusDiv?.focus();
      setTimeout(() => {
        input.focus();
      }, 100);
    }

    if (clearableOnClick) clearableOnClick();
  };

  // Combobox functionality
  let isFocused = $state(false);
  let filteredSuggestions: string[] = $state([]);
  let selectedIndex = $state(-1);
  let backspaceUsed = $state(false); // Track if backspace was used to clear

  function updateSuggestions() {
    if (!isCombobox || !isFocused) {
      filteredSuggestions = [];
      return;
    }

    const searchTerm = ((value as string) || "").toLowerCase();

    // Show suggestions if:
    // 1. There's actual input text, OR
    // 2. The input is empty but backspace was just used to clear it
    if (searchTerm === "" && !backspaceUsed) {
      filteredSuggestions = [];
    } else {
      // If there's text, filter suggestions
      if (searchTerm) {
        filteredSuggestions = data.filter((item) => item.toLowerCase().includes(searchTerm)).slice(0, maxSuggestions);
      }
      // If empty but backspace was used, show all suggestions
      else if (backspaceUsed) {
        filteredSuggestions = [...data].slice(0, maxSuggestions);
      }
    }

    selectedIndex = -1;
  }

  // Watch for value changes
  $effect(() => {
    if (isCombobox) {
      updateSuggestions();
    }
  });

  function handleInput() {
    // Reset backspace flag if user starts typing again
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
    // Small delay to allow click on suggestion to fire first
    setTimeout(() => {
      isFocused = false;
      backspaceUsed = false; // Reset flag when focus is lost
      filteredSuggestions = [];
    }, 200);
  }

  function handleKeydown(event: KeyboardEvent) {
    if (!isCombobox) return;

    // Special handling for backspace/delete - track when it's used to clear the input
    if (event.key === "Backspace" || event.key === "Delete") {
      const currentValue = value as string;
      // If this keypress will make the input empty
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

    if (onSelect) {
      onSelect(item);
    }

    filteredSuggestions = [];
    selectedIndex = -1;

    if (elementRef) {
      elementRef.focus();
    }
  }
</script>

{#if clearable}
  <div tabindex="-1" bind:this={dummyFocusDiv} class="sr-only"></div>
{/if}

<div class={twMerge(isCombobox ? "relative w-full" : "", wrapperClass)}>
  {#if group}
    {@render inputContent()}
  {:else if right || left || clearable}
    <div class={base({ class: divClass })}>
      {@render inputContent()}
    </div>
  {:else}
    {@render inputContent()}
  {/if}

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

{#snippet inputContent()}
  {#if left}
    <div class={leftCls({ class: classLeft })}>
      {@render left()}
    </div>
  {/if}
  {#if children}
    {@render children({ ...restProps, class: inputCls() })}
  {:else}
    <input {...restProps} bind:value bind:this={elementRef} oninput={handleInput} onfocus={handleFocus} onblur={handleBlur} onkeydown={handleKeydown} class={inputCls({ class: clsx(className) })} />
    {#if value !== undefined && value !== "" && clearable}
      <CloseButton onclick={clearAll} class={clearbtn({ class: clearableClass })} color={clearableColor} aria-label="Clear search value" svgClass={clearableSvgClass} />
    {/if}
  {/if}
  {#if right}
    <div class={rightCls({ class: classRight })}>
      {@render right()}
    </div>
  {/if}
{/snippet}
