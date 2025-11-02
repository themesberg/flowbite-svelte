<script lang="ts">
  import { Popover, P, A } from "flowbite-svelte";
  import { ChevronRightOutline } from "flowbite-svelte-icons";
</script>

<P weight="light" color="text-gray-500 dark:text-gray-400">
  Due to its central geographic location in Southern Europe, <A href="/" id="popover-image">Italy</A> has historically been home to myriad peoples and cultures. In addition to the various ancient peoples
  dispersed throughout what is now modern-day Italy, the most predominant being the Indo-European Italic peoples who gave the peninsula its name, beginning from the classical era, Phoenicians and Carthaginians
  founded colonies mostly in insular Italy
</P>
<Popover triggeredBy="#popover-image" class="w-96 text-sm font-light" classes={{ content: "p-0" }}>
  <div class="grid grid-cols-5">
    <div class="col-span-3 p-3">
      <div class="space-y-2">
        <h3 class="text-xl font-medium text-gray-900 dark:text-white">About Italy</h3>
        <p class="text-gray-500 dark:text-gray-400">Italy is located in the middle of the Mediterranean Sea, in Southern Europe it is also considered part of Western Europe.</p>
        <A href="/">Read more <ChevronRightOutline class="ms-1.5 h-2 w-2" /></A>
      </div>
    </div>
    <img src="/images/image-1.webp" class="col-span-2 h-full rounded-e-lg" alt="Italy map" />
  </div>
</Popover>
