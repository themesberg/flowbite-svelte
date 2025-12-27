<script lang="ts">
  import SidebarBrand from "$lib/sidebar/SidebarBrand.svelte";

  const site = {
    name: "Flowbite",
    href: "/",
    img: "/images/logo.svg"
  };

  function preventDefault(e: Event) {
    e.preventDefault();
  }
</script>

<SidebarBrand {site} onclick={preventDefault} />
