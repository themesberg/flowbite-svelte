# Svelte Label - Flowbite


## Label

Use the `Label` component when you need to add a label.

```svelte
<script>
  import { Label, Checkbox } from "flowbite-svelte";
</script>

<Label color="red" class="mt-4 flex items-center font-bold italic">
  <Checkbox divClass="me-2" /> Your Label
</Label>
```

## Component data

### Label

#### Types

[LabelProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L783)

#### Props

- children
- color: "gray"
- show: true
- class: className


### Label styling

- Use the `class` prop to overwrite `defaultClass`.

<CompoAttributesViewer {components}/>
