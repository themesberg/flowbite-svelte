# Svelte Drawer (Off-canvas) - Flowbite


Use the Drawer component (or “off-canvas”) to show a fixed element relative to the document page from any side for navigation, contact forms, informational purposes or other user actions.

## Set up

```svelte
<script>
  import { Drawer, CardPlaceholder, Button } from "flowbite-svelte";
  import { sineIn } from "svelte/easing";
</script>
```

## Default drawer

Since `Drawer` component extend Svelte's `HTMLAttributes<HTMLDivElement>`, you can set the `id`, `aria-labelledby=id` and `aria-controls=id` to the drawer component.

```svelte
<script>
  import { Drawer, CardPlaceholder, Button } from "flowbite-svelte";
  import { InfoCircleSolid, ArrowRightOutline } from "flowbite-svelte-icons";
  import { sineIn } from "svelte/easing";
  let open = $state(false);
</script>

<div class="text-center">
  <Button onclick={() => (open = true)}>Show drawer</Button>
  <CardPlaceholder size="2xl" class="mt-6" />
</div>

<Drawer bind:open aria-labelledby="drawer-label">
  <h5 id="drawer-label" class="mb-4 inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400">
    <InfoCircleSolid class="me-2.5 h-5 w-5" />Info
  </h5>
  <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
    Supercharge your hiring by taking advantage of our <a href="/" class="text-primary-600 dark:text-primary-500 underline hover:no-underline">limited-time sale</a>
    for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board.
  </p>
  <div class="grid grid-cols-2 gap-4">
    <Button color="light" href="/">Learn more</Button>
    <Button href="/" class="px-4">Get access <ArrowRightOutline class="ms-2 h-5 w-5" /></Button>
  </div>
</Drawer>
```

## Drawer navigation

Use this example to show a navigational sidebar inside the drawer component.

```svelte
<script>
  import { Drawer, CardPlaceholder, Button, Sidebar, SidebarWrapper, SidebarDropdownWrapper, SidebarGroup, SidebarItem } from "flowbite-svelte";
  import { ChartPieSolid, CartSolid, GridSolid, MailBoxSolid, UsersSolid, ShoppingBagSolid, ArrowRightToBracketOutline, EditOutline } from "flowbite-svelte-icons";
  let open2 = $state(false);
  let spanClass = "flex-1 ms-3 whitespace-nowrap";
</script>

<div class="text-center">
  <Button onclick={() => (open2 = true)}>Show navigation</Button>
  <CardPlaceholder size="2xl" class="mt-6" />
</div>
<Drawer bind:open={open2} class="w-64 bg-gray-50 p-0 dark:bg-gray-800">
  <h5 class="px-6 py-4 text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Menu</h5>
  <Sidebar disableBreakpoints={true} class="top-16">
    <SidebarWrapper class="overflow-y-auto rounded-sm px-3 py-0 dark:bg-gray-800">
      <SidebarGroup>
        <SidebarItem label="Dashboard">
          {#snippet icon()}
            <ChartPieSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
        </SidebarItem>
        <SidebarDropdownWrapper label="E-commerce">
          {#snippet icon()}
            <CartSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
          <SidebarItem label="Products" />
          <SidebarItem label="Billing" />
          <SidebarItem label="Invoice" />
        </SidebarDropdownWrapper>
        <SidebarItem label="Kanban" {spanClass}>
          {#snippet icon()}
            <GridSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
          {#snippet subtext()}
            <span class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">Pro</span>
          {/snippet}
        </SidebarItem>
        <SidebarItem label="Inbox" {spanClass}>
          {#snippet icon()}
            <MailBoxSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
          {#snippet subtext()}
            <span class="text-primary-600 bg-primary-200 dark:bg-primary-900 dark:text-primary-200 ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full p-3 text-sm font-medium">3</span>
          {/snippet}
        </SidebarItem>
        <SidebarItem label="Users">
          {#snippet icon()}
            <UsersSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
        </SidebarItem>
        <SidebarItem label="Products">
          {#snippet icon()}
            <ShoppingBagSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
        </SidebarItem>
        <SidebarItem label="Sign In">
          {#snippet icon()}
            <ArrowRightToBracketOutline class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
        </SidebarItem>
        <SidebarItem label="Sign Up">
          {#snippet icon()}
            <EditOutline class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
        </SidebarItem>
      </SidebarGroup>
    </SidebarWrapper>
  </Sidebar>
</Drawer>
```

## Contact form

Use this example to show a contact form inside the drawer component.

```svelte
<script>
  import { Drawer, CardPlaceholder, Button, Label, Input, Textarea, P, A, Checkbox } from "flowbite-svelte";
  import { InfoCircleSolid } from "flowbite-svelte-icons";

  let open3 = $state(false);
</script>

<div class="text-center">
  <Button onclick={() => (open3 = true)}>Show contact form</Button>
  <CardPlaceholder size="2xl" class="mt-6" />
</div>
<Drawer bind:open={open3}>
  <h5 class="mb-6 inline-flex items-center text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
    <InfoCircleSolid class="me-2.5 h-5 w-5" />Contact us
  </h5>
  <form method="dialog" class="mb-6">
    <div class="mb-6">
      <Label for="email" class="mb-2 block">Your email</Label>
      <Input id="email" name="email" required placeholder="name@company.com" />
    </div>
    <div class="mb-6">
      <Label for="subject" class="mb-2 block">Subject</Label>
      <Input id="subject" name="subject" required placeholder="Let us know how we can help you" />
    </div>
    <div class="mb-6">
      <Label for="message" class="mb-2">Your message</Label>
      <Textarea id="message" placeholder="Your message..." rows={4} name="message" class="w-full" />
    </div>
    <Button type="submit" class="w-full">Send message</Button>
  </form>
  <P class="mb-2 text-sm text-gray-500 dark:text-gray-400">
    <A href="/" class="text-primary-600 dark:text-primary-500 hover:underline">info@company.com</A>
  </P>
  <P class="text-sm text-gray-500 dark:text-gray-400">
    <A href="/" class="text-primary-600 dark:text-primary-500 hover:underline">212-456-7890</A>
  </P>
</Drawer>
```

## Form elements

Use this example if you want to add form elements inside the drawer component including datepickers.

```svelte
<script>
  import { Drawer, CardPlaceholder, Button, Label, Input, Textarea } from "flowbite-svelte";
  import { InfoCircleSolid, UserAddOutline, CalendarEditSolid } from "flowbite-svelte-icons";

  let open4 = $state(false);
</script>

<div class="text-center">
  <Button onclick={() => (open4 = true)}>Show drawer form</Button>
  <CardPlaceholder size="2xl" class="mt-6" />
</div>
<Drawer bind:open={open4}>
  <h5 class="mb-6 inline-flex items-center text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
    <InfoCircleSolid class="me-2.5 h-5 w-5" />New event
  </h5>
  <form method="dialog" class="mb-6">
    <div class="mb-6">
      <Label for="title" class="mb-2 block">Title</Label>
      <Input id="title" name="title" required placeholder="Apple Keynote" />
    </div>
    <div class="mb-6">
      <Label for="description" class="mb-2">Description</Label>
      <Textarea id="message" placeholder="Write event description..." rows={4} name="message" class="w-full" />
    </div>
    <div class="mb-6">
      <Input id="date" name="date" required type="date" />
    </div>
    <div class="mb-4">
      <div class="relative">
        <Input id="search" placeholder="Add guest email" class="p-3" />
        <Button class="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 absolute end-2 bottom-2 inline-flex items-center rounded-lg px-3 py-1 text-sm font-medium text-white focus:ring-4 focus:outline-hidden" type="submit">
          <UserAddOutline class="me-1.5 h-3 w-3 text-white" />Add
        </Button>
      </div>
    </div>
    <div class="mb-4 flex -space-x-4 rtl:space-x-reverse">
      <img class="h-8 w-8 rounded-full border-2 border-white dark:border-gray-800" src="/images/profile-picture-1.webp" alt="" />
      <img class="h-8 w-8 rounded-full border-2 border-white dark:border-gray-800" src="/images/profile-picture-2.webp" alt="" />
      <img class="h-8 w-8 rounded-full border-2 border-white dark:border-gray-800" src="/images/profile-picture-3.webp" alt="" />
      <img class="h-8 w-8 rounded-full border-2 border-white dark:border-gray-800" src="/images/profile-picture-4.webp" alt="" />
    </div>
    <Button type="submit" class="w-full">
      <CalendarEditSolid class="me-2.5 h-3.5 w-3.5 text-white" /> Create event
    </Button>
  </form>
</Drawer>
```

## A11y

Use `Tab` and `Shift+Tab` to navigate between buttons or links in the drawer. Press `ESC` to close it on a small screen.

## Placement

Use the placement prop to position the drawer component either on the top, right, bottom, or left side of the document page. This can be done using the `placement='left|right|top|bottom'` where the default value is “left”.

### Left drawer

```svelte
<script>
  import { Drawer, CardPlaceholder, Button, Label, Textarea } from "flowbite-svelte";
  import { InfoCircleSolid, ArrowRightOutline } from "flowbite-svelte-icons";

  let open5 = $state(false);
</script>

<div class="text-center">
  <Button onclick={() => (open5 = true)}>Show drawer</Button>
  <CardPlaceholder size="2xl" class="mt-6" />
</div>

<Drawer placement="left" bind:open={open5}>
  <h5 class="mb-4 inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400">
    <InfoCircleSolid class="me-2.5 h-5 w-5" />Info
  </h5>
  <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
    Supercharge your hiring by taking advantage of our <a href="/" class="text-primary-600 dark:text-primary-500 underline hover:no-underline">limited-time sale</a>
    for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board.
  </p>
  <div class="grid grid-cols-2 gap-4">
    <Button color="light" href="/">Learn more</Button>
    <Button href="/" class="px-4">Get access <ArrowRightOutline class="ms-2 h-5 w-5" /></Button>
  </div>
</Drawer>
```

### Right drawer

Use this example to show the drawer component on the right side of the page.

Set the `transitionParams` variable to new variables.

```svelte
<script>
  import { Drawer, CardPlaceholder, Button } from "flowbite-svelte";
  import { InfoCircleSolid, ArrowRightOutline } from "flowbite-svelte-icons";
  import { sineIn } from "svelte/easing";

  let open6 = $state(false);
  let transitionParamsRight = {
    x: 320,
    duration: 200,
    easing: sineIn
  };
</script>

<div class="text-center">
  <Button onclick={() => (open6 = true)}>Show drawer</Button>
  <CardPlaceholder size="2xl" class="mt-6" />
</div>

<Drawer placement="right" transitionParams={transitionParamsRight} bind:open={open6}>
  <h5 class="mb-4 inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400">
    <InfoCircleSolid class="me-2.5 h-5 w-5" />Info
  </h5>
  <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
    Supercharge your hiring by taking advantage of our <a href="/" class="text-primary-600 dark:text-primary-500 underline hover:no-underline">limited-time sale</a>
    for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board.
  </p>
  <div class="grid grid-cols-2 gap-4">
    <Button color="light" href="/">Learn more</Button>
    <Button href="/" class="px-4">Get access <ArrowRightOutline class="ms-2 h-5 w-5" /></Button>
  </div>
</Drawer>
```

### Top drawer

Use this example to show the drawer on the top side of the page.

```svelte
<script>
  import { Drawer, CardPlaceholder, Button, A } from "flowbite-svelte";
  import { InfoCircleSolid, ArrowRightOutline } from "flowbite-svelte-icons";
  import { sineIn } from "svelte/easing";

  let open7 = $state(false);
  let transitionParamsTop = {
    y: -320,
    duration: 200,
    easing: sineIn
  };
</script>

<div class="text-center">
  <Button onclick={() => (open7 = true)}>Show drawer</Button>
  <CardPlaceholder size="2xl" class="mt-6" />
</div>

<Drawer placement="top" class="w-full" transitionParams={transitionParamsTop} bind:open={open7}>
  <h5 class="mb-4 inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400">
    <InfoCircleSolid class="me-2.5 h-5 w-5" />Top drawer
  </h5>
  <p class="mb-6 max-w-lg text-sm text-gray-500 dark:text-gray-400">
    Supercharge your hiring by taking advantage of our <A href="/" class="text-primary-600 dark:text-primary-500 underline hover:no-underline">limited-time sale</A> for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board.
  </p>
  <Button color="light" href="/">Learn more</Button>
  <Button href="/" class="px-4">Get access <ArrowRightOutline class="ms-2 h-5 w-5" /></Button>
</Drawer>
```

### Bottom drawer

Use this example to show the drawer on the bottom side of the page.

```svelte
<script>
  import { Drawer, CardPlaceholder, Button, A } from "flowbite-svelte";
  import { InfoCircleSolid, ArrowRightOutline } from "flowbite-svelte-icons";
  import { sineIn } from "svelte/easing";

  let open8 = $state(false);
  let transitionParamsBottom = {
    y: 320,
    duration: 200,
    easing: sineIn
  };
</script>

<div class="text-center">
  <Button onclick={() => (open8 = true)}>Show drawer</Button>
  <CardPlaceholder size="2xl" class="mt-6" />
</div>

<Drawer form placement="bottom" class="w-full" transitionParams={transitionParamsBottom} bind:open={open8}>
  <h5 class="mb-4 inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400">
    <InfoCircleSolid class="me-2.5 h-5 w-5" />Info
  </h5>
  <p class="mb-6 max-w-lg text-sm text-gray-500 dark:text-gray-400">
    Supercharge your hiring by taking advantage of our <a href="/" class="text-primary-600 dark:text-primary-500 underline hover:no-underline">limited-time sale</a>
    for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board.
  </p>
  <Button color="light" href="/">Learn more</Button>
  <Button href="/" class="px-4">Get access <ArrowRightOutline class="ms-2 h-5 w-5" /></Button>
</Drawer>
```

## Backdrop

The backdrop element can be used to dim out the background elements when the drawer is visible and also automatically hide the component when clicking outside of it.

Use Tailwind's `backdrop:` variant classes (e.g., `backdrop:bg-black/50`) to style the dialog backdrop. For example:

```svelte
<Drawer class="backdrop:bg-black/50">
  <!-- content -->
</Drawer>
```

## Non-modal

Drawer is `modal` by default (see `dialog`). You can set `modal={false}` to open `Drawer` in non-modal mode (no backdrop). However, you will need to manage the `Drawer` position, z-index, closing outside and `ESC` key behavior manually.

```svelte
<script>
  import { Drawer, CardPlaceholder, Button, A } from "flowbite-svelte";
  import { InfoCircleSolid, ArrowRightOutline } from "flowbite-svelte-icons";

  let openNonModal = $state(false);
</script>

<div class="text-center">
  <Button onclick={() => (openNonModal = true)}>Show drawer</Button>
  <CardPlaceholder size="2xl" class="mt-6" />
</div>

<Drawer modal={false} bind:open={openNonModal} class="fixed top-0 left-0 z-50">
  <h5 class="mb-4 inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400">
    <InfoCircleSolid class="me-2.5 h-5 w-5" />Info
  </h5>
  <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
    Supercharge your hiring by taking advantage of our <a href="/" class="text-primary-600 dark:text-primary-500 underline hover:no-underline">limited-time sale</a>
    for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board.
  </p>
  <div class="grid grid-cols-2 gap-4">
    <Button color="light" href="/">Learn more</Button>
    <Button href="/" class="px-4">Get access <ArrowRightOutline class="ms-2 h-5 w-5" /></Button>
  </div>
</Drawer>
```

## Disabling outside click

As the default, the drawer closes when you click the outside of the drawer. However sometimes you don't want that. Set `outsideclose` to false to disable it.

```svelte
<script>
  import { Drawer, CardPlaceholder, Button } from "flowbite-svelte";
  import { InfoCircleSolid, ArrowRightOutline } from "flowbite-svelte-icons";

  let openDisablingOnlyOutsideClick = $state(false);
</script>

<div class="text-center">
  <Button onclick={() => (openDisablingOnlyOutsideClick = true)}>Show drawer</Button>
  <CardPlaceholder size="2xl" class="mt-6" />
</div>

<Drawer outsideclose={false} bind:open={openDisablingOnlyOutsideClick}>
  <h5 class="mb-4 inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400">
    <InfoCircleSolid class="me-2.5 h-5 w-5" />Info
  </h5>
  <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
    Supercharge your hiring by taking advantage of our <a href="/" class="text-primary-600 dark:text-primary-500 underline hover:no-underline">limited-time sale</a>
    for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board.
  </p>
  <div class="grid grid-cols-2 gap-4">
    <Button color="light" href="/">Learn more</Button>
    <Button href="/" class="px-4">Get access <ArrowRightOutline class="ms-2 h-5 w-5" /></Button>
  </div>
</Drawer>
```

## Component data

### Drawer

#### Types

[DrawerProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L571)

#### Props

- children
- open: $bindable(false)
- hidden: $bindable()
- width
- dismissable: false
- placement: "left"
- class: className
- classes
- transitionParams
- transition: fly
- outsideclose
- activateClickOutside

### Drawerhead

#### Types

[DrawerheadProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L579)

#### Props

- closeIcon
- children
- buttonClass
- svgClass
- class: className
- classes


## References

- [Flowbite Drawer](https://flowbite.com/docs/components/drawer/)


