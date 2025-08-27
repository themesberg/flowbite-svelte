<script lang="ts">
  import { Rating, Star, type RatingIconProps } from "flowbite-svelte";
  const wrapper = (props: RatingIconProps) => (anchor: any, _props: RatingIconProps) => Star(anchor, { ..._props, ...props });
</script>

<Rating id="example-1" total={5} size={50} rating={1.4} />
<Rating id="example-1b" total={5} size={50} rating={4.66} />
<Rating id="example-1b" icon={wrapper({ fillColor: "#008800", strokeColor: "#008800" })} total={5} size={50} rating={4.66} />
