<script lang="ts">
  import { thumbnail } from "./theme";
  import type { ThumbnailProps } from "$lib";
  import clsx from "clsx";
  import { getTheme } from "$lib/theme/themeUtils";

  let { selected, class: className, ...restProps }: ThumbnailProps = $props();

  const theme = getTheme("thumbnail");
</script>

<img {...restProps} class={thumbnail({ selected, class: clsx(theme, className) })} />

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ThumbnailProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L444)
## Props
@prop selected
@prop class: className
@prop ...restProps
-->
