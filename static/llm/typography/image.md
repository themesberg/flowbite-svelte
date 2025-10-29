# Svelte Images - Flowbite


Get started with a collection of responsive image components coded with the utility classes from Tailwind CSS that you can use inside articles, cards, sections, and other components based on multiple styles, sizes, layouts, and hover animations.

## Setup

```html
<script lang="ts">
  import { Img } from "flowbite-svelte";
</script>
```

## Default image

Use this example to show the a responsive image that won’t grow beyond the maximum original width.

```svelte
<script lang="ts">
  import { Img } from "flowbite-svelte";
</script>

<Img src="/images/examples/image-1@2x.jpg" alt="sample 1" />
```

## Image caption

This example can be used to add a caption for the image often used inside articles. <Span underline class="decoration-primary-500">Warning: the caption is using @html.</Span>

```svelte
<script lang="ts">
  import { Img } from "flowbite-svelte";
</script>

<Img src="/images/examples/image-1@2x.jpg" alt="sample 1" caption="Image caption" />
```

## Rounded corners

Apply rounded corners to the image by using the specific utility classes from Tailwind CSS.

### Border radius

Use this example to apply rounded corners to the image by using the rounded-size class where the size can be anything from small to extra large.

```svelte
<script lang="ts">
  import { Img } from "flowbite-svelte";
</script>

<Img src="/images/examples/image-1@2x.jpg" alt="sample 1" class="max-w-lg rounded-lg" />
```

### Full circle

Use this example to mask the image inside a circle using the rounded-full utility class from Tailwind CSS.

```svelte
<script lang="ts">
  import { Img } from "flowbite-svelte";
</script>

<Img src="/images/examples/image-4@2x.jpg" alt="sample 1" class="h-96 w-96 rounded-full" />
```

## Image shadow

This example can be used to show a shadow effect for the image using the shadow-size utility class.

```svelte
<script lang="ts">
  import { Img } from "flowbite-svelte";
</script>

<Img src="/images/examples/image-2@2x.jpg" alt="sample 1" class="max-w-xl shadow-xl dark:shadow-gray-800" />
```

## Retina-ready

Use the srcset attribute to set Retina-ready images with double resolution.

```svelte
<script lang="ts">
  import { Img } from "flowbite-svelte";
</script>

<Img srcset="/images/examples/image-1.jpg 1x, /images/examples/image-1@2x.jpg 2x" alt="sample 1" class="w-full max-w-xl rounded-lg" />
```

## Image card

Use this example to make the image a card item with a link and a short text description.

```svelte
<script lang="ts">
  import { Img } from "flowbite-svelte";
</script>

<Img
  src="/images/examples/content-gallery-3.png"
  alt="sample 1"
  class="rounded-lg"
  classes={{ figure: "relative", caption: "absolute bottom-6 px-4 text-lg text-white" }}
  caption="Do you want to get notified when a new component is added to Flowbite?"
  effect="grayscale"
  size="sm"
/>
```

## Image effects

Use `effect="grayscale"|"blur"|"invert"|"sepia"|"saturate"|"hue-rotate"` props to change the appearances of the image when being hovered.

```svelte
<script lang="ts">
  import { Img, img, Radio, Label, type ImgProps } from "flowbite-svelte";

  const effects = Object.keys(img.variants.effect);
  let imgEffect: ImgProps["effect"] = $state(undefined);
</script>

<div class="flex flex-col items-center">
  <Img src="/images/examples/content-gallery-3.png" alt="sample 1" size="md" effect={imgEffect} />
  <div class="mt-4 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Effect</Label>
    {#each effects as effect}
      <Radio class="my-1" classes={{ label: "w-24" }} name="img_effect" bind:group={imgEffect} value={effect}>{effect}</Radio>
    {/each}
  </div>
</div>
```

## Alignment

Align the image component to the left, center or right side of the document page using the `align="left"|"center"|"right"` props.

By default, the image component will be aligned to the left side of the page.

```svelte
<script lang="ts">
  import { Img, img, Radio, Label, type ImgProps } from "$lib";

  const alignments = Object.keys(img.variants.align);
  let imgAlign: ImgProps["align"] = $state(undefined);
</script>

<div class="flex flex-col">
  <Img src="/images/examples/image-1@2x.jpg" size="sm" align={imgAlign} alt="sample 1" />

  <div class="mt-4 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Alignment</Label>
    {#each alignments as option}
      <Radio class="my-1" classes={{ label: "w-16" }} name="alignment" bind:group={imgAlign} value={option}>{option}</Radio>
    {/each}
  </div>
</div>
```

## Sizes

Set the `size="xs"|"sm"|"md"|"lg"|"xl"|"2xl"|"full"|"none"` props to change the size of image.

```svelte
<script lang="ts">
  import { Img, img, Radio, Label, type ImgProps } from "flowbite-svelte";

  const sizes = Object.keys(img.variants.size);
  let imgSize: ImgProps["size"] = $state("md");
</script>

<div class="flex flex-col items-center">
  <div class="md:h-[500px]">
    <Img src="/images/examples/image-1@2x.jpg" size={imgSize} class="mx-auto" alt="sample 1" />
  </div>
  <div class="mt-4 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Size</Label>
    {#each sizes as option}
      <Radio class="my-1" classes={{ label: "w-16" }} name="img_size" bind:group={imgSize} value={option}>{option}</Radio>
    {/each}
  </div>
</div>
```

## Enhanced image

**Warning: ** Since `@sveltejs/enhanced-img` uses pre-1.0 versioning and may introduce breaking changes with every minor version release.

Please follow how to set up `@sveltejs/enhanced-img` at https://svelte.dev/docs/kit/images#sveltejs-enhanced-img and install `v0.6.1`.

Use this example for an enhanced image. In this example an image is stored in `src/images` directory.

```svelte
<script lang="ts">
  import { Img } from "flowbite-svelte";
</script>

<Img caption="Default enhanced image" size="md" align="center">
  <enhanced:img src="/src/images/content-gallery-3.png" alt="Default enhanced example" />
</Img>
```

Use `effect`, `size`, `align` props for enhanced image as the following:

```svelte
<script lang="ts">
  import { Img, img, Radio, Label, type ImgProps } from "flowbite-svelte";

  const effects = Object.keys(img.variants.effect);
  const sizes = Object.keys(img.variants.size);
  const aligns = Object.keys(img.variants.align);
  let imgEffect: ImgProps["effect"] = $state("grayscale");
  let imgSize: ImgProps["size"] = $state("md");
  let imgAlign: ImgProps["align"] = $state("center");
</script>

<div class="flex flex-col">
  <div class="md:h-[500px]">
    <Img caption="Effect with enhanced image" size={imgSize} align={imgAlign} effect={imgEffect}>
      {#snippet children({ class: imgClass, restProps })}
        <enhanced:img src="/src/images/content-gallery-3.png" alt="Sepia effect with enhanced" class={imgClass} {...restProps} />
      {/snippet}
    </Img>
  </div>
  <div class="mt-4 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Effect</Label>
    {#each effects as effect}
      <Radio class="my-1" classes={{ label: "w-24" }} name="img_effect" bind:group={imgEffect} value={effect}>{effect}</Radio>
    {/each}
  </div>
  <div class="mt-4 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Size</Label>
    {#each sizes as option}
      <Radio class="my-1" classes={{ label: "w-16" }} name="img_size" bind:group={imgSize} value={option}>{option}</Radio>
    {/each}
  </div>
  <div class="mt-4 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Alignment</Label>
    {#each aligns as option}
      <Radio class="my-1" classes={{ label: "w-16" }} name="alignment" bind:group={imgAlign} value={option}>{option}</Radio>
    {/each}
  </div>
</div>
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {components}/>

## References
