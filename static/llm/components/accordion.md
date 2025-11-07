# Svelte Accordion - Flowbite


The accordion component is a collection of vertically collapsing header and body elements that can be used to show and hide information based on the Tailwind CSS utility classes and JavaScript from Flowbite.

A popular use case would be the “Frequently Asked Questions” section of a website or page when you can show questions and answers for each child element.

## Setup

```svelte
<script lang="ts">
  import { AccordionItem, Accordion } from "flowbite-svelte";
</script>
```

## Default accordion

Accordion uses the single selection mode by default i.e. it collapses every other child element when expanding a one.

To prevent that behavior set `multiple` property to `true`.

```svelte
<script lang="ts">
  import { AccordionItem, Accordion } from "flowbite-svelte";
</script>

<Accordion>
  <AccordionItem>
    {#snippet header()}My Header 1{/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    <p class="text-gray-500 dark:text-gray-400">
      Check out this guide to learn how to <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 hover:underline dark:text-blue-500">get started</a>
      and start developing websites even faster with components on top of Tailwind CSS.
    </p>
  </AccordionItem>
  <AccordionItem>
    {#snippet header()}My Header 2{/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
    <ul class="list-disc ps-5 text-gray-500 dark:text-gray-400">
      <li>
        <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 hover:underline dark:text-blue-500">Lorem ipsum</a>
      </li>
      <li>
        <a href="https://tailwindui.com/" rel="noreferrer" target="_blank" class="text-blue-600 hover:underline dark:text-blue-500">Tailwind UI</a>
      </li>
    </ul>
  </AccordionItem>
</Accordion>
```

## Always open

Use the `open` prop to make an item open on mount.

```svelte
<script lang="ts">
  import { AccordionItem, Accordion } from "flowbite-svelte";
</script>

<Accordion>
  <AccordionItem open>
    {#snippet header()}Header 2-1{/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
  </AccordionItem>
  <AccordionItem>
    {#snippet header()}Header 2-2{/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
  </AccordionItem>
</Accordion>
```

## Color option

You can control the look and feel of `AccordionItems` by overwriting the `activeClass` and `inactiveClass` properties. You can define them in `Accordion` so that they will apply to all children or set them individually on each `AccordionItem`.

```svelte
<script lang="ts">
  import { AccordionItem, Accordion } from "flowbite-svelte";
</script>

<Accordion
  activeClass="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800"
  inactiveClass="text-gray-500 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800"
>
  <AccordionItem>
    {#snippet header()}Header 2-1{/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
  </AccordionItem>
  <AccordionItem>
    {#snippet header()}Header 2-2{/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
  </AccordionItem>
</Accordion>
```

## Flush accordion

Use `flush` prop to remove the rounded borders.

```svelte
<script lang="ts">
  import { AccordionItem, Accordion } from "flowbite-svelte";
</script>

<Accordion flush>
  <AccordionItem>
    {#snippet header()}Header 2-1{/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
  </AccordionItem>
  <AccordionItem>
    {#snippet header()}Header 2-2{/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
  </AccordionItem>
</Accordion>
```

## Arrow style

Use the `arrowup` and `arrowdown` snippets to set up and down icons.

```svelte
<script lang="ts">
  import { AccordionItem, Accordion } from "flowbite-svelte";
  import { ChevronDoubleUpOutline, ChevronDoubleDownOutline } from "flowbite-svelte-icons";
</script>

<Accordion>
  <AccordionItem>
    {#snippet header()}Header 2-1{/snippet}
    {#snippet arrowup()}
      <ChevronDoubleUpOutline class="-me-0.5 h-6 w-6" />
    {/snippet}
    {#snippet arrowdown()}
      <ChevronDoubleDownOutline class="-me-0.5 h-6 w-6" />
    {/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
  </AccordionItem>
  <AccordionItem>
    {#snippet header()}Header 2-2{/snippet}
    {#snippet arrowup()}
      <ChevronDoubleUpOutline class="-me-0.5 h-6 w-6" />
    {/snippet}
    {#snippet arrowdown()}
      <ChevronDoubleDownOutline class="-me-0.5 h-6 w-6" />
    {/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
  </AccordionItem>
</Accordion>
```

## Icon Accordion

Use `header` snippet to add your icon and title.

```svelte
<script lang="ts">
  import { AccordionItem, Accordion } from "flowbite-svelte";
  import { CartSolid, CogOutline } from "flowbite-svelte-icons";
</script>

<Accordion>
  <AccordionItem>
    {#snippet header()}
      <div class="flex items-center gap-2">
        <CartSolid />
        <span>My Header 1</span>
      </div>
    {/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo...</p>
    <p class="text-gray-500 dark:text-gray-400">
      Check out this guide to learn how to <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 hover:underline dark:text-blue-500">get started</a>
      and start websites even faster with components on top of Tailwind CSS.
    </p>
  </AccordionItem>
  <AccordionItem>
    {#snippet header()}
      <div class="flex items-center gap-2">
        <CogOutline />
        <span>My Header 2</span>
      </div>
    {/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sintexplicabo...</p>
  </AccordionItem>
</Accordion>
```

## Multiple mode

Use `multiple` to open all accordion items.

```svelte
<script lang="ts">
  import { Accordion, AccordionItem } from "flowbite-svelte";
</script>

<Accordion multiple>
  <AccordionItem open>
    {#snippet header()}
      Header 1-1
    {/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
  </AccordionItem>
  <AccordionItem open>
    {#snippet header()}
      Header 1-2
    {/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
  </AccordionItem>
</Accordion>
```

Another example how to use the `multiple` option together with expand all behavior.

```svelte
<script lang="ts">
  import { AccordionItem, Accordion, Button, P } from "flowbite-svelte";
  const items = $state([false, false, false]);

  const open_all = () => items.forEach((_, i) => (items[i] = true));
  const close_all = () => items.forEach((_, i) => (items[i] = false));
</script>

<Button onclick={open_all}>Open all</Button>
<Button onclick={close_all}>Close all</Button>
<Accordion multiple>
  <AccordionItem bind:open={items[0]}>
    {#snippet header()}My Header 1{/snippet}
    <P class="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</P>
    <P class="text-gray-500 dark:text-gray-400">
      Check out this guide to learn how to <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 hover:underline dark:text-blue-500">get started</a>
      and start developing websites even faster with components on top of Tailwind CSS.
    </P>
  </AccordionItem>
  <AccordionItem bind:open={items[1]}>
    {#snippet header()}My Header 2{/snippet}
    <P class="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</P>
    <P class="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</P>
    <P class="mb-2">Learn more about these technologies:</P>
  </AccordionItem>
  <AccordionItem bind:open={items[2]}>
    {#snippet header()}My Header 3{/snippet}
    <P>Something more</P>
  </AccordionItem>
</Accordion>
```

## Custom transitions

The default transition of `AccordionItem`s is <A href="https://svelte.dev/docs#run-time-svelte-transition-slide">slide</A>. Use the `transitionType` and `transitionParams` prop to make custom transitions.

```svelte
<script lang="ts">
  import { AccordionItem, Accordion } from "flowbite-svelte";
  import { blur, fade } from "svelte/transition";
</script>

<Accordion>
  <AccordionItem transitionParams={{ duration: 1000 }}>
    {#snippet header()}Slide duration:1000{/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
  </AccordionItem>
  <AccordionItem transitionType={blur} transitionParams={{ duration: 300 }}>
    {#snippet header()}Blur duration:300{/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
  </AccordionItem>
  <AccordionItem transitionType={fade} transitionParams={{ duration: 300 }}>
    {#snippet header()}Fade duration:300{/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
  </AccordionItem>
</Accordion>
```

## Nesting accordions

Accordions can be nested. All of the mentioned options are supported.

```svelte
<script lang="ts">
  import { AccordionItem, Accordion } from "flowbite-svelte";
</script>

<Accordion>
  <AccordionItem open>
    {#snippet header()}My Header 1{/snippet}
    <Accordion>
      <AccordionItem>
        {#snippet header()}My Header 1{/snippet}
        <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
        <p class="text-gray-500 dark:text-gray-400">
          Check out this guide to learn how to <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 hover:underline dark:text-blue-500">get started</a>
          and start developing websites even faster with components on top of Tailwind CSS.
        </p>
      </AccordionItem>
      <AccordionItem>
        {#snippet header()}My Header 2{/snippet}
        <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
        <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
        <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
        <ul class="list-disc ps-5 text-gray-500 dark:text-gray-400">
          <li><a href="/" target="_blank" rel="noreferrer" class="text-blue-600 hover:underline dark:text-blue-500">Lorem ipsum</a></li>
          <li><a href="https://tailwindui.com/" rel="noreferrer" target="_blank" class="text-blue-600 hover:underline dark:text-blue-500">Tailwind UI</a></li>
        </ul>
      </AccordionItem>
    </Accordion>
  </AccordionItem>
  <AccordionItem>
    {#snippet header()}My Header 2{/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
    <ul class="list-disc ps-5 text-gray-500 dark:text-gray-400">
      <li><a href="/" target="_blank" rel="noreferrer" class="text-blue-600 hover:underline dark:text-blue-500">Lorem ipsum</a></li>
      <li><a href="https://tailwindui.com/" rel="noreferrer" target="_blank" class="text-blue-600 hover:underline dark:text-blue-500">Tailwind UI</a></li>
    </ul>
  </AccordionItem>
</Accordion>
```

## Using Svelte’s snapshot to preserve the input

Use the following example to preserve the input value. First fill out the form, navigate to a different page, and then use your browser’s back button. You’ll notice that your input is preserved automatically.

```svelte
<script lang="ts">
  import { AccordionItem, Accordion, Input, Textarea, Button, Label, A } from "flowbite-svelte";
  import type { Snapshot } from "../../../$types";
  let name = $state("");
  let email = $state("");
  let comment = $state("");
  export const snapshot: Snapshot<{ name: string; email: string; comment: string }> = {
    capture: () => ({ name, email, comment }),
    restore: (value) => {
      name = value.name;
      email = value.email;
      comment = value.comment;
    }
  };
  const handleSubmit = (e: Event): void => {
    e.preventDefault();

    alert(`Submitted:\nName: ${name}\nEmail: ${email}\nComment: ${comment}`);
  };
</script>

<A href="/">Go home</A>
<Accordion>
  <AccordionItem>
    {#snippet header()}My Header 1{/snippet}
    <form method="POST">
      <Label for="name">Name</Label>
      <Input id="name" bind:value={name} type="text" />
      <Label for="email">Email</Label>
      <Input id="email" bind:value={email} type="email" />
      <Label for="comment">Comment</Label>
      <Textarea id="comment" bind:value={comment} class="w-full" />
      <Button onclick={handleSubmit} class="mt-4">Submit</Button>
    </form>
  </AccordionItem>
  <AccordionItem>
    {#snippet header()}My Header 2{/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    <ul class="list-disc ps-5 text-gray-500 dark:text-gray-400">
      <li>
        <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 hover:underline dark:text-blue-500">Lorem ipsum</a>
      </li>
      <li>
        <a href="https://tailwindui.com/" rel="noreferrer" target="_blank" class="text-blue-600 hover:underline dark:text-blue-500">Tailwind UI</a>
      </li>
    </ul>
  </AccordionItem>
</Accordion>
```

## Using transitionType="none"

When you set transitionType="none" on an Accordion or an AccordionItem, it disables Svelte transitions completely and instead uses CSS display properties (block/hidden) to show or hide content. It prevents Svelte from completely destroying and recreating components when toggling the accordion.

```svelte
<script lang="ts">
  import { AccordionItem, Accordion } from "flowbite-svelte";
</script>

<Accordion transitionType="none">
  <AccordionItem>
    {#snippet header()}My Header 1{/snippet}
    Content A
  </AccordionItem>
  <AccordionItem>
    {#snippet header()}My Header 2{/snippet}
    Content B
  </AccordionItem>
</Accordion>

<Accordion>
  <AccordionItem transitionType="none">
    {#snippet header()}transitionType: "none"{/snippet}
    Content C
  </AccordionItem>
  <AccordionItem>
    {#snippet header()}transitionType: default{/snippet}
    Content D
  </AccordionItem>
</Accordion>
```

## Breakpoints

Control when accordion items are open or closed based on screen size using Flowbite Svelte's responsive utilities.

### Basic Usage

Simple Media Query opens accordion item on medium screens and larger:

```svelte
<script lang="ts">
  import { AccordionItem, useMediaQuery, P } from "flowbite-svelte";
  const isMdAndUp = useMediaQuery("(min-width: 768px)");
</script>

<AccordionItem open={isMdAndUp()}>
  {#snippet header()}Opens on tablets and desktop{/snippet}
  <P>This content is visible on medium screens and larger.</P>
</AccordionItem>
```

### Using Breakpoints Object

Access multiple breakpoints with a single hook:

```svelte
<script lang="ts">
  import { AccordionItem, useBreakpoints, P } from "flowbite-svelte";
  const breakpoints = useBreakpoints();
</script>

<AccordionItem open={breakpoints.md}>
  {#snippet header()}Opens on medium screens+{/snippet}
  <P>Content for tablets and desktop users.</P>
</AccordionItem>
```

### Advanced Patterns

Current Breakpoint Display show the current breakpoint in your UI:

```svelte
<script lang="ts">
  import { AccordionItem, useCurrentBreakpoint, useBreakpoints, P } from "flowbite-svelte";
  const breakpoints = useBreakpoints();
  const getCurrentBreakpoint = useCurrentBreakpoint();
  const currentBp = $derived(getCurrentBreakpoint());
</script>

<AccordionItem open={breakpoints.lg}>
  {#snippet header()}Desktop Only (Current: {currentBp}){/snippet}
  <P>This opens only on large screens and above.</P>
</AccordionItem>
```

### Range-Based Opening

Open accordion only within specific screen size ranges:

```svelte
<script lang="ts">
  import { AccordionItem, useMediaQuery, useBreakpoints, P } from "flowbite-svelte";
  const breakpoints = useBreakpoints();

  // Open from sm to lg (640px - 1023px)
  const tabletRange = $derived(breakpoints.sm && !breakpoints.lg);

  // Open on specific breakpoints only
  const specificSizes = $derived((breakpoints.sm && !breakpoints.md) || (breakpoints.lg && !breakpoints.xl));

  // Custom pixel range
  const customRange = useMediaQuery("(min-width: 640px) and (max-width: 1023px)");
</script>

<AccordionItem open={tabletRange}>
  {#snippet header()}Tablet Range (640px - 1023px){/snippet}
  <P>Open on tablets, closed on phones and large desktops.</P>
</AccordionItem>

<AccordionItem open={specificSizes}>
  {#snippet header()}Small phones OR Large desktops only{/snippet}
  <P>Open on sm-only OR lg-only, closed on other sizes.</P>
</AccordionItem>

<AccordionItem open={customRange()}>
  {#snippet header()}Custom Range{/snippet}
  <P>Define exact pixel ranges for precise control.</P>
</AccordionItem>
```

### Complex examples

```svelte
<script lang="ts">
  import { Accordion, AccordionItem, P, useMediaQuery, useBreakpoints, useCurrentBreakpoint } from "flowbite-svelte";

  // Different approaches to responsive behavior
  const isMdAndUp = useMediaQuery("(min-width: 768px)");
  const breakpoints = useBreakpoints();
  const getCurrentBreakpoint = useCurrentBreakpoint();

  const currentBp = $derived(getCurrentBreakpoint());
  const tabletOnly = $derived(breakpoints.sm && !breakpoints.lg);
  const mobileOnly = $derived(!breakpoints.sm);
</script>

<!-- Always open on medium+ screens -->
<Accordion>
  <AccordionItem open={isMdAndUp()}>
    {#snippet header()}
      📱 Tablet & Desktop (Current: {currentBp})
    {/snippet}
    <P>Opens on tablets and larger screens. Stays closed on mobile.</P>
  </AccordionItem>

  <AccordionItem>
    {#snippet header()}Always Interactive{/snippet}
    <P>This accordion item behaves normally on all screen sizes.</P>
  </AccordionItem>
</Accordion>

<!-- Open only in tablet range -->
<Accordion>
  <AccordionItem open={tabletOnly}>
    {#snippet header()}
      📱 Tablet Only (640px - 1023px)
    {/snippet}
    <P>This opens automatically on tablets but closes on mobile phones and large desktop screens.</P>
  </AccordionItem>
</Accordion>

<!-- Mobile-first approach -->
<Accordion>
  <AccordionItem open={mobileOnly}>
    {#snippet header()}
      📱 Mobile Only (below 640px)
    {/snippet}
    <P>Expanded by default on mobile for better accessibility, collapsed on larger screens to save space.</P>
  </AccordionItem>
</Accordion>
```

## Component data

### Accordion

#### Types

[AccordionProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L207)

#### Props

- children
- flush
- activeClass
- inactiveClass
- multiple: false
- class: className
- transitionType

### AccordionItem

#### Types

[AccordionItemProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L215)

#### Props

- children
- header
- arrowup
- arrowdown
- open: $bindable(false)
- activeClass
- inactiveClass
- transitionType: slide
- transitionParams
- class: className
- classes
- headerClass
- contentClass


## References

- [Flowbite Accordion](https://flowbite.com/docs/components/accordion/)
