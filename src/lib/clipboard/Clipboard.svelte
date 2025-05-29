<script lang="ts">
  import Button from "$lib/buttons/Button.svelte";
  import clsx from "clsx";
  import type { ClipboardProps } from "./index";
  import { clipboard } from "./theme";

  let { children, embedded = false, value = $bindable(""), success = $bindable(false), onclick, class: className = "", ...restProps }: ClipboardProps = $props();

  const copyToClipboard = async (e: MouseEvent) => {
    if (success) return;

    success = true;

    const REG_HEX = /&#x([a-fA-F0-9]+);/g;
    const decodedText = value.replace(REG_HEX, function (_match, group1) {
      const num = parseInt(group1, 16);
      return String.fromCharCode(num);
    });

    await window.navigator.clipboard.writeText(decodedText);

    setTimeout(() => {
      success = false;
    }, 2000);
  };
</script>

<Button onclick={copyToClipboard} {...restProps} class={clipboard({ embedded, class: clsx(className) })}>
  {@render children?.(success)}
</Button>
