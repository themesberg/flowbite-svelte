<script lang="ts">
	interface Props {
		children: any;
		class?: string | undefined;
		ariaLabel?: string | undefined;
		divClass?: string | undefined;
	}

	import { twMerge } from 'tailwind-merge';

	let {
		children,
		divClass,
		class:classname,
		ariaLabel,
		...attributes
	} = $props<Props>();

	let divCls = twMerge('overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800', divClass);
	let asideCls = twMerge('w-64', classname);

</script>

<aside {...attributes} class={asideCls} aria-label={ariaLabel}>
	<div class={twMerge(divCls)}>
		{@render children()}
	</div>
</aside>
