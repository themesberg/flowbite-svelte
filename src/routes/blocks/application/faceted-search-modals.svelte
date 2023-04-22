<script lang="ts">
  import { Section } from '$lib';
  import { ExampleDiv, SectionHeader, SectionBlock, MetaTag } from '../utils';
  const breadcrumb_title = 'Faceted Search Modals';
  const title = 'Faceted Search Modals';
  const dir = 'application';
  const description =
    'Use the faceted search component to allow users to narrow down search results by applying multiple filters using checkboxes, radios, and range sliders inside of a modal.';
</script>

<MetaTag {breadcrumb_title} {title} {dir} {description} />

<SectionHeader
  category="application"
  title="Svelte {breadcrumb_title} - Flowbite"
  {breadcrumb_title}
  {description}
/>

<SectionBlock title="Default faceted search modal">
  Use this free example to show a list of checkbox components inside a modal to filter results by
  categories inside your application.
</SectionBlock>

<ExampleDiv>
  <Section name="tableheader" sectionClass="bg-gray-50 dark:bg-gray-900 h-40 flex items-center">
    <h1 class="text-3xl dark:text-white">COMING SOON</h1>
  </Section>
</ExampleDiv>
