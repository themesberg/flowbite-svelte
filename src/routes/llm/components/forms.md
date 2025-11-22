# Svelte Forms - Flowbite


The Input component allows you to change the input size, add disabled, helper text, and floating label.

## Input Sizes

User the size prop to change the input size. Choose one from `"md" | "sm" | "lg"`. The default size is `md`.

```svelte
<script lang="ts">
  import { Label, Input } from "flowbite-svelte";
</script>

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
```

## Disabled

Get started with this example if you want to apply the disabled state to an input field. Add the disabled to change the input to disabled.

```svelte
<script lang="ts">
  import { Input } from "flowbite-svelte";
</script>

<Input id="disabled-input" class="mb-6" disabled value="Disabled input" />
<Input id="disabled-input-2" class="mb-6" disabled readonly value="Disabled readonly input" />
```

## Helper text

Use the helper prop to add your helper text. You can use HTML in the helper text.

```svelte
<script lang="ts">
  import { Label, Input, Helper } from "flowbite-svelte";
</script>

<Label class="mb-2 block">Your email</Label>
<Input id="email" name="email" required placeholder="name@flowbite.com" />
<Helper class="mt-2 text-sm">
  We’ll never share your details. Read our <a href="/" class="text-primary-600 dark:text-primary-500 font-medium hover:underline">Privacy Policy</a>
  .
</Helper>
```

## Input element with icon

With the Input component, you can add <A href="https://flowbite-svelte-icons.codewithshin.com/">Flowbite Svelte Icons</A> or <A href="https://svelte-svg-icons.codewithshin.com/" >other icon sets</A>.

```svelte
<script lang="ts">
  import { Label, Input } from "flowbite-svelte";
  import { EnvelopeSolid } from "flowbite-svelte-icons";
</script>

<div class="mb-6">
  <Label for="input-group-1" class="mb-2 block">Your Email</Label>
  <Input id="email" type="email" placeholder="name@flowbite.com" class="pl-8">
    {#snippet left()}
      <EnvelopeSolid class="h-5 w-5 text-gray-500 dark:text-gray-400" />
    {/snippet}
  </Input>
</div>
```

## Input element with addon

```svelte
<script lang="ts">
  import { Label, Input, InputAddon, ButtonGroup } from "flowbite-svelte";
  import { UserCircleSolid } from "flowbite-svelte-icons";
</script>

<div class="mb-6">
  <Label for="website-admin" class="mb-2 block">Username</Label>
  <ButtonGroup class="w-full">
    <InputAddon>
      <UserCircleSolid class="h-4 w-4 text-gray-500 dark:text-gray-400" />
    </InputAddon>
    <Input id="website-admin" placeholder="johndoe" />
  </ButtonGroup>
</div>
```

## Form validation

Use the following example to apply validation styles for success and error messages.

```svelte
<script lang="ts">
  import { Label, Input, Helper } from "flowbite-svelte";
</script>

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
```

## Textarea

```svelte
<script lang="ts">
  import { Textarea } from "flowbite-svelte";
  let textareaprops = {
    id: "message",
    name: "message",
    label: "Your message",
    rows: 4,
    placeholder: "Leave a comment..."
  };
</script>

<Textarea {...textareaprops} class="w-full" />
```

## Select input

Get started with the default example of a select input component to get a single option selection.

```svelte
<script lang="ts">
  import { Label, Select } from "flowbite-svelte";
  let selected: string = "";

  let countries: { value: string; name: string }[] = [
    { value: "us", name: "United States" },
    { value: "ca", name: "Canada" },
    { value: "fr", name: "France" }
  ];
</script>

<Label>
  Select an option
  <Select class="mt-2" items={countries} bind:value={selected} />
</Label>
```

## MultiSelect

```svelte
<script lang="ts">
  import { MultiSelect } from "flowbite-svelte";

  let multiSelected: string[] = [];
  let countries: { value: string; name: string }[] = [
    { value: "us", name: "United States" },
    { value: "ca", name: "Canada" },
    { value: "fr", name: "France" },
    { value: "jp", name: "Japan" },
    { value: "en", name: "England" }
  ];
</script>

<MultiSelect items={countries} bind:value={multiSelected} />
```

## Checkbox

```svelte
<script lang="ts">
  import { Checkbox } from "flowbite-svelte";
</script>

<Checkbox>Default checkbox</Checkbox>
<Checkbox checked>Checked state</Checkbox>
```

## Radio buttons

```svelte
<script lang="ts">
  import { Radio } from "flowbite-svelte";
</script>

<Radio name="example">Default radio</Radio>
<Radio name="example" checked={true}>Checked state</Radio>
```

## File upload

```svelte
<script lang="ts">
  import { Label, Fileupload } from "flowbite-svelte";

  let fileuploadprops = {
    id: "user_avatar"
  };
</script>

<Label class="pb-2">Upload file</Label>
<Fileupload {...fileuploadprops} />
```

## Toggle Switch

```svelte
<script lang="ts">
  import { Toggle } from "flowbite-svelte";
</script>

<Toggle>Toggle me</Toggle>
<Toggle checked={true}>Checked toggle</Toggle>
<Toggle disabled>Disabled toggle</Toggle>
<Toggle checked disabled>Disabled checked</Toggle>
```

## References

- [Flowbite Forms](https://flowbite.com/docs/components/forms/)
