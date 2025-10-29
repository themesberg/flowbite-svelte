<script lang="ts">
  import { Datepicker, P, Button } from "$lib";
  let selectedDate = $state<Date | undefined>(undefined);
  let lastAction = $state<string | undefined>();
</script>

<div class="mb-64 md:w-1/2">
  <Datepicker bind:value={selectedDate} autohide={false}>
    {#snippet actionSlot({ selectedDate, handleClear, handleApply })}
      <div class="mt-2 flex gap-2">
        <Button size="sm" onclick={handleClear}>Clear</Button>
        <Button size="sm" onclick={() => selectedDate && handleApply(selectedDate)} disabled={!selectedDate}>Apply</Button>
        <Button size="sm" onclick={() => console.log("Selection:", selectedDate || "None")}>Show Selection</Button>
      </div>
    {/snippet}
  </Datepicker>
  <P class="mt-4">Selected date: {selectedDate ? selectedDate.toLocaleDateString() : "None"}</P>
  <P class="mt-2">Last action: {lastAction}</P>
</div>

Lorem ipsum dolor sit amet consectetur adipisicing elit. In quidem rerum, optio adipisci illum at earum fugiat eius minus quae! Quisquam cumque architecto facilis? Tempora ipsum perferendis quo
explicabo minus.
