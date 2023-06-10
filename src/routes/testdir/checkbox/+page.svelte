<script lang="ts">
	import { Label, Checkbox, Button, Kbd } from 'flowbite-svelte';
</script>

<form method="post" class="space-y-4 p-4">
	<label class="block">
		<input type="checkbox" name="html-value-set" value="hello" checked />
		<span>HTML checkbox without value</span>
	</label>
	<label class="block">
		<input type="checkbox" name="html-value-not-set" checked />
		<span>HTML checkbox without value</span>
	</label>
	<hr />
	<Label>
		<Checkbox name="flowbite-value-set" value="hello" checked />
		<span>Flowbite checkbox with <Kbd>"Value"</Kbd> set</span>
	</Label>
	<Label>
		<Checkbox name="flowbite-value-not-set" checked />
		<span>Flowbite checkbox with <Kbd>"Value"</Kbd> not set</span>
	</Label>
	<hr />
	<Button type="submit">Submit</Button>
</form>
