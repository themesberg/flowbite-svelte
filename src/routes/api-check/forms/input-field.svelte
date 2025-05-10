<script lang="ts">
  import { Input, Label, Helper, Button, Checkbox, A, InputAddon, ButtonGroup, CloseButton, Dropdown, DropdownItem } from "$lib";
  import { EnvelopeSolid, EyeOutline, EyeSlashOutline, ChevronDownOutline, SearchOutline } from "flowbite-svelte-icons";

  let elementRef = $state() as HTMLInputElement;
  let value = $state(5);
  let show = $state(false);
  let show1 = $state(false);
</script>

<h1 class="my-4 text-3xl">Input Field</h1>

<h2 class="my-4 text-2xl">Input fields</h2>
<div class="my-4 rounded border p-4">
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
        <Input type="tel" id="phone" placeholder="123-45-678" pattern={"[0-9]{3}-[0-9]{2}-[0-9]{3}"} required />
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
      <Input type="email" id="email" placeholder="john.doe@company.com" required />
    </div>
    <div class="mb-6">
      <Label for="password" class="mb-2">Password</Label>
      <Input type="password" id="password" placeholder="•••••••••" required />
    </div>
    <div class="mb-6">
      <Label for="confirm_password" class="mb-2">Confirm password</Label>
      <Input type="password" id="confirm_password" placeholder="•••••••••" required />
    </div>
    <Checkbox class="mb-6 gap-1 rtl:space-x-reverse" required>
      I agree with the <A href="/" class="text-primary-700 dark:text-primary-600 hover:underline">terms and conditions</A>.
    </Checkbox>
    <Button type="submit">Submit</Button>
  </form>
</div>

<h2 class="my-4 text-2xl">Input sizes</h2>
<div class="my-4 rounded border p-4">
  <div class="space-y-6">
    <Label class="space-y-2">
      <div>Small icon input</div>
      <Input type="email" placeholder="Small input" size="sm" />
    </Label>

    <Label class="space-y-2">
      <div>Default icon input</div>
      <Input type="email" placeholder="Default input" size="md" />
    </Label>

    <Label class="space-y-2">
      <div>Large icon input</div>
      <Input type="email" placeholder="Large input" size="lg" />
    </Label>
  </div>
</div>

<h2 class="my-4 text-2xl">Disabled state</h2>
<div class="my-4 rounded border p-4">
  <Input class="mb-6" disabled value="Disabled input" />
  <Input class="mb-6" disabled readonly value="Disabled readonly input" />
</div>

<h2 class="my-4 text-2xl">Clearable</h2>
<div class="my-4 rounded border p-4">
  <Input clearable value="Clearable input" />
</div>

<h2 class="my-4 text-2xl">Validation</h2>
<div class="my-4 rounded border p-4">
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

<h2 class="my-4 text-2xl">Input with icon</h2>
<div class="my-4 rounded border p-4">
  <div class="space-y-6">
    <Label class="space-y-2">
      <div>Small input - left icon</div>
      <Input type="email" placeholder="name@flowbite.com" size="sm" class="ps-8">
        {#snippet left()}
          <EnvelopeSolid class="h-4 w-4" />
        {/snippet}
      </Input>
    </Label>

    <Label class="space-y-2">
      <div>Default input - right icon</div>
      <Input type="email" placeholder="name@flowbite.com" size="md" class="ps-9">
        {#snippet left()}
          <EnvelopeSolid class="h-5 w-5" />
        {/snippet}
      </Input>
    </Label>

    <Label class="space-y-2">
      <div>Large input - both icons</div>
      <Input type="email" placeholder="name@flowbite.com" size="lg" class="ps-11">
        {#snippet left()}
          <EnvelopeSolid class="h-6 w-6" />
        {/snippet}
        {#snippet right()}
          <CloseButton />
        {/snippet}
      </Input>
    </Label>
  </div>
</div>

<h2 class="my-4 text-2xl">Input group</h2>
<div class="my-4 rounded border p-4">
  <div class="space-y-6">
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
      <Label for="input-addon" class="mb-2">Grouped with button</Label>
      <ButtonGroup class="w-full">
        <InputAddon>@</InputAddon>
        <Input id="input-addon" type="email" placeholder="john.doe@mail.com" />
        <Button color="primary">Search</Button>
      </ButtonGroup>
    </div>

    <div>
      <Label for="input-addon" class="mb-2">Crazy example</Label>
      <ButtonGroup class="w-full">
        <InputAddon><Checkbox /></InputAddon>
        <Button color="primary">Search</Button>
        <InputAddon>http://</InputAddon>
        <Input id="input-addon" type="email" placeholder="john.doe@mail.com" />
        <InputAddon>@</InputAddon>
        <InputAddon><Checkbox /></InputAddon>
        <Button color="blue">Send</Button>
        <InputAddon>kg</InputAddon>
      </ButtonGroup>
    </div>
  </div>
</div>

<h2 class="my-4 text-2xl">Icon click handler</h2>
<div class="my-4 rounded border p-4">
  <div class="gap-6">
    <div>
      <Label for="show-password" class="mb-2">Your password</Label>
      <Input id="show-password" type={show ? "text" : "password"} placeholder="Your password here" size="lg" class="pl-10">
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
        <Input id="show-password1" type={show1 ? "text" : "password"} placeholder="Your password here" />
      </ButtonGroup>
    </div>
  </div>
</div>

<h2 class="my-4 text-2xl">Helper text</h2>
<div class="my-4 rounded border p-4">
  <Label class="flex flex-col gap-2">
    <span>Your email</span>
    <Input id="email" name="email" required placeholder="name@flowbite.com" />
    <Helper class="text-sm">
      We'll never share your details. Read our <a href="/" class="text-primary-600 dark:text-primary-500 font-medium hover:underline">Privacy Policy</a>
      .
    </Helper>
  </Label>
</div>

<h2 class="my-4 text-2xl">Number input</h2>
<div class="my-4 rounded border p-4">
  <Label class="mb-4 flex flex-col gap-2">
    <span>Your Age</span>
    <Input type="number" bind:value />
  </Label>
  <div class="dark:text-white">
    <p>Value: {value}</p>
    <p>Type of value: {typeof value}</p>
  </div>
</div>

<h2 class="my-4 text-2xl">Search input</h2>
<div class="my-4 rounded border p-4">
  <form>
    <Label for="search" class="mb-2 block">Your Email</Label>
    <Input id="search" placeholder="Search" size="lg" class="ps-9">
      {#snippet left()}
        <SearchOutline class="h-6 w-6 text-gray-500 dark:text-gray-400" />
      {/snippet}
      {#snippet right()}
        <Button size="sm" type="submit">Search</Button>
      {/snippet}
    </Input>
  </form>
</div>

<h2 class="my-4 text-2xl">Dropdown</h2>
<div class="my-4 rounded border p-4">
  <div class="h-64">
    <ButtonGroup class="w-full">
      <Button color={undefined} class="shrink-0 border border-gray-300 bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800">
        All categories<ChevronDownOutline class="ms-2 h-6 w-6" />
      </Button>
      <Dropdown simple>
        <DropdownItem>Shopping</DropdownItem>
        <DropdownItem>Images</DropdownItem>
        <DropdownItem>News</DropdownItem>
        <DropdownItem>Finance</DropdownItem>
      </Dropdown>
      <Input placeholder="Search" />
      <Button color="primary" class="p-2.5!" type="submit">
        <SearchOutline class="h-5 w-5" />
      </Button>
    </ButtonGroup>
  </div>
</div>

<h2 class="my-4 text-2xl">Advanced usage</h2>
<div class="my-4 rounded border p-4">
  <div class="gap-4">
    <Input>
      {#snippet left()}#{/snippet}
      {#snippet children(props)}
        <input type="number" {...props} bind:value class={[props.class, "ps-9"]} />
      {/snippet}
    </Input>
  </div>
</div>

<h2 class="my-4 text-2xl">Accessing Input element using elementRef</h2>

<div class="my-4 rounded border p-4">
  <Input bind:elementRef class="my-4" />
  <Button onclick={() => elementRef?.focus()}>Focus on Input</Button>
</div>

<h2 class="my-4 text-2xl">Clearable</h2>

<div class="my-4 rounded border p-4">
  <Input clearable class="my-4" />
</div>

<h2 class="my-4 text-2xl">Event</h2>

<div class="my-4 mb-40 rounded border p-4">
  <Input
    clearable
    clearableOnClick={() => {
      alert("Clicked close button!");
    }}
    class="my-4"
  />
</div>
