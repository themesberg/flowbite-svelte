<script lang="ts">
  import { Section } from '$lib';
  import { ExampleDiv, SectionHeader, SectionBlock, MetaTag } from '../utils';
  const breadcrumb_title = 'Table Footers';
  const title = 'Table Footers';
  const dir = 'application';
  const description =
    'Get started with a collection of footer components that you can append to the end of a table element to indicate pagination, table actions, information and more.';
</script>

<MetaTag {breadcrumb_title} {title} {dir} {description} />

<SectionHeader
  category="application"
  title="Svelte {breadcrumb_title} - Flowbite"
  {breadcrumb_title}
  {description}
/>

<SectionBlock title="Default table footer with pagination">
  Use this free example to add a footer section to a table component to show a pagination component
  and indicate the number of data items being showed on one page.
</SectionBlock>

<ExampleDiv>
  <Section name="tableheader" sectionClass="bg-gray-50 dark:bg-gray-900 h-40 flex items-center">
    <h1 class="text-3xl dark:text-white">COMING SOON</h1>
  </Section>
</ExampleDiv>
