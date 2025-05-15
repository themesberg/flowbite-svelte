<script lang="ts">
  import Button from "$lib/buttons/Button.svelte";
  import GradientButton from "$lib/buttons/GradientButton.svelte";
  import type { SpeedDialTriggerProps, ButtonProps, GradientButtonProps } from "$lib";

  let { children, name = "Open actions menu", gradient = false, icon, pill = true, color, class: className, ...restProps }: SpeedDialTriggerProps = $props();

  const buttonProps = $derived({
    pill,
    color,
    ...restProps,
    class: ["group p-3!", className]
  });
</script>

{#snippet moving_cross()}
  <svg aria-hidden="true" class="h-8 w-8 transition-transform group-hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
  </svg>
{/snippet}

{#if gradient}
  <GradientButton {...buttonProps as GradientButtonProps}>
    {#if icon}
      {@render icon()}
    {:else}
      {@render moving_cross()}
    {/if}
    <span class="sr-only">{name}</span>
  </GradientButton>
{:else}
  <Button {...buttonProps as ButtonProps}>
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
[Go to docs](https://flowbite-svelte.com/)
## Type
[SpeedDialTriggerProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1400)
## Props
@prop children
@prop name = "Open actions menu"
@prop gradient = false
@prop icon
@prop pill = true
@prop color
@prop class: className
@prop ...restProps
-->
