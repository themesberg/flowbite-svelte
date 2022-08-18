<script>
	import Htwo from '../../utils/Htwo.svelte';
	import 'prism-themes/themes/prism-holi-theme.css';
	import { Responsive } from 'svelte-sidebar-menu';
</script>

<Responsive />
<div class="max-w-3xl mx-auto mt-8">
	<div class="container flex flex-wrap mx-auto">
		<slot />

		<Htwo label="References" />
		<div class="references">
			<p class="w-full dark:text-white text-base">
				<a href="https://github.com/shinokada/svelte-heros" target="_blank" class="link"
					>Svelte-heros</a
				>
			</p>

			<p class="w-full dark:text-white text-base">
				<a href="https://svelte-svg-icons.vercel.app/" target="_blank" class="link"
					>SVG Icon Sets for Svelte</a
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
