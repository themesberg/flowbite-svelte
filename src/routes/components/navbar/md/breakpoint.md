<Navbar toggleNav={toggleNavLg} closeNav={closeNavLg} navStatus={navStatusLg} breakPoint="lg">
  {#snippet brand()}
    <NavBrand siteName="Svelte 5" closeNav={closeNavLg}>
      <img width="30" src="/images/svelte-icon.png" alt="svelte icon" />
    </NavBrand>
  {/snippet}

  <NavUl>
    <NavLi href="/" closeNav={closeNavLg}>Home</NavLi>
    <NavLi href="/components/navbar" closeNav={closeNavLg}>Navbar</NavLi>
    <NavLi href="/components/footer" closeNav={closeNavLg}>Footer</NavLi>
  </NavUl>
</Navbar>