<script lang="ts">
  import { Button, Modal, type ButtonProps } from "flowbite-svelte";

  let openColor = $state(false);
  let color: ButtonProps["color"] = $state("brand");
  function onclickColor(buttonColor: ButtonProps["color"]) {
    color = buttonColor;
    openColor = true;
  }
</script>

<div class="block space-y-4 md:space-y-0 md:space-x-2 rtl:space-x-reverse">
  <Button onclick={() => onclickColor("brand")}>Brand modal</Button>
  <Button color="danger" onclick={() => onclickColor("danger")}>Danger modal</Button>
  <Button color="success" onclick={() => onclickColor("success")}>Success modal</Button>
  <Button color="warning" onclick={() => onclickColor("warning")}>Warning modal</Button>
  <Button color="danger" onclick={() => onclickColor("danger")}>Danger modal</Button>
</div>

<Modal title="Terms of Service" form bind:open={openColor} {color}>
  <div class="text-base leading-relaxed">
    With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
  </div>
  {#snippet footer()}
    <Button type="submit" color={color as ButtonProps["color"]}>I accept</Button>
    <Button type="submit" color="alternative">Decline</Button>
  {/snippet}
</Modal>
