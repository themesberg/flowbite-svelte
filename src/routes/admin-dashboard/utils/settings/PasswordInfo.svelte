<script>
  import { Button, Input, Label } from 'flowbite-svelte';
  import { CardWidget } from 'flowbite-svelte-admin-dashboard';
</script>

<CardWidget title="Password Information" class="max-w-none p-4 sm:p-6">
  <div class="grid grid-cols-6 gap-6">
    <Label class="col-span-6 space-y-2 sm:col-span-3">
      <span>Current password</span>
      <Input placeholder="••••••••" class="border font-normal outline-none"></Input>
    </Label>
    <Label class="col-span-6 space-y-2 sm:col-span-3">
      <span>New password</span>
      <Input placeholder="••••••••" class="border font-normal outline-none"></Input>
    </Label>
    <Label class="col-span-6 space-y-2 sm:col-span-3">
      <span>Confirm password</span>
      <Input placeholder="••••••••" class="border font-normal outline-none"></Input>
    </Label>
    <Button class="sm:col-full col-span-6 w-fit">Save all</Button>
  </div>
</CardWidget>
