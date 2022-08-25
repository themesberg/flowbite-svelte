<script>
	import Htwo from '../../utils/Htwo.svelte';
	import 'prism-themes/themes/prism-holi-theme.css';
	import { Responsive } from 'svelte-sidebar-menu';
</script>

<Responsive />
<div class="max-w-3xl 2xl:max-w-4xl mx-auto mt-8">
	<div class="container flex flex-wrap mx-auto">
		<slot />

		<Htwo label="Related components" />
		<div class="related-components">
			<p>
				<a href="/typography/headings" class="link">Headings</a>
			</p>
			<p>
				<a href="/typography/blockquote" class="link">Blockquote</a>
			</p>
		</div>

		<Htwo label="References" />
		<div class="references">
			<p>
				<a href="https://flowbite.com/docs/components/typography/" target="_blank" class="link"
					>Flowbite Typography</a
				>
			</p>
			<p>
				<a href="https://flowbite.com/docs/typography/headings/" target="_blank" class="link"
					>Flowbite Headings</a
				>
			</p>
			<p>
				<a href="https://flowbite.com/docs/typography/blockquote/" target="_blank" class="link"
					>Flowbite Blockquote</a
				>
			</p>
		</div>
	</div>
</div>

<style>
	.link {
		color: #f83c00;
	}
	.link:hover {
		color: #fc7146;
		text-decoration: underline;
	}
</style>
