<script lang="ts">
  import type { VideoProps } from "$lib/types";
  import { cn } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, type = "video/mp4", trackSrc, src, srclang = "en", label = "english_captions", class: classname, ...restProps }: VideoProps = $props();

  const theme = getTheme("span");
</script>

<video {...restProps} class={cn(classname, theme)}>
  <source {src} {type} />
  {#if children}
    {@render children()}
  {/if}
  <track src={trackSrc} kind="captions" {srclang} {label} />
  Your browser does not support the video tag.
</video>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[VideoProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1988)
## Props
@prop children
@prop type = "video/mp4"
@prop trackSrc
@prop src
@prop srclang = "en"
@prop label = "english_captions"
@prop class: classname
@prop ...restProps
-->
