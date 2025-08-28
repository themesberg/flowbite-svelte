# Svelte Rating - Flowbite


Get started with the rating component to show an aggregate of reviews and scores in the forms of stars or numbers.

You can find multiple examples on this page including different styles, sizes, and variants of the rating component and other associated elements such as a comment or card.

## Setup

Let's import all necessary components in the script tag. We import a heart, thumb-up, and smiley icons, but you can use any icons as you like.

```svelte
<script lang="ts">
  import { Rating, AdvancedRating, ScoreRating } from "flowbite-svelte";
</script>
```

## Default rating

The default rating icon is a star. Set the total and rating props. The `id` prop is required. Use a unique name.

```svelte
{#include Default.svelte}
```

## Stars

You can use the Star component with the `iconIndex` and `fillPercent` props.

```svelte
{#include Stars.svelte}
```

## Rating with text

If you also want to show a text near the stars you can use the `text` snippet to add any text.

```svelte
{#include Text.svelte}
```

## Rating count

Aggregate more results by using this example to show the amount of reviews and the average score.

```svelte
{#include Count.svelte}
```

## Icon and size

The default icon size is `24`. Import your icon and set it in a icon props.

```svelte
{#include IconAndSize.svelte}
```

```svelte
{#include IconAndSize2.svelte}
```

## AdvancedRating component

Set the `total`,` rating`, and `ratings` prop for AdvancedRation component. Use the `rating` slot for Rating component with the `total` and `rating` props. Use the `globalText` slot for additional information.

```svelte
{#include Advanced.svelte}
```

## Different icon

As we describe in the Rating component, you can change an icon in the Rating component.

```svelte
{#include Different.svelte}
```

## Score rating

```svelte
{#include Score.svelte}
```

## Rating comment

Use this component to show a single rating comment and its score alongside other components such as the user profile avatar, name, post date, and more.

```svelte
{#include Comment.svelte}
```

## Review content

Use this component to show the review content from a user alongside the avatar, location, details, and the score inside a card element.

```svelte
{#include Review.svelte}
```

## Component data

### AdvancedRating

#### Types

[AdvancedRatingProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1236)

#### Props

- rating
- globalText
- ratings
- divClass
- spanClass
- div2Class
- div3Class
- span2Class
- class: className
- classes
- unit

### CustomIcon

#### Types

[RatingIconProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1322)

#### Props

- fillPercent: 100
- fillColor: "#00ff00"
- strokeColor: "#00ff00"
- size: 24
- ariaLabel: "custom icon"
- iconIndex: 0
- groupId: "custom"
- role: "img"
- svgClass
- pathd: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"

### Heart

#### Types

[RatingIconProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1322)

#### Props

- fillPercent: 100
- fillColor: "#ff0000"
- strokeColor: "#ff0000"
- size: 24
- ariaLabel: "star"
- iconIndex: 0
- groupId: "star"
- role: "img"
- svgClass

### Rating

#### Types

[RatingProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1248)

#### Props

- children
- text
- class: className
- classes
- size: 24
- total: 5
- rating: 4
- icon: Icon: Star
- count: false
- pClass

### RatingComment

#### Types

[RatingCommentProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1259)

#### Props

- children
- evaluation
- helpfullink
- abuselink
- comment

### Review

#### Types

[ReviewProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1295)

#### Props

- children
- address
- item1
- item2
- item3
- review
- class: className
- classes
- articleClass
- divClass
- div2Class
- div3Class
- imgClass
- ulClass
- liClass

### ScoreRating

#### Types

[ScoreRatingProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1311)

#### Props

- ratings
- ratings2
- headerLabel
- classes

### Star

#### Types

[RatingIconProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1322)

#### Props

- fillPercent: 100
- fillColor: "#F5CA14"
- strokeColor: "#F5CA14"
- size: 24
- ariaLabel: "star"
- iconIndex: 0
- groupId: "star"
- role: "img"
- svgClass

### Thumbup

#### Types

[RatingIconProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1322)

#### Props

- fillPercent: 100
- fillColor: "#00b500"
- strokeColor: "#00b500"
- size: 24
- ariaLabel: "thumbup"
- iconIndex: 0
- groupId: "star"
- role: "img"
- svgClass


## References

- [Flowbite Rating](https://flowbite.com/docs/components/rating/)


