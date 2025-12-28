<script lang="ts">
  import { getCurrentTheme, getSelectedTheme, themeConfigs, loadTheme } from "./themeStore.svelte";
  import { onMount } from "svelte";
  import { Button, Dropdown, DropdownItem } from "$lib";

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
  class="gap-2 rounded-sm border-0 px-1 py-1 shadow-none focus:ring-gray-100 dark:focus:ring-gray-700"
  aria-haspopup="true"
  aria-expanded={isOpen}
  aria-label="Select Theme"
>
  <svg class="h-4.5 w-4.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M12 7h.01m3.486 1.513h.01m-6.978 0h.01M6.99 12H7m9 4h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 3.043 12.89 9.1 9.1 0 0 0 8.2 20.1a8.62 8.62 0 0 0 3.769.9 2.013 2.013 0 0 0 2.03-2v-.857A2.036 2.036 0 0 1 16 16Z"
    ></path>
  </svg>
  <span>{selectedTheme?.name ?? "Theme"}</span>
</Button>
<Dropdown class="w-52 px-2" bind:isOpen simple>
  {#each themeConfigs as theme (theme.id)}
    <DropdownItem onclick={handleThemeChange(theme.id)} class="mb-1 inline-flex w-full items-center justify-between rounded-xl {theme.id === currentTheme ? 'bg-brand-50 dark:bg-brand-900/20' : ''}">
      <span class="theme-select-button inline-flex w-full items-center justify-between rounded">{theme.name}</span>
      <div class="flex items-center rounded-xs">
        {#each theme.colors as color, index (`${theme.id}-${index}`)}
          <div class="h-3.5 w-[1.125rem] {color} {index === 0 ? 'rounded-s-xs' : ''} {index === theme.colors.length - 1 ? 'rounded-e-xs' : ''}"></div>
        {/each}
      </div>
    </DropdownItem>
  {/each}
</Dropdown>
