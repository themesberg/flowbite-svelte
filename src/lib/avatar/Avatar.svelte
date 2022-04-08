<script lang="ts">
	import type { AvatarType } from '../types';
	export let avatar: AvatarType = {};

	let isCircle = avatar.round ? 'rounded-full' : 'rounded';
	let isBorder = avatar.border ? 'p-1 ring-2 ring-gray-300 dark:ring-gray-500' : '';
	export let avatarClass: string = `w-${avatar.size} h-${avatar.size} ${isCircle} ${isBorder}`;
	export let placehoder: boolean = false;
</script>

{#if placehoder}
	<div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
		<svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" /></svg>
	</div>
{:else if avatar.header && avatar.text}
	<div class="flex items-center space-x-4">
		<img class="class={avatarClass}" alt={avatar.alt} src={avatar.src} />
		<div class="space-y-1 font-medium dark:text-white">
			<div>{avatar.header}</div>
			<div class="text-sm text-gray-500 dark:text-gray-400">{avatar.text}</div>
		</div>
	</div>
{:else}
	<img class={avatarClass} alt={avatar.alt} src={avatar.src} />
{/if}
