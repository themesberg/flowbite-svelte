---
layout: typographyLayout
---

<script>
  import { Htwo, ExampleDiv, GitHubSource, CompoDescription, TableProp, TableDefaultRow} from '../../utils'
  import { Span, A, P, Button, Card, Heading, Breadcrumb, BreadcrumbItem } from '$lib'

  import componentProps from '../../props/A.json'

  // Props table
  let items1 = componentProps.props
  let propHeader = ['Name', 'Type', 'Default']
  let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
  let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'
</script>

<Breadcrumb class="pb-8">
  <BreadcrumbItem href="/" home >Home</BreadcrumbItem>
  <BreadcrumbItem href="/typography/">Typography</BreadcrumbItem>
	<BreadcrumbItem>Text</BreadcrumbItem>
</Breadcrumb>

<Heading class="w-full mb-2" tag="h1" customSize="text-3xl">Text</Heading>

<CompoDescription>Learn how to customize text-related styles and properties such as font size, font style, text decoration, font weight and more</CompoDescription>

<ExampleDiv>
<GitHubSource href="buttongroups/A.svelte">P</GitHubSource>
<GitHubSource href="buttongroups/Span.svelte">Span</GitHubSource>
</ExampleDiv>

Get started with a collection of text customization examples to learn how to update the size, font weight, style, decoration and spacing of inline text elements.


<Htwo label="Font size" />

Use this example to set the font size of inline text elements using the `size` prop.

<ExampleDiv class="flex flex-wrap items-center space-x-4">
  <P size="xs">Aa</P>
  <P size="sm">Aa</P>
  <P size="base">Aa</P>
  <P size="lg">Aa</P>
  <P size="xl">Aa</P>
  <P size="2xl">Aa</P>
  <P size="3xl">Aa</P>
  <P size="4xl">Aa</P>
  <P size="5xl">Aa</P>
  <P size="6xl">Aa</P>
  <P size="7xl">Aa</P>
  <P size="8xl">Aa</P>
  <P size="9xl">Aa</P>
</ExampleDiv>

```html
<P size="xs">Aa</P>
<P size="sm">Aa</P>
<P size="base">Aa</P>
<P size="lg">Aa</P>
<P size="xl">Aa</P>
<P size="2xl">Aa</P>
<P size="3xl">Aa</P>
<P size="4xl">Aa</P>
<P size="5xl">Aa</P>
<P size="6xl">Aa</P>
<P size="7xl">Aa</P>
<P size="8xl">Aa</P>
<P size="9xl">Aa</P>
```

<Htwo label="Font weight" />

This example can be used to the font weight of an inline text element using the `weight` prop.

<ExampleDiv class="flex flex-wrap items-center space-x-4">
  <P size="4xl" weight="thin">Aa</P>
  <P size="4xl" weight="extralight">Aa</P>
  <P size="4xl" weight="light">Aa</P>
  <P size="4xl" weight="normal">Aa</P>
  <P size="4xl" weight="medium">Aa</P>
  <P size="4xl" weight="semibold">Aa</P>
  <P size="4xl" weight="bold">Aa</P>
  <P size="4xl" weight="extrabold">Aa</P>
  <P size="4xl" weight="black">Aa</P>
</ExampleDiv>

```html
<P size="4xl" weight="thin">Aa</P>
<P size="4xl" weight="extralight">Aa</P>
<P size="4xl" weight="light">Aa</P>
<P size="4xl" weight="normal">Aa</P>
<P size="4xl" weight="medium">Aa</P>
<P size="4xl" weight="semibold">Aa</P>
<P size="4xl" weight="bold">Aa</P>
<P size="4xl" weight="extrabold">Aa</P>
<P size="4xl" weight="black">Aa</P>
```

<Htwo label="Text color" />

Use the `color` prop to set the color of the inline text.

<ExampleDiv>
  <P color="text-blue-700 dark:text-blue-500">This text is in the blue color.</P>
  <P color="text-green-700 dark:text-green-500">This text is in the green color.</P>
  <P color="text-red-700 dark:text-red-500">This text is in the red color.</P>
  <P color="text-purple-700 dark:text-purple-500">This text is in the purple color.</P>
  <P color="text-teal-700 dark:text-teal-500">This text is in the teal color.</P>
</ExampleDiv>

```html
<P color="text-blue-700 dark:text-blue-500">This text is in the blue color.</P>
<P color="text-green-700 dark:text-green-500">This text is in the green color.</P>
<P color="text-red-700 dark:text-red-500">This text is in the red color.</P>
<P color="text-purple-700 dark:text-purple-500">This text is in the purple color.</P>
<P color="text-teal-700 dark:text-teal-500">This text is in the teal color.</P>
```

<Htwo label="Letter spacing" />

Increase or decrease the spacing between letters using the `space` prop.

<ExampleDiv>
  <P space="tighter"
    >Flowbite app will help you improve yourself by analysing your everyday life.</P>
  <P space="tight">Flowbite app will help you improve yourself by analysing your everyday life.</P>
  <P space="normal">Flowbite app will help you improve yourself by analysing your everyday life.</P>
  <P space="wide">Flowbite app will help you improve yourself by analysing your everyday life.</P>
  <P space="wider">Flowbite app will help you improve yourself by analysing your everyday life.</P>
  <P space="widest">Flowbite app will help you improve yourself by analysing your everyday life.</P>
</ExampleDiv>

```html
<P space="tighter">Flowbite app will help you improve yourself by analysing your everyday life.</P>
<P space="tight">Flowbite app will help you improve yourself by analysing your everyday life.</P>
<P space="normal">Flowbite app will help you improve yourself by analysing your everyday life.</P>
<P space="wide">Flowbite app will help you improve yourself by analysing your everyday life.</P>
<P space="wider">Flowbite app will help you improve yourself by analysing your everyday life.</P>
<P space="widest">Flowbite app will help you improve yourself by analysing your everyday life.</P>
```

<Htwo label="Text decoration" />

<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4 mt-8">Underline</Heading>

<ExampleDiv>
example here
</ExampleDiv>

<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4 mt-8">Line through</Heading>

<ExampleDiv>test</ExampleDiv>

<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4 mt-8">Uppercase</Heading>

<ExampleDiv>test</ExampleDiv>

<Htwo label="Font style" />

<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4 mt-8">Italic</Heading>

<ExampleDiv>
  <P italic>The crypto identity primitive.</P>
</ExampleDiv>

<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4 mt-8">Normal</Heading>

<ExampleDiv>
  <P>The crypto identity primitive.</P>
</ExampleDiv>

<Htwo label="Line Height" />

<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4 mt-8">Leading normal</Heading>

<ExampleDiv>
  <P size="3xl" height="normal" class="max-w-lg" weight="semibold"
    >The Al-powered app will help you improve yourself by analysing your everyday life.</P>
</ExampleDiv>

<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4 mt-8">Leading relaxed</Heading>

<ExampleDiv>
  <P size="3xl" height="relaxed" class="max-w-lg" weight="semibold"
    >The Al-powered app will help you improve yourself by analysing your everyday life.</P>
</ExampleDiv>

<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4 mt-8">Leading loose</Heading>

<ExampleDiv>
  <P size="3xl" height="loose" class="max-w-lg" weight="semibold"
    >The Al-powered app will help you improve yourself by analysing your everyday life.</P>
</ExampleDiv>

<Htwo label="Text Align" />

<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4 mt-8">Left</Heading>

<ExampleDiv>
  <P align="left"
    >Get started with an enterprise-level, profesionally designed, fully responsive, and HTML
    semantic set of web pages, sections and over 400+ components crafted with the utility classes
    from Tailwind CSS and based on the Flowbite component library</P>
</ExampleDiv>

<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4 mt-8">Center</Heading>

<ExampleDiv>
  <P align="center"
    >Get started with an enterprise-level, profesionally designed, fully responsive, and HTML
    semantic set of web pages, sections and over 400+ components crafted with the utility classes
    from Tailwind CSS and based on the Flowbite component library</P>
</ExampleDiv>

<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4 mt-8">Right</Heading>

Use the `align="right"` prop to align the text element to the right side of the page.


<ExampleDiv>
  <P align="right"
    >Get started with an enterprise-level, profesionally designed, fully responsive, and HTML
    semantic set of web pages, sections and over 400+ components crafted with the utility classes
    from Tailwind CSS and based on the Flowbite component library</P>
</ExampleDiv>

<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4 mt-8">Text justify</Heading>

Use the `justify` prop to justify the text content.

<ExampleDiv>
  <P justify
    >Get started with an enterprise-level, profesionally designed, fully responsive, and HTML
    semantic set of web pages, sections and over 400+ components crafted with the utility classes
    from Tailwind CSS and based on the Flowbite component library</P>
</ExampleDiv>

<Htwo label="Whitespace" />

Configure the whitespace behaviour of inline text elements using the `whitespace` prop.


<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4 mt-8">Normal</Heading>

Use the `whitespace="normal"` prop to set the default whitespace behaviour.

<ExampleDiv>
  <P whitespace="normal"
    >This is some text. This is some text. This is some text. This is some text. This is some text.
    This is some text. This is some text. This is some text. This is some text.</P>
</ExampleDiv>

<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4 mt-8">Nowrap</Heading>

Use the `whitespace="nowrap"` prop to prevent text being added to a new line when the full width has been reached.

<ExampleDiv class="overflow-y-scroll">
  <P whitespace="nowrap">
    This is some text. This is some text. This is some text. This is some text. This is some text.
    This is some text. This is some text. This is some text. This is some text.
  </P>
</ExampleDiv>

```html
<P whitespace="nowrap">
  This is some text. This is some text. This is some text. This is some text. This is some text.
  This is some text. This is some text. This is some text. This is some text.
</P>
```

<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4 mt-8">Pre line</Heading>

Use the `whitespace="preline'` prop to add whitespace exactly how it has been set from the source code.

<!-- prettier-ignore -->
<ExampleDiv>
  <P whitespace="preline">
    This is some text. This is some text. This is some text. 
    This is some text. This is some text. This is some text. 
    This is some text. This is some text. This is some text.
  </P>
</ExampleDiv>

```html
<P whitespace="preline">
  This is some text. This is some text. This is some text. 
  This is some text. This is some text. This is some text. 
  This is some text. This is some text. This is some text.
</P>
```

<Htwo label="Text Decoration Style" />

<ExampleDiv>
example
</ExampleDiv>

<Htwo label="Opacity" />

<ExampleDiv>
example
</ExampleDiv>