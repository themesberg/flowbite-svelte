<script lang="ts">
  import { thumbnail } from "./theme";
  import type { ThumbnailProps } from "$lib";
  import clsx from "clsx";
  import { getTheme } from "$lib/theme-provider/themeUtils";

  let { selected, class: className, ...restProps }: ThumbnailProps = $props();

  const theme = $derived(getTheme("thumbnail"));
</script>

<img {...restProps} class={thumbnail({ selected, class: clsx(theme, className) })} data-scope="thumbnail" data-part="image" />

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ThumbnailProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L499)
## Props
@prop selected
@prop class: className
@prop ...restProps
-->
