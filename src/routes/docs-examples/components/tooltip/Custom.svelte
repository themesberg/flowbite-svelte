<script lang="ts">
  import { Tooltip, Button } from "flowbite-svelte";
</script>

<Button>Green tooltip</Button>
<Tooltip color="green">Tooltip content</Tooltip>

<Button>Yellow tooltip</Button>
<Tooltip color="yellow">Tooltip content</Tooltip>

<Button>Custom type</Button>
<Tooltip placement="right" type="custom" class="border-none bg-purple-500 p-4 text-lg font-medium text-gray-100 dark:bg-purple-600" arrow={false}>Tooltip content</Tooltip>
