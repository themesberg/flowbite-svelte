<script lang="ts">
  import { Label, Input, Button, InputAddon, ButtonGroup, Checkbox } from "flowbite-svelte";
</script>

<div>
  <Label class="mb-2" for="input-addon-sm">Small additional text</Label>
  <ButtonGroup class="w-full">
    <InputAddon>@</InputAddon>
    <Input id="input-addon-sm" type="email" placeholder="john.doe@mail.com" />
  </ButtonGroup>
</div>

<div>
  <Label class="mb-2" for="input-addon-md">Default additional text</Label>
  <ButtonGroup class="w-full">
    <Input id="input-addon-md" type="email" placeholder="john.doe@mail.com" />
    <InputAddon>.com</InputAddon>
  </ButtonGroup>
</div>

<div>
  <Label class="mb-2" for="input-addon-lg">Large additional text</Label>
  <ButtonGroup class="w-full">
    <InputAddon>@</InputAddon>
    <Input id="input-addon-lg" type="email" placeholder="john.doe@mail.com" />
    <InputAddon>.com</InputAddon>
  </ButtonGroup>
</div>

<div class="pt-8">
  <Label for="input-addon-button" class="mb-2">Grouped with button</Label>
  <ButtonGroup class="w-full">
    <InputAddon>@</InputAddon>
    <Input id="input-addon-button" type="email" placeholder="john.doe@mail.com" />
    <Button color="primary">Search</Button>
  </ButtonGroup>
</div>

<div>
  <Label for="input-addon-crazy" class="mb-2">Crazy example</Label>
  <ButtonGroup class="w-full">
    <InputAddon><Checkbox /></InputAddon>
    <Button color="primary">Search</Button>
    <InputAddon>http://</InputAddon>
    <Input id="input-addon-crazy" type="email" placeholder="john.doe@mail.com" />
    <InputAddon>@</InputAddon>
    <InputAddon><Checkbox /></InputAddon>
    <Button color="blue">Send</Button>
    <InputAddon>kg</InputAddon>
  </ButtonGroup>
</div>
