<script>
  import { A } from "flowbite-svelte";

  const myaction = () => {
    console.log("Action triggered");
  };
</script>

<A href="/" onclick={myaction}>Read more</A>