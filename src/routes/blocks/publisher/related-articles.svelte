<script lang="ts">
  import { Section } from '$lib';
  import { ExampleDiv, SectionHeader, SectionBlock, MetaTag } from '../utils';
  const breadcrumb_title = 'Related Articles';
  const title = 'Related Articles';
  const dir = 'publisher';
  const description =
    'Use these components to show a list of related and recommended blog posts and articles at the bottom of the main content area of an article or blog post page.';
</script>

<MetaTag {breadcrumb_title} {title} {dir} {description} />

<SectionHeader
  category="publisher"
  title="Svelte {breadcrumb_title} - Flowbite"
  {breadcrumb_title}
  {description}
/>

<SectionBlock title="Default related articles">
  Use this example to show a list of related articles after the main content of a blog post to
  engage users and decrease the bounce rate.
</SectionBlock>

<ExampleDiv>
  <Section name="tableheader" sectionClass="bg-gray-50 dark:bg-gray-900 h-40 flex items-center">
    <h1 class="text-3xl dark:text-white">COMING SOON</h1>
  </Section>
</ExampleDiv>
