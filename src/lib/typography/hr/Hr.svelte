<script lang="ts">
  import clsx from "clsx";
  import { hr } from "./index";
  import type { HrProps } from "$lib/types";

  let { children, divClass, class: className, innerDivClass, ...restProps }: HrProps = $props();

  let { base, container, content } = $derived(hr({ withChildren: !!children }));
</script>

{#if children}
  <div {...restProps} class={container({ class: divClass })}>
    <hr class={base({ class: clsx(className) })} />
    <div class={content({ class: innerDivClass })}>
      {@render children()}
    </div>
  </div>
{:else}
  <hr class={base({ class: clsx(className) })} {...restProps} />
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[HrProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1739)
## Props
@prop children
@prop divClass
@prop class: className
@prop innerDivClass
@prop ...restProps
-->
