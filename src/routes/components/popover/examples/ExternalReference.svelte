<script lang="ts">
	import { Button, Popover } from '$lib';
</script>

<div class="m-4 flex justify-center">
	<div id="ext-ref" class=" m-8 w-40 rounded-lg border border-gray-200 p-2 dark:border-gray-600">
		External reference
	</div>
</div>
<div class="space-x-4 rtl:space-x-reverse">
	<Button id="ref-left">Left</Button>
	<Button id="ref-top">Top</Button>
	<Button id="ref-right">Right</Button>
</div>
<Popover
	reference="#ext-ref"
	color="emerald"
	triggeredBy="#ref-left"
	position="left"
	class="w-40 p-4 text-sm font-light">Popover content.</Popover
>
<Popover
	reference="#ext-ref"
	color="cyan"
	triggeredBy="#ref-top"
	position="top"
	class="w-40 p-4 text-sm font-light">Popover content.</Popover
>
<Popover
	reference="#ext-ref"
	color="pink"
	triggeredBy="#ref-right"
	position="right"
	class="w-40 p-4 text-sm font-light">Popover content.</Popover
>
