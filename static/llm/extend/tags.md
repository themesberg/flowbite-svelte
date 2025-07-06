# Svelte Tags


The Tags.svelte component is a flexible tag input field that lets users add and manage multiple tags. It supports adding tags with Enter, removing them with Backspace or close buttons, and offers customizable styling options. The component handles keyboard navigation and maintains a reactive array of tag values that can be bound to a parent component.

## Setup

Import the `Tags` component in a script tag.

```svelte
<script>
  import { Tags } from "flowbite-svelte";
</script>
```

## Example

```svelte
<script lang="ts">
  import { Button, Tags } from "flowbite-svelte";
  let tags: string[] = $state([]);
  const handleClick = () => {
    alert(`Submitted: ${tags}`);
  };
</script>

<form>
  <Tags class="mt-5 mb-3" bind:value={tags} />
  {#if tags.length > 0}
    <pre>{JSON.stringify(tags, null, 2)}</pre>
  {/if}
  <Button onclick={handleClick}>Submit</Button>
</form>
```

## See also

- [Input field](https://flowbite-svelte.com/llm/forms/input-field.md)
- [Floating label](https://flowbite-svelte.com/llm/forms/floating-label.md)
- [Tags](https://flowbite-svelte.com/llm/extend/tags.md)

## Component data

### Tags

#### Types

[TagsProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L904)

#### Props

- value: $bindable([])
- itemClass
- spanClass
- placeholder: "Enter tags"
- class: className
- closeClass
- inputClass
- closeBtnSize: "xs"

