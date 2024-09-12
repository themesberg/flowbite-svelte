<script lang="ts">
  import { ButtonGroup, Button } from '$lib';
  const handleClick = () => {
    alert('Clicked');
  };
</script>

<ButtonGroup>
  <Button onclick={handleClick}>Click me</Button>
  <Button>Settings</Button>
  <Button>Messages</Button>
</ButtonGroup>
