<script lang="ts">
  import { Card, Heading } from 'flowbite-svelte';
  import type { Snippet } from 'svelte';
  interface Props {
    children: Snippet;
    title: string;
    subtitle?: string;
    class?: string;
  }
  let { children, title, subtitle, class: className }: Props = $props();
</script>

<Card size="xl" class="max-w-none shadow-sm {className}">
  <div class="mt-px mb-4 lg:mb-0">
    <Heading tag="h3" class="mb-2 -ml-0.25 text-xl font-semibold dark:text-white">
      {title}
    </Heading>
    {#if subtitle}
      <span class="text-base font-normal text-gray-500 dark:text-gray-300">
        {subtitle}
      </span>
    {/if}
  </div>
  {@render children()}
</Card>
