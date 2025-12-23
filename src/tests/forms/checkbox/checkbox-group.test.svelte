<script lang="ts">
  import { Checkbox } from "$lib";

  let group = $state<string[]>([]);
</script>

<Checkbox bind:group value="option1">Option 1</Checkbox>
<Checkbox bind:group value="option2">Option 2</Checkbox>
<Checkbox bind:group value="option3">Option 3</Checkbox>
