# Svelte Text - Flowbite


Get started with a collection of text customization examples to learn how to update the size, font weight, style, decoration and spacing of inline text elements.

## Font size

Use this example to set the font size of inline text elements using the `size` prop.

```svelte
{#include FontSize.svelte}
```

## Font weight

This example can be used to the font weight of an inline text element using the `weight` prop.

```svelte
{#include FontWeight.svelte}
```

## Text color

Use the `class` prop to set the color of the inline text.

```svelte
{#include TextColor.svelte}
```

## Letter spacing

Increase or decrease the spacing between letters using the `space` prop.

```svelte
{#include LetterSpacing.svelte}
```

## Text decoration

### Underline

Update the text decoration style using the `underline` and `class` props.

```svelte
{#include Underline.svelte}
```

### Line through

Set a strikethrough line on a text element using the `line-through` class.

```svelte
{#include LineThrough.svelte}
```

### Uppercase

Force uppercase characters for a given portion of text using the uppercase class.

```svelte
{#include Uppercase.svelte}
```

## Font style

Set italic or non italic styles with the props.

### Italic

Use the `italic` prop to set italic font style to a text element.

```svelte
{#include Italic.svelte}
```

### Normal

Text elements by default are non-italic.

```svelte
{#include Normal.svelte}
```

## Line Height

Set the height between lines using the `height` prop.

### Leading normal

Use the `height="normal"` (default) prop to set default line height.

```svelte
{#include LeadingNormal.svelte}
```

### Leading relaxed

Use the `height="relaxed"` prop to increase the space between lines.

```svelte
{#include LeadingRelaxed.svelte}
```

### Leading loose

Use the `height="loose"` prop to set a large amount of space between text lines.

```svelte
{#include LeadingLoose.svelte}
```

## Text Align

### Left

```svelte
{#include Left.svelte}
```

### Center

```svelte
{#include Center.svelte}
```

### Right

Use the `align="right"` prop to align the text element to the right side of the page.

```svelte
{#include Right.svelte}
```

### Text justify

Use the `justify` prop to justify the text content.

```svelte
{#include TextJustify.svelte}
```

## Whitespace

Configure the whitespace behaviour of inline text elements using the `whitespace` prop.

### Normal

Use the `whitespace="normal"` prop to set the default whitespace behaviour.

```svelte
{#include WhitespaceNormal.svelte}
```

### Nowrap

Use the `whitespace="nowrap"` prop to prevent text being added to a new line when the full width has been reached.

```svelte
{#include WhitespaceNowrap.svelte}
```

### Pre line

Use the `whitespace="preline'` prop to add whitespace exactly how it has been set from the source code.

```svelte
{#include WhitespacePreline.svelte}
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {components}/>

## References

<GitHubCompoLinks {components}/>
