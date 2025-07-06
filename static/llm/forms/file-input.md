# Svelte File Input - Flowbite


The file input component can be used to upload one or more files from the device storage of the user available in multiple sizes, styles, variants and support for dark mode.

## Setup

```svelte
<script>
  import { Fileupload } from "flowbite-svelte";
</script>
```

## Helper text

```svelte
<script>
  import { Fileupload, Label, Helper } from "flowbite-svelte";
</script>

<Label for="with_helper" class="pb-2">Upload file</Label>
<Fileupload id="with_helper" class="mb-2" />
<Helper>SVG, PNG, JPG or GIF (MAX. 800x400px).</Helper>
```

## Clearable and multiple files

```svelte
<script lang="ts">
  import { Fileupload, Helper } from "flowbite-svelte";
  let selectedFiles = $state<FileList | null>(null);
  let fileNames = $derived(
    selectedFiles
      ? Array.from(selectedFiles)
          .map((file) => file.name)
          .join(", ")
      : "No files selected"
  );
</script>

<Fileupload clearable bind:files={selectedFiles} multiple />
<Helper color="emerald" class="mt-2">Selected files: {fileNames}</Helper>
```

## Sizes

```svelte
<script>
  import { Fileupload, Label } from "flowbite-svelte";
</script>

<Label class="pb-2" for="small_size">Small file input</Label>
<Fileupload id="small_size" size="sm" />
<Label class="py-2" for="default_size">Default size</Label>
<Fileupload id="default_size" />
<Label class="py-2" for="larg_size">Large file input</Label>
<Fileupload id="larg_size" size="lg" />
```

## Events

Add `clearable` and `clearableOnClick` props.

```svelte
<script>
  import { Fileupload } from "flowbite-svelte";
</script>

<Fileupload
  id="event"
  clearable
  clearableOnClick={() => {
    alert("Clicked close button!");
  }}
/>
```

## Accessing Fileupload Element with elementRef

```svelte
<script lang="ts">
  import { Fileupload, Button } from "flowbite-svelte";
  let fileUploadRef = $state() as HTMLInputElement;
</script>

<Fileupload id="event" bind:elementRef={fileUploadRef} class="my-4" />
<Button
  onclick={() => {
    fileUploadRef?.select();
  }}
>
  Focus on Fileupload
</Button>
```

## Dropzone

```svelte
<script lang="ts">
  import { Dropzone } from "flowbite-svelte";

  let value: FileList | null = $state(null);

  function handleChange(event: Event) {
    const target = event.target as HTMLInputElement;
    value = target.files;
  }

  function dropHandle(event: DragEvent) {
    event.preventDefault();
    value = event.dataTransfer?.files ?? null;
  }

  function showFiles(files: FileList | null): string {
    if (!files || files.length === 0) return "No files selected.";
    return Array.from(files)
      .map((file) => file.name)
      .join(", ");
  }
</script>

<Dropzone id="dropzone" bind:files={value} ondrop={dropHandle} ondragover={(event) => event.preventDefault()} onchange={handleChange}>
  <svg aria-hidden="true" class="mb-3 h-10 w-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
  </svg>

  {#if !value || value.length === 0}
    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
      <span class="font-semibold">Click to upload</span>
      or drag and drop
    </p>
    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
  {:else}
    <p class="text-sm text-green-600">{showFiles(value)}</p>
  {/if}
</Dropzone>
```

## Component data

### Fileupload

#### Types

[FileuploadProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L724)

#### Props

- files: $bindable()
- size: "md"
- clearable: false
- elementRef: $bindable()
- class: className
- clearableSvgClass
- clearableColor: "none"
- clearableClass
- clearableOnClick
- wrapperClass


## References

- [Flowbite File Input](https://flowbite.com/docs/forms/file-input/)

<GitHubCompoLinks {components}/>
