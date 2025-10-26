<script lang="ts">
  import { Input, P } from "flowbite-svelte";
  let value = $state("Custom Event Handlers");
</script>

<P class="my-4">{value}</P>
<Input
  bind:value
  oninput={(e) => console.log("Custom input:", e)}
  onfocus={() => console.log("Input focused")}
  onblur={() => console.log("Input blurred")}
  onkeydown={(e) => {
    if (e.key === "Tab") {
      console.log("Tab pressed");
    }
  }}
/>
