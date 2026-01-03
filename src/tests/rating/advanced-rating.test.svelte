<script lang="ts">
  import AdvancedRating from "$lib/rating/AdvancedRating.svelte";
  import type { RatingItem } from "$lib/types";

  const ratings: RatingItem[] = [
    { label: "5 star", rating: 70 },
    { label: "4 star", rating: 17 },
    { label: "3 star", rating: 8 },
    { label: "2 star", rating: 4 },
    { label: "1 star", rating: 1 }
  ];
</script>

<div data-testid="advanced-rating">
  <AdvancedRating {ratings} unit="%" />
</div>
