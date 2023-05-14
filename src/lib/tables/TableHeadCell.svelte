<script lang="ts">
	import classNames from 'classnames';
	export let padding: string = 'px-6 py-3';
</script>

<th {...$$restProps} class={classNames(padding, $$props.class)}
on:click
on:focus
on:keydown
on:keypress
on:keyup
on:mouseenter
on:mouseleave
on:mouseover
>
	<slot />
</th>
