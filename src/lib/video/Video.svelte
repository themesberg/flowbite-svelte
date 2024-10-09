<script lang="ts">
  import { type VideoProps as Props } from "./index";

  let { children, type = "video/mp4", trackSrc, src, srclang = "en", label = "english_captions", class: classname, ...restProps }: Props = $props();
</script>

<video {...restProps} class={classname}>
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
@props: children: Snippet;
@props:type: string = "video/mp4";
@props:trackSrc: string;
@props:src: string;
@props:srclang: string = "en";
@props:label: string = "english_captions";
@props:class: string;
-->
