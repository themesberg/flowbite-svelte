<script lang="ts">
	import { browser } from '$app/environment';
	import type { ApexOptions } from 'apexcharts';
	import { Chart } from "flowbite-svelte";
	import { onMount } from "svelte";

    type ConfigFunc = (dark:boolean) => ApexOptions;
    
    export let configFunc:ConfigFunc;

	let dark = browser? document.documentElement.classList.contains('dark'): false;
    
	let options:ApexOptions; 
    $: options = configFunc(dark);

	function handler(ev: Event) {
        if ('detail' in ev) {
            dark = !!ev.detail;
		}
	}

	onMount(() => {        
		document.addEventListener('dark', handler);
		return () => document.removeEventListener('dark', handler);
	});

</script>

<Chart {options} class={$$props.class} />