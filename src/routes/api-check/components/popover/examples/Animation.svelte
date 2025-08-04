<script>
  import { Popover, Button } from "flowbite-svelte";
  import { blur, fade, slide } from "svelte/transition";
</script>

<Button>Fade popover</Button>
<Popover class="w-64 text-sm font-light" title="Popover title" transition={fade} transitionParams={{ duration: 1000 }}>And here's some amazing content. It's very engaging. Right?</Popover>
<Button>Blur popover</Button>
<Popover class="w-64 text-sm font-light" title="Popover title" transition={blur} transitionParams={{ duration: 1000 }}>And here's some amazing content. It's very engaging. Right?</Popover>
<Button>Slide popover</Button>
<Popover class="w-64 text-sm font-light" title="Popover title" transition={slide}>And here's some amazing content. It's very engaging. Right?</Popover>