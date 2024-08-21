<script lang="ts">
  ...
  import { blur, fly, slide, scale } from 'svelte/transition';
  import { linear } from 'svelte/easing';
</script>

 <Toast transition={slide} params={{ duration: 1000, easing: linear, x: -150 }}>
  Slide transition
</Toast>

  <Toast transition={blur} color="purple" params={{ duration: 1000, easing: linear }}>
  Blur transition
</Toast>

<Toast transition={fly} params={{ duration: 1000, easing: linear, x: 150 }} color="green">
  Fly transition
</Toast>

<Toast transition={scale} params={{ duration: 1000, easing: linear }} color="green">
  Fly transition
</Toast>