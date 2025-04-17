<script lang="ts">
  import { CloseButton } from "$lib";
  import { fade } from "svelte/transition";
  import { type BannerProps, banner } from "./index";
  import type { ParamsType } from "../types";
  import clsx from "clsx";

  let { children, header, open = $bindable(true), dismissable = true, color = "gray", type, class: className, innerClass, transition = fade, params, ...restProps }: BannerProps = $props();

  const { base, insideDiv, dismissable: dismissableClass } = $derived(banner({ type, color }));
</script>

{#if open}
  <div tabindex="-1" class={base({ class: clsx(className) })} {...restProps} transition:transition={params as ParamsType}>
    <div class={insideDiv({ class: innerClass })}>
      {@render children?.()}
    </div>

    {#if dismissable}
      <div class="flex items-center justify-end">
        <CloseButton
          class={dismissableClass()}
          {color}
          ariaLabel="Remove banner"
          onclick={() => {
            open = false;
          }}
        />
      </div>
    {/if}
  </div>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte-next.com/)
## Props
@props: children: any;
@props:header: any;
@props:open: any = $bindable(true);
@props:dismissable: any = true;
@props:color: any = "gray";
@props:type: any;
@props:class: string;
@props:innerClass: any;
@props:transition: any = fade;
@props:params: any;
-->
