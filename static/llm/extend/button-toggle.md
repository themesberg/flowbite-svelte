# Svelte Button Toggle


<script lang="ts">
  import { TableProp, TableDefaultRow, CompoAttributesViewer, Seealso } from '../../utils'
  import { P, A } from '$lib'

  const components = 'ButtonToggle, ButtonToggleGroup'
  const relatedLinks = ['/docs/extend/button-toggle','/docs/components/button-group' ,'/docs/components/list-group','/docs/forms/radio#radiobutton' , '/docs/forms/checkbox#checkboxbutton'];
</script>

## Setup

```svelte
<script lang="ts">
  import { ButtonToggleGroup, ButtonToggle } from "flowbite-svelte";
</script>
```

## Default single and multiple

```svelte
{#include Default.svelte}
```

## Button color

You can use `primary`, `secondary`, `gray`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `emerald`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `fuchsia`, `pink`, `rose`.

```svelte
{#include ButtonColor.svelte}
```

## Group color

```svelte
{#include GroupColor.svelte}
```

## Rounded size

```svelte
{#include RoundedSize.svelte}
```

## ctxBtnClass, ctxIconClass, class

`ButtonToggle`'s `class` takes precedence over `ctxBtnClass`.

```svelte
{#include Ctx.svelte}
```

## Custom icon with color="none"

```svelte
{#include Custom.svelte}
```

## See also

<Seealso links={relatedLinks} />

## Component data

### ButtonToggle

#### Types

[ButtonToggleProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L335)

#### Props

- value
- selected: false
- children
- iconSlot
- color
- class: className
- iconClass
- txtClass
- contentClass
- classes

