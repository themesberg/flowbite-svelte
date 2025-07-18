<script lang="ts">
  import Button from "$lib/buttons/Button.svelte";
  import clsx from "clsx";
  import { type ClipboardProps } from "$lib";
  import { clipboard } from "./theme";
  import type { MouseEventHandler } from "svelte/elements";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, embedded = false, value = $bindable(""), success = $bindable(false), onclick, class: className = "", ...restProps }: ClipboardProps = $props();

  const theme = getTheme("clipboard");

  const copyToClipboard: MouseEventHandler<HTMLButtonElement> = async (ev) => {
    onclick?.(ev);
    if (ev.defaultPrevented) return;

    if (success) return;

    success = true;

    const REG_HEX = /&#x([a-fA-F0-9]+);/g;
    const decodedText = value.replace(REG_HEX, function (_match, group1) {
      const num = parseInt(group1, 16);
      return String.fromCharCode(num);
    });

    try {
      await window.navigator.clipboard.writeText(decodedText);
    } catch (error) {
      console.error("Failed to copy to clipboard:", error);
      success = false;
      return;
    }

    setTimeout(() => {
      success = false;
    }, 2000);
  };
</script>

<Button onclick={copyToClipboard} {...restProps} class={clipboard({ embedded, class: clsx(theme, className) })}>
  {@render children?.(success)}
</Button>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ClipboardProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L423)
## Props
@prop children
@prop embedded = false
@prop value = $bindable("")
@prop success = $bindable(false)
@prop onclick
@prop class: className = ""
@prop ...restProps
-->
