<script lang="ts">
	import { InteractiveTabs } from '$lib/index';
	import Cardtest from './Cardtest.svelte';
	let tabs1 = [
		{
			name: 'Profile-1',
			id: 1,
			content: Cardtest
		},
		{
			name: 'Dashboard-1',
			id: 2,
			content:
				'1-2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
		},
		{
			name: 'Settings-1',
			id: 3,
			content:
				'1-3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
		},
		{
			name: 'Contacts-1',
			id: 4,
			content:
				'1-4Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
		}
	];
</script>

<InteractiveTabs tabId="myTab1" tabs={tabs1} />
