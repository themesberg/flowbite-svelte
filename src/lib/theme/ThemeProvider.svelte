<script lang="ts">
  import type { Snippet } from "svelte";
  import { setContext } from "svelte";
  import type { ThemeConfig } from "$lib";

  interface ThemeProviderProps {
    children: Snippet;
    theme?: ThemeConfig;
  }

  let { children, theme }: ThemeProviderProps = $props();

  if (theme) {
    setContext("theme", theme);
  } else {
    console.log("ThemeProvider: No theme provided");
  }
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
