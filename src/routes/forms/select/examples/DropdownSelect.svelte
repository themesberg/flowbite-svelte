<script lang="ts">
  import { sineIn } from "svelte/easing";
  import { Button, ButtonGroup, Dropdown, DropdownLi, DropdownUl, Select, uiHelpers } from "$lib";
  import { ChevronDownOutline } from "flowbite-svelte-icons";
  import Usa from "../../../utils/icons/Usa.svelte";
  import Germany from "../../../utils/icons/Germany.svelte";
  import Italy from "../../../utils/icons/Italy.svelte";
  import China from "../../../utils/icons/China.svelte";
  interface State {
    value: string;
    name: string;
  }
  let dropdown = uiHelpers();
  let dropdownStatus = $state(false);
  let closeDropdown = dropdown.close;
  $effect(() => {
    // this can be done adding nav.navStatus directly to DOM element
    // without using effect
    dropdownStatus = dropdown.isOpen;
  });
  let transitionParams = {
    y: 0,
    duration: 100,
    easing: sineIn
  };
  let states: State[] = [
    { value: "CA", name: "California" },
    { value: "TX", name: "Texas" },
    { value: "WH", name: "Washinghton" },
    { value: "FL", name: "Florida" },
    { value: "VG", name: "Virginia" },
    { value: "GE", name: "Georgia" },
    { value: "MI", name: "Michigan" }
  ];
</script>

<div class="h-48">
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
    <Select items={states} placeholder="Choose the state" class="rounded-s-none!" />
  </ButtonGroup>
</div>
