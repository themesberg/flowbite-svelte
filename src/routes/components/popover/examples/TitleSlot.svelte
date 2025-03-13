<script lang="ts">
	import { Button, Popover } from '$lib';
</script>

<div class="flex h-40 items-end justify-center">
	<Button id="titleSlot">Default popover</Button>
	<Popover class="w-64 text-sm font-light" triggeredBy="#titleSlot">
		{#snippet titleSlot()}
			<div class="rounded-t-md bg-sky-200 p-2 text-lg font-bold text-sky-600">
				titleSlot snippet
			</div>
		{/snippet}
		<p class="px-3 py-2">And here's some amazing content. It's very engaging. Right?</p>
	</Popover>
</div>
