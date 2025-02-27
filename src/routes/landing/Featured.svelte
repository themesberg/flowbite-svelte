<script lang="ts">
  import Dev from '../utils/icons/Dev.svelte';
  import Reddit from '../utils/icons/Reddit.svelte';
  import YouTubeFull from '../utils/icons/YouTubeFull.svelte';
  import Hunt from '../utils/icons/Hunt.svelte';
  import Combinator from '../utils/icons/Combinator.svelte';
  import Section from './utils/Section.svelte';

  const features = {
    '#reddit': Reddit,
    '#dev': Dev,
    '#hunt': Hunt,
    '#combinator': Combinator,
    '#youtube': YouTubeFull
  };
</script>

<Section>
  <div class="flex flex-col gap-2">
    <div class="mx-auto text-base tracking-tight lg:hidden mb-4">Featured in:</div>
    <div class="flex flex-wrap items-center gap-8 justify-center lg:hidden">
      {#each Object.entries(features) as [href, comp]}
        <!-- a {href} --><svelte:component this={comp} /><!-- /a -->
      {/each}
    </div>
    <div class="items-center gap-8 justify-center self-stretch py-2 hidden lg:flex flex-wrap">
      <div class="text-base tracking-tight">Featured in:</div>
      {#each Object.entries(features) as [href, comp]}
        <!-- a {href} --><svelte:component this={comp} /><!-- /a -->
      {/each}
    </div>
  </div>
</Section>
