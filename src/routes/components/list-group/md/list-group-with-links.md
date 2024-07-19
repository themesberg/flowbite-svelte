<script>
    import { Listgroup } from 'svelte-5-ui-lib';
    let links = [
		{ name: 'Avatar', href: '/components/avatar' },
		{ name: 'List group', href: '/components/list-group', current: true },
		{ name: 'Banner', href: '/components/banner' },
		{ name: 'Breadcrumbs', href: '/components/breadcrumb', target:'_blank' }
	];
</script>

<Listgroup btn items={links} defaultclass="w-48" />