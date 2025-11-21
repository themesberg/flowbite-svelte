---
layout: componentLayout
title: Svelte Accordion - Flowbite
breadcrumb_title: Svelte Accordion
component_title: Accordion
dir: Components
description: Use the accordion component to show hidden information based on the collapse and expand state of the child elements using data attribute options
---

<script lang="ts">
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase, LlmLink, Seealso } from '../../utils'
  import { P, A } from 'flowbite-svelte'; 
  const dirName = toKebabCase(component_title);
  const relatedLinks = ['/docs/components/tabs','/docs/components/dropdown','/docs/components/modal'];
</script>

The accordion component is a collection of vertically collapsing header and body elements that can be used to show and hide information based on the Tailwind CSS utility classes and JavaScript.

A popular use case would be the "Frequently Asked Questions" section of a website or page when you can show questions and answers for each child element. Other common uses include settings panels, product feature showcases, navigation menus, and multi-step forms.

## Setup

```svelte example hideOutput
<script lang="ts">
  import { AccordionItem, Accordion } from "flowbite-svelte";
</script>
```

## Default accordion

By default, the accordion uses single selection mode, which means opening one accordion item automatically closes all others. This ensures only one section is expanded at a time, keeping the interface clean and focused.

To allow multiple items to remain open simultaneously, set the `multiple` property to `true`.

```svelte example
{#include Default.svelte}
```

## Always open

Use the `open` prop to make an item open on mount. This is useful for highlighting important content or the most frequently accessed section.

```svelte example
{#include Open.svelte}
```

## Color option

You can control the look and feel of `AccordionItems` by overwriting the `activeClass` and `inactiveClass` properties. You can define them in `Accordion` so that they will apply to all children or set them individually on each `AccordionItem`.

This allows you to match the accordion to your brand colors or create visual hierarchy between different accordion sections.

```svelte example
{#include Color.svelte}
```

## Flush accordion

Use `flush` prop to remove the rounded borders. This creates a cleaner, more minimal design that works well in tight layouts or when embedded within cards.

```svelte example
{#include Flush.svelte}
```

## Arrow style

Use the `arrowup` and `arrowdown` snippets to customize the expand/collapse icons. You can use any icon library or custom SVG icons.

```svelte example
{#include ArrowStyle.svelte}
```

## Icon Accordion

Use `header` snippet to add icons and create visually enhanced accordion headers. This helps users quickly identify sections and improves scanability.

```svelte example
{#include Icon.svelte}
```

## Multiple mode

Use `multiple` prop to allow multiple accordion items to be open at the same time. This is useful when users need to compare information across different sections or when content in one section doesn't affect another.

```svelte example
{#include MultipleMode.svelte}
```

### Expand/Collapse All

Here's an example of how to use the `multiple` option together with "expand all" and "collapse all" functionality. This pattern is helpful for long forms or documentation pages where users may want to see everything at once.

```svelte example class="space-y-4"
{#include MultipleMode2.svelte}
```

## Custom transitions

The default transition of `AccordionItem`s is <A href="https://svelte.dev/docs#run-time-svelte-transition-slide">slide</A>. Use the `transitionType` and `transitionParams` prop to create custom transitions.

You can use any Svelte transition function such as `fade`, `blur`, `fly`, or `scale` from the `svelte/transition` module, and customize them with parameters like duration and easing.

```svelte example
{#include Transitions.svelte}
```

## Nesting accordions

Accordions can be nested to create hierarchical content structures. All mentioned options (colors, icons, transitions, etc.) are supported for nested accordions.

This is useful for complex documentation, multi-level settings, or categorized FAQs.

```svelte example hideScript
{#include Nesting.svelte}
```

## Using Svelte's snapshot to preserve the input

Use the following example to preserve the input value when navigating between pages. This leverages SvelteKit's snapshot feature to maintain form state.

To test: Fill out the form, navigate to a different page, and then use your browser's back button. You'll notice that your input is preserved automatically.

```svelte example hideOutput
{#include Snapshot.svelte}
```

## Using transitionType="none"

When you set `transitionType="none"` on an Accordion or an AccordionItem, it disables Svelte transitions completely and instead uses CSS display properties (block/hidden) to show or hide content. This prevents Svelte from destroying and recreating components when toggling the accordion.

This approach is useful when:
- You want to preserve form state or component lifecycle
- You need better performance with many accordion items
- You want instant show/hide without animation

```svelte example class="h-96 space-y-4"
{#include TransitionNone.svelte}
```

## Breakpoints

Control when accordion items are open or closed based on screen size using Flowbite Svelte's responsive utilities. This enables you to create adaptive user experiences where accordions behave differently on mobile versus desktop.

For example, you might want to keep sections expanded on desktop for easy scanning, but collapse them on mobile to save space.

### Basic Usage

Simple Media Query opens accordion item on medium screens and larger:

```svelte example hideResponsiveButtons
{#include BpBasic.svelte}
```

### Using Breakpoints Object

Access multiple breakpoints with a single hook for cleaner, more maintainable code:

```svelte example hideResponsiveButtons
{#include BpObject.svelte}
```

### Advanced Patterns

Current Breakpoint Display shows the current breakpoint in your UI, useful for debugging responsive behavior:

```svelte example hideResponsiveButtons
{#include BpAdvanced.svelte}
```

### Range-Based Opening

Open accordion only within specific screen size ranges. This is useful when you want different behavior for phones, tablets, and desktops:

```svelte example hideResponsiveButtons
{#include BpRange.svelte}
```

### Complex examples

Combining multiple responsive patterns for sophisticated adaptive layouts:

```svelte example hideResponsiveButtons class="space-y-4"
{#include BpComplex.svelte}
```

## Accessibility

The Accordion component is built with accessibility in mind:

- **Keyboard Navigation**: Use Tab to navigate between accordion headers, Enter or Space to toggle items
- **ARIA Attributes**: Proper ARIA labels and states are automatically applied for screen readers
- **Focus Management**: Clear focus indicators help keyboard users navigate
- **Screen Reader Support**: Expanded/collapsed states are announced to screen reader users

## See also

<Seealso links={relatedLinks} />

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {dirName} />

## References

- [Flowbite Accordion](https://flowbite.com/docs/components/accordion/)

## GitHub Links

<GitHubCompoLinks />

## LLM Link

<LlmLink />
