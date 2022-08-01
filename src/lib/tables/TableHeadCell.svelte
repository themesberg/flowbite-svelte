<script lang="ts">
	import classNames from 'classnames';
</script>

<th {...$$restProps} class={classNames('px-6 py-3', $$props.class)}>
	<slot />
</th>
