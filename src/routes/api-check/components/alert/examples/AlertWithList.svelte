<script>
  import { Alert, Li, List } from "flowbite-svelte";
  import { InfoCircleSolid } from "flowbite-svelte-icons";
</script>

<Alert class="items-start!">
  {#snippet icon()}<span>
      <InfoCircleSolid class="h-5 w-5" />
      <span class="sr-only">Info</span>
    </span>
  {/snippet}
  <p class="font-medium">Ensure that these requirements are met:</p>
  <ul class="ms-4 mt-1.5 list-inside list-disc">
    <li>At least 10 characters (and up to 100 characters)</li>
    <li>At least one lowercase character</li>
    <li>Inclusion of at least one special character, e.g., ! @ # ?</li>
  </ul>
</Alert>
<Alert color="blue" class="items-start!">
  {#snippet icon()}<span>
      <InfoCircleSolid class="h-5 w-5" />
      <span class="sr-only">Info</span>
    </span>
  {/snippet}
  <p class="font-medium">Ensure that these requirements are met:</p>
  <List class="ms-4 mt-1.5">
    <Li>At least 10 characters (and up to 100 characters)</Li>
    <Li>At least one lowercase character</Li>
    <Li>Inclusion of at least one special character, e.g., ! @ # ?</Li>
  </List>
</Alert>