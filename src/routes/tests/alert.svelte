<script lang="ts">
	import { Alert, BorderAlert, InfoAlert } from '$lib/index';
	import { flip } from 'svelte/animate';

	let alerts = [
		{
			id: 'alert1',
			btnColor: 'blue' as const,
			text: 'Alert 1'
		},
		{
			id: 'alert2',
			btnColor: 'green' as const,
			text: 'Alert 2'
		},
		{
			id: 3,
			btnColor: 'purple' as const,
			text: 'Alert 3'
		}
	];
	function remove(alert) {
		alerts = alerts.filter((t) => t !== alert);
	}
</script>

{#each alerts as item (item.id)}
	<div animate:flip={{ delay: 500 }}>
		<Alert alertId={item.id} color={item.btnColor} btn1="close" on:handlebtn1={() => remove(item)}>
			{item.text}
		</Alert>
	</div>
{/each}
