<script lang="ts">
  import { Heading } from "flowbite-svelte";

  const tags = ["h1", "h2", "h3", "h4", "h5", "h6"] as const;
  type Tag = (typeof tags)[number];
  let selected = $state<Tag>("h1");
</script>

<div class="mb-6 flex flex-wrap gap-2">
  {#each tags as tag}
    <button
      type="button"
      onclick={() => (selected = tag)}
      aria-pressed={selected === tag}
      class="rounded-base border px-3 py-1 text-sm font-medium transition-colors
        {selected === tag ? 'bg-brand border-transparent text-white' : 'bg-neutral-primary-soft text-body border-default hover:bg-neutral-secondary-medium'}"
    >
      {tag}
    </button>
  {/each}
</div>

<Heading tag={selected}>Heading {selected.slice(1)}</Heading>
