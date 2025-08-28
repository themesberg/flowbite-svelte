# Svelte Close Button - Flowbite


<script lang="ts">
	import { TableProp, TableDefaultRow, GitHubSourceList, CompoAttributesViewer, Seealso } from '../../utils';
	import { A } from '$lib';

  const components = 'CloseButton'

	let divClass = 'w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4';
	let theadClass = 'text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white';

  const relatedLinks = ['/docs/components/buttons','/docs/components/button-group' ,'/docs/components/list-group','/docs/utilities/close-button','/docs/forms/radio#radiobutton' , '/docs/forms/checkbox#checkboxbutton'];
</script>

## CloseButton

Use `CloseButton` component to close a component.

```svelte
{#include Default.svelte}
```

## See also

<Seealso links={relatedLinks} />

## Component data

### CloseButton

#### Types

[CloseButtonProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L112)

#### Props

- children
- color: "gray"
- onclick: onclickorg
- name: "Close"
- ariaLabel
- size: "md"
- class: className
- svgClass

