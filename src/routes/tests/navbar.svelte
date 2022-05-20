<script>
	import ExampleDiv from '../utils/ExampleDiv.svelte';
	import { Button, Navbar, NavBrand, NavLi, NavUl, NavHamburger } from '$lib/index';
	let hidden1 = true;
	let hidden2 = true;
	let hidden3 = true;
	const toggle1 = () => (hidden1 = !hidden1);
	const toggle2 = () => (hidden2 = !hidden2);
	const toggle3 = () => (hidden3 = !hidden3);
</script>

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
			<NavHamburger on:toggleNav={toggle1} />
		</div>
		<NavUl bind:hidden={hidden1}>
			<NavLi href="/" active={true}>Home</NavLi>
			<NavLi href="/about">About</NavLi>
			<NavLi href="/contact">Contact</NavLi>
		</NavUl>
	</Navbar>
</ExampleDiv>

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
		<NavHamburger on:toggleNav={toggle2} />
		<NavUl bind:hidden={hidden2}>
			<NavLi href="/" active={true}>Home</NavLi>
			<NavLi href="/about">About</NavLi>
			<NavLi href="/contact">Contact</NavLi>
		</NavUl>
	</Navbar>
</ExampleDiv>

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

		<NavUl bind:hidden={hidden3}>
			<NavLi href="/" active={true}>Home</NavLi>
			<NavLi href="/about">About</NavLi>
			<NavLi href="/contact">Contact</NavLi>
		</NavUl>
	</Navbar>
</ExampleDiv>
