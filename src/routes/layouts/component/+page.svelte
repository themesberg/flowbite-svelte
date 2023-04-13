<script context="module">
  import h2 from './h2.svelte';
  import h3 from './h3.svelte';
  import code from './code.svelte';
  export { h2, h3, code };
</script>

<script>
  import { PageHeadSection, MetaTag } from '../../utils';
  import Toc from '../../Toc/+page.svelte';
  import { extract } from './Anchor.svelte';
  import Footer from '../../utils/Footer.svelte';

  export let /** @type {string} */ title;
  export let /** @type {string} */ breadcrumb_title;
  export let /** @type {string} */ dir;
  export let /** @type {string} */ description;
  export let /** @type {string} */ layout = '';

  // calm down `unused export property` warrning
  layout;
</script>

<MetaTag {breadcrumb_title} {title} {dir} {description} />

<div class="flex w-full">
  <div class="flex-auto max-w-4xl mx-auto min-w-0 pt-6 lg:px-8 lg:pt-8 pb:12 xl:pb-24 lg:pb-16">
    <PageHeadSection {dir} {breadcrumb_title} {title} {description} />
    <div id="mainContent">
      <slot />
    </div>
    <Footer />
  </div>
  <Toc {extract} headingSelector="#mainContent > :where(h2, h3)" />
</div>

<aside class="fixed z-50 hidden right-5 bottom-5 sm:block">
  <script
    async
    type="text/javascript"
    src="//cdn.carbonads.com/carbon.js?serve=CEAIC53I&placement=flowbite-sveltecom"
    id="_carbonads_js"></script>
</aside>
