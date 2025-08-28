<script lang="ts">
  import { Button, Modal, Input, P } from "flowbite-svelte";
  let open = $state(false);
</script>

<Button onclick={() => (open = true)}>No form modal</Button>
<Modal bind:open title="Custom form">
  <form method="dialog" name="my_form" novalidate>
    <fieldset class="flex gap-4 border p-4">
      <legend class="px-2">Custom form</legend>
      <Input required placeholder="This is separate form" />
      <Button type="submit" value="accept" class="shrink-0">Submit button</Button>
    </fieldset>
  </form>

  <P>With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</P>

  {#snippet footer()}
    <Button type="submit" value="accept">Submit button not in form</Button>
    <Button onclick={() => (open = false)} color="alternative">Button with 'onclick' handler</Button>
  {/snippet}
</Modal>
