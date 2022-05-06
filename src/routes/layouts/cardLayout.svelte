<script>
	import Htwo from '../utils/Htwo.svelte';
	import 'prism-themes/themes/prism-holi-theme.css';
	import { Responsive } from 'svelte-sidebar-menu';
</script>

<Responsive />

<div class="max-w-3xl mx-auto mt-16">
	<div class="container flex flex-wrap mx-auto">
		<slot />
		<Htwo label="Related components" />

		<p>
			<a href="/cards/card">Default Card</a>
		</p>

		<p>
			<a href="/cards/cta">CTA Card</a>
		</p>

		<p>
			<a href="/cards/ecommerce">Ecommerce Card</a>
		</p>

		<p>
			<a href="/cards/horizontal">Horizontal Card</a>
		</p>

		<p>
			<a href="/cards/interactive">Interactive Card</a>
		</p>

		<p>
			<a href="/cards/list">List Card</a>
		</p>

		<p>
			<a href="/cards/signin">Signin Card</a>
		</p>

		<Htwo label="References" />

		<p>
			<a href="https://flowbite.com/docs/components/card/" target="_blank">Flowbite Card</a>
		</p>
	</div>
</div>
