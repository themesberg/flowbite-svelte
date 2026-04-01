<script lang="ts">
  import { P } from "flowbite-svelte";

  const heights = ["normal", "relaxed", "loose"] as const;
  type Height = (typeof heights)[number];
  let selected = $state<Height>("normal");
</script>

<div class="mb-6 flex flex-wrap gap-2">
  {#each heights as height}
    <button
      type="button"
      onclick={() => (selected = height)}
      aria-pressed={selected === height}
      class="rounded-base border px-3 py-1 text-sm font-medium transition-colors
        {selected === height ? 'bg-brand border-transparent text-white' : 'bg-neutral-primary-soft text-body border-default hover:bg-neutral-secondary-medium'}"
    >
      {height}
    </button>
  {/each}
</div>

<P size="3xl" height={selected} class="text-heading max-w-lg" weight="semibold">The AI-powered app will help you improve yourself by analysing your everyday life.</P>
