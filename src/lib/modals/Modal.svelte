<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Button from '$lib/buttons/Button.svelte';
	import CloseButton from '$lib/utils/CloseButton.svelte';

	const dispatch = createEventDispatcher();

	export let placement = 'center';
	export let backdropClasses = 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40';
	export let size: 'sm' | 'md' | 'lg' | 'xl' = 'md';

	export let visible = false;

	let backdropEl: HTMLElement;

	function _init(node, _visible) {
		_getPlacementClasses().map((c) => node.classList.add(c));
		if (_visible) _createBackdrop(node);

		return {
			update(_visible) {
				_visible ? _createBackdrop(node) : _destroyBackdropEl(node);
			},

			destroy() {
				_destroyBackdropEl(node);
			}
		};
	}

	function _createBackdrop(node) {
		backdropEl = document.createElement('div');
		backdropEl.classList.add(...backdropClasses.split(' '));
		document.querySelector('body').append(backdropEl);

		dispatch('show', node);
	}

	function _destroyBackdropEl(node) {
		if (backdropEl) backdropEl.remove();

		dispatch('hide', node);
	}

	function _getPlacementClasses() {
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
		sm: 'max-w-md',
		md: 'max-w-lg',
		lg: 'max-w-4xl',
		xl: 'max-w-7xl'
	};
</script>

<!-- Modal toggle -->
<Button on:click={() => (visible = !visible)}>Toggle modal</Button>

<!-- Main modal -->
<div
	id="defaultModal"
	tabindex="-1"
	class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full"
	class:flex={visible}
	class:hidden={!visible}
	aria-hidden={visible ? undefined : 'true'}
	aria-modal={visible ? 'true' : undefined}
	role={visible ? 'dialog' : undefined}
	use:_init={visible}
>
	<div class="relative p-4 w-full1 {sizes[size]} h-full md:h-auto">
		<!-- Modal content -->
		<div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
			<CloseButton
				name="Close modal"
				class="absolute top-3 right-2.5"
				on:click={() => (visible = false)}
			/>
			<!-- Modal header -->
			{#if $$slots.header || $$slots.title}
				<div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
					<slot name="header">
						<h3 class="text-xl font-semibold text-gray-900 dark:text-white">
							<slot name="title" />
						</h3>
					</slot>
				</div>
			{/if}
			<!-- Modal body -->
			<div class="p-6 space-y-6 text-gray-500 dark:text-gray-400">
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
