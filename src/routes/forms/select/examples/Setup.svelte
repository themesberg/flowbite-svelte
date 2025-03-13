<script lang="ts">
	import { Select } from 'svelte-5-ui-lib';
	interface Country {
		value: string;
		name: string;
		href?: string;
	}
	interface State {
		value: string;
		name: string;
	}
	let customSelected: State | undefined = $state();
	let countries: Country[] = [
		{ value: 'us', name: 'United States', href: '/' },
		{ value: 'ca', name: 'Canada', href: '/' },
		{ value: 'fr', name: 'France', href: '/' }
	];
</script>
