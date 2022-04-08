<script lang="ts">
	export let link: string = '';
	export let rel: string = '';
	export let img: string = '/images/image-4.jpeg';
	export let alt: string = '';
	export let header: string = 'Lorem ipsum dolor sit ametit.';
	export let linkClass: string = 'flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700';
	export let imgClass: string = 'object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg';
	export let textClass: string = 'flex flex-col justify-between p-4 leading-normal';
	export let h3Class: string = 'mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white';
	export let pClass: string = 'mb-3 font-normal text-gray-700 dark:text-gray-400';
</script>

<a href={link} {rel} class={linkClass}>
	<img class={imgClass} src={img} {alt} />
	<div class={textClass}>
		<h3 class={h3Class}>
			{header}
		</h3>
		<p class={pClass}>
			<slot />
		</p>
	</div>
</a>
