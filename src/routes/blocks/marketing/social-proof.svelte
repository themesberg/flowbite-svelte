<script lang="ts">
  import { Section, Social } from '$lib';
  import { ExampleDiv, SectionHeader, SectionBlock, MetaTag } from '../utils';
  const breadcrumb_title = 'Social Proof';
  const title = 'Social proof';
  const dir = 'marketing';
  const description =
    "Get started with this website section to offer social proof to your website visitors by providing statistical numbers about your product's usage worldwide.";
</script>

<MetaTag {breadcrumb_title} {title} {dir} {description} />

<SectionHeader
  category="marketing"
  title="Svelte {breadcrumb_title} - Flowbite"
  {breadcrumb_title}
  {description}
/>

<SectionBlock title="Default example">
  Use this example of statistical numbers that you can use to showcase the adoption rate of your
  product by the community.
</SectionBlock>

<ExampleDiv>
  <Section name="social">
    <Social>
      <div class="flex flex-col items-center justify-center">
        <dt class="mb-2 text-3xl md:text-4xl font-extrabold">73M+</dt>
        <dd class="font-light text-gray-500 dark:text-gray-400">developers</dd>
      </div>
      <div class="flex flex-col items-center justify-center">
        <dt class="mb-2 text-3xl md:text-4xl font-extrabold">1B+</dt>
        <dd class="font-light text-gray-500 dark:text-gray-400">contributors</dd>
      </div>
      <div class="flex flex-col items-center justify-center">
        <dt class="mb-2 text-3xl md:text-4xl font-extrabold">4M+</dt>
        <dd class="font-light text-gray-500 dark:text-gray-400">organizations</dd>
      </div>
    </Social>
  </Section>
</ExampleDiv>
