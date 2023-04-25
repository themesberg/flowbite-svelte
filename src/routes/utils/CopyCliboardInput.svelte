<script lang="ts">
  import Input from '$lib/forms/Input.svelte';
  import Tooltip from '$lib/tooltips/Tooltip.svelte';
  import Check from './icons/Check.svelte';
  import Clipboard from './icons/Clipboard.svelte';

  const show = ({ detail }: { detail: boolean }) => detail || set_tooltip(false);
  const text_copied = 'Copied!';
  const text_not_copied = 'Copy to clipboard';

  let placeholder: string = 'npm i flowbite flowbite-svelte';
  let tooltip_text: string = text_not_copied;
  let open: boolean | undefined = undefined;

  function set_tooltip(copied: boolean) {
    tooltip_text = copied ? text_copied : text_not_copied;
    open = copied || undefined;
  }

  const copyToClipboard = async (e: MouseEvent) => {
    if (tooltip_text === text_copied) return;

    const REG_HEX = /&#x([a-fA-F0-9]+);/g;
    const decodedText = placeholder.replace(REG_HEX, function (_match, group1) {
      const num = parseInt(group1, 16);
      return String.fromCharCode(num);
    });

    open = false; // must be before `await`
    await window.navigator.clipboard.writeText(decodedText);

    // (e?.target as HTMLButtonElement)?.blur();
    set_tooltip(true);
  };
</script>

<Input size="lg" {placeholder} readonly class="!text-sm focus:ring-primary-600 focus:border-primary-600 md:min-w-[255px] {$$props.class ?? ''}">
  <div slot="right" class="flex items-center pl-32">
    <button on:click={copyToClipboard} class="hover:text-primary-700 py-2 px-1">
      {#if tooltip_text == text_not_copied}<Clipboard />{:else}<Check />{/if}
    </button>

    <Tooltip bind:open on:show={show}>{tooltip_text}</Tooltip>
  </div>
</Input>
