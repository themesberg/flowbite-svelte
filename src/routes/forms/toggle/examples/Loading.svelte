<script lang="ts">
  import { Toggle } from "$lib";
  let isLoading = $state(true);
	setTimeout(() => {
      isLoading = false;
  }, 3000);
</script>

<Toggle class="mt-3" disabled={isLoading}>
  loading: {isLoading}
</Toggle>