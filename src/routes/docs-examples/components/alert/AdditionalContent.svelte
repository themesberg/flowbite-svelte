<script lang="ts">
  import { Alert, Button } from "flowbite-svelte";
  import { InfoCircleSolid, EyeSolid } from "flowbite-svelte-icons";
</script>

<Alert listContent color="brand" class="block">
  <div class="flex items-center justify-between">
    <div class="flex items-center">
      <InfoCircleSolid class="h-5 w-5" />
      <span class="text-lg font-medium">This is an info alert</span>
    </div>
  </div>
  <p class="mt-2 mb-4">More info about this info alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
  <Button size="xs"><EyeSolid class="me-2 h-4 w-4" />View more</Button>
</Alert>
<Alert listContent color="success" class="block">
  <div class="flex items-center gap-3">
    <InfoCircleSolid class="h-5 w-5" />
    <span class="text-lg font-medium">This is a success alert</span>
  </div>
  <p class="mt-2 mb-4 text-sm">
    More info about this success alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
  </p>
  <Button size="xs" color="success"><EyeSolid class="me-2 h-4 w-4" />View more</Button>
</Alert>
