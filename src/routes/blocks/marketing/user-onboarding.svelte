<script lang="ts">
  import { Section } from '$lib';
  import { ExampleDiv, SectionHeader, SectionBlock, MetaTag } from '../utils';
  const breadcrumb_title = 'User Onboarding';
  const title = 'User Onboarding';
  const dir = 'marketing';
  const description =
    'Use a collection of user onboarding pages to increase the chances of the adoption of your software by improving the introduction phase of your product.';
</script>

<MetaTag {breadcrumb_title} {title} {dir} {description} />

<SectionHeader
  category="marketing"
  title="Svelte {breadcrumb_title} - Flowbite"
  {breadcrumb_title}
  {description}
/>

<SectionBlock title="Choose account type">
  Use this example as the first step of the user onboarding process to ask what type of account
  would your user like to create (ie. business or individual).
</SectionBlock>

<ExampleDiv>
  <Section name="tableheader" sectionClass="bg-gray-50 dark:bg-gray-900 h-40 flex items-center">
    <h1 class="text-3xl dark:text-white">COMING SOON</h1>
  </Section>
</ExampleDiv>
