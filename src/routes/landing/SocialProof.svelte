<script lang="ts">
  import Avatar from '$lib/avatar/Avatar.svelte';
  import Discord from '../utils/icons/Discord.svelte';
  import Figma from '../utils/icons/Figma.svelte';
  import GitHub from '../utils/icons/GitHub.svelte';
  import Npm from '../utils/icons/Npm.svelte';
  import Quote from '../utils/icons/Quote.svelte';
  import Section from './utils/Section.svelte';
  import { page } from '$app/stores';
  import type { PageData } from '../$types';

  let data: PageData = $page.data;

  let github = data.github?.stargazers_count ?? 0;
  let npm = data.npm?.downloads ?? 0;
  let figma = 13000;
  let discord = 657;

  function format(x: number) {
    return x.toLocaleString('en', { notation: 'standard' });
  }
</script>

<Section>
  <div class="flex flex-col lg:flex-row gap-4 lg:gap-20">
    <div class="flex flex-col items-start justify-center gap-3 md:gap-5 w-full">
      <div class="flex flex-col items-start justify-center gap-6 w-full">
        <div class="flex flex-col items-start py-2">
          <Quote />
        </div>
        <div class="flex flex-col items-start justify-center gap-5 max-w-2xl pr-8 self-stretch">
          <p class="leading-relaxed text-lg font-medium text-gray-900 dark:text-white">
            Flowbite provides a robust set of design tokens and components based on the popular Tailwind CSS
            framework. From the most used UI components like forms and navigation bars to the whole app
            screens designed both for desktop and mobile, this UI kit provides a solid foundation for any
            project.
          </p>
          <p class="leading-relaxed text-lg font-medium text-gray-900 dark:text-white">
            Designing with Figma components that can be easily translated to the utility classes of Tailwind
            CSS is a huge timesaver!
          </p>
        </div>
        <div class="flex flex-row items-center gap-3.5 self-stretch">
          <Avatar size="xs" />
          <div class="flex items-center gap-3">
            <span class="leading-tight font-semibold text-gray-900 dark:text-white">Micheal Gough</span>
            <span class="leading-tight font-semibold text-gray-900 dark:text-white">/</span>
            <span class="leading-tight font-normal text-sm">CEO at Google</span>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-start gap-6 md:gap-3 w-full">
      <div
        class="flex flex-row items-start md:justify-between md:pr-16 lg:pr-0 lg:justify-end gap-2 md:gap-2 lg:gap-2 self-stretch">
        <div
          class="flex flex-col items-start gap-4 md:gap-6 text-gray-400 w-full max-w-[272px] lg:py-6 lg:px-8">
          <GitHub />
          <div class="flex flex-col items-start gap-2">
            <p class="leading-tight text-2xl font-bold text-gray-900 dark:text-white">{format(github)}</p>
            <p class="text-sm md:text-base text-gray-500">Stars on Github</p>
          </div>
        </div>
        <div
          class="flex flex-col items-start gap-4 md:gap-6 text-gray-400 w-full max-w-[272px] lg:py-6 lg:px-8">
          <Npm />
          <div class="flex flex-col items-start gap-2">
            <p class="leading-tight text-2xl font-bold text-gray-900 dark:text-white">{format(npm)}</p>
            <p class="text-sm md:text-base text-gray-500">Downloads on NPM</p>
          </div>
        </div>
      </div>
      <div
        class="flex flex-row items-start md:justify-between md:pr-16 lg:pr-0 lg:justify-end gap-2 md:gap-12 lg:gap-2 self-stretch">
        <div
          class="flex flex-col items-start gap-4 md:gap-6 text-gray-400 w-full max-w-[272px] lg:py-6 lg:px-8">
          <Figma />
          <div class="flex flex-col items-start gap-2">
            <p class="leading-tight text-2xl font-bold text-gray-900 dark:text-white">{format(figma)}</p>
            <p class="text-sm md:text-base text-gray-500">Figma duplicates</p>
          </div>
        </div>
        <div
          class="flex flex-col items-start gap-4 md:gap-6 text-gray-400 w-full max-w-[272px] lg:py-6 lg:px-8">
          <Discord />
          <div class="flex flex-col items-start gap-2">
            <p class="leading-tight text-2xl font-bold text-gray-900 dark:text-white">{format(discord)}</p>
            <p class="text-sm md:text-base text-gray-500">Discord members online</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</Section>
