<script lang="ts">
  import { Section } from '$lib';
  import { ExampleDiv, SectionHeader, SectionBlock, MetaTag } from '../utils';
  const breadcrumb_title = 'Blog Templates';
  const title = 'Blog Templates';
  const dir = 'publisher';
  const description =
    'Get started with a collection of Tailwind CSS blog templates, themes, and article layouts to publish content crafted with built-in SEO optimization.';
</script>

<MetaTag {breadcrumb_title} {title} {dir} {description} />

<SectionHeader
  category="publisher"
  title="Svelte {breadcrumb_title} - Flowbite"
  {breadcrumb_title}
  {description}
/>

<SectionBlock title="Default blog template">
  Use this free blog template to show the content of an article using the Flowbite Typography plugin
  including the author, post date, and a comments section.
</SectionBlock>

<ExampleDiv>
  <Section name="tableheader" sectionClass="bg-gray-50 dark:bg-gray-900 h-40 flex items-center">
    <h1 class="text-3xl dark:text-white">COMING SOON</h1>
  </Section>
</ExampleDiv>
