<script>
	import { Alert } from '$lib/index';
	import { flip } from 'svelte/animate';
	let alerts = [
		{
			id: 1,
			btnColor: 'blue',
			text: 'Alert 1 Change a few things up and try submitting again.'
		},
		{
			id: 2,
			btnColor: 'green',
			text: 'Alert 2 Change a few things up and try submitting again.'
		},
		{
			id: 3,
			btnColor: 'red',
			text: 'Alert 3 Change a few things up and try submitting again.'
		}
	];
	function remove(alert) {
		alerts = alerts.filter((t) => t !== alert);
	}
</script>

{#each alerts as item (item)}
	<div animate:flip={{ delay: 1000 }}>
		<Alert alertId={item.id} color={item.btnColor} on:handleAlert={() => remove(item)} closeBtn>
			<span slot="content">
				{item.text}
			</span>
		</Alert>
	</div>
{/each}
