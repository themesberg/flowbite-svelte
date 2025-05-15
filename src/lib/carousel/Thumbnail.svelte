<script lang="ts">
  import clsx from "clsx";
  import { thumbnail } from "./theme";
  import type { ThumbnailProps } from "$lib/types";

  let { selected, class: className, ...restProps }: ThumbnailProps = $props();
</script>

<img {...restProps} class={thumbnail({ selected, class: clsx(className) })} />

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ThumbnailProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L421)
## Props
@prop selected
@prop class: className
@prop ...restProps
-->
