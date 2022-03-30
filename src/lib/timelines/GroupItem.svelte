<script lang="ts">
	import type { GroupTimelineType } from '../types';
	export let timelines: GroupTimelineType[];
</script>

{#each timelines as { title, src, alt, isPrivate, href, comment }}
	<li>
		<a {href} class="block items-center p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
			<img class="mr-3 mb-3 w-12 h-12 rounded-full sm:mb-0" {src} {alt} />
			<div class="text-gray-600 dark:text-gray-400">
				<div class="text-base font-normal">
					{@html title}
				</div>
				{#if comment}
					<div class="text-sm font-normal">{comment}</div>
				{/if}
				<span class="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
					{#if isPrivate}
						<svg
							class="mr-1 w-3 h-3"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><path
								fill-rule="evenodd"
								d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
								clip-rule="evenodd"
							/><path
								d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"
							/></svg
						>
						Private
					{:else}
						<svg
							class="mr-1 w-3 h-3"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><path
								fill-rule="evenodd"
								d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
								clip-rule="evenodd"
							/></svg
						>
						Public
					{/if}
				</span>
			</div>
		</a>
	</li>
{/each}
