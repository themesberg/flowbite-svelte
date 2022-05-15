<script>
	import { AccordionItem } from '$lib/index';
</script>

<AccordionItem id="1" flush class="myclass">
	<div slot="header">Test</div>
	<div slot="body">Thing</div>
</AccordionItem>

<div class=" p-5 myclass">Testing</div>

<AccordionItem id="1" flush class="py-0">
	<div slot="header">Test</div>
	<div slot="body">Thing</div>
</AccordionItem>

<style>
	.myclass {
		padding: 0;
		color: red;
	}
</style>
