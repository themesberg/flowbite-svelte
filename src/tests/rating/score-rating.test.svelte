<script lang="ts">
  import ScoreRating from "$lib/rating/ScoreRating.svelte";
  import type { RatingItem } from "$lib/types";

  const ratings: RatingItem[] = [
    { label: "Staff", rating: 8.8 },
    { label: "Comfort", rating: 8.9 },
    { label: "Location", rating: 9.0 }
  ];

  const ratings2: RatingItem[] = [
    { label: "Facilities", rating: 8.7 },
    { label: "Cleanliness", rating: 9.2 },
    { label: "Value", rating: 8.5 }
  ];

  const headerLabel = {
    desc1: "8.7",
    desc2: "Excellent",
    desc3: "376 reviews"
  };
</script>

<div data-testid="score-rating">
  <ScoreRating {ratings} {ratings2} {headerLabel} />
</div>
