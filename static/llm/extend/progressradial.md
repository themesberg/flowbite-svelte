# Svelte Progressradial


## Setup

Import the `Progressradial` component in a script tag.

```svelte
<script lang="ts">
  import { Progressradial } from "flowbite-svelte";
</script>
```

## Progress

```svelte
<script lang="ts">
  import { Progressradial } from "flowbite-svelte";
</script>

<Progressradial progress={20} />
<Progressradial progress="40" />
<Progressradial progress={65} />
<Progressradial progress="83" />
```

## Colors and labelOutside

```svelte
<script lang="ts">
  import { Progressradial } from "flowbite-svelte";
</script>

<Progressradial progress={65} labelOutside="default" classes={{ outside: "dark:text-white" }} />
<Progressradial color="secondary" progress="65" labelOutside="secondary" classes={{ outside: "dark:text-white" }} />
<Progressradial color="gray" progress="65" labelOutside="gray" classes={{ outside: "dark:text-white" }} />
<Progressradial color="red" progress="65" labelOutside="red" classes={{ outside: "dark:text-white" }} />
<Progressradial color="orange" progress="65" labelOutside="orange" classes={{ outside: "dark:text-white" }} />
<Progressradial color="amber" progress="65" labelOutside="amber" classes={{ outside: "dark:text-white" }} />
<Progressradial color="yellow" progress="65" labelOutside="yellow" classes={{ outside: "dark:text-white" }} />
<Progressradial color="lime" progress="65" labelOutside="lime" classes={{ outside: "dark:text-white" }} />
<Progressradial color="green" progress="65" labelOutside="green" classes={{ outside: "dark:text-white" }} />
<Progressradial color="emerald" progress="65" labelOutside="emerald" classes={{ outside: "dark:text-white" }} />
<Progressradial color="teal" progress="65" labelOutside="teal" classes={{ outside: "dark:text-white" }} />
<Progressradial color="cyan" progress="65" labelOutside="cyan" classes={{ outside: "dark:text-white" }} />
<Progressradial color="sky" progress="65" labelOutside="sky" classes={{ outside: "dark:text-white" }} />
<Progressradial color="blue" progress="65" labelOutside="blue" classes={{ outside: "dark:text-white" }} />
<Progressradial color="indigo" progress="65" labelOutside="indigo" classes={{ outside: "dark:text-white" }} />
<Progressradial color="violet" progress="65" labelOutside="violet" classes={{ outside: "dark:text-white" }} />
<Progressradial color="purple" progress="65" labelOutside="purple" classes={{ outside: "dark:text-white" }} />
<Progressradial color="fuchsia" progress="65" labelOutside="fuchsia" classes={{ outside: "dark:text-white" }} />
<Progressradial color="pink" progress="65" labelOutside="pink" classes={{ outside: "dark:text-white" }} />
<Progressradial color="rose" progress="65" labelOutside="rose" classes={{ outside: "dark:text-white" }} />
```

## Radius

```svelte
<script lang="ts">
  import { Progressradial } from "flowbite-svelte";
</script>

<Progressradial radius={10} />
<Progressradial radius={15} />
<Progressradial radius={20} />
<Progressradial radius={25} />
```

## Thickness

```svelte
<script lang="ts">
  import { Progressradial } from "flowbite-svelte";
</script>

<Progressradial />
<Progressradial thickness={5} />
<Progressradial thickness={10} />
<Progressradial thickness={15} />
```

## Size

```svelte
<script lang="ts">
  import { Progressradial } from "flowbite-svelte";
</script>

<Progressradial size="w-20 h-20" />
<Progressradial size="w-28 h-28" />
<Progressradial size="w-32 h-32" />
<Progressradial size="w-40 h-40" />
```

## Animation

```svelte
<script lang="ts">
  import { Progressradial, Button } from "flowbite-svelte";
  import { sineOut } from "svelte/easing";
  let progress = $state(45);
</script>

<Progressradial {progress} animate precision={1} labelOutside="Animation" labelInside tweenDuration={1000} easing={sineOut} classes={{ outside: "dark:text-white", label: "dark:text-white" }} />
<Button onclick={() => (progress = Math.round(Math.random() * 100))} class="mx-auto mt-8 w-24">Randomize</Button>
```

## Starting position

```svelte
<script lang="ts">
  import { Progressradial } from "flowbite-svelte";
</script>

<Progressradial />
<Progressradial progress={50} startingPosition="right" />
<Progressradial progress={50} startingPosition="bottom" />
<Progressradial progress={50} startingPosition="left" />
```

## See also

<Seealso links={relatedLinks} />

## Component data

### Progressradial

#### Types

[ProgressradialProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1264)

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

