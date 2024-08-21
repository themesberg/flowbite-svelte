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
  import H3 from '../../utils/H3.svelte';
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
  // reactive  color, rounded, border, dismissable, class
  const colors = Object.keys(fsalert.variants.color);
  let color: AlertProps['color'] = $state('primary');
  let defaultColor: AlertProps['color'] = $state('primary');
  let iconColor: AlertProps['color'] = $state('primary');
  let borderColor: AlertProps['color'] = $state('primary');
  let listColor: AlertProps['color'] = $state('primary');
  let dismissableColor: AlertProps['color'] = $state('primary');
  let borderAccessColor: AlertProps['color'] = $state('primary');
  let additionalColor: AlertProps['color'] = $state('primary');

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
  let alertStatus2 = $state(true);
  const changeStatus = () => {
    alertStatus2 = true;
  };
  let alertClass: AlertProps['class'] = $state('');
  const changeClass = () => {
    alertClass = alertClass === '' ? 'p-8' : '';
  };
  let flyStatus: AlertProps['alertStatus'] = $state(true);
  const changeFlyStatus = () => {
    flyStatus = !flyStatus;
  }
  let blurStatus: AlertProps['alertStatus'] = $state(true);
  const changeBlurStatus = () => {
    blurStatus = !blurStatus;
  }
  let slideStatus: AlertProps['alertStatus'] = $state(true);
  const changeSlideStatus = () => {
    slideStatus = !slideStatus;
  }
  let scaleStatus: AlertProps['alertStatus'] = $state(true);
  const changeScaleStatus = () => {
    scaleStatus = !scaleStatus;
  }

  const transitions = [
    { name: 'fly', transition: fly, params: { duration: 1000, easing: linear, x: 150 }, color: 'blue' },
    { name: 'blur', transition: blur , params: { duration: 1000, easing: linear }, color: 'lime' },
    { name: 'slide', transition: slide, params: { duration: 1000, easing: linear, x: -150 }, color: 'violet' },
    { name: 'scale', transition: scale, params: { duration: 1000, easing: linear }, color: 'pink' }
  ];
  
  type TransitionOption = {
    name: string;
    transition: typeof fly | typeof blur | typeof slide | typeof scale;
    params: FlyParams | BlurParams | SlideParams | ScaleParams;
  };
  
  let selectedTransition = $state('fly');
  let currentTransition = $derived(transitions.find(t => t.name === selectedTransition) || transitions[0]);

  let transionStatus = $state(true);
  const changeTransitionStatus = () => {
    transionStatus = !transionStatus;
  }

</script>

<H1>Alert</H1>

<H2>Setup</H2>
<HighlightCompo codeLang="ts" code={modules['./md/setup.md'] as string} />

<H2>Default alert</H2>
<CodeWrapper class="space-y-4">
  <div class="h-20">
    <Alert color={defaultColor} class={alertClass}>
      <span class="font-medium">Default alert!</span>
    </Alert>
  </div>

  <div class="flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Color</Label>
    {#each colors as colorOption}
      <Radio labelClass="w-24 my-1" name="default_alert_color" bind:group={defaultColor} color={colorOption as AlertProps['color']} value={colorOption}>{colorOption}</Radio>
    {/each}
  </div>

  <Button class="w-48" color="green" onclick={changeClass}>{alertClass ? 'Remove class' : 'Add class'}</Button>
</CodeWrapper>
<HighlightCompo codeLang="ts" code={modules['./md/default-alert.md'] as string} />

<H2>Alerts with icon</H2>
<CodeWrapper class="space-y-4">
  <div class="h-20">
    <Alert color={iconColor}>
      {#snippet icon()}
        <InfoCircleSolid class="h-5 w-5" />
      {/snippet}
      <span class="font-medium">Default alert!</span>
      Change a few things up and try submitting again.
    </Alert>
  </div>

  <div class="flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Color</Label>
    {#each colors as colorOption}
      <Radio labelClass="w-24 my-1" name="icon_alert_color" bind:group={iconColor} color={colorOption as AlertProps['color']} value={colorOption}>{colorOption}</Radio>
    {/each}
  </div>
</CodeWrapper>
<HighlightCompo codeLang="ts" code={modules['./md/alerts-with-icon.md'] as string} />

<H2>Bordered alerts</H2>
<CodeWrapper class="space-y-4">
  <div class="h-20">
    <Alert border color={borderColor}>
      {#snippet icon()}
        <InfoCircleSolid class="h-5 w-5" />
      {/snippet}
      <span class="font-medium">Default alert!</span>
      Change a few things up and try submitting again.
    </Alert>
  </div>

  <div class="flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Color</Label>
    {#each colors as colorOption}
      <Radio labelClass="w-24 my-1" name="bordered_alert_color" bind:group={borderColor} color={colorOption as AlertProps['color']} value={colorOption}>{colorOption}</Radio>
    {/each}
  </div>
</CodeWrapper>
<HighlightCompo codeLang="ts" code={modules['./md/bordered-alerts.md'] as string} />

<H2>Alerts with list</H2>
<CodeWrapper class="space-y-4">
  <div class="h-48 sm:h-32">
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
</CodeWrapper>
<HighlightCompo codeLang="ts" code={modules['./md/alerts-with-list.md'] as string} />

<H2>Dismissable alerts</H2>
<CodeWrapper class="space-y-4">
  <div class="h-12">
    <Alert color={dismissableColor} {dismissable} bind:alertStatus={alertStatus2}>
      {#snippet icon()}
        <InfoCircleSolid class="h-5 w-5" />
      {/snippet}
      <span class="font-medium">Default alert!</span>
      Change a few things up and try submitting again.
    </Alert>
  </div>
  <div class="h-12">
    {#if !alertStatus2}
      <Button color="light" onclick={changeStatus}>Open alert</Button>
    {/if}
  </div>

  <div class="flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Color</Label>
    {#each colors as colorOption}
      <Radio labelClass="w-24 my-1" name="dissmissible_alert_color" bind:group={dismissableColor} color={colorOption as AlertProps['color']} value={colorOption}>{colorOption}</Radio>
    {/each}
  </div>
  <Button class="w-48" color="yellow" onclick={changeDismissable}>{dismissable ? 'Remove dismissable' : 'Add dismissable'}</Button>
</CodeWrapper>
<HighlightCompo codeLang="ts" code={modules['./md/dismissable-alerts.md'] as string} />

<H2>Border accent</H2>
<CodeWrapper class="space-y-4">
  <div class="h-20">
    <Alert rounded={false} color={borderAccessColor} class="border-t-4">
      {#snippet icon()}
        <InfoCircleSolid class="h-5 w-5" />
      {/snippet}
      <span class="font-medium">Default alert!</span>
      Change a few things up and try submitting again.
    </Alert>
  </div>

  <div class="flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Color</Label>
    {#each colors as colorOption}
      <Radio labelClass="w-24 my-1" name="border_accent_alert_color" bind:group={borderAccessColor} color={colorOption as AlertProps['color']} value={colorOption}>{colorOption}</Radio>
    {/each}
  </div>

  <Alert color="pink" rounded={false} class="flex-row-reverse border-t-4">
    {#snippet icon()}
      <InfoCircleSolid class="h-5 w-5" />
    {/snippet}
    <span class="font-medium">Dark alert!</span>
    Change a few things up and try submitting again.
  </Alert>
</CodeWrapper>
<HighlightCompo codeLang="ts" code={modules['./md/border-accent.md'] as string} />

<H2>Additional content</H2>
<CodeWrapper class="space-y-4">
  <div class="h-52">
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
</CodeWrapper>
<HighlightCompo codeLang="ts" code={modules['./md/additional-content.md'] as string} />

<H2>Rounded</H2>
<CodeWrapper class="space-y-4">
  <div class="h-20">
    <Alert {color} {rounded}>
      <span class="font-medium">Default alert!</span>
    </Alert>
  </div>

  <div class="flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Color</Label>
    {#each colors as colorOption}
      <Radio labelClass="w-24 my-1" name="alert_rounded" bind:group={color} color={colorOption as AlertProps['color']} value={colorOption}>{colorOption}</Radio>
    {/each}
  </div>
  <Button class="w-48" color="blue" onclick={changeRounded}>{rounded ? 'Remove rounded' : 'Add rounded'}</Button>
</CodeWrapper>

<H2>Custom color</H2>
<CodeWrapper>
  <Alert dismissable class="bg-sky-500 text-white">Your content</Alert>
</CodeWrapper>
<HighlightCompo codeLang="ts" code={modules['./md/custom-color.md'] as string} />

<H2>Events</H2>
<CodeWrapper class="h-24">
  <Alert dismissable onclick={handleClose} bind:alertStatus={alertEventStatus}>Close me</Alert>
</CodeWrapper>
<HighlightCompo codeLang="ts" code={modules['./md/events.md'] as string} />

<H2>Reactive alert</H2>
<CodeWrapper class="space-y-4">
  <div class="h-20">
    <Alert {color} {rounded} {border} {dismissable} class={alertClass} bind:alertStatus={alertStatus2}>
      <span class="font-medium">Default alert!</span>
    </Alert>
  </div>
  <div class="h-12">
    {#if !alertStatus2}
    <Button color="light" onclick={changeStatus}>Open alert</Button>
  {/if}
  </div>

  <div class="flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Color</Label>
    {#each colors as colorOption}
      <Radio labelClass="w-24 my-1" name="alert_reactive" bind:group={color} color={colorOption as AlertProps['color']} value={colorOption}>{colorOption}</Radio>
    {/each}
  </div>
  <Button class="w-48" color="blue" onclick={changeRounded}>{rounded ? 'Remove rounded' : 'Add rounded'}</Button>
  <Button class="w-48" color="red" onclick={changeBorder}>{border ? 'Remove border' : 'Add border'}</Button>
  <Button class="w-48" color="yellow" onclick={changeDismissable}>{dismissable ? 'Remove dismissable' : 'Add dismissable'}</Button>
  <Button class="w-48" color="green" onclick={changeClass}>{alertClass ? 'Remove class' : 'Add class'}</Button>
</CodeWrapper>

<H2>Transition</H2>

<CodeWrapper class="h-56">
  <div class="h-16">
    <Alert color={currentTransition.color as AlertProps['color']} dismissable bind:alertStatus={transionStatus} transition={currentTransition.transition} params={currentTransition.params}>
      <span class="font-medium">{selectedTransition} transition</span>
    </Alert>
    </div>
    <div class="flex flex-wrap space-x-4 mb-4">
      <Label class="mb-4 w-full font-bold">Transition</Label>
      {#each transitions as transition}
        <Radio labelClass="w-24 my-1" name="icon_alert_color" bind:group={selectedTransition} value={transition.name}>{transition.name}</Radio>
      {/each}
    </div>
    {#if !transionStatus}
    <Button class="w-36" color="green" onclick={changeTransitionStatus}>{transionStatus ? '' : 'Open'}</Button>
    {/if}
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/transition.md'] as string} />