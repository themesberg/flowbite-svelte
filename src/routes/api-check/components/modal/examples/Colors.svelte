<script lang="ts">
  import { Button, Modal, type ButtonProps } from "flowbite-svelte";

  let openColor = $state(false);
  let color: ButtonProps["color"] = $state("primary");
  function onclickColor(buttonColor: ButtonProps["color"]) {
    color = buttonColor;
    openColor = true;
  }
</script>

<div class="block space-y-4 md:space-y-0 md:space-x-2 rtl:space-x-reverse">
  <Button color="primary" onclick={() => onclickColor("primary")}>Primary modal</Button>
  <Button color="red" onclick={() => onclickColor("red")}>Red modal</Button>
  <Button color="green" onclick={() => onclickColor("green")}>Green modal</Button>
  <Button color="blue" onclick={() => onclickColor("blue")}>Blue modal</Button>
  <Button color="yellow" onclick={() => onclickColor("yellow")}>Yellow modal</Button>
</div>

<Modal title="Terms of Service" form bind:open={openColor} {color}>
  <div class="text-base leading-relaxed">With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</div>
  {#snippet footer()}
    <Button type="submit" color={color as ButtonProps["color"]}>I accept</Button>
    <Button type="submit" color="alternative">Decline</Button>
  {/snippet}
</Modal>