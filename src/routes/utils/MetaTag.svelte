<script>
    import { page } from '$app/stores'
    let pathname = $state($page.url.pathname)
    let component = $derived(pathname.split('/')[2])
    $effect(()=>{
        pathname = $page.url.pathname
    })
</script>

<svelte:head>
<meta name="description" content="UI components for Svelte 5" />
<meta name="keywords" content="Svelte 5, TailwindCSS, UI, components" />
<meta name="robots" content="index,follow" />
<meta name="description" content="UI components for Svelte 5" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:creator" content="@shinokada" />
<meta name="twitter:title" content="Svelte 5 UI lib" />
<meta name="twitter:description" content="Svelte 5 UI lib" />
<meta name="twitter:image" content="https://open-graph-vercel.vercel.app/api/svelte-5-ui-lib?title={component}" />
<meta name="twitter:image:alt" content="Svelte 5 UI lib" />
<meta property="og:url" content="https://svelte-5-ui-lib.vercel.app/" />
<meta property="og:type" content="website" />
<meta property="og:title" content="Svelte 5 UI lib" />
<meta property="og:description" content="Svelte 5 UI lib" />
<meta property="og:image" content="https://open-graph-vercel.vercel.app/api/svelte-5-ui-lib{component}" />
<meta property="og:image:alt" content="Svelte 5 UI lib" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:site_name" content="Svelte 5 UI lib" />
</svelte:head>