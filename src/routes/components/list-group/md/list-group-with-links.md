<script>
    import { Listgroup } from 'svelte-5-ui-lib';
    let links = [
		{ name: 'Accordions', href: '/docs/components/accordion', current: true },
		{ name: 'Alerts', href: '/docs/components/alert' },
		{ name: 'Badges', href: '/docs/components/badge' },
		{ name: 'Breadcrumbs', href: '/docs/components/breadcrumb', attrs: {target: '_blank'} }
	];
</script>

<Listgroup btn items={links} defaultclass="w-48" />