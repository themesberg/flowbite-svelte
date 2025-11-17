# Svelte Navbar - Flowbite


Get started with the responsive navbar component from Flowbite to quickly set up a navigation menu for your website and set up the logo, list of pages, CTA button, search input, user profile options with a dropdown, and more.

## Setup

```svelte
<script lang="ts">
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from "flowbite-svelte";
</script>
```

## Default navbar

Use this example of a navigation bar built with the utility classes from Tailwind CSS to enable users to navigate across the pages of your website.

By default, navbar content width is controlled by Tailwind class `container`. If you want your navbar to be full page width set the prop `fluid=true`.

```svelte
<script lang="ts">
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, P } from "flowbite-svelte";
</script>

<Navbar>
  <NavBrand href="/">
    <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
  </NavBrand>
  <NavHamburger />
  <NavUl>
    <NavLi href="/">Home</NavLi>
    <NavLi href="/about">About</NavLi>
    <NavLi href="/docs/components/navbar">Navbar</NavLi>
    <NavLi href="/pricing">Pricing</NavLi>
    <NavLi href="/contact">Contact</NavLi>
  </NavUl>
</Navbar>

<P>
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur quos impedit quo, quis quam in distinctio deleniti facere! Ea aliquid maiores iusto obcaecati rerum quisquam repellendus
  dignissimos rem quo veritatis.
</P>

<P>
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur quos impedit quo, quis quam in distinctio deleniti facere! Ea aliquid maiores iusto obcaecati rerum quisquam repellendus
  dignissimos rem quo veritatis.
</P>
```

## Active class

Utilize the `href` prop within the `NavLi` component to incorporate a hyperlink. To initiate the application of the active class, include the `activeUrl` prop within the `NavUl` component:

```svelte
<script lang="ts">
  import { page } from "$app/state";
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from "flowbite-svelte";
  let activeUrl = $derived(page.url.pathname);
</script>

<Navbar>
  <NavBrand href="/">
    <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
  </NavBrand>
  <NavHamburger />
  <NavUl {activeUrl}>
    <NavLi href="/">Home</NavLi>
    <NavLi href="/docs/components/navbar">Navbar</NavLi>
    <NavLi href="/docs/components/accordion">Accordion</NavLi>
    <NavLi href="/docs/components/alert">Alert</NavLi>
    <NavLi href="/docs/components/avatar">Avatar</NavLi>
  </NavUl>
</Navbar>
```

Control the `active` and `nonactive` class by using `activeClass` and `nonActiveClass`:

```svelte
<script lang="ts">
  import { page } from "$app/state";
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from "flowbite-svelte";
  let activeUrl = $derived(page.url.pathname);
  let activeClass = "text-white bg-green-700 md:bg-transparent md:text-green-700 md:dark:text-white dark:bg-green-600 md:dark:bg-transparent";
  let nonActiveClass =
    "text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";
</script>

<Navbar>
  <NavBrand href="/">
    <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
  </NavBrand>
  <NavHamburger />
  <NavUl {activeUrl} classes={{ active: activeClass, nonActive: nonActiveClass }}>
    <NavLi href="/">Home</NavLi>
    <NavLi href="/docs/components/navbar">Navbar</NavLi>
    <NavLi href="/docs/components/accordion">Accordion</NavLi>
    <NavLi href="/docs/components/alert">Alert</NavLi>
    <NavLi href="/docs/components/avatar">Avatar</NavLi>
  </NavUl>
</Navbar>
```

## respectMotionPreference

Controls whether the navbar dropdown respects the user's motion preferences set in their operating system or browser. When enabled (default), the navbar dropdown will automatically disable animations for users who have "Reduce motion" enabled in their system accessibility settings. This helps users with vestibular disorders, ADHD, or those who simply prefer fewer animations. It's recommended to keep this enabled (true) to ensure your navbar is accessible to users with motion sensitivities. Only disable if you have specific design requirements that require consistent animations for all users.

## Transitions

Use slide (default), fly, fade, or scale transtion.

### Fly transition

```svelte
<script lang="ts">
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from "flowbite-svelte";
  import { fly } from "svelte/transition";
</script>

<Navbar>
  <NavBrand href="/">
    <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
  </NavBrand>
  <NavHamburger />
  <NavUl transition={fly} transitionParams={{ y: -20, duration: 250 }}>
    <NavLi href="/">Home</NavLi>
    <NavLi href="/about">About</NavLi>
    <NavLi href="/docs/components/navbar">Navbar</NavLi>
    <NavLi href="/pricing">Pricing</NavLi>
    <NavLi href="/contact">Contact</NavLi>
  </NavUl>
</Navbar>
```

### Fade transition

```svelte
<script lang="ts">
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from "flowbite-svelte";
  import { fade } from "svelte/transition";
</script>

<Navbar>
  <NavBrand href="/">
    <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
  </NavBrand>
  <NavHamburger />
  <NavUl transition={fade} transitionParams={{ duration: 300 }}>
    <NavLi href="/">Home</NavLi>
    <NavLi href="/about">About</NavLi>
    <NavLi href="/docs/components/navbar">Navbar</NavLi>
    <NavLi href="/pricing">Pricing</NavLi>
    <NavLi href="/contact">Contact</NavLi>
  </NavUl>
</Navbar>
```

### Scale transition

```svelte
<script lang="ts">
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from "flowbite-svelte";
  import { scale } from "svelte/transition";
</script>

<Navbar>
  <NavBrand href="/">
    <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
  </NavBrand>
  <NavHamburger />
  <NavUl transition={scale} transitionParams={{ start: 0.8, duration: 200 }}>
    <NavLi href="/">Home</NavLi>
    <NavLi href="/about">About</NavLi>
    <NavLi href="/docs/components/navbar">Navbar</NavLi>
    <NavLi href="/pricing">Pricing</NavLi>
    <NavLi href="/contact">Contact</NavLi>
  </NavUl>
</Navbar>
```

## closeOnClickOutside

Controls whether the navbar menu closes when clicking outside of it.

`Type: boolean | Default: true`

Set closeOnClickOutside to false to disable closing the menu when clicking outside the navbar. Useful for persistent menus or custom close behaviors.

```svelte
<script lang="ts">
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, P } from "flowbite-svelte";
</script>

<Navbar closeOnClickOutside={false}>
  <NavBrand href="/">
    <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
  </NavBrand>
  <NavHamburger />
  <NavUl>
    <NavLi href="/">Home</NavLi>
    <NavLi href="/about">About</NavLi>
    <NavLi href="/docs/components/navbar">Navbar</NavLi>
    <NavLi href="/pricing">Pricing</NavLi>
    <NavLi href="/contact">Contact</NavLi>
  </NavUl>
</Navbar>

<P>
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur quos impedit quo, quis quam in distinctio deleniti facere! Ea aliquid maiores iusto obcaecati rerum quisquam repellendus
  dignissimos rem quo veritatis.
</P>

<P>
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur quos impedit quo, quis quam in distinctio deleniti facere! Ea aliquid maiores iusto obcaecati rerum quisquam repellendus
  dignissimos rem quo veritatis.
</P>
```

## Navbar with dropdown

This example can be used to show a secondary dropdown menu when clicking on one of the navigation links.

```svelte
<script lang="ts">
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Dropdown, DropdownItem, DropdownDivider } from "flowbite-svelte";
  import { ChevronDownOutline } from "flowbite-svelte-icons";
  import { page } from "$app/state";
  let activeUrl = $derived(page.url.pathname);
</script>

<Navbar>
  <NavBrand href="/">
    <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
  </NavBrand>
  <NavHamburger />
  <NavUl {activeUrl}>
    <NavLi href="/">Home</NavLi>
    <NavLi class="cursor-pointer">
      Dropdown<ChevronDownOutline class="text-primary-800 ms-2 inline h-6 w-6 dark:text-white" />
    </NavLi>
    <Dropdown simple class="w-44">
      <DropdownItem href="/">Dashboard</DropdownItem>
      <DropdownItem href="/docs/components/navbar">Settings</DropdownItem>
      <DropdownItem href="/">Earnings</DropdownItem>
      <DropdownDivider />
      <DropdownItem href="/">Sign out</DropdownItem>
    </Dropdown>
    <NavLi href="/settings">Setting</NavLi>
    <NavLi href="/pricing">Pricing</NavLi>
    <NavLi href="/contact">Contact</NavLi>
  </NavUl>
</Navbar>
```

## Navbar with search

Use this example of a navbar element to also show a search input element that you can integrate for a site-wide search.

```svelte
<script lang="ts">
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Search, ToolbarButton } from "flowbite-svelte";
  import { SearchOutline } from "flowbite-svelte-icons";
  import { fade } from "svelte/transition";
</script>

<Navbar>
  {#snippet children({ hidden, toggle })}
    <NavBrand href="/">
      <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
      <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </NavBrand>
    <div class="flex md:order-2">
      <ToolbarButton class="block md:hidden" onclick={toggle}>
        <SearchOutline class="h-5 w-5 text-gray-500 dark:text-gray-400" />
      </ToolbarButton>
      <div class="hidden md:block">
        <Search size="md" class="ms-auto" placeholder="Search..." />
      </div>
      <NavHamburger />
    </div>
    {#if !hidden}
      <div class="mt-2 w-full md:hidden" transition:fade>
        <Search size="md" placeholder="Search..." />
      </div>
    {/if}
    <NavUl>
      <NavLi href="/">Home</NavLi>
      <NavLi href="/about">About</NavLi>
      <NavLi href="/docs/components/navbar">Navbar</NavLi>
    </NavUl>
  {/snippet}
</Navbar>
```

## Navbar with CTA button

Use the following navbar element to show a call to action button alongside the logo and page links.

```svelte
<script lang="ts">
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button } from "flowbite-svelte";
</script>

<Navbar>
  <NavBrand href="/">
    <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
  </NavBrand>
  <div class="flex md:order-2">
    <Button size="sm">Get started</Button>
    <NavHamburger />
  </div>
  <NavUl class="order-1">
    <NavLi href="/">Home</NavLi>
    <NavLi href="/about">About</NavLi>
    <NavLi href="/docs/components/navbar">Navbar</NavLi>
    <NavLi href="/pricing">Pricing</NavLi>
    <NavLi href="/contact">Contact</NavLi>
  </NavUl>
</Navbar>
```

## Sticky navbar

Use this example to keep the navbar positioned fixed to the top side as you scroll down the document page.

```svelte
<script lang="ts">
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, ImagePlaceholder, Skeleton, TextPlaceholder } from "flowbite-svelte";
</script>

<div class="relative px-8">
  <Navbar class="sticky start-0 top-0 z-20 w-full bg-white px-2 py-2.5 sm:px-4 dark:bg-gray-800">
    <NavBrand href="/">
      <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
      <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </NavBrand>
    <NavHamburger />
    <NavUl>
      <NavLi href="/">Home</NavLi>
      <NavLi href="/about">About</NavLi>
      <NavLi href="/docs/components/navbar">Navbar</NavLi>
      <NavLi href="/pricing">Pricing</NavLi>
      <NavLi href="/contact">Contact</NavLi>
    </NavUl>
  </Navbar>
  <div style="height:300px;" class="overflow-scroll pb-16">
    <Skeleton class="mt-4 mb-8" />
    <ImagePlaceholder class="my-8" />
    <TextPlaceholder class="my-8" />
  </div>
</div>
```

## User menu dropdown

Use this example to create a navigation bar with a user profile or button to toggle a dropdown menu.

```svelte
<script lang="ts">
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Avatar, Dropdown, DropdownItem, DropdownHeader, DropdownGroup } from "flowbite-svelte";
</script>

<Navbar>
  <NavBrand href="/">
    <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
  </NavBrand>
  <div class="flex items-center md:order-2">
    <Avatar id="avatar-menu" src="/images/profile-picture-3.webp" />
    <NavHamburger />
  </div>
  <Dropdown placement="bottom" triggeredBy="#avatar-menu">
    <DropdownHeader>
      <span class="block text-sm">Bonnie Green</span>
      <span class="block truncate text-sm font-medium">name@flowbite.com</span>
    </DropdownHeader>
    <DropdownGroup>
      <DropdownItem>Dashboard</DropdownItem>
      <DropdownItem>Settings</DropdownItem>
      <DropdownItem>Earnings</DropdownItem>
    </DropdownGroup>
    <DropdownHeader>Sign out</DropdownHeader>
  </Dropdown>
  <NavUl>
    <NavLi href="/">Home</NavLi>
    <NavLi href="/about">About</NavLi>
    <NavLi href="/docs/components/navbar">Navbar</NavLi>
    <NavLi href="/pricing">Pricing</NavLi>
    <NavLi href="/contact">Contact</NavLi>
  </NavUl>
</Navbar>
```

## Solid background

Use this example to show a solid background for the navbar component instead of being transparent.

```svelte
<script lang="ts">
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from "flowbite-svelte";
</script>

<Navbar class="bg-primary-100 dark:bg-primary-700">
  <NavBrand href="/">
    <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
  </NavBrand>
  <NavHamburger />
  <NavUl>
    <NavLi href="/">Home</NavLi>
    <NavLi href="/about">About</NavLi>
    <NavLi href="/docs/components/navbar">Navbar</NavLi>
    <NavLi href="/pricing">Pricing</NavLi>
    <NavLi href="/contact">Contact</NavLi>
  </NavUl>
</Navbar>
```

## Breakpoint

Use `breakpoint="sm" | "md" (default) | "lg" | "xl"` prop to change the breakpoint of navbar.

```svelte
<script lang="ts">
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, P } from "flowbite-svelte";
</script>

<Navbar breakpoint="lg">
  <NavBrand href="/">
    <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
  </NavBrand>
  <NavHamburger />
  <NavUl>
    <NavLi href="/">Home</NavLi>
    <NavLi href="/about">About</NavLi>
    <NavLi href="/docs/components/navbar">Navbar</NavLi>
    <NavLi href="/pricing">Pricing</NavLi>
    <NavLi href="/contact">Contact</NavLi>
  </NavUl>
</Navbar>

<P>
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur quos impedit quo, quis quam in distinctio deleniti facere! Ea aliquid maiores iusto obcaecati rerum quisquam repellendus
  dignissimos rem quo veritatis.
</P>

<P>
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur quos impedit quo, quis quam in distinctio deleniti facere! Ea aliquid maiores iusto obcaecati rerum quisquam repellendus
  dignissimos rem quo veritatis.
</P>
```

## Component data

### Menu

#### Types

[MenuProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1110)

#### Props

- size: "24"
- color: "currentColor"
- variation: "outline"
- ariaLabel: "bars 3"
- class: className

### NavBrand

#### Types

[NavBrandProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1134)

#### Props

- children
- class: className

### NavContainer

#### Types

[NavContainerProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1136)

#### Props

- children
- fluid
- class: clasName

### NavHamburger

#### Types

[NavHamburgerProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1140)

#### Props

- children
- onclick
- menuClass
- class: className
- classes
- name: "Open main menu"

### NavLi

#### Types

[NavLiProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1161)

#### Props

- children
- onclick
- activeClass
- nonActiveClass
- class: className

### NavUl

#### Types

[NavUlProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1146)

#### Props

- children
- activeUrl: $bindable()
- ulClass
- slideParams
- transition: slide
- transitionParams
- activeClass
- nonActiveClass
- respectMotionPreference: true
- class: clasName
- classes

### Navbar

#### Types

[NavbarProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1126)

#### Props

- children
- fluid
- navContainerClass
- class: className
- closeOnClickOutside: true
- breakpoint: "md"


## References

- [Flowbite Navbar](https://flowbite.com/docs/components/navbar/)
