<script>
  import Htwo from '../../utils/Htwo.svelte';
  // import 'prism-themes/themes/prism-holi-theme.css';
</script>

<div class="max-w-3xl 2xl:max-w-4xl mx-auto mt-8">
  <div class="container mx-auto" id="mainContent">
    <slot />

    <Htwo label="Related components" />
    <div class="related-components">
      <p>
        <a href="/utilities/close-button" class="link">CloseButton</a>
      </p>
      <p>
        <a href="/utilities/label" class="link">Label</a>
      </p>
      <p>
        <a href="/utilities/toolbar" class="link">Toolbar</a>
      </p>
    </div>
  </div>
</div>

<aside class="fixed z-50 hidden right-5 bottom-5 sm:block">
  <script async type="text/javascript" src="//cdn.carbonads.com/carbon.js?serve=CEAIC53I&placement=flowbite-sveltecom" id="_carbonads_js"></script>
</aside>

<style>
  .link {
    color: #f83c00;
  }
  .link:hover {
    color: #fc7146;
    text-decoration: underline;
  }
</style>
