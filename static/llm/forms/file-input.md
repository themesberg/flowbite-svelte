# Svelte File Input - Flowbite


The file input component can be used to upload one or more files from the device storage of the user available in multiple sizes, styles, variants and support for dark mode.

## Setup

```svelte
<script lang="ts">
  import { Fileupload } from "flowbite-svelte";
</script>
```

## Helper text

```svelte
{#include HelperText.svelte}
```

## Clearable and multiple files

```svelte
{#include Clearable.svelte}
```

## Sizes

```svelte
{#include Sizes.svelte}
```

## Events

Add `clearable` and `clearableOnClick` props.

```svelte
{#include Events.svelte}
```

## Accessing Fileupload Element with elementRef

```svelte
{#include ElementRef.svelte}
```

## Dropzone

```svelte
{#include Dropzone.svelte}
```

## Component data

### Fileupload

#### Types

[FileuploadProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L713)

#### Props

- files: $bindable()
- size: "md"
- clearable: false
- elementRef: $bindable()
- class: className
- classes
- clearableSvgClass
- clearableColor: "none"
- clearableClass
- clearableOnClick
- wrapperClass


## References

- [Flowbite File Input](https://flowbite.com/docs/forms/file-input/)

<GitHubCompoLinks {components}/>
