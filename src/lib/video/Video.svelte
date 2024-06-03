<script lang="ts">
  import type { Snippet } from 'svelte';
  interface Props {
    children?: Snippet;
    src: string ;
    controls?: boolean ;
    autoplay?: boolean ;
    muted?: boolean ;
    type?: string ;
    trackSrc?: string ;
    srclang?: string ;
    label?: string ;
    class?: string ;
  }

  let {
    children,
    src,
    controls,
    autoplay,
    muted,
    type = 'video/mp4',
    trackSrc,
    srclang = 'en',
    label = 'english_captions',
    class: classname,
    ...attributes
  }: Props = $props();
</script>

<video {...attributes} class={classname} {controls} {autoplay} {muted}>
  <source {src} {type} />
    {#if children}
      {@render children()}
    {/if}
  <track src={trackSrc} kind="captions" {srclang} {label} />
  Your browser does not support the video tag.
</video>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop src
@prop controls
@prop autoplay
@prop muted
@prop type = 'video/mp4'
@prop trackSrc
@prop srclang = 'en'
@prop label = 'english_captions'
@prop class: classname
@prop ...attributes
-->
