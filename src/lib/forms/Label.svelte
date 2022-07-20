<script lang="ts">
	import classNames from 'classnames';

	export let color: 'gray' | 'green' | 'red' | 'disabled' = 'gray';
	export let defaultClass: string = 'text-sm font-medium';

	export let show: boolean = true; // helper for inheritance

	const colorClasses = {
		gray: 'text-gray-900 dark:text-gray-300',
		green: 'text-green-700 dark:text-green-500',
		red: 'text-red-700 dark:text-red-500',
		disabled: 'text-gray-400 dark:text-gray-500'
	};

	function checkDisabled(node: HTMLLabelElement) {
		const control: HTMLFormElement = node.control as HTMLFormElement;
		color = control?.disabled ? 'disabled' : color;

		return {
			update() {
				color = control?.disabled ? 'disabled' : color;
			}
		};
	}

	let labelClass;
	$: labelClass = classNames(defaultClass, colorClasses[color], $$props.class);
</script>

{#if show}
	<!-- svelte-ignore a11y-label-has-associated-control -->
	<label {...$$restProps} class={labelClass} use:checkDisabled>
		<slot />
	</label>
{:else}
	<slot />
{/if}
