<script lang="ts">
  import { Button } from "flowbite-svelte";
  import { ThumbsUpSolid, ArrowRightOutline } from "flowbite-svelte-icons";
</script>

<Button class="p-2!"><ArrowRightOutline class="h-6 w-6" /></Button>
<Button pill={true} class="p-2!"><ArrowRightOutline class="h-6 w-6" /></Button>
<Button outline={true} class="p-2!" size="lg">
  <ThumbsUpSolid class="text-primary-700 h-7 w-7" />
</Button>
<Button pill={true} outline={true} class="p-2!" size="xl">
  <ThumbsUpSolid class="text-primary-700 h-6 w-6" />
</Button>
