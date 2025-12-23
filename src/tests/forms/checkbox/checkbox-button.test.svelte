<script lang="ts">
  import { CheckboxButton } from "$lib";

  let group = $state<string[]>([]);
</script>

<CheckboxButton bind:group value="option1">Button Option 1</CheckboxButton>
<CheckboxButton bind:group value="option2">Button Option 2</CheckboxButton>
