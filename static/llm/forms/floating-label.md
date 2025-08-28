# Svelte Floating Label - Flowbite


<script lang="ts">
  import { CompoAttributesViewer,  GitHubCompoLinks, Seealso } from '../../utils'

  const components = 'FloatingLabelInput, Helper'
  const relatedLinks = ['/docs/forms/input-field','/docs/forms/floating-label', '/docs/extend/tags' ]
</script>

The floating label style was first pioneered by Google in its infamous Material UI design system and it’s basically a label tag which floats just above the input field when it is being focused or already has content inside.

On this page you will find a three different input field styles including a standard, outlined, and filled style including validation styles and sizes coded with Tailwind CSS and supported for dark mode.

## Setup

```svelte
<script lang="ts">
  import { FloatingLabelInput, Helper } from "flowbite-svelte";
</script>
```

## Floating label examples

Get started with the following three styles for the floating label component and use the label tag as a visual placeholder using the peer-placeholder-shown and peer-focus utility classes from Tailwind CSS.

```svelte
{#include Default.svelte}
```

## Clearable

```svelte
{#include Clearable.svelte}
```

## Event

Use `clearable` and `clearableOnClick` props.

```svelte
{#include Event.svelte}
```

## Accessing FloatingLabelInput Element with elementRef

```svelte
{#include ElementRef.svelte}
```

## Combobox

```svelte
{#include Combobox.svelte}
```

## Disabled state

Apply the disabled attribute to the input fields to disallow the user from changing the content.

```svelte
{#include Disabled.svelte}
```

## Validation

Use the following examples of input validation for the success and error messages by applying the validation text below the input field and using the green or red color classes from Tailwind CSS.

```svelte
{#include Validation.svelte}
```

## Sizes

Use the small and default sizes of the floating label input fields from the following example.

```svelte
{#include Sizes.svelte}
```

## Helper text

Add a helper text in addition to the label if you want to show more information below the input field.

```svelte
{#include HelperText.svelte}
```

## See also

<Seealso links={relatedLinks} />

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {components}/>

## References

- [Flowbite Floating Label](https://flowbite.com/docs/forms/floating-label/)

<GitHubCompoLinks {components}/>
