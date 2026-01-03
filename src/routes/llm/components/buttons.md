# Svelte Buttons - Flowbite


The button component is probably the most widely used element in any user interface or website as it can be used to launch an action but also to link to other pages.

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

Choose colors that align with user expectations and provide clear visual hierarchy.

```svelte
<script lang="ts">
  import { Button } from "flowbite-svelte";
</script>

<Button>Brand</Button>
<Button color="alternative">Alternative</Button>
<Button color="gray">Gray</Button>
<Button color="success">Success</Button>
<Button color="danger">Danger</Button>
<Button color="warning">Warning</Button>
<Button color="transparent">Transparent</Button>
<Button color="dark">Dark</Button>
```

## Button with link

Using `href` creates a semantic `<a>` tag with button styling, providing proper browser behavior (right-click, open in new tab) and SEO benefits.

```svelte
<script lang="ts">
  import { Button } from "flowbite-svelte";
</script>

<Button href="/">Home</Button>
```

## Button pills

The button pills can be used as an alternative style by using fully rounded edges.

Pill buttons work especially well in modern web apps, social platforms, and consumer-facing products.

```svelte
<script lang="ts">
  import { Button } from "flowbite-svelte";
</script>

<Button pill>Brand</Button>
<Button color="alternative" pill>Alternative</Button>
<Button color="gray" pill>Gray</Button>
<Button color="success" pill>Success</Button>
<Button color="danger" pill>Danger</Button>
<Button color="warning" pill>Warning</Button>
<Button color="transparent" pill>Transparent</Button>
<Button color="dark" pill>Dark</Button>
```

## Shadow

```svelte
<script lang="ts">
  import { Button } from "flowbite-svelte";
</script>

<Button shadow>Brand</Button>
<Button color="alternative" shadow>Alternative</Button>
<Button color="gray" shadow>Gray</Button>
<Button color="success" shadow>Success</Button>
<Button color="danger" shadow>Danger</Button>
<Button color="warning" shadow>Warning</Button>
<Button color="transparent" shadow>Transparent</Button>
<Button color="dark" shadow>Dark</Button>
```

## Gradient monochrome

These beautifully colored buttons built with the gradient color stops utility classes from Tailwind CSS can be used as a creative alternative to the default button styles.

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

These buttons use a style that includes two contrasted colors creating an impressive mesh gradient effect.

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

These beautiful button elements with color shadows can be used since the release of Tailwind v3.0.

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

Use the following button styles to show the colors only for the border of the element. 

Outline buttons provide clear hierarchy while maintaining a clean, uncluttered interface.

```svelte
<script lang="ts">
  import { Button } from "flowbite-svelte";
</script>

<Button outline>Brand</Button>
<Button color="alternative" outline>Alternative</Button>
<Button color="gray" outline>Gray</Button>
<Button color="success" outline>Success</Button>
<Button color="danger" outline>Danger</Button>
<Button color="warning" outline>Warning</Button>
<Button color="transparent" outline>Transparent</Button>
<Button color="dark" outline>Dark</Button>
```

## Button sizes with icons

Use these examples if you want to use smaller or larger buttons.

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

Use the following examples to add a SVG icon inside the button either on the left or right side.

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

This example can be used to show a notification count or helper text inside a button using the badge element.

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

Sometimes you need a button to indicate an action using only an icon. 

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

Use the spinner components to indicate a loader animation inside buttons.

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

You can add any additional button attributes. The following example shows adding the `disabled` attribute.

Use disabled states for conditional features, permission-based actions, or form validation feedback.

```svelte
<script lang="ts">
  import { Button } from "flowbite-svelte";
</script>

<Button disabled>Disabled</Button>
```

## Events

You can use `onclick` or any standard `on*` to listen to the event. 

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

## See also

- [Button group](https://flowbite-svelte.com/llm/components/button-group.md)
- [Close button](https://flowbite-svelte.com/llm/utilities/close-button.md)
- [Radio](https://flowbite-svelte.com/llm/forms/radio.md)
- [Checkbox](https://flowbite-svelte.com/llm/forms/checkbox.md)
- [Badge](https://flowbite-svelte.com/llm/components/badge.md)


## Component data

### Button

#### Types

[ButtonProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L337)

#### Props

- children
- pill
- outline: false
- size: "md"
- color: "brand"
- shadow: false
- tag: "button"
- disabled
- loading: false
- spinnerProps: { size: "4"

### GradientButton

#### Types

[GradientButtonProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L347)

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


## References

- [Flowbite Buttons](https://flowbite.com/docs/components/buttons/)
