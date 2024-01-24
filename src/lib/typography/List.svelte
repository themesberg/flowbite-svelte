<script lang="ts">
	interface Props {
		children: any;
		tag?: 'ul' | 'ol' | 'dl';
		list?: 'disc' | 'none' | 'decimal' | undefined;
		position?: 'inside' | 'outside';
		class?: string | undefined;
	}
	import { twMerge } from 'tailwind-merge';
	let {
		children,
		tag = 'ul',
		list,
		position = 'inside',
		class: classname,
		...attributes
	} = $props<Props>();

	let lists = {
		disc: 'list-disc',
		none: 'list-none',
		decimal: 'list-decimal'
	};

	let positions = {
		inside: 'list-inside',
		outside: 'list-outside'
	};

	let classList = twMerge(
		lists[list ?? (tag === 'ul' ? 'disc' : 'ol' ? 'decimal' : 'none')],
		positions[position],
		classname
	);
</script>

<svelte:element this={tag} {...attributes} class={classList}>
	{@render children()}
</svelte:element>
