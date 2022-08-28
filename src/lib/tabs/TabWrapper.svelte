<script lang="ts">
	export let divClass: string = 'w-full';
	export let tabStyle: 'default' | 'full' | 'icon' | 'pill' | 'underline' | 'custom' = 'default';
	let tabId: number;
	export let activeTabValue: number;
</script>

<div class={divClass}>
	<slot {tabStyle} {tabId} {activeTabValue} />
</div>
