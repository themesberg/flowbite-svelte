<script lang="ts">
  import clsx from "clsx";
  import { type HrProps as Props, hr } from "./index";

  let { children, divClass, class: className, innerDivClass, ...restProps }: Props = $props();

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
[Go to docs](https://flowbite-svelte-next.com/)
## Type
Props
## Props
@prop children
@prop divClass
@prop class: className
@prop innerDivClass
@prop ...restProps
-->
