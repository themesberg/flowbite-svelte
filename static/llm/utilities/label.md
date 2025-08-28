# Svelte Label - Flowbite


<script lang="ts">
  import { TableProp, TableDefaultRow, GitHubSourceList, CompoAttributesViewer } from '../../utils';
  import { A } from '$lib';

  const components = 'Label'
  let divClass = 'w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4';
  let theadClass = 'text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white';
</script>

## Label

Use the `Label` component when you need to add a label.

```svelte
{#include Default.svelte}
```

## Component data

### Label

#### Types

[LabelProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L807)

#### Props

- children
- color: "gray"
- show: true
- class: className


### Label styling

- Use the `class` prop to overwrite `defaultClass`.

<CompoAttributesViewer {components}/>
