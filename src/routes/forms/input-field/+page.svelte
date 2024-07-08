<script lang="ts">
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';

  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  import { Input, Label, Helper, Button, Checkbox, A, CloseButton, InputAddon,  ButtonGroup,  Dropdown, DropdownItem } from '$lib';
  // import { Dropdown, DropdownItem } from '$lib'
  import { EyeOutline, EyeSlashOutline, EnvelopeSolid, ChevronDownOutline, SearchOutline } from 'flowbite-svelte-icons';
  let show = false;
  let show1 = false;
  let value = 5;
</script>

<H1>Input field</H1>
<H2>Input fields</H2>

<h2>Input fields</h2>

Use this example as a generic form element which includes multiple input fields types such as text, email, password, number, URL, and phone number and use the grid layout to add multiple columns and rows.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<form>
  <div class="grid gap-6 mb-6 md:grid-cols-2">
    <div>
      <Label forId="first_name" class="mb-2">First name</Label>
      <Input type="text" id="first_name" placeholder="John" required />
    </div>
    <div>
      <Label forId="last_name" class="mb-2">Last name</Label>
      <Input type="text" id="last_name" placeholder="Doe" required />
    </div>
    <div>
      <Label forId="company" class="mb-2">Company</Label>
      <Input type="text" id="company" placeholder="Flowbite" required />
    </div>
    <div>
      <Label forId="phone" class="mb-2">Phone number</Label>
      <Input type="tel" id="phone" placeholder="123-45-678" pattern={"[0-9]{3}-[0-9]{2}-[0-9]{3}"} required />
    </div>
    <div>
      <Label forId="website" class="mb-2">Website URL</Label>
      <Input type="url" id="website" placeholder="flowbite.com" required />
    </div>
    <div>
      <Label forId="visitors" class="mb-2">Unique visitors (per month)</Label>
      <Input type="number" id="visitors" placeholder="" required />
    </div>
  </div>
  <div class="mb-6">
    <Label forId="email" class="mb-2">Email address</Label>
    <Input type="email" id="email" placeholder="john.doe@company.com" required />
  </div>
  <div class="mb-6">
    <Label forId="password" class="mb-2">Password</Label>
    <Input type="password" id="password" placeholder="•••••••••" required />
  </div>
  <div class="mb-6">
    <Label forId="confirm_password" class="mb-2">Confirm password</Label>
    <Input type="password" id="confirm_password" placeholder="•••••••••" required />
  </div>
  <Checkbox class="mb-6 space-x-1 rtl:space-x-reverse" required>
    I agree with the <A href="/" class="text-primary-700 dark:text-primary-600 hover:underline">terms and conditions</A>.
  </Checkbox>
  <Button type="submit">Submit</Button>
</form>
</div>

<h2>Input sizes</h2>

Use the following examples to apply a small, default or large size for the input fields.

User the size prop to change the input size. Choose one from 'sm:text-md' | 'text-sm' | 'sm:text-xs'. The default size is text-sm.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 space-y-6'>
<Label class="space-y-2">
  <span>Small icon input</span>
  <Input type="email" placeholder="Small input" size="sm" />
</Label>

<Label class="space-y-2">
  <span>Default icon input</span>
  <Input type="email" placeholder="Default input" size="md" />
</Label>

<Label class="space-y-2">
  <span>Large icon input</span>
  <Input type="email" placeholder="Large input" size="lg" />
</Label>
</div>

<h2>Disabled state</h2>

Get started with this example if you want to apply the disabled state to an input field. Add the disabled to change the input to disabled.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Input class="mb-6" disabled value="Disabled input" />
<Input class="mb-6" disabled readonly value="Disabled readonly input" />
</div>

<h2>Validation</h2>

Use the following example to apply validation styles for success and error messages.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<div class="mb-6">
  <Label forId="success" color="green" class="block mb-2">Your name</Label>
  <Input id="success" color="green" placeholder="Success input" />
  <Helper class="mt-2" color="green">
    <span class="font-medium">Well done!</span>
    Some success message.
  </Helper>
</div>
<div class="mb-6">
  <Label forId="error" color="red" class="block mb-2">Your name</Label>
  <Input id="error" color="red" placeholder="Error input" />
  <Helper class="mt-2" color="red">
    <span class="font-medium">Oh, snapp!</span>
    Some error message.
  </Helper>
</div>
</div>

<h2>Input with icon</h2>

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Label class="space-y-2">
  <span>Small input - left icon</span>
  <Input type="email" placeholder="name@flowbite.com" size="sm">
    {#snippet left()}
    <EnvelopeSolid class="w-4 h-4" />
    {/snippet}
  </Input>
</Label>

<Label class="space-y-2">
  <span>Default input - right icon</span>
  <Input type="email" placeholder="name@flowbite.com" size="md">
    {#snippet right()}
    <EnvelopeSolid class="w-5 h-5" />
    {/snippet}
  </Input>
</Label>

<Label class="space-y-2">
  <span>Large input - both icons</span>
  <Input type="email" placeholder="name@flowbite.com" size="lg">
    {#snippet left()}
    <EnvelopeSolid class="w-6 h-6" />
    {/snippet}
    {#snippet right()}
    <CloseButton  />
    {/snippet}
  </Input>
</Label>
</div>

<h2>Input group</h2>

This example can be used to add a descriptive icon or additional text inside the input field.


<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 space-y-6'>
<div>
  <Label class="mb-2" forId="input-addon-sm">Small additional text</Label>
  <ButtonGroup class="w-full" size="sm">
    <InputAddon>@</InputAddon>
    <Input id="input-addon-sm" type="email" placeholder="elonmusk" />
  </ButtonGroup>
</div>

<div>
  <Label class="mb-2" forId="input-addon-md">Default additional text</Label>
  <ButtonGroup class="w-full" size="md">
    <Input id="input-addon-md" type="email" placeholder="elonmusk" />
    <InputAddon>.com</InputAddon>
  </ButtonGroup>
</div>

<div>
  <Label class="mb-2" forId="input-addon-lg">Large additional text</Label>
  <ButtonGroup class="w-full" size="lg">
    <InputAddon>@</InputAddon>
    <Input id="input-addon-lg" type="email" placeholder="elonmusk" />
    <InputAddon>.com</InputAddon>
  </ButtonGroup>
</div>

<div class="pt-8">
  <Label forId="input-addon" class="mb-2">Grouped with button</Label>
  <ButtonGroup class="w-full">
    <InputAddon>@</InputAddon>
    <Input id="input-addon" type="email" placeholder="elonmusk" />
    <Button color="primary">Search</Button>
  </ButtonGroup>
</div>

<div>
  <Label forId="input-addon" class="mb-2">Crazy example</Label>
  <ButtonGroup class="w-full">
    <InputAddon><Checkbox /></InputAddon>
    <Button color="primary">Search</Button>
    <InputAddon>http://</InputAddon>
    <Input id="input-addon" type="email" placeholder="elonmusk" />
    <InputAddon>@</InputAddon>
    <InputAddon><Checkbox /></InputAddon>
    <Button color="blue">Send</Button>
    <InputAddon>kg</InputAddon>
  </ButtonGroup>
</div>
</div>

<h2>Icon click handler</h2>

This example shows how to add `on:click` event handler to the icon in `Input`. By clicking an icon, it toggles icon and `type`:

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 space-y-6'>
<div>
  <Label forId="show-password" class="mb-2">Your password</Label>
  <Input id="show-password" type={show ? 'text' : 'password'} placeholder="Your password here" size="lg">
    {#snippet left()}
    <button onclick={() => (show = !show)} class="pointer-events-auto">
      {#if show}
        <EyeOutline class="w-6 h-6" />
      {:else}
        <EyeSlashOutline class="w-6 h-6" />
      {/if}
    </button>
    {/snippet}
  </Input>
</div>

<div>
  <Label forId="show-password1" class="mb-2">Your password</Label>
  <ButtonGroup class="w-full">
    <InputAddon>
      <button onclick={() => (show1 = !show1)}>
        {#if show1}
          <EyeOutline class="w-6 h-6" />
        {:else}
          <EyeSlashOutline class="w-6 h-6" />
        {/if}
      </button>
    </InputAddon>
    <Input id="show-password1" type={show1 ? 'text' : 'password'} placeholder="Your password here" />
  </ButtonGroup>
</div>
</div>

<h2>Helper text</h2>

Use the helper prop to add your helper text. You can use HTML in the helper text.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Label class="block space-y-2">
  <span>Your email</span>
  <Input id="email" type="email" required placeholder="name@flowbite.com" />
  <Helper class="text-sm">
    We’ll never share your details. Read our <a href="/" class="font-medium text-primary-600 hover:underline dark:text-primary-500"> Privacy Policy </a>
    .
  </Helper>
</Label>
</div>

<h2>Number input</h2>

By default the `Input` component binds the `value` as `string`. If you need a variable bound as `number` you need to use a specialised version of `Input` called `NumberInput`.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Label class="space-y-2 mb-4">
  <span>Your Email</span>
  N/A
</Label>

<p>Value: {value}</p>
<p>Type of value: {typeof value}</p>
</div>

<h2>Search input</h2>

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<form>
  <Label forId="search" class="block mb-2">Your Email</Label>
  <Input id="search" placeholder="Search" size="lg">
    {#snippet left()}
    <SearchOutline class="w-6 h-6 text-gray-500 dark:text-gray-400" />
    {/snippet}
    {#snippet right()}
    <Button size="sm" type="submit">Search</Button>
    {/snippet}
  </Input>
</form>
</div>

<h2>Dropdown</h2>

Use this example to show a dropdown menu right next to the input field.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 h-64'>
<ButtonGroup class="w-full">
  <Button color="none" class="flex-shrink-0 text-gray-900 bg-gray-100 border border-gray-300 dark:border-gray-700 dark:text-white hover:bg-gray-200 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
    All categories<ChevronDownOutline class="w-6 h-6 ms-2" />
  </Button>
  <Dropdown>
    <DropdownItem>Shopping</DropdownItem>
    <DropdownItem>Images</DropdownItem>
    <DropdownItem>News</DropdownItem>
    <DropdownItem>Finance</DropdownItem>
  </Dropdown>
  <Input placeholder="Search" />
  <Button color="primary" class="!p-2.5" type="submit">
    <SearchOutline class="w-5 h-5" />
  </Button>
</ButtonGroup>
</div>

<h2>Advanced usage</h2>

If you need a full control over `input` HTML element while still re-using the Flowbite formatting, you can put the `input` element as a default slot. The example below is in fact the implementation of the above mentioned `NumberInput`.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 space-y-4'>
<Input let:props>
  <div slot="left">#</div>
  <input type="number" {...props} bind:value />
</Input>
</div>

<div class='h-96 w-full'></div>