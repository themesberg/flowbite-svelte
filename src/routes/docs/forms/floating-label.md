---
layout: componentLayout
title: Svelte Floating Label - Flowbite
breadcrumb_title: Svelte Floating Label
component_title: Floating Label
dir: Forms
description: Use the floating label style for the input field elements to replicate the Material UI design system from Google and choose from multiple styles and sizes
thumnailSize: w-40
---

<script>
  import { CompoAttributesViewer, DocBadgeList, GitHubCompoLinks, toKebabCase } from '../../utils'
  import { Badge, A } from '$lib'

  const components = 'FloatingLabelInput, Helper'
</script>

The floating label style was first pioneered by Google in its infamous Material UI design system and it’s basically a label tag which floats just above the input field when it is being focused or already has content inside.

On this page you will find a three different input field styles including a standard, outlined, and filled style including validation styles and sizes coded with Tailwind CSS and supported for dark mode.

## Setup

```svelte example hideOutput
<script>
  import { FloatingLabelInput, Helper } from 'flowbite-svelte';
</script>
```

## Floating label examples

Get started with the following three styles for the floating label component and use the label tag as a visual placeholder using the peer-placeholder-shown and peer-focus utility classes from Tailwind CSS.

```svelte example hideScript
<script>
  import { FloatingLabelInput } from 'flowbite-svelte';
</script>

<div id="exampleWrapper" class="grid gap-6 items-end w-full md:grid-cols-3">
  <FloatingLabelInput style="filled" id="floating_filled" name="floating_filled" type="text">
    Floating filled
  </FloatingLabelInput>
  <FloatingLabelInput style="outlined" id="floating_outlined" name="floating_outlined" type="text">
    Floating outlined
  </FloatingLabelInput>
  <FloatingLabelInput id="floating_standard" name="floating_standard" type="text" label="Floating standard">
    Floating standard
  </FloatingLabelInput>
</div>
```

## Disabled state

Apply the disabled attribute to the input fields to disallow the user from changing the content.

```svelte example hideScript
<script>
  import { FloatingLabelInput } from 'flowbite-svelte';
</script>

<div id="exampleWrapper" class="grid gap-6 items-end w-full md:grid-cols-3">
  <FloatingLabelInput style="filled" id="disabled_filled" name="disabled_filled" type="text" disabled >
    Disabled filled
  </FloatingLabelInput>
  <FloatingLabelInput style="outlined" id="disabled_outlined" name="disabled_outlined" type="text" disabled>
    Disabled outlined
  </FloatingLabelInput>
  <FloatingLabelInput id="disabled_standard" name="disabled_standard" type="text" disabled>
    Disabled standard
  </FloatingLabelInput>
</div>
```

## Validation

Use the following examples of input validation for the success and error messages by applying the validation text below the input field and using the green or red color classes from Tailwind CSS.

```svelte example
<script>
  import { FloatingLabelInput, Helper } from 'flowbite-svelte';
</script>

<!-- Success messages -->
<div class="grid gap-6 items-end mb-6 md:grid-cols-3">
  <div>
    <FloatingLabelInput color="green" style="filled" id="filled_success" aria-describedby="filled_success_help" name="filled_success" type="text">
      Filled success
    </FloatingLabelInput>
    <Helper color="green">
      <span class="font-medium">Well done!</span>
      Some success message.
    </Helper>
  </div>
  <div>
    <FloatingLabelInput color="green" style="outlined" id="outlined_success" aria-describedby="outlined_success_help" name="outlined_success" type="text">
      Outlined success
    </FloatingLabelInput>
    <Helper color="green">
      <span class="font-medium">Well done!</span>
      Some success message.
    </Helper>
  </div>
  <div>
    <FloatingLabelInput color="green" style="standard" id="standard_success" aria-describedby="standard_success_help" name="standard_success" type="text">
      Standard success
    </FloatingLabelInput>
    <Helper color="green">
      <span class="font-medium">Well done!</span>
      Some success message.
    </Helper>
  </div>
</div>
<!-- Error messages -->
<div class="grid gap-6 items-end mb-6 md:grid-cols-3">
  <div>
    <FloatingLabelInput color="red" style="filled" id="filled_error" aria-describedby="filled_error_help" name="filled_error" type="text">
      Filled error
    </FloatingLabelInput>
    <Helper color="red">
      <span class="font-medium">Oh, snapp!</span>
      Some error message.
    </Helper>
  </div>
  <div>
    <FloatingLabelInput color="red" style="outlined" id="outlined_error" aria-describedby="outlined_error_help" name="outlined_success" type="text">
      Outlined error
    </FloatingLabelInput>
    <Helper color="red">
      <span class="font-medium">Oh, snapp!</span>
      Some error message.
    </Helper>
  </div>
  <div>
    <FloatingLabelInput color="red" style="standard" id="standard_error" aria-describedby="standard_error_help" name="standard_success" type="text">
      Standard error
    </FloatingLabelInput>
    <Helper color="red">
      <span class="font-medium">Oh, snapp!</span>
      Some error message.
    </Helper>
  </div>
</div>
```

## Sizes

Use the small and default sizes of the floating label input fields from the following example.

```svelte example hideScript
<script>
  import { FloatingLabelInput } from 'flowbite-svelte';
</script>

<div class="grid gap-6 items-end mb-6 md:grid-cols-3">
  <FloatingLabelInput size="small" style="filled" id="small_filled" name="small_filled" type="text">
    Small filled
  </FloatingLabelInput>
  <FloatingLabelInput size="small" style="outlined" id="small_outlined" name="small_outlined" type="text">
    Small outlined
  </FloatingLabelInput>
  <FloatingLabelInput size="small" id="small_standard" name="small_standard" type="text">
    Small standard
  </FloatingLabelInput>
</div>
<div class="grid gap-6 items-end md:grid-cols-3">
  <FloatingLabelInput style="filled" id="default_filled" name="default_filled" type="text">
    Default filled
  </FloatingLabelInput>
  <FloatingLabelInput style="outlined" id="default_outlined" name="default_outlined" type="text">
    Default outlined
  </FloatingLabelInput>
  <FloatingLabelInput id="default_standard" name="default_standard" type="text">
    Default standard
  </FloatingLabelInput>
</div>
```

## Helper text

Add a helper text in addition to the label if you want to show more information below the input field.

```svelte example
<script>
  import { FloatingLabelInput, Helper } from 'flowbite-svelte';
</script>

<FloatingLabelInput style="filled" id="floating_helper" aria-describedby="floating_helper_text" name="floating_helper" type="text">
  Floating helper
</FloatingLabelInput>
<Helper class="pt-2">
  Remember, contributions to this topic should follow our <a href="/" class="text-primary-600 dark:text-primary-500 hover:underline"> Community Guidelines </a>
  .
</Helper>
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

### FloatingLabelInput styling

- Use the `classDiv` prop to overwrite the div class.
- Use the `classInput` prop to overwrite the input class.
- Use the `classLabel` prop to overwrite the label class.

### Helper styling

- Use the `class` prop to overwrite the `p` tag class.

<CompoAttributesViewer {components}/>

## References

- [Flowbite Floating Label](https://flowbite.com/docs/forms/floating-label/)

<GitHubCompoLinks {components}/>
