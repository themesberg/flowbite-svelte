<script lang="ts">
  export let image: string;
  export let reversed: boolean = false;
  export let divide: boolean = false;
  export let contain: boolean = false;
  export let h_full: boolean = false;
</script>

<div class="flex self-stretch py-6 lg:gap-16 lg:py-10 {reversed ? 'flex-row-reverse' : 'flex-row'}">
  <div class="hidden w-1/2 items-center lg:flex">
    <div class:min-h-full={h_full} class:h-96={!h_full} class="grow bg-no-repeat {contain ? 'bg-contain' : 'bg-cover'} rounded-lg {image}"></div>
  </div>
  <div class:divide-y={divide} class="flex w-1/2 grow flex-col items-start gap-4 lg:gap-8 dark:divide-gray-700">
    <slot />
  </div>
</div>
