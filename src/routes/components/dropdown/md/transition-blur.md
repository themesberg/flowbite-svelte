<script lang="ts">
  ...
  let transitionParams3 = {
    y: 0,
    duration: 600,
    easing: sineIn
  };
</script>

<Button onclick={dropdownTransition2.toggle}
  >Dropdown
  <ChevronDownOutline class="ms-2 h-5 w-5 text-white dark:text-white" />
</Button>
<div class="relative">
  <Dropdown
    dropdownStatus={dropdownTransition2Status}
    closeDropdown={closeDropdownTransition2}
    transitionParams={transitionParams3}
    transitionType="blur"
    class="absolute top-[40px] -left-[150px]"
  >
    {#snippet children()}
      <DropdownUl>
        <DropdownLi href="/">Dashboard</DropdownLi>
        <DropdownLi href="/components/drawer">Drawer</DropdownLi>
        <DropdownLi href="/components/footer">Footer</DropdownLi>
        <DropdownLi href="/components">Alert</DropdownLi>
      </DropdownUl>
    {/snippet}
  </Dropdown>
</div>