<script lang="ts">
  import Dev from '../icons/Dev.svelte';
  import Reddit from '../icons/Reddit.svelte';
  import YouTube from '../icons/YouTubeFull.svelte';
  import Hunt from '../icons/Hunt.svelte';
  import Combinator from '../icons/Combinator.svelte';
</script>

<div class="py-6 px-4 lg:px-20">
  <div class="flex flex-col px-4 gap-2">
    <div class="mx-auto text-base tracking-tight lg:hidden">Featured in:</div>
    <div class="flex flex-col sm:flex-row items-center gap-8 justify-center self-stretch lg:hidden">
      <a href="/"><Reddit small /></a>
      <a href="/"><Dev small /></a>
      <a href="/"><Hunt small /></a>
      <a href="/"><Combinator small /></a>
      <a href="/"><YouTube /></a>
    </div>
    <div class="items-center gap-8 justify-center self-stretch py-2 hidden lg:flex">
      <div class="text-base tracking-tight">Featured in:</div>
      <a href="/"><Reddit /></a>
      <a href="/"><Dev /></a>
      <a href="/"><Hunt /></a>
      <a href="/"><Combinator /></a>
      <a href="/"><YouTube /></a>
    </div>
  </div>
</div>
