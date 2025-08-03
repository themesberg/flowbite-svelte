<script>
  import { Button, Modal, P } from "flowbite-svelte";
  let open = $state(false);
</script>

<Button onclick={() => (open = true)}>Default modal</Button>

<Modal form bind:open onsubmit={(ev) => alert(`SUBMIT: Form is about to be submitted.`)} oncancel={(ev) => alert("CANCEL: User canceled the dialog")} onclose={(ev) => alert(`CLOSE: Dialog closed with "${ev.target.returnValue || "no"}" action.`)} title="Terms of Service">
  <P>With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</P>
  <P>The European Union's General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</P>
  {#snippet footer()}
    <Button type="submit" value="accept">I accept</Button>
    <Button type="submit" value="decline" color="alternative">Decline</Button>
  {/snippet}
</Modal>