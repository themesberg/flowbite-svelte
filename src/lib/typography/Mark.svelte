<script lang="ts">
	import classNames from 'classnames';
	export let textColor: string = 'text-white dark:bg-blue-500';
	export let bgColor: string = 'bg-blue-600';
	export let markClass: string = 'px-2 rounded';
</script>

<mark class={classNames(markClass, bgColor, textColor, $$props.class)}>
	<slot />
</mark>
