<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  interface Colors {
    application: string;
    marketing: string;
    publisher: string;
  }

  export let name: string;
  export let dir: keyof Colors;
  export let path: string;
  export let no_of_components: string;

  let colors: Colors = {
    application: 'bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-800',
    marketing: 'bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-800',
    publisher: 'bg-orange-100 text-orange-800 dark:bg-orange-200 dark:text-orange-800'
  };

  path = path.toLowerCase();
  dir = dir.toLowerCase() as keyof Colors;
</script>

<a class="h-64 bg-white border border-gray-100 rounded-lg cursor-pointer md:h-80 hover:border-white dark:border-gray-700 dark:hover:border-gray-600 hover:shadow-lg dark:hover:shadow-lg-light dark:bg-gray-900" href="/blocks/{dir}{path}/"
  ><article class="bg-gray-50 dark:bg-gray-700 rounded-t-md py-2.5 px-5 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
    <div class="text-left">
      <h2 class="text-base font-medium text-gray-900 dark:text-white">
        {name}
      </h2>
      <p class="text-sm text-gray-500 dark:text-gray-400">{no_of_components}</p>
    </div>
    <div class="text-gray-900 dark:text-white">
      <span class={twMerge('capitalize text-xs font-medium px-2.5 py-0.5 rounded', colors[dir])}>{dir} UI</span>
    </div>
  </article>
  <div class="relative flex items-center justify-center h-[calc(100%_-_4rem)]">
    <div class="relative hidden w-full h-auto text-center dark:block">
      <img src="/images/blocks/{dir}{path}-dark.svg" alt="{name} thumbnail dark mode" class="max-w-full mx-auto h-44 md:h-52" />
    </div>
    <div class="relative w-full h-auto text-center dark:hidden">
      <img src="/images/blocks/{dir}{path}.svg" alt="{name} thumbnail dark mode" class="max-w-full mx-auto h-44 md:h-52" />
    </div>
  </div></a>
