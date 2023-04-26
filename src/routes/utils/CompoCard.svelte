<script lang="ts">
  import Card from '$lib/cards/Card.svelte';

  export let name: string;
  export let dir: string;
  export let path: string;
  export let thumnailSize: string;

  path = path.toLowerCase();
  dir = dir.toLowerCase();
</script>

<Card href="/docs/{dir}{path}/" padding="none" {...$$restProps} class="!max-w-none shadow-none hover:shadow-lg dark:hover:bg-gray-900 dark:hover:shadow-lg-light">
  <div
    class="bg-gray-50 dark:bg-gray-700 rounded-t-md py-2.5 px-5 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
    <span class="text-base font-medium text-gray-900 dark:text-white">{name}</span><span
      class="text-gray-500 dark:text-gray-400"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        aria-hidden="true"
        class="w-5 h-5"
        ><path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg
      ></span>
  </div>
  <div class="flex justify-center items-center h-52">
    <div class="relative dark:hidden h-5/6 {thumnailSize ? thumnailSize : 'w-56'}">
      <span
        style="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0px;"
        ><img
          alt={name}
          src="/images/{dir}{path}.svg"
          decoding="async"
          data-nimg="fill"
          style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: contain;"
          sizes="100vw"
          srcset="/images/{dir}{path}.svg 640w, /images/{dir}{path}.svg 750w, /images/{dir}{path}.svg 828w, /images/{dir}{path}.svg 1080w, /images/{dir}{path}.svg 1200w, /images/{dir}{path}.svg 1920w, /images/{dir}{path}.svg 2048w, /images/{dir}{path}.svg 3840w" /><noscript /></span>
    </div>
    <div class="hidden relative dark:block h-5/6 {thumnailSize ? thumnailSize : 'w-56'}">
      <span
        style="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0px;"
        ><img
          alt={name}
          src="/images/{dir}{path}-dark.svg"
          decoding="async"
          data-nimg="fill"
          style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: contain;" /><noscript /></span>
    </div>
  </div>
</Card>
