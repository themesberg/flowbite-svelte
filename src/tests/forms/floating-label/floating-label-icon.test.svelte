<script lang="ts">
  import { FloatingLabelInput } from "$lib";
</script>

<FloatingLabelInput withIcon={true} id="test-with-icon" name="test-with-icon" type="text">
  <svg data-testid="icon-svg" class="me-1.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" />
  </svg>
  Email
</FloatingLabelInput>
