<script lang="ts">
  import { Section } from '$lib';
  import { ExampleDiv, SectionHeader, SectionBlock, MetaTag } from '../utils';
  const breadcrumb_title = 'Success Message (CRUD)';
  const title = 'Crud Success Message';
  const dir = 'application';
  const description =
    'Use a collection of success message components based on Tailwind CSS to share feedback with your users based on their actions inside your application.';
</script>

<MetaTag {breadcrumb_title} {title} {dir} {description} />

<SectionHeader
  category="application"
  title="Svelte {breadcrumb_title} - Flowbite"
  {breadcrumb_title}
  {description}
/>

<SectionBlock title="Default success message">
  Use this free example of a success message component inside a modal to share feedback with your
  user when an action has been completed.
</SectionBlock>

<ExampleDiv>
  <Section name="tableheader" sectionClass="bg-gray-50 dark:bg-gray-900 h-40 flex items-center">
    <h1 class="text-3xl dark:text-white">COMING SOON</h1>
  </Section>
</ExampleDiv>
