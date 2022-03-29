---
layout: alertLayout
---

<script>
  import { Alert }from '$lib/index';
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


<h2 class="text-2xl w-full text-gray-900 dark:text-white py-8">Alert animation example</h2>

<p class="text-gray-900 dark:text-white py-4 text-lg">You can use Svelte animation by adding a custom event handler using the handlebtn1 prop.</p>

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6 h-64">
 
{#each alerts as item (item.id)}
	<div animate:flip={{ delay: 500 }}>
		<Alert alertId={item.id} color={item.btnColor} btn1 on:handlebtn1={() => remove(item)}>
			{item.text}
		</Alert>
	</div>
{/each}
</div>

```html
<script>
import { Alert }from 'flowbite-svelte';
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
``` 