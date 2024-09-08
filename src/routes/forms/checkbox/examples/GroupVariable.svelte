<script lang="ts">
  import { Checkbox, Button, type CheckboxItem } from '$lib';
  let choices: CheckboxItem[] = [
    { value: '1', checkboxLabel: 'One' },
    { value: '2', checkboxLabel: 'Two' },
    { value: '3', checkboxLabel: 'Three' }
  ];
  let group = $state(['2', '3']);
  const clearGroup = () => {
    group = [];
  };
</script>

<div class="flex gap-2">
  <Checkbox name="flavours" {choices} bind:group />
</div>
<div class="my-2 w-44 rounded-lg border border-gray-200 p-2 dark:border-gray-700 dark:text-gray-400">
  Group: {group}
</div>
<Button onclick={clearGroup}>Clear</Button>
