<script lang="ts">
  import { ImagePlaceholder } from "flowbite-svelte";

  const sizes = ["sm", "md", "lg"] as const;
  type Size = (typeof sizes)[number];
  let selected = $state<Size>("md");
  let imgOnly = $state(false);
</script>

<div class="mb-6 flex flex-wrap items-center gap-2">
  {#each sizes as size}
    <button
      type="button"
      onclick={() => (selected = size)}
      aria-pressed={selected === size}
      class="rounded-base border px-3 py-1 text-sm font-medium transition-colors
        {selected === size ? 'bg-brand border-transparent text-white' : 'bg-neutral-primary-soft text-body border-default hover:bg-neutral-secondary-medium'}"
    >
      {size}
    </button>
  {/each}
  <button
    type="button"
    onclick={() => (imgOnly = !imgOnly)}
    aria-pressed={imgOnly}
    class="rounded-base border px-3 py-1 text-sm font-medium transition-colors
      {imgOnly ? 'bg-brand border-transparent text-white' : 'bg-neutral-primary-soft text-body border-default hover:bg-neutral-secondary-medium'}"
  >
    imgOnly
  </button>
</div>

<ImagePlaceholder size={selected} {imgOnly} />
