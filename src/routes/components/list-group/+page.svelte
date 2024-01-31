<script>
	import { Listgroup } from '$lib';
	import HighlightCompo from '../../utils/HighlightCompo.svelte';
	import CodeWrapper from '../../utils/CodeWrapper.svelte';
	import H1 from '../../utils/H1.svelte';
	import H2 from '../../utils/H2.svelte';
	import H3 from '../../utils/H3.svelte';
	const modules = import.meta.glob('./md/*.md', { as: 'raw', eager: true });
	let simpleList = ['Profile', 'Settings', 'Messages', 'Download'];
	let links = [
		{ name: 'Avatar', href: '/components/avatar' },
		{ name: 'List group', href: '/components/list-group', current: true },
		{ name: 'Banner', href: '/components/banner' },
		{ name: 'Breadcrumbs', href: '/components/breadcrumb', target: '_blank' }
	];
	let buttons = [
		{ name: 'Profile', mycustomfield: 'data1', current: true },
		{ name: 'Settings', mycustomfield: 'data2' },
		{ name: 'Messages', mycustomfield: 'data3' },
		{ name: 'Download', mycustomfield: 'data4', disabled: true, attrs: { type: 'submit' } }
	];
	import {
		AdjustmentsHorizontalSolid,
		DownloadSolid,
		MessagesSolid,
		UserCircleSolid
	} from 'flowbite-svelte-icons';
	let icons = [
		{ name: 'Profile', icon: UserCircleSolid },
		{ name: 'Settings', icon: AdjustmentsHorizontalSolid },
		{ name: 'Messages', icon: MessagesSolid },
		{ name: 'Download', icon: DownloadSolid }
	];
</script>

<H1>List group</H1>

<H2>Setup</H2>

<HighlightCompo code={modules['./md/setup.md']} />

<H2>Default list group</H2>

<CodeWrapper class="flex justify-center">
	<Listgroup items={simpleList} defaultclass="w-48" />
</CodeWrapper>

<HighlightCompo code={modules['./md/default-list-group.md']} />

<H2>List group with links</H2>

<CodeWrapper class="flex justify-center">
	<Listgroup btn items={links} defaultclass="w-48" />
</CodeWrapper>

<HighlightCompo code={modules['./md/list-group-with-links.md']} />

<H2>List group with buttons</H2>
<CodeWrapper class="flex justify-center">
	<Listgroup
		btn
		items={buttons}
		defaultclass="w-48"
		onclick={(e) => alert('mycustomfield: ' + e.target.attributes.mycustomfield.value)}
	/>
</CodeWrapper>

<HighlightCompo code={modules['./md/list-group-with-buttons.md']} />

<H2>List group with icons</H2>
<CodeWrapper class="flex justify-center">
	<Listgroup
		btn
		items={icons}
		defaultclass="w-48"
		onclick={(e) => console.log(e.target.attributes.name.value)}
	/>
</CodeWrapper>

<HighlightCompo code={modules['./md/list-group-with-icons.md']} />
