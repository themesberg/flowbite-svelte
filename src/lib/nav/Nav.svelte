<script>
    import {Navbar, NavLi, navHelper} from '$lib'
    
    
    let nav = navHelper()
    // let navStatus = $derived(navHelper().navStatus)
    let navStatus = $state()
    let toggleNav = nav.toggleNav
    let closeNav = nav.closeNav

    $effect(()=>{
        // this can be done adding nav.navStatus directly to DOM element
        // without using effect
        navStatus = nav.navStatus 
    })
</script>

<Navbar {toggleNav} {closeNav} navStatus={navStatus} >

    <NavLi href="/" closeNav={closeNav}>Home</NavLi>
    <NavLi href="/about" closeNav={closeNav}>About</NavLi>
    <NavLi href="/contact" closeNav={closeNav}>Contact</NavLi>
</Navbar>


