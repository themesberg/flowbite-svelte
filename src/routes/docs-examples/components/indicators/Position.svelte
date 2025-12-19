<script lang="ts">
  import { Indicator } from "flowbite-svelte";
</script>

<div class="borer relative h-56 w-56 rounded-lg border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-800">
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
