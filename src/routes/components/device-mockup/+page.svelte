<script>
    import { DeviceMockup } from '$lib';
	import HighlightCompo from '../../utils/HighlightCompo.svelte';
	import CodeWrapper from '../../utils/CodeWrapper.svelte';
	import H1 from '../../utils/H1.svelte';
	import H2 from '../../utils/H2.svelte';
	const modules = import.meta.glob('./md/*.md', { as: 'raw', eager: true });
</script>

<H1>Device mockup</H1>

<H2>Setup</H2>
<HighlightCompo code={modules['./md/setup.md']} />

<H2>Default mockup</H2>
<CodeWrapper>
<DeviceMockup>
    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png" class="dark:hidden w-[272px] h-[572px]" alt="default example 1" />
    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png" class="hidden dark:block w-[272px] h-[572px]" alt="default example 2" />
</DeviceMockup>
</CodeWrapper>
<HighlightCompo code={modules['./md/default-mockup.md']} />

<H2>iPhone 12 mockup (iOS)</H2>
<CodeWrapper>
    <DeviceMockup device="ios">
        <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-light.png" class="dark:hidden w-[272px] h-[572px]" alt="ios example 1" />
        <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-dark.png" class="hidden dark:block w-[272px] h-[572px]" alt="ios example 2" />
    </DeviceMockup>
</CodeWrapper>
<HighlightCompo code={modules['./md/iphone-12-mockup.md']} />

<H2>Google Pixel mockup (Android)</H2>
<CodeWrapper>
    <DeviceMockup device="android">
        <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png" class="dark:hidden w-[272px] h-[572px]" alt="android example 1" />
        <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png" class="hidden dark:block w-[272px] h-[572px]" alt="android example 2" />
    </DeviceMockup>
</CodeWrapper>
<HighlightCompo code={modules['./md/google-pixel-mockup.md']} />

<H2>Tablet mockup</H2>
<CodeWrapper>
    <DeviceMockup device="tablet">
        <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image.png" class="dark:hidden h-[426px] md:h-[654px]" alt="tablet example 1" />
        <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image-dark.png" class="hidden dark:block h-[426px] md:h-[654px]" alt="tablet example 2" />
    </DeviceMockup>
</CodeWrapper>
<HighlightCompo code={modules['./md/tablet-mockup.md']} />

<H2>Laptop mockup</H2>
<CodeWrapper>
    <DeviceMockup device="laptop">
        <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen.png" class="dark:hidden h-[156px] md:h-[278px] w-full rounded-xl" alt="laptop example 1" />
        <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen-dark.png" class="hidden dark:block h-[156px] md:h-[278px] w-full rounded-lg" alt="laptop example 2" />
    </DeviceMockup>
</CodeWrapper>
<HighlightCompo code={modules['./md/laptop-mockup.md']} />

<H2>Desktop mockup</H2>
<CodeWrapper>
    <DeviceMockup device="desktop">
        <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/screen-image-imac.png" class="dark:hidden h-[140px] md:h-[262px] w-full rounded-xl" alt="desktop example 1" />
        <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/screen-image-imac-dark.png" class="hidden dark:block h-[140px] md:h-[262px] w-full rounded-xl" alt="desktop example 2" />
    </DeviceMockup>
</CodeWrapper>
<HighlightCompo code={modules['./md/desktop-mockup.md']} />

<H2>Smartwatch mockup</H2>
<CodeWrapper>
    <DeviceMockup device="smartwatch">
        <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/watch-screen-image.png" class="dark:hidden h-[193px] w-[188px" alt="smartwatch example 1" />
        <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/watch-screen-image-dark.png" class="hidden dark:block h-[193px] w-[188px]" alt="smartwatch example 2" />
    </DeviceMockup>
</CodeWrapper>
<HighlightCompo code={modules['./md/smartwatch-mockup.md']} />












