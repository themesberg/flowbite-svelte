<script lang="ts">
  import { Alert, alert as fsalert, Button, Label, Radio, type AlertProps } from '$lib';
  import { InfoCircleSolid, EyeSolid } from 'flowbite-svelte-icons';
  import { blur, fly, slide, scale } from 'svelte/transition';
  import type { FlyParams, BlurParams, SlideParams, ScaleParams } from 'svelte/transition';
  import { linear } from 'svelte/easing';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  import H3 from '../../utils/heading/H3.svelte';

  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
  let alertEventStatus = $state(true);
  function handleClose() {
    console.log('Alert dismissed');
    alert('Alert dismissed');
    alertEventStatus = false;
  }
  // interactive  color, rounded, border, dismissable, class
  const colors = Object.keys(fsalert.variants.color);
  let color: AlertProps['color'] = $state('primary');
  let iconColor: AlertProps['color'] = $state('primary');
  let listColor: AlertProps['color'] = $state('primary');
  let borderAccessColor: AlertProps['color'] = $state('primary');
  let additionalColor: AlertProps['color'] = $state('primary');
  let iconSlot = $state(false);
  const changeIconSlot = () => {
    iconSlot = !iconSlot;
  };
  let rounded: AlertProps['rounded'] = $state(false);
  const changeRounded = () => {
    rounded = !rounded;
  };
  let border: AlertProps['border'] = $state(false);
  const changeBorder = () => {
    border = !border;
  };
  let dismissable: AlertProps['dismissable'] = $state(true);
  const changeDismissable = () => {
    dismissable = !dismissable;
  };

  let alertStatusInteractive = $state(true);
  const changeStatusInteractive = () => {
    alertStatusInteractive = true;
  };
  let alertClass: AlertProps['class'] = $state('');
  const changeClass = () => {
    alertClass = alertClass === '' ? 'pl-10' : '';
  };
  let borderAccent = $state(false);
  const changeBorderAccent = () => {
    borderAccent = !borderAccent;
    alertClass = borderAccent ? 'border-t-4' : '';
    rounded = false;
  };

  // transition
  type TransitionOption = {
    name: string;
    transition: typeof fly | typeof blur | typeof slide | typeof scale;
    params: FlyParams | BlurParams | SlideParams | ScaleParams;
  };

  const transitions: TransitionOption[] = [
    { name: 'Fly', transition: fly, params: { duration: 500, easing: linear, x: 150 } },
    { name: 'Blur', transition: blur, params: { duration: 500, easing: linear } },
    { name: 'Slide', transition: slide, params: { duration: 500, easing: linear, x: -150 } },
    { name: 'Scale', transition: scale, params: { duration: 500, easing: linear } }
  ];

  let selectedTransition = $state('Fly');
  let currentTransition = $derived(transitions.find((t) => t.name === selectedTransition) || transitions[0]);

  // code generator
  let generatedCode = $derived(
    (() => {
      let props = [];
      if (color !== 'primary') props.push(` color="${color}"`);
      if (rounded) props.push(' rounded');
      if (border) props.push(' border');
      if (dismissable) props.push(' dismissable');
      if (alertClass) props.push(` class="${alertClass}"`);
      if (!alertStatusInteractive) props.push(' alertStatus={false}');
      if (currentTransition !== transitions[0] && dismissable) {
        props.push(` transition={${currentTransition.transition.name}}`);

        // Generate params string without quotes and handle functions
        const paramsString = Object.entries(currentTransition.params)
          .map(([key, value]) => {
            if (typeof value === 'function') {
              return `${key}:${value.name}`;
            }
            return `${key}:${value}`;
          })
          .join(',');
        props.push(` params={{${paramsString}}}`);
      }

      const propsString = props.length > 0 ? props.map((prop) => `\n  ${prop}`).join('') + '\n' : ' ';

      let iconCode = '';
      if (iconSlot) {
        iconCode = `
  {#snippet icon()}
    <InfoCircleSolid class="h-5 w-5" />
  {/snippet}`;
      }
      return `<Alert${propsString}>${iconCode}
  My Alert
</Alert>`;
    })()
  );
</script>

<H1>Alert</H1>

<H2>Setup</H2>
<HighlightCompo code={modules['./md/setup.md'] as string} />

<H2>Interactive Alert Bilder</H2>

<CodeWrapper>
  <div class="mb-4 h-20">
    <Alert {color} {rounded} {border} {dismissable} class={alertClass} bind:alertStatus={alertStatusInteractive} transition={currentTransition.transition} params={currentTransition.params}>
      {#snippet icon()}
        {#if iconSlot}
          <InfoCircleSolid class="h-5 w-5" />
        {/if}
      {/snippet}
      <span class="font-medium">My Alert!</span>
    </Alert>
  </div>
  <div class="mb-4 h-12">
    <Button disabled={alertStatusInteractive ? true : false} onclick={changeStatusInteractive}>Open alert</Button>
  </div>
  <div class="mb-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Color</Label>
    {#each colors as colorOption}
      <Radio labelClass="w-24 my-1" name="alert_reactive" bind:group={color} color={colorOption as AlertProps['color']} value={colorOption}>{colorOption}</Radio>
    {/each}
  </div>
  <div class="mb-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Transition</Label>
    {#each transitions as transition}
      <Radio disabled={dismissable ? false : true} labelClass="w-24 my-1 {dismissable ? '' : 'opacity-30 cursor-not-allowed'}" name="transition_interactive" bind:group={selectedTransition} value={transition.name}>{transition.name}</Radio>
    {/each}
  </div>
  <div class="mt-4 flex flex-wrap gap-2">
    <Button class="w-48" color="blue" onclick={changeRounded}>{rounded ? 'Remove rounded' : 'Add rounded'}</Button>
    <Button class="w-48" color="red" onclick={changeBorder}>{border ? 'Remove border' : 'Add border'}</Button>
    <Button class="w-48" color="yellow" onclick={changeDismissable}>{dismissable ? 'Remove dismissable' : 'Add dismissable'}</Button>
    <Button class="w-48" color="green" onclick={changeClass}>{alertClass ? 'Remove class' : 'Add class'}</Button>
    <Button class="w-48" color="sky" onclick={changeIconSlot}>{iconSlot ? 'Remove icon' : 'Add icon'}</Button>
    <Button class="w-48" color="rose" onclick={changeBorderAccent}>{borderAccent ? 'Remove accent' : 'Add accent'}</Button>
  </div>
  {#snippet codeblock()}
    <HighlightCompo code={generatedCode} />
  {/snippet}
</CodeWrapper>

<H2>Alerts with list</H2>
<CodeWrapper>
  <div class="mb-4">
    <Alert color={listColor} class="!items-start">
      {#snippet icon()}
        <InfoCircleSolid class="h-5 w-5" />
      {/snippet}
      <p class="font-medium">Ensure that these requirements are met:</p>
      <ul class="ms-4 mt-1.5 list-inside list-disc">
        <li>At least 10 characters (and up to 100 characters)</li>
        <li>At least one lowercase character</li>
        <li>Inclusion of at least one special character, e.g., ! @ # ?</li>
      </ul>
    </Alert>
  </div>
  <div class="flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Color</Label>
    {#each colors as colorOption}
      <Radio labelClass="w-24 my-1" name="list_alert_color" bind:group={listColor} color={colorOption as AlertProps['color']} value={colorOption}>{colorOption}</Radio>
    {/each}
  </div>
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/alerts-with-list.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Additional content</H2>
<CodeWrapper>
  <div class="mb-4">
    <Alert color={additionalColor}>
      <div class="flex items-center gap-3">
        {#snippet icon()}
          <InfoCircleSolid class="h-5 w-5" />
        {/snippet}
        <span class="text-lg font-medium">This is a info alert</span>
      </div>
      <p class="mb-4 mt-2 text-sm">More info about this info alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
      <div class="flex gap-2">
        <Button size="xs"><EyeSolid class="me-2 h-4 w-4" />View more</Button>
        <Button size="xs" outline>Go to Home</Button>
      </div>
    </Alert>
  </div>
  <div class="flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Color</Label>
    {#each colors as colorOption}
      <Radio labelClass="w-24 my-1" name="additional_alert_color" bind:group={additionalColor} color={colorOption as AlertProps['color']} value={colorOption}>{colorOption}</Radio>
    {/each}
  </div>
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/additional-content.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Custom color</H2>
<CodeWrapper class="p-4">
  <Alert dismissable class="bg-sky-500 text-white dark:bg-lime-500 dark:text-white">Your content</Alert>
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/custom-color.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Events</H2>
<CodeWrapper class="p-4">
  <Alert dismissable onclick={handleClose} bind:alertStatus={alertEventStatus}>Close me</Alert>
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/events.md'] as string} />
  {/snippet}
</CodeWrapper>
