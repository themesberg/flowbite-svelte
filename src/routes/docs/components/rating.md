---
layout: componentLayout
title: Svelte Rating - Flowbite
breadcrumb_title: Svelte Rating
component_title: Rating
dir: Components
description: Use the rating component to show reviews and testimonials from your users using stars and scores based on multiple styles and sizes
thumnailSize: w-64
---

<script>
  import { TableProp, TableDefaultRow, } from '../../utils'
  import { P, A } from '$lib'

  import { props as items } from '../../props/Rating.json'
  import { props as items2 } from '../../props/AdvancedRating.json'
  import { props as items3 } from '../../props/ScoreRating.json'
  import { props as items4 } from '../../props/RatingComment.json'
  import { props as items5 } from '../../props/Review.json'
  import { props as items6 } from '../../props/Star.json'
</script>



Get started with the rating component to show an aggregate of reviews and scores in the forms of stars or numbers.

You can find multiple examples on this page including different styles, sizes, and variants of the rating component and other associated elements such as a comment or card.

## Setup

Let's import all necessary components in the script tag. We import a heart, thumb-up, and smiley icons, but you can use any icons as you like.

```svelte example hideOutput
<script>
  import { Rating, AdvancedRating, ScoreRating } from 'flowbite-svelte';
</script>
```

## Default rating

The default rating icon is a star. Set the total and rating props.

```svelte example hideScript
<script>
  import { Rating } from 'flowbite-svelte'
</script>

<Rating total={5} rating={4.66} />
```

## Ceil prop

The default rounding for the rate is `floor`, but by adding the `ceil` prop, you can round it up.

```svelte example hideScript
<script>
  import { Rating } from 'flowbite-svelte'
</script>

<Rating total={5} rating={4.66} ceil />
```

## Rating with text

If you also want to show a text near the stars you can use the `text` slot to add any text.

```svelte example hideScript
<script>
  import { Rating } from 'flowbite-svelte'
</script>

<Rating total={5} rating={3.21}>
  <p slot="text" class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">3.21 out of 5</p>
</Rating>
```

## Rating count

Aggregate more results by using this example to show the amount of reviews and the average score.

```svelte example hideScript
<script>
  import { Rating } from 'flowbite-svelte'
</script>

<Rating count rating={4.95} >
  <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400" />
  <a
    href="/"
    class="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
    >73 reviews</a
  >
</Rating>
```

## Icon size and color

Use the `ratingUp` and `ratingDown` slots to add icons of your choice.

### Size and color

The default icon size is `24`. Set the `class` in a icon component to change colors.

```svelte example hideScript
<script>
  import { Rating } from 'flowbite-svelte'
</script>

<Rating total={5} rating={3.21}>
  <span slot="ratingUp">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-red-700 dark:text-red-500"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>
  </span>
  <span slot="ratingDown">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-300 dark:text-gray-500"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>
  </span>
</Rating>
```

```svelte example hideScript
<script>
  import { Rating } from 'flowbite-svelte'
</script>

<Rating total={5} rating={4.7}>
  <span slot="ratingUp">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-purple-500 dark:text-purple-700"><path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" /></svg>
  </span>
  <span slot="ratingDown">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-300 dark:text-gray-500"><path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" /></svg>
  </span>
</Rating>
```

```svelte example hideScript
<script>
  import { Rating } from 'flowbite-svelte'
</script>

<Rating total={5} rating={2.4}>
  <span slot="ratingUp">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-yellow-300 dark:text-yellow-200"><path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" /></svg>
  </span>
  <span slot="ratingDown">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-300 dark:text-gray-500"><path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" /></svg>
  </span>
</Rating>
```

## AdvancedRating component

Set the `total`,` rating`, and `ratings` prop for AdvancedRation component. Use the `rating` slot for Rating component with the `total` and `rating` props. Use the `globalText` slot for additional information.

```svelte example hideScript
<script>
  import { AdvancedRating, Rating } from 'flowbite-svelte'
</script>

<AdvancedRating
  ratings={[
    { label: '5 star', rating: 70 },
    { label: '4 star', rating: 17 },
    { label: '3 star', rating: 8 },
    { label: '2 star', rating: 4 },
    { label: '1 star', rating: 1 }
  ]}
>
  <span slot="rating">
    <Rating total={5} rating={3.21}>
      <p slot="text" class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">3.21 out of 5</p>
    </Rating>
  </span>
  <p slot="globalText" class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">1,745 global ratings</p>
</AdvancedRating>
```

## Different icon

As we describe in the Rating component, you can change an icon in the `ratingUp` and `ratingDown` in the Rating component.

```svelte example hideScript
<script>
  import { AdvancedRating, Rating } from 'flowbite-svelte'
</script>

<AdvancedRating
  ratings={[
    { label: '5 star', rating: 70 },
    { label: '4 star', rating: 17 },
    { label: '3 star', rating: 8 },
    { label: '2 star', rating: 4 },
    { label: '1 star', rating: 1 }
  ]}
>
  <span slot="rating">
    <Rating total={5} rating={3.21} ceil>
      <span slot="ratingUp">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-yellow-300 dark:text-yellow-200"><path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" /></svg>
      </span>
      <span slot="ratingDown">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-300 dark:text-gray-500"><path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" /></svg>
      </span>
      <p slot="text" class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">3.21 out of 5</p>
    </Rating>
  </span>
  <p slot="globalText" class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">1,745 global ratings</p>
</AdvancedRating>
```

## Score rating

```svelte example hideScript
<script>
  import { ScoreRating } from 'flowbite-svelte'
  let headerLabel = {
    desc1: '8.7',
    desc2: 'Excellent',
    desc3: '376 reviews',
    link: {
      label: 'Read all reviews',
      url: '/'
    }
  };
</script>

<ScoreRating
  {headerLabel}
  ratings={[
    { label: 'Staff', rating: 8.8 },
    { label: 'Comfort', rating: 8.9 },
    { label: 'Free WiFi', rating: 8.8 },
    { label: 'Facilities', rating: 5.4 }
  ]}
  ratings2={[
    { label: 'Value for money', rating: 8.9 },
    { label: 'Cleanliness', rating: 7.0 },
    { label: 'Location', rating: 8.0 }
  ]}
/>
```

## Rating comment

Use this component to show a single rating comment and its score alongside other components such as the user profile avatar, name, post date, and more.

```svelte example hideScript
<script>
  import { RatingComment } from 'flowbite-svelte'
  let comment = {
    id: '1',
    user: {
      name: 'Jese Leos',
      img: {
        src: '/images/profile-picture-2.webp',
        alt: 'Jese Leos'
      },
      joined: 'Joined on August 2014'
    },
    total: 5,
    rating: 4.5,
    heading: 'Thinking to buy another one!',
    address: 'the UK',
    datetime: '2022-03-25'
  };
</script>

<RatingComment {comment} helpfullink="/" abuselink="/">
  <p class="mb-2 font-light text-gray-500 dark:text-gray-400">
    This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived
    yesterday and the first thing I did was set the time, popped on an identical strap from
    another Invicta and went in the shower with it to test the waterproofing.... No problems.
  </p>
  <p class="mb-3 font-light text-gray-500 dark:text-gray-400">
    It is obviously not the same build quality as those very expensive watches. But that is like
    comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.
  </p>
  <a
    href="/"
    class="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
    >Read more</a
  >
  <svelte:fragment slot="evaluation">19 people found this helpful</svelte:fragment>
</RatingComment>
```

## Review content

Use this component to show the review content from a user alongside the avatar, location, details, and the score inside a card element.

```svelte example hideScript
<script>
  import { Review } from 'flowbite-svelte'
  let review = {
    name: 'Jese Leos',
    imgSrc: '/images/profile-picture-2.webp',
    imgAlt: 'jese leos',
    address: 'United States',
    reviewDate: 'January 20, 2022',
    title: 'Spotless, good appliances, excellent layout, host was genuinely nice and helpful.',
    rating: 8.79,
    item1: 'Apartament with City View',
    item2: '3 nights December 2021',
    item3: 'Family',
  };
</script>

<Review {review}>
  <p class="mb-2 font-light text-gray-500 dark:text-gray-400">
    The flat was spotless, very comfortable, and the host was amazing. I highly recommend this
    accommodation for anyone visiting Brasov city centre. It's quite a while since we are no
    longer using hotel facilities but self contained places. And the main reason is poor
    cleanliness and staff not being trained properly. This place exceeded our expectation and will
    return for sure.
  </p>
  <p class="mb-5 font-light text-gray-500 dark:text-gray-400">
    It is obviously not the same build quality as those very expensive watches. But that is like
    comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.
  </p>
  <svelte:fragment slot="item1">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 mr-2"><path fill-rule="evenodd" d="M4.5 2.25a.75.75 0 000 1.5v16.5h-.75a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5h-.75V3.75a.75.75 0 000-1.5h-15zM9 6a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm-.75 3.75A.75.75 0 019 9h1.5a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM9 12a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm3.75-5.25A.75.75 0 0113.5 6H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM13.5 9a.75.75 0 000 1.5H15A.75.75 0 0015 9h-1.5zm-.75 3.75a.75.75 0 01.75-.75H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM9 19.5v-2.25a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75h-4.5A.75.75 0 019 19.5z" clip-rule="evenodd" /></svg>
    {review.item1}
  </svelte:fragment>
  <svelte:fragment slot="item2">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 mr-2"><path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clip-rule="evenodd" /></svg>
    {review.item2}
  </svelte:fragment>
  <svelte:fragment slot="item3">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 mr-2"><path fill-rule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clip-rule="evenodd" /><path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" /></svg>
    {review.item3}
  </svelte:fragment>
  <aside class="flex items-center mt-3 space-x-5">
    <a
      href="/"
      class="inline-flex items-center text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mr-1"><path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" /></svg>
      Helpful
    </a>
    <a
      href="/"
      class="inline-flex items-center text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 group"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mr-1"><path d="M15.73 5.25h1.035A7.465 7.465 0 0118 9.375a7.465 7.465 0 01-1.235 4.125h-.148c-.806 0-1.534.446-2.031 1.08a9.04 9.04 0 01-2.861 2.4c-.723.384-1.35.956-1.653 1.715a4.498 4.498 0 00-.322 1.672V21a.75.75 0 01-.75.75 2.25 2.25 0 01-2.25-2.25c0-1.152.26-2.243.723-3.218C7.74 15.724 7.366 15 6.748 15H3.622c-1.026 0-1.945-.694-2.054-1.715A12.134 12.134 0 011.5 12c0-2.848.992-5.464 2.649-7.521.388-.482.987-.729 1.605-.729H9.77a4.5 4.5 0 011.423.23l3.114 1.04a4.5 4.5 0 001.423.23zM21.669 13.773c.536-1.362.831-2.845.831-4.398 0-1.22-.182-2.398-.52-3.507-.26-.85-1.084-1.368-1.973-1.368H19.1c-.445 0-.72.498-.523.898.591 1.2.924 2.55.924 3.977a8.959 8.959 0 01-1.302 4.666c-.245.403.028.959.5.959h1.053c.832 0 1.612-.453 1.918-1.227z" /></svg>
      Not helpful
    </a>
  </aside>
</Review>
```

## Props

The component has the following props, type, and default values. See <A href="/docs/pages/typescript">types 
 page</A> for type information.

### Rating

<TableProp>
  <TableDefaultRow {items} rowState='hover' />
</TableProp>

### AdvancedRating

<TableProp>
  <TableDefaultRow items={items2} rowState='hover' />
</TableProp>

### ScoreRating

<TableProp>
  <TableDefaultRow items={items3} rowState='hover' />
</TableProp>

### RatingComment

<TableProp>
  <TableDefaultRow items={items4} rowState='hover' />
</TableProp>

### Review

<TableProp>
  <TableDefaultRow items={items5} rowState='hover' />
</TableProp>

### Star

<TableProp>
  <TableDefaultRow items={items6} rowState='hover' />
</TableProp>

## References

<P>
  <A href="https://flowbite.com/docs/components/rating/" target="_blank" rel="noreferrer" class="link"
    >Flowbite Rating</A
  >
</P>
