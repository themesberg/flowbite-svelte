<script context="module">
  import h2 from "./h2.svelte";
  export { h2 };
</script>

<script>
  import { PageHeadSection, MetaTag } from "../../utils";

  export let /** @type {string} */ title;
  export let /** @type {string} */ breadcrumb_title;
  export let /** @type {string} */ dir;
  export let /** @type {string} */ description ;
  export let /** @type {string} */ layout = "";

  // calm down `unused export property` warrning
  layout;
</script>

<MetaTag {breadcrumb_title} {title} {dir} {description}/>


<div class="max-w-3xl 2xl:max-w-4xl mx-auto">
  <PageHeadSection {dir} {breadcrumb_title} {title} {description} />
  <div id="mainContent">
    <slot />
  </div>
</div>
<aside class="fixed z-50 hidden right-5 bottom-5 sm:block">
  <script async type="text/javascript" src="//cdn.carbonads.com/carbon.js?serve=CEAIC53I&placement=flowbite-sveltecom" id="_carbonads_js"></script>
</aside>
