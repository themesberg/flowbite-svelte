<script lang="ts">
	import { type DropdownDividerProps as Props, dropdowndivider } from './';

	let { class: divClass, ...restProps }: Props = $props();
	const base = dropdowndivider({ class: divClass });
</script>

<div {...restProps} class={base}></div>
