<script>
	import ExampleDiv from '../utils/ExampleDiv.svelte';
	import { BadgeIcon } from '$lib/index';
	import { InformationCircleOutline } from 'svelte-heros';
	let link = '/';
</script>

<h2 class="text-2xl w-full dark:text-white py-4">Size base</h2>

<ExampleDiv>
	<BadgeIcon textSize="text-base"><InformationCircleOutline class="mr-1" /></BadgeIcon>
	<BadgeIcon color="gray" textSize="text-base"><InformationCircleOutline class="mr-1" /></BadgeIcon>
	<BadgeIcon color="red" textSize="text-base"><InformationCircleOutline class="mr-1" /></BadgeIcon>
	<BadgeIcon color="green" textSize="text-base"><InformationCircleOutline class="mr-1" /></BadgeIcon>
	<BadgeIcon color="yellow" textSize="text-base"><InformationCircleOutline class="mr-1" /></BadgeIcon>
	<BadgeIcon color="indigo" textSize="text-base"><InformationCircleOutline class="mr-1" /></BadgeIcon>
	<BadgeIcon color="purple" textSize="text-base"><InformationCircleOutline class="mr-1" /></BadgeIcon>
	<BadgeIcon color="pink" textSize="text-base"><InformationCircleOutline class="mr-1" /></BadgeIcon>
</ExampleDiv>
