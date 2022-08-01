<script lang="ts">
	import classNames from 'classnames';

	export let navClass: string = 'bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800';
	export let navDivClass: string = 'mx-auto flex flex-wrap justify-between items-center ';
	export let fluid: boolean = true;
	export let rounded: boolean = false;
	export let border: boolean = false;
	let hidden = true;
	let toggle = () => {
		hidden = !hidden;
	};
</script>

<nav
	{...$$restProps}
	class={classNames(
		navClass,
		{
			rounded: rounded,
			border: border
		},
		$$props.class
	)}
>
	<div
		class={classNames(navDivClass, {
			container: fluid
		})}
	>
		<slot {hidden} {toggle} />
	</div>
</nav>
