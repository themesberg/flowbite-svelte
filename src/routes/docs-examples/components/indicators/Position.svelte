<script lang="ts">
  import { Indicator } from "flowbite-svelte";
</script>

<div class="rounded-base border-default bg-neutral-tertiary relative h-56 w-56 border">
  <Indicator placement="top-left" color="danger" />
  <Indicator placement="top-center" color="warning" />
  <Indicator placement="top-right" color="success" />
  <Indicator placement="center-left" color="dark" />
  <Indicator placement="center" color="neutral" />
  <Indicator placement="center-right" color="purple" />
  <Indicator placement="bottom-left" color="indigo" />
  <Indicator placement="bottom-center" class="bg-yellow-400" />
  <Indicator placement="bottom-right" color="teal" />
</div>
