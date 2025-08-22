<script lang="ts">
  import { Rating, Heart, type RatingIconProps } from "flowbite-svelte";
  const heartWrapper = (props: RatingIconProps) => (anchor: any, _props: RatingIconProps) => Heart(anchor, { ..._props, ...props });
</script>

<Rating total={5} rating={3.3} size={20} id="example-5" icon={Heart} />
<Rating total={10} rating={7.6} id="example-5b" icon={Heart} />
<Rating total={10} rating={7.6} id="example-5b" icon={heartWrapper({ fillColor: "#3752d6", strokeColor: "#3752d6" })} />