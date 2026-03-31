<script lang="ts">
  import { P } from "flowbite-svelte";

  const modes = ["normal", "nowrap", "preline"] as const;
  type Whitespace = (typeof modes)[number];
  let selected = $state<Whitespace>("normal");
</script>

<div class="mb-6 flex flex-wrap gap-2">
  {#each modes as mode}
    <button
      type="button"
      onclick={() => (selected = mode)}
      aria-pressed={selected === mode}
      class="rounded-base border px-3 py-1 text-sm font-medium transition-colors
        {selected === mode ? 'bg-brand border-transparent text-white' : 'bg-neutral-primary-soft text-body border-default hover:bg-neutral-secondary-medium'}"
    >
      {mode}
    </button>
  {/each}
</div>

<P whitespace={selected}>This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text.</P>
