<div class="relative">
    <Navbar
        toggleNav={toggleNav2}
        closeNav={closeNav2}
        navStatus={navStatus2}
        breakPoint="md"
        navclass="absolute w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-700"
    >
        {#snippet brand()}
            <NavBrand siteName="Svelte 5" closeNav={closeNav2}>
                <img width="30" src="/images/svelte-icon.png" alt="svelte icon" />
            </NavBrand>
        {/snippet}

        <NavUl>
            <NavLi href="/" closeNav={closeNav2}>Home</NavLi>
            <NavLi href="/components/navbar" closeNav={closeNav2}>Navbar</NavLi>
            <NavLi href="/components/footer" closeNav={closeNav2}>Footer</NavLi>
        </NavUl>
    </Navbar>
    <div style="height:300px;" class="overflow-scroll px-8 py-24">
        <Skeleton divclass="mt-16 mb-8" />
        <ImagePlaceholder divclass="my-8" />
        <TextPlaceholder divclass="my-8" />
    </div>
</div>