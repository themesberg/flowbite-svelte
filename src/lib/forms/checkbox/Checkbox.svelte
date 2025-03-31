<script lang="ts">
	import Label from '../label/Label.svelte';
	import { type CheckboxProps as Props, checkbox } from '.';

	let {
		children,
		aria_describedby,
		color = 'primary',
		custom,
		inline,
		tinted,
		rounded,
		group = $bindable([]),
		choices = [],
		checked = $bindable(false),
		classLabel,
		indeterminate,
		class: className,
		...restProps
	}: Props = $props();

	const { base, label } = $derived(checkbox({ color, tinted, custom, rounded, inline }));
</script>

{#if choices.length > 0}
	{#each choices as { value, checkboxLabel }, i}
		<Label class={label({ class: classLabel })} for={`checkbox-${i}`}>
			{checkboxLabel}
			<input
				id={`checkbox-${i}`}
				type="checkbox"
				{value}
				bind:group
				{...restProps}
				class={base({ class: className })}
			/>
			{#if children}
				{@render children()}
			{/if}
		</Label>
	{/each}
{:else}
	<Label class={label({ class: classLabel })}>
		<input
			type="checkbox"
			bind:checked
			aria-describedby={aria_describedby}
			{indeterminate}
			{...restProps}
			class={base({ class: className })}
		/>
		{#if children}
			{@render children()}
		{/if}
	</Label>
{/if}

