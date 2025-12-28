<script lang="ts">
  import { ThemeSelector, getCurrentTheme } from "$lib";

  interface Props {
    onThemeChange?: (theme: string) => void;
  }

  let { onThemeChange }: Props = $props();

  // Watch for theme changes
  let currentTheme = $derived(getCurrentTheme());

  $effect(() => {
    if (onThemeChange) {
      onThemeChange(currentTheme);
    }
  });
</script>

<div data-testid="theme-selector-container">
  <ThemeSelector />
  <div data-testid="current-theme">{currentTheme}</div>
</div>
