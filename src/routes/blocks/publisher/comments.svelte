<script lang="ts">
  import { Section } from '$lib';
  import { ExampleDiv, SectionHeader, SectionBlock, MetaTag } from '../utils';
  const breadcrumb_title = 'Comments Sections';
  const title = 'Comments';
  const dir = 'publisher';
  const description =
    'Get started with a collection of comments sections coded with Tailwind CSS to show a list of comments for blog posts with features like a reply, like, and more.';
</script>

<MetaTag {breadcrumb_title} {title} {dir} {description} />

<SectionHeader
  category="publisher"
  title="Svelte {breadcrumb_title} - Flowbite"
  {breadcrumb_title}
  {description}
/>

<SectionBlock title="Default comments list">
  Use this example of a free comments box to show a submission form and a list of comments with the
  settings and reply feature.
</SectionBlock>

<ExampleDiv>
  <Section name="tableheader" sectionClass="bg-gray-50 dark:bg-gray-900 h-40 flex items-center">
    <h1 class="text-3xl dark:text-white">COMING SOON</h1>
  </Section>
</ExampleDiv>
