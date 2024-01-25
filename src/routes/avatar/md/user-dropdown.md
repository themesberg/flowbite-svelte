<Avatar onclick={toggle} src="/images/profile-picture-3.webp" class="cursor-pointer" dot={{ color: 'green' }} />
<Dropdown {isOpen}>
    {#snippet header()}
        <div>Bonnie Green</div>
        <div class="truncate font-medium">name@flowbite.com</div>
    {/snippet}
    {#snippet children()}
        <DropdownItem href="/">Dashboard</DropdownItem>
        <DropdownItem href="/nav">Navbar</DropdownItem>
        <DropdownItem href="/footer">Footer</DropdownItem>
        <DropdownDivider />
        <DropdownItem href="/dropdown">Dropdown</DropdownItem>
    {/snippet}
</Dropdown>