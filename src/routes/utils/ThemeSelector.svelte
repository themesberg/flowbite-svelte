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
  let isOpen = $state(false);
</script>

<Button
  onclick={() => (isOpen = true)}
  color="gray"
  class="gap-2 rounded-xl border-0 px-1.5 py-1.5 shadow-none focus:ring-gray-100 dark:focus:ring-gray-700"
  aria-haspopup="true"
  aria-expanded={isOpen}
  aria-label="Select Theme"
>
  <PaletteOutline class="h-6 w-6" />
  <span>{selectedTheme?.name ?? "Theme"}</span>
</Button>
<Dropdown class="w-52 px-2" bind:isOpen simple>
  {#each themes as theme}
    <DropdownItem onclick={handleThemeChange(theme.id)} class="mb-1 inline-flex w-full items-center justify-between rounded-xl {theme.id === currentTheme ? 'bg-brand-50 dark:bg-brand-900/20' : ''}">
      <span class="theme-select-button inline-flex w-full items-center justify-between rounded">{theme.name}</span>
      <div class="flex items-center rounded-xs">
        {#each theme.colors as color, index}
          <div class="h-3.5 w-[1.125rem] {color} {index === 0 ? 'rounded-s-xs' : ''} {index === theme.colors.length - 1 ? 'rounded-e-xs' : ''}"></div>
        {/each}
      </div>
    </DropdownItem>
  {/each}
</Dropdown>
