<script>
	import { Card, Button } from '$lib/index';
	import { goto } from '$app/navigation';
	import {
		accordions,
		alerts,
		badges,
		buttons,
		buttonGroups,
		cards,
		footers,
		icons,
		modals,
		navbar,
		spinners,
		tabs,
		timelines,
		tooltips
	} from './items';
	const handleClick = () => {
		goto('/getting-started');
	};
</script>

<div class="relative bg-white overflow-hidden mt-8 lg:mb-8 mx-auto dark:bg-gray-800">
	<div class="max-w-7xl mx-auto ">
		<div class="relative z-10 xl:pb-8 bg-transparent lg:max-w-2xl lg:w-full">
			<main class="my-auto mx-auto max-w-7xl xl:pl-16 xl:pt-24 p-16">
				<div class="sm:text-center lg:text-left">
					<h1 class="text-4xl tracking-tight font-extrabold text-gray-900  dark:text-white">
						<span class="block xl:inline">Flowbite Svelte </span>
						<span class="block text-indigo-600 xl:inline">UI Component</span>
					</h1>
					<p
						class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg 
            lg:max-w-sm sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 dark:text-white"
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
	<div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-5/12 lg:pt-16 lg:mr-20">
		<img class="" src="/images/office1.webp" alt="Header" />
	</div>
</div>

<div class="container flex flex-wrap mx-auto mt-2 justify-center">
	<div class="p-4">
		<Card img="/images/accordions.webp" alt="Accordions">
			<span slot="paragraph">
				{#each accordions as { href, name }}
					<p class="text-lg w-full text-gray-900 dark:text-white py-0">
						<a {href} class="text-blue-600 hover:underline dark:text-blue-500">{name}</a>
					</p>
				{/each}
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/alerts.webp" alt="Alerts">
			<span slot="paragraph">
				{#each alerts as { href, name }}
					<p class="text-lg w-full text-gray-900 dark:text-white py-0">
						<a {href} class="text-blue-600 hover:underline dark:text-blue-500">{name}</a>
					</p>
				{/each}
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/avatar.webp" alt="Avatar">
			<span slot="paragraph">
				<p class="text-lg w-full text-gray-900 dark:text-white py-0">
					<a href="/avatar" class="text-blue-600 hover:underline dark:text-blue-500">Avatar</a>
				</p>
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/badges.webp" alt="Badges">
			<span slot="paragraph">
				{#each badges as { href, name }}
					<p class="text-lg w-full text-gray-900 dark:text-white py-0">
						<a {href} class="text-blue-600 hover:underline dark:text-blue-500">{name}</a>
					</p>
				{/each}
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/buttongroups.webp" alt="Button Groups">
			<span slot="paragraph">
				{#each buttonGroups as { href, name }}
					<p class="text-lg w-full text-gray-900 dark:text-white py-0">
						<a {href} class="text-blue-600 hover:underline dark:text-blue-500">{name}</a>
					</p>
				{/each}
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/buttons.webp" alt="Buttons">
			<span slot="paragraph">
				{#each buttons as { href, name }}
					<p class="text-lg w-full text-gray-900 dark:text-white py-0">
						<a {href} class="text-blue-600 hover:underline dark:text-blue-500">{name}</a>
					</p>
				{/each}
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/cards.webp" alt="Cards">
			<span slot="paragraph">
				{#each cards as { href, name }}
					<p class="text-lg w-full text-gray-900 dark:text-white py-0">
						<a {href} class="text-blue-600 hover:underline dark:text-blue-500">{name}</a>
					</p>
				{/each}
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/carousel.webp" alt="Carousel">
			<span slot="paragraph">
				<p class="text-lg w-full text-gray-900 dark:text-white py-0">
					<a href="/carousels" class="text-blue-600 hover:underline dark:text-blue-500">Carousel</a>
				</p>
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/darkmode.webp" alt="Darkmode">
			<span slot="paragraph">
				<p class="text-lg w-full text-gray-900 dark:text-white py-0">
					<a href="/darkmode" class="text-blue-600 hover:underline dark:text-blue-500">Dark mode</a>
				</p>
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/dropdowns.webp" alt="Dropdowns">
			<span slot="paragraph">
				<p class="text-lg w-full text-gray-900 dark:text-white py-0">
					<a href="/dropdowns" class="text-blue-600 hover:underline dark:text-blue-500">Dropdowns</a
					>
				</p>
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/forms.webp" alt="Forms">
			<span slot="paragraph">
				<p class="text-lg w-full text-gray-900 dark:text-white py-0">
					<a href="/forms" class="text-blue-600 hover:underline dark:text-blue-500">Forms</a>
				</p>
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/footer.webp" alt="Footer">
			<span slot="paragraph">
				{#each footers as { href, name }}
					<p class="text-lg w-full text-gray-900 dark:text-white py-0">
						<a {href} class="text-blue-600 hover:underline dark:text-blue-500">{name}</a>
					</p>
				{/each}
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/icons.webp" alt="Icons">
			<span slot="paragraph">
				{#each icons as { href, name }}
					<p class="text-lg w-full text-gray-900 dark:text-white py-0">
						<a {href} class="text-blue-600 hover:underline dark:text-blue-500">{name}</a>
					</p>
				{/each}
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/list-group.webp" alt="List group">
			<span slot="paragraph">
				<p class="text-lg w-full text-gray-900 dark:text-white py-0">
					<a href="/list-group" class="text-blue-600 hover:underline dark:text-blue-500"
						>List group</a
					>
				</p>
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/modals.webp" alt="Modals">
			<span slot="paragraph">
				{#each modals as { href, name }}
					<p class="text-lg w-full text-gray-900 dark:text-white py-0">
						<a {href} class="text-blue-600 hover:underline dark:text-blue-500">{name}</a>
					</p>
				{/each}
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/navbar.webp" alt="Navbars">
			<span slot="paragraph">
				{#each navbar as { href, name }}
					<p class="text-lg w-full text-gray-900 dark:text-white py-0">
						<a {href} class="text-blue-600 hover:underline dark:text-blue-500">{name}</a>
					</p>
				{/each}
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/pagination.webp" alt="Pagination">
			<span slot="paragraph">
				<p class="text-lg w-full text-gray-900 dark:text-white py-0">
					<a href="/paginations" class="text-blue-600 hover:underline dark:text-blue-500"
						>Pagination</a
					>
				</p>
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/progressbar.webp" alt="Progress bar">
			<span slot="paragraph">
				<p class="text-lg w-full text-gray-900 dark:text-white py-0">
					<a href="/progressbars" class="text-blue-600 hover:underline dark:text-blue-500"
						>Progress bar</a
					>
				</p>
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/sidebar.webp" alt="Sidebar">
			<span slot="paragraph">
				<p class="text-lg w-full text-gray-900 dark:text-white py-0">
					<a href="/sidebars" class="text-blue-600 hover:underline dark:text-blue-500">Sidebar</a>
				</p>
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/spinners.webp" alt="Spinners">
			<span slot="paragraph">
				{#each spinners as { href, name }}
					<p class="text-lg w-full text-gray-900 dark:text-white py-0">
						<a {href} class="text-blue-600 hover:underline dark:text-blue-500">{name}</a>
					</p>
				{/each}
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/table.webp" alt="Tables">
			<span slot="paragraph">
				<p class="text-lg w-full text-gray-900 dark:text-white py-0">
					<a href="/tables" class="text-blue-600 hover:underline dark:text-blue-500">Table</a>
				</p>
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/tabs.webp" alt="Tabs">
			<span slot="paragraph">
				{#each tabs as { href, name }}
					<p class="text-lg w-full text-gray-900 dark:text-white py-0">
						<a {href} class="text-blue-600 hover:underline dark:text-blue-500">{name}</a>
					</p>
				{/each}
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/timeline.webp" alt="Timeline">
			<span slot="paragraph">
				{#each timelines as { href, name }}
					<p class="text-lg w-full text-gray-900 dark:text-white py-0">
						<a {href} class="text-blue-600 hover:underline dark:text-blue-500">{name}</a>
					</p>
				{/each}
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/toast.webp" alt="Toast">
			<span slot="paragraph">
				<p class="text-lg w-full text-gray-900 dark:text-white py-0">
					<a href="/toasts" class="text-blue-600 hover:underline dark:text-blue-500">Toast</a>
				</p>
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/tooltip.webp" alt="Tooltips">
			<span slot="paragraph">
				{#each tooltips as { href, name }}
					<p class="text-lg w-full text-gray-900 dark:text-white py-0">
						<a {href} class="text-blue-600 hover:underline dark:text-blue-500">{name}</a>
					</p>
				{/each}
			</span>
		</Card>
	</div>
</div>
