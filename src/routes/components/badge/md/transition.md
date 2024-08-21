<script lang="ts">
  ...
  import { fly } from 'svelte/transition';
</script>

<Badge color="blue" dismissable transition={fly} params={{duration: 1000, easing: linear, x: 150}}>
  <span class="font-medium">Fly transition</span>
</Badge>