<script lang="ts">
  import clsx from "clsx";
  import { thumbnail } from "./theme";
  import type { ThumbnailProps as Props } from "./type";

  let { selected, class: className, ...restProps }: Props = $props();

  $effect(() => {
    console.log(thumbnail({ selected, class: clsx(className) }));
  });
</script>

<img {...restProps} class={thumbnail({ selected, class: clsx(className) })} />

<!--
@component
[Go to docs](https://flowbite-svelte-next.com/)
## Props
@props: selected: any;
@props:class: string;
-->
