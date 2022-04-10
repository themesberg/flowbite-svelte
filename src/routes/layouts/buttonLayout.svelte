<script>
  import 'prism-themes/themes/prism-holi-theme.css';
  import { Utterances } from '@codewithshin/svelte-utterances';
</script>

<div class="max-w-3xl mx-auto pb-8">
  <div class="container flex flex-wrap mx-auto pt-8">
    <slot />

    <h2 class="text-2xl w-full dark:text-white pt-16 pb-8">Related components</h2>

    <p class="dark:text-white text-lg w-full">
      <a href="/buttons/setup" class="text-blue-600 hover:underline dark:text-blue-500">Button Setup</a>
    </p>

    <p class="dark:text-white text-lg w-full">
      <a href="/buttons/default" class="text-blue-600 hover:underline dark:text-blue-500">Default Button</a>
    </p>

    <p class="dark:text-white text-lg w-full">
      <a href="/buttons/colored-shadow" class="text-blue-600 hover:underline dark:text-blue-500">Colored Shadow Button</a>
    </p>

    <p class="dark:text-white text-lg w-full">
      <a href="/buttons/gradient-duotone" class="text-blue-600 hover:underline dark:text-blue-500">Gradient Duotone Button</a>
    </p>

    <p class="dark:text-white text-lg w-full">
      <a href="/buttons/gradient-monochrome" class="text-blue-600 hover:underline dark:text-blue-500">Gradient Monochrome Button</a>
    </p>

    <p class="dark:text-white text-lg w-full">
      <a href="/buttons/gradient-outline" class="text-blue-600 hover:underline dark:text-blue-500">Gradietn Outline Button</a>
    </p>

    <p class="dark:text-white text-lg w-full">
      <a href="/buttons/outlined" class="text-blue-600 hover:underline dark:text-blue-500">Outlined Button</a>
    </p>

    <p class="dark:text-white text-lg w-full">
      <a href="/buttons/rounded" class="text-blue-600 hover:underline dark:text-blue-500">Rounded Button</a>
    </p>

    <h2 class="text-2xl w-full dark:text-white pt-8 pb-4">References</h2>

    <p class="dark:text-white text-lg">
      <a href="https://flowbite.com/docs/components/buttons/" target="_blank" class="text-blue-600 hover:underline dark:text-blue-500">Flowbite Buttons</a>
    </p>
  </div>

  <div class="container my-16 mx-auto">
    <Utterances reponame="shinokada/flowbite-svelte" theme="dark-blue" />
  </div>
</div>
