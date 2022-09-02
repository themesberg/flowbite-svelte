<script>
  import {
    Htwo,
    ExampleDiv,
    GitHubSource,
    CompoDescription,
    TableProp,
    TableDefaultRow
  } from '../../../../utils';
  import { P } from '$lib';
</script>

Font size

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

Font weight

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

Text color

<ExampleDiv>
  <P color="text-blue-700 dark:text-blue-500">This text is in the blue color.</P>
  <P color="text-green-700 dark:text-green-500">This text is in the green color.</P>
  <P color="text-red-700 dark:text-red-500">This text is in the red color.</P>
  <P color="text-purple-700 dark:text-purple-500">This text is in the purple color.</P>
  <P color="text-teal-700 dark:text-teal-500">This text is in the teal color.</P>
</ExampleDiv>

Letter spacing

<ExampleDiv>
  <P space="tighter"
    >Flowbite app will help you improve yourself by analysing your everyday life.</P>
  <P space="tight">Flowbite app will help you improve yourself by analysing your everyday life.</P>
  <P space="normal">Flowbite app will help you improve yourself by analysing your everyday life.</P>
  <P space="wide">Flowbite app will help you improve yourself by analysing your everyday life.</P>
  <P space="wider">Flowbite app will help you improve yourself by analysing your everyday life.</P>
  <P space="widest">Flowbite app will help you improve yourself by analysing your everyday life.</P>
</ExampleDiv>

<Htwo label="Text decoration" />
Underline

<ExampleDiv />

Line through
<ExampleDiv>test</ExampleDiv>

Uppercase

<ExampleDiv>test</ExampleDiv>

<Htwo label="Font style" />

Italic

<ExampleDiv>
  <P italic>The crypto identity primitive.</P>
</ExampleDiv>

Normal

<ExampleDiv>
  <P>The crypto identity primitive.</P>
</ExampleDiv>

<Htwo label="Line Height" />

Leading normal

<ExampleDiv>
  <P size="3xl" height="normal" class="max-w-lg" weight="semibold"
    >The Al-powered app will help you improve yourself by analysing your everyday life.</P>
</ExampleDiv>

Leading relaxed

<ExampleDiv>
  <P size="3xl" height="relaxed" class="max-w-lg" weight="semibold"
    >The Al-powered app will help you improve yourself by analysing your everyday life.</P>
</ExampleDiv>

Leading loose

<ExampleDiv>
  <P size="3xl" height="loose" class="max-w-lg" weight="semibold"
    >The Al-powered app will help you improve yourself by analysing your everyday life.</P>
</ExampleDiv>

<Htwo label="Text Align" />

Left

<ExampleDiv>
  <P align="left"
    >Get started with an enterprise-level, profesionally designed, fully responsive, and HTML
    semantic set of web pages, sections and over 400+ components crafted with the utility classes
    from Tailwind CSS and based on the Flowbite component library</P>
</ExampleDiv>

Center

<ExampleDiv>
  <P align="center"
    >Get started with an enterprise-level, profesionally designed, fully responsive, and HTML
    semantic set of web pages, sections and over 400+ components crafted with the utility classes
    from Tailwind CSS and based on the Flowbite component library</P>
</ExampleDiv>

Right

<ExampleDiv>
  <P align="right"
    >Get started with an enterprise-level, profesionally designed, fully responsive, and HTML
    semantic set of web pages, sections and over 400+ components crafted with the utility classes
    from Tailwind CSS and based on the Flowbite component library</P>
</ExampleDiv>

Text justify

<ExampleDiv>
  <P justify
    >Get started with an enterprise-level, profesionally designed, fully responsive, and HTML
    semantic set of web pages, sections and over 400+ components crafted with the utility classes
    from Tailwind CSS and based on the Flowbite component library</P>
</ExampleDiv>

<Htwo label="Whitespace" />

Normal

<ExampleDiv>
  <P whitespace="normal"
    >This is some text. This is some text. This is some text. This is some text. This is some text.
    This is some text. This is some text. This is some text. This is some text.</P>
</ExampleDiv>

Nowrap

<ExampleDiv class="overflow-y-scroll">
  <P whitespace="nowrap">
    This is some text. This is some text. This is some text. This is some text. This is some text.
    This is some text. This is some text. This is some text. This is some text.
  </P>
</ExampleDiv>

Pre line

<!-- prettier-ignore -->
<ExampleDiv>
  <P whitespace="preline">
    This is some text. This is some text. This is some text. 
    This is some text. This is some text. This is some text. 
    This is some text. This is some text. This is some text.
  </P>
</ExampleDiv>
