<script>
  import { Popover } from "$lib";
  import { ChevronRightOutline } from "flowbite-svelte-icons";
</script>

<div class="flex h-80 items-end">
  <p class="font-light text-gray-500 dark:text-gray-400">
    Due to its central geographic location in Southern Europe, <a href="/" class="text-primary-600 dark:text-primary-500 underline hover:no-underline" id="popover-image">Italy</a>
    has historically been home to myriad peoples and cultures. In addition to the various ancient peoples dispersed throughout what is now modern-day Italy, the most predominant being the Indo-European Italic peoples who gave the peninsula its name, beginning from the classical era, Phoenicians and Carthaginians founded colonies mostly in insular Italy
  </p>
  <Popover triggeredBy="#popover-image" trigger="hover" class="w-96 text-sm font-light">
    <div class="grid grid-cols-5">
      <div class="col-span-3 p-3">
        <div class="space-y-2">
          <h3 class="font-semibold text-gray-900 dark:text-white">
            About Italy
            <p class="text-gray-500 dark:text-gray-500">Italy is located in the middle of the Mediterranean Sea, in Southern Europe it is also considered part of Western Europe. A unitary parliamentary republic with Rome as its capital and largest city.</p>
            <a href="/" class="text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-600 flex items-center font-medium">
              Read more <ChevronRightOutline class="text-primary-600 dark:text-primary-500 ms-1.5 h-2 w-2" />
            </a>
          </h3>
        </div>
      </div>
      <img src="/images/italy.png" class="col-span-2 h-full rounded-e-lg" alt="Italy map" />
    </div>
  </Popover>
</div>
