<script lang="ts">
  import { setContext, type Snippet } from "svelte";
  import { themeConfig } from "./theme.config";

  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();

  // Create a context to make theme config available to child components
  setContext("themeConfig", themeConfig);
</script>

{@render children()}
