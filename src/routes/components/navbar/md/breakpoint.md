<Navbar toggleNav={toggleNavLg} closeNav={closeNavLg} navStatus={navStatusLg} breakPoint="lg">
  {#snippet brand()}
    <NavBrand siteName="Svelte 5">
      <img width="30" src="/images/svelte-icon.png" alt="svelte icon" />
    </NavBrand>
  {/snippet}

  <NavUl>
    <NavLi href="/">Home</NavLi>
    <NavLi href="/components/navbar">Navbar</NavLi>
    <NavLi href="/components/footer">Footer</NavLi>
  </NavUl>
</Navbar>