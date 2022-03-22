<script lang="ts">
	export let legend = 'Checkbox variants';
	export let divClass = 'flex items-center mb-4';
	export let inputClass =
		'w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600';
	export let labelClass = 'ml-3 text-sm font-medium text-gray-900 dark:text-gray-300';
	export let helperLabelClass = 'font-medium text-gray-900 dark:text-gray-300';
	export let options: {
		id: string;
		label: string;
		checked?: boolean;
		disabled?: boolean;
		helper?: string;
	}[];
</script>

<fieldset>
	<legend class="sr-only">{legend}</legend>
	{#each options as option}
		{#if option.helper}
			<div class="flex mb-4">
				<div class="flex items-center h-5">
					<input
						id={option.id}
						aria-describedby={option.id}
						type="checkbox"
						class={inputClass}
						bind:checked={option.checked}
						disabled={option.disabled}
					/>
				</div>
				<div class="ml-3 text-sm">
					<label for={option.id} class={helperLabelClass}>{option.label}</label>
					{#if option.helper}
						<div class="text-gray-500 dark:text-gray-300">
							{@html option.helper}
						</div>
					{/if}
				</div>
			</div>
		{:else}
			<div class={divClass}>
				<input
					id={option.id}
					aria-describedby={option.id}
					type="checkbox"
					class={inputClass}
					checked={option.checked}
					disabled={option.disabled}
				/>
				<label for={option.id} class={labelClass}>{option.label}</label>
			</div>
		{/if}
	{/each}
</fieldset>
