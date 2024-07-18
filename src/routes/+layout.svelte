<script lang="ts">
  import { RunesMetaTags, deepMerge } from 'runes-meta-tags';
  import { Runatics } from 'runatics';
  import { page } from '$app/stores';
  import '../app.pcss';

  import Nav from './utils/Nav.svelte';
  import Footer from './utils/Footer.svelte';
  import Sidemenu from './utils/Sidemenu.svelte';

  let { children, data } = $props();

  const analyticsId = data.ANALYTICS_ID_RUNES_LIB;
  // meta tags
  let metaTags = $state(
    $page.data.pageMetaTags
      ? deepMerge($page.data.layoutMetaTags, $page.data.pageMetaTags)
      : data.layoutMetaTags
  );

  $effect(() => {
    metaTags = $page.data.pageMetaTags
      ? deepMerge($page.data.layoutMetaTags, $page.data.pageMetaTags)
      : data.layoutMetaTags;
  });
</script>

<Runatics {analyticsId} />
<RunesMetaTags {...metaTags} />

<Nav />
<div class="lg:flex">
  <Sidemenu />
  <main
    class="mx-auto min-w-0 max-w-5xl flex-auto px-8 pb-20 lg:static lg:max-h-full lg:overflow-visible"
  >
    <div id="mainContent">
      {@render children()}
    </div>
  </main>
</div>
<Footer />
