<script lang="ts">
  import { Button, Indicator, GradientButton, Spinner } from '$lib';
  import {
    EnvelopeSolid,
    ArrowRightOutline,
    ShoppingBagSolid,
    ThumbsUpSolid
  } from 'flowbite-svelte-icons';
  const btn1 = () => {
    alert('You clicked btn1.');
  };
  const btn2 = () => {
    alert('You touched btn2.');
  };
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<H1>Buttons</H1>
<H2>Setup</H2>
<HighlightCompo codeLang="ts" code={modules['./md/setup.md'] as string} />

<H2>Default buttons</H2>

<CodeWrapper class="flex flex-wrap gap-2">
  <Button>Default</Button>
  <Button color="alternative">Alternative</Button>
  <Button color="dark">Dark</Button>
  <Button color="light">Light</Button>
  <Button color="blue">Blue</Button>
  <Button color="green">Green</Button>
  <Button color="red">Red</Button>
  <Button color="yellow">Yellow</Button>
  <Button color="purple">Purple</Button>
</CodeWrapper>

<HighlightCompo
  codeLang="js"
  code={modules['./md/default-buttons.md'] as string}
/>

<H2>Button with link</H2>

<CodeWrapper>
  <Button href="/">Home</Button>
</CodeWrapper>

<HighlightCompo
  codeLang="plain"
  code={modules['./md/button-with-link.md'] as string}
/>

<H2>Button pills</H2>

<CodeWrapper class="flex flex-wrap gap-2">
  <Button pill>Default</Button>
  <Button color="alternative" pill>Alternative</Button>
  <Button color="dark" pill>Dark</Button>
  <Button color="light" pill>Light</Button>
  <Button color="blue" pill>Blue</Button>
  <Button color="green" pill>Green</Button>
  <Button color="red" pill>Red</Button>
  <Button color="yellow" pill>Yellow</Button>
  <Button color="purple" pill>Purple</Button>
</CodeWrapper>

<HighlightCompo code={modules['./md/button-pills.md'] as string} />

<H2>Gradient monochrome</H2>
<CodeWrapper class="flex flex-wrap gap-2">
  <GradientButton color="blue">Blue</GradientButton>
  <GradientButton color="green">Green</GradientButton>
  <GradientButton color="cyan">Cyan</GradientButton>
  <GradientButton color="teal">Teal</GradientButton>
  <GradientButton color="lime">Lime</GradientButton>
  <GradientButton color="red">Red</GradientButton>
  <GradientButton color="pink">Pink</GradientButton>
  <GradientButton color="purple">Purple</GradientButton>
</CodeWrapper>
<HighlightCompo code={modules['./md/gradient-monochrome.md'] as string} />

<H2>Gradient duotone</H2>
<CodeWrapper class="flex flex-wrap gap-2">
  <GradientButton color="purpleToBlue">Purple to Blue</GradientButton>
  <GradientButton color="cyanToBlue">Cyan to Blue</GradientButton>
  <GradientButton color="greenToBlue">Green to Blue</GradientButton>
  <GradientButton color="purpleToPink">Purple to Pink</GradientButton>
  <GradientButton color="pinkToOrange">Pink to Orange</GradientButton>
  <GradientButton color="tealToLime">Teal to Lime</GradientButton>
  <GradientButton color="redToYellow">Red to Yellow</GradientButton>
</CodeWrapper>
<HighlightCompo code={modules['./md/gradient-duotone.md'] as string} />

<H2>Gradient outline</H2>
<CodeWrapper class="flex flex-wrap gap-2">
  <GradientButton outline color="purpleToBlue">Purple to Blue</GradientButton>
  <GradientButton outline color="cyanToBlue">Cyan to Blue</GradientButton>
  <GradientButton outline color="greenToBlue">Green to Blue</GradientButton>
  <GradientButton outline color="purpleToPink">Purple to Pink</GradientButton>
  <GradientButton outline color="pinkToOrange">Pink to Orange</GradientButton>
  <GradientButton outline color="tealToLime">Teal to Lime</GradientButton>
  <GradientButton outline color="redToYellow">Red to Yellow</GradientButton>
  <GradientButton outline color="redToYellow" class="w-72"
    >Red to Yellow</GradientButton
  >
</CodeWrapper>
<HighlightCompo code={modules['./md/gradient-outline.md'] as string} />

<H2>Colored shadows</H2>
<CodeWrapper class="flex flex-wrap gap-2">
  <GradientButton shadow color="blue">Blue</GradientButton>
  <GradientButton shadow color="green">Green</GradientButton>
  <GradientButton shadow color="cyan">Cyan</GradientButton>
  <GradientButton shadow color="teal">Teal</GradientButton>
  <GradientButton shadow color="lime">Lime</GradientButton>
  <GradientButton shadow color="red">Red</GradientButton>
  <GradientButton shadow color="pink">Pink</GradientButton>
  <GradientButton shadow color="purple">Purple</GradientButton>
</CodeWrapper>
<HighlightCompo code={modules['./md/colored-shadows.md'] as string} />

<H2>Gradient pills</H2>
<CodeWrapper class="flex flex-wrap gap-2">
  <GradientButton pill color="blue">Blue</GradientButton>
  <GradientButton pill color="green">Green</GradientButton>
  <GradientButton pill color="cyan">Cyan</GradientButton>
  <GradientButton pill color="teal">Teal</GradientButton>
  <GradientButton pill color="lime">Lime</GradientButton>
  <GradientButton pill color="red">Red</GradientButton>
  <GradientButton pill color="pink">Pink</GradientButton>
  <GradientButton pill color="purple">Purple</GradientButton>
  <GradientButton pill outline color="purpleToBlue"
    >Purple to Blue</GradientButton
  >
  <GradientButton pill outline color="cyanToBlue">Cyan to Blue</GradientButton>
  <GradientButton pill outline color="greenToBlue">Green to Blue</GradientButton
  >
  <GradientButton pill outline color="purpleToPink"
    >Purple to Pink</GradientButton
  >
  <GradientButton pill outline color="pinkToOrange"
    >Pink to Orange</GradientButton
  >
  <GradientButton pill outline color="tealToLime">Teal to Lime</GradientButton>
  <GradientButton pill outline color="redToYellow">Red to Yellow</GradientButton
  >
  <GradientButton pill shadow color="blue">Blue</GradientButton>
  <GradientButton pill shadow color="green">Green</GradientButton>
  <GradientButton pill shadow color="cyan">Cyan</GradientButton>
  <GradientButton pill shadow color="teal">Teal</GradientButton>
  <GradientButton pill shadow color="lime">Lime</GradientButton>
  <GradientButton pill shadow color="red">Red</GradientButton>
  <GradientButton pill shadow color="pink">Pink</GradientButton>
  <GradientButton pill shadow color="purple">Purple</GradientButton>
</CodeWrapper>
<HighlightCompo code={modules['./md/gradient-pills.md'] as string} />


<H2>Outline buttons</H2>

<CodeWrapper class="flex flex-wrap gap-2">
  <Button outline>Default</Button>
  <Button outline color="dark">Dark</Button>
  <Button outline color="green">Green</Button>
  <Button outline color="red">Red</Button>
  <Button outline color="yellow">Yellow</Button>
  <Button outline color="purple">Purple</Button>
</CodeWrapper>

<HighlightCompo code={modules['./md/outline-buttons.md'] as string} />

<H2>Button sizes with icons</H2>

<CodeWrapper>
  <Button size="xs"><EnvelopeSolid class="me-2 h-3 w-3" />Extra small</Button>
  <Button size="sm"><EnvelopeSolid class="me-2 h-3 w-3" />Small</Button>
  <Button size="md"><EnvelopeSolid class="me-2 h-3.5 w-3.5" />Base</Button>
  <Button size="lg"><EnvelopeSolid class="me-2 h-4 w-4" />Large</Button>
  <Button size="xl"><EnvelopeSolid class="me-2 h-4 w-4" />Extra large</Button>
</CodeWrapper>

<HighlightCompo code={modules['./md/button-sizes-with-icons.md'] as string} />

<H2>Button with icon</H2>
<CodeWrapper class="flex flex-wrap gap-2">
  <Button><ShoppingBagSolid class="me-2 h-4 w-4" />Buy Now</Button>
  <Button>Choose Plan<ArrowRightOutline class="ms-2 h-5 w-5" /></Button>
</CodeWrapper>

<HighlightCompo code={modules['./md/button-with-icon.md'] as string} />

<H2>Button with label</H2>

<CodeWrapper>
  <Button class="gap-2">
    Messages
    <Indicator
      color="none"
      class="bg-primary-200 text-xs font-semibold text-primary-800"
      size="lg">2</Indicator
    >
  </Button>
</CodeWrapper>

<HighlightCompo code={modules['./md/button-with-label.md'] as string} />


<H2>Icon buttons</H2>
<CodeWrapper>
  <div class="flex flex-wrap items-center gap-2">
    <Button class="!p-2"><ArrowRightOutline class="h-7 w-7" /></Button>
    <Button pill={true} class="!p-2"
      ><ArrowRightOutline class="h-5 w-5" /></Button
    >
    <Button outline={true} class="!p-2" size="lg">
      <ThumbsUpSolid class="h-7 w-7" />
    </Button>
    <Button pill={true} outline={true} class="!p-2" size="xl">
      <ThumbsUpSolid class="h-5 w-5" />
    </Button>
  </div>
</CodeWrapper>
<HighlightCompo code={modules['./md/icon-buttons.md'] as string} />

<H2>Loader</H2>
<CodeWrapper>
  <Button>
    <Spinner svgClass="me-3" size="4" color="white" />Loading ...
  </Button>
  <Button color="alternative">
    <Spinner svgClass="me-3" size="4" />Loading ...
  </Button>
</CodeWrapper>
<HighlightCompo code={modules['./md/loader.md'] as string} />

<H2>Disabled</H2>
<CodeWrapper>
  <Button disabled>Disabled</Button>
</CodeWrapper>
<HighlightCompo code={modules['./md/disabled.md'] as string} />

<H2>Events</H2>
<CodeWrapper>
  <Button onclick={btn1}>Button 1</Button>
</CodeWrapper>
<HighlightCompo code={modules['./md/events.md'] as string} />

