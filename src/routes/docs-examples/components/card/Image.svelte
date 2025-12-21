<script lang="ts">
  import { Card, Button, Toggle } from "flowbite-svelte";
  import { ArrowRightOutline } from "flowbite-svelte-icons";
  let vCard = $state(false);
</script>

<div class="space-y-4">
  <Card img="/images/blog/image-1.jpg" reverse={vCard} class="p-6">
    <div class={vCard ? "pb-6" : "pt-6"}>
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
      <p class="mb-3 leading-tight font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
      <Button>
        Read more <ArrowRightOutline class="ms-2 h-6 w-6 text-white" />
      </Button>
    </div>
  </Card>
  <Toggle bind:checked={vCard} class="italic dark:text-gray-500">Reverse</Toggle>
</div>
