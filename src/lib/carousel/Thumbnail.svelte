<script lang="ts">
  import { thumbnail } from "./theme";
  import { type ThumbnailProps, cn } from "$lib";

  let { selected, class: className, ...restProps }: ThumbnailProps = $props();
  const imgCls = $derived(thumbnail({ selected }));
</script>

<img {...restProps} class={cn(imgCls, className)} />

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ThumbnailProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L477)
## Props
@prop selected
@prop class: className
@prop ...restProps
-->
