# Svelte Progress Bar - Flowbite


The progress bar component can be used as an indicator to show the completion rate of data sets or it can be used as an animated loader component. There are multiple sizes, colors, and styles available.

## Setup

Import the `Progressbar` component in a script tag.

```svelte
<script>
  import { Progressbar } from "flowbite-svelte";
</script>
```

## Default progress bar

Use the following example of a progress bar element to show a completion rate of 45% by using an inline style and the utility classes from Tailwind CSS.

```svelte
{#include Default.svelte}
```

## Progressradial

Please see more details on [the extend page](/extend/progressradial).

```svelte
{#include Progressradial.svelte}
```

## Sizes

Use the `size` prop to change the size of a progress bar.

```svelte
{#include Sizes.svelte}
```

## With label inside

Use the `labelInside` prop to add the progress in a progress bar.

```svelte
{#include LabelInside.svelte}
```

## With label outside

Use the `labelOutside` prop to add the progress outside of a progress bar.

```svelte
{#include LabelOutside.svelte}
```

## Colors

Use the `color` prop to change the color of a progress bar.

```svelte
{#include Colors.svelte}
```

## Custom style

Use `labelInsideDiv` prop to style your progressbar.

```svelte
{#include CustomStyle.svelte}
```

## Animation

By default progress bar has animation disabled, you can activate with `animate`, you can custumize with `tweenDuration` and `easing`. By changing `precision` you can custumize the precision inside the progress bar.

```svelte
{#include Animation.svelte}
```

## Custom color

Use the `labelInsideDiv` prop to change the color of the progress bar.

```svelte
{#include CustomColor.svelte}
```

## See also

- [Progress](https://flowbite-svelte.com/llm/components/progress.md)
- [Progressradial](https://flowbite-svelte.com/llm/extend/progressradial.md)

## Component data

### Progressbar

#### Types

[ProgressbarProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1208)

#### Props

- progress: "45"
- precision: 0
- tweenDuration: 400
- animate: false
- size: "h-2.5"
- labelInside: false
- labelOutside: ""
- easing: cubicOut
- color: "primary"
- class: className
- classes

### Progressradial

#### Types

[ProgressradialProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1219)

#### Props

- progress: 45
- radius: 42
- startingPosition: "top"
- precision: 0
- tweenDuration: 400
- animate: false
- size: "h-24 w-24"
- thickness: 4
- labelInside: false
- labelOutside: ""
- easing: cubicOut
- color: "primary"
- class: className
- classes


## References

- [Flowbite Progress Bar](https://flowbite.com/docs/components/progress/)


