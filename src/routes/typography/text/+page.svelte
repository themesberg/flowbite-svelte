<script lang="ts">
  import { P, Span } from '$lib';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  import H3 from '../../utils/H3.svelte';
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<H1>Text</H1>
<p>Get started with a collection of text customization examples to learn how to update the size, font weight, style, decoration and spacing of inline text elements.</p>

<H2>Font size</H2>

<p>Use this example to set the font size of inline text elements using the `size` prop.</p>

<CodeWrapper class="flex flex-wrap items-center space-x-4 rtl:space-x-reverse">
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
</CodeWrapper>

<H2>Font weight</H2>

<p>This example can be used to the font weight of an inline text element using the `weight` prop.</p>

<CodeWrapper class="flex flex-wrap items-center space-x-4 rtl:space-x-reverse">
<P size="4xl" weight="thin">Aa</P>
<P size="4xl" weight="extralight">Aa</P>
<P size="4xl" weight="light">Aa</P>
<P size="4xl" weight="normal">Aa</P>
<P size="4xl" weight="medium">Aa</P>
<P size="4xl" weight="semibold">Aa</P>
<P size="4xl" weight="bold">Aa</P>
<P size="4xl" weight="extrabold">Aa</P>
<P size="4xl" weight="black">Aa</P>
</CodeWrapper>

<H2>Text color</H2>

<p>Use the `color` prop to set the color of the inline text.</p>

<CodeWrapper class="flex flex-wrap items-center space-x-4 rtl:space-x-reverse">
<P color="text-blue-700 dark:text-blue-500">This text is in the blue color.</P>
<P color="text-green-700 dark:text-green-500">This text is in the green color.</P>
<P color="text-red-700 dark:text-red-500">This text is in the red color.</P>
<P color="text-purple-700 dark:text-purple-500">This text is in the purple color.</P>
<P color="text-teal-700 dark:text-teal-500">This text is in the teal color.</P>
</CodeWrapper>

<H2>Letter spacing</H2>

<p>Increase or decrease the spacing between letters using the `space` prop.</p>

<CodeWrapper class="flex flex-wrap items-cente rtl:space-x-reverse">

<P space="tighter">Flowbite app will help you improve yourself by analysing your everyday life.</P>
<P space="tight">Flowbite app will help you improve yourself by analysing your everyday life.</P>
<P space="normal">Flowbite app will help you improve yourself by analysing your everyday life.</P>
<P space="wide">Flowbite app will help you improve yourself by analysing your everyday life.</P>
<P space="wider">Flowbite app will help you improve yourself by analysing your everyday life.</P>
<P space="widest">Flowbite app will help you improve yourself by analysing your everyday life.</P>
</CodeWrapper>

<H2>Text decoration</H2>

<H3>Underline</H3>

<p>Update the text decoration style using the `underline` and `decorationClass` props.</p>

<CodeWrapper>
<P>
  Track work across the enterprise through an open, collaborative platform. <Span underline>Link issues across Jira</Span> and ingest data from other <Span underline decorationClass="decoration-blue-500 decoration-double">software development</Span> tools, so your IT support and operations teams have richer contextual information to rapidly respond to <Span underline decorationClass="decoration-green-500 decoration-dotted">requests</Span>, <Span underline decorationClass="decoration-4 decoration-red-500 decoration-dashed">incidents</Span>, and <Span underline decorationClass="decoration-sky-500 decoration-wavy">changes</Span>.
</P>
</CodeWrapper>

<H3>Line through</H3>

<p>Set a strikethrough line on a text element using the `line-through` class.</p>

<CodeWrapper>
<Span class="line-through">$109</Span><Span class="ms-3">$79</Span>
</CodeWrapper>

<H3>Uppercase</H3>

<p>Force uppercase characters for a given portion of text using the uppercase class.</p>

<CodeWrapper>
<P>The crypto <Span class="uppercase">identity</Span> primitive.</P>
</CodeWrapper>

<H2>Font style</H2>

<p>Set italic or non italic styles with the props.</p>

<H3>Italic</H3>

<p>Use the `italic` prop to set italic font style to a text element.</p>

<CodeWrapper>
<P italic>The crypto identity primitive.</P>
</CodeWrapper>

<H3>Normal</H3>

<p>Text elements by default are non-italic.</p>

<CodeWrapper>
<P>The crypto identity primitive.</P>
</CodeWrapper>

<H2>Line Height</H2>

<p>Set the height between lines using the `height` prop.</p>

<H3>Leading normal</H3>

<p>Use the `height="normal"` (default) prop to set default line height.</p>

<CodeWrapper>
<P size="3xl" height="normal" class="max-w-lg" weight="semibold">The Al-powered app will help you improve yourself by analysing your everyday life.</P>
</CodeWrapper>

<H3>Leading relaxed</H3>

<p>Use the `height="relaxed"` prop to increase the space between lines.</p>

<CodeWrapper>
<P size="3xl" height="relaxed" class="max-w-lg" weight="semibold">The Al-powered app will help you improve yourself by analysing your everyday life.</P>
</CodeWrapper>

<H3>Leading loose</H3>

<p>Use the `height="loose"` prop to set a large amount of space between text lines.</p>

<CodeWrapper>
<P size="3xl" height="loose" class="max-w-lg" weight="semibold">The Al-powered app will help you improve yourself by analysing your everyday life.</P>
</CodeWrapper>

<H2>Text Align</H2>

<H3>Left</H3>

<CodeWrapper>
<P align="left">Get started with an enterprise-level, profesionally designed, fully responsive, and HTML semantic set of web pages, sections and over 400+ components crafted with the utility classes from Tailwind CSS and based on the Flowbite component library</P>
</CodeWrapper>

<H3>Center</H3>

<CodeWrapper>
<P align="center">Get started with an enterprise-level, profesionally designed, fully responsive, and HTML semantic set of web pages, sections and over 400+ components crafted with the utility classes from Tailwind CSS and based on the Flowbite component library</P>
</CodeWrapper>

<H3>Right</H3>

<p>Use the `align="right"` prop to align the text element to the right side of the page.</p>

<CodeWrapper>
<P align="right">Get started with an enterprise-level, profesionally designed, fully responsive, and HTML semantic set of web pages, sections and over 400+ components crafted with the utility classes from Tailwind CSS and based on the Flowbite component library</P>
</CodeWrapper>

<H3>Text justify</H3>

<p>Use the `justify` prop to justify the text content.</p>

<CodeWrapper>
<P justify>Get started with an enterprise-level, profesionally designed, fully responsive, and HTML semantic set of web pages, sections and over 400+ components crafted with the utility classes from Tailwind CSS and based on the Flowbite component library</P>
</CodeWrapper>

<H2>Whitespace</H2>

<p>Configure the whitespace behaviour of inline text elements using the `whitespace` prop.</p>

<H3>Normal</H3>

<p>Use the `whitespace="normal"` prop to set the default whitespace behaviour.</p>

<CodeWrapper>
<P whitespace="normal">This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text.</P>
</CodeWrapper>

<H3>Nowrap</H3>

<p>Use the `whitespace="nowrap"` prop to prevent text being added to a new line when the full width has been reached.</p>

<CodeWrapper class="overflow-y-scroll">
<P whitespace="nowrap">This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text.</P>
</CodeWrapper>

<H3>Pre line</H3>

<p>Use the `whitespace="preline'` prop to add whitespace exactly how it has been set from the source code.</p>

<!-- prettier-ignore -->
<CodeWrapper>

<P whitespace="preline">
  This is some text. This is some text. This is some text. 
  This is some text. This is some text. This is some text. 
  This is some text. This is some text. This is some text.
</P>
</CodeWrapper>

<H2>Text Decoration Style</H2>

<p>Update the text decoration style using the `underline` and `decorationClass` props.</p>

<CodeWrapper>

<P>
  Track work across the enterprise through an open, collaborative platform. <Span underline>Link issues across Jira</Span> and ingest data from other <Span underline decorationClass="decoration-blue-500 decoration-double">software development</Span> tools, so your IT support and operations teams have richer contextual information to rapidly respond to <Span underline decorationClass="decoration-green-500 decoration-dotted">requests</Span>, <Span underline decorationClass="decoration-4 decoration-red-500 decoration-dashed">incidents</Span>, and <Span underline decorationClass="decoration-sky-500 decoration-wavy">changes</Span>.
</P>
</CodeWrapper>

<H2>Opacity</H2>

<p>Use the `opacity` and `color` prop to set the opacity of inline text elements.</p>

<CodeWrapper>
<P size="xl" opacity={100} color="text-blue-600 dark:text-blue-500">Flowbite app will help you improve yourself by analysing your everyday life.</P>
<P size="xl" opacity={75} color="text-blue-600 dark:text-blue-500">Flowbite app will help you improve yourself by analysing your everyday life.</P>
<P size="xl" opacity={50} color="text-blue-600 dark:text-blue-500">Flowbite app will help you improve yourself by analysing your everyday life.</P>
<P size="xl" opacity={25} color="text-blue-600 dark:text-blue-500">Flowbite app will help you improve yourself by analysing your everyday life.</P>
</CodeWrapper>

