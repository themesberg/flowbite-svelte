<script lang="ts">
  import { Button, Modal, P } from "flowbite-svelte";
  let open = $state(false);
</script>

<Button onclick={() => (open = true)}>Default modal</Button>

<Modal form bind:open outsideclose={false} class="backdrop:bg-red-900/50 dark:backdrop:bg-green-300/50">
  {#snippet header()}
    <h3>
      Terms of Service <small class="font-normal">(Revised)</small>
    </h3>
  {/snippet}
  <P>With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</P>
  <P>
    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to
    notify users as soon as possible of high-risk data breaches that could personally affect them.
  </P>
  {#snippet footer()}
    <Button type="submit" value="accept">I accept</Button>
    <Button type="submit" color="alternative">Decline</Button>
  {/snippet}
</Modal>
