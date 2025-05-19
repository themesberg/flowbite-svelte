<script lang="ts">
  import { P, A, Heading, Toggle, Label, Input, Helper, InputAddon, ButtonGroup, Textarea, MultiSelect, Fileupload, Select, Checkbox, Radio } from "$lib";
  let textareaprops = {
    id: "message",
    name: "message",
    label: "Your message",
    rows: 4,
    placeholder: "Leave a comment..."
  };
  import { EnvelopeSolid, UserCircleSolid } from "flowbite-svelte-icons";

  let countries: { value: string; name: string }[] = [
    { value: "us", name: "United States" },
    { value: "ca", name: "Canada" },
    { value: "fr", name: "France" }
  ];
  let fileuploadprops = {
    id: "user_avatar"
  };

  let selected: string = "";
  let countries2: { value: string; name: string }[] = [
    { value: "us", name: "United States" },
    { value: "ca", name: "Canada" },
    { value: "fr", name: "France" },
    { value: "jp", name: "Japan" },
    { value: "en", name: "England" }
  ];
  let multiSelected: string[] = [];
</script>

<h1 class="text-3xl">Forms</h1>
<h2 class="text-2xl">Input Sizes</h2>

<div class="my-4 rounded border border-gray-200 p-4 dark:border-gray-600">
  <div class="mb-6">
    <Label for="large-input" class="mb-2 block">Large input</Label>
    <Input id="large-input" size="lg" placeholder="Large input" />
  </div>
  <div class="mb-6">
    <Label for="default-input" class="mb-2 block">Default input</Label>
    <Input id="default-input" placeholder="Default input" />
  </div>
  <div class="mb-6">
    <Label for="small-input" class="mb-2 block">Small input</Label>
    <Input id="small-input" size="sm" placeholder="Small input" />
  </div>
</div>

<h2 class="text-2xl">Disabled</h2>

<div class="my-4 rounded border border-gray-200 p-4 dark:border-gray-600">
  <Input id="disabled-input" class="mb-6" disabled value="Disabled input" />
  <Input id="disabled-input-2" class="mb-6" disabled readonly value="Disabled readonly input" />
</div>

<h2 class="text-2xl">Helper text</h2>

<div class="my-4 rounded border border-gray-200 p-4 dark:border-gray-600">
  <Label class="mb-2 block">Your email</Label>
  <Input id="email" name="email" required placeholder="name@flowbite.com" />
  <Helper class="mt-2 text-sm">
    We’ll never share your details. Read our <a href="/" class="text-primary-600 dark:text-primary-500 font-medium hover:underline">Privacy Policy</a>
    .
  </Helper>
</div>

<h2 class="text-2xl">Input element with icon</h2>

<div class="my-4 rounded border border-gray-200 p-4 dark:border-gray-600">
  <div class="mb-6">
    <Label for="input-group-1" class="mb-2 block">Your Email</Label>
    <Input id="email" type="email" placeholder="name@flowbite.com" class="pl-8">
      {#snippet left()}
        <EnvelopeSolid class="h-5 w-5 text-gray-500 dark:text-gray-400" />
      {/snippet}
    </Input>
  </div>
</div>

<h2 class="text-2xl">Input element with addon</h2>

<div class="my-4 rounded border border-gray-200 p-4 dark:border-gray-600">
  <div class="mb-6">
    <Label for="website-admin" class="mb-2 block">Username</Label>
    <ButtonGroup class="w-full">
      <InputAddon>
        <UserCircleSolid class="h-4 w-4 text-gray-500 dark:text-gray-400" />
      </InputAddon>
      <Input id="website-admin" placeholder="johndoe" />
    </ButtonGroup>
  </div>
</div>

<h2 class="text-2xl">Form validation</h2>

<div class="my-4 rounded border border-gray-200 p-4 dark:border-gray-600">
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
      <span class="font-medium">Not so well done!</span>
      Some error message.
    </Helper>
  </div>
</div>

<h2 class="text-2xl">Textarea</h2>

<div class="my-4 rounded border border-gray-200 p-4 dark:border-gray-600">
  <Textarea {...textareaprops} />
</div>

<h2 class="text-2xl">Select input</h2>

<div class="my-4 rounded border border-gray-200 p-4 dark:border-gray-600">
  <Label>
    Select an option
    <Select class="mt-2" items={countries} bind:value={selected} />
  </Label>
</div>

<h2 class="text-2xl">MultiSelect</h2>

<div class="my-4 rounded border border-gray-200 p-4 dark:border-gray-600">
  <MultiSelect items={countries2} bind:value={multiSelected} />
</div>

<h2 class="text-2xl">Checkbox</h2>

<div class="my-4 rounded border border-gray-200 p-4 dark:border-gray-600">
  <Checkbox>Default checkbox</Checkbox>
  <Checkbox checked>Checked state</Checkbox>
</div>

<h2 class="text-2xl">Radio buttons</h2>

<div class="my-4 rounded border border-gray-200 p-4 dark:border-gray-600">
  <Radio name="example">Default radio</Radio>
  <Radio name="example" checked={true}>Checked state</Radio>
</div>

<h2 class="text-2xl">File upload</h2>

<div class="my-4 rounded border border-gray-200 p-4 dark:border-gray-600">
  <Label class="pb-2">Upload file</Label>
  <Fileupload {...fileuploadprops} />
</div>

<h2 class="text-2xl">Toggle Switch</h2>

<div class="my-4 rounded border border-gray-200 p-4 dark:border-gray-600">
  <Toggle>Toggle me</Toggle>
  <Toggle checked={true}>Checked toggle</Toggle>
  <Toggle disabled>Disabled toggle</Toggle>
  <Toggle checked disabled>Disabled checked</Toggle>
</div>
