<script lang="ts">
	import generateId from '../utils/generateId.js';
	export let id: string = generateId();
	type InputType =
		| 'button'
		| 'checkbox'
		| 'color'
		| 'date'
		| 'datetime-local'
		| 'email'
		| 'file'
		| 'hidden'
		| 'image'
		| 'month'
		| 'number'
		| 'password'
		| 'radio'
		| 'range'
		| 'reset'
		| 'search'
		| 'submit'
		| 'tel'
		| 'text'
		| 'time'
		| 'url'
		| 'week';
	export let type: InputType;
	export let value: string = '';
	export let name: string = '';
	export let label: string = '';
	export let required: boolean = false;
	export let divClass = 'relative z-0 mb-6 w-full group';
	export let inputClass =
		'block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer';
	export let labelClass =
		'absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6';
	function setType(node) {
		node.type = type;
	}
</script>

<div class={divClass}>
	<input bind:value use:setType {name} class={inputClass} placeholder=" " {required} />
	<label for={id} class={labelClass}>{label}</label>
</div>
