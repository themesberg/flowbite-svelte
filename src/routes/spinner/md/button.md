<script>
    import { Spinner, Button } from '$lib'
</script>

<div class="flex flex-wrap items-center gap-2">
    <Button>
      <Spinner svgclass="me-3" size="4" color="white" />
      Loading ...
    </Button>
    <Button outline color="dark">
      <Spinner svgclass="me-3" size="4" />
      Loading ...
    </Button>
</div>