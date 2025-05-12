<script lang="ts">
  import Button from "$lib/buttons/Button.svelte";
  import Tooltip from "$lib/tooltip/Tooltip.svelte";
  import { DesktopPcOutline, MobilePhoneOutline, TabletOutline } from "flowbite-svelte-icons";
  import { mount, onMount } from "svelte";
  import { twJoin, twMerge } from "tailwind-merge";
  import ExampleDarkMode from "./ExampleDarkMode.svelte";
  import ExampleHelper from "./ExampleHelper.svelte";
  import ExampleRtl from "./ExampleRTL.svelte";
  import GitHub from "./icons/GitHub.svelte";

  // Define the props properly with TypeScript
  type Props = {
    src?: any;
    meta?: any;
    example?: any;
    code?: any;
    divClass?: string;
  };

  // Use typed props
  let { src = undefined, meta = undefined, example, code, divClass = "relative w-full mx-auto bg-linear-to-r p-6 bg-white dark:bg-gray-900" }: Props = $props();

  type NotificationDirection = "ltr" | "rtl" | "auto";

  // State variables
  let browserSupport = $state(false);
  let codeEl: HTMLElement | undefined = $state(undefined);
  let codeResponsiveContent: HTMLDivElement | undefined = $state(undefined);
  let path: URL | undefined = $state(undefined);
  let showExpandButton = $state(false);
  let expand = $state(false);
  let dark = $state(false);
  let independentDarkMode = $state(false); // Track if dark mode is independent
  let independentDark = $state(false); // Track the independent dark mode state
  let rtl: NotificationDirection = $state("auto");
  let responsiveDevice: keyof typeof responsiveSize = $state("desktop");
  let iframe: HTMLIFrameElement | undefined = $state(undefined);
  let iframeLoad = $state(false);
  let copy_text = "Copy";
  let documentObserver: MutationObserver | undefined = $state(undefined);

  const responsiveSize = {
    mobile: "max-w-sm",
    tablet: "max-w-lg",
    desktop: ""
  };

  const gitHub = new URL("https://github.com/themesberg/flowbite-svelte/blob/main/src/routes/");

  // This function will be called when document classes change
  function checkDarkMode(): void {
    if (document && document.documentElement) {
      // Get the current dark mode state from document
      const isDark = document.documentElement.classList.contains("dark");
      console.log("Dark mode detected from document:", isDark);

      // Reset independent mode when document dark mode changes
      if (independentDarkMode) {
        independentDarkMode = false;
        independentDark = false;
      }

      // Update local dark mode
      dark = isDark;
      syncIframeDarkMode();
    }
  }

  // Sync the iframe dark mode with the current dark state
  function syncIframeDarkMode(): void {
    if (iframe && iframe.contentDocument) {
      console.log("Syncing iframe dark mode:", dark);
      if (dark) {
        iframe.contentDocument.documentElement.classList.add("dark");
      } else {
        iframe.contentDocument.documentElement.classList.remove("dark");
      }
    }
  }

  // Toggle dark mode in ExampleWrapper
  function toggleDarkMode(): void {
    // Set independent mode
    independentDarkMode = true;

    // Toggle the independent dark mode state
    independentDark = !independentDark;

    // Use the independent dark mode state for iframe
    dark = independentDark;
    syncIframeDarkMode();
  }

  // Initialize component
  function init(node: HTMLElement) {
    browserSupport = !!window?.navigator?.clipboard;

    // Initial dark mode check
    dark = document.documentElement.classList.contains("dark");
    console.log("Initial dark mode state:", dark);

    // Set up a mutation observer to watch for class changes on documentElement
    documentObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          checkDarkMode();
        }
      });
    });

    // Start observing document element for class changes
    documentObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"]
    });

    // Find sections after a small delay to ensure DOM is ready
    setTimeout(() => find_sections(node), 0);

    return {
      destroy() {
        // Clean up the observer when component is destroyed
        if (documentObserver) {
          documentObserver.disconnect();
        }
      }
    };
  }

  function find_sections(node: HTMLElement): void {
    // find closest previous section anchor
    const sections = [...node.ownerDocument.querySelectorAll("#mainContent > :where(h2, h3) > [id]")];
    const sectionData = sections.map((x: Element) => ({
      id: x.id,
      top: x.parentElement?.offsetTop ?? Infinity,
      obj: x
    }));

    const filteredSections = sectionData.filter((x) => x.top < (node?.offsetTop ?? Infinity)).filter((x) => x.id);

    const section = filteredSections.slice(-1).shift();

    if (section) {
      const pathname = new URL(node.baseURI).pathname;
      path = new URL(pathname.slice(1) + ".md", gitHub);
      path.hash = section.id.replaceAll("_", "-").replaceAll("/", "").toLowerCase();
    }
  }

  const copyToClipboard = async (e: MouseEvent): Promise<void> => {
    if (!codeEl) return;

    const REG_HEX = /&#x([a-fA-F0-9]+);/g;
    const decodedText = codeEl.innerText.replace(REG_HEX, function (_match: string, group1: string) {
      const num = parseInt(group1, 16);
      return String.fromCharCode(num);
    });

    if (window?.navigator?.clipboard) {
      await window.navigator.clipboard.writeText(decodedText);
    }

    const button = e.target as HTMLButtonElement | null;
    button?.blur();

    const lastChild = button?.lastChild as Text | null;
    if (lastChild) {
      lastChild.textContent = "Copied";
      setTimeout(() => (lastChild.textContent = "Copy"), 3000);
    }
  };

  function checkOverflow(el: HTMLElement): void {
    const isOverflowingY = el.clientHeight < el.scrollHeight;
    showExpandButton = isOverflowingY;
    el.firstElementChild?.classList.add("-mb-8");
  }

  const injectContent = (): void => {
    if (!iframe) return;
    if (!iframe.contentDocument) return;
    if (!iframe.contentWindow) return;

    iframeLoad = true;

    // get only css and style from head
    const externalCss = document.querySelectorAll('head link[href*="https://"][rel="stylesheet"], head style');
    const internalCss = Array.from(document.styleSheets).filter((el) => el.href?.includes(document.location.hostname));

    // extract style to avoid multiple network request to css
    const extractInlineCss = internalCss.reduce((acc, el) => {
      acc += Array.from(el.cssRules)
        .map((rule) => rule.cssText)
        .join(" ");
      return acc;
    }, "");

    const styleTag = document.createElement("style");
    styleTag.innerHTML = extractInlineCss;

    // extract outerHtml in order to clone html
    const headContent = Array.from(externalCss).reduce((acc, el) => (acc += el.outerHTML), "");

    // put the content of head in the head of the iframe
    iframe.contentDocument.head.insertAdjacentHTML("beforeend", `${headContent}${styleTag.outerHTML}` || "");

    // mount component
    mount(ExampleHelper, {
      target: iframe.contentDocument.body,
      props: {
        snippet: example,
        class: twMerge(divClass, meta?.class ?? "")
      }
    });

    // Initial sync of dark mode to iframe
    syncIframeDarkMode();

    updateHeightContent();

    // listen change on height of the iframe content and update the preview height
    if (iframe.contentDocument?.body.firstChild) {
      const resizeObserver = new ResizeObserver(updateHeightContent);
      resizeObserver.observe(iframe.contentDocument.body.firstElementChild as Element);
    }
  };

  const updateHeightContent = (): void => {
    if (!codeResponsiveContent) return;
    if (!iframe?.contentDocument?.body?.firstElementChild) return;

    const element = iframe.contentDocument.body.firstElementChild as HTMLElement;
    const height = element.offsetHeight || 0;
    codeResponsiveContent.style.height = `${height}px`;
  };

  onMount(() => {
    // Initialize dark mode on mount
    dark = document.documentElement.classList.contains("dark");

    // workaround for svelte issue https://github.com/sveltejs/svelte/issues/6967
    setTimeout(() => {
      if (iframe && !iframeLoad) {
        iframe.dispatchEvent(new Event("load"));
      }
    }, 500);
  });

  // RTL effect with proper type checking
  $effect(() => {
    if (!iframe) return;
    if (!iframe.contentDocument) return;

    iframe.contentDocument.documentElement.dir = rtl || "";
  });
</script>

<div class="code-example mt-8" use:init>
  {#if !meta.hideOutput}
    <div class="w-full rounded-t-xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
      <div class="grid {meta.hideResponsiveButtons ? 'grid-cols-2' : 'grid-cols-2 sm:grid-cols-3'}">
        {#if path}
          <Button size="xs" color="alternative" class="hover:text-primary-600 w-fit gap-2 dark:bg-gray-900" href={"" + path} target="_blank" rel="noreferrer">
            <GitHub size="sm" />Edit on GitHub
          </Button>
          {#if !meta.hideResponsiveButtons}
            <div class="hidden justify-center gap-x-2 sm:flex">
              <Button size="xs" color="alternative" class="dark:bg-gray-900" onclick={() => (responsiveDevice = "desktop")}>
                <DesktopPcOutline size="sm" />
              </Button>
              <Button size="xs" color="alternative" class="dark:bg-gray-900" onclick={() => (responsiveDevice = "tablet")}>
                <TabletOutline size="sm" />
              </Button>
              <Button size="xs" color="alternative" class="dark:bg-gray-900" onclick={() => (responsiveDevice = "mobile")}>
                <MobilePhoneOutline size="sm" />
              </Button>
            </div>
          {/if}
          <div class="ms-auto flex">
            <ExampleDarkMode onclick={() => toggleDarkMode()} {dark} />
            <ExampleRtl bind:rtl />
          </div>
        {/if}
      </div>
    </div>

    <div class="code-preview-wrapper">
      <div class="code-preview flex border-x border-gray-200 bg-white bg-linear-to-r p-0 dark:border-gray-600 dark:bg-gray-900" class:dark dir={rtl}>
        <div class="code-responsive-wrapper w-full">
          <div class="code-responive-content {twJoin(!meta.hideResponsiveButtons && 'mx-auto', responsiveSize[responsiveDevice])}" bind:this={codeResponsiveContent}>
            {#if !meta.hideResponsiveButtons}
              <iframe bind:this={iframe} class="h-full w-full" title="iframe-code-content" onload={injectContent}></iframe>
            {:else}
              <div class={twMerge(divClass, meta.class)}>
                {@render example()}
              </div>
            {/if}
          </div>
        </div>
      </div>
    </div>
  {/if}
  {#if !meta.hideSource}
    <div class="code-syntax-wrapper">
      <div class="code-syntax relative border-x border-y border-gray-200 dark:border-gray-600">
        <div class="grid w-full grid-cols-2 rounded-t-md border-b border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-700">
          <ul class="flex text-center text-sm font-medium text-gray-500 dark:text-gray-400">
            <li>
              <span class="inline-block w-full border-e border-gray-200 bg-gray-100 p-2 px-3 text-gray-800 dark:border-gray-600 dark:bg-gray-800 dark:text-white">Svelte</span>
            </li>
          </ul>
          <div class="flex justify-end">
            {#if browserSupport}
              <button onclick={(e) => copyToClipboard(e)} type="button" class="hover:text-primary-700 copy-to-clipboard-button flex items-center border-s border-gray-200 bg-gray-100 px-3 py-2 text-xs font-medium text-gray-600 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:text-white">
                <svg class="me-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                {copy_text}
              </button>
              <Tooltip placement="bottom-end">Copy to clipboard.</Tooltip>
            {/if}
          </div>
        </div>
        <div class="relative">
          <div class="overflow-hidden" class:max-h-72={!expand} tabindex="-1" use:checkOverflow>
            <div class="highlight">
              <pre bind:this={codeEl} class="language-svelte -mt-2! rounded-none!">{@render code?.()}</pre>
            </div>
          </div>
          {#if showExpandButton && !expand}
            <button onclick={() => (expand = !expand)} data-expand-code="" type="button" class="hover:text-primary-700 absolute start-0 bottom-0 w-full border-t border-gray-200 bg-gray-100 px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Expand code</button>
          {/if}
        </div>
      </div>
    </div>
  {/if}
</div>
