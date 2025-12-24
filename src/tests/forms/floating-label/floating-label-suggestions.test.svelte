<script lang="ts">
  import { FloatingLabelInput } from "$lib";

  let value = $state("");
  const suggestions = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
  let selectedItem = $state("");

  function handleSelect(item: string) {
    selectedItem = item;
  }
</script>

<div>
  <FloatingLabelInput bind:value data={suggestions} maxSuggestions={5} onSelect={handleSelect} id="test-suggestions" name="test-suggestions" type="text">Autocomplete</FloatingLabelInput>
  <div data-testid="selected-item">{selectedItem}</div>
</div>
