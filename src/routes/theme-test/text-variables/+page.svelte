<script lang="ts">
  import { ThemeSelector } from "$lib";
  const fgBrand = ["text-fg-brand", "text-fg-brand-subtle", "text-fg-brand-strong"];
  const shikiFgBrand = ["text-shiki-fg-brand", "text-shiki-fg-brand-subtle"];
  const fontSizeVariables = ["text-2xs"];
  const spacingVariables = ["spacing-8xl"];
  const leadingVariables = ["leading-9", "leading-8", "leading-7", "leading-6", "leading-5", "leading-4", "leading-none", "leading-heading-none"];

  const trackingVariables = ["tracking-tighter", "tracking-tight"];

  const borderRadiusVariables = ["rounded-0", "rounded-xxs", "rounded-xs", "rounded-sm", "rounded", "rounded-base", "rounded-lg"];
</script>

<div class="min-h-screen bg-gray-50 p-4 md:p-8 dark:bg-gray-900">
  <!-- Header Section -->
  <div class="mb-6 flex items-center justify-between">
    <div>
      <h1 class="mb-2 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">Leading & Typography Test Page</h1>
    </div>
    <ThemeSelector />
  </div>

  <div class="flex flex-wrap gap-4 p-8">
    <h2 class="w-full text-2xl font-semibold text-gray-900 dark:text-white">Font size</h2>
    {#each fontSizeVariables as token}
      <p class={`mb-2 ${token} bg-gray-200`}>{token} - The quick brown fox jumps over the lazy dog.</p>
    {/each}
    {#each fgBrand as token}
      <p class={`mb-2 ${token}`}>{token}</p>
    {/each}
  </div>

  <div class="flex flex-wrap gap-4 p-8">
    {#each shikiFgBrand as token}
      <p class={`mb-2 ${token}`}>{token}</p>
    {/each}
  </div>

  <!-- spacingVariables classes -->
  <div class="flex flex-wrap gap-4 p-8">
    <h2 class="w-full text-2xl font-semibold text-gray-900 dark:text-white">Spacing</h2>
    {#each spacingVariables as textVariable}
      <p class={`mb-2 ${textVariable} bg-gray-200`}>{textVariable} - The quick brown fox jumps over the lazy dog.</p>
    {/each}
  </div>

  <div class="flex flex-wrap gap-4 p-8">
    <h2 class="w-full text-2xl font-semibold text-gray-900 dark:text-white">Leading</h2>
    {#each leadingVariables as leading}
      <p class={`mb-2 ${leading} bg-gray-200`}>{leading} - The quick brown fox jumps over the lazy dog.</p>
    {/each}
  </div>

  <!-- trackingVariables classes -->
  <div class="flex flex-wrap gap-4 p-8">
    <h2 class="w-full text-2xl font-semibold text-gray-900 dark:text-white">Tracking</h2>
    {#each trackingVariables as trackingVariable}
      <p class={`mb-2 ${trackingVariable} bg-gray-200`}>{trackingVariable} - The quick brown fox jumps over the lazy dog.</p>
    {/each}
  </div>

  <!-- borderRadiusVariables classes -->
  <div class="flex flex-wrap gap-4 p-8">
    <h2 class="w-full text-2xl font-semibold text-gray-900 dark:text-white">Border Radius</h2>
    {#each borderRadiusVariables as borderRadiusVariable}
      <p class={`leading-heading-none mb-2 ${borderRadiusVariable} bg-gray-200`}>{borderRadiusVariable} - The quick brown fox jumps over the lazy dog.</p>
    {/each}
  </div>
</div>
