<script lang="ts">
  import { Rating, Star, type RatingIconProps } from "flowbite-svelte";
  const wrapper = (props: RatingIconProps) => (anchor: any, _props: RatingIconProps) => Star(anchor, { ..._props, ...props });
</script>

<Rating id="example-3a" total={5} rating={3.4}>
  {#snippet text()}
    <p class="ms-2 text-sm font-medium text-gray-500 dark:text-gray-400">3.4 out of 5</p>
  {/snippet}
</Rating>
<Rating id="example-3" total={5} rating={2.8} icon={wrapper({ fillColor: "#008800", strokeColor: "#008800" })}>
  {#snippet text()}
    <p class="ms-2 text-sm font-medium text-gray-500 dark:text-gray-400">2.8 out of 5</p>
  {/snippet}
</Rating>