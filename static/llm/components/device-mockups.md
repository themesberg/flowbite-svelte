# Svelte Device Mockups - Flowbite


The device mockup component can be used to feature a preview and screenshot of your application as if you would already use it on a mobile phone and it’s a great use case for hero and CTA sections.

This component is built using only the utility classes from Tailwind CSS and has built-in dark mode support so it’s easy to customize, it loads very fast and integrates perfectly with Tailwind CSS and Flowbite.

You can choose from multiple examples of mockups including phone, tablet, laptop, and even desktop devices with iOS or Android support.

## Setup

```svelte
<script lang="ts">
  import { DeviceMockup } from "flowbite-svelte";
</script>
```

## Default mockup

Use this example to show a standard phone mockup based on Tailwind CSS and add your app screenshot inside of it with dark mode support included.

```svelte
<script lang="ts">
  import { DeviceMockup } from "flowbite-svelte";
</script>

<DeviceMockup>
  <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png" class="h-[572px] w-[272px] dark:hidden" alt="default example 1" />
  <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png" class="hidden h-[572px] w-[272px] dark:block" alt="default example 2" />
</DeviceMockup>
```

## iPhone 12 mockup (iOS)

Use this example to clearly show that the preview of your application is being used on an iPhone with iOS.

```svelte
<script lang="ts">
  import { DeviceMockup } from "flowbite-svelte";
</script>

<DeviceMockup device="ios">
  <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-light.png" class="h-[572px] w-[272px] dark:hidden" alt="ios example 1" />
  <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-dark.png" class="hidden h-[572px] w-[272px] dark:block" alt="ios example 2" />
</DeviceMockup>
```

## Google Pixel mockup (Android)

Use this alternative phone mockup example if you want to feature previews for android gadgets.

```svelte
<script lang="ts">
  import { DeviceMockup } from "flowbite-svelte";
</script>

<DeviceMockup device="android">
  <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png" class="h-[572px] w-[272px] dark:hidden" alt="android example 1" />
  <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png" class="hidden h-[572px] w-[272px] dark:block" alt="android example 2" />
</DeviceMockup>
```

## Tablet mockup

This component can be used to show an application preview inside of a responsive tablet mockup.

```svelte
<script lang="ts">
  import { DeviceMockup } from "flowbite-svelte";
</script>

<DeviceMockup device="tablet">
  <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image.png" class="h-[426px] md:h-[654px] dark:hidden" alt="tablet example 1" />
  <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image-dark.png" class="hidden h-[426px] md:h-[654px] dark:block" alt="tablet example 2" />
</DeviceMockup>
```

## Laptop mockup

This example can be used to show a screenshot of your application inside a laptop mockup.

```svelte
<script lang="ts">
  import { DeviceMockup } from "flowbite-svelte";
</script>

<DeviceMockup device="laptop">
  <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen.png" class="h-[156px] w-full rounded-xl md:h-[278px] dark:hidden" alt="laptop example 1" />
  <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen-dark.png" class="hidden h-[156px] w-full rounded-lg md:h-[278px] dark:block" alt="laptop example 2" />
</DeviceMockup>
```

## Desktop mockup

Use this example to show a preview of your applicaiton inside a desktop device such as an iMac.

```svelte
<script lang="ts">
  import { DeviceMockup } from "flowbite-svelte";
</script>

<DeviceMockup device="desktop">
  <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/screen-image-imac.png" class="h-[140px] w-full rounded-xl md:h-[262px] dark:hidden" alt="desktop example 1" />
  <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/screen-image-imac-dark.png" class="hidden h-[140px] w-full rounded-xl md:h-[262px] dark:block" alt="desktop example 2" />
</DeviceMockup>
```

## Smartwatch mockup

This component can be used to showcase applications built for smartwatches.

```svelte
<script lang="ts">
  import { DeviceMockup } from "flowbite-svelte";
</script>

<DeviceMockup device="smartwatch">
  <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/watch-screen-image.png" class="w-[188px h-[193px] dark:hidden" alt="smartwatch example 1" />
  <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/watch-screen-image-dark.png" class="hidden h-[193px] w-[188px] dark:block" alt="smartwatch example 2" />
</DeviceMockup>
```

## Component data

### Android

#### Types

[AndroidProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L552)

#### Props

- children
- class: className
- classes
- divClass
- div2Class
- div3Class
- div4Class
- div5Class
- div6Class
- div7Class

### DefaultMockup

#### Types

[DefaultMockupProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L563)

#### Props

- children
- class: className
- classes
- divClass
- div2Class
- div3Class
- div4Class
- div5Class
- div6Class

### Desktop

#### Types

[DesktopProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L536)

#### Props

- children
- class: className
- classes
- divClass
- div2Class
- div3Class
- div4Class

### DeviceMockup

#### Types

[DeviceMockupProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L531)

#### Props

- children
- device: "default"

### Ios

#### Types

[IosProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L573)

#### Props

- children
- class: className
- classes
- divClass
- div2Class
- div3Class
- div4Class
- div5Class
- div6Class

### Laptop

#### Types

[LaptopProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L544)

#### Props

- children
- class: className
- classes
- divClass
- div2Class
- div3Class
- div4Class

### Smartwatch

#### Types

[SmartwatchProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L583)

#### Props

- children
- class: className
- classes
- divClass
- div2Class
- div3Class
- div4Class
- div5Class
- div6Class

### Tablet

#### Types

[TabletProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L593)

#### Props

- children
- class: className
- classes
- divClass
- div2Class
- div3Class
- div4Class
- div5Class
- div6Class


## References

- [Flowbite Device Mockup](https://flowbite.com/docs/components/device-mockups/)
