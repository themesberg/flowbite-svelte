<script lang="ts">
  import { Alert, List, Li, Button, Label, Radio, type AlertProps } from '$lib';
  import { InfoCircleSolid, EyeSolid } from 'flowbite-svelte-icons';

  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
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
  let color: AlertProps['color'] = $state('gray');
  let rounded: AlertProps['rounded'] = $state(false);
  const changeRounded = () => {
    rounded = !rounded;
  }
  let border: AlertProps['border'] = $state(false);
  const changeBorder = () => {
    border = !border;
  }
  let dismissable: AlertProps['dismissable'] = $state(false);
  const changeDismissable = () => {
    dismissable = !dismissable;
  }
  let alertStatus2 = $state(true)
  const changeStatus = () => {
    alertStatus2 = true
  }
  let alertClass: AlertProps['class'] = $state('')
  const changeClass = () => {
    alertClass = alertClass === '' ? 'p-8' : ''
  }
</script>

<H1>Alert</H1>

<H2>Setup</H2>
<HighlightCompo codeLang="ts" code={modules['./md/setup.md'] as string} />

<H2>Default alert</H2>
<CodeWrapper class="space-y-4">
  <Alert>
    <span class="font-medium">Default alert!</span>
    Change a few things up and try submitting again.
  </Alert>
  <Alert color="blue">
    <span class="font-medium">Blue alert!</span>
    Change a few things up and try submitting again.
  </Alert>
  <Alert color="gray">
    <span class="font-medium">Gray alert!</span>
    Change a few things up and try submitting again.
  </Alert>
  <Alert color="green">
    <span class="font-medium">Green alert!</span>
    Change a few things up and try submitting again.
  </Alert>
  <Alert color="indigo">
    <span class="font-medium">Indigo alert!</span>
    Change a few things up and try submitting again.
  </Alert>
  <Alert color="pink">
    <span class="font-medium">Pink alert!</span>
    Change a few things up and try submitting again.
  </Alert>
  <Alert color="purple">
    <span class="font-medium">Purple alert!</span>
    Change a few things up and try submitting again.
  </Alert>
  <Alert color="red">
    <span class="font-medium">Red alert!</span>
    Change a few things up and try submitting again.
  </Alert>
  <Alert color="yellow">
    <span class="font-medium">Yellow alert!</span>
    Change a few things up and try submitting again.
  </Alert>
</CodeWrapper>
<HighlightCompo
  codeLang="ts"
  code={modules['./md/default-alert.md'] as string}
/>

<H2>Reactive alert</H2>
<CodeWrapper class="space-y-4">
  <Alert {color} {rounded} {border} {dismissable} class={alertClass} bind:alertStatus={alertStatus2}>
    <span class="font-medium">Default alert!</span>
  </Alert>
  {#if !alertStatus2}
    <Button color="light" onclick={changeStatus}>Open alert</Button>
  {/if}
  <div class="flex space-x-4">
    <Label>Change color</Label>
    <Radio name="color" bind:group={color} value="red">Red</Radio>
    <Radio name="color" bind:group={color} value="green">Green</Radio>
    <Radio name="color" bind:group={color} value="yellow">Yellow</Radio>
    <Radio name="color" bind:group={color} value="indigo">Indigo</Radio>
    <Radio name="color" bind:group={color} value="purple">Purple</Radio>
    <Radio name="color" bind:group={color} value="pink">Pink</Radio>
  </div>
  <Button color="blue" onclick={changeRounded}>{rounded? 'Remove rounded' : 'Add rounded'}</Button>
  <Button color="red" onclick={changeBorder}>{border? 'Remove border' : 'Add border'}</Button>
  <Button color="yellow" onclick={changeDismissable}>{dismissable? 'Remove dismissable' : 'Add dismissable'}</Button>
  <Button color="green" onclick={changeClass}>{alertClass? 'Remove class' : 'Add class'}</Button>
</CodeWrapper>
<HighlightCompo codeLang="ts" code={modules['./md/reactive-alert.md'] as string} />

<H2>Alerts with icon</H2>
<CodeWrapper class="space-y-4">
  <Alert>
    {#snippet icon()}
      <InfoCircleSolid class="h-5 w-5" />
    {/snippet}
    <span class="font-medium">Default alert!</span>
    Change a few things up and try submitting again.
  </Alert>
  <Alert color="blue">
    {#snippet icon()}
      <InfoCircleSolid class="h-5 w-5" />
    {/snippet}
    <span class="font-medium">Blue alert!</span>
    Change a few things up and try submitting again.
  </Alert>
  <Alert color="gray">
    {#snippet icon()}
      <InfoCircleSolid class="h-5 w-5" />
    {/snippet}
    <span class="font-medium">Gray alert!</span>
    Change a few things up and try submitting again.
  </Alert>
  <Alert color="green">
    {#snippet icon()}
      <InfoCircleSolid class="h-5 w-5" />
    {/snippet}
    <span class="font-medium">Green alert!</span>
    Change a few things up and try submitting again.
  </Alert>
  <Alert color="indigo">
    {#snippet icon()}
      <InfoCircleSolid class="h-5 w-5" />
    {/snippet}
    <span class="font-medium">Indigo alert!</span>
    Change a few things up and try submitting again.
  </Alert>
  <Alert color="pink">
    {#snippet icon()}
      <InfoCircleSolid class="h-5 w-5" />
    {/snippet}
    <span class="font-medium">Pink alert!</span>
    Change a few things up and try submitting again.
  </Alert>
  <Alert color="purple">
    {#snippet icon()}
      <InfoCircleSolid class="h-5 w-5" />
    {/snippet}
    <span class="font-medium">Purple alert!</span>
    Change a few things up and try submitting again.
  </Alert>
  <Alert color="red">
    {#snippet icon()}
      <InfoCircleSolid class="h-5 w-5" />
    {/snippet}
    <span class="font-medium">Red alert!</span>
    Change a few things up and try submitting again.
  </Alert>
  <Alert color="yellow">
    {#snippet icon()}
      <InfoCircleSolid class="h-5 w-5" />
    {/snippet}
    <span class="font-medium">Yellow alert!</span>
    Change a few things up and try submitting again.
  </Alert>
</CodeWrapper>
<HighlightCompo
  codeLang="ts"
  code={modules['./md/alerts-with-icon.md'] as string}
/>

<H2>Bordered alerts</H2>
<CodeWrapper class="space-y-4">
  <Alert border>
    {#snippet icon()}
      <InfoCircleSolid class="h-5 w-5" />
    {/snippet}
    <span class="font-medium">Default alert!</span>
    Change a few things up and try submitting again.
  </Alert>
  <Alert color="blue" border>
    {#snippet icon()}
      <InfoCircleSolid class="h-5 w-5" />
    {/snippet}
    <span class="font-medium">Blue alert!</span>
    Change a few things up and try submitting again.
  </Alert>
  <Alert color="gray" border>
    {#snippet icon()}
      <InfoCircleSolid class="h-5 w-5" />
    {/snippet}
    <span class="font-medium">Gray alert!</span>
    Change a few things up and try submitting again.
  </Alert>
  <Alert color="green" border>
    {#snippet icon()}
      <InfoCircleSolid class="h-5 w-5" />
    {/snippet}
    <span class="font-medium">Green alert!</span>
    Change a few things up and try submitting again.
  </Alert>
  <Alert color="indigo" border>
    {#snippet icon()}
      <InfoCircleSolid class="h-5 w-5" />
    {/snippet}
    <span class="font-medium">Indigo alert!</span>
    Change a few things up and try submitting again.
  </Alert>
  <Alert color="pink" border>
    {#snippet icon()}
      <InfoCircleSolid class="h-5 w-5" />
    {/snippet}
    <span class="font-medium">Pink alert!</span>
    Change a few things up and try submitting again.
  </Alert>
  <Alert color="purple" border>
    {#snippet icon()}
      <InfoCircleSolid class="h-5 w-5" />
    {/snippet}
    <span class="font-medium">Purple alert!</span>
    Change a few things up and try submitting again.
  </Alert>
  <Alert color="red" border>
    {#snippet icon()}
      <InfoCircleSolid class="h-5 w-5" />
    {/snippet}
    <span class="font-medium">Red alert!</span>
    Change a few things up and try submitting again.
  </Alert>
  <Alert color="yellow" border>
    {#snippet icon()}
      <InfoCircleSolid class="h-5 w-5" />
    {/snippet}
    <span class="font-medium">Yellow alert!</span>
    Change a few things up and try submitting again.
  </Alert>
</CodeWrapper>
<HighlightCompo
  codeLang="ts"
  code={modules['./md/bordered-alerts.md'] as string}
/>

<H2>Alerts with list</H2>
<CodeWrapper class="space-y-4">
  <Alert class="!items-start">
    {#snippet icon()}
      <InfoCircleSolid class="h-5 w-5" />
      <span class="sr-only">Info</span>
    {/snippet}
    <p class="font-medium">Ensure that these requirements are met:</p>
    <ul class="ms-4 mt-1.5 list-inside list-disc">
      <li>At least 10 characters (and up to 100 characters)</li>
      <li>At least one lowercase character</li>
      <li>Inclusion of at least one special character, e.g., ! @ # ?</li>
    </ul>
  </Alert>
  <Alert color="blue" class="!items-start">
    {#snippet icon()}
      <InfoCircleSolid class="h-5 w-5" />
      <span class="sr-only">Info</span>
    {/snippet}
    <p class="font-medium">Ensure that these requirements are met:</p>
    <List class="ms-4 mt-1.5">
      <Li>At least 10 characters (and up to 100 characters)</Li>
      <Li>At least one lowercase character</Li>
      <Li>Inclusion of at least one special character, e.g., ! @ # ?</Li>
    </List>
  </Alert>
</CodeWrapper>
<HighlightCompo
  codeLang="ts"
  code={modules['./md/alerts-with-list.md'] as string}
/>

<H2>Dismissable alerts</H2>
<CodeWrapper class="min-h-[450px] space-y-4">
  <Alert dismissable>
    {#snippet icon()}
      <InfoCircleSolid class="h-5 w-5" />
    {/snippet}
    <span class="font-medium">Default alert!</span>
    Change a few things up and try submitting again.
  </Alert>
  <Alert dismissable color="blue">
    {#snippet icon()}
      <InfoCircleSolid class="h-5 w-5" />
    {/snippet}
    <span class="font-medium">Info alert!</span>
    Change a few things up and try submitting again.
  </Alert>
  <Alert dismissable color="red">
    {#snippet icon()}
      <InfoCircleSolid class="h-5 w-5" />
    {/snippet}
    <span class="font-medium">Danger alert!</span>
    Change a few things up and try submitting again.
  </Alert>
  <Alert dismissable color="green">
    {#snippet icon()}
      <InfoCircleSolid class="h-5 w-5" />
    {/snippet}
    <span class="font-medium">Success alert!</span>
    Change a few things up and try submitting again.
  </Alert>
  <Alert dismissable color="yellow">
    {#snippet icon()}
      <InfoCircleSolid class="h-5 w-5" />
    {/snippet}
    <span class="font-medium">Warning alert!</span>
    Change a few things up and try submitting again.
  </Alert>
  <Alert dismissable color="pink">
    {#snippet icon()}
      <InfoCircleSolid class="h-5 w-5" />
    {/snippet}
    <span class="font-medium">Dark alert!</span>
    Change a few things up and try submitting again.
  </Alert>
</CodeWrapper>
<HighlightCompo
  codeLang="ts"
  code={modules['./md/dismissable-alerts.md'] as string}
/>

<H2>Border accent</H2>
<CodeWrapper class="space-y-4">
  <Alert rounded={false} class="border-t-4">
    {#snippet icon()}
      <InfoCircleSolid class="h-5 w-5" />
    {/snippet}
    <span class="font-medium">Info alert!</span>
    Change a few things up and try submitting again.
  </Alert>
  <Alert color="red" rounded={false} class="border-t-4">
    {#snippet icon()}
      <InfoCircleSolid class="h-5 w-5" />
    {/snippet}
    <span class="font-medium">Danger alert!</span>
    Change a few things up and try submitting again.
  </Alert>
  <Alert color="green" rounded={false} class="border-t-4">
    {#snippet icon()}
      <InfoCircleSolid class="h-5 w-5" />
    {/snippet}
    <span class="font-medium">Success alert!</span>
    Change a few things up and try submitting again.
  </Alert>
  <Alert color="yellow" rounded={false} class="border-t-4">
    {#snippet icon()}
      <InfoCircleSolid class="h-5 w-5" />
    {/snippet}
    <span class="font-medium">Warning alert!</span>
    Change a few things up and try submitting again.
  </Alert>
  <Alert color="pink" rounded={false} class="flex-row-reverse border-t-4">
    {#snippet icon()}
      <InfoCircleSolid class="h-5 w-5" />
    {/snippet}
    <span class="font-medium">Dark alert!</span>
    Change a few things up and try submitting again.
  </Alert>
</CodeWrapper>
<HighlightCompo
  codeLang="ts"
  code={modules['./md/border-accent.md'] as string}
/>

<H2>Additional content</H2>
<CodeWrapper class="space-y-4">
  <Alert>
    <div class="flex items-center gap-3">
      {#snippet icon()}
        <InfoCircleSolid class="h-5 w-5" />
      {/snippet}
      <span class="text-lg font-medium">This is a info alert</span>
    </div>
    <p class="mb-4 mt-2 text-sm">
      More info about this info alert goes here. This example text is going to
      run a bit longer so that you can see how spacing within an alert works
      with this kind of content.
    </p>
    <div class="flex gap-2">
      <Button size="xs"><EyeSolid class="me-2 h-4 w-4" />View more</Button>
      <Button size="xs" outline>Go to Home</Button>
    </div>
  </Alert>
  <Alert color="green">
    <div class="flex items-center gap-3">
      {#snippet icon()}
        <InfoCircleSolid class="h-5 w-5" />
      {/snippet}
      <span class="text-lg font-medium">This is a info alert</span>
    </div>
    <p class="mb-4 mt-2 text-sm">
      More info about this info alert goes here. This example text is going to
      run a bit longer so that you can see how spacing within an alert works
      with this kind of content.
    </p>
    <div class="flex gap-2">
      <Button size="xs" color="green"
        ><EyeSolid class="me-2 h-4 w-4" />View more</Button
      >
      <Button size="xs" outline color="green">Go to Home</Button>
    </div>
  </Alert>
</CodeWrapper>
<HighlightCompo
  codeLang="ts"
  code={modules['./md/additional-content.md'] as string}
/>

<H2>Custom color</H2>
<CodeWrapper>
  <Alert color="none" class="bg-sky-500 text-white">Your content</Alert>
</CodeWrapper>
<HighlightCompo
  codeLang="ts"
  code={modules['./md/custom-color.md'] as string}
/>

<H2>Events</H2>
<CodeWrapper class="h-24">
  <Alert dismissable onclick={handleClose} bind:alertStatus={alertEventStatus}>
    Close me
  </Alert>
</CodeWrapper>
<HighlightCompo codeLang="ts" code={modules['./md/events.md'] as string} />


