<script lang="ts">
  import DarkMode from "$lib/darkmode/DarkMode.svelte";
  import Navbar from "$lib/navbar/Navbar.svelte";
  import NavHamburger from "$lib/navbar/NavHamburger.svelte";
  import NavLi from "$lib/navbar/NavLi.svelte";
  import NavUl from "$lib/navbar/NavUl.svelte";
  import Toolbar from "$lib/toolbar/Toolbar.svelte";
  import ToolbarButton from "$lib/toolbar/ToolbarButton.svelte";
  import P from "$lib/typography/paragraph/P.svelte";

  function onclick(ev: MouseEvent) {
    ev;
  }
</script>

<Navbar>
  <NavHamburger />
  <NavUl>
    <NavLi>One</NavLi>
    <NavLi>Two</NavLi>
  </NavUl>
</Navbar>
<P class="hover:text-primary-500">Test</P>
<DarkMode />

<ToolbarButton {onclick}>Test</ToolbarButton>
