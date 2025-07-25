<script lang="ts">
	import { Badge } from 'flowbite-svelte';
  import { ClockSolid } from "flowbite-svelte-icons";
</script>

<Badge color="gray" border>
  <ClockSolid class="me-1.5 h-2.5 w-2.5" />
  3 days ago
</Badge>
<Badge border>
  <ClockSolid class="text-primary-800 dark:text-primary-400 me-1.5 h-2.5 w-2.5" />
  2 minutes ago
</Badge>