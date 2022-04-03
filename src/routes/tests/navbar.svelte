<script>
	import { Navbar } from '$lib/index';
	let website = {
		name: 'Bon Appetit',
		logo: '/images/images/mkdir-logo.webp',
		alt: 'Bon Appetit'
	};
	let menus = [
		{
			name: 'Home',
			href: '/'
		},
		{
			name: 'Menu',
			href: '/menu'
		},
		{
			name: 'About',
			href: '/about'
		},
		{
			name: 'Contact',
			href: '/contact'
		}
	];
</script>

<Navbar {...website} {menus} />
