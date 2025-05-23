<script lang="ts">
  import { twMerge } from "tailwind-merge";
  import clsx from "clsx";
  import { thumbnail } from "./theme";
  import type { ThumbnailProps } from "$lib/types";

  let { selected, class: className, ...restProps }: ThumbnailProps = $props();
</script>

<img {...restProps} class={twMerge(thumbnail({ selected}), clsx(className))} />

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ThumbnailProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L459)
## Props
@prop selected
@prop class: className
@prop ...restProps
-->
