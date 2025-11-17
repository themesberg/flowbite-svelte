# Svelte Toolbar - Flowbite


## Setup

```svelte
<script lang="ts">
  import { Toolbar, ToolbarButton, ToolbarGroup } from "flowbite-svelte";
</script>
```

## Default toolbar

```svelte
<script lang="ts">
  import { Toolbar, ToolbarButton } from "flowbite-svelte";
  import { HomeOutline, EnvelopeOutline, ImageOutline } from "flowbite-svelte-icons";
</script>

<Toolbar>
  <ToolbarButton><HomeOutline class="h-6 w-6" /></ToolbarButton>
  <ToolbarButton><EnvelopeOutline class="h-6 w-6" /></ToolbarButton>
  <ToolbarButton><ImageOutline class="h-6 w-6" /></ToolbarButton>
</Toolbar>
```

## Colored toolbars

```svelte
<script lang="ts">
  import { Toolbar, ToolbarButton } from "flowbite-svelte";
  import { HomeOutline, EnvelopeOutline, ImageOutline } from "flowbite-svelte-icons";
</script>

<Toolbar color="red">
  <ToolbarButton color="red"><HomeOutline class="h-6 w-6" /></ToolbarButton>
  <ToolbarButton color="red"><EnvelopeOutline class="h-6 w-6" /></ToolbarButton>
  <ToolbarButton color="red"><ImageOutline class="h-6 w-6" /></ToolbarButton>
</Toolbar>
<Toolbar color="blue">
  <ToolbarButton color="blue"><HomeOutline class="h-6 w-6" /></ToolbarButton>
  <ToolbarButton color="blue"><EnvelopeOutline class="h-6 w-6" /></ToolbarButton>
  <ToolbarButton color="blue"><ImageOutline class="h-6 w-6" /></ToolbarButton>
</Toolbar>
```

## Toolbar with groups

```svelte
<script lang="ts">
  import { Toolbar, ToolbarButton, ToolbarGroup } from "flowbite-svelte";
  import { HomeOutline, EnvelopeOutline, ImageOutline, CogOutline } from "flowbite-svelte-icons";
</script>

<Toolbar color="green">
  <ToolbarGroup>
    <ToolbarButton color="green"><HomeOutline class="h-6 w-6" /></ToolbarButton>
    <ToolbarButton color="green"><EnvelopeOutline class="h-6 w-6" /></ToolbarButton>
    <ToolbarButton color="green"><ImageOutline class="h-6 w-6" /></ToolbarButton>
  </ToolbarGroup>
  <ToolbarGroup>
    <ToolbarButton color="green"><HomeOutline class="h-6 w-6" /></ToolbarButton>
    <ToolbarButton color="green"><EnvelopeOutline class="h-6 w-6" /></ToolbarButton>
    <ToolbarButton color="green"><ImageOutline class="h-6 w-6" /></ToolbarButton>
  </ToolbarGroup>
  {#snippet end()}
    <ToolbarButton color="green"><CogOutline class="h-6 w-6" /></ToolbarButton>
  {/snippet}
</Toolbar>
```

## WYSIWYG Editor

If you want to add other actions as buttons alongside your textarea component, such as with a WYSIWYG editor, then you can use the example below.

```svelte
<script lang="ts">
  import { Textarea, Toolbar, ToolbarGroup, ToolbarButton, Button } from "flowbite-svelte";
  import { PaperClipOutline, MapPinAltSolid, ImageOutline, CodeOutline, FaceGrinOutline, PaperPlaneOutline } from "flowbite-svelte-icons";
</script>

<form>
  <label for="editor" class="sr-only">Publish post</label>
  <Textarea id="editor" rows={8} class="mb-4" placeholder="Write a comment">
    {#snippet header()}
      <Toolbar embedded>
        <ToolbarGroup>
          <ToolbarButton name="Attach file"><PaperClipOutline class="h-5 w-5 rotate-45" /></ToolbarButton>
          <ToolbarButton name="Embed map"><MapPinAltSolid class="h-5 w-5" /></ToolbarButton>
          <ToolbarButton name="Upload image"><ImageOutline class="h-5 w-5" /></ToolbarButton>
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarButton name="Format code"><CodeOutline class="h-5 w-5" /></ToolbarButton>
          <ToolbarButton name="Add emoji"><FaceGrinOutline class="h-5 w-5" /></ToolbarButton>
        </ToolbarGroup>
        {#snippet end()}
          <ToolbarButton name="send"><PaperPlaneOutline class="h-5 w-5 rotate-45" /></ToolbarButton>
        {/snippet}
      </Toolbar>
    {/snippet}
  </Textarea>
  <Button>Publish post</Button>
</form>
```

## Comment box

Most often the textarea component is used as the main text field input element in comment sections. Use this example to also apply a helper text and buttons below the textarea itself.

```svelte
<script lang="ts">
  import { Toolbar, ToolbarButton, Textarea, Button } from "flowbite-svelte";
  import { PaperClipOutline, MapPinAltSolid, ImageOutline } from "flowbite-svelte-icons";
</script>

<form class="mb-4">
  <Textarea placeholder="Write a comment">
    {#snippet footer()}
      <div class="flex items-center justify-between">
        <Button type="submit">Post comment</Button>
        <Toolbar embedded>
          <ToolbarButton name="Attach file"><PaperClipOutline class="h-5 w-5 rotate-45" /></ToolbarButton>
          <ToolbarButton name="Embed map"><MapPinAltSolid class="h-5 w-5" /></ToolbarButton>
          <ToolbarButton name="Upload image"><ImageOutline class="h-5 w-5" /></ToolbarButton>
        </Toolbar>
      </div>
    {/snippet}
  </Textarea>
</form>
<p class="ms-auto text-xs text-gray-500 dark:text-gray-400">
  Remember, contributions to this topic should follow our <a href="/" class="text-blue-600 hover:underline dark:text-blue-500">Community Guidelines</a>
  .
</p>
```

## Component data

### Toolbar

#### Types

[ToolbarProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1167)

#### Props

- children
- end
- color
- embedded
- class: className
- classes

### ToolbarButton

#### Types

[ToolbarButtonProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1173)

#### Props

- children
- color
- name
- "aria-label": ariaLabel
- size
- class: className

### ToolbarGroup

#### Types

[ToolbarGroupProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1171)

#### Props

- children
- spacing
- padding
- position: "middle"
- class: className


### Toolbar styling

- Use the `class` prop to overwrite the `div` tag class.

### ToolbarButton styling

- Use the `class` prop to overwrite the `button` tag class.

### ToolbarGroup styling

- Use the `class` prop to overwrite `divClass`.

## Component data

<CompoAttributesViewer {components}/>

## References
