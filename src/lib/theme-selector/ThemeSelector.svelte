<script lang="ts">
  import { getCurrentTheme, getSelectedTheme, themeConfigs, loadTheme } from "./themeStore.svelte";
  import type { ThemeId } from "./themes";
  import { onMount } from "svelte";
  import { Button, Dropdown, DropdownItem } from "$lib";
  import ThemeIcon from "./ThemeIcon.svelte";

  let { ...restProps } = $props();

  // Access the reactive state
  let currentTheme = $derived(getCurrentTheme());
  let selectedTheme = $derived(getSelectedTheme());

  function handleThemeChange(themeId: ThemeId) {
    return (e: MouseEvent) => {
      e.preventDefault();
      loadTheme(themeId);
    };
  }

  onMount(() => {
    loadTheme(currentTheme);
  });
</script>

<Button
  color="gray"
  class="gap-2 rounded-sm border-0 px-1 py-1 shadow-none focus:ring-gray-100 dark:focus:ring-gray-700"
  aria-haspopup="true"
  aria-label="Select Theme"
  {...restProps}
>
  <ThemeIcon />
  <span>{selectedTheme?.name ?? "Theme"}</span>
</Button>
<Dropdown class="w-52 px-2" simple>
  {#each themeConfigs as theme (theme.id)}
    <DropdownItem
      onclick={handleThemeChange(theme.id)}
      class="mb-1 inline-flex w-full items-center justify-between rounded-xl {theme.id === currentTheme ? 'bg-brand-50 dark:bg-brand-900/20' : ''}"
      role="option"
      aria-selected={theme.id === currentTheme}
    >
      <span class="theme-select-button inline-flex w-full items-center justify-between rounded">{theme.name}</span>
      <div class="flex items-center rounded-xs">
        {#each theme.colors as color, index (`${theme.id}-${index}`)}
          <div class="h-3.5 w-[1.125rem] {color} {index === 0 ? 'rounded-s-xs' : ''} {index === theme.colors.length - 1 ? 'rounded-e-xs' : ''}"></div>
        {/each}
      </div>
    </DropdownItem>
  {/each}
</Dropdown>
