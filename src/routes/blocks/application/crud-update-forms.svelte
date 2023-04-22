<script lang="ts">
  import { Section } from '$lib';
  import { ExampleDiv, SectionHeader, SectionBlock, MetaTag } from '../utils';
  const breadcrumb_title = 'Update Forms (CRUD)';
  const title = 'Crud Update Drawers';
  const dir = 'application';
  const description =
    'Get started with a collection of CRUD layouts based on the "update" action featuring form elements like input text fields, date pickers, file upload, and more.';
</script>

<MetaTag {breadcrumb_title} {title} {dir} {description} />

<SectionHeader
  category="application"
  title="Svelte {breadcrumb_title} - Flowbite"
  {breadcrumb_title}
  {description}
/>

<SectionBlock title="Default form">
  Use this free example of a CRUD form layout to update existing data sets featuring text fields
  inputs, select boxes, and more.
</SectionBlock>

<ExampleDiv>
  <Section name="tableheader" sectionClass="bg-gray-50 dark:bg-gray-900 h-40 flex items-center">
    <h1 class="text-3xl dark:text-white">COMING SOON</h1>
  </Section>
</ExampleDiv>
