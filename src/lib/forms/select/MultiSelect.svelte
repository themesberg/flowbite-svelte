<script lang="ts" generics="T">
  import { Badge, CloseButton, type MultiSelectProps, type SelectOptionType, cn } from "$lib";
  import { multiselect } from "./theme";

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

  let selectItems = $derived(items.filter((x) => value.includes(x.value)));
  let show: boolean = $state(false);

  // Active item
  let activeIndex: number | null = $state(null);
  let activeItem = $derived(activeIndex !== null ? items[((activeIndex % items.length) + items.length) % items.length] : null);

  const selectOption = (select: SelectOptionType<any>) => {
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
      const changeEvent = new Event('change', { bubbles: true });
      Object.defineProperty(changeEvent, 'target', {
        value: { value: value },
        enumerable: true
      });
      Object.defineProperty(changeEvent, 'currentTarget', {
        value: { value: value },
        enumerable: true
      });
      onchange(changeEvent as any);
    }
  };

  const closeDropdown = () => !disabled && (show = false);
  const toggleDropdown = () => !disabled && (show = !show);

  // Handle blur event for validation
  const handleBlur = (event: FocusEvent) => {
    closeDropdown();
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
      if (activeItem !== null) selectOption(activeItem);
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
    event.stopPropagation();
    event.preventDefault();

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

  const { base, dropdown, dropdownitem, closebutton, select } = multiselect({ disabled });
</script>

<!-- Hidden select for form submission -->
<select 
  {name}
  {form}
  {required}
  {autocomplete}
  value={value}
  hidden 
  multiple
  onchange={onchange}
>
  {#each items as item}
    <option value={item.value} disabled={item.disabled}>{item.name}</option>
  {/each}
</select>

<div 
  {...restProps}
  onclick={toggleDropdown} 
  onblur={handleBlur}
  onkeydown={handleKeyDown} 
  tabindex="0" 
  role="listbox" 
  class={cn(base({ size }), className)}
>
  {#if !selectItems.length}
    <span class="text-gray-400">{placeholder}</span>
  {/if}
  <span class={select()}>
    {#if selectItems.length}
      {#each selectItems as item (item.name)}
        {#if children}
          {@render children({ item, clear: () => clearThisOption(item) })}
        {:else}
          <Badge 
            color="gray" 
            large={size === "lg"} 
            dismissable 
            params={{ duration: 100 }} 
            onclose={() => clearThisOption(item)} 
            class={[disabled && "pointer-events-none"]}
          >
            {item.name}
          </Badge>
        {/if}
      {/each}
    {/if}
  </span>
  <div class="ms-auto flex items-center gap-2">
    {#if selectItems.length}
      <CloseButton {size} onclick={clearAll} color="none" class={closebutton()} {disabled} />
    {/if}

    <svg 
      class={cn("ms-1 h-3 w-3 cursor-pointer text-gray-800 dark:text-white", disabled && "cursor-not-allowed")} 
      aria-hidden="true" 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 10 6"
    >
      <path 
        stroke="currentColor" 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        stroke-width="2" 
        d={show ? "m1 5 4-4 4 4" : "m9 1-4 4-4-4"} 
      />
    </svg>
  </div>

  {#if show}
    <div role="presentation" class={cn(dropdown(), dropdownClass)}>
      {#each items as item (item.name)}
        <div 
          onclick={() => selectOption(item)} 
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