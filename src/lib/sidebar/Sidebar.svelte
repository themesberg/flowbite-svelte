<script lang="ts">
	interface Props {
		children: any;
		asideclass?: string | undefined;
		ariaLabel?: string | undefined;
		divclass?: string | undefined;
	}

	import { twMerge } from 'tailwind-merge';

	let {
		children,
		divclass,
		asideclass,
		ariaLabel,
		...attributes
	} = $props<Props>();

	let divCls = twMerge('overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800', divclass);
	let asideCls = twMerge('w-64', asideclass);

</script>

<aside {...attributes} class={asideCls} aria-label={ariaLabel}>
	<div class={twMerge(divCls)}>
		{@render children()}
	</div>
</aside>
