# Svelte Buttons - Flowbite


The button component is probably the most widely used element in any user interface or website as it can be used to launch an action but also to link to other pages.

Buttons are essential for:
- **Form submissions** - submitting user input and data
- **Navigation** - linking to other pages or sections
- **Actions** - triggering operations like save, delete, or edit
- **Dialogs** - opening modals, popovers, or dropdowns
- **Calls to action** - encouraging user engagement and conversions
- **Social interactions** - likes, shares, and follows
- **E-commerce** - add to cart, checkout, payment actions
- **Media controls** - play, pause, and playback controls

flowbite-svelte provides a large variety of styles and sizes for the button component including outlined buttons, multiple colors, sizes, buttons with icons, and more.

## Setup

Import a button component in the script tag.

```svelte
<script lang="ts">
  import { Button } from "flowbite-svelte";
</script>
```

## Default button

Use these default button styles with multiple colors to indicate an action or link within your website. Each color conveys different semantic meanings:

- **Default/Primary Blue**: Primary actions and main CTAs
- **Alternative/Dark**: Secondary actions or secondary options
- **Red**: Destructive actions (delete, remove, cancel)
- **Green**: Positive actions (confirm, approve, submit)
- **Yellow**: Warning actions or cautionary operations
- **Purple**: Special features or premium actions

Choose colors that align with user expectations and provide clear visual hierarchy.

```svelte
<script lang="ts">
  import { Button } from "flowbite-svelte";
</script>

<Button>Default</Button>
<Button color="alternative">Alternative</Button>
<Button color="dark">Dark</Button>
<Button color="light">Light</Button>
<Button color="blue">Blue</Button>
<Button color="green">Green</Button>
<Button color="red">Red</Button>
<Button color="yellow">Yellow</Button>
<Button color="purple">Purple</Button>
```

## Button with link

You can add a link to a Button component. Link buttons are useful for:
- **Navigation CTAs** - prominent links styled as buttons
- **External links** - directing users to external resources
- **Download links** - file downloads styled as buttons
- **Anchor links** - jumping to page sections

Using `href` creates a semantic `<a>` tag with button styling, providing proper browser behavior (right-click, open in new tab) and SEO benefits.

```svelte
<script lang="ts">
  import { Button } from "flowbite-svelte";
</script>

<Button href="/">Home</Button>
```

## Button pills

The button pills can be used as an alternative style by using fully rounded edges. Pill buttons offer:
- **Modern aesthetic** - contemporary, friendly appearance
- **Visual distinction** - standing out from standard buttons
- **Brand personality** - softer, more approachable feel
- **Mobile-friendly** - rounder shapes feel natural on touch screens

Pill buttons work especially well in modern web apps, social platforms, and consumer-facing products.

```svelte
<script lang="ts">
  import { Button } from "flowbite-svelte";
</script>

<Button pill>Default</Button>
<Button color="alternative" pill>Alternative</Button>
<Button color="dark" pill>Dark</Button>
<Button color="light" pill>Light</Button>
<Button color="blue" pill>Blue</Button>
<Button color="green" pill>Green</Button>
<Button color="red" pill>Red</Button>
<Button color="yellow" pill>Yellow</Button>
<Button color="purple" pill>Purple</Button>
```

## Gradient monochrome

These beautifully colored buttons built with the gradient color stops utility classes from Tailwind CSS can be used as a creative alternative to the default button styles.

Gradient buttons are perfect for:
- **Hero sections** - eye-catching primary CTAs
- **Landing pages** - premium feel and visual interest
- **Marketing campaigns** - standing out and grabbing attention
- **Premium features** - indicating special or paid features
- **Brand differentiation** - creating memorable visual identity

Use sparingly to maintain impact and avoid overwhelming users.

```svelte
<script lang="ts">
  import { GradientButton } from "flowbite-svelte";
</script>

<GradientButton color="blue">Blue</GradientButton>
<GradientButton color="green">Green</GradientButton>
<GradientButton color="cyan">Cyan</GradientButton>
<GradientButton color="teal">Teal</GradientButton>
<GradientButton color="lime">Lime</GradientButton>
<GradientButton color="red">Red</GradientButton>
<GradientButton color="pink">Pink</GradientButton>
<GradientButton color="purple">Purple</GradientButton>
```

## Gradient duotone

These buttons use a style that includes two contrasted colors creating an impressive mesh gradient effect. Duotone gradients offer:
- **Visual depth** - dimensional appearance
- **Brand colors** - incorporating multiple brand colors
- **Modern design** - contemporary gradient trends
- **Attention-grabbing** - higher visual impact than solid colors

Ideal for promotional content, featured actions, and creative industries.

```svelte
<script lang="ts">
  import { GradientButton } from "flowbite-svelte";
</script>

<GradientButton color="purpleToBlue">Purple to Blue</GradientButton>
<GradientButton color="cyanToBlue">Cyan to Blue</GradientButton>
<GradientButton color="greenToBlue">Green to Blue</GradientButton>
<GradientButton color="purpleToPink">Purple to Pink</GradientButton>
<GradientButton color="pinkToOrange">Pink to Orange</GradientButton>
<GradientButton color="tealToLime">Teal to Lime</GradientButton>
<GradientButton color="redToYellow">Red to Yellow</GradientButton>
```

## Gradient outline

This is a special button style that incorporates a gradient color for the outline that can be used as a secondary style to the fully colored gradient buttons.

Gradient outline buttons provide:
- **Subtle premium feel** - sophisticated without being overwhelming
- **Visual hierarchy** - secondary to filled gradient buttons
- **Background versatility** - works on various backgrounds
- **Hover states** - can transition to filled on interaction

Use for secondary CTAs that still need visual interest.

```svelte
<script lang="ts">
  import { GradientButton } from "flowbite-svelte";
</script>

<GradientButton outline color="purpleToBlue">Purple to Blue</GradientButton>
<GradientButton outline color="cyanToBlue">Cyan to Blue</GradientButton>
<GradientButton outline color="greenToBlue">Green to Blue</GradientButton>
<GradientButton outline color="purpleToPink">Purple to Pink</GradientButton>
<GradientButton outline color="pinkToOrange">Pink to Orange</GradientButton>
<GradientButton outline color="tealToLime">Teal to Lime</GradientButton>
<GradientButton outline pill color="redToYellow">Red to Yellow</GradientButton>
<GradientButton outline color="redToYellow" class="w-72">Red to Yellow</GradientButton>
```

## Colored shadows

These beautiful button elements with color shadows can be used since the release of Tailwind v3.0. Shadow effects create:
- **Depth and elevation** - buttons appear lifted from page
- **Visual prominence** - drawing attention to important actions
- **Brand reinforcement** - shadows matching brand colors
- **Modern aesthetic** - contemporary design trends

Best for hero CTAs and primary actions where you want maximum visual impact.

```svelte
<script lang="ts">
  import { GradientButton } from "flowbite-svelte";
</script>

<GradientButton shadow color="blue">Blue</GradientButton>
<GradientButton shadow color="green">Green</GradientButton>
<GradientButton shadow color="cyan">Cyan</GradientButton>
<GradientButton shadow color="teal">Teal</GradientButton>
<GradientButton shadow color="lime">Lime</GradientButton>
<GradientButton shadow color="red">Red</GradientButton>
<GradientButton shadow color="pink">Pink</GradientButton>
<GradientButton shadow color="purple">Purple</GradientButton>
```

## Outline buttons

Use the following button styles to show the colors only for the border of the element. Outline buttons are excellent for:
- **Secondary actions** - less visual weight than filled buttons
- **Multiple options** - reducing visual clutter with many buttons
- **Light backgrounds** - maintaining clarity without heavy fills
- **Cancel actions** - de-emphasizing dismissive actions
- **Ghost buttons** - minimal, modern appearance

Outline buttons provide clear hierarchy while maintaining a clean, uncluttered interface.

```svelte
<script lang="ts">
  import { Button } from "flowbite-svelte";
</script>

<Button outline>Default</Button>
<Button outline color="dark">Dark</Button>
<Button outline color="green">Green</Button>
<Button outline color="red">Red</Button>
<Button outline color="yellow">Yellow</Button>
<Button outline color="purple">Purple</Button>
```

## Button sizes with icons

Use these examples if you want to use smaller or larger buttons. Size variations serve different purposes:
- **xs**: Compact interfaces, inline actions, dense tables
- **sm**: Secondary actions, toolbar buttons, form controls
- **md**: Default size for most use cases
- **lg**: Primary CTAs, prominent actions, hero sections
- **xl**: Extra emphasis, landing pages, marketing campaigns

Icons help users quickly identify button purpose and improve scannability.

```svelte
<script lang="ts">
  import { Button } from "flowbite-svelte";
  import { EnvelopeSolid } from "flowbite-svelte-icons";
</script>

<Button size="xs"><EnvelopeSolid class="me-2 h-4 w-4" />Extra small</Button>
<Button size="sm"><EnvelopeSolid class="me-2 h-4 w-4" />Small</Button>
<Button size="md"><EnvelopeSolid class="me-2 h-5 w-5" />Base</Button>
<Button size="lg"><EnvelopeSolid class="me-2 h-5 w-5" />Large</Button>
<Button size="xl"><EnvelopeSolid class="me-2 h-6 w-6" />Extra large</Button>
```

## Button with icon

Use the following examples to add a SVG icon inside the button either on the left or right side. Icons enhance buttons by:
- **Improving recognition** - visual symbols processed faster than text
- **Providing context** - clarifying action purpose
- **Supporting internationalization** - reducing text dependencies
- **Creating consistency** - matching icon usage across the app
- **Adding polish** - professional, refined appearance

Position icons based on reading direction and action type (left for actions, right for navigation).

```svelte
<script lang="ts">
  import { Button } from "flowbite-svelte";
  import { ArrowRightOutline, CartSolid } from "flowbite-svelte-icons";
</script>

<Button>
  <CartSolid class="me-2 h-5 w-5" /> Buy Now
</Button>
<Button>
  Choose Plan <ArrowRightOutline class="ms-2 h-5 w-5" />
</Button>
```

## Button with label

This example can be used to show a notification count or helper text inside a button using the badge element. Labels within buttons are useful for:
- **Notification counts** - unread messages, pending items
- **Status indicators** - new, beta, pro features
- **Quantities** - cart items, selected filters
- **Contextual info** - providing additional context without clutter

Badges help users make informed decisions about clicking buttons.

```svelte
<script lang="ts">
  import { Button, Indicator } from "flowbite-svelte";
</script>

<Button class="gap-2">
  Messages
  <Indicator class="bg-primary-200 text-primary-800 text-xs font-semibold" size="lg">2</Indicator>
</Button>
```

## Icon buttons

Sometimes you need a button to indicate an action using only an icon. Icon-only buttons work well when:
- **Space is limited** - toolbars, compact layouts
- **Icons are universal** - commonly understood symbols (search, close, menu)
- **Used consistently** - patterns established throughout app
- **Tooltips provided** - additional context on hover

Always include accessible labels (aria-label) for screen readers even when text isn't visible.

```svelte
<script lang="ts">
  import { Button } from "flowbite-svelte";
  import { ThumbsUpSolid, ArrowRightOutline } from "flowbite-svelte-icons";
</script>

<Button class="p-2!"><ArrowRightOutline class="h-6 w-6" /></Button>
<Button pill={true} class="p-2!"><ArrowRightOutline class="h-6 w-6" /></Button>
<Button outline={true} class="p-2!" size="lg">
  <ThumbsUpSolid class="text-primary-700 h-7 w-7" />
</Button>
<Button pill={true} outline={true} class="p-2!" size="xl">
  <ThumbsUpSolid class="text-primary-700 h-6 w-6" />
</Button>
```

## Loader

Use the spinner components to indicate a loader animation inside buttons. Loading states are critical for:
- **Form submissions** - preventing duplicate submissions
- **API calls** - showing pending operations
- **User feedback** - confirming action is processing
- **Error prevention** - disabling button during processing

Always disable buttons during loading to prevent multiple submissions.

```svelte
<script lang="ts">
  import { Button, Spinner } from "flowbite-svelte";
</script>

<Button loading>Loading ...</Button>
<Button loading spinnerProps={{ size: "4", color: "green" }}>Loading ...</Button>
<Button>
  <Spinner class="me-3" size="4" color="gray" />Loading ...
</Button>
<Button color="alternative">
  <Spinner class="me-3" size="4" />Loading ...
</Button>
```

## Disabled

You can add any additional button attributes. The following example shows adding the `disabled` attribute. Disabled buttons should:
- **Remain visible** - showing all available options
- **Indicate unavailability** - clear visual difference from enabled state
- **Provide context** - tooltips explaining why disabled (when helpful)
- **Maintain layout** - preventing UI shifts

Use disabled states for conditional features, permission-based actions, or form validation feedback.

```svelte
<script lang="ts">
  import { Button } from "flowbite-svelte";
</script>

<Button disabled>Disabled</Button>
```

## Events

You can use `onclick` or any standard `on*` to listen to the event. Event handling enables:
- **Action triggering** - executing functions on click
- **State management** - updating application state
- **Analytics tracking** - measuring user interactions
- **Form validation** - checking inputs before submission
- **Navigation** - programmatic routing
- **Feedback** - showing notifications or alerts

```svelte
<script lang="ts">
  import { Button } from "flowbite-svelte";
  const btn1 = () => {
    alert("You clicked btn1.");
  };
  const btn2 = () => {
    alert("You touched btn2.");
  };
</script>

<Button onclick={btn1}>Button 1</Button>
<Button ontouchstart={btn2}>Button 2</Button>
```

## Loading State with Spinner

Use the `loading` prop to indicate a pending action (e.g. form submission). When `true`, the button is automatically disabled and shows a built-in spinner. This improves user feedback and prevents duplicate submissions.

Benefits of the loading prop:
- **Automatic disabling** - prevents duplicate clicks
- **Built-in spinner** - no need to manage separate loading UI
- **User feedback** - clear indication of processing
- **State management** - simple boolean control

This pattern is essential for any async operation triggered by a button.

```svelte
<script lang="ts">
  import { Button } from "flowbite-svelte";
  let loading = $state(false);

  async function handleSubmit() {
    loading = true;
    await new Promise((resolve) => setTimeout(resolve, 2000));
    loading = false;
  }
</script>

<Button class="w-32" onclick={handleSubmit} {loading}>Submit</Button>
```

## Accessibility

The Button component follows accessibility best practices:

- **Keyboard Navigation**: All buttons are accessible using Tab and Enter/Space
- **Focus Indicators**: Clear focus states for keyboard users
- **ARIA Labels**: Use aria-label for icon-only buttons
- **Semantic HTML**: Uses `<button>` for actions, `<a>` for links
- **Disabled State**: Properly marked with disabled attribute and aria-disabled
- **Loading State**: Announces loading status to screen readers
- **Color Contrast**: All color variants meet WCAG contrast requirements
- **Touch Targets**: Minimum 44x44px for mobile usability

## Best Practices

When implementing buttons, consider these guidelines:

- **Clear Labels**: Use action-oriented verbs (Save, Delete, Submit, Cancel)
- **Consistent Sizing**: Maintain size consistency within the same context
- **Visual Hierarchy**: Primary actions should stand out from secondary ones
- **Spacing**: Provide adequate space between buttons (minimum 8px)
- **Loading States**: Always show feedback for async operations
- **Confirmation**: Require confirmation for destructive actions
- **Mobile Touch**: Ensure adequate touch target size (44x44px minimum)
- **Color Meaning**: Use colors consistently (red for delete, green for confirm)
- **Limit CTAs**: Focus on 1-2 primary actions per view
- **Descriptive Text**: Avoid vague labels like "Click here" or "Submit"

## Button Hierarchy

Establish clear visual hierarchy with different button types:

1. **Primary** - Main action (filled, prominent color)
2. **Secondary** - Alternative action (outline or subtle color)
3. **Tertiary** - Less important action (text button or ghost)
4. **Destructive** - Dangerous action (red, requires confirmation)

## Common Patterns

**Form Actions**: Submit (primary) + Cancel (secondary)
**Confirmation Dialogs**: Confirm (red/destructive) + Cancel (outline)
**Wizards**: Back (outline) + Next (primary) + Cancel (text)
**CRUD Operations**: Create (green) + Edit (blue) + Delete (red)

## See also

- [Button group](https://flowbite-svelte.com/llm/components/button-group.md)
- [Close button](https://flowbite-svelte.com/llm/utilities/close-button.md)
- [Radio](https://flowbite-svelte.com/llm/forms/radio.md)
- [Checkbox](https://flowbite-svelte.com/llm/forms/checkbox.md)
- [Badge](https://flowbite-svelte.com/llm/components/badge.md)


## Component data

### Button

#### Types

[ButtonProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L330)

#### Props

- children
- pill
- outline: false
- size: "md"
- color
- shadow: false
- tag: "button"
- disabled
- loading: false
- spinnerProps: { size: "4"

### GradientButton

#### Types

[GradientButtonProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L340)

#### Props

- children
- outline
- pill
- color: "blue"
- shadow
- class: className
- href
- disabled
- size
- btnClass


## References

- [Flowbite Buttons](https://flowbite.com/docs/components/buttons/)
