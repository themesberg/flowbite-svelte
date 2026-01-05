<script lang="ts">
  import "./layout.css";
  import FathomAnalytics from "./utils/FathomAnalytics.svelte";
  import CarbonAds from "./utils/CarbonAds.svelte";
  import { onMount } from "svelte";
  import { loadTheme, getCurrentTheme } from "$lib";

  let { children, data } = $props();

  // Get the saved theme from localStorage (or default)
  const savedTheme = getCurrentTheme();

  // choose true for loadFromStatic
  onMount(() => {
    loadTheme(savedTheme, true);
  });
</script>

<svelte:head>
  <!-- Load the saved theme initially for SSR/initial render -->
  <link rel="stylesheet" href="/themes/{savedTheme}.css" id="initial-theme-css" />
</svelte:head>

<FathomAnalytics FATHOM_ID={data.FATHOM_ID} />

{@render children()}

<CarbonAds />
