<script>
	import ExampleDiv from '../utils/ExampleDiv.svelte';
	import {
		Button,
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavWrapper,
		ImgDropdown,
		Avatar
	} from '$lib/index';

	let avatar = {
		src: '/images/profile-picture-1.webp',
		alt: 'My avatar',
		size: 12,
		border: true,
		round: true
	};
	let items = [
		{
			href: '/',
			name: 'Dashboard'
		},
		{
			href: '/',
			name: 'Settings'
		},
		{
			href: '/',
			name: 'Sign out'
		}
	];
</script>

<h1 class="text-3xl dark:text-white">Navbar with dropdown</h1>
<ExampleDiv>
	<Navbar>
		<NavBrand href="/">
			<img
				src="https://flowbite.com/docs/images/logo.svg"
				class="mr-3 h-6 sm:h-9"
				alt="Flowbite Logo"
			/>
			<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
				Flowbite
			</span>
		</NavBrand>
		<div class="flex items-center md:order-2">
			<ImgDropdown {items}>
				<Avatar {avatar} />
			</ImgDropdown>
		</div>
		<NavWrapper let:hidden>
			<NavUl {hidden}>
				<NavLi href="/" active={true}>Home</NavLi>
				<NavLi href="/about">About</NavLi>
				<NavLi href="/services">Services</NavLi>
				<NavLi href="/pricing">Pricing</NavLi>
				<NavLi href="/contact">Contact</NavLi>
			</NavUl>
		</NavWrapper>
	</Navbar>
</ExampleDiv>

<h1 class="text-3xl dark:text-white">Navbar with CTA button</h1>
<ExampleDiv>
	<Navbar>
		<NavBrand href="/">
			<img
				src="https://flowbite.com/docs/images/logo.svg"
				class="mr-3 h-6 sm:h-9"
				alt="Flowbite Logo"
			/>
			<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
				Flowbite
			</span>
		</NavBrand>
		<div class="flex md:order-2">
			<Button>Get started</Button>
		</div>
		<NavWrapper let:hidden>
			<NavUl {hidden}>
				<NavLi href="/" active={true}>Home</NavLi>
				<NavLi href="/about">About</NavLi>
				<NavLi href="/services">Services</NavLi>
				<NavLi href="/pricing">Pricing</NavLi>
				<NavLi href="/contact">Contact</NavLi>
			</NavUl>
		</NavWrapper>
	</Navbar>
</ExampleDiv>

<h1 class="text-3xl dark:text-white">Default navbar</h1>
<ExampleDiv>
	<Navbar>
		<NavBrand href="/">
			<img
				src="https://flowbite.com/docs/images/logo.svg"
				class="mr-3 h-6 sm:h-9"
				alt="Flowbite Logo"
			/>
			<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
				Flowbite
			</span>
		</NavBrand>
		<NavWrapper let:hidden>
			<NavUl {hidden}>
				<NavLi href="/" active={true}>Home</NavLi>
				<NavLi href="/about">About</NavLi>
				<NavLi href="/services">Services</NavLi>
				<NavLi href="/pricing">Pricing</NavLi>
				<NavLi href="/contact">Contact</NavLi>
			</NavUl>
		</NavWrapper>
	</Navbar>
</ExampleDiv>
