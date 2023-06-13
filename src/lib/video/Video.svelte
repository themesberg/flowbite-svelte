<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  export let src: string;
  export let type: string = 'video/mp4';
  export let trackSrc: string = '';
  export let srclang: string = 'en';
  export let label: string = 'english_captions';

  let videoClass = twMerge($$props.class);
</script>

<video {...$$restProps} class={videoClass}>
  <source {src} {type} />
  <slot />
  <track src={trackSrc} kind="captions" {srclang} {label} />
  Your browser does not support the video tag.
</video>

<!--
  @component
  ## Features
  [Go to Video](https://flowbite-svelte.com/docs/components/video)
  - Setup
  - Video player
  - Autoplay
  - Muted
  - Sizes
  ## Props
  @prop src: string;
  @prop type: string = 'video/mp4';
  @prop trackSrc: string = '';
  @prop srclang: string = 'en';
  @prop label: string = 'english_captions';
-->
