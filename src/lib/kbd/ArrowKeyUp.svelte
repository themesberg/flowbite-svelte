<script lang="ts">
	import classNames from 'classnames';
	export let svgClass: string = 'w-4 h-4';
</script>

<svg
	{...$$restProps}
	class={classNames(svgClass, $$props.class)}
	aria-hidden="true"
	fill="currentColor"
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 320 512"
	><path
		d="M9.39 265.4l127.1-128C143.6 131.1 151.8 128 160 128s16.38 3.125 22.63 9.375l127.1 128c9.156 9.156 11.9 22.91 6.943 34.88S300.9 320 287.1 320H32.01c-12.94 0-24.62-7.781-29.58-19.75S.2333 274.5 9.39 265.4z"
	/></svg
>
