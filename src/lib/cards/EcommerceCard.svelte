<script lang="ts">
	import type { ImgType, Colors } from '../types';
	export let img: ImgType;
	export let href: string = '/';
	export let btnColor: Colors = 'blue';
	export let rel: string = '';
	export let title: string = 'Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport';
	export let stars: number = 5;
	export let price: string = '$555';
	export let headerClass: string = 'text-xl font-semibold tracking-tight text-gray-900 dark:text-white';
	export let divClass: string = 'max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700';
	let spanClass: string = 'text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3 ';
	let linkClass: string = 'text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center ';
	
	if (btnColor === 'gray') {
		spanClass += 'bg-gray-100 text-gray-800 dark:bg-gray-200 dark:text-gray-800';
		linkClass += 'bg-gray-700 hover:bg-gray-800 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800';
	} else if (btnColor === 'red') {
		spanClass += 'bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-800';
		linkClass += 'bg-red-700 hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800';
	} else if (btnColor === 'yellow') {
		spanClass += 'bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-800';
		linkClass += 'bg-yellow-700 hover:bg-yellow-800 focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800';
	} else if (btnColor === 'green') {
		spanClass += 'bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-800';
		linkClass += 'bg-green-700 hover:bg-green-800 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800';
	} else if (btnColor === 'indigo') {
		spanClass += 'bg-indigo-100 text-indigo-800 dark:bg-indigo-200 dark:text-indigo-800';
		linkClass += 'bg-indigo-700 hover:bg-indigo-800 focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800';
	} else if (btnColor === 'purple') {
		spanClass += 'bg-purple-100 text-purple-800 dark:bg-purple-200 dark:text-purple-800';
		linkClass += 'bg-purple-700 hover:bg-purple-800 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800';
	} else if (btnColor === 'pink') {
		spanClass += 'bg-pink-100 text-pink-800 dark:bg-pink-200 dark:text-pink-800';
		linkClass += 'bg-pink-700 hover:bg-pink-800 focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800';
	} else {
		spanClass += 'bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-800';
		linkClass += 'bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800';
	}
</script>

<div class={divClass}>
	<a {href} {rel}>
		<img class="p-8 rounded-t-lg" src={img.src} alt={img.alt} />
	</a>
	<div class="px-5 pb-5">
		<a {href} {rel}>
			<h3 class={headerClass}>
				{title}
			</h3>
		</a>
		<div class="flex items-center mt-2.5 mb-5">
			{#each { length: stars } as _, i}
				<svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
			{/each}
			<span class={spanClass}>{stars}</span>
		</div>
		<div class="flex justify-between items-center">
			<span class="text-3xl font-bold text-gray-900 dark:text-white">{price}</span>
			<a {href} {rel} class={linkClass}>Add to cart</a>
		</div>
	</div>
</div>
