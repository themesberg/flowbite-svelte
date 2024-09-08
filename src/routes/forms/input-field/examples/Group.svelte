<script lang="ts">
  import { ButtonGroup, Input, InputAddon, Label, Button, Checkbox } from '$lib';
</script>

<div>
  <Label class="mb-2" for="input-addon-sm">Small additional text</Label>
  <ButtonGroup class="w-full" size="sm">
    <InputAddon>@</InputAddon>
    <Input id="input-addon-sm" type="email" placeholder="Your name" />
  </ButtonGroup>
</div>

<div>
  <Label class="mb-2" for="input-addon-md">Default additional text</Label>
  <ButtonGroup class="w-full" size="md">
    <Input id="input-addon-md" type="email" placeholder="Your name" />
    <InputAddon>.com</InputAddon>
  </ButtonGroup>
</div>

<div>
  <Label class="mb-2" for="input-addon-lg">Large additional text</Label>
  <ButtonGroup class="w-full" size="lg">
    <InputAddon>@</InputAddon>
    <Input id="input-addon-lg" type="email" placeholder="Your name" />
    <InputAddon>.com</InputAddon>
  </ButtonGroup>
</div>

<div class="pt-8">
  <Label for="input-addon" class="mb-2">Grouped with button</Label>
  <ButtonGroup class="w-full">
    <InputAddon>@</InputAddon>
    <Input id="input-addon" type="email" placeholder="Your name" />
    <Button color="primary">Search</Button>
  </ButtonGroup>
</div>

<div>
  <Label for="input-addon" class="mb-2">Crazy example</Label>
  <ButtonGroup class="w-full">
    <InputAddon><Checkbox /></InputAddon>
    <Button color="primary">Search</Button>
    <InputAddon>http://</InputAddon>
    <Input id="input-addon" type="email" placeholder="Your name" />
    <InputAddon><Checkbox /></InputAddon>
    <Button color="blue">Send</Button>
  </ButtonGroup>
</div>
