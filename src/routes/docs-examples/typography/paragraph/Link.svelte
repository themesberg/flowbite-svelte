<script lang="ts">
  import { P, A } from "flowbite-svelte";

  const styles = ["link", "bold", "underline", "italic"] as const;
  type Style = (typeof styles)[number];
  let selected = $state<Style>("link");
</script>

<div class="mb-6 flex flex-wrap gap-2">
  {#each styles as style}
    <button
      type="button"
      onclick={() => (selected = style)}
      aria-pressed={selected === style}
      class="rounded-base border px-3 py-1 text-sm font-medium transition-colors
        {selected === style ? 'bg-brand border-transparent text-white' : 'bg-neutral-primary-soft text-body border-default hover:bg-neutral-secondary-medium'}"
    >
      {style}
    </button>
  {/each}
</div>

<P>
  Track work across the enterprise through an open, collaborative platform.
  {#if selected === "link"}
    <A href="/">Link issues across Jira</A>
  {:else if selected === "bold"}
    <strong class="text-heading font-semibold">Link issues across Jira</strong>
  {:else if selected === "underline"}
    <u class="underline">Link issues across Jira</u>
  {:else}
    <em class="font-italic">Link issues across Jira</em>
  {/if}
  and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.
</P>
