<script lang="ts">
  import { Button } from '$lib';
  const btn1 = () => {
    alert('You clicked btn1.');
  };
</script>

<Button onclick={btn1}>Button 1</Button>
