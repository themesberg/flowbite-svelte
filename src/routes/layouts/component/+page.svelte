<script context="module">
  import h2 from "./h2.svelte";
  export { h2 };
</script>

<script>
  // calm down the warrnings "<Page> was created with unknown prop ..."
  $: $$props;
</script>

<div class="max-w-3xl 2xl:max-w-4xl mx-auto">
  <div id="mainContent" class="container mx-auto">
    <slot />
  </div>
</div>
<aside class="fixed z-50 hidden right-5 bottom-5 sm:block">
  <script async type="text/javascript" src="//cdn.carbonads.com/carbon.js?serve=CEAIC53I&placement=flowbite-sveltecom" id="_carbonads_js"></script>
</aside>
