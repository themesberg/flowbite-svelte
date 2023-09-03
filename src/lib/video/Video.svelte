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
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let src: string;
@prop export let type: string = 'video/mp4';
@prop export let trackSrc: string = '';
@prop export let srclang: string = 'en';
@prop export let label: string = 'english_captions';
-->
