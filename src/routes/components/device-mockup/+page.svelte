<script>
  import { DeviceMockup } from '$lib';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  const modules = import.meta.glob('./md/*.md', { query: '?raw', import: 'default', eager: true });
</script>

<H1>Device mockup</H1>

<H2>Setup</H2>
<HighlightCompo code={modules['./md/setup.md']} />

<H2>Default mockup</H2>
<CodeWrapper>
  <DeviceMockup>
    <img
      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png"
      class="h-[572px] w-[272px] dark:hidden"
      alt="default example 1"
    />
    <img
      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png"
      class="hidden h-[572px] w-[272px] dark:block"
      alt="default example 2"
    />
  </DeviceMockup>
</CodeWrapper>
<HighlightCompo code={modules['./md/default-mockup.md']} />

<H2>iPhone 12 mockup (iOS)</H2>
<CodeWrapper>
  <DeviceMockup device="ios">
    <img
      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-light.png"
      class="h-[572px] w-[272px] dark:hidden"
      alt="ios example 1"
    />
    <img
      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-dark.png"
      class="hidden h-[572px] w-[272px] dark:block"
      alt="ios example 2"
    />
  </DeviceMockup>
</CodeWrapper>
<HighlightCompo code={modules['./md/iphone-12-mockup.md']} />

<H2>Google Pixel mockup (Android)</H2>
<CodeWrapper>
  <DeviceMockup device="android">
    <img
      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png"
      class="h-[572px] w-[272px] dark:hidden"
      alt="android example 1"
    />
    <img
      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png"
      class="hidden h-[572px] w-[272px] dark:block"
      alt="android example 2"
    />
  </DeviceMockup>
</CodeWrapper>
<HighlightCompo code={modules['./md/google-pixel-mockup.md']} />

<H2>Tablet mockup</H2>
<CodeWrapper>
  <DeviceMockup device="tablet">
    <img
      src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image.png"
      class="h-[426px] dark:hidden md:h-[654px]"
      alt="tablet example 1"
    />
    <img
      src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image-dark.png"
      class="hidden h-[426px] dark:block md:h-[654px]"
      alt="tablet example 2"
    />
  </DeviceMockup>
</CodeWrapper>
<HighlightCompo code={modules['./md/tablet-mockup.md']} />

<H2>Laptop mockup</H2>
<CodeWrapper>
  <DeviceMockup device="laptop">
    <img
      src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen.png"
      class="h-[156px] w-full rounded-xl dark:hidden md:h-[278px]"
      alt="laptop example 1"
    />
    <img
      src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen-dark.png"
      class="hidden h-[156px] w-full rounded-lg dark:block md:h-[278px]"
      alt="laptop example 2"
    />
  </DeviceMockup>
</CodeWrapper>
<HighlightCompo code={modules['./md/laptop-mockup.md']} />

<H2>Desktop mockup</H2>
<CodeWrapper>
  <DeviceMockup device="desktop">
    <img
      src="https://flowbite.s3.amazonaws.com/docs/device-mockups/screen-image-imac.png"
      class="h-[140px] w-full rounded-xl dark:hidden md:h-[262px]"
      alt="desktop example 1"
    />
    <img
      src="https://flowbite.s3.amazonaws.com/docs/device-mockups/screen-image-imac-dark.png"
      class="hidden h-[140px] w-full rounded-xl dark:block md:h-[262px]"
      alt="desktop example 2"
    />
  </DeviceMockup>
</CodeWrapper>
<HighlightCompo code={modules['./md/desktop-mockup.md']} />

<H2>Smartwatch mockup</H2>
<CodeWrapper>
  <DeviceMockup device="smartwatch">
    <img
      src="https://flowbite.s3.amazonaws.com/docs/device-mockups/watch-screen-image.png"
      class="w-[188px h-[193px] dark:hidden"
      alt="smartwatch example 1"
    />
    <img
      src="https://flowbite.s3.amazonaws.com/docs/device-mockups/watch-screen-image-dark.png"
      class="hidden h-[193px] w-[188px] dark:block"
      alt="smartwatch example 2"
    />
  </DeviceMockup>
</CodeWrapper>
<HighlightCompo code={modules['./md/smartwatch-mockup.md']} />
