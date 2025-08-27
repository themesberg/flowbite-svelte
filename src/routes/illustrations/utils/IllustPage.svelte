<script lang="ts">
  import { Modal } from "flowbite-svelte";
  import type { Component, Snippet } from "svelte";
  import { twMerge } from "tailwind-merge";
  import DynamicCodeBlockHighlight from "./DynamicCodeBlockHighlight.svelte";
  import { isGeneratedCodeOverflow, createImageVariants } from "./helper";

  interface Props {
    icons: Record<string, Component>;
    header?: Snippet;
    title: string;
    defaultSize?: string;
    sizeByTailwind?: boolean;
    minSize?: string;
    maxSize?: string;
    threeTabs?: boolean;
    wrapperClass?: string | undefined;
    div1Class?: string | undefined;
    div2Class?: string | undefined;
    classDiv2?: string | undefined;
    div3Class?: string | undefined;
    classDiv3?: string | undefined;
    div4Class?: string | undefined;
    labelClass?: string | undefined;
    searchClass?: string | undefined;
    classSearch?: string | undefined;
    tab1Class?: string | undefined;
    classTab1?: string | undefined;
    tab2Class?: string | undefined;
    rangeClass?: string | undefined;
    classRange?: string | undefined;
    contentClass?: string;
    step?: string;
    class?: string;
  }
  let {
    icons,
    header,
    wrapperClass = "mx-auto max-w-8xl px-8",
    div1Class = "relative overflow-x-auto",
    div2Class,
    classDiv2 = "w-full p-4 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-100 dark:bg-gray-800",
    div3Class,
    classDiv3 = "grid grid-cols-1 gap-4 px-4 md:grid-cols-2 dark:text-white place-items-center",
    div4Class = "w-full place-items-center p-4 border border-gray-200 dark:border-gray-800 rounded-lg dark:bg-gray-800 hover:scale-105",
    labelClass = "text-lg py-4",
    searchClass,
    classSearch = "block w-64 rounded-lg border border-gray-300 bg-gray-50 p-2 ps-4 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",
    tab1Class,
    classTab1 = "grid grid-cols-1 gap-8 px-4 pt-8 sm:grid-cols-2  lg:grid-cols-4 dark:text-white",
    tab2Class = "flex items-center text-lg",
    rangeClass,
    classRange = "mt-4 h-2 w=[100px] sm:w-[200px] cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700",
    contentClass = "rounded-lg dark_bg_theme mt-4",
    title,
    sizeByTailwind,
    minSize = "50",
    defaultSize = $bindable("100"),
    maxSize = "200",
    step = "10",
    threeTabs = true,
    class: className = "",
    ...restProps
  }: Props = $props();

  let searchTerm = $state("");

  let filteredEntries = $derived(
    Object.entries(icons).filter(([name]) => {
      return name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
    })
  );
  // $inspect('filteredEntries', filteredEntries);
  let selectedIllust = $state("");

  let illusts = $derived(createImageVariants(selectedIllust));
  // $inspect("dark: ", illusts["dark"], "light: ", illusts["light"]);
  // code generator
  let generatedCode = $derived(
    (() => {
      let props = [];

      if (defaultSize !== "140") props.push(` size="${defaultSize}"`);
      const propsString = props.length > 0 ? props.map((prop) => `\n  ${prop}`).join("") + "\n" : "";

      return `import { ${illusts["light"]}, ${illusts["dark"]} } from "flowbite-svelte-illustrations";
<div class="dark:hidden">
  <${illusts["light"]} ${propsString}/>
</div>
<div class="hidden dark:block">
  <${illusts["dark"]} ${propsString}/>
</div>
`;
    })()
  );

  let illustModal = $state(false);
  const updateIllust = (name: string) => {
    illustModal = true;
    selectedIllust = name;
  };

  let builderExpand = $state(false);
  let showBuilderExpandButton = $derived(isGeneratedCodeOverflow(generatedCode));
  const handleBuilderExpandClick = () => {
    builderExpand = !builderExpand;
  };
</script>

<svelte:head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/styles/dark.min.css" />
</svelte:head>

<div class="w-full pb-20">
  <div class={wrapperClass}>
    {#if header}
      {@render header()}
    {/if}
    <div class={div1Class}>
      <div class={twMerge(classDiv2, div2Class)}>
        <input type="search" id="site-search" name="q" class={twMerge(classSearch, searchClass)} placeholder="Search icons" bind:value={searchTerm} />
        <input id="default-range" type="range" min={minSize} max={maxSize} bind:value={defaultSize} {step} class={twMerge(classRange, rangeClass)} />
      </div>
      <div class={twMerge("w-full py-8 text-left text-gray-500 dark:text-gray-400 ", className)}>
        <div class={twMerge(classDiv3, div3Class)}>
          {#each filteredEntries as [name, Component] (name)}
            {#if name !== "Icon"}
              <button class="group relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border border-gray-200 bg-gray-100 p-4 hover:scale-105 dark:border-gray-800 dark:bg-gray-800" onclick={() => updateIllust(name)} aria-label="modal-button">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="24" width="24" xmlns="http://www.w3.org/2000/svg" class="absolute top-2 right-2 hidden group-hover:block">
                  <path d="M7 8l-4 4l4 4"></path>
                  <path d="M17 8l4 4l-4 4"></path>
                  <path d="M14 4l-4 16"></path>
                </svg>
                <Component height={defaultSize} {...restProps} />
                <span class="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  {name}
                </span>
              </button>
            {/if}
          {/each}
        </div>
      </div>
      <Modal bind:open={illustModal}>
        <h3 class="font-bold">{selectedIllust}</h3>
        <DynamicCodeBlockHighlight handleExpandClick={handleBuilderExpandClick} expand={builderExpand} showExpandButton={showBuilderExpandButton} code={generatedCode} />
      </Modal>
    </div>
  </div>
</div>
