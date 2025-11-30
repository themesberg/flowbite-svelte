---
layout: componentLayout
title: Svelte Device Mockups - Flowbite
breadcrumb_title: Svelte Device Mockups
component_title: Device Mockups
dir: Components
description: Use the device mockups component to add content and screenshot previews of your application inside phone and tablet frames coded with Tailwind CSS and Flowbite
thumbnailSize: w-36
---

<script lang="ts">
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase, LlmLink } from '../../utils'
  import { P, A } from '$lib'
  const dirName = toKebabCase(component_title)
</script>

The device mockup component can be used to feature a preview and screenshot of your application as if you would already use it on a mobile phone and it’s a great use case for hero and CTA sections.

This component is built using only the utility classes from Tailwind CSS and has built-in dark mode support so it’s easy to customize, it loads very fast and integrates perfectly with Tailwind CSS and Flowbite.

You can choose from multiple examples of mockups including phone, tablet, laptop, and even desktop devices with iOS or Android support.

## Setup

```svelte example hideOutput
<script lang="ts">
  import { DeviceMockup } from "flowbite-svelte";
</script>
```

## Default mockup

Use this example to show a standard phone mockup based on Tailwind CSS and add your app screenshot inside of it with dark mode support included.

```svelte example
{#include Default.svelte}
```

## iPhone 12 mockup (iOS)

Use this example to clearly show that the preview of your application is being used on an iPhone with iOS.

```svelte example
{#include Iphone.svelte}
```

## Google Pixel mockup (Android)

Use this alternative phone mockup example if you want to feature previews for android gadgets.

```svelte example
{#include Pixel.svelte}
```

## Tablet mockup

This component can be used to show an application preview inside of a responsive tablet mockup.

```svelte example
{#include Tablet.svelte}
```

## Laptop mockup

This example can be used to show a screenshot of your application inside a laptop mockup.

```svelte example
{#include Laptop.svelte}
```

## Desktop mockup

Use this example to show a preview of your applicaiton inside a desktop device such as an iMac.

```svelte example
{#include Desktop.svelte}
```

## Smartwatch mockup

This component can be used to showcase applications built for smartwatches.

```svelte example
{#include Smartwatch.svelte}
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {dirName}/>

## References

- [Flowbite Device Mockup](https://flowbite.com/docs/components/device-mockups/)

## GitHub Links

<GitHubCompoLinks />

## LLM Link

<LlmLink />
