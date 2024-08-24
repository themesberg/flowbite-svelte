<script lang="ts">
  import { Button, Indicator, GradientButton, Spinner, gradientButton, button, Radio, Label } from '$lib';
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
  // color, size, group, outline, shadow, disabled, pill
  const btnColors = Object.keys(button.variants.color);
  let btnColor = $state(btnColors[0]);
  let btnClass: GradientButton['class'] = $state('w-40');
  const changeBtnClass = () => {
    btnClass = btnClass === 'w-40' ? 'w-48' : 'w-40';
  };

  let btnOutline = $state(false);
  const changeBtnOutline = () => {
    btnOutline = !btnOutline;
  };
  let btnShadow = $state(false);
  const changeBtnShadow = () => {
    btnShadow = !btnShadow;
  };
  let btnPill = $state(false);
  const changeBtnPill = () => {
    btnPill = !btnPill;
  };
  let btnDisabled = $state(false);
  const changeBtnDisabled = () => {
    btnDisabled = !btnDisabled;
  };
  const btnSizes = Object.keys(button.variants.size);
  let btnSize = $state(btnSizes[0]);

  const gradientColors = Object.keys(gradientButton.variants.color);
  let gradientColor = $state(gradientColors[0]);

  const gradientSizes = Object.keys(button.variants.size);
  let gradientSize = $state(gradientSizes[0]);

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
  let gradientDisabled = $state(false);
  const changeDisabled = () => {
    gradientDisabled = !gradientDisabled;
  };
</script>

<H1>Buttons</H1>

<H2>Setup</H2>
<HighlightCompo codeLang="ts" code={modules['./md/setup.md'] as string} />

<H2>Default buttons</H2>

<CodeWrapper class="flex flex-wrap gap-2">
  <div class="h-16">
    <Button color={btnColor as Button['color']} class={btnClass} outline={btnOutline} shadow={btnShadow} pill={btnPill} disabled={btnDisabled} size={btnSize as Button['size']}>Button</Button>
  </div>
  <div class="mt-4 space-y-4">
    <div class="flex flex-wrap space-x-10">
      <Label class="mb-4 w-full font-bold">Color</Label>
      {#each btnColors as colorOption}
        <Radio labelClass="w-24 my-1" name="btn_color" bind:group={btnColor as Button['color']} color={colorOption as Button['color']} value={colorOption}>{colorOption}</Radio>
      {/each}
    </div>
    <div class="flex flex-wrap space-x-10">
      <Label class="mb-4 w-full font-bold">Size</Label>
      {#each btnSizes as sizeOption}
        <Radio labelClass="w-24 my-1" name="btn_size" bind:group={btnSize as Button['size']} color={sizeOption as Button['size']} value={sizeOption}>{sizeOption}</Radio>
      {/each}
    </div>
  </div>
  <Button class="mt-4 w-36" onclick={changeBtnClass}>{btnClass === 'w-40' ? 'Add class' : 'Remove class'}</Button>
  <Button class="mt-4 w-36" color="blue" onclick={changeBtnOutline}>{btnOutline === false ? 'Add outline' : 'Remove outline'}</Button>
  <Button class="mt-4 w-40" color="green" onclick={changeBtnShadow}>{btnShadow === false ? 'Add shadow' : 'Remove shadow'}</Button>
  <Button class="mt-4 w-40" color="yellow" onclick={changeBtnPill}>{btnPill === false ? 'Add pill' : 'Remove pill'}</Button>
  <Button class="mt-4 w-40" color="red" onclick={changeBtnDisabled}>{btnDisabled === false ? 'Add disabled' : 'Remove disabled'}</Button>
</CodeWrapper>

<HighlightCompo codeLang="js" code={modules['./md/default-buttons.md'] as string} />

<H2>Gradient button</H2>

<CodeWrapper>
  <div class="h-16">
    <GradientButton outline={gradientOutline} shadow={gradientShadow} pill={graidentPill} class={gradientClass} disabled={gradientDisabled} color={gradientColor as GradientButton['color']} size={gradientSize as Button['size']}>{capitalizeFirstLetter(gradientColor)}</GradientButton>
  </div>
  <div class="mt-4 space-y-4">
    <div class="flex flex-wrap space-x-10">
      <Label class="mb-4 w-full font-bold">Color</Label>
      {#each gradientColors as colorOption}
        <Radio labelClass="w-24 my-1" name="gradient_color" bind:group={gradientColor} color={colorOption as GradientButton['color']} value={colorOption}>{colorOption}</Radio>
      {/each}
    </div>
    <div class="flex flex-wrap space-x-10">
      <Label class="mb-4 w-full font-bold">Size</Label>
      {#each gradientSizes as sizeOption}
        <Radio labelClass="w-24 my-1" name="btn_size" bind:group={gradientSize as Button['size']} color={sizeOption as Button['size']} value={sizeOption}>{sizeOption}</Radio>
      {/each}
    </div>
  </div>
  <Button class="mt-4 w-36" onclick={changeClass}>{gradientClass === 'w-40' ? 'Add class' : 'Remove class'}</Button>
  <Button class="mt-4 w-36" color="blue" onclick={changeOutline}>{gradientOutline === false ? 'Add outline' : 'Remove outline'}</Button>
  <Button class="mt-4 w-40" color="green" onclick={changeShadow}>{gradientShadow === false ? 'Add shadow' : 'Remove shadow'}</Button>
  <Button class="mt-4 w-40" color="yellow" onclick={changePill}>{graidentPill === false ? 'Add pill' : 'Remove pill'}</Button>
  <Button class="mt-4 w-40" color="red" onclick={changeDisabled}>{gradientDisabled === false ? 'Add disabled' : 'Remove disabled'}</Button>
</CodeWrapper>

<HighlightCompo code={modules['./md/gradient.md'] as string} />

<H2>Button with link</H2>

<CodeWrapper>
  <Button href="/">Home</Button>
</CodeWrapper>

<HighlightCompo codeLang="plain" code={modules['./md/button-with-link.md'] as string} />

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

<H2>Events</H2>
<CodeWrapper>
  <Button onclick={btn1}>Button 1</Button>
</CodeWrapper>
<HighlightCompo code={modules['./md/events.md'] as string} />
