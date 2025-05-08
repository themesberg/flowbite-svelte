<script lang="ts">
  import "../app.css";
  import FathomAnalytics from "./utils/FathomAnalytics.svelte";
  import CarbonAds from "./utils/CarbonAds.svelte";

  let { children, data } = $props();
</script>

<FathomAnalytics FATHOM_ID={data.FATHOM_ID} />

{@render children()}

<CarbonAds />
