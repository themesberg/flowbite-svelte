<script lang="ts">
  import type { SizeType } from "$lib/types";
  import { getContext } from "svelte";
  import { CloseButton } from "$lib";
  import { input, clampSize } from ".";
  import type { InputProps, InputValue } from "$lib/types";
  import clsx from "clsx";

  let { children, left, right, value = $bindable(), clearable = false, size, color = "default", class: className, classLeft, classRight, divClass, ...restProps }: InputProps<InputValue> = $props();

  // tinted if put in component having its own background
  let background: boolean = getContext("background");

  let group: { size: SizeType } = getContext("group");
  let isGroup = !!group;
  let _size = $derived(size || clampSize(group?.size) || "md");
  const _color = $derived(color === "default" && background ? "tinted" : color);

  const { base, input: inputCls, left: leftCls, right: rightCls } = $derived(input({ size: _size, color: _color, group: isGroup, class: clsx(className) }));

  const clearAll = () => {
    value = undefined;
  };
</script>

{#snippet inputContent()}
  {#if left}
    <div class={leftCls({ class: classLeft })}>
      {@render left()}
    </div>
  {/if}
  {#if children}
    {@render children({ ...restProps, class: inputCls() })}
  {:else}
    <input {...restProps} bind:value class={inputCls({ class: clsx(className) })} />
  {/if}
  {#if right}
    <div class={rightCls({ class: classRight })}>
      {@render right()}
    </div>
  {/if}
  {#if clearable && value && `${value}`.length > 0}
    <CloseButton {size} onclick={clearAll} class={rightCls({ class: classRight })} />
  {/if}
{/snippet}

{#if group}
  {@render inputContent()}
{:else if right || left}
  <div class={base({ class: divClass })}>
    {@render inputContent()}
  </div>
{:else}
  {@render inputContent()}
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte-next.com/)
## Props
@props: 
-->
