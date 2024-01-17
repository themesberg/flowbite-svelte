<script>
    import {Drawer, Button, uiHelpers } from "$lib";
    const drawer = uiHelpers();
    let drawerStatus = $state(false)
    const openDrawer = drawer.toggle
    
    $effect(()=>{
        console.log(drawerStatus)
    })
</script>

<h1>Drawer</h1>

<Button onclick={openDrawer}/>
<Drawer />