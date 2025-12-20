<script lang="ts">
  import { Badge, type BadgeProps } from "flowbite-svelte";

  setInterval(handleHover, 500);

  let color: BadgeProps["color"] = $state("brand");
  function handleHover() {
    color = color === "brand" ? "alternative" : "brand";
  }
</script>

<Badge large {color}>Blinking badge</Badge>
