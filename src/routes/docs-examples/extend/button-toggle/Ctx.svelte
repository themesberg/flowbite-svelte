<script lang="ts">
  import { ButtonToggleGroup, ButtonToggle } from "flowbite-svelte";

  let singleValue = $state<string | null>(null);

  function handleSingleSelect(value: string | null | string[]) {
    if (typeof value === "string" || value === null) {
      singleValue = value;
      console.log("Single selection:", value);
    }
  }
</script>

<ButtonToggleGroup onSelect={handleSingleSelect} color="none" ctxIconClass="text-white" ctxBtnClass="data-[selected=true]:bg-rose-400 data-[selected=false]:hover:bg-rose-300">
  <ButtonToggle class="data-[selected=false]:hover:bg-green-300 data-[selected=true]:bg-green-400" value="one" selected={singleValue === "one"}>One</ButtonToggle>
  <ButtonToggle value="two" selected={singleValue === "two"}>Two</ButtonToggle>
  <ButtonToggle value="three" selected={singleValue === "three"}>Three</ButtonToggle>
</ButtonToggleGroup>
<p class="mt-2 dark:text-white">Selected: {singleValue || "None"}</p>
