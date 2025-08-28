<script lang="ts">
  import { ButtonGroup, Button } from "flowbite-svelte";
  import { UserCircleSolid, AdjustmentsVerticalOutline, DownloadSolid } from "flowbite-svelte-icons";
</script>

<ButtonGroup>
  <Button outline color="dark">
    <UserCircleSolid class="me-2 h-4 w-4" />
    Profile
  </Button>
  <Button outline color="dark">
    <AdjustmentsVerticalOutline class="me-2 h-4 w-4" />
    Settings
  </Button>
  <Button outline color="dark">
    <DownloadSolid class="me-2 h-4 w-4" />
    Download
  </Button>
</ButtonGroup>
