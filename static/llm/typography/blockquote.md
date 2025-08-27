# Svelte Blockquote - Flowbite


Get started with Blockquote component when quoting external sources such as quotes inside an article, user reviews, and testimonials based on multiple examples of layouts, styles, and contexts.

## Default blockquote

Use this example to quote an external source inside a blockquote element.

```svelte
include Default.svelte}
```

## Solid background

This example can be used as an alternative style to the default one by applying a solid background color.

```svelte
include Solid.svelte}
```

## Blockquote icon

Use this example to show an icon above the blockquote text content.

```svelte
include Icon.svelte}
```

## Paragraph context

Use this example to show a blockquote component between multiple paragraph elements.

```svelte
include Paragraph.svelte}
```

## User testimonial

This example can be used for user testimonials by mentioning the author and occupation of the author.

```svelte
include Testimonial.svelte}
```

## User Review

Use this example to show a user review with rating stars and the name and occupation of the author.

```svelte
include Review.svelte}
```

## Alignment

Choose from the following examples the blockquote text alignment from starting from left, center to right based on the utility classes from Tailwind CSS.

### Left

The default alignment of the blockquote text content is the left side of the document.

```svelte
include Left.svelte}
```

### Center

Use the `alignment="center"` prop to align the text content inside the blockquote to the center.

```svelte
include Center.svelte}
```

### Right

Use the `alignment="right"` prop to align the blockquote text content to the right side of the page.

```svelte
include Right.svelte}
```

## Sizes

### Small

Use the `size="lg"` prop to apply the small size for the blockquote component. You can use any size from `xs` to `9xl`. See more details in the Prop section below.

```svelte
include Small.svelte}
```

### Medium

Use the `size="xl"` to set the default size for the blockquote element.

```svelte
include Medium.svelte}
```

### Large

The `size="2xl"` prop can be used to set a large size for the blockquote component.

```svelte
include Large.svelte}
```

## See also

- [Heading](https://flowbite-svelte.com/llm/typography/heading.md)
- [Paragraph](https://flowbite-svelte.com/llm/typography/paragraph.md)
- [Link](https://flowbite-svelte.com/llm/typography/link.md)
- [List](https://flowbite-svelte.com/llm/typography/list.md)

## Component data

### Blockquote

#### Types

[BlockquoteProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1877)

#### Props

- children
- class: className
- border
- italic: true
- bg
- alignment: "left"
- size: "lg"


## References

<GitHubCompoLinks {components}/>
