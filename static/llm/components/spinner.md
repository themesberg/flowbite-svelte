# Svelte Spinner - Flowbite


The spinner component can be used as a loading indicator which comes in multiple colors, sizes, and styles separately or inside elements such as buttons to improve the user experience whenever data is being fetched from your server.

## Setup

```svelte
<script lang="ts">
  import { Spinner } from "flowbite-svelte";
</script>
```

## Default spinner

Use the following SVG element to show a loading animation:

```svelte
<script lang="ts">
  import { Spinner } from "flowbite-svelte";
</script>

<Spinner />
```

## Spinner Type

The Spinner component offers five animation types: default (rotating ring), dots (pulsing circles), bars (vertical waves), pulse (expanding ripples), and orbit (synchronized rotating dots).

```svelte
<script lang="ts">
  import { Spinner } from "flowbite-svelte";
</script>

<Spinner type="default" color="primary" />
<Spinner type="dots" color="emerald" />
<Spinner type="bars" color="blue" />
<Spinner type="orbit" color="rose" />
<Spinner type="pulse" color="green" />
```

## Colors

You can change the colors of the spinner element using the `color` prop.

```svelte
<script lang="ts">
  import { Spinner } from "flowbite-svelte";
</script>

<Spinner />
<Spinner color="gray" />
<Spinner color="green" />
<Spinner color="red" />
<Spinner color="yellow" />
<Spinner color="pink" />
<Spinner color="purple" />
```

## Sizes

Change the size of the spinner component using the `size` prop.

```svelte
<script lang="ts">
  import { Spinner } from "flowbite-svelte";
</script>

<Spinner size="4" />
<Spinner size="6" />
<Spinner size="8" />
```

## Alignment

Because the spinner component is an inline HTML element it can easily be aligned on the left, center, or right side using the `text-{left|center|right}` utility classes:

```svelte
<script lang="ts">
  import { Spinner } from "flowbite-svelte";
</script>

<div class="text-left"><Spinner /></div>
<div class="text-center"><Spinner /></div>
<div class="text-right"><Spinner /></div>
```

## Buttons

The spinner component can also be used inside elements such as buttons when submitting form data:

```svelte
<script lang="ts">
  import { Spinner, Button } from "flowbite-svelte";
</script>

<div class="flex flex-wrap items-center gap-2">
  <Button>
    <Spinner class="me-3" size="4" color="blue" />
    Loading ...
  </Button>
  <Button outline color="gray">
    <Spinner class="me-3" size="4" />
    Loading ...
  </Button>
</div>
```

## Component data

### Spinner

#### Types

[SpinnerProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1555)

#### Props

- type: "default"
- color: "primary"
- size: "8"
- class: className
- currentFill: "inherit"
- currentColor: "currentColor"


## References

- [Flowbite Spinner (Loader)](https://flowbite.com/docs/components/spinner/)
