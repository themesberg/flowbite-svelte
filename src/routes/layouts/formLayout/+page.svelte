<script>
  import Htwo from '../../utils/Htwo.svelte';
  import 'prism-themes/themes/prism-holi-theme.css';
  import { Responsive } from 'svelte-sidebar-menu';
</script>

<Responsive />

<div class="max-w-3xl 2xl:max-w-4xl mx-auto mt-8">
  <div class="container flex flex-wrap mx-auto">
    <slot />
    <Htwo label="Related components" />
    <div class="related-components">
      <p>
        <a href="/forms/checkbox" class="link">Checkbox</a>
      </p>
      <p>
        <a href="/forms/file-input" class="link">File input</a>
      </p>
      <p>
        <a href="/forms/floating-label" class="link">Floating label</a>
      </p>
      <p>
        <a href="/forms/input-field" class="link">Input field</a>
      </p>
      <p>
        <a href="/forms/radio" class="link">Radio</a>
      </p>
      <p>
        <a href="/forms/range" class="link">Range</a>
      </p>
      <p>
        <a href="/forms/search-input" class="link">Search input</a>
      </p>
      <p>
        <a href="/forms/select" class="link">Select</a>
      </p>
      <p>
        <a href="/forms/textarea" class="link">Textarea</a>
      </p>
      <p>
        <a href="/forms/toggle" class="link">Toggle</a>
      </p>
    </div>
    <Htwo label="References" />
    <div class="references">
      <p>
        <a href="https://flowbite.com/docs/components/forms/" target="_blank" class="link"
          >Flowbite Forms</a>
      </p>
    </div>
  </div>
</div>

<style>
  .link {
    color: #f83c00;
  }
  .link:hover {
    color: #fc7146;
    text-decoration: underline;
  }
</style>
