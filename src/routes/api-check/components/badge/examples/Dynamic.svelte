<script lang="ts">
  import { Badge, type BadgeProps } from "flowbite-svelte";

  setInterval(handleHover, 500);

  let color: BadgeProps["color"] = $state("primary");
  function handleHover() {
    color = color === "primary" ? "secondary" : "primary";
  }
</script>

<Badge large {color}>Blinking badge</Badge>