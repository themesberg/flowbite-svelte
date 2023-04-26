<script lang="ts">
  import Avatar from '$lib/avatar/Avatar.svelte';
  import Tooltip from '$lib/tooltips/Tooltip.svelte';
  import ChevronRight from '$lib/utils/ChevronRight.svelte';
  import Community from '../utils/icons/Community.svelte';
  import type { PageData } from '../$types';
  import Section from './utils/Section.svelte';

  export let data: PageData;

  let name: string;
</script>

<Section class="lg:py-24">
  <!-- containter -->
  <div class="flex flex-col gap-12 items-center w-full max-w-7xl mx-auto">
    <!-- heading -->
    <div class="flex flex-col gap-4 items-center justify-center max-w-2xl">
      <h2
        class="tracking-tight text-center text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white">
        Community contributors
      </h2>
      <p class="text-lg font-normal text-center">
        Join the open-source community by contributing to the Flowbite Svelte Library and become one of the
        highlighted members
      </p>
    </div>
    <!-- avatars -->
    <div class="flex flex-col gap-3 max-w-5xl px-4 lg:px-8">
      <div class="flex flex-wrap items-center justify-center gap-3">
        {#if data?.contributors}
          {#each data?.contributors || [] as contributor}
            <a href={contributor.html_url} rel="nofollow noreferrer" target="_blank">
              <Avatar
                data-name={contributor.login}
                src={contributor.avatar_url}
                class="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16" />
            </a>
          {/each}
        {/if}
      </div>
      <Tooltip triggeredBy="[data-name]" on:show={(e) => (name = e?.target?.dataset.name)}>{name}</Tooltip>
    </div>
    <div class="flex flex-row items-center justify-between w-full max-w-5xl lg:px-4">
      <div
        class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-8 w-full p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
        <div class="hidden lg:block lg:w-fit">
          <Community />
        </div>
        <div class="flex flex-col w-full">
          <h2 class="tracking-tight text-xl font-bold text-left text-gray-900 dark:text-white">
            Join the community
          </h2>
          <p>Become a member of a community of developers supporting by Flowbite</p>
        </div>
        <a
          class="flex gap-2 items-center text-primary-700 text-base font-medium whitespace-nowrap hover:underline"
          href="http://github.com/themesberg/flowbite-svelte">
          See our repository <ChevronRight variation="solid" />
        </a>
      </div>
    </div>
  </div>
</Section>
