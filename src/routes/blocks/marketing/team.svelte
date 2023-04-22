<script lang="ts">
  import {
    Section,
    TeamWrapper,
    TeamHeader,
    TeamBody,
    TeamItem,
    Facebook,
    Github,
    Twitter
  } from '$lib';
  import { ExampleDiv, SectionHeader, SectionBlock, MetaTag } from '../utils';

  let members = [
    {
      href: '/',
      src: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png',
      alt: 'Bonnie Green',
      name: 'Bonnie Green',
      jobTitle: 'CEO & Web Developer',
      description: 'Bonnie drives the technical strategy of the flowbite platform and brand.'
    },
    {
      href: '/',
      src: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png',
      alt: 'Jese Leos',
      name: 'Jese Leos',
      jobTitle: 'CTO',
      description: 'Jese drives the technical strategy of the flowbite platform and brand.'
    },
    {
      href: '/',
      src: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png',
      alt: 'Michael Gouch',
      name: 'Michael Gouch',
      jobTitle: 'Senior Front-end Developer',
      description: 'Michael drives the technical strategy of the flowbite platform and brand'
    },
    {
      href: '/',
      src: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png',
      alt: 'Lana Byrd',
      name: 'Lana Byrd',
      jobTitle: 'Marketing & Sale',
      description: 'Lana drives the technical strategy of the flowbite platform and brand.'
    }
  ];
  const breadcrumb_title = 'Team Sections';
  const title = 'Team';
  const dir = 'marketing';
  const description =
    "Get started with a collection of team sections built with Tailwind CSS and Flowbite to showcase your organization's team members based on multiple layouts.";
</script>

<MetaTag {breadcrumb_title} {title} {dir} {description} />

<SectionHeader
  category="marketing"
  title="Svelte {breadcrumb_title} - Flowbite"
  {breadcrumb_title}
  {description}
/>

<SectionBlock title="Team member cards">
  Use this example to show information about your team members such as the name, occupation,
  picture, and social media accounts inside a card component.
</SectionBlock>

<ExampleDiv>
  <Section name="team">
    <TeamWrapper>
      <TeamHeader>
        <svelte:fragment slot="label">Our Team</svelte:fragment>
        <p class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
          Explore the whole collection of open-source web components and elements built with the
          utility classes from Tailwind
        </p>
      </TeamHeader>
      <TeamBody>
        {#each members as { href, src, alt, name, jobTitle, description }}
          <TeamItem {href} {src} {alt} {name} {jobTitle}>
            <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
              {description}
            </p>
            <svelte:fragment slot="social">
              <Facebook href="/" />
              <Github href="/" />
              <Twitter href="/" />
            </svelte:fragment>
          </TeamItem>
        {/each}
      </TeamBody>
    </TeamWrapper>
  </Section>
</ExampleDiv>
