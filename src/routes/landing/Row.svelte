<script lang="ts">
  export let image: string;
  export let reversed: boolean = false;
  export let divide: boolean = false;
  export let contain: boolean = false;

  const [name, suffix] = image.split('.');
  let dark = name + '-dark.' + suffix;
</script>

<div class="flex px-4 py-6 lg:py-6 lg:gap-16 self-stretch {reversed ? 'flex-row-reverse' : 'flex-row'}">
  <div
    class="flex-grow min-h-full bg-no-repeat {contain
      ? 'bg-contain'
      : 'bg-cover'} shadow-md rounded-lg w-1/2 hidden lg:flex {image}" />
  <div
    class="flex flex-col items-start gap-4 lg:gap-8 flex-grow w-1/2 {divide
      ? 'divide-y dark:divide-gray-700'
      : ''}">
    <slot />
  </div>
</div>
