<script lang="ts">
  import ThemeSelector from "../../utils/ThemeSelector.svelte";
  const fgBrand = ["text-fg-brand", "text-fg-brand-subtle", "text-fg-brand-strong"];
  const shikiFgBrand = ["text-shiki-fg-brand", "text-shiki-fg-brand-subtle"];
  const textVariables = [
    "text-2xs",
    "spacing-8xl",
    "leading-9",
    "leading-8",
    "leading-7",
    "leading-6",
    "leading-5",
    "leading-4",
    "leading-none",
    "leading-heading-none",
    "tracking-tighter",
    "tracking-tight"
  ];

  const borderRadiusVariables = ["rounded-0", "rounded-xxs", "rounded-xs", "rounded-sm", "rounded", "rounded-base", "rounded-lg"];
</script>

<div class="min-h-screen bg-gray-50 p-4 md:p-8 dark:bg-gray-900">
  <!-- Header Section -->
  <div class="mb-6 flex items-center justify-between">
    <div>
      <h1 class="mb-2 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">Color Test Page</h1>
    </div>
    <ThemeSelector />
  </div>

  <div class="flex flex-wrap gap-4 p-8">
    {#each fgBrand as token}
      <p class={`mb-2 ${token}`}>{token}</p>
    {/each}
  </div>

  <div class="flex flex-wrap gap-4 p-8">
    {#each shikiFgBrand as token}
      <p class={`mb-2 ${token}`}>{token}</p>
    {/each}
  </div>

  <!-- textVariables classes -->
  <div class="flex flex-wrap gap-4 p-8">
    {#each textVariables as textVariable}
      <p class={`mb-2 ${textVariable} bg-gray-200`}>{textVariable} - The quick brown fox jumps over the lazy dog.</p>
    {/each}
  </div>

  <!-- borderRadiusVariables classes -->
  <div class="flex flex-wrap gap-4 p-8">
    {#each borderRadiusVariables as borderRadiusVariable}
      <p class={`leading-heading-none mb-2 ${borderRadiusVariable} bg-gray-200`}>{borderRadiusVariable} - The quick brown fox jumps over the lazy dog.</p>
    {/each}
  </div>
</div>
