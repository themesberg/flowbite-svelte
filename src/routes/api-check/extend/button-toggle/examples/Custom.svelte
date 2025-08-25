<script lang="ts">
  import { ButtonToggleGroup, ButtonToggle } from "flowbite-svelte";
  import { CheckCircleOutline, BadgeCheckOutline, FileCheckOutline } from "flowbite-svelte-icons";

  let singleValue = $state<string | null>(null);

  function handleSingleSelect(value: string | null) {
    singleValue = value;
    console.log("Single selection:", value);
  }
</script>

<ButtonToggleGroup onSelect={handleSingleSelect} color="none">
  <ButtonToggle value="one" selected={singleValue === "one"}>
    {#snippet iconSlot()}
      <CheckCircleOutline class="-mr-3 text-green-400" />
    {/snippet}
    One
  </ButtonToggle>
  <ButtonToggle value="two" selected={singleValue === "two"}>
    {#snippet iconSlot()}
      <BadgeCheckOutline class="-mr-3 text-red-400" />
    {/snippet}
    Two
  </ButtonToggle>
  <ButtonToggle value="three" selected={singleValue === "three"}>
    {#snippet iconSlot()}
      <FileCheckOutline class="-mr-3 text-purple-400" />
    {/snippet}
    Three
  </ButtonToggle>
</ButtonToggleGroup>
<p class="mt-2 dark:text-white">Selected: {singleValue || "None"}</p>