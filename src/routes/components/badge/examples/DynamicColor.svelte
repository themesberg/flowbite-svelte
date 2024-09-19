<script lang="ts">
  import { Badge } from '$lib';

  setInterval(handleHover, 500);

  let color: Badge['color'] = $state('primary');
  function handleHover() {
    color = color === 'primary' ? 'dark' : 'primary';
  }
</script>

<Badge large {color}>Blinking badge</Badge>
