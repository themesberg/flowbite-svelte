<script lang="ts">
  interface Props {
    colnum?: number;
    rownum?: number;
  }

  let { colnum = 1, rownum = 1 }: Props = $props();
  function calculateGridItems() {
    return colnum * rownum;
  }
  const colclass = `grid-cols-${colnum}`;
</script>

{#snippet figure()}
  <div class="flex h-24 items-center justify-center rounded bg-gray-50 dark:bg-gray-800">
    <p class="text-2xl text-gray-400 dark:text-gray-500">
      <svg class="h-3.5 w-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
      </svg>
    </p>
  </div>
{/snippet}

<div class="mb-4 grid {colclass} gap-4">
  <!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
  {#each Array(calculateGridItems()) as _}
    {@render figure()}
  {/each}
</div>
