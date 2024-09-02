<script lang="ts">
  import { Select, Dropdown, DropdownUl, DropdownLi, uiHelpers, Button } from 'svelte-5-ui-lib';
  
  let states: State[] = [
    { value: 'CA', name: 'California' },
    { value: 'TX', name: 'Texas' },
    { value: 'WH', name: 'Washinghton' },
    { value: 'FL', name: 'Florida' },
    { value: 'VG', name: 'Virginia' },
    { value: 'GE', name: 'Georgia' },
    { value: 'MI', name: 'Michigan' }
  ];

  let transitionParams = {
    y: 0,
    duration: 100,
    easing: sineIn
  };

  let dropdown = uiHelpers();
  let dropdownStatus = $state(false);
  let closeDropdown = dropdown.close;
  $effect(() => {
    // this can be done adding nav.navStatus directly to DOM element
    // without using effect
    dropdownStatus = dropdown.isOpen;
  });
</script>

<ButtonGroup class="w-full">
  <Button onclick={dropdown.toggle}>
    <Usa />
    USA
    <ChevronDownOutline class="ms-2 h-6 w-6" />
  </Button>
  <div class="relative">
    <Dropdown {dropdownStatus} {closeDropdown} params={transitionParams} class="absolute -left-[120px] top-[40px]">
      <DropdownUl>
        <DropdownLi aClass="flex items-center" href="/">
          <Usa />
          United States
        </DropdownLi>
        <DropdownLi aClass="flex items-center" href="/">
          <Germany />
          Germany
        </DropdownLi>
        <DropdownLi aClass="flex items-center" href="/">
          <Italy />
          Italy
        </DropdownLi>
        <DropdownLi aClass="flex items-center" href="/">
          <China />
          China
        </DropdownLi>
      </DropdownUl>
    </Dropdown>
  </div>
  <Select items={states} placeholder="Choose the state" class="!rounded-s-none" />
</ButtonGroup>