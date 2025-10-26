<script lang="ts">
  import { Input, Tooltip } from "$lib";
  import Check from "./icons/Check.svelte";
  import Clipboard from "./icons/Clipboard.svelte";

  let { class: clasName = "" } = $props();
  const show = (ev: ToggleEvent) => ev.newState == "open" || set_tooltip(false);
  const text_copied = "Copied!";
  const text_not_copied = "Copy to clipboard";

  let placeholder: string = "pnpm i -D flowbite-svelte flowbite";
  let tooltip_text: string = $state(text_not_copied);

  function set_tooltip(copied: boolean) {
    tooltip_text = copied ? text_copied : text_not_copied;
  }

  const copyToClipboard = async () => {
    if (tooltip_text === text_copied) return;

    const REG_HEX = /&#x([a-fA-F0-9]+);/g;
    const decodedText = placeholder.replace(REG_HEX, function (_match, group1) {
      const num = parseInt(group1, 16);
      return String.fromCharCode(num);
    });

    await window.navigator.clipboard.writeText(decodedText);

    set_tooltip(true);
  };
</script>

<Input size="lg" {placeholder} readonly class="focus:ring-primary-600 focus:border-primary-600 py-3 text-sm sm:text-sm md:min-w-[315px] {clasName}">
  {#snippet right()}
    <div class="flex items-center ps-32">
      <button onclick={copyToClipboard} class="hover:text-primary-700 px-1 py-2">
        {#if tooltip_text == text_not_copied}<Clipboard />{:else}<Check />{/if}
      </button>

      <Tooltip ontoggle={show}>{tooltip_text}</Tooltip>
    </div>
  {/snippet}
</Input>
