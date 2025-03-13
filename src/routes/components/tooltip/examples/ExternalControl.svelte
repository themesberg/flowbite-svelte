<script lang="ts">
	import { Tooltip, Button } from '$lib';
	import { onDestroy } from 'svelte';

	let tooltipVisible = $state(false);
	let counter = $state(0);
	let countdownInterval: ReturnType<typeof setInterval> | undefined;

	const startCounter = () => {
		counter = 0;
		countdownInterval = setInterval(() => {
			counter++;
		}, 1000);
	};

	const stopCounter = () => {
		if (countdownInterval) {
			clearInterval(countdownInterval);
			countdownInterval = undefined;
		}
		counter = 0;
	};

	const handleClick = async () => {
		// If tooltip is visible, hide it immediately and stop counter
		if (tooltipVisible) {
			tooltipVisible = false;
			stopCounter();
			return;
		}
		startCounter();
		// Start the initial 2-second countdown
		let initialCounter = 2;
		const initialInterval = setInterval(() => {
			initialCounter--;
			if (initialCounter === 0) {
				clearInterval(initialInterval);
			}
		}, 1000);

		// Wait 2 seconds then show tooltip and start counter
		await new Promise((resolve) => setTimeout(resolve, 2000));
		tooltipVisible = true;

		// Wait 4 seconds then hide tooltip and stop counter
		await new Promise((resolve) => setTimeout(resolve, 2000));
		tooltipVisible = false;
		stopCounter();
	};

	// Cleanup on component destruction
	onDestroy(() => {
		stopCounter();
	});
</script>

<div class="mt-20 flex justify-center">
	<Button id="myButton" onclick={handleClick}>
		<div class="flex flex-col gap-1">
			Click Me to show in 2 sec and hide in 4 sec
			<div>Time elapsed: {counter}s</div>
			<div class="text-sm text-white">Will hide in {Math.max(0, 4 - counter)}s</div>
		</div>
	</Button>

	<Tooltip visible={tooltipVisible} class="-m-14 p-4 text-center" color="purple"
		>Controlled tooltip</Tooltip
	>
</div>
