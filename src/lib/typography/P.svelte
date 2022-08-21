<script lang="ts">
	import classNames from 'classnames';
	export let color: string = 'text-gray-500';
	export let pClass: string = `text-lg font-normal ${color}`;
</script>

<p class={classNames(pClass, $$props.class)}>
	<slot />
</p>
