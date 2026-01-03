<script lang="ts">
  import { getCurrentTheme, getSelectedTheme, themeConfigs, loadTheme } from "./themeStore.svelte";
  import type { ThemeId } from "./themes";
  import type { ThemeSelectorProps } from "$lib/types";
  import { onMount } from "svelte";
  import { Button, Dropdown, DropdownItem } from "$lib";
  import ThemeIcon from "./ThemeIcon.svelte";
  import { themeSelector } from "./theme";
  import { getTheme } from "$lib/theme-provider/themeUtils";
  import clsx from "clsx";

  let { classes, ...restProps }: ThemeSelectorProps = $props();

  const styling = $derived(classes);
  const themeStyling = $derived(getTheme("themeSelector"));

  const { button, dropdown, item, itemLabel, colorSwatchContainer, colorSwatch } = themeSelector();

  // Access the reactive state
  let currentTheme = $derived(getCurrentTheme());
  let selectedTheme = $derived(getSelectedTheme());

  function handleThemeChange(themeId: ThemeId) {
    return (e: MouseEvent) => {
      e.preventDefault();
      loadTheme(themeId);
      // Close the dropdown after selecting a theme
      isOpen = false;
    };
  }

  onMount(() => {
    loadTheme(currentTheme);
  });
  let isOpen = $state(false);
</script>

<div data-scope="theme-selector" data-part="base" {...restProps}>
  <Button data-part="button" color="gray" class={button({ class: clsx(themeStyling?.button, styling?.button) })} aria-haspopup="true" aria-expanded={isOpen} aria-label="Select Theme">
    <ThemeIcon />
    <span>{selectedTheme?.name ?? "Theme"}</span>
  </Button>
  <Dropdown data-part="dropdown" class={dropdown({ class: clsx(themeStyling?.dropdown, styling?.dropdown) })} bind:isOpen simple>
    {#each themeConfigs as theme (theme.id)}
      <DropdownItem
        data-part="item"
        onclick={handleThemeChange(theme.id)}
        class={item({ active: theme.id === currentTheme, class: clsx(themeStyling?.item, styling?.item) })}
        role="option"
        aria-selected={theme.id === currentTheme}
      >
        <span data-part="item-label" class={itemLabel({ class: clsx(themeStyling?.itemLabel, styling?.itemLabel) })}>{theme.name}</span>
        <div data-part="color-swatch-container" class={colorSwatchContainer({ class: clsx(themeStyling?.colorSwatchContainer, styling?.colorSwatchContainer) })}>
          {#each theme.colors as color, index (`${theme.id}-${index}`)}
            <div
              data-part="color-swatch"
              class={colorSwatch({
                swatchPosition: index === 0 ? "first" : index === theme.colors.length - 1 ? "last" : "middle",
                class: clsx(color, themeStyling?.colorSwatch, styling?.colorSwatch)
              })}
            ></div>
          {/each}
        </div>
      </DropdownItem>
    {/each}
  </Dropdown>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ThemeSelectorProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L2220)
## Props
@prop classes
@prop ...restProps
-->
