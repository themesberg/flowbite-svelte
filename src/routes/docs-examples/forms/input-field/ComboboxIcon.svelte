<script lang="ts">
  import { Input } from "flowbite-svelte";
  import { EnvelopeSolid } from "flowbite-svelte-icons";
  const fakeEmails = [
    "alex.jones@example.com",
    "maria.smith@example.com",
    "john.doe@example.com",
    "emma.wilson@example.com",
    "liam.brown@example.com",
    "olivia.johnson@example.com",
    "noah.miller@example.com",
    "ava.davis@example.com",
    "elijah.garcia@example.com",
    "sophia.martinez@example.com"
  ];
</script>

<Input data={fakeEmails} placeholder="name@flowbite.com" clearable type="email" size="md" class="ps-9">
  {#snippet left()}
    <EnvelopeSolid class="h-5 w-5" />
  {/snippet}
</Input>
