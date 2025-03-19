<script lang="ts">
	import { idGenerator } from '../../uiHelpers.svelte';
	import { type FloatingLabelInputProps as Props, floatingLabelInput } from '.';

	let {
		children,
		id = idGenerator(),
		value = $bindable(),
		aria_describedby,
		inputStyle = 'standard',
		size = 'default',
		color = 'default',
		divClass,
		inputClass,
		labelClass,
		...restProps
	}: Props = $props();

	const { base, input, label } = $derived(floatingLabelInput({ inputStyle, size, color }));
</script>

<div class={base({ class: divClass })}>
	<input
		{id}
		placeholder=" "
		bind:value
		{...restProps}
		aria-describedby={aria_describedby}
		class={input({ class: inputClass })}
	/>

	<label for={id} class={label({ class: labelClass })}>
		{@render children()}
	</label>
</div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children: any;
@props:id: any = idGenerator();
@props:value: any = $bindable();
@props:aria_describedby: any;
@props:inputStyle: any = 'standard';
@props:size: any = 'default';
@props:color: any = 'default';
@props:divClass: any;
@props:inputClass: any;
@props:labelClass: any;
-->
