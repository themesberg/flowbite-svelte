<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { setContext } from 'svelte';
	import { CloseButton } from '$lib';
	import focusTrap from '$lib/utils/focusTrap';

	export let open: boolean = false;
	export let title: string = undefined;
	export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
	export let placement:
		| 'top-left'
		| 'top-center'
		| 'top-right'
		| 'center-left'
		| 'center'
		| 'center-right'
		| 'bottom-left'
		| 'bottom-center'
		| 'bottom-right' = 'center';
	export let autoclose: boolean = true;
	export let backdropClasses: string =
		'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40';

	const dispatch = createEventDispatcher();
	setContext('background', true);

	const allPlacementClasses = [
		'justify-start',
		'justify-center',
		'justify-end',
		'items-start',
		'items-center',
		'items-end'
	];

	let backdropEl: HTMLElement;

	function init(node, _open) {
		getPlacementClasses().map((c) => node.classList.add(c));
		_open && createBackdrop(node);

		return {
			update(_open) {
				allPlacementClasses.map((c) => node.classList.remove(c));
				getPlacementClasses().map((c) => node.classList.add(c));

				_open ? createBackdrop(node) : destroyBackdrop(node);
			},

			destroy() {
				destroyBackdrop(node);
			}
		};
	}

	function handleEscape(e) {
		if (open && e.key === 'Escape') open = false;
	}

	function createBackdrop(node) {
		if (!backdropEl) {
			backdropEl = document.createElement('div');
			backdropEl.classList.add(...backdropClasses.split(' '));

			const body = document.querySelector('body');
			body.append(backdropEl);
			body.style.overflow = 'hidden';

			document.addEventListener('keydown', handleEscape, true);
		}

		dispatch('show', node);
	}

	function destroyBackdrop(node) {
		const body = document.querySelector('body');
		body.style.overflow = 'auto';

		if (backdropEl) backdropEl.remove();
		backdropEl = undefined;

		document.removeEventListener('keydown', handleEscape, true);

		dispatch('hide', node);
	}

	function getPlacementClasses() {
		switch (placement) {
			// top
			case 'top-left':
				return ['justify-start', 'items-start'];
			case 'top-center':
				return ['justify-center', 'items-start'];
			case 'top-right':
				return ['justify-end', 'items-start'];

			// center
			case 'center-left':
				return ['justify-start', 'items-center'];
			case 'center':
				return ['justify-center', 'items-center'];
			case 'center-right':
				return ['justify-end', 'items-center'];

			// bottom
			case 'bottom-left':
				return ['justify-start', 'items-end'];
			case 'bottom-center':
				return ['justify-center', 'items-end'];
			case 'bottom-right':
				return ['justify-end', 'items-end'];

			default:
				return ['justify-center', 'items-center'];
		}
	}

	const sizes = {
		xs: 'max-w-md',
		sm: 'max-w-lg',
		md: 'max-w-2xl',
		lg: 'max-w-4xl',
		xl: 'max-w-7xl'
	};

	function onButtonsClick({ target }) {
		if (autoclose && target.tagName === 'BUTTON') open = !open;
	}

	function hide() {
		open = false;
	}
</script>

<!-- Main modal -->
<div
	tabindex="-1"
	class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full"
	class:flex={open}
	class:hidden={!open}
	aria-hidden={open ? undefined : 'true'}
	aria-modal={open ? 'true' : undefined}
	role={open ? 'dialog' : undefined}
	use:init={open}
	use:focusTrap={open}
	on:click={onButtonsClick}
>
	<div class="relative p-4 w-full {sizes[size]} h-full md:h-auto">
		<!-- Modal content -->
		<div
			class="relative bg-white rounded-lg shadow dark:bg-gray-700 text-gray-500 dark:text-gray-400"
		>
			<!-- Modal header -->
			{#if $$slots.header || title}
				<div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
					<slot name="header">
						<h3 class="text-xl font-semibold text-gray-900 dark:text-white p-0">
							{title}
						</h3>
					</slot>
					<CloseButton name="Close modal" on:click={hide} />
				</div>
			{:else}
				<CloseButton name="Close modal" class="absolute top-3 right-2.5" on:click={hide} />
			{/if}
			<!-- Modal body -->
			<div class="p-6 space-y-6">
				<slot />
			</div>
			<!-- Modal footer -->
			{#if $$slots.footer}
				<div
					class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600"
				>
					<slot name="footer" />
				</div>
			{/if}
		</div>
	</div>
</div>
