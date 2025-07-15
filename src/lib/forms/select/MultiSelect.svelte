<script lang="ts" generics="T">
  import { Badge, CloseButton, type MultiSelectProps, type SelectOptionType, cn } from "$lib";
  import { multiSelect, type MultiSelectTheme } from ".";
  import { getTheme } from "$lib/theme/themeUtils";
  import { onMount, onDestroy } from 'svelte'; // Import onMount and onDestroy

  // Consider reusing that component - https://svelecte.vercel.app/

  let {
    children,
    items = [],
    value = $bindable(),
    size = "md",
    dropdownClass = "",
    placeholder = "",
    disabled = false,
    onchange,
    onblur,
    class: className,
    // Extract select-specific props
    name,
    form,
    required,
    autocomplete,
    ...restProps
  }: MultiSelectProps<T> = $props();

  const theme = getTheme("multiSelect");

  let selectItems = $derived(items.filter((x) => value.includes(x.value)));
  let show: boolean = $state(false);

  // Active item
  let activeIndex: number | null = $state(null);
  let activeItem = $derived(activeIndex !== null ? items[((activeIndex % items.length) + items.length) % items.length] : null);

  let multiSelectContainer: HTMLDivElement; // Reference to the main div

  const selectOption = (select: SelectOptionType<any>, event: MouseEvent) => {
    // Prevent the click from propagating to the parent div
    event.stopPropagation();

    if (disabled) return;
    if (select.disabled) return;

    const oldValue = [...value];

    if (value.includes(select.value)) {
      clearThisOption(select);
    } else if (!value.includes(select.value)) {
      value = [...value, select.value];
    }

    // Trigger onchange if value actually changed
    if (JSON.stringify(oldValue) !== JSON.stringify(value)) {
      triggerChange();
    }
    // Don't close the dropdown here
  };

  const clearAll = (e: MouseEvent) => {
    if (disabled) return;

    e.stopPropagation();
    const oldValue = [...value];
    value = [];

    if (oldValue.length > 0) {
      triggerChange();
    }
  };

  const clearThisOption = (select: SelectOptionType<any>) => {
    if (disabled) return;

    if (value.includes(select.value)) {
      const oldValue = [...value];
      value = value.filter((o: any) => o !== select.value);

      if (oldValue.length !== value.length) {
        triggerChange();
      }
    }
  };

  // Helper function to trigger change events
  const triggerChange = () => {
    if (onchange) {
      // Create a proper change event for the hidden select element
      const changeEvent = new Event("change", { bubbles: true });
      Object.defineProperty(changeEvent, "target", {
        value: { value: value },
        enumerable: true
      });
      Object.defineProperty(changeEvent, "currentTarget", {
        value: { value: value },
        enumerable: true
      });
      onchange(changeEvent as any);
    }
  };

  const closeDropdown = () => !disabled && (show = false);
  const toggleDropdown = (event: MouseEvent) => {
    if (disabled) return;
    // Prevent immediate closing if the click originated from within the component itself
    // This is useful if the click triggers a re-render and focus is lost momentarily.
    if (multiSelectContainer && multiSelectContainer.contains(event.target as Node)) {
        show = !show;
    } else {
        show = false; // Close if clicked outside
    }
  }

  // Handle blur event for validation
  const handleBlur = (event: FocusEvent) => {
    // We'll rely more on the global click listener for closing, but keep this for standard blur behavior
    if (event.currentTarget && (event.currentTarget as HTMLElement).contains && ! (event.currentTarget as HTMLElement).contains(event.relatedTarget as Node)) {
        closeDropdown();
    }
    if (onblur) {
      onblur(event);
    }
  };

  // Keyboard navigation
  function handleToggleActiveItem() {
    if (disabled) return;

    if (!show) {
      show = true;
      activeIndex = 0;
    } else {
      if (activeItem !== null) selectOption(activeItem, new MouseEvent('click')); // Pass a dummy MouseEvent
    }
  }

  function handleArrowUpDown(offset: number) {
    if (disabled) return;

    if (!show) {
      show = true;
      activeIndex = 0;
    } else {
      if (activeIndex !== null) {
        activeIndex += offset;
      } else {
        activeIndex = 0;
      }
    }
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (disabled) return;
    // Do not prevent default for tab key, allow it to move focus
    if (event.key !== 'Tab') {
        event.preventDefault();
    }
    event.stopPropagation();


    const actions = {
      Escape: closeDropdown,
      Enter: handleToggleActiveItem,
      " ": handleToggleActiveItem,
      ArrowDown: () => handleArrowUpDown(1),
      ArrowUp: () => handleArrowUpDown(-1)
    };
    if (event.key in actions) {
      actions[event.key as keyof typeof actions]?.();
    }
  }

  // Global click listener for closing the dropdown when clicking outside
  onMount(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (multiSelectContainer && !multiSelectContainer.contains(event.target as Node)) {
        closeDropdown();
      }
    };
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });


  const { base, dropdown, dropdownitem, closebutton, select } = multiSelect({ disabled });
</script>

<select {name} {form} {required} {autocomplete} {value} hidden multiple {onchange}>
  {#each items as item}
    <option value={item.value} disabled={item.disabled}>{item.name}</option>
  {/each}
</select>

<div
  bind:this={multiSelectContainer}
  {...restProps}
  onclick={toggleDropdown}
  onblur={handleBlur}
  onkeydown={handleKeyDown}
  tabindex="0"
  role="listbox"
  class={cn(base({ size }), className, (theme as MultiSelectTheme)?.base)}
>
  {#if !selectItems.length}
    <span class="text-gray-400">{placeholder}</span>
  {/if}
  <span class={cn(select(), (theme as MultiSelectTheme)?.select)}>
    {#if selectItems.length}
      {#each selectItems as item (item.name)}
        {#if children}
          {@render children({ item, clear: () => clearThisOption(item) })}
        {:else}
          <Badge color="gray" large={size === "lg"} dismissable params={{ duration: 100 }} onclose={() => clearThisOption(item)} class={[disabled && "pointer-events-none"]}>
            {item.name}
          </Badge>
        {/if}
      {/each}
    {/if}
  </span>
  <div class="ms-auto flex items-center gap-2">
    {#if selectItems.length}
      <CloseButton {size} onclick={clearAll} color="none" class={cn(closebutton(), (theme as MultiSelectTheme)?.closebutton)} {disabled} />
    {/if}

    <svg class={cn("ms-1 h-3 w-3 cursor-pointer text-gray-800 dark:text-white", disabled && "cursor-not-allowed")} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={show ? "m1 5 4-4 4 4" : "m9 1-4 4-4-4"} />
    </svg>
  </div>

  {#if show}
    <div role="presentation" class={cn(dropdown(), dropdownClass)}>
      {#each items as item (item.name)}
        <div
          onclick={(e) => selectOption(item, e)}
          role="presentation"
          class={dropdownitem({
            selected: selectItems.includes(item),
            active: activeItem === item,
            disabled: item.disabled
          })}
        >
          {item.name}
        </div>
      {/each}
    </div>
  {/if}
</div>