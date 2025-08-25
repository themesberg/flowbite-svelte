<script lang="ts">
  import { RadioButton, ButtonGroup } from "flowbite-svelte";
  import { ListMusicSolid, OrderedListOutline, ListOutline } from "flowbite-svelte-icons";

  let radioGroup = $state("notes");
</script>

<div>
  <RadioButton value="notes" checkedClass="outline-4 outline-primary-500" bind:group={radioGroup}><ListMusicSolid class="h-7 w-7" /></RadioButton>
  <RadioButton value="numbers" checkedClass="outline-4 outline-primary-500" bind:group={radioGroup}><OrderedListOutline class="h-7 w-7" /></RadioButton>
  <RadioButton value="bullets" checkedClass="outline-4 outline-primary-500" bind:group={radioGroup}><ListOutline class="h-7 w-7" /></RadioButton>
</div>

<ButtonGroup>
  <RadioButton color="green" outline value="notes" checkedClass="outline-4 outline-green-500" bind:group={radioGroup}><ListMusicSolid class="h-7 w-7" /></RadioButton>
  <RadioButton color="green" outline value="numbers" checkedClass="outline-4 outline-green-500" bind:group={radioGroup}><OrderedListOutline class="h-7 w-7" /></RadioButton>
  <RadioButton color="green" outline value="bullets" checkedClass="outline-4 outline-green-500" bind:group={radioGroup}><ListOutline class="h-7 w-7" /></RadioButton>
</ButtonGroup>

<p>List style: {radioGroup}</p>
