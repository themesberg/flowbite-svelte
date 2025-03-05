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
  import Toc from "../../utils/Toc.svelte";
  import { extract } from "./Anchor.svelte";

  let { title, breadcrumb_title, component_title = "", dir, description, layout = "", children } = $props();

  // calm down `unused export property` warrning
  /* eslint-disable @typescript-eslint/no-unused-expressions */
  layout;
  component_title;
</script>

<MetaTag {breadcrumb_title} {title} {dir} {description} />

<div class="flex w-full">
  <div class="flex flex-col max-w-4xl mx-auto px-4 min-w-0 pt-6 lg:px-8 lg:pt-8 pb:12 xl:pb-24 lg:pb-16">
    <PageHeadSection {title} {description} />
    <div id="mainContent" class="py-8">
      {@render children()}
      <Paging />
    </div>
    <Newsletter />
    <Footer />
  </div>

  <Toc {extract} headingSelector="#mainContent > :where(h2, h3)" />
</div>
