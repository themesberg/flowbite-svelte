<script lang="ts">
	interface Props {
		children: any;
		ulClass?: string | undefined;
		borderClass?: string | undefined;
		border?: boolean;
	}
	import { twMerge } from 'tailwind-merge';

	let { children, ulClass, borderClass, border = false, ...attributes } = $props<Props>();

	let ulCls: string = $state(twMerge('space-y-2', ulClass));
	let borderCls: string = twMerge(
		'pt-4 mt-4 border-t border-gray-200 dark:border-gray-700',
		borderClass
	);
	// export let border: boolean = false;

	if (border) {
		ulCls += ' ' + borderCls;
	}
</script>

<ul {...attributes} class={ulCls}>
	{@render children()}
</ul>
