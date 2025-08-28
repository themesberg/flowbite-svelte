# Svelte Device Mockups - Flowbite


The device mockup component can be used to feature a preview and screenshot of your application as if you would already use it on a mobile phone and it’s a great use case for hero and CTA sections.

This component is built using only the utility classes from Tailwind CSS and has built-in dark mode support so it’s easy to customize, it loads very fast and integrates perfectly with Tailwind CSS and Flowbite.

You can choose from multiple examples of mockups including phone, tablet, laptop, and even desktop devices with iOS or Android support.

## Setup

```svelte
<script>
  import { DeviceMockup } from "flowbite-svelte";
</script>
```

## Default mockup

Use this example to show a standard phone mockup based on Tailwind CSS and add your app screenshot inside of it with dark mode support included.

```svelte
{#include Default.svelte}
```

## iPhone 12 mockup (iOS)

Use this example to clearly show that the preview of your application is being used on an iPhone with iOS.

```svelte
{#include Iphone.svelte}
```

## Google Pixel mockup (Android)

Use this alternative phone mockup example if you want to feature previews for android gadgets.

```svelte
{#include Pixel.svelte}
```

## Tablet mockup

This component can be used to show an application preview inside of a responsive tablet mockup.

```svelte
{#include Tablet.svelte}
```

## Laptop mockup

This example can be used to show a screenshot of your application inside a laptop mockup.

```svelte
{#include Laptop.svelte}
```

## Desktop mockup

Use this example to show a preview of your applicaiton inside a desktop device such as an iMac.

```svelte
{#include Desktop.svelte}
```

## Smartwatch mockup

This component can be used to showcase applications built for smartwatches.

```svelte
{#include Smartwatch.svelte}
```

## Component data

### Android

#### Types

[AndroidProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L512)

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

[DefaultMockupProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L523)

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

[DesktopProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L496)

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

[DeviceMockupProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L491)

#### Props

- children
- device: "default"

### Ios

#### Types

[IosProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L533)

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

[LaptopProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L504)

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

[SmartwatchProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L543)

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

[TabletProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L553)

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


