<script lang="ts">
	import classNames from 'classnames';

	export let divWrapperClass: string = 'p-4 mt-6 bg-blue-50 rounded-lg dark:bg-blue-900';
	export let divClass: string = 'flex items-center mb-3';
	export let spanClass: string =
		'bg-orange-100 text-orange-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900';
	export let label: string = '';
</script>

<div
	{...$$restProps}
	id="dropdown-cta"
	class={classNames(divWrapperClass, $$props.class)}
	role="alert"
>
	<div class={divClass}>
		<span class={spanClass}>{label}</span>
		{#if $$slots.icon}
			<slot name="icon" />
		{/if}
	</div>
	<slot />
</div>
