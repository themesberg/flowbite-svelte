<script lang="ts">
  import Button from "$lib/buttons/Button.svelte";
  import GradientButton from "$lib/buttons/GradientButton.svelte";
  import type { SpeedDialTriggerProps as Props } from "./type";
  import type { GradientButtonProps } from "../buttons/type";

  let { children, name = "Open actions menu", gradient = false, icon, pill = true, color = "blue", class: className, ...restProps }: Props = $props();

  const gradientButtonProps = $derived({
    pill,
    color,
    ...restProps,
    class: ["p-3!", className]
  } as GradientButtonProps);
</script>

{#snippet moving_cross()}
  <svg aria-hidden="true" class="h-8 w-8 transition-transform group-hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
  </svg>
{/snippet}

{#if gradient}
  <GradientButton {pill} {...gradientButtonProps} class={["p-3!", className]}>
    {#if icon}
      {@render icon()}
    {:else}
      {@render moving_cross()}
    {/if}
    <span class="sr-only">{name}</span>
  </GradientButton>
{:else}
  <Button {pill} {...restProps} class={["p-3!", className]}>
    {#if icon}
      {@render icon()}
    {:else}
      {@render moving_cross()}
    {/if}
    <span class="sr-only">{name}</span>
  </Button>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte-next.com/)
## Props
@props: children: any;
@props:name: any = "Open actions menu";
@props:gradient: any = false;
@props:icon: any;
@props:pill: any = true;
@props:color: any = "blue";
@props:class: string;
-->
