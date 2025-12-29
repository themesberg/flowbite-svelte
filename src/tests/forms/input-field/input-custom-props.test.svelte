<script lang="ts">
  import { Input } from "$lib";
</script>

<div>
  <Input 
    class="custom-input-class"
    data-testid="custom-input"
    id="custom-id"
    name="custom-name"
    placeholder="Custom input"
    required
    maxlength={50}
    minlength={5}
  />
</div>
