<script lang="ts">
  import { Badge, badge, Button, Indicator, Radio, Label, type BadgeProps } from '$lib';
  import { ClockSolid, EnvelopeSolid, CheckOutline, CheckCircleOutline } from 'flowbite-svelte-icons';
  import { blur, fly, slide, scale } from 'svelte/transition';
  import type { FlyParams, BlurParams, SlideParams, ScaleParams } from 'svelte/transition';
  import { linear } from 'svelte/easing';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  // import H3 from '../../utils/H3.svelte';

  let eventStatus = $state(true);
  function handleClose() {
    console.log('Badge dismissed');
    alert('Badge dismissed');
    eventStatus = false;
  }

  let openBadgeStatus = $state(false);
  function openBadge() {
    openBadgeStatus = true;
  }

  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  // interactive example
  const colors = Object.keys(badge.variants.color);
  let color: BadgeProps['color'] = $state('primary');
  let badgeSize: BadgeProps['large'] = $state(false);
  const changeSize = () => {
    badgeSize = !badgeSize;
  };
  let badgeDismissable: BadgeProps['dismissable'] = $state(false);
  const changeDismissable = () => {
    badgeDismissable = !badgeDismissable;
  };
  let badgeClass: BadgeProps['class'] = $state('');
  const changeClass = () => {
    badgeClass = badgeClass === '' ? 'w-40 p-2' : '';
  };
  let badgeStatus2 = $state(true);
  const changeStatus = () => {
    badgeStatus2 = true;
  };
  let border: BadgeProps['border'] = $state(false);
  const changeBorder = () => {
    border = !border;
  };
  let rounded: BadgeProps['rounded'] = $state(false);
  const changeRounded = () => {
    rounded = !rounded;
  };
  let link = $state('');
  const changeLink = () => {
    link = link === '' ? '/' : '';
  };
  let iconSlot = $state(false);
  const changeIconSlot = () => {
    iconSlot = !iconSlot;
  };

  // transition example
  type TransitionOption = {
    name: string;
    transition: typeof fly | typeof blur | typeof slide | typeof scale;
    params: FlyParams | BlurParams | SlideParams | ScaleParams;
    color: Badge['color'];
  };

  const transitions: TransitionOption[] = [
    { name: 'Fly', transition: fly, params: { duration: 500, easing: linear, x: 150 }, color: 'blue' },
    { name: 'Blur', transition: blur, params: { duration: 500, easing: linear }, color: 'lime' },
    { name: 'Slide', transition: slide, params: { duration: 500, easing: linear, x: -150 }, color: 'violet' },
    { name: 'Scale', transition: scale, params: { duration: 500, easing: linear }, color: 'pink' }
  ];

  let selectedTransition = $state('Fly');
  let currentTransition = $derived(transitions.find((t) => t.name === selectedTransition) || transitions[0]);

  let generatedCode = $derived(
    (() => {
      let props = [];
      if (color !== 'primary') props.push(` color="${color}"`);
      if (badgeSize) props.push(' large');
      if (badgeDismissable) props.push(' dismissable');
      if (badgeClass) props.push(` class="${badgeClass}"`);
      if (!badgeStatus2) props.push(' badgeStatus={false}');
      if (border) props.push(' border');
      if (link) props.push(` href="${link}"`);
      if (rounded) props.push(' rounded');
      if (currentTransition !== transitions[0] && badgeDismissable) {
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

      if (iconSlot) {
        return `<Badge${propsString}>
  <ClockSolid class="me-1.5 h-3 w-3" />
  My Badge
</Badge>`;
      } else {
        return `<Badge${propsString}>My Badge</Badge>`;
      }
    })()
  );
</script>

<H1>Badge</H1>
<H2>Setup</H2>
<HighlightCompo code={modules['./md/setup.md'] as string} />

<H2>Interactive Badge Bilder</H2>
<CodeWrapper>
  <div class="mb-4 h-10">
    <Badge {color} large={badgeSize} dismissable={badgeDismissable} class={badgeClass} bind:badgeStatus={badgeStatus2} {border} {rounded} transition={currentTransition.transition} params={currentTransition.params} href={link}>
      {#if iconSlot}
        <ClockSolid class="my-1 me-1.5 h-2.5 w-2.5" />
      {/if}
      My Badge
    </Badge>
  </div>
  <div class="mb-4 h-12">
    <Button disabled={badgeStatus2 ? true : false} onclick={changeStatus}>Open badge</Button>
  </div>
  <div class="flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Color</Label>
    {#each colors as colorOption}
      <Radio labelClass="w-24 my-1" name="color" bind:group={color} color={colorOption as BadgeProps['color']} value={colorOption}>{colorOption}</Radio>
    {/each}
  </div>
  <div class="mb-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Transition</Label>
    {#each transitions as transition}
      <Radio disabled={badgeDismissable ? false : true} labelClass="w-24 my-1 {badgeDismissable ? '' : 'opacity-30 cursor-not-allowed'}" name="transition_interactive" bind:group={selectedTransition} value={transition.name}>{transition.name}</Radio>
    {/each}
  </div>
  <div class="mb-4 flex flex-wrap gap-4">
    <Button class="w-40" color="blue" onclick={changeSize}>{badgeSize ? 'Small' : 'Large'}</Button>
    <Button class="w-40" color="green" onclick={changeDismissable}>{badgeDismissable ? 'Not dismissable' : 'Dismissable'}</Button>
    <Button class="w-40" color="purple" onclick={changeClass}>{badgeClass ? 'Remove class' : 'Add class'}</Button>
    <Button class="w-40" color="yellow" onclick={changeBorder}>{border ? 'Remove border' : 'Add border'}</Button>
    <Button class="w-40" color="dark" onclick={changeRounded}>{rounded ? 'Remove rounded' : 'Add rounded'}</Button>
    <Button class="w-40" color="pink" onclick={changeLink}>{link ? 'Remove href' : 'Add href'}</Button>
    <Button class="w-40" color="teal" onclick={changeIconSlot}>{iconSlot ? 'Remove icon' : 'Add icon'}</Button>
  </div>
  {#snippet codeblock()}
    <HighlightCompo code={generatedCode} />
  {/snippet}
</CodeWrapper>

<H2>Dismissing with custom icon</H2>
<CodeWrapper>
  <div class="flex h-8 justify-center">
    <Badge dismissable>
      Default
      {#snippet icon()}
        <CheckCircleOutline class="h-5 w-5" />
      {/snippet}
    </Badge>
  </div>
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/dismissable-badge-2.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Dismissing with events</H2>
<CodeWrapper>
  <div class="flex h-8 justify-center">
    <Badge dismissable large onclick={handleClose} bind:badgeStatus={eventStatus}>Default</Badge>
  </div>
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/dismissable-badge-3.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Notification badge</H2>
<CodeWrapper>
  <div class="flex justify-center gap-4">
    <Button class="relative" size="sm">
      <EnvelopeSolid class="text-white dark:text-white" />
      <span class="sr-only">Notifications</span>
      <Indicator color="blue" border size="xl" placement="top-right" class="text-xs font-bold">18</Indicator>
    </Button>

    <Button class="relative" size="sm">
      <EnvelopeSolid class="text-white dark:text-white" />
      <span class="sr-only">Notifications</span>
      <Indicator color="red" border size="xl" placement="top-right" class="text-xs font-bold">20</Indicator>
    </Button>

    <Button class="relative" size="sm">
      <EnvelopeSolid class="text-white dark:text-white" />
      <span class="sr-only">Notifications</span>
      <Indicator color="sky" border size="xl" placement="bottom-right" class="text-xs font-bold">20</Indicator>
    </Button>
  </div>
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/notification-badge.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Button with badge</H2>
<CodeWrapper>
  <div class="flex justify-center">
    <Button>
      Messages
      <Badge rounded class="ms-2 h-4 w-4 bg-white p-0 font-semibold text-primary-800 dark:bg-white dark:text-primary-800">2</Badge>
    </Button>
  </div>
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/button-with-badge.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Badge with icon only</H2>
<CodeWrapper>
  <div class="flex justify-center gap-2">
    <Badge color="gray" rounded large class="!p-1 !font-semibold">
      <CheckOutline class="h-3 w-3" />
      <span class="sr-only">Icon description</span>
    </Badge>
    <Badge rounded large class="!p-1 !font-semibold">
      <CheckOutline class="h-3 w-3 text-primary-800 dark:text-primary-400" />
      <span class="sr-only">Icon description</span>
    </Badge>
  </div>
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/badge-with-icon-only.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Opening badge</H2>
<CodeWrapper>
  <Button onclick={openBadge}>Open badge</Button>
  <Badge class="ml-4" color="blue" dismissable large bind:badgeStatus={openBadgeStatus}>Default</Badge>
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/opening-badge.md'] as string} />
  {/snippet}
</CodeWrapper>
