<script lang="ts">
	import { InteractiveTabs, InteractiveTabHead, TabContent, Card } from '$lib/index';

	let tab1 = { name: 'Tab1', id: 1 };
	let tab2 = { name: 'Tab2', id: 2 };
	let tab3 = { name: 'Tab3', id: 3 };
	let tabhead = [tab1, tab2, tab3];
	// console.log(tabhead);
	let tabs = [
		{
			name: 'Profile-1',
			id: 1,
			content: '1-1 Lorem ipsum dolor sit amet, consectetur adipiscing elit'
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

<InteractiveTabs tabId="myTab1" {tabs} />

<InteractiveTabHead tabs={tabhead}>
	<TabContent tab={tab1}>Test 1 content here</TabContent>
	<TabContent tab={tab2}>Test 2 content here</TabContent>
	<TabContent tab={tab3}><Card /></TabContent>
</InteractiveTabHead>
