<script>
  import { Navbar } from "$lib/index";
  let logoSrc = "/images/mkdir-logo.png";
  let sitename = "Svelte Flow";
</script>

<Navbar {logoSrc} {sitename} />
<slot />
