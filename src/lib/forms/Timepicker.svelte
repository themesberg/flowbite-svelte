<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { ClockSolid } from 'flowbite-svelte-icons';
  import type { Colors } from '$lib/types';
  import { getBorderClass, getFocusRingClass } from '$lib/utils/getStyles';

  export let id: string = 'time';
  export let value: string = '00:00';
  export let min: string = '';
  export let max: string = '';
  export let required: boolean = true;
  export let disabled: boolean = false;
  export let color: Colors = 'primary';

  const dispatch = createEventDispatcher();
  function handleChange(event: Event) {
    const newValue = (event.target as HTMLInputElement).value;
    dispatch('change', newValue);
  }
</script>

<div class="relative">
  <div class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
    <ClockSolid class="w-4 h-4 text-gray-500 dark:text-gray-400" />
  </div>
  <input type="time" {id} class="bg-gray-50 border leading-none text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white {getBorderClass(color)} {getFocusRingClass(color)}" {min} {max} bind:value {required} {disabled} on:change={handleChange} />
</div>
