<script lang="ts">
  import { getContext } from "svelte";
  import clsx from "clsx";
  import type { InputProps, InputValue } from "$lib";
  import { getButtonGroupContext } from "$lib/context";
  import CloseButton from "$lib/utils/CloseButton.svelte";
  import { input } from "./theme";
  import { clampSize } from "./index";
  import { getTheme } from "$lib/theme-provider/themeUtils";
  import { createDismissableContext } from "$lib/utils/dismissable";

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
    classes,
    clearableOnClick,
    data = [],
    maxSuggestions = 5,
    onSelect,
    oninput,
    onfocus,
    onblur,
    onkeydown,
    closeButtonProps,
    ...restProps
  }: InputProps<InputValue> = $props();

  const styling = $derived(classes);

  const theme = $derived(getTheme("input"));

  // onSelect is a custom combobox selection handler that takes a string
  // Derive event handler props (using lowercase DOM event names: oninput, onfocus, onblur, onkeydown)
  const resolvedOnInput = $derived(oninput);
  const resolvedOnFocus = $derived(onfocus);
  const resolvedOnBlur = $derived(onblur);
  const resolvedOnKeydown = $derived(onkeydown);

  // Automatically enable combobox when data is provided
  const isCombobox = $derived(Array.isArray(data) && data.length > 0);

  // tinted if put in component having its own background
  let background: boolean = getContext("background");

  // svelte-ignore non_reactive_update
  let dummyFocusDiv: HTMLDivElement;

  let group = $derived(getButtonGroupContext());
  let isGroup = $derived(!!group);
  let _size = $derived(size || (group?.size ? clampSize(group.size) : undefined) || "md");
  const _color = $derived(color === "default" && background ? "tinted" : color);
  const { base, input: inputCls, leftAddon, rightAddon, closeButton, comboList, option } = $derived(input({ size: _size, color: _color, grouped: isGroup }));

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

  function defaultHandleInput(_event: Event) {
    // Ensure value is treated as a string to safely check its length
    const currentValueAsString = String(value || "");
    if (currentValueAsString.length > 0) {
      backspaceUsed = false;
    }
    updateSuggestions();
  }

  function defaultHandleFocus() {
    isFocused = true;
    updateSuggestions();
  }

  function defaultHandleBlur() {
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
    defaultHandleFocus();
  }

  function handleBlur(event: FocusEvent) {
    if (resolvedOnBlur) {
      resolvedOnBlur(event);
    }
    defaultHandleBlur();
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

{#if isCombobox || right || left || clearable}
  <div class={base({ class: clsx(theme?.base, className) })} data-scope="input" data-part="base">
    {#if left}
      <div class={leftAddon({ class: clsx(theme?.leftAddon, styling?.leftAddon) })} data-part="left-addon">
        {@render left()}
      </div>
    {/if}
    {@render inputContent(true)}
    {#if right}
      <div class={rightAddon({ class: clsx(theme?.rightAddon, styling?.rightAddon) })} data-part="right-addon">
        {@render right()}
      </div>
    {/if}

    {#if isCombobox && isFocused && filteredSuggestions.length > 0}
      <div class={comboList({ class: clsx(theme?.comboList, styling?.comboList) })} data-part="combo-list">
        {#each filteredSuggestions as item, i (item)}
          <button
            type="button"
            class="w-full px-3 py-2 text-left {i === selectedIndex ? 'bg-gray-100 dark:bg-gray-700' : 'hover:bg-gray-50 dark:hover:bg-gray-700'} focus:outline-none"
            onclick={() => selectItem(item)}
            onmouseenter={() => (selectedIndex = i)}
            data-part="option"
          >
            <p class={option({ class: clsx(theme?.option, styling?.option) })}>{item}</p>
          </button>
        {/each}
      </div>
    {/if}
  </div>
{:else}
  {@render inputContent(false)}
{/if}

{#snippet inputContent(wrapped: boolean)}
  {#if children}
    {@render children({ ...restProps, class: inputCls() })}
  {:else}
    <input
      {...restProps}
      bind:value
      bind:this={elementRef}
      oninput={handleInput}
      onfocus={handleFocus}
      onblur={handleBlur}
      onkeydown={handleKeydown}
      class={clsx(!wrapped && base(), inputCls({ class: clsx(theme?.input, className) }))}
      data-part="input"
    />
    {#if value !== undefined && value !== "" && clearable}
      <CloseButton {...finalCloseProps} data-part="close-button" />
    {/if}
  {/if}
{/snippet}
