<script lang="ts">
	import classNames from 'classnames';
	export let textColor: string = 'text-gray-500';
	export let pClass: string = `text-lg font-normal ${textColor}`;
</script>

<p class={classNames(pClass, $$props.class)}>
	<slot />
</p>
