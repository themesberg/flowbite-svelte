<script lang="ts">
  import { Button, Modal, Input, Label } from "flowbite-svelte";
  let defaultModal = $state(false);
  let elementRef = $state() as HTMLInputElement;
  const handleClick = () => {
    defaultModal = true;
    elementRef?.focus();
  };
</script>

<Button onclick={handleClick}>Default modal</Button>
<Modal dismissable={false} bind:open={defaultModal}>
  {#snippet header()}
    Form title
  {/snippet}
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam cumque quisquam dolores doloribus. Aperiam perferendis quod ea repudiandae odit libero tempore error?</p>
  <form>
    <div class="mb-6 grid gap-6 md:grid-cols-2">
      <div>
        <Label for="first_name" class="mb-2">First name</Label>
        <Input bind:elementRef type="text" id="first_name" placeholder="John" required />
      </div>
      <div>
        <Label for="last_name" class="mb-2">Last name</Label>
        <Input type="text" id="last_name" placeholder="Doe" required />
      </div>
      <div>
        <Label for="company" class="mb-2">Company</Label>
        <Input type="text" id="company" placeholder="Flowbite" required />
      </div>
      <div>
        <Label for="phone" class="mb-2">Phone number</Label>
        <Input type="tel" id="phone" placeholder="123-45-678" pattern={"[0-9]{3}-[0-9]{2}-[0-9]{3}"} required />
      </div>
    </div>
  </form>

  {#snippet footer()}
    <Button onclick={() => alert("Handle submit")}>Submit</Button>
    <Button color="alternative">Cancel</Button>
  {/snippet}
</Modal>