<script lang="ts">
	import type { TextareaType } from '../types';
	export let props: TextareaType = {
		id: 'message',
		name: 'message',
		label: 'Your message',
		labelClass: 'block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400',
		rows: 4,
		placeholder: 'Leave a comment...',
		textareaClass:
			'block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
	};
</script>

<label for={props.id} class={props.labelClass}>{props.label}</label>
<textarea
	id={props.id}
	name={props.name}
	rows={props.rows}
	class={props.textareaClass}
	placeholder={props.placeholder}
/>
