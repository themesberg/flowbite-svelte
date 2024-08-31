<script lang="ts">
  import { Button, Indicator, GradientButton, Spinner, gradientButton, button, Radio, Label } from '$lib';
  import { ArrowRightOutline, ShoppingBagSolid, ThumbsUpSolid } from 'flowbite-svelte-icons';
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
  let btnColor = $state('primary');
  let btnClass: GradientButton['class'] = $state('');
  const changeBtnClass = () => {
    btnClass = btnClass === '' ? 'w-48' : '';
  };

  let btnLink = $state('');
  const changeBtnLink = () => {
    btnLink = btnLink === '' ? '/' : '';
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
  let btnSize = $state('md');

  const gradientColors = Object.keys(gradientButton.variants.color);
  let gradientColor = $state('blue');

  const gradientSizes = Object.keys(button.variants.size);
  let gradientSize = $state('md');

  let gradientClass: GradientButton['class'] = $state('');
  const changeGradientClass = () => {
    gradientClass = gradientClass === '' ? 'w-48' : '';
  };
  let gradientOutline = $state(false);
  const changeGradientOutline = () => {
    gradientOutline = !gradientOutline;
  };
  let gradientShadow = $state(false);
  const changeGradientShadow = () => {
    gradientShadow = !gradientShadow;
  };
  let graidentPill = $state(false);
  const changeGradientPill = () => {
    graidentPill = !graidentPill;
  };
  let gradientDisabled = $state(false);
  const changeGradientDisabled = () => {
    gradientDisabled = !gradientDisabled;
  };

  let gradientLink = $state('');
  const changeGradientLink = () => {
    gradientLink = gradientLink === '' ? '/' : '';
  };

  // code generator
  let generatedCode = $derived(
    (() => {
      let props = [];
      if (btnColor !== 'primary') props.push(` color="${btnColor}"`);
      if (btnShadow) props.push(' shadow');
      if (btnOutline) props.push(' outline');
      if (btnPill) props.push(' pill');
      if (btnClass) props.push(` class="${btnClass}"`);
      if (btnLink) props.push(` href="${btnLink}"`);
      if (btnDisabled) props.push(' disabled');
      if (btnSize !== 'md') props.push(` size="${btnSize}"`);

      const propsString = props.length > 0 ? props.map((prop) => `\n  ${prop}`).join('') + '\n' : ' ';

      return `<Button${propsString}>My Button</Button>`;
    })()
  );

  let gradientGeneratedCode = $derived(
    (() => {
      let props = [];
      if (gradientColor !== 'blue') props.push(` color="${gradientColor}"`);
      if (gradientShadow) props.push(' shadow');
      if (gradientOutline) props.push(' outline');
      if (graidentPill) props.push(' pill');
      if (gradientClass) props.push(` class="${gradientClass}"`);
      if (gradientLink) props.push(` href="${gradientLink}"`);
      if (gradientDisabled) props.push(' disabled');
      if (gradientSize !== 'md') props.push(` size="${gradientSize}"`);

      const propsString = props.length > 0 ? props.map((prop) => `\n  ${prop}`).join('') + '\n' : ' ';

      return `<GradientButton${propsString}>My Gradient Button</GradientButton>`;
    })()
  );
</script>

<H1>Buttons</H1>

<H2>Setup</H2>
<HighlightCompo code={modules['./md/setup.md'] as string} />

<H2>Interactive Button Bilder</H2>

<CodeWrapper class="flex flex-wrap gap-2">
  <div class="h-16">
    <Button color={btnColor as Button['color']} class={btnClass} outline={btnOutline} shadow={btnShadow} pill={btnPill} disabled={btnDisabled} size={btnSize as Button['size']} href={btnLink ? btnLink : ''}>Button</Button>
  </div>
  <div class="mt-4 space-y-4">
    <div class="flex flex-wrap space-x-10">
      <Label class="mb-4 w-full font-bold">Color</Label>
      {#each btnColors as colorOption}
        <Radio labelClass="w-24 my-1" name="btn_color" bind:group={btnColor as Button['color']} color={colorOption as Button['color']} value={colorOption}>{colorOption}</Radio>
      {/each}
    </div>
    <div class="flex flex-wrap space-x-8">
      <Label class="mb-4 w-full font-bold">Size</Label>
      {#each btnSizes as sizeOption}
        <Radio labelClass="w-24 my-1" name="btn_size" bind:group={btnSize as Button['size']} color={sizeOption as Button['size']} value={sizeOption}>{sizeOption}</Radio>
      {/each}
    </div>
  </div>
  <div class="mt-4 flex flex-wrap gap-2">
    <Button class="w-40" color="blue" onclick={changeBtnOutline}>{btnOutline === false ? 'Add outline' : 'Remove outline'}</Button>
    <Button class="w-40" color="green" onclick={changeBtnShadow}>{btnShadow === false ? 'Add shadow' : 'Remove shadow'}</Button>
    <Button class="w-40" color="yellow" onclick={changeBtnPill}>{btnPill === false ? 'Add pill' : 'Remove pill'}</Button>
    <Button class="w-40" color="red" onclick={changeBtnDisabled}>{btnDisabled === false ? 'Add disabled' : 'Remove disabled'}</Button>
    <Button class="w-40" onclick={changeBtnClass}>{btnClass === '' ? 'Add class' : 'Remove class'}</Button>
    <Button class="w-40" color="sky" onclick={changeBtnLink}>{btnLink === '' ? 'Add link' : 'Remove link'}</Button>
  </div>
  {#snippet codeblock()}
    <HighlightCompo code={generatedCode} class="w-full" />
  {/snippet}
</CodeWrapper>

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
        <Radio labelClass="w-24 my-1" name="gradient_size" bind:group={gradientSize as Button['size']} color={sizeOption as Button['size']} value={sizeOption}>{sizeOption}</Radio>
      {/each}
    </div>
  </div>
  <div class="mt-4 flex flex-wrap gap-2">
    <Button class="w-40" color="blue" onclick={changeGradientOutline}>{gradientOutline === false ? 'Add outline' : 'Remove outline'}</Button>
    <Button class="w-40" color="green" onclick={changeGradientShadow}>{gradientShadow === false ? 'Add shadow' : 'Remove shadow'}</Button>
    <Button class="w-40" color="yellow" onclick={changeGradientPill}>{graidentPill === false ? 'Add pill' : 'Remove pill'}</Button>
    <Button class="w-40" color="red" onclick={changeGradientDisabled}>{gradientDisabled === false ? 'Add disabled' : 'Remove disabled'}</Button>
    <Button class="w-40" onclick={changeGradientClass}>{gradientClass === '' ? 'Add class' : 'Remove class'}</Button>
    <Button class="w-40" color="sky" onclick={changeGradientLink}>{btnLink === '' ? 'Add link' : 'Remove link'}</Button>
  </div>
  {#snippet codeblock()}
    <HighlightCompo code={gradientGeneratedCode} />
  {/snippet}
</CodeWrapper>

<H2>Button with icon</H2>
<CodeWrapper innerClass="flex flex-wrap gap-2">
  <Button><ShoppingBagSolid class="me-2 h-4 w-4" />Buy Now</Button>
  <Button>Choose Plan<ArrowRightOutline class="ms-2 h-5 w-5" /></Button>
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/button-with-icon.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Button with label</H2>
<CodeWrapper>
  <Button class="gap-2">
    Messages
    <Indicator color="cyan" class="bg-primary-200 text-xs font-semibold text-primary-800" size="lg">2</Indicator>
  </Button>
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/button-with-label.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Icon buttons</H2>
<CodeWrapper innerClass="flex flex-wrap items-center gap-2">
  <Button class="!p-2"><ArrowRightOutline class="h-7 w-7" /></Button>
  <Button pill={true} class="!p-2"><ArrowRightOutline class="h-5 w-5" /></Button>
  <Button outline={true} class="!p-2" size="lg">
    <ThumbsUpSolid class="h-7 w-7" />
  </Button>
  <Button pill={true} outline={true} class="!p-2" size="xl">
    <ThumbsUpSolid class="h-5 w-5" />
  </Button>
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/icon-buttons.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Loader</H2>
<CodeWrapper>
  <Button>
    <Spinner class="me-3" size="4" color="teal" />Loading ...
  </Button>
  <Button color="alternative">
    <Spinner class="me-3" size="4" />Loading ...
  </Button>
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/loader.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Events</H2>
<CodeWrapper>
  <Button onclick={btn1}>Button 1</Button>
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/events.md'] as string} />
  {/snippet}
</CodeWrapper>
