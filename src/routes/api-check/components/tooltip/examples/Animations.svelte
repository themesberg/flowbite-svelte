<script lang="ts">
  import { Tooltip, Button } from "flowbite-svelte";
  import { slide, scale, blur } from "svelte/transition";
</script>

<Button>Blur</Button>
<Tooltip transition={blur} transitionParams={{ duration: 300 }}>Tooltip content</Tooltip>
<Button>Slide</Button>
<Tooltip transition={slide}>Tooltip content</Tooltip>
<Button>Scale</Button>
<Tooltip transition={scale}>Tooltip content</Tooltip>
