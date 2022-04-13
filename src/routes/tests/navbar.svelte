<script>
  import { Navbar } from '$lib/index';
  let website = {
    siteName: 'Bon Appetit',
    logo: '/images/flowbite-svelte-logo-30.png',
    alt: 'Bon Appetit'
  };
  let menus = [
    {
      name: 'Home',
      href: '/'
    },
    {
      name: 'Tests/navbar',
      href: '/tests/navbar'
    },
    {
      name: 'About',
      href: '/about'
    },
    {
      name: 'Contact',
      href: '/contact'
    }
  ];
</script>

<div class="pt-32">
  <Navbar {...website} {menus} />
</div>
