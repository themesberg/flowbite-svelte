<script>
	import { Card, Button } from '$lib/index';
	import { goto } from '$app/navigation';
	import { accordions, alerts, badges, buttons, buttonGroups, cards, carousels, dropdowns, forms, footers, icons, modals, navbar, ratings, tabs, timelines, tooltips } from './items';
	const handleClick = () => {
		goto('/pages/getting-started');
	};

	// Cards
	let divClass = 'max-w-sm md:max-w-xs lg:max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700';
	let pClass = 'text-xl w-full text-gray-900 dark:text-white py-2 sm:py-0';
	let aClass = 'text-gray-700 hover:underline hover:text-blue-600 dark:text-white dark:hover:text-blue-500';
</script>

<div class="relative bg-white overflow-hidden mt-8 lg:mb-8 mx-auto dark:bg-gray-800">
	<div class="max-w-7xl mx-auto ">
		<div class="relative z-10 xl:pb-8 bg-transparent lg:max-w-2xl lg:w-full">
			<main class="my-auto mx-auto max-w-7xl xl:pl-16 xl:pt-24 p-16">
				<div class="sm:text-center lg:text-left">
					<h1 class="text-4xl tracking-tight font-extrabold text-gray-900  dark:text-white">
						<span class="block xl:inline">Flowbite Svelte </span>
						<span class="block text-indigo-600 dark:text-white xl:inline">UI Component</span>
					</h1>
					<p
						class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg 
            lg:max-w-sm sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 dark:text-white"
					>
						Speed up your web development with Flowbite Svelte. Flowbite Svelte is an official Flowbite component library for Svelte. All interactivities are handled by Svelte.
					</p>
					<div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
						<div class="mt-3 sm:mt-0 sm:ml-3">
							<Button textSize="text-lg" on:click={handleClick}>Getting started</Button>
						</div>
					</div>
				</div>
			</main>
		</div>
	</div>
	<div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-5/12 lg:pt-16 lg:mr-20">
		<img class="" src="/images/office1.webp" alt="Header" />
	</div>
</div>

<div class="container flex flex-wrap mx-auto mt-2 justify-center">
	<div class="p-4">
		<Card img="/images/accordions.webp" alt="Accordions" link="/accordions" {divClass}>
			<span slot="paragraph">
				{#each accordions as { href, name }}
					<p class={pClass}>
						<a {href} class={aClass}>{name}</a>
					</p>
				{/each}
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/alerts.webp" alt="Alerts" link="/alerts" {divClass}>
			<span slot="paragraph">
				{#each alerts as { href, name }}
					<p class={pClass}>
						<a {href} class={aClass}>{name}</a>
					</p>
				{/each}
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/avatar.webp" alt="Avatar" link="/avatar" {divClass}>
			<span slot="paragraph">
				<p class={pClass}>
					<a href="/avatar" class={aClass}>Avatar</a>
				</p>
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/badges.webp" alt="Badges" link="/badges" {divClass}>
			<span slot="paragraph">
				{#each badges as { href, name }}
					<p class={pClass}>
						<a {href} class={aClass}>{name}</a>
					</p>
				{/each}
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/breadcrumb.webp" alt="Breadcrumb" link="/breadcrumbs" {divClass}>
			<span slot="paragraph">
				<p class={pClass}>
					<a href="/breadcrumbs" class={aClass}>Breadcrumb</a>
				</p>
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/buttongroups.webp" alt="Button Groups" link="button-groups" {divClass}>
			<span slot="paragraph">
				{#each buttonGroups as { href, name }}
					<p class={pClass}>
						<a {href} class={aClass}>{name}</a>
					</p>
				{/each}
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/buttons.webp" alt="Buttons" link="/buttons" {divClass}>
			<span slot="paragraph">
				{#each buttons as { href, name }}
					<p class={pClass}>
						<a {href} class={aClass}>{name}</a>
					</p>
				{/each}
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/cards.webp" alt="Cards" link="/cards" {divClass}>
			<span slot="paragraph">
				{#each cards as { href, name }}
					<p class={pClass}>
						<a {href} class={aClass}>{name}</a>
					</p>
				{/each}
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/carousel.webp" alt="Carousel" link="carousels" {divClass}>
			<span slot="paragraph">
				{#each carousels as { href, name }}
					<p class={pClass}>
						<a {href} class={aClass}>{name}</a>
					</p>
				{/each}
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/darkmode.webp" alt="Darkmode" link="/darkmode" {divClass}>
			<span slot="paragraph">
				<p class={pClass}>
					<a href="/darkmode" class={aClass}>Dark mode</a>
				</p>
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/dropdowns.webp" alt="Dropdowns" link="dropdowns" {divClass}>
			<span slot="paragraph">
				{#each dropdowns as { href, name }}
					<p class={pClass}>
						<a {href} class={aClass}>{name}</a>
					</p>
				{/each}
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/forms.webp" alt="Forms" link="/forms" {divClass}>
			<span slot="paragraph">
				{#each forms as { href, name }}
					<p class={pClass}>
						<a {href} class={aClass}>{name}</a>
					</p>
				{/each}
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/footer.webp" alt="Footer" link="/footer" {divClass}>
			<span slot="paragraph">
				{#each footers as { href, name }}
					<p class={pClass}>
						<a {href} class={aClass}>{name}</a>
					</p>
				{/each}
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/icons.webp" alt="Icons" link="/icons" {divClass}>
			<span slot="paragraph">
				{#each icons as { href, name }}
					<p class={pClass}>
						<a {href} class={aClass}>{name}</a>
					</p>
				{/each}
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/list-group.webp" alt="List group" link="/list-group" {divClass}>
			<span slot="paragraph">
				<p class={pClass}>
					<a href="/list-group" class={aClass}>List group</a>
				</p>
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/modals.webp" alt="Modals" link="/modals" {divClass}>
			<span slot="paragraph">
				{#each modals as { href, name }}
					<p class={pClass}>
						<a {href} class={aClass}>{name}</a>
					</p>
				{/each}
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/navbar.webp" alt="Navbars" link="/navbars" {divClass}>
			<span slot="paragraph">
				{#each navbar as { href, name }}
					<p class={pClass}>
						<a {href} class={aClass}>{name}</a>
					</p>
				{/each}
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/pagination.webp" alt="Pagination" link="/paginations" {divClass}>
			<span slot="paragraph">
				<p class={pClass}>
					<a href="/paginations" class={aClass}>Pagination</a>
				</p>
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/progressbar.webp" alt="Progress bar" link="/progressbars" {divClass}>
			<span slot="paragraph">
				<p class={pClass}>
					<a href="/progressbars" class={aClass}>Progress bar</a>
				</p>
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/rating.webp" alt="Rating" link="/ratings" {divClass}>
			<span slot="paragraph">
				{#each ratings as { href, name }}
					<p class={pClass}>
						<a {href} class={aClass}>{name}</a>
					</p>
				{/each}
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/sidebar.webp" alt="Sidebar" link="/sidebars" {divClass}>
			<span slot="paragraph">
				<p class={pClass}>
					<a href="/sidebars" class={aClass}>Sidebar</a>
				</p>
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/spinners.webp" alt="Spinners" link="/spinners" {divClass}>
			<span slot="paragraph">
				<p class={pClass}>
					<a href="/spinners" class={aClass}>Spinner</a>
				</p>
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/table.webp" alt="Tables" link="/tables" {divClass}>
			<span slot="paragraph">
				<p class={pClass}>
					<a href="/tables" class={aClass}>Table</a>
				</p>
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/tabs.webp" alt="Tabs" link="/tabs" {divClass}>
			<span slot="paragraph">
				{#each tabs as { href, name }}
					<p class={pClass}>
						<a {href} class={aClass}>{name}</a>
					</p>
				{/each}
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/timeline.webp" alt="Timeline" link="/timelines" {divClass}>
			<span slot="paragraph">
				{#each timelines as { href, name }}
					<p class={pClass}>
						<a {href} class={aClass}>{name}</a>
					</p>
				{/each}
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/toast.webp" alt="Toast" link="/toasts" {divClass}>
			<span slot="paragraph">
				<p class={pClass}>
					<a href="/toasts" class={aClass}>Toast</a>
				</p>
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/tooltip.webp" alt="Tooltips" link="/tooltips" {divClass}>
			<span slot="paragraph">
				{#each tooltips as { href, name }}
					<p class={pClass}>
						<a {href} class={aClass}>{name}</a>
					</p>
				{/each}
			</span>
		</Card>
	</div>
</div>
