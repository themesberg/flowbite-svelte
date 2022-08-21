<script lang="ts">
	import classNames from 'classnames';
	export let textColor: string = 'text-gray-900';
	export let h1Class: string = `ext-4xl font-extrabold tracking-tight leading-none  md:text-5xl lg:text-6xl dark:text-white ${textColor}`;
</script>

<h1 class={classNames(h1Class, $$props.class)}>
	<slot />
</h1>
