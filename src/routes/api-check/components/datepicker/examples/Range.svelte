<script lang="ts">
  import { Datepicker, P } from "flowbite-svelte";

  let dateRange: { from: Date | undefined; to: Date | undefined } = $state({
    from: undefined,
    to: undefined
  });
</script>

<div class="mb-64 md:w-1/2">
  <Datepicker range bind:rangeFrom={dateRange.from} bind:rangeTo={dateRange.to} color="pink" />
  <P class="mt-4">
    Selected range:
    {dateRange.from ? dateRange.from.toLocaleDateString() : "None"} -
    {dateRange.to ? dateRange.to.toLocaleDateString() : "None"}
  </P>
</div>