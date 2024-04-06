
<script>
  import '../app.pcss';
  let { children, data } = $props();
  import Nav from './utils/Nav.svelte';
  import Footer from './utils/Footer.svelte';
  import Sidemenu from './utils/Sidemenu.svelte';
  import MetaTag from './utils/MetaTag.svelte';
  const analytics = data.ANALYTICS_ID
  $effect(() => {
    const script = document.createElement('script');
    script.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', '${analytics}');
      `;
      document.head.appendChild(script);
    })
</script>
<svelte:head>
  <script async src="https://www.googletagmanager.com/gtag/js?id={analytics}"></script>
</svelte:head>
<MetaTag />
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
