<script lang="ts">
  import { Timepicker, type TimepickerProps } from "$lib";

  // Extract the callback parameter type from TimepickerProps.onselect
  type OnSelectData = Parameters<NonNullable<TimepickerProps["onselect"]>>[0];

  let value = $state("10:00");
  let callbackData = $state<OnSelectData | null>(null);

  function handleSelect(data: OnSelectData) {
    callbackData = data;
  }
</script>

<div data-testid="callback-wrapper">
  <Timepicker id="callback-test" bind:value onselect={handleSelect} />
</div>

{#if callbackData}
  <div data-testid="callback-result">{JSON.stringify(callbackData)}</div>
{/if}
