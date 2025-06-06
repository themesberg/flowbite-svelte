<script lang="ts">
  import { getContext } from "svelte";
  import { CloseButton, type SizeType, type InputProps, type InputValue, cn } from "$lib";
  import { input, clampSize } from ".";

  let { children, left, right, value = $bindable(), elementRef = $bindable(), clearable = false, size, color = "default", class: className, wrapperClass, leftClass, rightClass, divClass, clearableSvgClass, clearableColor = "none", clearableClass, clearableOnClick, data = [], maxSuggestions = 5, onSelect, comboClass, comboItemClass, onInput, onFocus, onBlur, onKeydown, ...restProps }: InputProps<InputValue> = $props();

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

  const { base, input: inputCls, left: leftCls, right: rightCls, clearbtn, combo, comboItem } = $derived(input({ size: _size, color: _color, group: isGroup }));

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

  // Default event handlers
  function defaultHandleInput(event: Event) {
    // Reset backspace flag if user starts typing again
    if ((value as string).length > 0) {
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
    if (onInput) {
      onInput(event);
    }
    defaultHandleInput(event);
  }

  function handleFocus(event: FocusEvent) {
    if (onFocus) {
      onFocus(event);
    }
    defaultHandleFocus(event);
  }

  function handleBlur(event: FocusEvent) {
    if (onBlur) {
      onBlur(event);
    }
    defaultHandleBlur(event);
  }

  function handleKeydown(event: KeyboardEvent) {
    if (onKeydown) {
      onKeydown(event);
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

{#if isCombobox}
  <div class={cn(isCombobox ? "relative w-full" : "", wrapperClass)}>
    {#if right || left || clearable}
      <div class={cn(base(), divClass)}>
        {@render inputContent()}
      </div>
    {:else}
      {@render inputContent()}
    {/if}

    {#if isCombobox && isFocused && filteredSuggestions.length > 0}
      <div class={cn(combo(), comboClass)}>
        {#each filteredSuggestions as item, i}
          <button type="button" class="w-full px-3 py-2 text-left {i === selectedIndex ? 'bg-gray-100 dark:bg-gray-700' : 'hover:bg-gray-50 dark:hover:bg-gray-700'} focus:outline-none" onclick={() => selectItem(item)} onmouseenter={() => (selectedIndex = i)}>
            <p class={cn(comboItem(), comboItemClass)}>{item}</p>
          </button>
        {/each}
      </div>
    {/if}
  </div>
{:else if group}
  {@render inputContent()}
{:else if right || left || clearable}
  <div class={cn(base(), divClass)}>
    {@render inputContent()}
  </div>
{:else}
  {@render inputContent()}
{/if}

{#snippet inputContent()}
  {#if left}
    <div class={cn(leftCls(), leftClass)}>
      {@render left()}
    </div>
  {/if}
  {#if children}
    {@render children({ ...restProps, class: inputCls() })}
  {:else}
    <input {...restProps} bind:value bind:this={elementRef} oninput={handleInput} onfocus={handleFocus} onblur={handleBlur} onkeydown={handleKeydown} class={cn(inputCls(), className)} />
    {#if value !== undefined && value !== "" && clearable}
      <CloseButton onclick={clearAll} class={cn(clearbtn(), clearableClass)} color={clearableColor} aria-label="Clear search value" svgClass={cn(clearableSvgClass)} />
    {/if}
  {/if}
  {#if right}
    <div class={cn(rightCls(), rightClass)}>
      {@render right()}
    </div>
  {/if}
{/snippet}
