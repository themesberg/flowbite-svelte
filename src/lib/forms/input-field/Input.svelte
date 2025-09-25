<script lang="ts">
  import { getContext } from "svelte";
  import clsx from "clsx";
  import { CloseButton, type SizeType, type InputProps, type InputValue } from "$lib";
  import { input } from "./theme";
  import { clampSize } from "./index";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";
  import { createDismissableContext } from "$lib/utils/dismissable";

  let { children, left, right, value = $bindable(), elementRef = $bindable(), clearable = false, size, color = "default", class: className, classes, wrapperClass, leftClass, rightClass, divClass, clearableSvgClass, clearableColor = "none", clearableClass, clearableOnClick, data = [], maxSuggestions = 5, onSelect, comboClass, comboItemClass, onInput, onFocus, onBlur, onKeydown, oninput, onfocus, onblur, onkeydown, ...restProps }: InputProps<InputValue> = $props();

  // input, left, right, close, combo, comboItem, div, svg
  warnThemeDeprecation("Input", { wrapperClass, leftClass, rightClass, divClass, clearableSvgClass, clearableClass, comboClass }, { wrapperClass: "wrapper", leftClass: "left", rightClass: "right", divClass: "div", clearableSvgClass: "svg", clearableClass: "close", comboClass: "comboItem" });

  const styling = $derived(classes ?? { left: leftClass, right: rightClass, div: divClass, svg: clearableSvgClass, close: clearableClass, combo: comboClass, comboItem: comboItemClass });

  const theme = getTheme("input");

  // onSelect is a custom combobox selection handler that takes a string
  // standard DOM events, onInput, onFocus, onBlur, onKeydown will be deprecated in the next minor version
  const resolvedOnInput = $derived(oninput || onInput);
  const resolvedOnFocus = $derived(onfocus || onFocus);
  const resolvedOnBlur = $derived(onblur || onBlur);
  const resolvedOnKeydown = $derived(onkeydown || onKeydown);

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

  const { base, input: inputCls, left: leftCls, right: rightCls, close, combo, comboItem } = $derived(input({ size: _size, color: _color, grouped: isGroup }));

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

  createDismissableContext(clearAll);

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

    const fullSearchTerm = ((value as string) || "").toLowerCase();
    const lastSpaceIndex = fullSearchTerm.lastIndexOf(" ");
    const searchTerm = lastSpaceIndex === -1 ? fullSearchTerm : fullSearchTerm.substring(lastSpaceIndex + 1);

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

  function defaultHandleInput(event: Event) {
    // Ensure value is treated as a string to safely check its length
    const currentValueAsString = String(value || "");
    if (currentValueAsString.length > 0) {
      backspaceUsed = false;
    }
    updateSuggestions();
  }

  function defaultHandleFocus(event: FocusEvent) {
    isFocused = true;
    updateSuggestions();
  }

  function defaultHandleBlur(event: FocusEvent) {
    // Small delay to allow click on suggestion to fire first
    setTimeout(() => {
      isFocused = false;
      backspaceUsed = false; // Reset flag when focus is lost
      filteredSuggestions = [];
    }, 200);
  }

  function defaultHandleKeydown(event: KeyboardEvent) {
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

  // Combined event handlers that call custom handlers first, then default behavior
  function handleInput(event: Event) {
    if (resolvedOnInput) {
      resolvedOnInput(event);
    }
    defaultHandleInput(event);
  }

  function handleFocus(event: FocusEvent) {
    if (resolvedOnFocus) {
      resolvedOnFocus(event);
    }
    defaultHandleFocus(event);
  }

  function handleBlur(event: FocusEvent) {
    if (resolvedOnBlur) {
      resolvedOnBlur(event);
    }
    defaultHandleBlur(event);
  }

  function handleKeydown(event: KeyboardEvent) {
    if (resolvedOnKeydown) {
      resolvedOnKeydown(event);
    }
    defaultHandleKeydown(event);
  }

  function selectItem(item: string) {
    const currentValue = (value as string) || "";
    const lastSpaceIndex = currentValue.lastIndexOf(" ");

    if (lastSpaceIndex === -1) {
      value = item + " "; // Replace the whole value if no space, add trailing space
    } else {
      value = currentValue.substring(0, lastSpaceIndex + 1) + item + " "; // Replace last word, add trailing space
    }

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

{#if isCombobox || right || left || clearable}
  <div class={base({ class: clsx(theme?.base, styling.div) })}>
    {#if left}
      <div class={leftCls({ class: clsx(theme?.left, styling.left) })}>
        {@render left()}
      </div>
    {/if}
    {@render inputContent()}
    {#if right}
      <div class={rightCls({ class: clsx(theme?.right, styling.right) })}>
        {@render right()}
      </div>
    {/if}

    {#if isCombobox && isFocused && filteredSuggestions.length > 0}
      <div class={combo({ class: clsx(theme?.combo, styling.combo) })}>
        {#each filteredSuggestions as item, i (item)}
          <button type="button" class="w-full px-3 py-2 text-left {i === selectedIndex ? 'bg-gray-100 dark:bg-gray-700' : 'hover:bg-gray-50 dark:hover:bg-gray-700'} focus:outline-none" onclick={() => selectItem(item)} onmouseenter={() => (selectedIndex = i)}>
            <p class={comboItem({ class: clsx(theme?.comboItem, styling.comboItem) })}>{item}</p>
          </button>
        {/each}
      </div>
    {/if}
  </div>
{:else}
  {@render inputContent()}
{/if}

{#snippet inputContent()}
  {#if children}
    {@render children({ ...restProps, class: inputCls() })}
  {:else}
    <input {...restProps} bind:value bind:this={elementRef} oninput={handleInput} onfocus={handleFocus} onblur={handleBlur} onkeydown={handleKeydown} class={inputCls({ class: clsx(theme?.input, className) })} />
    {#if value !== undefined && value !== "" && clearable}
      <CloseButton class={close({ class: clsx(theme?.close, styling.close) })} color={clearableColor} aria-label="Clear search value" svgClass={clsx(styling.svg)} />
    {/if}
  {/if}
{/snippet}
