<script lang="ts">
  import '../app.css';
  import FathomAnalytics from './utils/FathomAnalytics.svelte';
  import CarbonAds from './utils/CarbonAds.svelte';
  export let data;
</script>
<FathomAnalytics FATHOM_ID="{data.FATHOM_ID}"/>

<slot />

<CarbonAds />