# Svelte Drawer (Off-canvas) - Flowbite


Use the Drawer component (or “off-canvas”) to show a fixed element relative to the document page from any side for navigation, contact forms, informational purposes or other user actions.

## Set up

```svelte
<script lang="ts">
  import { Drawer, CardPlaceholder, Button } from "flowbite-svelte";
  import { sineIn } from "svelte/easing";
</script>
```

## Default drawer

Since `Drawer` component extend Svelte's `HTMLAttributes<HTMLDivElement>`, you can set the `id`, `aria-labelledby=id` and `aria-controls=id` to the drawer component.

```svelte
<script lang="ts">
  import { Drawer, CardPlaceholder, Button } from "flowbite-svelte";
  import { InfoCircleSolid, ArrowRightOutline } from "flowbite-svelte-icons";
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
  <div class="grid grid-cols-2 gap-2">
    <Button color="light" href="/">Learn more</Button>
    <Button href="/" class="px-4">Get access <ArrowRightOutline class="ms-2 h-5 w-5" /></Button>
  </div>
</Drawer>
```

## Drawer navigation

Use this example to show a navigational sidebar inside the drawer component.

```svelte
<script lang="ts">
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
<script lang="ts">
  import { Drawer, CardPlaceholder, Button, Label, Input, Textarea, P, A } from "flowbite-svelte";
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
<script lang="ts">
  import { Avatar, Drawer, CardPlaceholder, Button, Label, Input, Textarea } from "flowbite-svelte";
  import { InfoCircleSolid, UserAddOutline, CalendarEditSolid } from "flowbite-svelte-icons";

  let open4 = $state(false);
</script>

<div class="text-center">
  <Button onclick={() => (open4 = true)}>Show drawer form</Button>
  <CardPlaceholder size="2xl" class="mt-6" />
</div>
<Drawer form bind:open={open4} classes={{ form: "space-y-6 mb-6" }}>
  <h5 class="mb-6 inline-flex items-center text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
    <InfoCircleSolid class="me-2.5 h-5 w-5" />New event
  </h5>
  <Label>
    Title
    <Input name="title" class="mt-2" required placeholder="Apple Keynote" />
  </Label>
  <Label>
    Description
    <Textarea placeholder="Write event description..." rows={4} name="message" class="mt-2 w-full font-normal" />
  </Label>
  <Input name="date" required type="date" />
  <Input placeholder="Add guest email">
    {#snippet right()}
      <Button size="xs">
        <UserAddOutline class="me-1.5 h-4 w-4 text-white" />Add
      </Button>
    {/snippet}
  </Input>
  <div class="mb-4 flex">
    <Avatar src="/images/profile-picture-1.webp" stacked size="sm" />
    <Avatar src="/images/profile-picture-2.webp" stacked size="sm" />
    <Avatar src="/images/profile-picture-3.webp" stacked size="sm" />
    <Avatar src="/images/profile-picture-4.webp" stacked size="sm" />
  </div>
  <Button type="submit" class="w-full">
    <CalendarEditSolid class="me-2.5 h-3.5 w-3.5 text-white" /> Create event
  </Button>
</Drawer>
```

## A11y

Use `Tab` and `Shift+Tab` to navigate between buttons or links in the drawer. Press `ESC` to close it on a small screen.

## Placement

Use the placement prop to position the drawer component either on the top, right, bottom, or left side of the document page. This can be done using the `placement='left|right|top|bottom'` where the default value is `left`.

```svelte
<script lang="ts">
  import { Drawer, CardPlaceholder, Button } from "flowbite-svelte";
  import { InfoCircleSolid, ArrowRightOutline } from "flowbite-svelte-icons";

  let open5 = $state(false);
  let placement: "right" | "left" | "top" | "bottom" = $state("right");
</script>

<div class="text-center">
  <Button onclick={() => ((placement = "top"), (open5 = true))}>Top drawer</Button>
  <div class="my-2 space-x-6">
    <Button onclick={() => ((placement = "left"), (open5 = true))}>Left drawer</Button>
    <Button onclick={() => ((placement = "right"), (open5 = true))}>Right drawer</Button>
  </div>
  <Button onclick={() => ((placement = "bottom"), (open5 = true))}>Bottom drawer</Button>
  <CardPlaceholder size="2xl" class="mt-6" />
</div>

<Drawer {placement} bind:open={open5}>
  <h5 class="mb-4 inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400">
    <InfoCircleSolid class="me-2.5 h-5 w-5" />Info
  </h5>
  <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
    Supercharge your hiring by taking advantage of our <a href="/" class="text-primary-600 dark:text-primary-500 underline hover:no-underline">limited-time sale</a>
    for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board.
  </p>
  <div class="grid grid-cols-2 gap-2">
    <Button color="light" href="/">Learn more</Button>
    <Button href="/" class="px-4">Get access <ArrowRightOutline class="ms-2 h-5 w-5" /></Button>
  </div>
</Drawer>
```

## Backdrop

Use Tailwind's `backdrop:` variant classes (e.g., `backdrop:bg-black/50`) to style the dialog backdrop. For example:

```svelte
<Drawer class="backdrop:bg-black/50">
  <!-- content -->
</Drawer>
```

## Non-modal

Drawer is `modal` by default (see `dialog`). You can set `modal={false}` to open `Drawer` in non-modal mode (no backdrop). However, you will need to manage the `Drawer` position, z-index, closing outside and `ESC` key behavior manually.

```svelte
<script lang="ts">
  import { Drawer, CardPlaceholder, Button } from "flowbite-svelte";
  import { InfoCircleSolid, ArrowRightOutline } from "flowbite-svelte-icons";

  let openNonModal = $state(false);
</script>

<div class="text-center">
  <Button onclick={() => (openNonModal = true)}>Show drawer</Button>
  <CardPlaceholder size="2xl" class="mt-6" />
</div>

<Drawer modal={false} bind:open={openNonModal}>
  <h5 class="mb-4 inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400">
    <InfoCircleSolid class="me-2.5 h-5 w-5" />Info
  </h5>
  <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
    Supercharge your hiring by taking advantage of our <a href="/" class="text-primary-600 dark:text-primary-500 underline hover:no-underline">limited-time sale</a>
    for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board.
  </p>
  <div class="grid grid-cols-2 gap-2">
    <Button color="light" href="#/">Learn more</Button>
    <Button href="#/" class="px-4">Get access <ArrowRightOutline class="ms-2 h-5 w-5" /></Button>
  </div>
</Drawer>
```

## Disabling outside click

As the default, the drawer closes when you click the outside of the drawer. However sometimes you don't want that. Set `outsideclose` to false to disable it. Do not confuse that with non-modal state where there is no backdrop at all.

```svelte
<script lang="ts">
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
  <div class="grid grid-cols-2 gap-2">
    <Button color="light" href="/">Learn more</Button>
    <Button href="/" class="px-4">Get access <ArrowRightOutline class="ms-2 h-5 w-5" /></Button>
  </div>
</Drawer>
```

## Swipeable edge

The drawer edge functionality allows you to show a small part of the drawer when it is not shown completely by applying the `offset` property. This can be given any CSS compliant unit like `200px` or `10em`.

In this example we also use the utility `DrawerHandle` component to toggle the visibility of the drawer component by clicking on the “edge” part of the element.

```svelte
<script lang="ts">
  import { Drawer, DrawerHandle, CardPlaceholder } from "flowbite-svelte";
  import { AdjustmentsVerticalSolid, ChartPieSolid, ClipboardListSolid, GridPlusSolid, ReceiptSolid, TableRowSolid, UsersSolid } from "flowbite-svelte-icons";

  let open = $state(false);
  let widgets = [
    { icon: ChartPieSolid, name: "Chart" },
    { icon: TableRowSolid, name: "Table" },
    { icon: ClipboardListSolid, name: "List" },
    { icon: ReceiptSolid, name: "Ticket" },
    { icon: UsersSolid, name: "Users" },
    { icon: AdjustmentsVerticalSolid, name: "Custom" }
  ];
</script>

<div class="ms-12 text-center">
  <CardPlaceholder size="2xl" class="mt-6" />
</div>

<Drawer bind:open offset="52px" placement="bottom" class="rounded-t-lg" aria-labelledby="drawer-swipe-label">
  <DrawerHandle onclick={() => (open = !open)} class="h-14 hover:bg-gray-50 dark:hover:bg-gray-700">
    <h5 id="drawer-swipe-label" class="inline-flex items-center gap-2 text-base font-medium text-gray-500 dark:text-gray-400">
      <GridPlusSolid />Add widget
    </h5>
  </DrawerHandle>

  <div class="mt-16 grid grid-cols-3 gap-4 lg:grid-cols-4">
    {#each widgets as { icon: Icon, name }}
      <div class="cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600">
        <div class="mx-auto mb-2 flex h-[48px] max-h-[48px] w-[48px] max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-600">
          <Icon class="inline h-5 w-5 text-gray-500 dark:text-gray-400" />
        </div>
        <div class="text-center font-medium text-gray-500 dark:text-gray-400">{name}</div>
      </div>
    {/each}
  </div>
</Drawer>
```

## Component data

### Drawer

#### Types

[DrawerProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L619)

#### Props

- children
- open: $bindable(false)
- hidden: $bindable()
- modal
- offset
- width
- dismissable: offset ? false : undefined
- placement: "left"
- class: className
- transitionParams
- transition: fly
- outsideclose
- activateClickOutside

### DrawerHandle

#### Types

[DrawerHandleProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L627)

#### Props

- children
- placement
- "aria-label": ariaLabel
- class: className
- classes

### Drawerhead

#### Types

[DrawerheadProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L629)

#### Props

- closeIcon
- children
- buttonClass
- svgClass
- class: className
- classes


## References

- [Flowbite Drawer](https://flowbite.com/docs/components/drawer/)
