<script lang="ts">
	import { HighlightSvelte, Highlight } from 'svelte-rune-highlight';
	import markdown from 'svelte-rune-highlight/languages/markdown';
	import { Button, Badge } from '$lib';
	import { copyToClipboard, replaceLibImport } from './helpers';
	import { highlightcompo } from './theme';

	interface Props {
		// componentStatus: boolean;
		code: string;
		badgeClass?: string;
		buttonClass?: string;
		codeLang?: string;
		class?: string;
		expanded?: boolean;
		replaceLib?: boolean;
	}

	let {
		code,
		codeLang,
		badgeClass,
		buttonClass,
		replaceLib = true,
		class: className
	}: Props = $props();

	if (replaceLib) {
		code = replaceLibImport(code);
	}
	// console.log('code: ', code)

	let showExpandButton: boolean = $state(false);
	let expand: boolean = $state(false);
	const checkOverflow = (el: HTMLElement) => {
		const isOverflowingY = el.clientHeight < el.scrollHeight;
		showExpandButton = isOverflowingY;
	};

	const { base, badge, button } = $derived(highlightcompo());
	let copiedStatus = $state(false);

	const handleExpandClick = () => {
		expand = !expand;
	};

	function handleCopyClick() {
		copyToClipboard(code)
			.then(() => {
				copiedStatus = true;
				setTimeout(() => {
					copiedStatus = false;
				}, 1000);
			})
			.catch((err) => {
				console.error('Error in copying:', err);
				// Handle the error as needed
			});
	}
</script>

<div class={base({ className })}>
	<div class="relative">
		<div
			class="p-6 overflow-hidden {showExpandButton ? 'pb-8' : ''}"
			class:max-h-72={!expand}
			tabindex="-1"
			use:checkOverflow
		>
			{#if copiedStatus}
				<Badge class={badge({ class: badgeClass })} color="green">Copied to clipboard</Badge>
			{/if}
			{#if codeLang === 'md'}
				<Highlight language={markdown} {code} />
			{:else if code}
				<HighlightSvelte {code} />
			{:else}
				no code is provided
			{/if}
		</div>
		<Button class={button({ class: buttonClass })} onclick={handleCopyClick}>Copy</Button>
		{#if showExpandButton}
			<button
				onclick={handleExpandClick}
				type="button"
				class="hover:text-primary-700 absolute start-0 bottom-0 w-full border-t border-gray-200 bg-gray-100 px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
				>{expand ? 'Collapse code' : 'Expand code'}</button
			>
		{/if}
	</div>
</div>