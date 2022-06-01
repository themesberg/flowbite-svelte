<script>
	import { ButtonGroup, ButtonGroupItem } from '$lib';
	import { User, Adjustments, CloudDownload } from 'svelte-heros';
</script>

<ButtonGroup>
	<ButtonGroupItem outline>Proflie</ButtonGroupItem>
	<ButtonGroupItem outline>Settings</ButtonGroupItem>
	<ButtonGroupItem outline>Messages</ButtonGroupItem>
</ButtonGroup>

<ButtonGroup>
	<ButtonGroupItem href="/">Proflie</ButtonGroupItem>
	<ButtonGroupItem href="/">Settings</ButtonGroupItem>
	<ButtonGroupItem href="/">Messages</ButtonGroupItem>
</ButtonGroup>

<h1>Icon</h1>
<ButtonGroup>
	<ButtonGroupItem>
		<User size="18" class="pr-1" />
		Proflie</ButtonGroupItem
	>
	<ButtonGroupItem>
		<Adjustments size="18" class="pr-1" />
		Settings</ButtonGroupItem
	>
	<ButtonGroupItem>
		<CloudDownload size="18" class="pr-1" />
		Messages</ButtonGroupItem
	>
</ButtonGroup>

<ButtonGroup>
	<ButtonGroupItem outline>
		<User size="18" class="pr-1" />
		Proflie</ButtonGroupItem
	>
	<ButtonGroupItem outline>
		<Adjustments size="18" class="pr-1" />
		Settings</ButtonGroupItem
	>
	<ButtonGroupItem outline>
		<CloudDownload size="18" class="pr-1" />
		Messages</ButtonGroupItem
	>
</ButtonGroup>
