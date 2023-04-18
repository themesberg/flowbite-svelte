<script>
  import Htwo from '../../utils/Htwo.svelte';
  // import 'prism-themes/themes/prism-holi-theme.css';
</script>

<div class="max-w-3xl 2xl:max-w-4xl mx-auto mt-8">
  <div class="container mx-auto" id="mainContent">
    <slot />

    <Htwo label="Related topics" />
    <div class="related-components">
      <p>
        <a href="/pages/getting-started" class="link">Getting started</a>
      </p>
      <p>
        <a href="/pages/license" class="link">License</a>
      </p>
      <p>
        <a href="/pages/types" class="link">Type list</a>
      </p>
      <p>
        <a href="/pages/introduction" class="link">Introduction</a>
      </p>
      <p>
        <a href="/pages/how-to-contribute" class="link">How to contribute</a>
      </p>
    </div>
    <Htwo label="References" />
    <div class="references">
      <p>
        <a href="https://svelte.dev/docs" class="link">Svelte</a>
      </p>

      <p>
        <a href="https://kit.svelte.dev/docs" class="link">SvelteKit</a>
      </p>

      <p>
        <a href="https://tailwindcss.com/docs/installation" class="link">TailwindCSS</a>
      </p>

      <p>
        <a href="https://flowbite.com/docs/getting-started/introduction/" class="link">Flowbite</a>
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
