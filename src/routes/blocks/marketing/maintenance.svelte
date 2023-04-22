<script>
  import { Section, Maintenance } from '$lib';
  import { ExampleDiv, SectionHeader, SectionBlock, MetaTag } from '../utils';
  const breadcrumb_title = 'Maintenance Pages';
  const title = 'Maintenance';
  const dir = 'marketing';
  const description =
    'Get started with maintenance pages coded with Tailwind CSS to show your users when you are currently working on an update and the website is not accessible.';
</script>

<MetaTag {breadcrumb_title} {title} {dir} {description} />

<SectionHeader
  category="marketing"
  title="Svelte {breadcrumb_title} - Flowbite"
  {breadcrumb_title}
  {description}
/>

<SectionBlock title="Default maintenance page">
  Use this example to let your users know that you are working on an important update and the
  website is down for a couple of hours.
</SectionBlock>

<ExampleDiv>
  <Section name="maintenance">
    <Maintenance>
      <svelte:fragment slot="h1">Under Maintenance</svelte:fragment>
      <svelte:fragment slot="paragraph">
        Our Enterprise administrators are performing scheduled maintenance.
      </svelte:fragment>
    </Maintenance>
  </Section>
</ExampleDiv>
