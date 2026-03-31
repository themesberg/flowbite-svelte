<script lang="ts">
  import { P } from "flowbite-svelte";

  const alignments = ["left", "center", "right", "justify"] as const;
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

<P align={selected !== "justify" ? selected : undefined} justify={selected === "justify"}>
  Get started with an enterprise-level, profesionally designed, fully responsive, and HTML semantic set of web pages, sections and over 400+ components crafted with the utility classes from Tailwind
  CSS and based on the Flowbite component library
</P>
