<script lang="ts">
  import type { VideoProps } from "$lib/types";

  let { children, type = "video/mp4", trackSrc, src, srclang = "en", label = "english_captions", class: classname, ...restProps }: VideoProps = $props();
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
[Go to docs](https://flowbite-svelte.com/)
## Type
[VideoProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1984)
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
