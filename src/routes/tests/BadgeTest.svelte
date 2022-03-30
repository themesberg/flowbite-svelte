<script>
	import { BadgeIcon } from '$lib/index';
	import { InformationCircleIconOutline } from '@codewithshin/svelte-heroicons';
	let link = '/';
</script>

<h2 class="text-2xl w-full dark:text-white py-8">Size base</h2>

<div
	class="container rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6"
>
	<BadgeIcon textSize="text-base"
		><InformationCircleIconOutline className="h-4 w-4 mr-1" /></BadgeIcon
	>
	<BadgeIcon color="gray" textSize="text-base"
		><InformationCircleIconOutline className="h-4 w-4 mr-1" /></BadgeIcon
	>
	<BadgeIcon color="red" textSize="text-base"
		><InformationCircleIconOutline className="h-4 w-4 mr-1" /></BadgeIcon
	>
	<BadgeIcon color="green" textSize="text-base"
		><InformationCircleIconOutline className="h-4 w-4 mr-1" /></BadgeIcon
	>
	<BadgeIcon color="yellow" textSize="text-base"
		><InformationCircleIconOutline className="h-4 w-4 mr-1" /></BadgeIcon
	>
	<BadgeIcon color="indigo" textSize="text-base"
		><InformationCircleIconOutline className="h-4 w-4 mr-1" /></BadgeIcon
	>
	<BadgeIcon color="purple" textSize="text-base"
		><InformationCircleIconOutline className="h-4 w-4 mr-1" /></BadgeIcon
	>
	<BadgeIcon color="pink" textSize="text-base"
		><InformationCircleIconOutline className="h-4 w-4 mr-1" /></BadgeIcon
	>
</div>
