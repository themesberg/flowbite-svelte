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
<Badge dismissable large color="gray">Gray</Badge>
<Badge dismissable large color="red">Red</Badge>
<Badge dismissable large color="green">Green</Badge>
<Badge dismissable large color="yellow">Yellow</Badge>
<Badge dismissable large color="indigo">Indigo</Badge>
<Badge dismissable large color="purple">Purple</Badge>
<Badge dismissable large color="pink">Pink</Badge>