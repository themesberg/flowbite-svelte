<script>
	import { Avatar, Dropdown, DropdownItem, DropdownDivider, uiHelpers } from '$lib';
	let dropdown = uiHelpers();

	let isOpen = $state(false);
	let toggle = dropdown.toggle;
	let close = dropdown.close;

	$effect(() => {
		// this can be done adding nav.navStatus directly to DOM element
		// without using effect
		isOpen = dropdown.isOpen;
	});
	import HighlightCompo from '../../utils/HighlightCompo.svelte';
	import CodeWrapper from '../../utils/CodeWrapper.svelte';
	import H1 from '../../utils/H1.svelte';
	import H2 from '../../utils/H2.svelte';
	const modules = import.meta.glob('./md/*.md', { query: '?raw', import: 'default', eager: true });
</script>

<H1>Avatar</H1>

<H2>Setup</H2>

<HighlightCompo code={modules['./md/setup.md']} />

<H2>Default avatar</H2>
<CodeWrapper class="flex justify-center gap-4 rtl:space-x-reverse">
	<Avatar src="/images/profile-picture-2.webp" />
	<Avatar src="/images/profile-picture-2.webp" rounded />
</CodeWrapper>

<HighlightCompo code={modules['./md/default-avatar.md']} />

<H2>Bordered</H2>
<CodeWrapper class="flex justify-center gap-4">
	<Avatar src="/images/profile-picture-2.webp" border />
	<Avatar src="/images/profile-picture-2.webp" border class="ring-red-400 dark:ring-red-300" />
</CodeWrapper>

<HighlightCompo code={modules['./md/bordered.md']} />

<H2>Placeholder</H2>
<CodeWrapper class="flex justify-center gap-4">
	<Avatar />
	<Avatar rounded />
	<Avatar border />
	<Avatar rounded border />
</CodeWrapper>

<HighlightCompo code={modules['./md/placeholder.md']} />

<H2>Placeholder initials</H2>
<CodeWrapper class="flex justify-center">
	<Avatar>JL</Avatar>
</CodeWrapper>

<HighlightCompo code={modules['./md/placeholder-initials.md']} />

<H2>Dot indicator</H2>
<CodeWrapper class="flex justify-center gap-4">
	<Avatar src="/images/profile-picture-3.webp" dot={{ color: 'red' }} />
	<Avatar
		src="/images/profile-picture-3.webp"
		dot={{ placement: 'top-right', color: 'red' }}
		rounded
	/>
	<Avatar
		src="/images/profile-picture-5.webp"
		dot={{ placement: 'bottom-right', color: 'green' }}
	/>
	<Avatar src="/images/profile-picture-5.webp" dot={{ placement: 'bottom-right' }} rounded />
	<Avatar dot={{}} />
</CodeWrapper>

<HighlightCompo code={modules['./md/dot-indicator.md']} />

<H2>Stacked</H2>
<CodeWrapper>
	<div class="mb-5 flex">
		<Avatar src="/images/profile-picture-1.webp" stacked />
		<Avatar src="/images/profile-picture-2.webp" stacked />
		<Avatar src="/images/profile-picture-3.webp" stacked />
		<Avatar stacked />
	</div>
	<div class="flex">
		<Avatar src="/images/profile-picture-1.webp" stacked />
		<Avatar src="/images/profile-picture-2.webp" stacked />
		<Avatar src="/images/profile-picture-3.webp" stacked />
		<Avatar stacked href="/" class="bg-gray-700 text-sm text-white hover:bg-gray-600">+99</Avatar>
	</div>
</CodeWrapper>

<HighlightCompo code={modules['./md/stacked.md']} />

<H2>Avatar text</H2>
<CodeWrapper class="flex justify-center">
	<div class="flex items-center space-x-4 rtl:space-x-reverse">
		<Avatar src="/images/profile-picture-1.webp" rounded />
		<div class="space-y-1 font-medium dark:text-white">
			<div>Jese Leos</div>
			<div class="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
		</div>
	</div>
</CodeWrapper>

<HighlightCompo code={modules['./md/avatar-text.md']} />

<H2>User dropdown</H2>
<CodeWrapper class="h-80">
	<Avatar
		onclick={toggle}
		src="/images/profile-picture-3.webp"
		class="cursor-pointer"
		dot={{ color: 'green' }}
	/>
	<Dropdown {isOpen}>
		{#snippet header()}
			<div>Bonnie Green</div>
			<div class="truncate font-medium">name@flowbite.com</div>
		{/snippet}
		{#snippet children()}
			<DropdownItem href="/">Dashboard</DropdownItem>
			<DropdownItem href="/nav">Navbar</DropdownItem>
			<DropdownItem href="/footer">Footer</DropdownItem>
			<DropdownDivider />
			<DropdownItem href="/dropdown">Dropdown</DropdownItem>
		{/snippet}
	</Dropdown>
</CodeWrapper>

<HighlightCompo code={modules['./md/user-dropdown.md']} />
