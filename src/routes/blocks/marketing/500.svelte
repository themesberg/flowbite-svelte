<script>
  import { Section, Page500 } from '$lib';
  import { ExampleDiv, SectionHeader, SectionBlock, MetaTag } from '../utils';
  const breadcrumb_title = '500 Pages';
  const title = '500';
  const dir = 'marketing';
  const description =
    'Get started with a collection of 500 status code pages coded with Tailwind CSS to show when a server error is being triggered.';
</script>

<MetaTag {breadcrumb_title} {title} {dir} {description} />

<SectionHeader
  category="marketing"
  title="Svelte {breadcrumb_title} - Flowbite"
  {breadcrumb_title}
  {description}
/>

<SectionBlock title="Default 500 page">
  Use this example of a page to show when an internal server error has happened and a 500 status
  code has to be shown.
</SectionBlock>

<ExampleDiv>
  <Section name="page500">
    <Page500>
      <svelte:fragment slot="h1">500</svelte:fragment>
      <svelte:fragment slot="paragraph">
        <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
          Internal Server Error.
        </p>
        <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
          We are already working to solve the problem.
        </p>
      </svelte:fragment>
    </Page500>
  </Section>
</ExampleDiv>
