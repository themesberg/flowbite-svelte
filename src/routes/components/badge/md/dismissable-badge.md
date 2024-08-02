// dismissabel: boolean
<script>
  import { Badge } from 'svelte-5-ui-lib';
  import { slide } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  const slideParams = {
    delay: 250, 
    duration: 500, 
    easing: quintOut, 
    axis: 'y' 
  }
</script>

<Badge dismissable transition={slide} params={slideParams} large>Slide transition</Badge>
<Badge dismissable large>Default</Badge>