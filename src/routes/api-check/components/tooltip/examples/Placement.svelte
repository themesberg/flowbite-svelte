<script lang="ts">
  import { Tooltip, Button } from "flowbite-svelte";
  import type { Placement } from "@floating-ui/utils";
  let placement: Placement = "left";
</script>

<Button>Tooltip left</Button>
<Tooltip placement="left">Left</Tooltip>
<Button>Tooltip top</Button>
<Tooltip placement="top">Top</Tooltip>
<Button>Tooltip bottom</Button>
<Tooltip placement="bottom">Bottom</Tooltip>
<Button>Tooltip right</Button>
<Tooltip placement="right">Right</Tooltip>