<script lang="ts">
  import { A } from '$lib';
  import { ArrowRightOutline } from 'flowbite-svelte-icons';
  import Figma from '../../../utils/icons/Figma.svelte';
</script>

<A href="/" class="inline-flex items-center justify-center rounded-lg bg-gray-50 p-5 text-base font-medium hover:bg-gray-100 hover:text-gray-900 hover:no-underline dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
  <Figma />
  <span class="ms-3 w-full">Get started with our Figma Design System</span>
  <ArrowRightOutline class="ms-2 h-6 w-6" />
</A>