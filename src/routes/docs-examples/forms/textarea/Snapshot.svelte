<script lang="ts">
  import { Tabs, TabItem, Label, Button, Input, Textarea } from "flowbite-svelte";
  import type { Snapshot } from "../../../$types";
  let name = $state("");
  let email = $state("");
  let comment = $state("");
  export const snapshot: Snapshot<{ name: string; email: string; comment: string }> = {
    capture: () => ({ name, email, comment }),
    restore: (value) => {
      name = value.name;
      email = value.email;
      comment = value.comment;
    }
  };
  const handleSubmit = (e: Event): void => {
    e.preventDefault();

    alert(`Submitted:\nName: ${name}\nEmail: ${email}\nComment: ${comment}`);
  };
</script>

<Tabs role="tablist">
  <TabItem open title="Profile">
    <form method="POST">
      <Label for="name" class="my-4">Name</Label>
      <Input id="name" bind:value={name} type="text" />
      <Label for="email" class="my-4">Email</Label>
      <Input id="email" bind:value={email} type="email" />
      <Label for="comment" class="my-4">Comment</Label>
      <Textarea id="comment" class="w-full" bind:value={comment} />
      <Button onclick={handleSubmit} class="mt-4">Submit</Button>
    </form>
  </TabItem>
  <TabItem title="Settings">
    <p class="text-sm text-gray-500 dark:text-gray-400">
      <b>Settings:</b>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
</Tabs>
