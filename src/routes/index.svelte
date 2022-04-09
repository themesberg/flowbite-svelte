<script>
	import { Card, Button } from '$lib/index';
	import { goto } from '$app/navigation';
	import { accordions, alerts, badges, buttons, buttonGroups, cards, footers, icons, modals, navbar, spinners, tabs, timelines, tooltips } from './items';
	const handleClick = () => {
		goto('/getting-started');
	};
</script>

<div class="relative bg-white overflow-hidden mt-8 mx-auto dark:bg-gray-800">
	<div class="max-w-7xl mx-auto ">
		<div class="relative z-10 pb-8 bg-transparent sm:pb-10 md:pb-10 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 ">
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
						Speed up your web development with Flowbite Svelte. Flowbite Svelte is an unofficial Flowbite component library for Svelte. All interactivities are handled by Svelte.
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
		<Card img="/images/accordions.webp" alt="Accordions" header="ACCORDIONS">
			<span slot="paragraph">
				{#each accordions as { href, name }}
					<p class="dark:text-white text-lg w-full">
						<a {href} class="text-blue-600 hover:underline dark:text-blue-500">{name}</a>
					</p>
				{/each}
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/alerts.webp" alt="Alerts" header="ALERTS">
			<span slot="paragraph">
				{#each alerts as { href, name }}
					<p class="dark:text-white text-lg w-full">
						<a {href} class="text-blue-600 hover:underline dark:text-blue-500">{name}</a>
					</p>
				{/each}
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/avatar.webp" alt="Avatar" header="AVATAR">
			<span slot="paragraph">
				<p class="dark:text-white text-lg w-full">
					<a href="/avatar" class="text-blue-600 hover:underline dark:text-blue-500">Avatar</a>
				</p>
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/badges.webp" alt="Badges" header="BADGES">
			<span slot="paragraph">
				{#each badges as { href, name }}
					<p class="dark:text-white text-lg w-full">
						<a {href} class="text-blue-600 hover:underline dark:text-blue-500">{name}</a>
					</p>
				{/each}
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/buttongroups.webp" alt="Button Groups" header="BUTTON GROUPS">
			<span slot="paragraph">
				{#each buttonGroups as { href, name }}
					<p class="dark:text-white text-lg w-full">
						<a {href} class="text-blue-600 hover:underline dark:text-blue-500">{name}</a>
					</p>
				{/each}
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/buttons.webp" alt="Buttons" header="BUTTONS">
			<span slot="paragraph">
				{#each buttons as { href, name }}
					<p class="dark:text-white text-lg w-full">
						<a {href} class="text-blue-600 hover:underline dark:text-blue-500">{name}</a>
					</p>
				{/each}
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/cards.webp" alt="Cards" header="CARDS">
			<span slot="paragraph">
				{#each cards as { href, name }}
					<p class="dark:text-white text-lg w-full">
						<a {href} class="text-blue-600 hover:underline dark:text-blue-500">{name}</a>
					</p>
				{/each}
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/darkmode.webp" alt="Darkmode" header="DARK MODE">
			<span slot="paragraph">
				<p class="dark:text-white text-lg w-full">
					<a href="/darkmode" class="text-blue-600 hover:underline dark:text-blue-500">Dark mode</a>
				</p>
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/dropdowns.webp" alt="Dropdowns" header="DROPDOWNS">
			<span slot="paragraph">
				<p class="dark:text-white text-lg w-full">
					<a href="/dropdowns" class="text-blue-600 hover:underline dark:text-blue-500">Dropdowns</a>
				</p>
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/forms.webp" alt="Forms" header="FORMS">
			<span slot="paragraph">
				<p class="dark:text-white text-lg w-full">
					<a href="/forms" class="text-blue-600 hover:underline dark:text-blue-500">Forms</a>
				</p>
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/footer.webp" alt="Footer" header="FOOTERS">
			<span slot="paragraph">
				{#each footers as { href, name }}
					<p class="dark:text-white text-lg w-full">
						<a {href} class="text-blue-600 hover:underline dark:text-blue-500">{name}</a>
					</p>
				{/each}
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/icons.webp" alt="Icons" header="ICONS">
			<span slot="paragraph">
				{#each icons as { href, name }}
					<p class="dark:text-white text-lg w-full">
						<a {href} class="text-blue-600 hover:underline dark:text-blue-500">{name}</a>
					</p>
				{/each}
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/list-group.webp" alt="List group" header="LIST-GROUP">
			<span slot="paragraph">
				<p class="dark:text-white text-lg w-full">
					<a href="/list-group" class="text-blue-600 hover:underline dark:text-blue-500">List group</a>
				</p>
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/modals.webp" alt="Modals" header="MODALS">
			<span slot="paragraph">
				{#each modals as { href, name }}
					<p class="dark:text-white text-lg w-full">
						<a {href} class="text-blue-600 hover:underline dark:text-blue-500">{name}</a>
					</p>
				{/each}
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/navbar.webp" alt="Navbars" header="NAVBAR">
			<span slot="paragraph">
				{#each navbar as { href, name }}
					<p class="dark:text-white text-lg w-full">
						<a {href} class="text-blue-600 hover:underline dark:text-blue-500">{name}</a>
					</p>
				{/each}
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/pagination.webp" alt="Pagination" header="PAGINATION">
			<span slot="paragraph">
				<p class="dark:text-white text-lg w-full">
					<a href="/paginations" class="text-blue-600 hover:underline dark:text-blue-500">Pagination</a>
				</p>
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/progressbar.webp" alt="Progress bar" header="PROGRESS BAR">
			<span slot="paragraph">
				<p class="dark:text-white text-lg w-full">
					<a href="/progressbars" class="text-blue-600 hover:underline dark:text-blue-500">Progress bar</a>
				</p>
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/sidebar.webp" alt="Sidebar" header="SIDEBAR">
			<span slot="paragraph">
				<p class="dark:text-white text-lg w-full">
					<a href="/sidebars" class="text-blue-600 hover:underline dark:text-blue-500">Sidebar</a>
				</p>
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/spinners.webp" alt="Spinners" header="SPINNERS">
			<span slot="paragraph">
				{#each spinners as { href, name }}
					<p class="dark:text-white text-lg w-full">
						<a {href} class="text-blue-600 hover:underline dark:text-blue-500">{name}</a>
					</p>
				{/each}
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/table.webp" alt="Tables" header="TABLES">
			<span slot="paragraph">
				<p class="dark:text-white text-lg w-full">
					<a href="/tables" class="text-blue-600 hover:underline dark:text-blue-500">Table</a>
				</p>
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/tabs.webp" alt="Tabs" header="TABS">
			<span slot="paragraph">
				{#each tabs as { href, name }}
					<p class="dark:text-white text-lg w-full">
						<a {href} class="text-blue-600 hover:underline dark:text-blue-500">{name}</a>
					</p>
				{/each}
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/timeline.webp" alt="Timeline" header="TIMELINE">
			<span slot="paragraph">
				{#each timelines as { href, name }}
					<p class="dark:text-white text-lg w-full">
						<a {href} class="text-blue-600 hover:underline dark:text-blue-500">{name}</a>
					</p>
				{/each}
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/toast.webp" alt="Toast" header="TOAST">
			<span slot="paragraph">
				<p class="dark:text-white text-lg w-full">
					<a href="/toasts" class="text-blue-600 hover:underline dark:text-blue-500">Toast</a>
				</p>
			</span>
		</Card>
	</div>
	<div class="p-4">
		<Card img="/images/tooltip.webp" alt="Tooltips" header="TOOLTIPS">
			<span slot="paragraph">
				{#each tooltips as { href, name }}
					<p class="dark:text-white text-lg w-full">
						<a {href} class="text-blue-600 hover:underline dark:text-blue-500">{name}</a>
					</p>
				{/each}
			</span>
		</Card>
	</div>
</div>
