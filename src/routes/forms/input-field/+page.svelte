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

  import {
    Input,
    Label,
    Helper,
    Button,
    Checkbox,
    A,
    CloseButton,
    InputAddon,
    ButtonGroup,
    Dropdown,
    DropdownItem,
    uiHelpers
  } from '$lib';
  // import { Dropdown, DropdownItem } from '$lib'
  import {
    EyeOutline,
    EyeSlashOutline,
    EnvelopeSolid,
    ChevronDownOutline,
    SearchOutline
  } from 'flowbite-svelte-icons';
  import { sineIn } from 'svelte/easing';
  let show = $state(false);
  let show1 = $state(false);
  let value = $state(5);
  let dropdown = uiHelpers();
  let dropdownStatus = $state(false);
  let closeDropdown = dropdown.close;
  let transitionParams = {
    y: 0,
    duration: 200,
    easing: sineIn
  };
  $effect(() => {
    // this can be done adding nav.navStatus directly to DOM element
    // without using effect
    dropdownStatus = dropdown.isOpen;
  });
</script>

<H1>Input field</H1>
<H2>Input fields</H2>

<H2>Input fields</H2>

Use this example as a generic form element which includes multiple input fields
types such as text, email, password, number, URL, and phone number and use the
grid layout to add multiple columns and rows.

<div
  class="mx-auto mt-8 w-full border bg-white bg-gradient-to-r p-6 dark:bg-gray-900"
>
  <form>
    <div class="mb-6 grid gap-6 md:grid-cols-2">
      <div>
        <Label for="first_name" class="mb-2">First name</Label>
        <Input type="text" id="first_name" placeholder="John" required />
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
        <Input
          type="tel"
          id="phone"
          placeholder="123-45-678"
          pattern={'[0-9]{3}-[0-9]{2}-[0-9]{3}'}
          required
        />
      </div>
      <div>
        <Label for="website" class="mb-2">Website URL</Label>
        <Input type="url" id="website" placeholder="flowbite.com" required />
      </div>
      <div>
        <Label for="visitors" class="mb-2">Unique visitors (per month)</Label>
        <Input type="number" id="visitors" placeholder="" required />
      </div>
    </div>
    <div class="mb-6">
      <Label for="email" class="mb-2">Email address</Label>
      <Input
        type="email"
        id="email"
        placeholder="john.doe@company.com"
        required
      />
    </div>
    <div class="mb-6">
      <Label for="password" class="mb-2">Password</Label>
      <Input type="password" id="password" placeholder="•••••••••" required />
    </div>
    <div class="mb-6">
      <Label for="confirm_password" class="mb-2">Confirm password</Label>
      <Input
        type="password"
        id="confirm_password"
        placeholder="•••••••••"
        required
      />
    </div>
    <Checkbox class="mb-6 space-x-1 rtl:space-x-reverse" required>
      I agree with the <A
        href="/"
        class="text-primary-700 hover:underline dark:text-primary-600"
        >terms and conditions</A
      >.
    </Checkbox>
    <Button type="submit">Submit</Button>
  </form>
</div>

<H2>Input sizes</H2>

Use the following examples to apply a small, default or large size for the input
fields. User the size prop to change the input size. Choose one from
'sm:text-md' | 'text-sm' | 'sm:text-xs'. The default size is text-sm.

<div
  class="mx-auto mt-8 w-full space-y-6 border bg-white bg-gradient-to-r p-6 dark:bg-gray-900"
>
  <Label class="space-y-2">
    <span>Small icon input</span>
    <Input type="email" placeholder="Small input" inputSize="sm" />
  </Label>

  <Label class="space-y-2">
    <span>Default icon input</span>
    <Input type="email" placeholder="Default input" inputSize="md" />
  </Label>

  <Label class="space-y-2">
    <span>Large icon input</span>
    <Input type="email" placeholder="Large input" inputSize="lg" />
  </Label>
</div>

<H2>Disabled state</H2>

Get started with this example if you want to apply the disabled state to an
input field. Add the disabled to change the input to disabled.

<div
  class="mx-auto mt-8 w-full border bg-white bg-gradient-to-r p-6 dark:bg-gray-900"
>
  <Input class="mb-6" disabled value="Disabled input" />
  <Input class="mb-6" disabled readonly value="Disabled readonly input" />
</div>

<H2>Validation</H2>

Use the following example to apply validation styles for success and error
messages.

<div
  class="mx-auto mt-8 w-full border bg-white bg-gradient-to-r p-6 dark:bg-gray-900"
>
  <div class="mb-6">
    <Label for="success" color="green" class="mb-2 block">Your name</Label>
    <Input id="success" color="green" placeholder="Success input" />
    <Helper class="mt-2" color="green">
      <span class="font-medium">Well done!</span>
      Some success message.
    </Helper>
  </div>
  <div class="mb-6">
    <Label for="error" color="red" class="mb-2 block">Your name</Label>
    <Input id="error" color="red" placeholder="Error input" />
    <Helper class="mt-2" color="red">
      <span class="font-medium">Oh, snapp!</span>
      Some error message.
    </Helper>
  </div>
</div>

<H2>Input with icon</H2>

<div
  class="mx-auto mt-8 w-full border bg-white bg-gradient-to-r p-6 dark:bg-gray-900"
>
  <Label class="space-y-2">
    <span>Small input - left icon</span>
    <Input type="email" placeholder="name@flowbite.com" inputSize="sm">
      {#snippet left()}
        <EnvelopeSolid class="h-4 w-4" />
      {/snippet}
    </Input>
  </Label>

  <Label class="space-y-2">
    <span>Default input - right icon</span>
    <Input type="email" placeholder="name@flowbite.com" inputSize="md">
      {#snippet right()}
        <EnvelopeSolid class="h-5 w-5" />
      {/snippet}
    </Input>
  </Label>

  <Label class="space-y-2">
    <span>Large input - both icons</span>
    <Input type="email" placeholder="name@flowbite.com" inputSize="lg">
      {#snippet left()}
        <EnvelopeSolid class="h-6 w-6" />
      {/snippet}
      {#snippet right()}
        <CloseButton />
      {/snippet}
    </Input>
  </Label>
</div>

<H2>Input group</H2>

This example can be used to add a descriptive icon or additional text inside the
input field.

<div
  class="mx-auto mt-8 w-full space-y-6 border bg-white bg-gradient-to-r p-6 dark:bg-gray-900"
>
  <div>
    <Label class="mb-2" for="input-addon-sm">Small additional text</Label>
    <ButtonGroup class="w-full" size="sm">
      <InputAddon>@</InputAddon>
      <Input id="input-addon-sm" type="email" placeholder="elonmusk" />
    </ButtonGroup>
  </div>

  <div>
    <Label class="mb-2" for="input-addon-md">Default additional text</Label>
    <ButtonGroup class="w-full" size="md">
      <Input id="input-addon-md" type="email" placeholder="elonmusk" />
      <InputAddon>.com</InputAddon>
    </ButtonGroup>
  </div>

  <div>
    <Label class="mb-2" for="input-addon-lg">Large additional text</Label>
    <ButtonGroup class="w-full" size="lg">
      <InputAddon>@</InputAddon>
      <Input id="input-addon-lg" type="email" placeholder="elonmusk" />
      <InputAddon>.com</InputAddon>
    </ButtonGroup>
  </div>

  <div class="pt-8">
    <Label for="input-addon" class="mb-2">Grouped with button</Label>
    <ButtonGroup class="w-full">
      <InputAddon>@</InputAddon>
      <Input id="input-addon" type="email" placeholder="elonmusk" />
      <Button color="primary">Search</Button>
    </ButtonGroup>
  </div>

  <div>
    <Label for="input-addon" class="mb-2">Crazy example</Label>
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

<H2>Icon click handler</H2>

This example shows how to add `onclick` event handler to the icon in `Input`. By
clicking an icon, it toggles icon and `type`:

<div
  class="mx-auto mt-8 w-full space-y-6 border bg-white bg-gradient-to-r p-6 dark:bg-gray-900"
>
  <div>
    <Label for="show-password" class="mb-2">Your password</Label>
    <Input
      id="show-password"
      type={show ? 'text' : 'password'}
      placeholder="Your password here"
      inputSize="lg"
    >
      {#snippet left()}
        <button onclick={() => (show = !show)} class="pointer-events-auto">
          {#if show}
            <EyeOutline class="h-6 w-6" />
          {:else}
            <EyeSlashOutline class="h-6 w-6" />
          {/if}
        </button>
      {/snippet}
    </Input>
  </div>

  <div>
    <Label for="show-password1" class="mb-2">Your password</Label>
    <ButtonGroup class="w-full">
      <InputAddon>
        <button onclick={() => (show1 = !show1)}>
          {#if show1}
            <EyeOutline class="h-6 w-6" />
          {:else}
            <EyeSlashOutline class="h-6 w-6" />
          {/if}
        </button>
      </InputAddon>
      <Input
        id="show-password1"
        type={show1 ? 'text' : 'password'}
        placeholder="Your password here"
      />
    </ButtonGroup>
  </div>
</div>

<H2>Helper text</H2>

Use the helper prop to add your helper text. You can use HTML in the helper
text.

<div
  class="mx-auto mt-8 w-full border bg-white bg-gradient-to-r p-6 dark:bg-gray-900"
>
  <Label class="block space-y-2">
    <span>Your email</span>
    <Input id="email" type="email" required placeholder="name@flowbite.com" />
    <Helper class="text-sm">
      We’ll never share your details. Read our <a
        href="/"
        class="font-medium text-primary-600 hover:underline dark:text-primary-500"
      >
        Privacy Policy
      </a>
      .
    </Helper>
  </Label>
</div>

<H2>Number input</H2>

<div
  class="mx-auto mt-8 w-full border bg-white bg-gradient-to-r p-6 dark:bg-gray-900"
>
  <Label class="mb-4 space-y-2">
    <span>Your lucky number</span>
    <Input type="number" bind:value />
  </Label>

  <p>Value: {value}</p>
  <p>Type of value: {typeof value}</p>
</div>

<H2>Search input</H2>

<div
  class="mx-auto mt-8 w-full border bg-white bg-gradient-to-r p-6 dark:bg-gray-900"
>
  <form>
    <Label for="search" class="mb-2 block">Your Email</Label>
    <Input id="search" placeholder="Search" inputSize="lg">
      {#snippet left()}
        <SearchOutline class="h-6 w-6 text-gray-500 dark:text-gray-400" />
      {/snippet}
      {#snippet right()}
        <Button size="sm" type="submit">Search</Button>
      {/snippet}
    </Input>
  </form>
</div>

<H2>Dropdown</H2>

Use this example to show a dropdown menu right next to the input field.

<div
  class="mx-auto mt-8 h-64 w-full border bg-white bg-gradient-to-r p-6 dark:bg-gray-900"
>
  <ButtonGroup class="w-full">
    <Button
      onclick={dropdown.toggle}
      color="none"
      class="flex-shrink-0 border border-gray-300 bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
    >
      All categories<ChevronDownOutline class="ms-2 h-6 w-6" />
    </Button>

    <Input placeholder="Search" />
    <Button color="primary" class="!p-2.5" type="submit">
      <SearchOutline class="h-5 w-5" />
    </Button>
  </ButtonGroup>
  <Dropdown {dropdownStatus} {closeDropdown} {transitionParams}>
    <DropdownItem>Shopping</DropdownItem>
    <DropdownItem>Images</DropdownItem>
    <DropdownItem>News</DropdownItem>
    <DropdownItem>Finance</DropdownItem>
  </Dropdown>
</div>

<H2>Advanced usage</H2>

If you need a full control over `input` HTML element while still re-using the
Flowbite formatting, you can put the `input` element as a default slot. The
example below is in fact the implementation of the above mentioned
`NumberInput`.

<div
  class="mx-auto mt-8 w-full space-y-4 border bg-white bg-gradient-to-r p-6 dark:bg-gray-900"
>
  N/A
</div>

<div class="h-96 w-full"></div>
