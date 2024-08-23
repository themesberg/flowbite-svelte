<script lang="ts">
  import { Button, Indicator, GradientButton, Spinner, gradientButton, Radio, Label } from '$lib';
  import { EnvelopeSolid, ArrowRightOutline, ShoppingBagSolid, ThumbsUpSolid } from 'flowbite-svelte-icons';
  const btn1 = () => {
    alert('You clicked btn1.');
  };

  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  import { capitalizeFirstLetter } from '../../utils/helpers';
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  const colors = Object.keys(gradientButton.variants.color);
  let gradientColor = $state(colors[0]);
  let gradientClass: GradientButton['class'] = $state('w-40');
  const changeClass = () => {
    gradientClass = gradientClass === 'w-40' ? 'w-48' : 'w-40';
  };
  let gradientOutline = $state(false);
  const changeOutline = () => {
    gradientOutline = !gradientOutline;
  };
  let gradientShadow = $state(false);
  const changeShadow = () => {
    gradientShadow = !gradientShadow;
  };
  let graidentPill = $state(false);
  const changePill = () => {
    graidentPill = !graidentPill;
  };
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

<HighlightCompo codeLang="js" code={modules['./md/default-buttons.md'] as string} />

<H2>Button with link</H2>

<CodeWrapper>
  <Button href="/">Home</Button>
</CodeWrapper>

<HighlightCompo codeLang="plain" code={modules['./md/button-with-link.md'] as string} />

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

<H2>Gradient button</H2>

<CodeWrapper>
  <div class="h-16">
    <GradientButton outline={gradientOutline} shadow={gradientShadow} pill={graidentPill} class={gradientClass} color={gradientColor as GradientButton['color']}>{capitalizeFirstLetter(gradientColor)}</GradientButton>
  </div>
  <div class="mt-4 space-y-4">
    <div class="flex flex-wrap space-x-10">
      <Label class="mb-4 w-full font-bold">Color</Label>
      {#each colors as colorOption}
        <Radio labelClass="w-24 my-1" name="color" bind:group={gradientColor} color={colorOption as GradientButton['color']} value={colorOption}>{colorOption}</Radio>
      {/each}
    </div>
  </div>
  <Button class="mt-4 w-36" onclick={changeClass}>{gradientClass === 'w-40' ? 'Add class' : 'Remove class'}</Button>
  <Button class="mt-4 w-36" color="blue" onclick={changeOutline}>{gradientOutline === false ? 'Add outline' : 'Remove outline'}</Button>
  <Button class="mt-4 w-40" color="green" onclick={changeShadow}>{gradientShadow === false ? 'Add shadow' : 'Remove shadow'}</Button>
  <Button class="mt-4 w-40" color="yellow" onclick={changePill}>{graidentPill === false ? 'Add pill' : 'Remove pill'}</Button>
</CodeWrapper>

<HighlightCompo code={modules['./md/gradient.md'] as string} />

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
    <Indicator color="cyan" class="bg-primary-200 text-xs font-semibold text-primary-800" size="lg">2</Indicator>
  </Button>
</CodeWrapper>

<HighlightCompo code={modules['./md/button-with-label.md'] as string} />

<H2>Icon buttons</H2>
<CodeWrapper>
  <div class="flex flex-wrap items-center gap-2">
    <Button class="!p-2"><ArrowRightOutline class="h-7 w-7" /></Button>
    <Button pill={true} class="!p-2"><ArrowRightOutline class="h-5 w-5" /></Button>
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
    <Spinner class="me-3" size="4" color="teal" />Loading ...
  </Button>
  <Button color="alternative">
    <Spinner class="me-3" size="4" />Loading ...
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
