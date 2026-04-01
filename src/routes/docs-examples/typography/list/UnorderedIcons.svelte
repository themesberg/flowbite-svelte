<script lang="ts">
  import { List, Li, Heading } from "flowbite-svelte";
  import { CheckCircleSolid, CloseCircleSolid } from "flowbite-svelte-icons";
</script>

<Heading tag="h2" class="mb-2 text-lg font-semibold">Password requirements</Heading>
<List tag="ul" class="space-y-1">
  <Li icon>
    <CheckCircleSolid class="text-fg-success me-2 h-5 w-5" />
    At least 10 characters (and up to 100 characters)
  </Li>
  <Li icon>
    <CheckCircleSolid class="text-fg-success me-2 h-5 w-5" />
    At least one lowercase character
  </Li>
  <Li icon>
    <CloseCircleSolid class="text-body me-2 h-5 w-5" />
    Inclusion of at least one special character, e.g., ! @ # ?
  </Li>
</List>
