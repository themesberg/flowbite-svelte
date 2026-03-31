<script lang="ts">
  import { Blockquote } from "flowbite-svelte";

  const alignments = ["left", "center", "right"] as const;
  type Alignment = (typeof alignments)[number];
  let selected = $state<Alignment>("left");
</script>

<div class="mb-6 flex flex-wrap gap-2">
  {#each alignments as alignment}
    <button
      type="button"
      onclick={() => (selected = alignment)}
      aria-pressed={selected === alignment}
      class="rounded-base border px-3 py-1 text-sm font-medium transition-colors
        {selected === alignment ? 'bg-brand border-transparent text-white' : 'bg-neutral-primary-soft text-body border-default hover:bg-neutral-secondary-medium'}"
    >
      {alignment}
    </button>
  {/each}
</div>

<Blockquote alignment={selected} size="xl">
  "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."
</Blockquote>
