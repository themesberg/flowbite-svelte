<script>
	import { Alert } from '$lib';
	import { flip } from 'svelte/animate';
	let alerts = [
		{
			id: 'alert1',
			btnColor: 'blue',
			text: 'Alert 1'
		},
		{
			id: 'alert2',
			btnColor: 'green',
			text: 'Alert 2'
		},
		{
			id: 3,
			btnColor: 'purple',
			text: 'Alert 3'
		}
	];
	function remove(alert) {
		alerts = alerts.filter((t) => t !== alert);
	}
</script>

{#each alerts as item (item.id)}
	<div animate:flip={{ delay: 500 }}>
		<Alert alertId={item.id} color={item.btnColor} btn1 on:handlebtn1={() => remove(item)}>
			{item.text}
		</Alert>
	</div>
{/each}
