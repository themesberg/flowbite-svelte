<script lang="ts">
	interface Props {
		children?: any;
		liClass?: string | undefined;
		aClass?: string | undefined;
		href?: string | undefined;
		target?: string | undefined;
	}

	import { twMerge } from 'tailwind-merge';
	let { children, liClass, aClass, href, target, ...attributes } = $props<Props>();

	let liCls: string = twMerge('me-4 last:me-0 md:me-6', liClass);
	let aCls: string = twMerge('hover:underline', aClass);
</script>

<li class={liCls}>
	<a {...attributes} {href} class={aCls} {target}>
		{@render children()}
	</a>
</li>
