<script lang="ts">
  import { slide } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import { Banner, Button, Skeleton, ImagePlaceholder, Label, Radio, type BannerProps } from '$lib';
  import {
    BullhornOutline,
    SalePercentSolid,
    ArrowRightOutline,
    BookOpenSolid,
    BullhornSolid
  } from 'flowbite-svelte-icons';

  const params = { delay: 250, duration: 500, easing: quintOut };

  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  // reactive example
  // position, bannerType, color, class:divClass
  const colors = ['blue', 'gray', 'red', 'green', 'yellow', 'indigo', 'purple', 'pink']
  let position: BannerProps['position'] = $state('sticky');
  const changePosition = () => {
    position = position === 'sticky' ? 'absolute' : 'sticky';
    if ( position === 'sticky'){ bannerType = 'default' };
  }
  let bannerType: BannerProps['bannerType'] = $state('default');
  const changeBannerType = () => {
    bannerType = bannerType === 'default' ? 'cta' : 'default';
    if (bannerType === 'cta'){ position = 'absolute' };
  }
  let color: BannerProps['color'] = $state('gray');
  let bannerClass: BannerProps['class'] = $state('')
  const changeClass = () => {
    bannerClass = bannerClass === '' ? 'my-4' : ''
  }
  let bannerStatus = $state(true)
  const changeStatus = () => {
    bannerStatus = true
  }
</script>

<H1>Banner</H1>
<H2>Setup</H2>

<HighlightCompo code={modules['./md/setup.md'] as string} />

<H2>Default sticky banner</H2>

<CodeWrapper class="relative">
  <Skeleton class="py-4" />
  <ImagePlaceholder class="py-4" />

  <Banner id="default-banner" position="absolute">
    <p
      class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400"
    >
      <span
        class="me-3 inline-flex rounded-full bg-gray-200 p-1 dark:bg-gray-600"
      >
        <BullhornOutline class="h-3 w-3 text-gray-500 dark:text-gray-400" />
        <span class="sr-only">Light bulb</span>
      </span>
      <span>
        New brand identity has been launched for the <a
          href="https://flowbite.com"
          class="decoration-600 dark:decoration-500 inline font-medium text-primary-600 underline decoration-solid underline-offset-2 hover:no-underline dark:text-primary-500"
        >
          Flowbite Library
        </a>
      </span>
    </p>
  </Banner>
</CodeWrapper>

<HighlightCompo code={modules['./md/defaultsticky.md'] as string} />

<H2>Reactive banner</H2>
<CodeWrapper class="relative">
  <div class="h-[600px] md:h-[450px]">
  <Skeleton class="py-4" />
  <ImagePlaceholder class="py-4" />

  <Banner id="sample-banner" {position} {bannerType} {color} class={bannerClass} bind:bannerStatus={bannerStatus}>
    <p
      class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400"
    >
      <span
        class="me-3 inline-flex rounded-full bg-gray-200 p-1 dark:bg-gray-600"
      >
        <BullhornOutline class="h-3 w-3 text-gray-500 dark:text-gray-400" />
        <span class="sr-only">Light bulb</span>
      </span>
      <span>
        New brand identity has been launched for the <a
          href="https://flowbite.com"
          class="decoration-600 dark:decoration-500 inline font-medium text-primary-600 underline decoration-solid underline-offset-2 hover:no-underline dark:text-primary-500"
        >
          Flowbite Library
        </a>
      </span>
    </p>
  </Banner>
  </div>
 <div class="mt-8 space-y-4">
  <div class="flex flex-wrap space-x-4">
    <Label class="w-full mb-4">Change color {color}</Label>
    {#each colors as colorOption}
      <Radio name="color" bind:group={color} value={colorOption}>{colorOption}</Radio>
    {/each}
  </div>
  <Button class="w-48" onclick={changePosition}>Change position</Button>
  <Button class="w-48" color="blue" onclick={changeBannerType}>Change banner type</Button>
  <Button class="w-48" color="green" onclick={changeClass}>{bannerClass? 'Remove class' : 'Add class'}</Button>
  {#if !bannerStatus}
    <Button class="w-48" color="light" onclick={changeStatus}>Open banner</Button>
  {/if}
</div>
</CodeWrapper>

<H2>Bottom banner position</H2>

<CodeWrapper class="relative">
  <Skeleton class="py-4" />
  <ImagePlaceholder class="py-4" />

  <Banner id="bottom-banner" position="absolute" bannerType="bottom">
    <p
      class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400"
    >
      <span
        class="me-3 inline-flex rounded-full bg-gray-200 p-1 dark:bg-gray-600"
      >
        <SalePercentSolid class="h-4 w-4 text-gray-500 dark:text-gray-400" />
        <span class="sr-only">Discount coupon</span>
      </span>
      <span>
        Get 5% commission per sale <a
          href="https://flowbite.com"
          class="ms-0 flex items-center text-sm font-medium text-primary-600 hover:underline md:ms-1 md:inline-flex dark:text-primary-500"
        >
          Become a partner <ArrowRightOutline class="ms-2 h-3 w-3" />
        </a>
      </span>
    </p>
  </Banner>
</CodeWrapper>

<HighlightCompo code={modules['./md/bottombanner.md'] as string} />

<H2>Marketing CTA banner</H2>

<CodeWrapper class="relative">
  <Skeleton class="py-4" />
  <ImagePlaceholder class="py-4" />

  <Banner id="cta-banner" position="absolute" bannerType="cta">
    <a
      href="https://flowbite-svelte.com/"
      class="mb-2 flex items-center border-gray-200 md:mb-0 md:me-4 md:border-e md:pe-4 dark:border-gray-600"
    >
      <img
        src="https://flowbite-svelte.com/images/flowbite-svelte-icon-logo.svg"
        class="me-2 h-6"
        alt="Flowbite Logo"
      />
      <span
        class="self-center whitespace-nowrap text-lg font-semibold dark:text-white"
        >Flowbite</span
      >
    </a>
    <p
      class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400"
    >
      Build websites even faster with components on top of Tailwind CSS
    </p>
  </Banner>
</CodeWrapper>

<HighlightCompo code={modules['./md/marketing.md'] as string} />

<H2>Newsletter sign-up banner</H2>

<CodeWrapper class="relative">
  <Skeleton class="py-4" />
  <ImagePlaceholder class="py-4" />

  <Banner id="signup-banner" position="absolute" bannerType="signup">
    <form action="/" class="flex w-full flex-col items-center md:flex-row">
      <label
        for="email"
        class="mb-2 me-auto flex-shrink-0 text-sm font-medium text-gray-500 md:m-0 md:mb-0 md:me-4 dark:text-gray-400"
      >
        Sign up for our newsletter
      </label>
      <input
        type="email"
        id="email"
        placeholder="Enter your email"
        class="mb-2 block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 md:mb-0 md:me-4 md:w-64 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
        required
      />
      <button
        type="submit"
        class="w-full rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        Subscribe
      </button>
    </form>
  </Banner>
</CodeWrapper>

<HighlightCompo code={modules['./md/newsletter.md'] as string} />

<H2>Informational banner</H2>

<CodeWrapper class="relative">
  <Skeleton class="py-4" />
  <ImagePlaceholder class="py-4" />
  <Banner id="info-banner" position="absolute" bannerType="info">
    {#snippet header()}
      <div class="mb-4 md:mb-0 md:me-4">
        <h2 class="mb-1 text-base font-semibold text-gray-900 dark:text-white">
          Integration is the key
        </h2>
        <p
          class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400"
        >
          You can integrate Flowbite with many tools.
        </p>
      </div>
    {/snippet}
    <a
      href="/"
      class="me-3 inline-flex items-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
    >
      <BookOpenSolid class="me-2 h-3 w-3" />
      Learn more
    </a>
    <a
      href="/"
      class="me-2 inline-flex rounded-lg bg-primary-700 px-3 py-2 text-xs font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
    >
      Get started <ArrowRightOutline class="ms-2 h-3 w-3" />
    </a>
  </Banner>
</CodeWrapper>

<HighlightCompo code={modules['./md/informational.md'] as string} />

<H2>Transition</H2>

<p>
  The `transition` and `params` props allow you to apply transition effects to
  components when they enter or leave the view. Svelte provides built-in
  transitions like `fly`, `slide`, `blur`, `fade`, and `scale`.
</p>

<CodeWrapper class="relative flex flex-col">
  <Skeleton class="py-4" />
  <ImagePlaceholder class="py-4" />

  <Banner id="default-banner" position="absolute" transition={slide} {params}>
    <p
      class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400"
    >
      <span
        class="me-3 inline-flex rounded-full bg-gray-200 p-1 dark:bg-gray-600"
      >
        <BullhornSolid class="h-3 w-3 text-gray-500 dark:text-gray-400" />
        <span class="sr-only">Light bulb</span>
      </span>
      <span>
        New brand identity has been launched for the <a
          href="https://flowbite.com"
          class="decoration-600 dark:decoration-500 inline font-medium text-primary-600 underline decoration-solid underline-offset-2 hover:no-underline dark:text-primary-500"
        >
          Flowbite Library
        </a>
      </span>
    </p>
  </Banner>
</CodeWrapper>
