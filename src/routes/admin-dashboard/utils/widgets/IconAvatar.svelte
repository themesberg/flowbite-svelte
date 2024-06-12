<script lang="ts">
	import { imagesPath } from '../../utils/variables';
	import { Avatar, Indicator } from 'flowbite-svelte';
	export let src: string = '';
	export let color: Indicator['color'] = 'dark';
</script>

<Avatar size="none" class="h-11 w-11">
	<img alt="" src={imagesPath(src, 'users')} class="rounded-full" />
	<Indicator placement="bottom-right" class="h-5 w-5 translate-y-0" {color}>
		<slot />
	</Indicator>
</Avatar>
