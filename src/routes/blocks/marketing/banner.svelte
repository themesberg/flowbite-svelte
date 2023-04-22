<script lang="ts">
  import { Banner } from '$lib';
  import { ExampleDiv, SectionHeader, SectionBlock, MetaTag } from '../utils';
  import { CloseButton } from 'flowbite-svelte';

  export let visible = true;
  const breadcrumb_title = 'Banner';
  const title = 'Banner';
  const dir = 'marketing';
  const description =
    'The banner component can be used to show extra information or enable interactions with the user without affecting the main content area of the website.';
</script>

<MetaTag {breadcrumb_title} {title} {dir} {description} />

<SectionHeader
  category="marketing"
  title="Svelte {breadcrumb_title} - Flowbite"
  {breadcrumb_title}
  {description}
/>

<SectionBlock title="Default banner">
  Use this example of a dismissable banner component to show extra information relative to the main
  content area of the page based on a sticky positition.
</SectionBlock>

<ExampleDiv>
  {#if visible}
    <Banner>
      <p class="text-sm font-light text-gray-500 dark:text-gray-400">
        Supercharge your hiring by taking advantage of our <a
          class="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline"
          href="/">limited-time sale</a
        > for Designer Search + Job Board. Unlimited access to over 190K top-ranked candidates and the
        #1 design job board.
      </p>
      <CloseButton
        on:click={() => (visible = false)}
        class="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white"
      />
    </Banner>
  {/if}
</ExampleDiv>
