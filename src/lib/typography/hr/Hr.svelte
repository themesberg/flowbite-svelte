<script lang="ts">
  import { type HrProps as Props, hr } from "./index";

  let { children, divClass, hrClass, innerDivClass, ...restProps }: Props = $props();

  let { base, container, content } = $derived(hr({ withChildren: !!children }));
</script>

{#if children}
  <div {...restProps} class={container({ class: divClass })}>
    <hr class={base({ class: hrClass })} />
    <div class={content({ class: innerDivClass })}>
      {@render children()}
    </div>
  </div>
{:else}
  <hr class={base({ class: hrClass })} {...restProps} />
{/if}

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children: any;
@props:divClass: any;
@props:hrClass: any;
@props:innerDivClass: any;
-->
