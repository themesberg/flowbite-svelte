<script>
	import { Button } from 'flowbite-svelte';
	import { DesktopPcOutline, MobilePhoneOutline } from 'flowbite-svelte-icons';
	import Card from '../widgets/Card.svelte';
</script>

<Card title="Sessions" class="max-w-none">
	<ul class="divide-y divide-gray-200 dark:divide-gray-700">
		<li class="py-4">
			<div class="flex items-center space-x-4">
				<DesktopPcOutline size="lg" class="text-gray-900 dark:text-white" />
				<div class="min-w-0 flex-1">
					<p class="truncate text-base font-semibold text-gray-900 dark:text-white">
						California 123.123.123.123
					</p>
					<p class="truncate text-sm font-normal text-gray-500 dark:text-gray-400">
						Chrome on macOS
					</p>
				</div>
				<Button href="#top" class="px-3 py-2 dark:text-gray-400 dark:hover:text-white" color="light"
					>Revoke</Button
				>
			</div>
		</li>
		<li class="py-4">
			<div class="flex items-center space-x-4">
				<MobilePhoneOutline size="lg" class="text-gray-900 dark:text-white" />
				<div class="min-w-0 flex-1">
					<p class="truncate text-base font-semibold text-gray-900 dark:text-white">
						Rome 24.456.355.98
					</p>
					<p class="truncate text-sm font-normal text-gray-500 dark:text-gray-400">
						Safari on iPhone
					</p>
				</div>
				<Button href="#top" class="px-3 py-2 dark:text-gray-400 dark:hover:text-white" color="light"
					>Revoke</Button
				>
			</div>
		</li>
	</ul>
	<Button class="w-fit">See more</Button>
</Card>
