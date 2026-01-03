<script lang="ts">
  import Rating from "$lib/rating/Rating.svelte";
</script>

<Rating data-testid="rating-count" rating={4.5} total={5} count={true}>
  <span data-testid="count-text">out of 5</span>
</Rating>
