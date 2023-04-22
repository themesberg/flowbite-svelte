<script lang="ts">
  export let scheduleName: string = '';
</script>

<div class="max-w-3xl mx-auto text-center">
  <h2 class="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
    {scheduleName}
  </h2>
  <slot name="subtitle" />
</div>

<div class="flow-root max-w-3xl mx-auto mt-8 sm:mt-12 lg:mt-16">
  <div class="-my-4 divide-y divide-gray-200 dark:divide-gray-700">
    <slot />
  </div>
</div>
