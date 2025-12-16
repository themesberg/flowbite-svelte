<script lang="ts">
  import type { Snippet } from "svelte";
  import { setThemeContext } from "$lib/context";
  import type { ThemeConfig } from "$lib/types";

  interface ThemeProviderProps {
    children: Snippet;
    theme?: ThemeConfig;
  }

  let { children, theme }: ThemeProviderProps = $props();

  // Create a stable object with a reactive getter that will be tracked
  // when accessed inside $derived expressions in child components
  const themeContext: { value?: ThemeConfig } = {
    get value() {
      // This getter makes the theme reactive - when accessed in a $derived,
      // it will track the theme prop and update when it changes
      return theme;
    }
  };

  // Set the context once with the stable object
  setThemeContext(themeContext);
</script>

{@render children()}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
ThemeProviderProps
## Props
@prop children
@prop theme
-->