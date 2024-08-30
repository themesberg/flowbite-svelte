<script lang="ts">
  import { twJoin, twMerge } from 'tailwind-merge';
  import Button from '$lib/buttons/Button.svelte';
  import ExampleDarkMode from './ExampleDarkMode.svelte';
  import ExampleRTL from './ExampleRTL.svelte';
  import GitHub from './icons/GitHub.svelte';
  // import { SvelteURL } from 'svelte/reactivity';
  // import Tooltip from '$lib/tooltip/Tooltip.svelte';
  import { DesktopPcOutline, TabletOutline, MobilePhoneOutline } from 'flowbite-svelte-icons';
  // import { onMount } from 'svelte';
  let {divClass = 'w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6', src, meta}:{divClass?: string, src: any, meta: any} = $props();

  // the source of the example, if you want it
  // export let src: any = undefined;

  // all meta tags of the code block
  // export let meta: any = undefined;

  let browserSupport: boolean = $state(false);
  let code: HTMLElement;
  let iframe: HTMLIFrameElement | undefined =$state();
  let iframeLoad: boolean = $state(false);
  let codeResponsiveContent: HTMLDivElement | undefined = $state();

  // https://github.com/themesberg/flowbite-svelte/blob/main/src/routes/docs/components/accordion.md#always-open
  const gitHub = new URL('https://github.com/themesberg/flowbite-svelte/blob/main/src/routes/');

  let path: URL = $state(gitHub);

  // suppress vite-plugin-svelte warning about unused props
  // $: src, meta;

  let showExpandButton: boolean = $state(false);
  let expand: boolean = $state(false);
  let dark: boolean = $state(false);
  let rtl: NotificationDirection | undefined = $state();
  let responsiveDevice: keyof typeof responsiveSize = $state('desktop');

  const responsiveSize = {
    mobile: 'max-w-sm',
    tablet: 'max-w-lg',
    desktop: ''
  };

  function updateDarkMode(ev: Event) {
    const target = ev.target as HTMLElement,
      isDark = target.ownerDocument.documentElement.classList.contains('dark');
    dark = isDark;
  }

  function init(node: HTMLElement) {
    browserSupport = !!window?.navigator?.clipboard;
    const button: HTMLButtonElement = node.ownerDocument.querySelector('button[aria-label="Dark mode"]') as HTMLButtonElement;
    button?.addEventListener('click', updateDarkMode);

    dark = node.ownerDocument.documentElement.classList.contains('dark');

    return {
      destroy() {
        button?.removeEventListener('click', updateDarkMode);
      }
    };
  }

  let node: HTMLElement;
  

  const copyToClipboard = async (e: MouseEvent) => {
    const REG_HEX = /&#x([a-fA-F0-9]+);/g;
    const decodedText = code.innerText.replace(REG_HEX, function (_match, group1) {
      const num = parseInt(group1, 16);
      return String.fromCharCode(num);
    });

    await window.navigator.clipboard.writeText(decodedText);

    const button: HTMLButtonElement | null = e?.target as HTMLButtonElement;
    button?.blur();

    const lastChild = button?.lastChild;
    if (lastChild) {
      lastChild.textContent = 'Copied';
      setTimeout(() => (lastChild.textContent = 'Copy'), 3000);
    }
  };

  function checkOverflow(el: HTMLElement) {
    const isOverflowingY = el.clientHeight < el.scrollHeight;
    showExpandButton = isOverflowingY;
    // el.firstElementChild?.classList.add('-mb-8');
  }

  let copy_text = 'Copy';

  const injectContent = () => {
    iframeLoad = true;
    // get only css and style frome head
    const externalCss = document.querySelectorAll('head link[href*="https://"][rel="stylesheet"], head style');
    const internalCss = Array.from(document.styleSheets).filter((el) => el.href?.includes(document.location.hostname));
    // extract style to avoid multiple network request to css
    const extractInlineCss = internalCss.reduce((acc, el) => {
      acc += Array.from(el.cssRules)
        .map((rule) => rule.cssText)
        .join(' ');
      return acc;
    }, '');
    const styleTag = document.createElement('style');
    styleTag.innerHTML = extractInlineCss;
    // extract outerHtlm in order to clone html
    const headContent = Array.from(externalCss).reduce((acc, el) => (acc += el.outerHTML), '');
    // put the content of head in the head of the iframe
    iframe?.contentDocument?.head.insertAdjacentHTML('beforeend', `${headContent}${styleTag.outerHTML}` || '');
    // append the component content in the iframe body
    iframe?.contentDocument?.body.append(...iframe.childNodes);
    // update the height of the preview based on the height of the iframe content
    updateHeightContent();
    // listen change on height of the iframe content and update the preview height
    if (iframe?.contentDocument?.body.firstChild) {
      const resizeObserver = new ResizeObserver(updateHeightContent);
      resizeObserver.observe(iframe.contentDocument.body.firstElementChild as Element);
    }
    iframe = iframe;
  };

  const updateHeightContent = () => {
    if (codeResponsiveContent) {
      codeResponsiveContent.style.height = `${(iframe?.contentDocument?.body?.firstElementChild as HTMLDivElement)?.offsetHeight || 0}px`;
    }
  };

  // onMount(() => {
    // workaround for svelte issue https://github.com/sveltejs/svelte/issues/6967
    
  // });

  // $: {
  //   if (iframe) {
  //     // toggle dark mode class in the iframe
  //     dark ? iframe?.contentDocument?.documentElement.classList.add('dark') : iframe?.contentDocument?.documentElement.classList.remove('dark');
  //   }
  // }

  // $: {
  //   if (iframe && iframe.contentDocument) {
  //     // toggle dir value in the iframe
  //     iframe.contentDocument.documentElement.dir = rtl ?? '';
  //   }
  // }
  $effect(
    () => {
      setTimeout(() => {
      if (iframe && !iframeLoad) {
        iframe.dispatchEvent(new Event('load'));
      }
      }, 500);
      
      if (node) {
      // find closes previous section anchor
      const section = [...document.querySelectorAll('#mainContent > :where(h2, h3) > [id]')]
        .map((x: Element) => ({ id: x.id, top: x.parentElement?.offsetTop ?? Infinity }))
        .filter((x) => x.top < node.offsetTop)
        .slice(-1)
        .shift();

      if (section) {
        const pathname = new URL(node.baseURI).pathname;
        path = new URL(pathname.slice(1) + '.md', gitHub);
        path.hash = section.id.replaceAll('_', '-').replaceAll('/', '').toLowerCase();
      }
    }
 
    if (iframe) {
        // toggle dark mode class in the iframe
        dark ? iframe?.contentDocument?.documentElement.classList.add('dark') : iframe?.contentDocument?.documentElement.classList.remove('dark');
      }

      if (iframe && iframe.contentDocument) {
        // toggle dir value in the iframe
        iframe.contentDocument.documentElement.dir = rtl ?? '';
      }
    }
  ) 
</script>

<div class="mt-8 code-example" bind:this={node} use:init>
  {#if !meta.hideOutput}
    <div class="w-full p-4 border border-gray-200 bg-gray-50 rounded-t-xl dark:border-gray-600 dark:bg-gray-700">
      <div class="grid {!!meta.hideResponsiveButtons ? 'grid-cols-2' : 'grid-cols-2 sm:grid-cols-3'}">
        {#if path}
          <Button size="xs" color="alternative" class="dark:!bg-gray-900 w-fit hover:text-primary-600 gap-2" href={'' + path} target="_blank" rel="noreferrer">
            <GitHub size="sm" />Edit on GitHub
          </Button>
          {#if !meta.hideResponsiveButtons}
            <div class="justify-center gap-x-2 hidden sm:flex">
              <Button size="xs" color="alternative" onclick={() => (responsiveDevice = 'desktop')}>
                <DesktopPcOutline size="sm" />
              </Button>
              <Button size="xs" color="alternative" onclick={() => (responsiveDevice = 'tablet')}>
                <TabletOutline size="sm" />
              </Button>
              <Button size="xs" color="alternative" onclick={() => (responsiveDevice = 'mobile')}>
                <MobilePhoneOutline size="sm" />
              </Button>
            </div>
          {/if}
          <div class="ms-auto flex">
            <ExampleDarkMode onclick={() => (dark = !dark)} {dark} />
            <ExampleRTL bind:rtl />
          </div>
        {/if}
      </div>
    </div>

    <div class="code-preview-wrapper">
      <div class="flex p-0 bg-white border-gray-200 bg-gradient-to-r code-preview dark:bg-gray-900 border-x dark:border-gray-600" class:dark dir={rtl}>
        <div class="w-full code-responsive-wrapper">
          <div class="code-responive-content {twJoin(!meta.hideResponsiveButtons && 'mx-auto', responsiveSize[responsiveDevice])}" bind:this={codeResponsiveContent}>
            {#if !meta.hideResponsiveButtons}
              <iframe bind:this={iframe} class="w-full h-full" title="iframe-code-content" onload={injectContent}>
                <div class={twMerge(divClass, meta.class)}>
                  
                  {code}
                </div>
              </iframe>
            {:else}
              <div class={twMerge(divClass, meta.class)}>
                {code}
              </div>
            {/if}
          </div>
        </div>
      </div>
    </div>
  {/if}

  <div class="code-syntax-wrapper">
    <div class="relative border-gray-200 border-y border-x code-syntax dark:border-gray-600">
      <div class="grid w-full grid-cols-2 border-b border-gray-200 bg-gray-50 rounded-t-md dark:bg-gray-700 dark:border-gray-600">
        <ul class="flex text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          <li>
            <span class="inline-block w-full p-2 px-3 text-gray-800 bg-gray-100 border-e border-gray-200 dark:text-white dark:bg-gray-800 dark:border-gray-600"> Svelte </span>
          </li>
        </ul>
        <div class="flex justify-end">
          {#if browserSupport}
            <button onclick={(e) => copyToClipboard(e)} type="button" class="flex items-center px-3 py-2 text-xs font-medium text-gray-600 bg-gray-100 border-s border-gray-200 dark:border-gray-600 dark:text-gray-400 dark:bg-gray-800 hover:text-primary-700 dark:hover:text-white copy-to-clipboard-button">
              <svg class="w-4 h-4 me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              {copy_text}
            </button>
            <div>Copy to clipboard.</div>
          {/if}
        </div>
      </div>
      <div class="relative">
        <div class="overflow-hidden" class:max-h-72={!expand} tabindex="-1" use:checkOverflow>
          <div class="highlight">
            <pre bind:this={code} class="language-svelte !-mt-2 !rounded-none">
              {code}
            </pre>
          </div>
        </div>
        {#if showExpandButton && !expand}
          <button onclick={() => (expand = !expand)} data-expand-code="" type="button" class="absolute bottom-0 start-0 py-2.5 px-5 w-full text-sm font-medium text-gray-900 bg-gray-100 border-t border-gray-200 hover:bg-gray-100 hover:text-primary-700 dark:bg-gray-700 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"> Expand code </button>
        {/if}
      </div>
    </div>
  </div>
</div>