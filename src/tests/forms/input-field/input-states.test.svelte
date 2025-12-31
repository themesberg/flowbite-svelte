<script lang="ts">
  import { Input } from "$lib";
</script>

<div>
  <Input color="default" placeholder="Default" data-testid="default-input" />
  <Input color="tinted" placeholder="Tinted" data-testid="tinted-input" />
  <Input disabled placeholder="Disabled" data-testid="disabled-input" />
  <Input readonly value="Readonly" data-testid="readonly-input" />
</div>
