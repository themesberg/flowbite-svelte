<script lang="ts">
  import { getContext } from "svelte";
  import { CloseButton, type SizeType, type InputProps, type InputValue } from "$lib";
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

  let group: { size: SizeType } = getContext("group");
  let isGroup = !!group;
  let _size = $derived(size || clampSize(group?.size) || "md");
  const _color = $derived(color === "default" && background ? "tinted" : color);

  const { base, input: inputCls, left: leftCls, right: rightCls, clearbtn } = $derived(input({ size: _size, color: _color, group: isGroup, class: clsx(className) }));

  const clearAll = () => {
    if (elementRef) {
      elementRef.value = "";
      value = "";
      // Trigger filtering with empty value after clearing
      filterSuggestions("");
      // Keep focus on input after clearing
      if (elementRef) elementRef.focus();
    }
    if (clearableOnClick) clearableOnClick();
  };

  // Combobox functionality
  let isFocused = $state(false);
  let filteredSuggestions: string[] = $state([]);
  let selectedIndex = $state(-1);
  
  function filterSuggestions(inputValue: string | undefined) {
    if (!isCombobox || !data || !Array.isArray(data)) {
      filteredSuggestions = [];
      return;
    }
    
    const searchTerm = (inputValue || '').toLowerCase();
    
    // Show suggestions even when input is empty if the field is focused
    if (isFocused) {
      filteredSuggestions = data
        .filter(item => searchTerm ? item.toLowerCase().includes(searchTerm) : true)
        .slice(0, maxSuggestions);
    } else {
      filteredSuggestions = [];
    }
    
    // Reset selected index when suggestions change
    selectedIndex = -1;
  }

  // Watch for value changes to update suggestions
  $effect(() => {
    if (isFocused && isCombobox) {
      filterSuggestions(value as string);
    }
  });

  function handleInput(event: Event) {
    filterSuggestions(value as string);
  }

  function handleFocus() {
    isFocused = true;
    filterSuggestions(value as string);
  }

  function handleBlur() {
    // Small delay to allow click on suggestion to fire first
    setTimeout(() => {
      isFocused = false;
      filteredSuggestions = [];
    }, 200);
  }

  function handleKeydown(event: KeyboardEvent) {
    if (!filteredSuggestions.length) return;
    
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        selectedIndex = (selectedIndex + 1) % filteredSuggestions.length;
        break;
      case 'ArrowUp':
        event.preventDefault();
        selectedIndex = selectedIndex <= 0 ? filteredSuggestions.length - 1 : selectedIndex - 1;
        break;
      case 'Enter':
        if (selectedIndex >= 0) {
          event.preventDefault();
          selectItem(filteredSuggestions[selectedIndex]);
        }
        break;
      case 'Escape':
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

<div class={isCombobox ? "relative w-full" : ""}>
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
    <div class="absolute left-0 right-0 top-full mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-10 max-h-60 overflow-y-auto">
      {#each filteredSuggestions as item, i}
        <button
          type="button"
          class="w-full text-left px-3 py-2 {i === selectedIndex ? 'bg-gray-100 dark:bg-gray-700' : 'hover:bg-gray-50 dark:hover:bg-gray-700'} focus:outline-none"
          onclick={() => selectItem(item)}
          onmouseenter={() => selectedIndex = i}
        >
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
    <input 
      {...restProps} 
      bind:value 
      bind:this={elementRef} 
      oninput={handleInput} 
      onfocus={handleFocus} 
      onblur={handleBlur} 
      onkeydown={handleKeydown}
      class={inputCls({ class: clsx(className) })} 
    />
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