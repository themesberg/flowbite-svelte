<script lang="ts">
  import type { VideoProps } from "$lib/types";
  import clsx from "clsx";
  import { video } from "./theme";
  import { getTheme } from "$lib/theme-provider/themeUtils";

  let { children, type = "video/mp4", trackSrc, src, srclang = "en", label = "english_captions", class: className, classes, ...restProps }: VideoProps = $props();

  const styling = $derived(classes);
  const theme = $derived(getTheme("video"));

  const { base, source, track } = video();
</script>

<video {...restProps} data-scope="video" data-part="base" class={base({ class: clsx(theme?.base, className) })}>
  <source data-part="source" class={source({ class: clsx(theme?.source, styling?.source) })} {src} {type} />
  {#if children}
    {@render children()}
  {/if}
  <track data-part="track" class={track({ class: clsx(theme?.track, styling?.track) })} src={trackSrc} kind="captions" {srclang} {label} />
  Your browser does not support the video tag.
</video>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[VideoProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1969)
## Props
@prop children
@prop type = "video/mp4"
@prop trackSrc
@prop src
@prop srclang = "en"
@prop label = "english_captions"
@prop class: className
@prop classes
@prop ...restProps
-->
