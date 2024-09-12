<script lang="ts">
  import { Button } from '$lib';
  import { ArrowRightOutline, ThumbsUpSolid } from 'flowbite-svelte-icons';
</script>

<Button class="!p-2"><ArrowRightOutline class="h-7 w-7" /></Button>
<Button pill={true} class="!p-2"><ArrowRightOutline class="h-5 w-5" /></Button>
<Button outline={true} class="!p-2" size="lg">
  <ThumbsUpSolid class="h-7 w-7" />
</Button>
<Button pill={true} outline={true} class="!p-2" size="xl">
  <ThumbsUpSolid class="h-5 w-5" />
</Button>
