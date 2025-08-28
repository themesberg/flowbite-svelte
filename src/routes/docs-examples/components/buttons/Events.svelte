<script lang="ts">
  import { Button } from "flowbite-svelte";
  const btn1 = () => {
    alert("You clicked btn1.");
  };
  const btn2 = () => {
    alert("You touched btn2.");
  };
</script>

<Button onclick={btn1}>Button 1</Button>
<Button ontouchstart={btn2}>Button 2</Button>
