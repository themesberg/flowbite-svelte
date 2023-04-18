<script lang="ts">
  import Avatar from '$lib/avatar/Avatar.svelte';
  import Tooltip from '$lib/tooltips/Tooltip.svelte';
  import ChevronRight from '$lib/utils/ChevronRight.svelte';
  import Community from '../utils/icons/Community.svelte';
  import type { PageData } from '../$types';

  export let data: PageData;

  let name: string;
</script>

<!-- Team -->
<div class="flex flex-col px-4 py-24 items-center">
  <!-- containter -->
  <div class="flex flex-col gap-12 items-center w-full max-w-7xl">
    <!-- heading -->

    <div class="flex flex-col gap-4 items-center justify-center max-w-2xl">
      <h1
        class="tracking-tight text-center text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white">
        Community contributors
      </h1>
      <p class="text-lg font-normal text-center">
        Explore the whole collection of open-source web components and elements built with the utility
        classes from Tailwind
      </p>
    </div>
    <!-- avatars -->
    <div class="flex flex-col gap-3 max-w-5xl px-4 lg:px-8">
      <div class="flex flex-wrap items-center justify-center gap-3">
        {#each data?.contributors || [] as contributor}
          <Avatar
            data-name={contributor.login}
            src={contributor.avatar_url}
            class="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16" />
        {/each}
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
          <h3 class="tracking-tight text-xl font-bold text-left text-gray-900 dark:text-white">
            Join the community
          </h3>
          <p>Become a member of a community of developers supporting Flowbite.</p>
        </div>
        <a
          class="flex gap-2 items-center text-primary-700 text-base font-medium whitespace-nowrap"
          href="http://github.com/themesberg/flowbite-svelte">
          See our repository <ChevronRight variation="solid" />
        </a>
      </div>
    </div>
  </div>
</div>
