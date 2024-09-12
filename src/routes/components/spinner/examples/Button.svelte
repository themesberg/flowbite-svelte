<script lang="ts">
  import { Button, Spinner } from '$lib';
</script>

<div class="space-y-2">
  <Button>
    <Spinner class="me-3" size="4" color="violet" />
    Loading ...
  </Button>
  <Button outline color="dark">
    <Spinner class="me-3" size="4" />
    Loading ...
  </Button>
</div>
