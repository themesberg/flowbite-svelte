<script lang="ts">
  import { RadioButton, ButtonGroup } from '$lib';
  import { ListMusicSolid, OrderedListOutline, ListOutline } from 'flowbite-svelte-icons';
  let radioGroup = $state('notes');
</script>

<div class="p-2">
  <RadioButton value="notes" bind:group={radioGroup}><ListMusicSolid /></RadioButton>
  <RadioButton value="numbers" bind:group={radioGroup}><OrderedListOutline /></RadioButton>
  <RadioButton value="bullets" bind:group={radioGroup}><ListOutline /></RadioButton>
</div>

<ButtonGroup class="p-2">
  <RadioButton value="notes" bind:group={radioGroup}><ListMusicSolid /></RadioButton>
  <RadioButton value="numbers" bind:group={radioGroup}><OrderedListOutline /></RadioButton>
  <RadioButton value="bullets" bind:group={radioGroup}><ListOutline /></RadioButton>
</ButtonGroup>

<p>List style: {radioGroup}</p>
