<script>
  import 'prism-themes/themes/prism-holi-theme.css';
  import { Utterances } from '@codewithshin/svelte-utterances';
</script>

<div class="max-w-3xl mx-auto pb-8">
  <div class="container flex flex-wrap mx-auto pt-8">
    <slot />

    <h2 class="text-2xl w-full dark:text-white pt-16 pb-8">Related components</h2>

    <p class="dark:text-white text-lg w-full">
      <a href="/icons/heroicons" class="text-blue-600 hover:underline dark:text-blue-500">Heroicons</a>
    </p>

    <p class="dark:text-white text-lg w-full">
      <a href="/icons/simple-icons" class="text-blue-600 hover:underline dark:text-blue-500">Simpleicons</a>
    </p>

    <h2 class="text-2xl w-full dark:text-white pt-8 pb-4">References</h2>

    <p class="w-full dark:text-white text-base">
      <a href="https://github.com/shinokada/svelte-heroicons" target="_blank" class="text-blue-600 hover:underline dark:text-blue-500">- Svelte-heroicons</a>
    </p>

    <p class="w-full dark:text-white text-base">
      <a href="https://heroicons.com/" target="_blank" class="text-blue-600 hover:underline dark:text-blue-500">- Heroicons</a>
    </p>
  </div>

  <div class="container my-16 mx-auto">
    <Utterances reponame="shinokada/flowbite-svelte" theme="dark-blue" />
  </div>
</div>
