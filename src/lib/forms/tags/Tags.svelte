<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { type TagsProps, CloseButton } from '$lib';
	import { tags } from './theme';

  let { value = $bindable([]), itemClass = '', placeholder = 'Enter tags', class:className, ...restProps }: TagsProps = $props();

	const { base, tag, span, close, input } = $derived(tags())

  let contents: string = $state('');

  const handleKeys = (event: KeyboardEvent) => {
		if (event.key === 'Enter') {
			event.preventDefault();
			if (contents.length > 0 && contents.trim().length > 0) {
				value.push(contents.trim());
				value = value;
				contents = '';
			}
		}

		if (event.key === 'Backspace') {
			if (contents.length === 0) {
				event.preventDefault();
				contents = value.pop() ?? '';
				value = value;
			}
		}
	};

	const deleteField = (index: number) => {
		value.splice(index, 1);
		value = value;
	};
</script>

<div
  {...restProps}  
	class={twMerge(
		'border bg-gray-50 border-gray-300 rounded-lg flex focus-within:ring-primary-500 focus-within:ring-1 focus-within:border-primary-500 overflow-x-auto scrollbar-hidden',
	className
	)}
>
	{#each value as tag, index}
		<div
			class={twMerge(
				'flex items-center rounded-lg bg-gray-100 text-gray-900 border border-gray-300 my-1 ml-1 px-2 py-1 text-sm max-w-full min-w-fit ',
				itemClass
			)}
		>
			<span class="items-center">
				{tag}
			</span>
				<CloseButton onclick={() => {
					deleteField(index);
				}}/>
		</div>
	{/each}


	<input
		onkeydown={(event) => {
			handleKeys(event);
		}}
		bind:value={contents}
		placeholder={value.length === 0 ? placeholder : ''}
		type="text"
		autocomplete="new-password"
		class="block text-sm m-2.5 p-0 bg-transparent border-none outline-none text-gray-900 h-min w-full min-w-fit focus:ring-0 placeholder-gray-400"
	/>
 
</div>