<script lang="ts">
  import { Popover, Label, Input, Checkbox, Button } from "flowbite-svelte";
  import { CheckOutline, CloseOutline } from "flowbite-svelte-icons";
  const preventDefault = <E extends Event>(fn: (event: E) => void) => {
    return function (this: any, event: E) {
      event.preventDefault();
      fn.call(this, event);
    };
  };
  const handler = () => {
    alert("Submitted!");
  };
</script>

<form onsubmit={preventDefault(handler)} class="mb-8">
  <div class="mb-6">
    <Label for="email" class="mb-2">Your email</Label>
    <Input type="email" id="email" placeholder="name@flowbite.com" />
  </div>
  <div class="mb-6">
    <Label for="password" class="mb-2">Your password</Label>
    <Input type="password" id="password" />
  </div>
  <Checkbox classes={{ label: "mb-6" }}>Remember me</Checkbox>
  <Button type="submit">Submit</Button>
</form>
<Popover class="text-sm" triggeredBy="#password" placement="bottom">
  <h3 class="text-heading font-semibold">Must have at least 6 characters</h3>
  <div class="grid grid-cols-4 gap-2">
    <div class="bg-warning h-1"></div>
    <div class="bg-warning h-1"></div>
    <div class="bg-neutral-quaternary h-1"></div>
    <div class="bg-neutral-quaternary h-1"></div>
  </div>
  <p class="py-2">It’s better to have:</p>
  <ul>
    <li class="mb-1 flex items-center">
      <CheckOutline class="text-success me-2 h-4 w-4" />
      Upper &amp; lower case letters
    </li>
    <li class="mb-1 flex items-center">
      <CheckOutline class="text-success me-2 h-4 w-4" />
      A symbol (#$&amp;)
    </li>
    <li class="flex items-center">
      <CloseOutline class="text-body me-2 h-4 w-4" />A longer password (min. 12 chars.)
    </li>
  </ul>
</Popover>
