<script>
  import { Gallery, Button } from '$lib';
  const images = [
    { alt: 'erbology', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg' },
    { alt: 'shoes', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg' },
    { alt: 'small bag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg' },
    { alt: 'plants', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg' },
    { alt: 'watch', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg' },
    { alt: 'shoe', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg' },
    { alt: 'cream', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg' },
    { alt: 'small bag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg' },
    { alt: 'lamp', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg' },
    { alt: 'toiletbag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg' },
    {
      alt: 'playstation',
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg'
    },
    { alt: 'bag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg' }
  ];

  const images1 = [
    { alt: 'erbology', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg' },
    { alt: 'shoes', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg' },
    { alt: 'small bag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg' }
  ];
  const images2 = [
    { alt: 'plants', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg' },
    { alt: 'watch', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg' },
    { alt: 'shoe', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg' }
  ];
  const images3 = [
    { alt: 'cream', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg' },
    { alt: 'small bag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg' },
    { alt: 'lamp', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg' }
  ];
  const images4 = [
    { alt: 'toiletbag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg' },
    {
      alt: 'playstation',
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg'
    },
    { alt: 'bag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg' }
  ];
  const image5 = {
    alt: 'erbology',
    src: 'https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg'
  };
  const images6 = [
    { alt: 'shoes', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg' },
    { alt: 'small bag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg' },
    { alt: 'plants', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg' },
    { alt: 'watch', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg' },
    { alt: 'shoe', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg' }
  ];
  const images7 = [
    { alt: 'shoes', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg' },
    { alt: 'small bag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg' },
    { alt: 'plants', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg' },
    { alt: 'watch', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg' }
  ];
  const images8 = [
    { alt: 'erbology', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg' },
    { alt: 'shoes', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg' },
    { alt: 'small bag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg' },
    { alt: 'plants', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg' },
    { alt: 'watch', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg' },
    { alt: 'shoe', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg' },
    { alt: 'cream', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg' },
    { alt: 'small bag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg' },
    { alt: 'lamp', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg' },
    { alt: 'toiletbag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg' },
    {
      alt: 'playstation',
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg'
    },
    { alt: 'bag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg' }
  ];
  const images9 = [
    { alt: 'shoes', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg' },
    { alt: 'small bag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg' },
    { alt: 'plants', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg' },
    { alt: 'watch', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg' },
    { alt: 'shoe', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg' }
  ];

  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  const modules = import.meta.glob('./md/*.md', { query: '?raw', import: 'default', eager: true });
</script>

<H1>Gallery</H1>

<H2>Setup</H2>

<HighlightCompo code={modules['./md/setup.md']} />

<H2>Default gallery</H2>
<CodeWrapper>
  <Gallery items={images} divclass="gap-4 grid-cols-2 md:grid-cols-3" />
</CodeWrapper>

<HighlightCompo code={modules['./md/default-gallery.md']} />

<H2>Mansory grid</H2>

<CodeWrapper>
  <Gallery divclass="gap-4 grid-cols-2 md:grid-cols-4">
    <!-- Safari needs gap -->
    <Gallery items={images1} divclass="gap-4" />
    <Gallery items={images2} />
    <Gallery items={images3} />
    <Gallery items={images4} />
  </Gallery>
</CodeWrapper>

<HighlightCompo code={modules['./md/mansory-grid.md']} />

<H2>Featured image</H2>
<CodeWrapper>
  <Gallery divclass="gap-4">
    <img src={image5.src} alt={image5.alt} class="h-auto max-w-full rounded-lg" />
    <!-- Safari needs gap -->
    <Gallery divclass="grid-cols-5 gap-4" items={images6} />
  </Gallery>
</CodeWrapper>

<HighlightCompo code={modules['./md/featured-image.md']} />

<H2>Quad gallery</H2>
<CodeWrapper>
  <Gallery divclass="gap-2 grid-cols-2" items={images7} />
</CodeWrapper>

<HighlightCompo code={modules['./md/quad-gallery.md']} />

<H2>Gallery with tag filters</H2>
<CodeWrapper>
  <div class="mx-auto mb-3 flex flex-wrap items-center justify-center gap-3 py-4 md:py-8">
    <Button pill size="xl" outline>All categories</Button>
    <Button pill size="xl" color="alternative">Shoes</Button>
    <Button pill size="xl" color="alternative">Bags</Button>
    <Button pill size="xl" color="alternative">Electronics</Button>
    <Button pill size="xl" color="alternative">Gaming</Button>
  </div>

  <Gallery items={images8} divclass="gap-4 grid-cols-2 md:grid-cols-3" />
</CodeWrapper>

<HighlightCompo code={modules['./md/gallery-with-tag-filters.md']} />

<H2>Heterogeneous gallery</H2>
<CodeWrapper>
  <Gallery divclass="gap-4 grid-cols-2">
    <img
      src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
      alt="shoas"
      class="max-w- h-auto rounded-lg"
    />
    <div
      class="max-w- flex h-auto items-center justify-center rounded-lg bg-red-300 text-6xl font-extrabold"
    >
      Sale
    </div>
    <div
      class="max-w- flex h-auto items-center justify-center rounded-lg bg-blue-300 text-6xl font-extrabold"
    >
      Sale
    </div>
    <img
      alt="plants"
      src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
      class="max-w- h-auto rounded-lg"
    />
  </Gallery>
</CodeWrapper>

<HighlightCompo code={modules['./md/heterogenuous-gallery.md']} />

<H2>Custom image rendering</H2>
<CodeWrapper>
  {#snippet figure(item)}
    <div class="p-1 ring-4 ring-red-600 dark:ring-red-400">
      <img src={item.src} alt={item.alt} class="h-auto max-w-full" />
    </div>
  {/snippet}

  <Gallery divclass="gap-4 grid-cols-3">
    {#each images9 as item}
      {@render figure(item)}
    {/each}
  </Gallery>
</CodeWrapper>

<HighlightCompo code={modules['./md/custom-image-rendering.md']} />
