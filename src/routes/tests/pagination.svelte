<script lang="ts">
	import { Pagination, Previous, Next } from '$lib/index';
	let pages = [
		{
			pageNum: 1,
			href: '/'
		},
		{
			pageNum: 2,
			href: '/'
		},
		{
			pageNum: 3,
			href: '/'
		},
		{
			pageNum: 4,
			href: '/'
		},
		{
			pageNum: 5,
			href: '/'
		}
	];
	const previous = () => {
		alert('Make a call to your server to fetch data.');
	};
	const next = () => {
		alert('Make a call to your server to fetch data.');
	};
</script>

<div class="max-w-3xl mx-auto mt-16">
	<div class="container flex flex-wrap mx-auto">
		<div class="container w-full flex justify-center rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
			<Pagination {pages} on:previous={previous} on:next={next} />
		</div>
		<div class="container w-full flex justify-center rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
			<Pagination {pages} on:previous={previous} on:next={next} icon />
		</div>

		<div class="container w-full flex justify-center rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
			<Previous on:previous={previous} />
			<Next on:next={next} />
		</div>

		<div class="container w-full flex justify-center rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
			<Previous on:previous={previous} icon />
			<Next on:next={next} icon />
		</div>
	</div>
</div>
