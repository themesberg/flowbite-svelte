<script lang="ts">
  import { Drawer, Drawerhead, Button, uiHelpers, Sidebar, SidebarGroup, SidebarItem, SidebarDropdownWrapper, Label, Radio } from '$lib';
  import { InfoCircleSolid, ArrowRightOutline, ChartOutline, GridSolid, MailBoxSolid, UserSolid, ArrowRightToBracketOutline, EditSolid, ShoppingBagSolid } from 'flowbite-svelte-icons';
  import { sineIn } from 'svelte/easing';
  import { blur, fly, slide, scale, fade } from 'svelte/transition';
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

  const drawerA = uiHelpers();
  let drawerStatusA = $state(false);
  const closeDrawerA = drawerA.close;

  const drawerB = uiHelpers();
  let drawerStatusB = $state(false);
  const closeDrawerB = drawerB.close;

  const drawerPlacement = uiHelpers();
  let drawerStatusPlacement = $state(false);
  const closeDrawerPlacement = drawerPlacement.close;

  const drawerTransition = uiHelpers();
  let drawerStatusTransition = $state(false);
  const closeDrawerTransition = drawerTransition.close;

  const drawerBackdrop = uiHelpers();
  let drawerStatusBackdrop = $state(false);
  const closeDrawerBackdrop = drawerBackdrop.close;

  $effect(() => {
    drawerStatusA = drawerA.isOpen;
    drawerStatusB = drawerB.isOpen;
    drawerStatusTransition = drawerTransition.isOpen;
    drawerStatusPlacement = drawerPlacement.isOpen;
    drawerStatusBackdrop = drawerBackdrop.isOpen;
  });
  let spanClass = 'flex-1 ms-3 whitespace-nowrap';

  // transition
  type TransitionOption = {
    name: string;
    transition: typeof fly | typeof blur | typeof slide | typeof scale;
    params: FlyParams | BlurParams | SlideParams | ScaleParams;
    color: Drawer['color'];
  };

  const transitions: TransitionOption[] = [
    { name: 'Fly', transition: fly, params: { duration: 500, easing: linear, x: -150 }, color: 'blue' },
    { name: 'Blur', transition: blur, params: { duration: 500, easing: linear }, color: 'lime' },
    { name: 'Slide', transition: slide, params: { duration: 500, easing: linear }, color: 'violet' },
    { name: 'Scale', transition: scale, params: { duration: 500, easing: linear }, color: 'pink' },
    { name: 'Fade', transition: fade, params: { duration: 500, easing: linear }, color: 'orange' }
  ];

  let selectedTransition = $state('Fly');
  let currentTransition = $derived(transitions.find((t) => t.name === selectedTransition) || transitions[0]);

  const placements = [
    { name: 'Top', placement: 'top', params: { y: -320, duration: 200, easing: sineIn }, width: 'full' },
    { name: 'Right', placement: 'right', params: { x: 320, duration: 200, easing: sineIn }, width: 'default' },
    { name: 'Bottom', placement: 'bottom', params: { y: 320, duration: 200, easing: sineIn }, width: 'full' },
    { name: 'Left', placement: 'left', params: { x: -320, duration: 200, easing: sineIn }, width: 'default' }
  ];

  let selectedPlacement = $state('Top');
  let currentPlacement = $derived(placements.find((p) => p.name === selectedPlacement) || placements[0]);

  // backdrop
  let backdropStatus = $state(true);
  const changeBackdropStatus = () => {
    backdropStatus = !backdropStatus;
  };
  // outsideclick
  let outsideclickStatus = $state(true);
  const changeOutsideclickStatus = () => {
    outsideclickStatus = !outsideclickStatus;
  };

  let offsetClass = $state('');
  const changeClass = () => {
    offsetClass = offsetClass === '' ? 'top-16 h-screen start-0' : '';
  };
</script>

<H1>Drawer</H1>

<H2>Setup</H2>
<HighlightCompo code={modules['./md/setup.md'] as string} />

<H2>Default drawer</H2>
<CodeWrapper>
  <div class="text-center">
    <Button onclick={drawerA.toggle}>Show drawer</Button>
  </div>

  <Drawer drawerStatus={drawerStatusA} closeDrawer={closeDrawerA}>
    <Drawerhead onclick={closeDrawerA}>
      <h5 id="drawer-label" class="mb-4 inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400">
        <InfoCircleSolid class="me-2.5 h-4 w-4" />Info
      </h5>
    </Drawerhead>
    <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
      Supercharge your hiring by taking advantage of our <a href="/" class="text-primary-600 underline hover:no-underline dark:text-primary-500"> limited-time sale </a>
      for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board.
    </p>
    <div class="grid grid-cols-2 gap-4">
      <Button color="light" href="/">Learn more</Button>
      <Button href="/" class="px-4">Get access <ArrowRightOutline class="ms-2 h-3.5 w-3.5" /></Button>
    </div>
  </Drawer>
</CodeWrapper>

<HighlightCompo code={modules['./md/defaultdrawer.md'] as string} />

<H2>Transitions</H2>
<CodeWrapper>
  <div class="text-center">
    <Button onclick={drawerTransition.toggle}>Drawer</Button>
  </div>
  <Drawer drawerStatus={drawerStatusTransition} closeDrawer={closeDrawerTransition} transition={currentTransition.transition} params={currentTransition.params}>
    <Drawerhead onclick={closeDrawerTransition}>
      <h5 id="drawer-label" class="mb-4 inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400">
        <InfoCircleSolid class="me-2.5 h-4 w-4" />{selectedTransition} drawer
      </h5>
    </Drawerhead>
    <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">Content</p>
  </Drawer>
  <div class="mb-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Transition</Label>
    {#each transitions as transition}
      <Radio labelClass="w-24 my-1" name="drawer_transition" bind:group={selectedTransition} value={transition.name}>{transition.name}</Radio>
    {/each}
  </div>
</CodeWrapper>

<HighlightCompo code={modules['./md/transitions.md'] as string} />

<H2>Placement</H2>
<CodeWrapper>
  <div class="text-center">
    <Button onclick={drawerPlacement.toggle}>Drawer</Button>
  </div>

  <Drawer placement={currentPlacement.placement as Drawer['placement']} width={currentPlacement.width as Drawer['width']} drawerStatus={drawerStatusPlacement} closeDrawer={closeDrawerPlacement} transition={fly} params={currentPlacement.params}>
    <Drawerhead onclick={closeDrawerPlacement}>
      <h5 id="drawer-label" class="mb-4 inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400">
        <InfoCircleSolid class="me-2.5 h-4 w-4" />{selectedPlacement} drawer
      </h5>
    </Drawerhead>
    <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
      Supercharge your hiring by taking advantage of our <a href="/" class="text-primary-600 underline hover:no-underline dark:text-primary-500"> limited-time sale </a>
      for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board.
    </p>
    <div class="grid grid-cols-2 gap-4">
      <Button color="light" href="/">Learn more</Button>
      <Button href="/" class="px-4">Get access <ArrowRightOutline class="ms-2 h-3.5 w-3.5" /></Button>
    </div>
  </Drawer>
  <div class="mb-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Placement</Label>
    {#each placements as placement}
      <Radio labelClass="w-24 my-1" name="drawer_placement" bind:group={selectedPlacement} value={placement.name}>{placement.name}</Radio>
    {/each}
  </div>
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/placement.md'] as string} />

<H2>Backdrop and outside click</H2>
<CodeWrapper class="space-y-4">
  <div class="text-center mb-4">
    <Button onclick={drawerBackdrop.toggle}>Show drawer</Button>
  </div>

  <Drawer backdrop={backdropStatus} activateClickOutside={outsideclickStatus} class={offsetClass} drawerStatus={drawerStatusBackdrop} closeDrawer={closeDrawerBackdrop}>
    <Drawerhead onclick={closeDrawerBackdrop}>
      <h5 id="drawer-label" class="mb-4 inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400">
        <InfoCircleSolid class="me-2.5 h-4 w-4" />Drawer
      </h5>
    </Drawerhead>
    <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
      Backdrop: {backdropStatus ? 'true' : 'false'}<br />
      Outsideclick: {outsideclickStatus ? 'true' : 'false'}<br />
      Offset: {offsetClass ? offsetClass : 'none'}
    </p>
  </Drawer>
  <div class="flex gap-2">
    <Button color="primary" onclick={changeBackdropStatus}>{backdropStatus ? 'Hide backdrop' : 'Show backdrop'}</Button>
    <Button color="purple" onclick={changeOutsideclickStatus}>{outsideclickStatus ? 'Disable outsideclick' : 'Enable outsideclick'}</Button>
    <Button color="green" onclick={changeClass}>{offsetClass ? 'Remove offset' : 'Add offset'}</Button>
  </div>
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/backdrop-and-outsideclick.md'] as string} />

<H2>Other examples</H2>
<H3>Drawer navigation</H3>

<CodeWrapper>
  <div class="text-center">
    <Button onclick={drawerB.toggle}>Show navigation</Button>
  </div>

  <Drawer drawerStatus={drawerStatusB} closeDrawer={closeDrawerB}>
    <Drawerhead onclick={closeDrawerB}>
      <h5 id="drawer-label" class="mb-4 inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400">
        <InfoCircleSolid class="me-2.5 h-4 w-4" />Menu
      </h5>
    </Drawerhead>
    <Sidebar class="p-2">
      <SidebarGroup>
        <SidebarItem label="Dashboard">
          {#snippet iconSlot()}
            <ChartOutline class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
        </SidebarItem>
        <SidebarDropdownWrapper label="E-commerce" btnClass="p-2">
          {#snippet iconSlot()}
            <ShoppingBagSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
          <SidebarItem label="Products" />
          <SidebarItem label="Billing" />
          <SidebarItem label="Invoice" />
        </SidebarDropdownWrapper>
        <SidebarItem label="Drawer" href="/components/drawer" {spanClass}>
          {#snippet iconSlot()}
            <GridSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
          {#snippet subtext()}
            <span class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300"> Pro </span>
          {/snippet}
        </SidebarItem>
        <SidebarItem label="Inbox" {spanClass}>
          {#snippet iconSlot()}
            <MailBoxSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
          {#snippet subtext()}
            <span class="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-primary-200 p-3 text-sm font-medium text-primary-600 dark:bg-primary-900 dark:text-primary-200"> 3 </span>
          {/snippet}
        </SidebarItem>
        <SidebarItem label="Users">
          {#snippet iconSlot()}
            <UserSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
        </SidebarItem>
        <SidebarItem label="Sign In">
          {#snippet iconSlot()}
            <ArrowRightToBracketOutline class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
        </SidebarItem>
        <SidebarItem label="Sign Up">
          {#snippet iconSlot()}
            <EditSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
        </SidebarItem>
      </SidebarGroup>
    </Sidebar>
  </Drawer>
</CodeWrapper>

<HighlightCompo code={modules['./md/navigation.md'] as string} />
