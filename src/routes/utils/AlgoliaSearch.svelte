<script lang="ts">
    import { browser } from '$app/environment'
    import { onMount } from 'svelte';
    import docsearch from '@docsearch/js';

    let searchContainer: HTMLElement;

    onMount(() => {
        if (browser) {
            // Algolia docsearch
            docsearch({
                container: searchContainer,
                appId: 'JWUQIZ9PGE',
                indexName: 'flowbite-svelte',
                apiKey: 'db6396bd138ab613540d2a2bc07f958d',
                placeholder: 'Search documentation',
            });
        }
    });
    

</script>

<div bind:this={searchContainer} id="docsearch" class="ml-3 xl:pl-4"></div>