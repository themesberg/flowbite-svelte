---
layout: componentLayout
title: Svelte Button Toggle
breadcrumb_title: Button toggle
component_title: Button toggle
dir: Extend
description: Use the button toggle to toggle on/off with the appearance of a button. These toggles can be configured to behave as either radio-buttons or checkboxes
---

<script lang="ts">
  import { TableProp, TableDefaultRow, CompoAttributesViewer, Seealso, GitHubCompoLinks, LlmLink } from '../../utils'
  import { P, A } from '$lib'

  const components = 'ButtonToggle, ButtonToggleGroup'
  const relatedLinks = ['/docs/extend/button-toggle','/docs/components/button-group' ,'/docs/components/list-group','/docs/forms/radio#radiobutton' , '/docs/forms/checkbox#checkboxbutton'];
</script>

## Setup

```svelte example hideOutput
<script lang="ts">
  import { ButtonToggleGroup, ButtonToggle } from "flowbite-svelte";
</script>
```

## Default single and multiple

```svelte example class="flex flex-col space-y-4"
{#include Default.svelte}
```

## Controlled Component with Initial State

Pass the `value` prop to `ButtonToggleGroup` to enable initial selections and external state control. Set `singleValue = "two"` or `multiValues = ["one", "three"]` before rendering, and the buttons will reflect these selections immediately without manually managing each button's `selected` prop.

```svelte example class="flex flex-col space-y-4"
{#include InitialValue.svelte}
```

## Button color

You can use `primary`, `secondary`, `gray`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `emerald`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `fuchsia`, `pink`, `rose`.

```svelte example class="grid grid-col-1 sm:grid-col-2 md:grid-col-3 space-y-4"
{#include ButtonColor.svelte}
```

## Group color

```svelte example class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
{#include GroupColor.svelte}
```

## Rounded size

```svelte example class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
{#include RoundedSize.svelte}
```

## ctxBtnClass, ctxIconClass, class

`ButtonToggle`'s `class` takes precedence over `ctxBtnClass`.

```svelte example class="flex flex-col space-y-4"
{#include Ctx.svelte}
```

## Custom icon with color="none"

```svelte example class="flex flex-col space-y-4"
{#include Custom.svelte}
```

## Disabled

```svelte example class="flex flex-col space-y-4"
{#include Disabled.svelte}
```

## See also

<Seealso links={relatedLinks} />

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {components} dir="forms" />

## GitHub Links

<GitHubCompoLinks {components} dir="extend"/>

## LLM Link

<LlmLink />