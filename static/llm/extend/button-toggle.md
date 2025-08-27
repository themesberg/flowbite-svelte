# Svelte Button Toggle


## Setup

```svelte
<script>
  import { ButtonToggleGroup, ButtonToggle } from "flowbite-svelte";
</script>
```

## Default single and multiple

```svelte
include Default.svelte}
```

## Button color

You can use `primary`, `secondary`, `gray`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `emerald`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `fuchsia`, `pink`, `rose`.

```svelte
include ButtonColor.svelte}
```

## Group color

```svelte
include GroupColor.svelte}
```

## Rounded size

```svelte
include RoundedSize.svelte}
```

## ctxBtnClass, ctxIconClass, class

`ButtonToggle`'s `class` takes precedence over `ctxBtnClass`.

```svelte
include Ctx.svelte}
```

## Custom icon with color="none"

```svelte
include Custom.svelte}
```

## See also

- [Button toggle](https://flowbite-svelte.com/llm/extend/button-toggle.md)
- [Button group](https://flowbite-svelte.com/llm/components/button-group.md)
- [List group](https://flowbite-svelte.com/llm/components/list-group.md)
- [Radio#radiobutton](https://flowbite-svelte.com/llm/forms/radio#radiobutton.md)
- [Checkbox#checkboxbutton](https://flowbite-svelte.com/llm/forms/checkbox#checkboxbutton.md)

## Component data

### ButtonToggle

#### Types

[ButtonToggleProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L336)

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

