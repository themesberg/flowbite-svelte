---
layout: componentLayout
title: Svelte Close Button - Flowbite
breadcrumb_title: Svelte Close Button - Flowbite
component_title: Close button
dir: Utilities
description: Get started with the CloseButton components to hide a target element using Svelte interactivity
---

<script>
	import { TableProp, TableDefaultRow, GitHubSourceList, CompoAttributesViewer, Seealso } from '../../utils';
	import { A } from '$lib';

  const components = 'CloseButton'

	let divClass = 'w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4';
	let theadClass = 'text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white';

  const relatedLinks = ['/docs/components/buttons','/docs/components/button-group' ,'/docs/components/list-group','/docs/utilities/close-button','/docs/forms/radio#radiobutton' , '/docs/forms/checkbox#checkboxbutton'];
</script>

## CloseButton

Use `CloseButton` component to close a component.

```svelte example
{#include Default.svelte}
```

## See also

<Seealso links={relatedLinks} />

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {components}/>
