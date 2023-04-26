<script lang="ts">
  export let image: string;
  export let reversed: boolean = false;
  export let divide: boolean = false;
  export let contain: boolean = false;
  export let h_full: boolean = false;

</script>

<div class="flex py-6 lg:py-10 lg:gap-16 self-stretch {reversed ? 'flex-row-reverse' : 'flex-row'}">
  <div class="hidden lg:flex w-1/2 items-center">
    <div
      class:min-h-full={h_full}
      class:h-96={!h_full}
      class="flex-grow bg-no-repeat {contain? 'bg-contain': 'bg-cover'} rounded-lg {image}" />
  </div>
  <div
    class:divide-y={divide}
    class="flex flex-col items-start gap-4 lg:gap-8 flex-grow w-1/2 dark:divide-gray-700">
    <slot />
  </div>
</div>
