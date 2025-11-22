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
<script lang="ts">
  import { Rating, Star, type RatingIconProps } from "flowbite-svelte";
  const wrapper = (props: RatingIconProps) => (anchor: any, _props: RatingIconProps) => Star(anchor, { ..._props, ...props });
</script>

<Rating id="example-1" total={5} size={50} rating={1.4} />
<Rating id="example-1b" total={5} size={50} rating={4.66} />
<Rating id="example-1b" icon={wrapper({ fillColor: "#008800", strokeColor: "#008800" })} total={5} size={50} rating={4.66} />
```

## Stars

You can use the Star component with the `iconIndex` and `fillPercent` props.

```svelte
<script lang="ts">
  import { Star } from "flowbite-svelte";
</script>

<Star size={30} iconIndex={0} fillPercent={0} />
<Star size={30} iconIndex={10} fillPercent={10} />
<Star size={30} iconIndex={20} fillPercent={20} />
<Star size={30} iconIndex={30} fillPercent={30} />
<Star size={30} iconIndex={40} fillPercent={40} />
<Star size={30} iconIndex={50} fillPercent={50} />
<Star size={30} iconIndex={60} fillPercent={60} />
<Star size={30} iconIndex={70} fillPercent={70} />
<Star size={30} iconIndex={80} fillPercent={80} />
<Star size={30} iconIndex={90} fillPercent={90} />
<Star size={30} iconIndex={100} fillPercent={100} />
```

## Rating with text

If you also want to show a text near the stars you can use the `text` snippet to add any text.

```svelte
<script lang="ts">
  import { Rating, Star, type RatingIconProps } from "flowbite-svelte";
  const wrapper = (props: RatingIconProps) => (anchor: any, _props: RatingIconProps) => Star(anchor, { ..._props, ...props });
</script>

<Rating id="example-3a" total={5} rating={3.4}>
  {#snippet text()}
    <p class="ms-2 text-sm font-medium text-gray-500 dark:text-gray-400">3.4 out of 5</p>
  {/snippet}
</Rating>
<Rating id="example-3" total={5} rating={2.8} icon={wrapper({ fillColor: "#008800", strokeColor: "#008800" })}>
  {#snippet text()}
    <p class="ms-2 text-sm font-medium text-gray-500 dark:text-gray-400">2.8 out of 5</p>
  {/snippet}
</Rating>
```

## Rating count

Aggregate more results by using this example to show the amount of reviews and the average score.

```svelte
<script lang="ts">
  import { Rating } from "flowbite-svelte";
</script>

<Rating count rating={4.95} id="example-4">
  <span class="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400"></span>
  <a href="/" class="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">73 reviews</a>
</Rating>
```

## Icon and size

The default icon size is `24`. Import your icon and set it in a icon props.

```svelte
<script lang="ts">
  import { Rating, Heart, type RatingIconProps } from "flowbite-svelte";
  const heartWrapper = (props: RatingIconProps) => (anchor: any, _props: RatingIconProps) => Heart(anchor, { ..._props, ...props });
</script>

<Rating total={5} rating={3.3} size={20} id="example-5" icon={Heart} />
<Rating total={10} rating={7.6} id="example-5b" icon={Heart} />
<Rating total={10} rating={7.6} id="example-5b" icon={heartWrapper({ fillColor: "#3752d6", strokeColor: "#3752d6" })} />
```

```svelte
<script lang="ts">
  import { Rating, Thumbup, type RatingIconProps } from "flowbite-svelte";
  const thumbWrapper = (props: RatingIconProps) => (anchor: any, _props: RatingIconProps) => Thumbup(anchor, { ..._props, ...props });
</script>

<Rating total={5} rating={4.7} size={20} id="example-5d" icon={Thumbup} />
<Rating total={10} rating={8.2} id="example-5e" icon={Thumbup} />
<Rating total={10} rating={7.6} id="example-5b" icon={thumbWrapper({ fillColor: "#ff3f00", strokeColor: "#ff3f00" })} />
```

## AdvancedRating component

Set the `total`,` rating`, and `ratings` prop for AdvancedRation component. Use the `rating` slot for Rating component with the `total` and `rating` props. Use the `globalText` slot for additional information.

```svelte
<script lang="ts">
  import { AdvancedRating, Rating } from "flowbite-svelte";
</script>

<AdvancedRating
  ratings={[
    { label: "5 star", rating: 70 },
    { label: "4 star", rating: 17 },
    { label: "3 star", rating: 8 },
    { label: "2 star", rating: 4 },
    { label: "1 star", rating: 1 }
  ]}
>
  {#snippet rating()}
    <Rating total={5} rating={3.72} id="example-8">
      {#snippet text()}
        <p class="ms-2 text-sm font-medium text-gray-500 dark:text-gray-400">3.72 out of 5</p>
      {/snippet}
    </Rating>
  {/snippet}
  {#snippet globalText()}
    <p class="mt-2 text-sm font-medium text-gray-500 dark:text-gray-400">1,745 global ratings</p>
  {/snippet}
</AdvancedRating>
```

## Different icon

As we describe in the Rating component, you can change an icon in the Rating component.

```svelte
<script lang="ts">
  import { AdvancedRating, Rating, Thumbup } from "flowbite-svelte";
</script>

<AdvancedRating
  ratings={[
    { label: "5 star", rating: 70 },
    { label: "4 star", rating: 17 },
    { label: "3 star", rating: 8 },
    { label: "2 star", rating: 4 },
    { label: "1 star", rating: 1 }
  ]}
>
  {#snippet rating()}
    <Rating total={5} rating={3.8} icon={Thumbup} id="example-9">
      {#snippet text()}
        <p class="ms-2 text-sm font-medium text-gray-500 dark:text-gray-400">3.8 out of 5</p>
      {/snippet}
    </Rating>
  {/snippet}
  {#snippet globalText()}
    <p class="mt-2 text-sm font-medium text-gray-500 dark:text-gray-400">1,745 global ratings</p>
  {/snippet}
</AdvancedRating>
```

## Score rating

```svelte
<script lang="ts">
  import { ScoreRating } from "flowbite-svelte";
  let headerLabel = {
    desc1: "8.7",
    desc2: "Excellent",
    desc3: "376 reviews",
    link: {
      label: "Read all reviews",
      url: "/"
    }
  };
</script>

<ScoreRating
  {headerLabel}
  ratings={[
    { label: "Staff", rating: 8.8 },
    { label: "Comfort", rating: 8.9 },
    { label: "Free WiFi", rating: 8.8 },
    { label: "Facilities", rating: 5.4 }
  ]}
  ratings2={[
    { label: "Value for money", rating: 8.9 },
    { label: "Cleanliness", rating: 7.0 },
    { label: "Location", rating: 8.0 }
  ]}
/>
```

## Rating comment

Use this component to show a single rating comment and its score alongside other components such as the user profile avatar, name, post date, and more.

```svelte
<script lang="ts">
  import { RatingComment } from "flowbite-svelte";
  let comment = {
    id: "1",
    user: {
      name: "Jese Leos",
      img: {
        src: "/images/profile-picture-2.webp",
        alt: "Jese Leos"
      },
      joined: "Joined on August 2014"
    },
    total: 5,
    rating: 4.5,
    heading: "Thinking to buy another one!",
    address: "the UK",
    datetime: "2022-03-25"
  };
</script>

<RatingComment {comment} helpfullink="/" abuselink="/">
  <p class="mb-2 font-light text-gray-500 dark:text-gray-400">
    This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on an identical strap from another
    Invicta and went in the shower with it to test the waterproofing.... No problems.
  </p>
  <p class="mb-3 font-light text-gray-500 dark:text-gray-400">
    It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.
  </p>
  <a href="/" class="text-primary-600 dark:text-primary-500 mb-5 block text-sm font-medium hover:underline">Read more</a>
  {#snippet evaluation()}
    19 people found this helpful
  {/snippet}
</RatingComment>
```

## Review content

Use this component to show the review content from a user alongside the avatar, location, details, and the score inside a card element.

```svelte
<script lang="ts">
  import { Review } from "flowbite-svelte";
  import { LandmarkSolid, CalendarMonthSolid, UsersGroupOutline, ThumbsUpSolid, ThumbsDownSolid } from "flowbite-svelte-icons";
  let review = {
    name: "Jese Leos",
    imgSrc: "/images/profile-picture-2.webp",
    imgAlt: "jese leos",
    address: "United States",
    reviewDate: "January 20, 2022",
    title: "Spotless, good appliances, excellent layout, host was genuinely nice and helpful.",
    rating: 8.79,
    item1: "Apartament with City View",
    item2: "3 nights December 2021",
    item3: "Family"
  };
</script>

<Review {review}>
  <p class="mb-2 font-light text-gray-500 dark:text-gray-400">
    The flat was spotless, very comfortable, and the host was amazing. I highly recommend this accommodation for anyone visiting Brasov city centre. It's quite a while since we are no longer using
    hotel facilities but self contained places. And the main reason is poor cleanliness and staff not being trained properly. This place exceeded our expectation and will return for sure.
  </p>
  <p class="mb-5 font-light text-gray-500 dark:text-gray-400">
    It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.
  </p>
  {#snippet item1()}
    <div class="flex">
      <LandmarkSolid class="mr-2 h-5 w-5" />
      {review.item1}
    </div>
  {/snippet}
  {#snippet item2()}
    <div class="flex">
      <CalendarMonthSolid class="mr-2 h-5 w-5" />
      {review.item2}
    </div>
  {/snippet}
  {#snippet item3()}
    <div class="flex">
      <UsersGroupOutline class="mr-2 h-5 w-5" />
      {review.item3}
    </div>
  {/snippet}
  <aside class="mt-3 flex items-center space-x-5 rtl:space-x-reverse">
    <a href="/" class="text-primary-600 dark:text-primary-500 inline-flex items-center text-sm font-medium hover:underline">
      <ThumbsUpSolid class="text-primary-600 dark:text-primary-500 me-2.5 h-3.5 w-3.5" />
      Helpful
    </a>
    <a href="/" class="group text-primary-600 dark:text-primary-500 inline-flex items-center text-sm font-medium hover:underline">
      <ThumbsDownSolid class="text-primary-600 dark:text-primary-500 me-2.5 h-3.5 w-3.5" />
      Not helpful
    </a>
  </aside>
</Review>
```

## Component data

### AdvancedRating

#### Types

[AdvancedRatingProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1281)

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

[RatingIconProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1367)

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

[RatingIconProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1367)

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

[RatingProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1293)

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

[RatingCommentProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1304)

#### Props

- children
- evaluation
- helpfullink
- abuselink
- comment

### Review

#### Types

[ReviewProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1340)

#### Props

- children
- address
- item1
- item2
- item3
- review
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

[ScoreRatingProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1356)

#### Props

- ratings
- ratings2
- headerLabel
- classes

### Star

#### Types

[RatingIconProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1367)

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

[RatingIconProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1367)

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
