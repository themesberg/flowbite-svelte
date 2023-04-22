<script lang="ts">
  import { Section, Portfolio, PortfolioItem } from '$lib';
  import { ExampleDiv, SectionHeader, SectionBlock, MetaTag } from '../utils';
  const breadcrumb_title = 'Portfolio';
  const title = 'Portfolio';
  const dir = 'marketing';
  const description =
    "Get started with the project portfolio UI components coded with Tailwind CSS to showcase your personal or company client's project specifications and results.";
  const portfolios = [
    {
      customer: 'Alphabet Inc.',
      title: 'Official website',
      description:
        'Flowbite helps you connect with friends, family and communities of people who share your interests.',
      href: '/',
      linkTitle: 'View case study'
    },
    {
      customer: 'Microsoft Corp.',
      title: 'Management system',
      description:
        'Flowbite helps you connect with friends, family and communities of people who share your interests.',
      href: '/',
      linkTitle: 'View case study'
    },
    {
      customer: 'Adobe Inc.',
      title: 'Logo design',
      description:
        'Flowbite helps you connect with friends, family and communities of people who share your interests.',
      href: '/',
      linkTitle: 'View case study'
    }
  ];
</script>

<MetaTag {breadcrumb_title} {title} {dir} {description} />

<SectionHeader
  category="marketing"
  title="Svelte {breadcrumb_title} - Flowbite"
  {breadcrumb_title}
  {description}
/>

<SectionBlock title="Default event schedule">
  Use this example to show a list of company clients and case study previews inside a website
  section featuring the client, title of the project, a description and CTA button.
</SectionBlock>

<ExampleDiv>
  <Section name="portfolio" sectionClass="bg-white dark:bg-gray-900 antialiased">
    <Portfolio
      title="Our work"
      subtitle="Crafted with skill and care to help our clients grow their business!"
    >
      {#each portfolios as item}
        <PortfolioItem {item} />
      {/each}
    </Portfolio>
  </Section>
</ExampleDiv>
