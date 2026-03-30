<script lang="ts">
  import { ImagePlaceholder } from "flowbite-svelte";

  const sizes = ["sm", "md", "lg"] as const;
  type Size = (typeof sizes)[number];
  let selected = $state<Size>("md");
  let imgOnly = $state(false);
</script>

<div class="flex flex-wrap items-center gap-2 mb-6">
  {#each sizes as size}
    <button
      onclick={() => (selected = size)}
      class="px-3 py-1 text-sm rounded-base border font-medium transition-colors
        {selected === size
          ? 'bg-brand text-white border-transparent'
          : 'bg-neutral-primary-soft text-body border-default hover:bg-neutral-secondary-medium'}"
    >
      {size}
    </button>
  {/each}
  <button
    onclick={() => (imgOnly = !imgOnly)}
    class="px-3 py-1 text-sm rounded-base border font-medium transition-colors
      {imgOnly
        ? 'bg-brand text-white border-transparent'
        : 'bg-neutral-primary-soft text-body border-default hover:bg-neutral-secondary-medium'}"
  >
    imgOnly
  </button>
</div>

<ImagePlaceholder size={selected} {imgOnly} />
