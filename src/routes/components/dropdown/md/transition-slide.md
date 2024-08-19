<script lang="ts">
  ...
  let transitionParams2 = {
    x: -100,
    duration: 400,
    easing: sineIn
  };
</script>

<Button onclick={dropdownTransition1.toggle}
  >Dropdown
  <ChevronDownOutline class="ms-2 h-5 w-5 text-white dark:text-white" />
</Button>
<div class="relative">
  <Dropdown
    dropdownStatus={dropdownTransition1Status}
    closeDropdown={closeDropdownTransition1}
    transitionParams={transitionParams2}
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