<script lang="ts">
  import { Avatar, Dropdown, DropdownHeader, DropdownUl, DropdownLi, DropdownDivider, uiHelpers} from "$lib";
  let dropdown = uiHelpers();
  let dropdownStatus = $state(false);
  let closeDropdown = dropdown.close;

  $effect(() => {
    // this can be done adding nav.navStatus directly to DOM element
    // without using effect
    dropdownStatus = dropdown.isOpen;
  });
</script>

<div class="flex h-80 items-start justify-center">
  <Avatar onclick={dropdown.toggle} src="/images/profile-picture-3.webp" class="cursor-pointer" dot={{ color: 'green' }} />
  <div class="relative">
    <Dropdown {dropdownStatus} {closeDropdown} class="absolute -left-[100px] top-[40px]">
      <DropdownHeader>
        <div>Bonnie Green</div>
        <div class="truncate font-medium">name@flowbite.com</div>
      </DropdownHeader>
      <DropdownUl>
        <DropdownLi href="/">Dashboard</DropdownLi>
        <DropdownLi href="/nav">Navbar</DropdownLi>
        <DropdownLi href="/footer">Footer</DropdownLi>
        <DropdownDivider />
        <DropdownLi href="/dropdown">Dropdown</DropdownLi>
      </DropdownUl>
    </Dropdown>
  </div>
</div>