<script lang="ts">
  import Button from "$lib/buttons/Button.svelte";
  import GradientButton from "$lib/buttons/GradientButton.svelte";
  import Popper from "$lib/utils/Popper.svelte";
  import { getSideAxis } from "@floating-ui/utils";
  import clsx from "clsx";
  import { setContext } from "svelte";
  import { speed_dial } from "./theme";
  import type { SpeedDialProps as Props, SpeedCtxType } from "./type";

  let { children, icon, button, popperClass, placement = "top", pill = true, tooltip = "left", trigger = "hover", textOutside = false, name = "Open actions menu", gradient = false, class: className, ontoggle, onbeforetoggle, ...restProps }: Props = $props();

  setContext<SpeedCtxType>("speed-dial", { pill, tooltip, textOutside });

  let vertical: boolean = $derived(getSideAxis(placement) === "y");

  let { base, popper } = $derived(speed_dial({ vertical }));
</script>

{#snippet moving_cross()}
  <svg aria-hidden="true" class="h-8 w-8 transition-transform group-hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
  </svg>
{/snippet}

<div class={base({ class: clsx(className) })}>
  {#if button}
    {@render button()}
  {:else if gradient}
    <GradientButton {pill} {name} {...restProps} class="p-3!">
      {#if icon}
        {@render icon()}
      {:else}
        {@render moving_cross()}
      {/if}
      <span class="sr-only">{name}</span>
    </GradientButton>
  {:else}
    <Button {pill} {name} {...restProps} class="p-3!">
      {#if icon}
        {@render icon()}
      {:else}
        {@render moving_cross()}
      {/if}
      <span class="sr-only">{name}</span>
    </Button>
  {/if}
  <Popper {trigger} arrow={false} {placement} {ontoggle} {onbeforetoggle} class="bg-transparent">
    <div class={popper({ class: popperClass })}>
      {@render children()}
    </div>
  </Popper>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@props: children: any;
@props:icon: any;
@props:button: any;
@props:popperClass: any;
@props:placement: any = "top";
@props:pill: any = true;
@props:tooltip: any = "left";
@props:trigger: any = "hover";
@props:textOutside: any = false;
@props:name: any = "Open actions menu";
@props:gradient: any = false;
@props:class: string;
@props:ontoggle: any;
@props:onbeforetoggle: any;
-->
