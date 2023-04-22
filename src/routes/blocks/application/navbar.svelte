<script lang="ts">
  import { Section } from '$lib';
  import { ExampleDiv, SectionHeader, SectionBlock, MetaTag } from '../utils';
  const breadcrumb_title = 'Dashboard Navbars';
  const title = 'Navbar';
  const dir = 'application';
  const description =
    'Get started with a premium collection of responsive navigation bars built for application and dashboard user interfaces built with Tailwind CSS.';
</script>

<MetaTag {breadcrumb_title} {title} {dir} {description} />

<SectionHeader
  category="application"
  title="Svelte {breadcrumb_title} - Flowbite"
  {breadcrumb_title}
  {description}
/>

<SectionBlock title="Default navbar">
  Use this navigation bar inside a dashboard interface to show a side nav toggle, logo, search bar,
  button CTA, notifications, app center, and user avatar dropdown.
</SectionBlock>

<ExampleDiv>
  <Section name="tableheader" sectionClass="bg-gray-50 dark:bg-gray-900 h-40 flex items-center">
    <h1 class="text-3xl dark:text-white">COMING SOON</h1>
  </Section>
</ExampleDiv>
