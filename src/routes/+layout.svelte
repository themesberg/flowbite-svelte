<script lang="ts">
  import "./layout.css";
  import FathomAnalytics from "./utils/FathomAnalytics.svelte";
  import CarbonAds from "./utils/CarbonAds.svelte";
  import { onMount } from "svelte";
  import { loadTheme, getCurrentTheme } from "./utils/themeStore.svelte";

  let { children, data } = $props();

  // Load the theme as early as possible
  onMount(() => {
    loadTheme(getCurrentTheme());
  });
</script>

<svelte:head>
  <!-- Load default theme initially -->
  <link rel="stylesheet" href="/themes/default.css" id="initial-theme-css" />
</svelte:head>

<FathomAnalytics FATHOM_ID={data.FATHOM_ID} />

{@render children()}

<CarbonAds />
