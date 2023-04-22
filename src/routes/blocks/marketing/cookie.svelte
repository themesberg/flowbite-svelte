<script lang="ts">
  import { Section } from '$lib';
  import { ExampleDiv, SectionHeader, SectionBlock, MetaTag } from '../utils';
  const breadcrumb_title = 'Cookie Consent';
  const title = 'Cookie';
  const dir = 'marketing';
  const description =
    'Get started with the cookie banner component to interact with the website visitor and enable them to decide whether you can collect their personal data or not.';
</script>

<MetaTag {breadcrumb_title} {title} {dir} {description} />

<SectionHeader
  category="marketing"
  title="Svelte {breadcrumb_title} - Flowbite"
  {breadcrumb_title}
  {description}
/>

<SectionBlock title="Cookie banner">
  This banner positioned at the bottom of the page can be used as an example to quickly ask for
  permission to store third-party cookies and collect personal information from your website
  visitors.
</SectionBlock>

<ExampleDiv>
  <Section name="tableheader" sectionClass="bg-gray-50 dark:bg-gray-900 h-96 flex items-center">
    <h1 class="text-4xl dark:text-white">COMING SOON</h1>
  </Section>
</ExampleDiv>
