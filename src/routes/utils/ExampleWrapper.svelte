<script lang="ts">
  import { onMount } from 'svelte';
  import classNames from 'classnames';

  import Button from '$lib/buttons/Button.svelte';

  export let divClass =
    'rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6';

  // the source of the example, if you want it
  export let src: any = undefined;

  // all meta tags of the code block
  export let meta: any = undefined;

  let browserSupport: boolean;
  let code: HTMLElement;

  // suppress vite-plugin-svelte warning about unused props
  $: src, meta;

  onMount(() => {
    browserSupport = !!window?.navigator?.clipboard;
  });

  const copyToClipboard = async (e: MouseEvent) => {
    const REG_HEX = /&#x([a-fA-F0-9]+);/g;
    const decodedText = code.innerText.replace(REG_HEX, function (_match, group1) {
      const num = parseInt(group1, 16);
      return String.fromCharCode(num);
    });

    await window.navigator.clipboard.writeText(decodedText);

    (e?.target as HTMLButtonElement)?.blur();
  };

  function hack(node: HTMLElement) {
    node.parentElement?.classList.add('w-full');
  }
</script>

<div use:hack class={classNames(divClass, meta.class)}>
  <slot name="example" />
</div>
<div class="code relative">
  {#if browserSupport}
    <div class="absolute top-2 right-2 opacity-50 hover:opacity-100">
      <Button on:click={(e) => copyToClipboard(e)} size="xs" color="alternative" pill={true}>Copy</Button>
    </div>
  {/if}
  <pre bind:this={code} class="language-svelte"><slot name="code" /></pre>
</div>
