<script lang="ts">
  import { Section } from '$lib';
  import { ExampleDiv, SectionHeader, SectionBlock, MetaTag } from '../utils';
  const breadcrumb_title = 'Advanced Tables';
  const title = 'Advanced Tables';
  const dir = 'application';
  const description =
    'Get started with a collection of advanced table components based on multiple layouts and styles to show a complex set of data using rows and columns built with Tailwind CSS.';
</script>

<MetaTag {breadcrumb_title} {title} {dir} {description} />

<SectionHeader
  category="application"
  title="Svelte {breadcrumb_title} - Flowbite"
  {breadcrumb_title}
  {description}
/>

<SectionBlock title="Default table">
  Use this free example of a table component with a search bar, filter dropdown, and a dataset of
  rows and columns to show complex data in your application.
</SectionBlock>

<ExampleDiv>
  <Section name="tableheader" sectionClass="bg-gray-50 dark:bg-gray-900 h-40 flex items-center">
    <h1 class="text-3xl dark:text-white">COMING SOON</h1>
  </Section>
</ExampleDiv>
