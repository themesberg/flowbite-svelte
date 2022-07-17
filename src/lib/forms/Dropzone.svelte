<script lang="ts">
	export let value: string = '';
	export let divClass: string = 'flex justify-center items-center w-full';
	export let labelClass: string =
		'flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600';
	export let innerDivClass: string = 'flex flex-col justify-center items-center pt-5 pb-6';
</script>

<div class={divClass}>
	<label for="dropzone-file" class={labelClass}>
		<div class={innerDivClass}>
			<slot />
		</div>
		<input {...$$restProps} bind:value type="file" class="hidden" />
	</label>
</div>
