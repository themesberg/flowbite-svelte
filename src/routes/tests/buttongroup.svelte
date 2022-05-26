<script>
	import { ButtonGroup, ButtonGroupItem } from '$lib';
	import { UserSolid, AdjustmentsSolid, CloudDownloadSolid } from 'svelte-heros';
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
		<UserSolid size="18" class="pr-1" />
		Proflie</ButtonGroupItem
	>
	<ButtonGroupItem>
		<AdjustmentsSolid size="18" class="pr-1" />
		Settings</ButtonGroupItem
	>
	<ButtonGroupItem>
		<CloudDownloadSolid size="18" class="pr-1" />
		Messages</ButtonGroupItem
	>
</ButtonGroup>

<ButtonGroup>
	<ButtonGroupItem outline>
		<UserSolid size="18" class="pr-1" />
		Proflie</ButtonGroupItem
	>
	<ButtonGroupItem outline>
		<AdjustmentsSolid size="18" class="pr-1" />
		Settings</ButtonGroupItem
	>
	<ButtonGroupItem outline>
		<CloudDownloadSolid size="18" class="pr-1" />
		Messages</ButtonGroupItem
	>
</ButtonGroup>
