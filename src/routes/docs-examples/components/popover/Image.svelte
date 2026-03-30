<script lang="ts">
  import { Popover } from "flowbite-svelte";
  import { ChevronRightOutline } from "flowbite-svelte-icons";
</script>

<p class="text-body">
  Due to its central geographic location in Southern Europe, <a href="/" class="text-fg-brand underline hover:no-underline" id="href_1">Italy</a>
  has historically been home to myriad peoples and cultures. In addition to the various ancient peoples dispersed throughout what is now modern-day Italy, the most predominant being the Indo-European Italic
  peoples who gave the peninsula its name, beginning from the classical era, Phoenicians and Carthaginians founded colonies mostly in insular Italy
</p>
<Popover triggeredBy="#href_1" class="w-96 text-sm" classes={{ content: "p-0" }}>
  <div class="grid grid-cols-5">
    <div class="col-span-3 p-3">
      <div class="space-y-2">
        <h3 class="text-heading font-semibold">About Italy</h3>
        <p class="text-body">
          Italy is located in the middle of the Mediterranean Sea, in Southern Europe it is also considered part of Western Europe. A unitary parliamentary republic with Rome as its capital and
          largest city.
        </p>
        <a href="/" class="text-fg-brand flex items-center font-medium hover:underline">
          Read more <ChevronRightOutline class="text-fg-brand ms-1.5 h-2 w-2" />
        </a>
      </div>
    </div>
    <img src="/images/italy.png" class="col-span-2 h-full rounded-e-lg" alt="Italy map" />
  </div>
</Popover>
