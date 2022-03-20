<script>
	import type { ToggleType } from '../types';
	export let props: ToggleType = {
		name: 'toggle-example',
		id: 'toggle-example',
		label: 'Toggle me',
		labelClass: 'flex relative items-center mb-4 cursor-pointer',
		divClass:
			'w-11 h-6 bg-gray-200 rounded-full border border-gray-200 toggle-bg dark:bg-gray-700 dark:border-gray-600',
		spanClass: 'ml-3 text-sm font-medium text-gray-900 dark:text-gray-300',
		checked: false,
		disabled: false
	};
</script>

<label for={props.name} class={props.labelClass}>
	<input
		type="checkbox"
		id={props.name}
		class="sr-only"
		checked={props.checked}
		disabled={props.disabled}
	/>
	<div class={props.divClass} />
	<span class={props.spanClass}>{props.label}</span>
</label>
