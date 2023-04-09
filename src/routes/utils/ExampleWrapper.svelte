<script lang="ts">
  import { onMount } from 'svelte';
  import classNames from 'classnames';

  import ExampleDarkMode from './ExampleDarkMode.svelte';

  export let divClass = 'w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-2 sm:p-6';

  // the source of the example, if you want it
  export let src: any = undefined;

  // all meta tags of the code block
  export let meta: any = undefined;

  let browserSupport: boolean;
  let code: HTMLElement;

  // suppress vite-plugin-svelte warning about unused props
  $: src, meta;

  let showExpandButton: boolean = false;
  let expand: boolean = false;
  let dark: boolean = false;

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

  function checkOverflow(el: HTMLElement) {
    const isOverflowingY = el.clientHeight < el.scrollHeight;
    showExpandButton = isOverflowingY;
    el.firstElementChild?.classList.add('-mb-8');
  }
</script>

<div class="mt-8 code-example">
  {#if !meta.hideOutput}
    <div
      class="w-full p-4 border border-gray-200 bg-gray-50 rounded-t-xl dark:border-gray-600 dark:bg-gray-700">
      <div class="grid grid-cols-2">
        <span class="inline-flex items-center text-gray-800 dark:text-white">Example</span>
        <div class="ml-auto">
          <ExampleDarkMode on:click={() => (dark = !dark)} />
        </div>
      </div>
    </div>

    <div class="code-preview-wrapper">
      <div
        class="flex p-0 bg-white border-gray-200 bg-gradient-to-r code-preview dark:bg-gray-900 border-x dark:border-gray-600"
        class:dark>
        <div class="w-full code-responsive-wrapper">
          <div class={classNames(divClass, meta.class)}>
            <slot name="example" />
          </div>
        </div>
      </div>
    </div>
  {/if}

  <div class="code-syntax-wrapper">
    <div class="relative border-gray-200 border-y border-x code-syntax dark:border-gray-600">
      <div
        class="grid w-full grid-cols-2 border-b border-gray-200 bg-gray-50 rounded-t-md dark:bg-gray-700 dark:border-gray-600">
        <ul class="flex text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          <li>
            <span
              class="inline-block w-full p-2 px-3 text-gray-800 bg-gray-100 border-r border-gray-200 dark:text-white dark:bg-gray-800 dark:border-gray-600"
              >Svelte</span>
          </li>
        </ul>
        <div class="flex justify-end">
          {#if browserSupport}
            <button
              on:click={(e) => copyToClipboard(e)}
              data-tooltip-placement="bottom"
              type="button"
              data-copy-state="copy"
              class="flex items-center px-3 py-2 text-xs font-medium text-gray-600 bg-gray-100 border-l border-gray-200 dark:border-gray-600 dark:text-gray-400 dark:bg-gray-800 hover:text-blue-700 dark:hover:text-white copy-to-clipboard-button">
              <svg
                class="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                ><path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
              <span class="copy-text">Copy</span>
            </button>
          {/if}
        </div>
      </div>
      <div class="relative">
        <div class:overflow-hidden={!expand} class:max-h-72={!expand} tabindex="-1" use:checkOverflow>
          <div class="highlight">
            <pre bind:this={code} class="language-svelte !-mt-2"><slot name="code" /></pre>
          </div>
        </div>
        {#if showExpandButton}
          <button
            on:click={() => (expand = !expand)}
            data-expand-code=""
            type="button"
            class="absolute bottom-0 left-0 py-2.5 px-5 w-full text-sm font-medium text-gray-900 bg-gray-100 border-t border-gray-200 hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-700 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >Expand code</button>
        {/if}
      </div>
    </div>
  </div>
</div>
