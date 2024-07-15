<script lang="ts">
  import { Img, Badge } from '$lib';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  import H3 from '../../utils/H3.svelte';
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<H1>Image</H1>

<p>
  Get started with a collection of responsive image components coded with the
  utility classes from Tailwind CSS that you can use inside articles, cards,
  sections, and other components based on multiple styles, sizes, layouts, and
  hover animations.
</p>

<H2>Setup</H2>

<H2>Default image</H2>

<p>
  Use this example to show the a responsive image that won’t grow beyond the
  maximum original width.
</p>

<CodeWrapper class="flex justify-center">
  <Img src="/images/examples/image-1@2x.jpg" alt="sample 1" />
</CodeWrapper>

<H2>Image caption</H2>

<p>
  This example can be used to add a caption for the image often used inside
  articles.
</p>
<Badge large>Warning: the caption is using @html.</Badge>
<p>
  This example can be used to add a caption for the image often used inside
  articles.
</p>
<Badge large>Warning: the caption is using @html.</Badge>

<CodeWrapper class="flex justify-center">
  <Img
    src="/images/examples/image-1@2x.jpg"
    alt="sample 1"
    caption="Image caption"
  />
</CodeWrapper>

<H2>Rounded corners</H2>

<p>
  Apply rounded corners to the image by using the specific utility classes from
  Tailwind CSS.
</p>

<H3>Border radius</H3>

<p>
  Use this example to apply rounded corners to the image by using the
  rounded-size class where the size can be anything from small to extra large.
</p>

<CodeWrapper class="flex justify-center">
  <Img
    src="/images/examples/image-1@2x.jpg"
    alt="sample 1"
    class="max-w-lg rounded-lg"
  />
</CodeWrapper>

<H3>Full circle</H3>

<p>
  Use this example to mask the image inside a circle using the rounded-full
  utility class from Tailwind CSS.
</p>

<CodeWrapper class="flex justify-center">
  <Img
    src="/images/examples/image-4@2x.jpg"
    alt="sample 1"
    imgClass="h-96"
    class="w-96 rounded-full"
  />
</CodeWrapper>

<H2>Image shadow</H2>

<p>
  This example can be used to show a shadow effect for the image using the
  shadow-size utility class.
</p>

<CodeWrapper class="flex justify-center">
  <Img
    src="/images/examples/image-2@2x.jpg"
    alt="sample 1"
    class="max-w-xl shadow-xl dark:shadow-gray-800"
  />
</CodeWrapper>

<H2>Retina-ready</H2>

<p>
  Use the srcset attribute to set Retina-ready images with double resolution.
</p>

<CodeWrapper class="flex justify-center">
  <Img
    srcset="/images/examples/image-1.jpg 1x, /images/examples/image-1@2x.jpg 2x"
    alt="sample 1"
    class="w-full max-w-xl rounded-lg"
  />
</CodeWrapper>

<H2>Image card</H2>

Use this example to make the image a card item with a link and a short text
description.

<CodeWrapper class="flex justify-center">
  <Img
    src="/images/examples/content-gallery-3.png"
    alt="sample 1"
    class="rounded-lg"
    figClass="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
    captionClass="absolute bottom-6 px-4 text-lg text-white"
    caption="Do you want to get notified when a new component is added to Flowbite?"
  />
</CodeWrapper>

<H2>Image effects</H2>

Use image effects such as grayscale or blur to change the appearances of the
image when being hovered.

<H3>Grayscale</H3>

Use the filter option and apply a grayscale to the image element using the
grayscale class.

<CodeWrapper class="flex justify-center">
  <Img
    src="/images/examples/content-gallery-3.png"
    alt="My gallery"
    class="max-w-lg cursor-pointer rounded-lg grayscale filter transition-all duration-300 hover:grayscale-0"
  />
</CodeWrapper>

<H3>Blur</H3>

Apply a blur by using the blur-size utility class from Tailwind CSS to an image
component.

<CodeWrapper class="flex justify-center">
  <Img
    src="/images/examples/content-gallery-3.png"
    alt="My gallery"
    class="max-w-lg rounded-lg blur-sm transition-all duration-300 hover:blur-none"
  />
</CodeWrapper>

<H2>Alignment</H2>

Align the image component to the left, center or right side of the document page
using margin styles.

<H3>Left</H3>

By default, the image component will be aligned to the left side of the page.

<CodeWrapper>
  <Img src="/images/examples/image-1@2x.jpg" class="max-w-lg" alt="sample 1" />
</CodeWrapper>

<H3>Center</H3>

Horizontally align the image to the center of the page using the `class` class.

<CodeWrapper>
  <Img
    src="/images/examples/image-1@2x.jpg"
    class="mx-auto max-w-lg"
    alt="sample 1"
  />
</CodeWrapper>

<H3>Right</H3>

Use the `ms-auto` class to align the image to the right side of the page.

<CodeWrapper>
  <Img
    src="/images/examples/image-1@2x.jpg"
    class="ms-auto max-w-lg"
    alt="sample 1"
  />
</CodeWrapper>

<H2>Sizes</H2>

Set the size of the image using the w-size and h-size or max-w-size utility
classes from Tailwind CSS to set the width and height of the element.

<H3>Small</H3>

Use the `max-w-xs` class to set a small size of the image.

<CodeWrapper class="flex justify-center">
  <Img src="/images/examples/image-1@2x.jpg" class="max-w-xs" alt="sample 1" />
</CodeWrapper>

<H3>Medium</H3>

Use the `max-w-md` class to set a medium size of the image.

<CodeWrapper class="flex justify-center">
  <Img src="/images/examples/image-1@2x.jpg" class="max-w-md" alt="sample 1" />
</CodeWrapper>

<H3>Large</H3>

Use the max-w-xl class to set a large size of the image.

<CodeWrapper class="flex justify-center">
  <Img src="/images/examples/image-1@2x.jpg" class="max-w-xl" alt="sample 1" />
</CodeWrapper>

<H3>Full width</H3>

Use the max-w-full class to set the full width of the image as long as it
doesn’t become larger than the original source.

<CodeWrapper class="flex justify-center">
  <Img
    src="/images/examples/image-1@2x.jpg"
    class="max-w-full"
    alt="sample 1"
  />
</CodeWrapper>
