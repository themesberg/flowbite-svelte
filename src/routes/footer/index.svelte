<script>
	import { Card } from '$lib/index';
	let divClass = 'max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700';
</script>

<div class="flex flex-wrap mx-auto mt-8 justify-center">
	<h1 class="text-3xl dark:text-white w-full py-8 text-center">Footer Components</h1>
	<div class="p-4">
		<Card {divClass} img="/images/footer.webp" header="DEFAULT" link="/footer/default" btnLabel="Read more" />
	</div>
	<div class="p-4">
		<Card {divClass} img="/images/footer.webp" btnColor="green" header="LOGO FOOTER" link="/footer/logo" btnLabel="Read more" />
	</div>
	<div class="p-4">
		<Card {divClass} img="/images/footer.webp" btnColor="red" header="SOCIALMEDIA" link="/footer/socialmedia" btnLabel="Read more" />
	</div>
	<div class="p-4">
		<Card {divClass} img="/images/footer.webp" btnColor="blue" header="SITEMAP" link="/footer/sitemap" btnLabel="Read more" />
	</div>
</div>
