<script lang="ts">
  import { Section } from '$lib';
  import { ExampleDiv, SectionHeader, SectionBlock, MetaTag } from '../utils';
  const breadcrumb_title = 'Faceted Search Drawers';
  const title = 'Faceted Search Drawers';
  const dir = 'application';
  const description =
    'Get started with a collection of drawer components using a faceted search interface to use multiple filters options to search for results in your application.';
</script>

<MetaTag {breadcrumb_title} {title} {dir} {description} />

<SectionHeader
  category="application"
  title="Svelte {breadcrumb_title} - Flowbite"
  {breadcrumb_title}
  {description}
/>

<SectionBlock title="Default faceted search drawer">
  Use this free example of a drawer component to show a list of checkbox, radio and input field
  elements to filter search results.
</SectionBlock>

<ExampleDiv>
  <Section name="tableheader" sectionClass="bg-gray-50 dark:bg-gray-900 h-40 flex items-center">
    <h1 class="text-3xl dark:text-white">COMING SOON</h1>
  </Section>
</ExampleDiv>
