<script lang="ts">
  import Avatar from "$lib/avatar/Avatar.svelte";
  import Tooltip from "$lib/tooltip/Tooltip.svelte";
  import { ChevronRightOutline } from "flowbite-svelte-icons";
  import Community from "../utils/icons/Community.svelte";
  import Section from "./utils/Section.svelte";
  import type { TriggeredToggleEvent } from "$lib";

  let { data } = $props();

  let name: string = $state("");
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  function on_show(e: TriggeredToggleEvent) {
    if (e?.trigger instanceof HTMLElement) {
      name = e?.trigger?.dataset.name ?? "";
    }
  }
</script>

<Section class="lg:py-24">
  <!-- containter -->
  <div class="mx-auto flex w-full max-w-screen-xl flex-col items-center gap-12">
    <!-- heading -->
    <div class="flex max-w-2xl flex-col items-center justify-center gap-4">
      <h2 class="text-center text-3xl font-extrabold tracking-tight text-gray-900 lg:text-4xl dark:text-white">Community contributors</h2>
      <p class="text-center text-lg font-normal">Join the open-source community by contributing to the Flowbite Svelte Library and become one of the highlighted members</p>
    </div>
    <!-- avatars -->
    <div class="flex max-w-5xl flex-col gap-3 px-4 lg:px-8">
      <div class="flex flex-wrap items-center justify-center gap-3">
        {#if data?.contributors}
          {#each data?.contributors || [] as contributor}
            <a href={contributor.html_url} rel="nofollow noreferrer" target="_blank">
              <Avatar data-name={contributor.login} src={contributor.avatar_url} class="h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16" />
            </a>
          {/each}
        {/if}
      </div>
      <Tooltip triggeredBy="[data-name]" ontoggle={on_show}>{name}</Tooltip>
    </div>
    <div class="flex w-full max-w-5xl flex-row items-center justify-between lg:px-4">
      <div class="flex w-full flex-col items-start justify-between gap-4 rounded-lg bg-gray-50 p-4 sm:flex-row sm:items-center sm:gap-8 dark:bg-gray-800">
        <div class="hidden lg:block lg:w-fit">
          <Community />
        </div>
        <div class="flex w-full flex-col">
          <h2 class="text-left text-xl font-bold tracking-tight text-gray-900 dark:text-white">Join the community</h2>
          <p>Become a member of a community of developers supporting by Flowbite</p>
        </div>
        <a class="text-primary-700 flex items-center gap-2 text-base font-medium whitespace-nowrap hover:underline" href="http://github.com/themesberg/flowbite-svelte-next">
          See our repository <ChevronRightOutline class="h-6 w-6" />
        </a>
      </div>
    </div>
  </div>
</Section>
