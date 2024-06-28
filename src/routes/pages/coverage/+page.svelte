<script lang="ts">
	import { List, Li, Heading } from '$lib';
	import { CheckCircleSolid, CloseCircleSolid, QuestionCircleSolid } from 'flowbite-svelte-icons';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
	function convertStringToKebabCase(text: string) {
		return text.replace(/[A-Z]/g, (match) => '-' + match.toLowerCase())
	}
	interface Component {
		checked: boolean;
		problems?: string;
		notes?: string;
	}

	interface ListType {
		[key: string]: Component;
	}
	const components: ListType = {
		accordion: {
			checked: false,
		},
		alert: {
			checked: true,
			notes: 'Updated: class names'
		},
		avatar: {
			checked: true,
			problems: 'Avatar tooltip, Stacked, Sizes',
			notes: 'Updated: class names'
		},
		badge: {
			checked: true,
			notes: 'Updated: class names'
		},
		banner: {
			checked: true,
			notes: 'Updated: class names'
		},
		bottomNavigation: {
			checked: true,
      problems: 'Application bar example, Example with pagination, Button group bottom bar, Card with bottom bar',
			notes: 'Updated: class names'
		},
		breadcrumb: {
			checked: true,
			notes: 'Updated: class names'
		},
		buttonGroup: {
			checked: true,
			notes: 'Updated: class names'
		},
		buttons: {
			checked: true,
			notes: 'Updated: class names'
		},
		cards: {
			checked: true,
			problems: 'User profile card, Card with form inputs, E-commerce card, Card with list, Pricing card, Testimonial card.'
		},
		carousel: {
			checked: false,
			
		},
		darkmode: {
			checked: true,
      problems: 'Switcher style'
		},
		deviceMockups: {
			checked: true
		},
		drawer: {
			checked: true,
      problems: 'Contact form, Form elements'
		},
		dropdown: {
			checked: true,
			problems: 'Multi-level dropdown, Programatic open/close, Dropdown with checkbox, Background hover, Helper text, Dropdown with radio, Dropdown with toggle switch, Dropdown navbar, Dropdown with scrolling, Dropdown with search, Menu icon, Notification bell, User avatar, Avatar with name, Sizes, Placement, Double placement, Events, Adding links and active class'
		},
		footer: {
			checked: true,
		},
		forms: {
			checked: false,
		},
		gallery: {
			checked: true
		},
		indicators: {
			checked: true,
			notes: 'Updated: class names'
		},
		kbd: {
			checked: true,
		},
		listGroup: {
			checked: true,
      problems: 'Advanced'
		},
		megaMenu: {
			checked: false,
		},
		modal: {
			checked: false,
		},
		navbar: {
			checked: true,
			problems: 'Navbar container, Active class, Navbar with dropdown, Navbar with search, Navbar with CTA button, User menu dropdown, Solid background'
		},
		pagination: {
			checked: false
		},
		popover: {
			checked: false,
		},
		progress: {
			checked: true
		},
		rating: {
			checked: true
		},
		sidebar: {
			checked: true,
      problems: 'CTA button, Logo branding, Transition'
		},
		skeleton: {
			checked: true,
			notes: 'Updated: class names'
		},
		spinner: {
			checked: true,
		},
		speedDial: {
			checked: false
		},
		table: {
			checked: true,
      problems: 'Sorting by column'
		},
		tabs: {
			checked: true,
      problems: 'Full width tabs, Components in tab contents'
		},
		timeline: {
			checked: false
		},
		toast: {
			checked: true,
      problems: 'Icons, Autohide example'
		},
		tooltip: {
			checked: false,
		},
		typography: {
			checked: false
		},
		video: {
			checked: true
		}
	};

	const forms: ListType = {
		checkbox: {
			checked: true,
      problems: 'Checkbox dropdown, Colors, CheckboxButton, Advanced layout, Group variable'
		},
		fileInput: {
			checked: false
		},
		floatingLabel: {
			checked: true,
      problems: 'Disabled state - disabled outlined, Validation -  Outlined, Sized - outlined'
		},
		inputField: {
			checked: false,
		},
		radio: {
			checked: true,
      problems: 'Alternative syntax, Radio in dropdown, Colors'
		},
		range: {
			checked: true,
      problems: 'Sizes - blob sizes'
		},
		searchInput: {
			checked: false,
		},
		select: {
			checked: true,
      problems: 'Select with dropdown, Sizes, Custom options, MultiSelect'
		},
		textarea: {
			checked: false
		},
		toggle: {
			checked: true
		}
	};

	const typography: ListType = {
		blockquote: {
			checked: true,
      problems: 'User Review'
		},
		heading: {
			checked: true,
      problems: 'Highlighted heading, Heading underline, Breadcrumb context, Badge context, Secondary text, Sizes'
		},
		hr: {
			checked: true,
      problems: 'Default HR - margin, Icon HR - icon size,'
		},
		image: {
			checked: false
		},
		link: {
			checked: true,
      problems: 'Button, CTA link, Card link, Image link '
		},
		list: {
			checked: true
		},
		paragraph: {
			checked: true,
      problems: 'Paragraph link, Paragraph popover '
		},
		text: {
			checked: false
		}
	};

	function analyzeComponents(components: ListType) {
		let total = 0;
		let checked = 0;
		let unchecked = 0;
		let withProblems = 0;
		let withoutProblems = 0;

		for (const component in components) {
			total++;
			checked += components[component].checked ? 1 : 0;
			unchecked += !components[component].checked ? 1 : 0;
			withProblems += components[component].problems ? 1 : 0;
		}
		withoutProblems = checked - withProblems; 

		return {
			total,
			checked,
			unchecked,
			withProblems,
			withoutProblems
		};
	}

	const componentsAnalysis = analyzeComponents(components);
	const formsAnalysis = analyzeComponents(forms);
	const typographyAnalysis = analyzeComponents(typography);

	// console.log("Components:", componentsAnalysis);
	// console.log("Forms:", formsAnalysis);
	// console.log("Typography:", typographyAnalysis);

</script>

<H1>Component and example checks</H1>

<H2>Components</H2>
<List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400" list="none">
	<Li># of pages - {componentsAnalysis.total}</Li>
	<Li># of pages checked - {componentsAnalysis.checked}</Li>
	<Li># of pages unchecked - {componentsAnalysis.unchecked}</Li>
	<Li liclass='text-green-500'># of pages without problems - {componentsAnalysis.withoutProblems}</Li>
	<Li liclass='text-red-500'># of pages with problems - {componentsAnalysis.withProblems}</Li>
</List>
	

<H2>Forms</H2>
<List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400" list="none">
	<Li># of pages - {formsAnalysis.total}</Li>
	<Li># of pages checked - {formsAnalysis.checked}</Li>
	<Li># of pages unchecked - {formsAnalysis.unchecked}</Li>
	<Li liclass='text-green-500'># of pages without problems - {formsAnalysis.withoutProblems}</Li>
	<Li liclass='text-red-500'># of pages with problems - {formsAnalysis.withProblems}</Li>
</List>

<H2>Typography</H2>
<List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400" list="none">
	<Li># of pages - {typographyAnalysis.total}</Li>
	<Li># of pages checked - {typographyAnalysis.checked}</Li>
	<Li># of pages unchecked - {typographyAnalysis.unchecked}</Li>
	<Li liclass='text-green-500'># of pages without problems - {typographyAnalysis.withoutProblems}</Li>
	<Li liclass='text-red-500'># of pages with problems - {typographyAnalysis.withProblems}</Li>
</List>

<Heading
	tag="h2"
	class="mb-2 py-4 text-2xl font-semibold text-gray-900 dark:text-white">Components</Heading
>
<List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400" list="none">
	{#each Object.entries(components) as [key, { checked, problems, notes }]}
		<Li icon>
			{#if checked && !problems}
				<CheckCircleSolid class="me-2 h-8 w-8 text-green-500 dark:text-green-400" />
			{:else if problems}
				<CloseCircleSolid class="me-2 h-8 w-8 text-red-500 dark:text-red-400" />
			{:else}
				<QuestionCircleSolid class="me-2 h-8 w-8 text-gray-500 dark:text-gray-400" />
			{/if}
			<a href="/components/{convertStringToKebabCase(key)}" class='hover:underline'>{key}</a> {#if problems} <span class="text-red-500 ml-4">(TODOS: {problems})</span>{/if}{#if notes}<span class="text-green-500 ml-4">(DONE: {notes})</span> {/if}
		</Li>
	{/each}
</List>

<Heading
	tag="h2"
	class="mb-2 py-4 text-2xl font-semibold text-gray-900 dark:text-white">Forms</Heading
>
<List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400" list="none">
	{#each Object.entries(forms) as [key, { checked, problems, notes }]}
		<Li icon>
			{#if checked && !problems}
				<CheckCircleSolid class="me-2 h-8 w-8 text-green-500 dark:text-green-400" />
			{:else if problems}
				<CloseCircleSolid class="me-2 h-8 w-8 text-red-500 dark:text-red-400" />
			{:else}
				<QuestionCircleSolid class="me-2 h-8 w-8 text-gray-500 dark:text-gray-400" />
			{/if}
			<a href="/forms/{convertStringToKebabCase(key)}" class='hover:underline'>{key}</a> {#if problems} <span class="text-red-500 ml-4">(TODOS: {problems})</span>{/if}{#if notes}<span class="text-green-500 ml-4">(DONE: {notes})</span> {/if}
		</Li>
	{/each}
</List>

<Heading
	tag="h2"
	class="mb-2 py-4 text-2xl font-semibold text-gray-900 dark:text-white">Typography</Heading
>
<List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400" list="none">
	{#each Object.entries(typography) as [key, { checked, problems, notes }]}
		<Li icon>
			{#if checked && !problems}
				<CheckCircleSolid class="me-2 h-8 w-8 text-green-500 dark:text-green-400" />
			{:else if problems}
				<CloseCircleSolid class="me-2 h-8 w-8 text-red-500 dark:text-red-400" />
			{:else}
				<QuestionCircleSolid class="me-2 h-8 w-8 text-gray-500 dark:text-gray-400" />
			{/if}
			<a href="/typography/{convertStringToKebabCase(key)}" class='hover:underline'>{key}</a> {#if problems} <span class="text-red-500 ml-4">(TODOS: {problems})</span>{/if}{#if notes}<span class="text-green-500 ml-4">(DONE: {notes})</span> {/if}
		</Li>
	{/each}
</List>
