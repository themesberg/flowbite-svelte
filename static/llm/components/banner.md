# Svelte Sticky Banner - Flowbite


Get started with the sticky banner component coded with Tailwind CSS and Flowbite to show marketing, informational and CTA messages to your website visitors fixed to the top or bottom part of the page as the user scroll down the main content area.

Explore the following examples based on various styles, sizes, and positionings to leverage the sticky banner component and increase marketing conversions with a responsive element supporting dark mode.

## Setup

```svelte
<script lang="ts">
  import { Banner } from "flowbite-svelte";
</script>
```

## Default sticky banner

Use this example to show a text message for announcement with a CTA link, an icon element and a close button to dismiss the banner.

```svelte
<script lang="ts">
  import { Banner, Skeleton, ImagePlaceholder } from "flowbite-svelte";
  import { BullhornSolid } from "flowbite-svelte-icons";
</script>

<Skeleton class="py-4" />
<ImagePlaceholder class="py-4" />

<Banner class="absolute">
  <p class="me-8 flex items-center text-sm font-normal text-gray-500 md:me-0 dark:text-gray-400">
    <span class="me-3 inline-flex rounded-full bg-gray-200 p-1 dark:bg-gray-600">
      <BullhornSolid class="h-3 w-3 text-gray-500 dark:text-gray-400" />
      <span class="sr-only">Light bulb</span>
    </span>
    <span>
      New brand identity has been launched for the <a
        href="https://flowbite.com"
        class="text-primary-600 dark:text-primary-500 inline font-medium underline decoration-solid decoration-2 underline-offset-2 hover:no-underline dark:decoration-1"
      >
        Flowbite Library
      </a>
    </span>
  </p>
</Banner>
```

## Bottom banner position

This example can be used to position the sticky banner to the bottom side of the page instead of the top side.

```svelte
<script lang="ts">
  import { Banner, Skeleton, ImagePlaceholder, A } from "flowbite-svelte";
  import { SalePercentSolid, ArrowRightOutline } from "flowbite-svelte-icons";
</script>

<Skeleton class="py-4" />
<ImagePlaceholder class="py-4" />

<Banner type="bottom" class="absolute">
  <p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
    <span class="me-3 inline-flex rounded-full bg-gray-200 p-1 dark:bg-gray-600">
      <SalePercentSolid class="h-4 w-4 text-gray-500 dark:text-gray-400" />
      <span class="sr-only">Discount coupon</span>
    </span>
    <span>
      Get 5% commission per sale <A href="https://flowbite.com">
        Become a partner <ArrowRightOutline class="ms-2 h-3 w-3" />
      </A>
    </span>
  </p>
</Banner>
```

## Marketing CTA banner

Use this example to show a text message for announcement with a CTA link.

```svelte
<script lang="ts">
  import { Banner, Skeleton, ImagePlaceholder } from "flowbite-svelte";
</script>

<Skeleton class="py-4" />
<ImagePlaceholder class="py-4" />

<Banner class="absolute top-6 left-1/2 w-[calc(100%-2rem)] -translate-x-1/2 rounded-lg border border-gray-100 bg-white shadow-xs lg:max-w-7xl dark:border-gray-600 dark:bg-gray-700">
  <a href="https://flowbite-svelte.com/" class="mb-2 flex items-center border-gray-200 md:me-4 md:mb-0 md:border-e md:pe-4 dark:border-gray-600">
    <img src="https://flowbite-svelte.com/images/flowbite-svelte-icon-logo.svg" class="me-2 h-6" alt="Flowbite Logo" />
    <span class="self-center text-lg font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
  </a>
  <p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">Build websites even faster with components on top of Tailwind CSS</p>
</Banner>
```

## Newsletter sign-up banner

This example can be used to encourage your website visitors to sign up to your email newsletter by showing an inline form inside the sticky banner on the top side of your page.

```svelte
<script lang="ts">
  import { Banner, Skeleton, ImagePlaceholder, Input, Label, Button } from "flowbite-svelte";
</script>

<Skeleton class="py-4" />
<ImagePlaceholder class="py-4" />

<Banner classes={{ insideDiv: "w-full sm:w-auto" }} class="absolute">
  <form action="/" class="flex w-full flex-col gap-2 md:flex-row md:items-center md:gap-4">
    <Label for="email" class="shrink-0 text-gray-500 dark:text-gray-400">Sign up for our newsletter</Label>
    <Input type="email" id="email" placeholder="Enter your email" class="bg-white md:w-64 dark:border-gray-500 dark:bg-gray-600" required />
    <Button type="submit" class="w-full sm:w-auto">Subscribe</Button>
  </form>
</Banner>
```

## Informational banner

This example can be used to share important information with your website visitors by showing a heading and a paragraph inside the sticky banner and two CTA buttons with links.

```svelte
<script lang="ts">
  import { Banner, Skeleton, ImagePlaceholder, Button } from "flowbite-svelte";
  import { BookOpenOutline, ArrowRightOutline } from "flowbite-svelte-icons";
</script>

<Skeleton class="py-4" />
<ImagePlaceholder class="py-4" />

<Banner class="absolute">
  <div class="mb-4 md:me-4 md:mb-0">
    <h2 class="mb-1 text-base font-semibold text-gray-900 dark:text-white">Integration is the key</h2>
    <p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
      You can integrate Flowbite with many tools to make your work even more efficient and lightning fast based on Tailwind CSS.
    </p>
  </div>
  <div class="flex shrink-0 items-center gap-3">
    <Button href="/" size="sm" color="alternative">
      <BookOpenOutline class="me-2 h-3 w-3" /> Learn more
    </Button>
    <Button href="/" size="sm">
      Get started <ArrowRightOutline class="ms-2 h-3 w-3" />
    </Button>
  </div>
</Banner>
```

## Transition

The `transition` and `params` props allow you to apply transition effects to components when they enter or leave the view. Svelte provides built-in transitions like `fly`, `slide`, `blur-sm`, `fade`, and `scale`.

This example demonstrates a sliding transition using the slide transition from svelte/transition:

```svelte
<script lang="ts">
  import { slide } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import { Banner, Skeleton, ImagePlaceholder, A } from "flowbite-svelte";
  import { BullhornSolid } from "flowbite-svelte-icons";

  const params = { delay: 250, duration: 500, easing: quintOut };
</script>

<Skeleton class="py-4" />
<ImagePlaceholder class="py-4" />

<Banner transition={slide} {params} class="absolute">
  <p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
    <span class="me-3 inline-flex rounded-full bg-gray-200 p-1 dark:bg-gray-600">
      <BullhornSolid class="h-3 w-3 text-gray-500 dark:text-gray-400" />
      <span class="sr-only">Light bulb</span>
    </span>
    <span>
      New brand identity has been launched for the <A href="https://flowbite.com" class="font-medium underline decoration-solid decoration-2 underline-offset-2 hover:no-underline dark:decoration-1">
        Flowbite Library
      </A>
    </span>
  </p>
</Banner>
```

## onclose

A reusable function that manages banner dismissal state with localStorage persistence using the onclose callback. It checks if the banner was previously dismissed on mount, provides two-way binding for the open state, and automatically saves dismissal to localStorage. Use the following example for a reusable function that keeps announcement banners hidden after dismissal across page refreshes.

```svelte
<script lang="ts">
  import { onMount } from "svelte";
  import { Banner, P } from "flowbite-svelte";

  // reusable logic for dismissable banner with localStorage
  function useDismissableBanner(storageKey: string) {
    let open = $state(false);

    onMount(() => {
      open = !localStorage.getItem(storageKey);
    });

    function onclose(_event: MouseEvent) {
      localStorage.setItem(storageKey, "true");
      open = false;
    }

    return {
      get open() {
        return open;
      },
      set open(value) {
        open = value;
      },
      onclose
    };
  }

  const banner = useDismissableBanner("announcement-example");
</script>

<Banner bind:open={banner.open} onclose={banner.onclose}>
  <P>This keeps announcement banners hidden after dismissal across page refreshes!</P>
</Banner>
```

## Component data

### Banner

#### Types

[BannerProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L266)

#### Props

- children
- header
- open: $bindable(true)
- dismissable: true
- color: "gray"
- type
- class: className
- classes
- innerClass
- transition: fade
- params
- closeClass
- onclose


## References

- [Flowbite Banner](https://flowbite.com/docs/components/banner/)
