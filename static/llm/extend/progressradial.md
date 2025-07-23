# Svelte Progressradial


## Setup

Import the `Progressradial` component in a script tag.

```svelte
<script>
  import { Progressradial } from "flowbite-svelte";
</script>
```

## Progress

```svelte
<script>
  import { Progressradial } from "flowbite-svelte";
</script>

<Progressradial progress={20} />
<Progressradial progress="40" />
<Progressradial progress={65} />
<Progressradial progress="83" />
```

## Colors and labelOutside

```svelte
<script>
  import { Progressradial } from "flowbite-svelte";
</script>

<Progressradial progress={65} labelOutside="default" />
<Progressradial color="secondary" progress="65" labelOutside="secondary" />
<Progressradial color="gray" progress="65" labelOutside="gray" />
<Progressradial color="red" progress="65" labelOutside="red" />
<Progressradial color="orange" progress="65" labelOutside="orange" />
<Progressradial color="amber" progress="65" labelOutside="amber" />
<Progressradial color="yellow" progress="65" labelOutside="yellow" />
<Progressradial color="lime" progress="65" labelOutside="lime" />
<Progressradial color="green" progress="65" labelOutside="green" />
<Progressradial color="emerald" progress="65" labelOutside="emerald" />
<Progressradial color="teal" progress="65" labelOutside="teal" />
<Progressradial color="cyan" progress="65" labelOutside="cyan" />
<Progressradial color="sky" progress="65" labelOutside="sky" />
<Progressradial color="blue" progress="65" labelOutside="blue" />
<Progressradial color="indigo" progress="65" labelOutside="indigo" />
<Progressradial color="violet" progress="65" labelOutside="violet" />
<Progressradial color="purple" progress="65" labelOutside="purple" />
<Progressradial color="fuchsia" progress="65" labelOutside="fuchsia" />
<Progressradial color="pink" progress="65" labelOutside="pink" />
<Progressradial color="rose" progress="65" labelOutside="rose" />
```

## Radius

```svelte
<script>
  import { Progressradial } from "flowbite-svelte";
</script>

<Progressradial radius={10} />
<Progressradial radius={15} />
<Progressradial radius={20} />
<Progressradial radius={25} />
```

## Thickness

```svelte
<script>
  import { Progressradial } from "flowbite-svelte";
</script>

<Progressradial />
<Progressradial thickness={5} />
<Progressradial thickness={10} />
<Progressradial thickness={15} />
```

## Size

```svelte
<script>
  import { Progressradial } from "flowbite-svelte";
</script>

<Progressradial size="w-20 h-20" />
<Progressradial size="w-28 h-28" />
<Progressradial size="w-32 h-32" />
<Progressradial size="w-40 h-40" />
```

## Animation

```svelte
<script>
  import { Progressradial, Button } from "flowbite-svelte";
  import { sineOut } from "svelte/easing";
  let progress = $state(45);
</script>

<Progressradial {progress} animate precision={1} labelOutside="Animation" labelInside tweenDuration={1000} easing={sineOut} />
<Button onclick={() => (progress = `${Math.round(Math.random() * 100)}`)} class="mx-auto mt-8 w-24">Randomize</Button>
```

## Starting position

```svelte
<script>
  import { Progressradial } from "flowbite-svelte";
</script>

<Progressradial />
<Progressradial progress={50} startingPosition="right" />
<Progressradial progress={50} startingPosition="bottom" />
<Progressradial progress={50} startingPosition="left" />
```

## See also

- [Progress](https://flowbite-svelte.com/llm/components/progress.md)
- [Progressradial](https://flowbite-svelte.com/llm/extend/progressradial.md)

## Component data

### Progressradial

#### Types

[ProgressradialProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1218)

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

