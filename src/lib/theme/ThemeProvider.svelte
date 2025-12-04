<script lang="ts">
  import type { Snippet } from "svelte";
  import { setThemeContext } from "$lib/context";
  import type { ThemeConfig } from "$lib/types";

  interface ThemeProviderProps {
    children: Snippet;
    theme?: ThemeConfig;
  }

  let { children, theme }: ThemeProviderProps = $props();

  $effect(() => {
    if (theme) {
      setThemeContext(theme);
    } else {
      console.log("ThemeProvider: No theme provided");
    }
  });
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
