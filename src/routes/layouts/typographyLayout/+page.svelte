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
        <a href="/typography/heading" class="link">Heading</a>
      </p>
      <p>
        <a href="/typography/blockquote" class="link">Blockquote</a>
      </p>
      <p>
        <a href="/typography/image" class="link">Image</a>
      </p>
      <p>
        <a href="/typography/link" class="link">Link</a>
      </p>
      <p>
        <a href="/typography/list" class="link">List</a>
      </p>
      <p>
        <a href="/typography/paragraph" class="link">Paragraph</a>
      </p>
      <p>
        <a href="/typography/text" class="link">Text</a>
      </p>
      <p>
        <a href="/typography/hr" class="link">HR</a>
      </p>
    </div>

    <Htwo label="Flowbite References" />
    <div class="references">
      <p>
        <a href="https://flowbite.com/docs/components/typography/" target="_blank" class="link"
          >Typography</a>
      </p>
      <p>
        <a href="https://flowbite.com/docs/typography/headings/" target="_blank" class="link"
          >Headings</a>
      </p>
      <p>
        <a href="https://flowbite.com/docs/typography/paragraphs/" target="_blank" class="link"
          >Paragraphs</a>
      </p>
      <p>
        <a href="https://flowbite.com/docs/typography/blockquote/" target="_blank" class="link"
          >Blockquote</a>
      </p>
      <p>
        <a href="https://flowbite.com/docs/typography/images/" target="_blank" class="link"
          >Images</a>
      </p>
      <p>
        <a href="https://flowbite.com/docs/typography/lists/" target="_blank" class="link">Lists</a>
      </p>
      <p>
        <a href="https://flowbite.com/docs/typography/links/" target="_blank" class="link">Links</a>
      </p>
      <p>
        <a href="https://flowbite.com/docs/typography/text/" target="_blank" class="link">Text</a>
      </p>
      <p>
        <a href="https://flowbite.com/docs/typography/hr/" target="_blank" class="link">HR</a>
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
