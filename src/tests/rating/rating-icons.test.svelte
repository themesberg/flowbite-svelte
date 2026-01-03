<script lang="ts">
  import Rating from "$lib/rating/Rating.svelte";
  import Heart from "$lib/rating/Heart.svelte";
  import Thumbup from "$lib/rating/Thumbup.svelte";
</script>

<Rating data-testid="rating-heart" rating={4} total={5} icon={Heart} />
<Rating data-testid="rating-thumbup" rating={3} total={5} icon={Thumbup} />
