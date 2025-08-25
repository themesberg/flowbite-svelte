<script lang="ts">
  import { Rating, Thumbup, type RatingIconProps } from "flowbite-svelte";
  const thumbWrapper = (props: RatingIconProps) => (anchor: any, _props: RatingIconProps) => Thumbup(anchor, { ..._props, ...props });
</script>

<Rating total={5} rating={4.7} size={20} id="example-5d" icon={Thumbup} />
<Rating total={10} rating={8.2} id="example-5e" icon={Thumbup} />
<Rating total={10} rating={7.6} id="example-5b" icon={thumbWrapper({ fillColor: "#ff3f00", strokeColor: "#ff3f00" })} />
