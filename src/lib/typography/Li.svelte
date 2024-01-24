<script lang="ts">
	interface Props {
		children: any;
		icon?: boolean;
		liclass?: string | undefined;
	}
	import { twMerge } from 'tailwind-merge';
	let { children, icon, liclass, ...attributes } = $props<Props>();
	// export let icon: boolean = false;
	// export let liClass: string = '';
	let classLi: string = twMerge(liclass, icon && 'flex items-center');
</script>

<li {...attributes} class={classLi}>
	<slot />
</li>
