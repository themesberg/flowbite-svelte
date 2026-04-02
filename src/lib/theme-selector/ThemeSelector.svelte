<script lang="ts">
  import { onMount } from "svelte";
  import { getCurrentTheme, themeConfigs, loadTheme } from "./themeStore.svelte";
  import type { ThemeSelectorProps } from "$lib/types";
  import { Button, Dropdown, DropdownItem } from "$lib";
  import ThemeIcon from "./ThemeIcon.svelte";
  import { themeSelector } from "./theme";
  import { getTheme } from "$lib/theme-provider/themeUtils";
  import clsx from "clsx";

  interface DisplayTheme {
    id: string;
    name: string;
    colors: readonly string[];
  }

  let { classes, loadFromStatic = false, ...restProps }: ThemeSelectorProps = $props();

  const styling = $derived(classes);
  const themeStyling = $derived(getTheme("themeSelector"));

  const { button, dropdown, item, itemLabel, colorSwatchContainer, colorSwatch } = themeSelector();

  let currentTheme = $derived(getCurrentTheme());
  let staticThemes = $state<DisplayTheme[]>([]);
  let useStaticThemeAssets = $derived(loadFromStatic && staticThemes.length > 0);
  let displayThemes = $derived<DisplayTheme[]>(
    useStaticThemeAssets
      ? staticThemes
      : themeConfigs.map((t) => ({ id: t.id, name: t.name, colors: t.colors }))
  );
  let currentThemeName = $derived(
    displayThemes.find((t) => t.id === currentTheme)?.name ??
      themeConfigs.find((t) => t.id === currentTheme)?.name ??
      (currentTheme ? currentTheme.charAt(0).toUpperCase() + currentTheme.slice(1) : "Theme")
  );

  type ManifestEntry = string | { id: string; name?: string; colors?: string[] };

  onMount(async () => {
    if (!loadFromStatic) return;
    try {
      const res = await fetch("/themes/manifest.json");
      if (!res.ok) return;
      const json: unknown = await res.json();
      if (!Array.isArray(json)) return;
      const themes = json
        .filter(
          (entry): entry is ManifestEntry =>
            typeof entry === "string" ||
            (typeof entry === "object" &&
              entry !== null &&
              typeof (entry as { id?: unknown }).id === "string" &&
              (typeof (entry as { name?: unknown }).name === "undefined" || typeof (entry as { name?: unknown }).name === "string") &&
              (typeof (entry as { colors?: unknown }).colors === "undefined" ||
                (Array.isArray((entry as { colors?: unknown }).colors) && (entry as { colors: unknown[] }).colors.every((color) => typeof color === "string"))))
        )
        .map((entry) => {
          const id = typeof entry === "string" ? entry : entry.id;
          const known = themeConfigs.find((t) => t.id === id);
          const overrideName = typeof entry === "object" ? entry.name : undefined;
          const overrideColors = typeof entry === "object" ? entry.colors : undefined;
          return {
            id,
            name: overrideName ?? known?.name ?? id.charAt(0).toUpperCase() + id.slice(1),
            colors: overrideColors ?? known?.colors ?? []
          };
        });
      staticThemes = Array.from(new Map(themes.map((theme) => [theme.id, theme] as const)).values());
    } catch (e) {
      console.warn("Failed to load theme manifest:", e);
    }
  });

  function handleThemeChange(themeId: string) {
    return (e: MouseEvent) => {
      e.preventDefault();
      loadTheme(themeId, useStaticThemeAssets);
      // Close the dropdown after selecting a theme
      isOpen = false;
    };
  }

  let isOpen = $state(false);
</script>

<div data-scope="theme-selector" data-part="base" {...restProps}>
  <Button data-part="button" color="gray" class={button({ class: clsx(themeStyling?.button, styling?.button) })} aria-haspopup="true" aria-expanded={isOpen} aria-label="Select Theme">
    <ThemeIcon />
    <span>{currentThemeName}</span>
  </Button>
  <Dropdown data-part="dropdown" class={dropdown({ class: clsx(themeStyling?.dropdown, styling?.dropdown) })} bind:isOpen simple>
    {#each displayThemes as theme (theme.id)}
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
[ThemeSelectorProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L2221)
## Props
@prop classes
@prop loadFromStatic = false
@prop ...restProps
-->
