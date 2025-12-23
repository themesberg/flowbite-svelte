<script lang="ts">
  import { getCurrentTheme, getSelectedTheme, themes, loadTheme } from "./themeStore.svelte";
  import { onMount } from "svelte";
  import { Button, Dropdown, DropdownItem } from "$lib";
  import { PaletteOutline } from "flowbite-svelte-icons";

  // Access the reactive state
  let currentTheme = $derived(getCurrentTheme());
  let selectedTheme = $derived(getSelectedTheme());

  function handleThemeChange(themeId: string) {
    return (e: MouseEvent) => {
      e.preventDefault();
      loadTheme(themeId);
    };
  }

  onMount(() => {
    loadTheme(currentTheme);
  });
</script>

<Button color="alternative" class="gap-2 rounded-xl border-0 focus:ring-gray-100 dark:focus:ring-gray-700">
  <PaletteOutline class="h-5 w-5" />
  <span>{selectedTheme?.name ?? "Theme"}</span>
</Button>
<Dropdown class="w-52 px-2" simple>
  {#each themes as theme}
    <DropdownItem onclick={handleThemeChange(theme.id)} class="inline-flex w-full items-center justify-between rounded-lg {theme.id === currentTheme ? 'bg-primary-50 dark:bg-primary-900/20' : ''}">
      <span class="theme-select-button inline-flex w-full items-center justify-between rounded">{theme.name}</span>
      <div class="flex items-center rounded-xs">
        {#each theme.colors as color, index}
          <div class="h-3.5 w-4.5 {color} {index === 0 ? 'rounded-s-xs' : ''} {index === theme.colors.length - 1 ? 'rounded-e-xs' : ''}"></div>
        {/each}
      </div>
    </DropdownItem>
  {/each}
</Dropdown>

<style>
  /* Custom width for color swatches */
  :global(.w-4\.5) {
    width: 1.125rem; /* 18px */
  }
</style>
