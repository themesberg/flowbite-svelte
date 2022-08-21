<script lang="ts">
	import classNames from 'classnames';
	export let gradientClass: string =
		'text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400';
</script>

<span class={classNames(gradientClass, $$props.class)}>
	<slot />
</span>
