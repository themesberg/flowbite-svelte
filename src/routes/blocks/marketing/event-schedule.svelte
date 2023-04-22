<script lang="ts">
  import { Section, Schedule, ScheduleItem } from '$lib';
  import { ExampleDiv, SectionHeader, SectionBlock, MetaTag } from '../utils';
  const breadcrumb_title = 'Event Schedule';
  const title = 'Event Schedule';
  const dir = 'marketing';
  const description =
    'Get started with a collection of website sections coded with Tailwind CSS to show the schedule of an event inside a timeline featuring a title, speaker, and description.';
  const schedule = [
    {
      time: '08:00 - 09:00',
      href: '/',
      title: 'Opening remarks'
    },
    {
      time: '09:00 - 10:00',
      href: '/',
      title: 'Bergside LLC: Controlling the video traffic flows'
    },
    {
      time: '10:00 - 11:00',
      href: '/',
      title: 'Flowbite - An Open Framework for Forensic Watermarking'
    },
    {
      time: '11:00 - 12:00',
      href: '/',
      title: 'Coffee Break'
    },
    {
      time: '12:00 - 13:00',
      href: '/',
      title: 'Scaling your brand from €0 to multimillion euros'
    },
    {
      time: '13:00 - 14:00',
      href: '/',
      title: 'Updates from the Open Source Multimedia community'
    },
    {
      time: '14:00 - 15:00',
      href: '/',
      title: 'Exploring the balance between customer acquisition and retention'
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
  Use this free example to show a list of workshops for an event using a timeline component and
  featuring the time and title of the presentation.
</SectionBlock>

<ExampleDiv>
  <Section name="schedule" sectionClass="bg-white dark:bg-gray-900 antialiased">
    <Schedule scheduleName="Schedule">
      <div class="mt-4" slot="subtitle">
        <a
          href="/"
          title=""
          class="inline-flex items-center text-lg font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
          Learn more about our agenda
          <svg
            aria-hidden="true"
            class="w-5 h-5 ml-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </div>
      {#each schedule as item}
        <ScheduleItem {item} />
      {/each}
    </Schedule>
  </Section>
</ExampleDiv>
