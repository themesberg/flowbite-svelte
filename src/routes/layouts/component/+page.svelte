<script module>
  import code from "./code.svelte";
  import h2 from "./h2.svelte";
  import h3 from "./h3.svelte";
  export { code, h2, h3 };
</script>

<script>
  import Footer from "../../utils/Footer.svelte";
  import MetaTag from "../../utils/MetaTag.svelte";
  import Newsletter from "../../utils/Newsletter.svelte";
  import PageHeadSection from "../../utils/PageHeadSection.svelte";
  import Paging from "../../utils/Paging.svelte";
  import SectionHeader from "../../blocks/utils/SectionHeader.svelte";

  let { title, breadcrumb_title, component_title = "", dir, description, layout = "", category, children, pkg="Flowbite Svelte" } = $props();

  // calm down `unused export property` warrning
  /* eslint-disable @typescript-eslint/no-unused-expressions */
  layout;
  component_title;

  const blockDirs = new Set(["application", "marketing", "publisher", "quickstart"]);
  const pageWidth = blockDirs.has(dir) ? "max-w-8xl" : "max-w-4xl";

  let divClass = category ? "" : "mx-auto max-w-8xl lg:px-20 px-8 md:px-auto py-8";
</script>

<MetaTag {breadcrumb_title} {title} {dir} {description} {pkg}/>

{#if blockDirs.has(dir)}
  <div class={divClass}>
    <SectionHeader category={dir} {breadcrumb_title} {title} {description} />
    <div id="mainContent">
      {@render children()}
      <Paging />
    </div>
  </div>
{:else}
  <div class="flex w-full">
    <div class="pb:12 mx-auto flex min-w-0 flex-col px-4 pt-6 lg:px-8 lg:pt-8 lg:pb-16 xl:pb-24 {pageWidth}">
      <PageHeadSection {title} {description} />
      <div id="mainContent" class="py-8">
        {@render children()}
        <Paging />
      </div>
      <Newsletter />
      <Footer />
    </div>
  </div>
{/if}
