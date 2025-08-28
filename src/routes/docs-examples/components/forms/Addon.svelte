<script lang="ts">
  import { Label, Input, InputAddon, ButtonGroup } from "flowbite-svelte";
  import { UserCircleSolid } from "flowbite-svelte-icons";
</script>

<div class="mb-6">
  <Label for="website-admin" class="mb-2 block">Username</Label>
  <ButtonGroup class="w-full">
    <InputAddon>
      <UserCircleSolid class="h-4 w-4 text-gray-500 dark:text-gray-400" />
    </InputAddon>
    <Input id="website-admin" placeholder="johndoe" />
  </ButtonGroup>
</div>
