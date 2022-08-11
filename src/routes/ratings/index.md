---
layout: ratingLayout
---

<script>
	import { Htwo, ExampleDiv, GitHubSource, CompoDescription, TableProp, TableDefaultRow} from '../utils'
	import { Rating, AdvancedRating, ScoreRating, RatingComment, Breadcrumb, BreadcrumbItem } from '$lib'
	import { Heart, ThumbUp, EmojiHappy, Home } from 'svelte-heros';
	
	import componentProps from '../props/Rating.json'
	import componentProps2 from '../props/AdvancedRating.json'
	import componentProps3 from '../props/ScoreRating.json'
	import componentProps4 from '../props/RatingComment.json'
  // Props table
  let items = componentProps.props
	let items2 = componentProps2.props
	let items3 = componentProps3.props
	let items4 = componentProps4.props
	let propHeader = ['Name', 'Type', 'Default']
	
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'
	let headerLabel = {
		desc1: '8.7',
		desc2: 'Excellent',
		desc3: '376 reviews',
		link: {
			label: 'Read all reviews',
			url: '/'
		}
	};

	export let comment = {
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

<Breadcrumb>
  <BreadcrumbItem href="/" icon={Home} variation="solid">Home</BreadcrumbItem>
  <BreadcrumbItem>Ratings</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white pt-8 pb-4">Rating</h1>

<CompoDescription>Use the rating component to show reviews and testimonials from your users using stars and scores based on multiple styles and sizes</CompoDescription>

<ExampleDiv>
<GitHubSource href="ratings/Rating.svelte">Rating</GitHubSource>
<GitHubSource href="ratings/AdvancedRating.svelte">AdvancedRating</GitHubSource>
<GitHubSource href="ratings/ScoreRating.svelte">ScoreRating</GitHubSource>
</ExampleDiv>

Get started with the rating component to show an aggregate of reviews and scores in the forms of stars or numbers.

You can find multiple examples on this page including different styles, sizes, and variants of the rating component and other associated elements such as a comment or card.

<Htwo label="Setup" />

Let's import all necessary components in the script tag. We import a heart, thumb-up, and smiley icons, but you can use any icons as you like.

```html
<script>
	import { Rating, AdvancedRating } from 'flowbite-svelte';
	import { Heart, ThumbUp, EmojiHappy } from 'svelte-heros';
</script>
```

<Htwo label="Default rating" />

The default rating icon is a star. Set the total and rating props.

<ExampleDiv>	
<Rating total={5} rating={4.66} />
</ExampleDiv>

```html
<Rating total={5} rating={4.66} />
```

<Htwo label="Ceil prop" />

The default rounding for the rate is `floor`, but by adding the `ceil` prop, you can round it up.

<ExampleDiv>	
<Rating total={5} rating={4.66} ceil />
</ExampleDiv>

```html
<Rating total={5} rating={4.66} ceil />
```

<Htwo label="Rating with text" />

If you also want to show a text near the stars you can use the `text` slot to add any text.

<ExampleDiv>	
  <Rating total={5} rating={3.21}>
		<p slot="text" class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">3.21 out of 5</p>
	</Rating>
</ExampleDiv>

```html
<Rating total={5} rating={3.21}>
	<p slot="text" class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">3.21 out of 5</p>
</Rating>
```

<Htwo label="Rating count" />

<ExampleDiv>	
  <Rating count={true} rating={4.95}>
		<span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
    <a href="#" class="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">73 reviews</a>
	</Rating>
</ExampleDiv>

<Htwo label="Icon size and color" />

Use the `ratingUp` and `ratingDown` slots to add icons of your choice.

<h3 class='text-xl w-full dark:text-white py-4'>Size and color</h3>

The default icon size is `24`. Set the `class` in a icon component to change colors.

<ExampleDiv>	
  <Rating total={5} rating={3.21}>
		<span slot="ratingUp">
			<Heart class="text-red-700 dark:text-red-500" />
		</span>
		<span slot="ratingDown">
			<Heart class="text-gray-300 dark:text-gray-500" />
		</span>
	</Rating>
</ExampleDiv>

```html
<Rating total={5} rating={3.21}>
	<span slot="ratingUp">
		<Heart class="text-red-700 dark:text-red-500" />
	</span>
	<span slot="ratingDown">
		<Heart class="text-gray-300 dark:text-gray-500" />
	</span>
</Rating>
```

<ExampleDiv>	
  <Rating total={5} rating={4.7}>
		<span slot="ratingUp">
			<EmojiHappy class="text-purple-500 dark:text-purple-700" />
		</span>
		<span slot="ratingDown">
			<EmojiHappy class="text-gray-300 dark:text-gray-500" />
		</span>
	</Rating>
</ExampleDiv>

```html
<Rating total={5} rating={4.7}>
	<span slot="ratingUp">
		<EmojiHappy class="text-purple-500 dark:text-purple-700" />
	</span>
	<span slot="ratingDown">
		<EmojiHappy class="text-gray-300 dark:text-gray-500" />
	</span>
</Rating>
```

<ExampleDiv>	
  <Rating total={5} rating={5}>
		<span slot="ratingUp">
			<ThumbUp class="text-yellow-300 dark:text-yellow-200" />
		</span>
		<span slot="ratingDown">
			<ThumbUp class="text-gray-300 dark:text-gray-500" />
		</span>
	</Rating>
</ExampleDiv>

```html
<Rating total={5} rating={5}>
	<span slot="ratingUp">
		<ThumbUp class="text-yellow-300 dark:text-yellow-200" />
	</span>
	<span slot="ratingDown">
		<ThumbUp class="text-gray-300 dark:text-gray-500" />
	</span>
</Rating>
```


<Htwo label="AdvancedRating component" />

Set the `total`,` rating`, and `ratings` prop for AdvancedRation component. Use the `rating` slot for Rating component with the `total` and `rating` props. Use the `globalText` slot for additional information.

<ExampleDiv>	
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
</ExampleDiv>

```html
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

<Htwo label="Different icon" />

As we describe in the Rating component, you can change an icon in the `ratingUp` and `ratingDown` in the Rating component.

<ExampleDiv>
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
          <ThumbUp class="text-yellow-300 dark:text-yellow-200" />
        </span>
        <span slot="ratingDown">
          <ThumbUp class="text-gray-300 dark:text-gray-500" />
        </span>
				<p slot="text" class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">3.21 out of 5</p>
			</Rating>
		</span>
		<p slot="globalText" class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">1,745 global ratings</p>
	</AdvancedRating>
</ExampleDiv>

```html
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
        <ThumbUp class="text-yellow-300 dark:text-yellow-200" />
      </span>
      <span slot="ratingDown">
        <ThumbUp class="text-gray-300 dark:text-gray-500" />
      </span>
      <p slot="text" class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">3.21 out of 5</p>
    </Rating>
  </span>
  <p slot="globalText" class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">1,745 global ratings</p>
</AdvancedRating>
```


<Htwo label="Score rating" />

<ExampleDiv>  
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
</ExampleDiv>

```html
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

<Htwo label="Rating comment" />

Use this component to show a single rating comment and its score alongside other components such as the user profile avatar, name, post date, and more.

<ExampleDiv>
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
</ExampleDiv>

```html
<script>
	export let comment = {
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


<Htwo label="Props" />

The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.

<h3 class='text-xl w-full dark:text-white py-4'>Rating</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</TableProp>

<h3 class='text-xl w-full dark:text-white py-4'>AdvancedRating</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items2} rowState='hover' />
</TableProp>

<h3 class='text-xl w-full dark:text-white py-4'>ScoreRating</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items3} rowState='hover' />
</TableProp>

<h3 class='text-xl w-full dark:text-white py-4'>RatingComment</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items4} rowState='hover' />
</TableProp>
