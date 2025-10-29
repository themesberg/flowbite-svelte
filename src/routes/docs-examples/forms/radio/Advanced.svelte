<script lang="ts">
  import { Radio } from "flowbite-svelte";
  import { ArrowRightOutline } from "flowbite-svelte-icons";
</script>

<p class="mb-5 text-lg font-medium text-gray-900 dark:text-white">Choose technology:</p>
<div class="grid w-full gap-6 md:grid-cols-2">
  <Radio name="custom" custom>
    <div
      class="dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-5 text-gray-500 hover:bg-gray-100 hover:text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
    >
      <div>
        <div class="w-full text-lg font-semibold">0-50 MB</div>
        <div class="w-full">Good for small websites</div>
      </div>
      <ArrowRightOutline class="ms-3 h-10 w-10" />
    </div>
  </Radio>
  <Radio name="custom" custom>
    <div
      class="dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-5 text-gray-500 hover:bg-gray-100 hover:text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
    >
      <div class="block">
        <div class="w-full text-lg font-semibold">500-1000 MB</div>
        <div class="w-full">Good for large websites</div>
      </div>
      <ArrowRightOutline class="ms-3 h-10 w-10" />
    </div>
  </Radio>
</div>
