<script lang="ts">
	interface Props {
		children: any;
		header?: any;
		position?: 'static' | 'fixed' | 'absolute' | 'relative' | 'sticky';
		dismissable?: boolean;
		bannerType: 'default' | 'bottom' | 'cta' | 'signup' | 'info';
		divclass: string | undefined;
		div2class: string | undefined;
	}

	import { twMerge } from 'tailwind-merge';

	let {
		children,
		header,
		position = 'sticky',
		dismissable = true,
		bannerType = 'default',
		divclass,
		div2class,
		...attributes
	} = $props<Props>();
	let bannerStatus = $state(true);

	const divClasses = {
		default: 'top-0 start-0 w-full border-b border-gray-200 bg-gray-50',
		bottom: 'bottom-0 start-0 w-full border-t border-gray-200 bg-gray-50',
		cta: 'flex-col md:flex-row  w-[calc(100%-2rem)] -translate-x-1/2 rtl:translate-x-1/2 bg-white border border-gray-100 rounded-lg shadow-sm lg:max-w-7xl start-1/2 top-6',
		signup: 'top-0 start-0 w-full border-b border-gray-200 bg-gray-50',
		info: 'top-0 start-0 flex-col w-full border-b border-gray-200 md:flex-row bg-gray-50'
	};

	const insideDivClasses = {
		default: 'items-center mx-auto',
		bottom: 'items-center mx-auto',
		cta: 'flex-col items-start mb-3 me-4 md:items-center md:flex-row md:mb-0',
		signup: 'items-center flex-shrink-0 w-full mx-auto sm:w-auto',
		info: 'items-center flex-shrink-0'
	};

	let divCls = twMerge(
		position,
		'z-10 flex justify-between p-4 dark:bg-gray-700 dark:border-gray-600',
		divClasses[bannerType],
		divclass
	);
	let innerCls = twMerge('flex', insideDivClasses[bannerType], div2class);
</script>

{#if bannerStatus}
	<div tabindex="-1" class={divCls} {...attributes}>
		{#if header}
			{@render header()}
		{/if}
		<div class={innerCls}>
			{@render children()}
		</div>
		{#if dismissable}
			<div class="flex items-center">
				<button
					type="button"
					onclick={() => (bannerStatus = false)}
					class="inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
				>
					<svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
						<path
							fill-rule="evenodd"
							d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
							clip-rule="evenodd"
						/>
					</svg>
				</button>
			</div>
		{/if}
	</div>
{/if}

<!--
@component
[Go to docs](https://svelte-5-ui-lib.vercel.app/)
## Props
@prop children,
@prop header,
@prop position = 'sticky',
@prop dismissable = true,
@prop bannerType = 'default',
@prop divclass,
@prop div2class,
@prop ...attributes
-->
