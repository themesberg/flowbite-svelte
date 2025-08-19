<script lang="ts">
  import type { Snippet } from "svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import { codewrapper } from "./theme";
  interface Props extends HTMLAttributes<HTMLDivElement> {
    children?: Snippet;
    codeblock?: Snippet;
    innerClass?: string;
    class?: string;
  }
  let { children, codeblock, innerClass, class: classname }: Props = $props();
  const { base, inner } = $derived(codewrapper());
</script>

<div class={base({ class: classname })}>
  {#if children}
    <div class={inner({ class: innerClass })}>
      {@render children()}
    </div>
  {/if}
  {#if codeblock}
    {@render codeblock()}
  {/if}
</div>

<!--
@component
[Go to docs](https://runes-webkit.codewithshin.com/)
## Props
@props: children: any;
@props:codeblock: any;
@props:innerClass: any;
@props:class: string;
-->
