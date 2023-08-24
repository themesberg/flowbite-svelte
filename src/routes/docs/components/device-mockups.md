---
layout: componentLayout
title: Svelte Device Mockups - Flowbite
breadcrumb_title: Svelte Device Mockups
component_title: Device Mockups
dir: Components
description: Use the device mockups component to add content and screenshot previews of your application inside phone and tablet frames coded with Tailwind CSS and Flowbite
thumnailSize: w-36
---

<script>
  import { TableProp, TableDefaultRow, CompoAttributesViewer } from '../../utils'
  import { P, A } from '$lib'

  const components = 'DeviceMockup, DefaultMockup, Android, Ios, Smartwatch, Tablet'
</script>

The device mockup component can be used to feature a preview and screenshot of your application as if you would already use it on a mobile phone and it’s a great use case for hero and CTA sections.

This component is built using only the utility classes from Tailwind CSS and has built-in dark mode support so it’s easy to customize, it loads very fast and integrates perfectly with Tailwind CSS and Flowbite.

You can choose from multiple examples of mockups including phone, tablet, laptop, and even desktop devices with iOS or Android support.

## Setup

```svelte example hideOutput
<script>
  import { DeviceMockup } from 'flowbite-svelte';
</script>
```

## Default mockup

Use this example to show a standard phone mockup based on Tailwind CSS and add your app screenshot inside of it with dark mode support included.

```svelte example
<script>
  import { DeviceMockup } from 'flowbite-svelte';
</script>

<DeviceMockup>
  <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png" class="dark:hidden w-[272px] h-[572px]" alt="default example 1" />
  <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png" class="hidden dark:block w-[272px] h-[572px]" alt="default example 2" />
</DeviceMockup>
```

## iPhone 12 mockup (iOS)

Use this example to clearly show that the preview of your application is being used on an iPhone with iOS.

```svelte example
<script>
  import { DeviceMockup } from 'flowbite-svelte';
</script>

<DeviceMockup device="ios">
  <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-light.png" class="dark:hidden w-[272px] h-[572px]" alt="ios example 1" />
  <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-dark.png" class="hidden dark:block w-[272px] h-[572px]" alt="ios example 2" />
</DeviceMockup>
```

## Google Pixel mockup (Android)

Use this alternative phone mockup example if you want to feature previews for android gadgets.

```svelte example
<script>
  import { DeviceMockup } from 'flowbite-svelte';
</script>

<DeviceMockup device="android">
  <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png" class="dark:hidden w-[272px] h-[572px]" alt="android example 1" />
  <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png" class="hidden dark:block w-[272px] h-[572px]" alt="android example 2" />
</DeviceMockup>
```

## Tablet mockup

This component can be used to show an application preview inside of a responsive tablet mockup.

```svelte example
<script>
  import { DeviceMockup } from 'flowbite-svelte';
</script>

<DeviceMockup device="tablet">
  <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image.png" class="dark:hidden h-[426px] md:h-[654px]" alt="tablet example 1" />
  <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image-dark.png" class="hidden dark:block h-[426px] md:h-[654px]" alt="tablet example 2" />
</DeviceMockup>
```

## Laptop mockup

This example can be used to show a screenshot of your application inside a laptop mockup.

```svelte example
<script>
  import { DeviceMockup } from 'flowbite-svelte';
</script>

<DeviceMockup device="laptop">
  <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen.png" class="dark:hidden h-[156px] md:h-[278px] w-full rounded-xl" alt="laptop example 1" />
  <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen-dark.png" class="hidden dark:block h-[156px] md:h-[278px] w-full rounded-lg" alt="laptop example 2" />
</DeviceMockup>
```

## Desktop mockup

Use this example to show a preview of your applicaiton inside a desktop device such as an iMac.

```svelte example
<script>
  import { DeviceMockup } from 'flowbite-svelte';
</script>

<DeviceMockup device="desktop">
  <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/screen-image-imac.png" class="dark:hidden h-[140px] md:h-[262px] w-full rounded-xl" alt="desktop example 1" />
  <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/screen-image-imac-dark.png" class="hidden dark:block h-[140px] md:h-[262px] w-full rounded-xl" alt="desktop example 2" />
</DeviceMockup>
```

## Smartwatch mockup

This component can be used to showcase applications built for smartwatches.

```svelte example
<script>
  import { DeviceMockup } from 'flowbite-svelte';
</script>

<DeviceMockup device="smartwatch">
  <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/watch-screen-image.png" class="dark:hidden h-[193px] w-[188px" alt="smartwatch example 1" />
  <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/watch-screen-image-dark.png" class="hidden dark:block h-[193px] w-[188px]" alt="smartwatch example 2" />
</DeviceMockup>
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

### DeviceMockup styling

- Use the `class` prop to overwrite the outer div class.

### DefaultMockup styling

- Use the `classDefaultDiv` prop to overwrite `defaultDiv`.
- Use the `classDefaultSlot` prop to overwrite `defaultSlot`.
- Use the `classDefaultTop` prop to overwrite `defaultTop`.
- Use the `classDefaultLeftTop` prop to overwrite `defaultLeftTop`.
- Use the `classDefaultLeftBot` prop to overwrite `defaultLeftBot`.
- Use the `classDefaultRight` prop to overwrite `defaultRight`.

### Android styling

- Use the `classAndroidDiv` prop to overwrite `androidDiv`.
- Use the `classAndroidSlot` prop to overwrite `androidSlot`.
- Use the `classAndroidTop` prop to overwrite `androidTop`.
- Use the `classAndroidLeftTop` prop to overwrite `androidLeftTop`.
- Use the `classAndroidLeftMid` prop to overwrite `androidLeftMid`.
- Use the `classAndroidLeftBot` prop to overwrite `androidLeftBot`.
- Use the `classAndroidRight` prop to overwrite `androidRight`.

### Desktop styling

- Use the classDesktopInner prop to overwrite desktopInner.
- Use the classDesktopBot prop to overwrite desktopBot.
- Use the classDesktopBotUnder prop to overwrite desktopBotUnder.
- Use the classDestopDiv prop to overwrite destopDiv.
- Use the classDesktopSlot prop to overwrite desktopSlot.

### Ios styling

- Use the `classIosDiv` prop to overwrite `iosDiv`.
- Use the `classIosSlot` prop to overwrite `iosSlot`.
- Use the `classIosTop` prop to overwrite `iosTop`.
- Use the `classIosLeftTop` prop to overwrite `iosLeftTop`.
- Use the `classIosLeftBot` prop to overwrite `iosLeftBot`.
- Use the `classIosRight` prop to overwrite `iosRight`.

### Laptop styling

- Use the `classAndroidDiv` prop to overwrite `androidDiv`.
- Use the `classAndroidDiv` prop to overwrite `androidDiv`.
- Use the `classAndroidDiv` prop to overwrite `androidDiv`.
- Use the `classAndroidDiv` prop to overwrite `androidDiv`.
- Use the `classAndroidDiv` prop to overwrite `androidDiv`.
- Use the `classAndroidDiv` prop to overwrite `androidDiv`.

### Smartwatch styling

- Use the `classAndroidDiv` prop to overwrite `androidDiv`.
- Use the `classAndroidDiv` prop to overwrite `androidDiv`.
- Use the `classAndroidDiv` prop to overwrite `androidDiv`.
- Use the `classAndroidDiv` prop to overwrite `androidDiv`.
- Use the `classAndroidDiv` prop to overwrite `androidDiv`.
- Use the `classAndroidDiv` prop to overwrite `androidDiv`.

### Tablet styling

- Use the `classAndroidDiv` prop to overwrite `androidDiv`.
- Use the `classAndroidDiv` prop to overwrite `androidDiv`.
- Use the `classAndroidDiv` prop to overwrite `androidDiv`.
- Use the `classAndroidDiv` prop to overwrite `androidDiv`.
- Use the `classAndroidDiv` prop to overwrite `androidDiv`.
- Use the `classAndroidDiv` prop to overwrite `androidDiv`.

<CompoAttributesViewer {components}/>

## References

- [Flowbite Device Mockup](https://flowbite.com/docs/components/device-mockups/)
