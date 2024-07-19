<script>
	import { Card, Toggle } from 'svelte-5-ui-lib';
  let hCard = $state(false)
</script>

<Card img={{src:"/images/image-1.webp", alt:'my image'}} href="/" horizontal size="md">
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
  <p class="mb-3 font-normal leading-tight text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
</Card>
<Toggle bind:checked={hCard} spanclass="italic dark:text-gray-500">Reverse: {hCard}</Toggle>