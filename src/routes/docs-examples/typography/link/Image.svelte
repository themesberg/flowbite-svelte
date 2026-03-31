<script lang="ts">
  import { Card, Button } from "flowbite-svelte";
  import { ArrowRightOutline } from "flowbite-svelte-icons";
</script>

<Card img="/images/image-1.webp" href="/cards">
  <div class="m-6">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-heading">Noteworthy technology acquisitions 2021</h5>
    <p class="mb-3 leading-tight font-normal text-body">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    <Button>
      Read more <ArrowRightOutline class="ms-2 h-6 w-6" />
    </Button>
  </div>
</Card>
