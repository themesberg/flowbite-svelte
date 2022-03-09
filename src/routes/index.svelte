<script>
	import { Card, Button } from '$lib/index';
	import { goto } from '$app/navigation';

	const handleClick = () => {
		goto('/getting-started');
	};
</script>

<div class="relative bg-white overflow-hidden mt-8 mx-auto dark:bg-gray-800">
	<div class="max-w-7xl mx-auto ">
		<div
			class="relative z-10 pb-8 bg-transparent sm:pb-10 md:pb-10 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 "
		>
			<main class="mt-0 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-8 lg:px-8 xl:mt-16">
				<div class="sm:text-center lg:text-left">
					<h1 class="text-4xl tracking-tight font-extrabold text-gray-900  dark:text-white">
						<span class="block xl:inline">Flowbite Svelte </span>
						<span class="block text-indigo-600 xl:inline">UI Component</span>
					</h1>
					<p
						class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg 
            md:max-w-sm sm:max-w-sm sm:mx-auto md:mt-5 md:text-xl lg:mx-0 dark:text-white"
					>
						Speed up your web development with Flowbite Svelte. Flowbite Svelte is an unofficial
						Flowbite component library for Svelte. All interactivities are handled by Svelte.
					</p>
					<div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
						<div class="mt-3 sm:mt-0 sm:ml-3">
							<Button textSize="text-lg" name="Getting started" on:click={handleClick} />
						</div>
					</div>
				</div>
			</main>
		</div>
	</div>
	<div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-5/12 pt-10">
		<img class="" src="/images/office1.webp" alt="Header" />
	</div>
</div>

<div class="container flex flex-wrap mx-auto mt-2 justify-center">
	<div class="p-4">
		<Card
			img="/images/accordions.webp"
			alt="Accordions"
			header="ACCORDIONS"
			link="/accordions"
			btnColor="blue"
			btnLabel="Go to Accordions"
		/>
	</div>
	<div class="p-4">
		<Card
			img="/images/alerts.webp"
			alt="Alerts"
			header="ALERTS"
			link="/alerts"
			btnColor="red"
			btnLabel="Go to Alerts"
		/>
	</div>
	<div class="p-4">
		<Card
			img="/images/badges.webp"
			alt="Badges"
			header="BADGES"
			link="/badges"
			btnColor="yellow"
			btnLabel="Go to Badges"
		/>
	</div>
	<div class="p-4">
		<Card
			img="/images/buttongroups.webp"
			alt="Button Groups"
			header="BUTTON GROUPS"
			link="/button-groups"
			btnColor="indigo"
			btnLabel="Go to Button groups"
		/>
	</div>
	<div class="p-4">
		<Card
			img="/images/buttons.webp"
			alt="Buttons"
			header="BUTTONS"
			link="/buttons"
			btnColor="red"
			btnLabel="Go to Buttons"
		/>
	</div>

	<div class="p-4">
		<Card
			img="/images/cards.webp"
			alt="Cards"
			header="CARDS"
			link="/cards"
			btnColor="purple"
			btnLabel="Go to Cards"
		/>
	</div>
	<div class="p-4">
		<Card
			img="/images/darkmode.webp"
			alt="Darkmode"
			header="DARK MODE"
			link="/darkmode"
			btnColor="gray"
			btnLabel="Go to Darkmode"
		/>
	</div>
	<div class="p-4">
		<Card
			img="/images/dropdowns.webp"
			alt="Dropdowns"
			header="DROPDOWNS"
			link="/dropdowns"
			btnColor="pink"
			btnLabel="Go to Dropdowns"
		/>
	</div>
	<div class="p-4">
		<Card
			img="/images/icons.webp"
			alt="Icons"
			header="ICONS"
			link="/icons"
			btnColor="green"
			btnLabel="Go to Icons"
		/>
	</div>
	<div class="p-4">
		<Card
			img="/images/list-group.webp"
			alt="List group"
			header="LIST-GROUP"
			link="/list-group"
			btnColor="green"
			btnLabel="Go to List group"
		/>
	</div>
	<div class="p-4">
		<Card
			img="/images/modals.webp"
			alt="Modals"
			header="MODALS"
			link="/modals"
			btnColor="indigo"
			btnLabel="Go to Modals"
		/>
	</div>
	<div class="p-4">
		<Card
			img="/images/navbar.webp"
			alt="Navbars"
			header="NAVBAR"
			link="/navbars"
			btnLabel="Go to Navbars"
		/>
	</div>
	<div class="p-4">
		<Card
			img="/images/spinners.webp"
			alt="Spinners"
			header="SPINNERS"
			link="/spinners"
			btnLabel="Go to Spinners"
		/>
	</div>
	<div class="p-4">
		<Card
			img="/images/tabs.webp"
			alt="Tabs"
			header="TABS"
			link="/tabs"
			btnColor="red"
			btnLabel="Go to Tabs"
		/>
	</div>
</div>
