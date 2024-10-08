<script lang="ts">
  import { Badge, type BadgeProps } from "$lib";

  setInterval(handleHover, 500);

  let color = $state("primary") as BadgeProps["color"];
  function handleHover() {
    color = color === "primary" ? "secondary" : "primary";
  }
</script>

<Badge large {color}>Blinking badge</Badge>
