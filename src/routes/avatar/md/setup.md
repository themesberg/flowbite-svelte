<script>
    import { Avatar, Dropdown, DropdownItem, DropdownDivider, uiHelpers } from 'svelte-5-ui-lib';
    let dropdown = uiHelpers();

    let isOpen = $state(false);
    let toggle = dropdown.toggle;
    let close = dropdown.close;

    $effect(() => {
        // this can be done adding nav.navStatus directly to DOM element
        // without using effect
        isOpen = dropdown.isOpen;
    });
    
</script>