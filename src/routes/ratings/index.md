---
layout: ratingLayout
---

<script>
	import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
  import GitHubSource from '../utils/GitHubSource.svelte'
  import CompoDescription from '../utils/CompoDescription.svelte'
	import TableProp from '../utils/TableProp.svelte'
  import TableDefaultRow from '../utils/TableDefaultRow.svelte'
	import { Rating, AdvancedRating, ScoreRating, Breadcrumb, BreadcrumbItem } from '$lib/index'
	import { Heart, ThumbUp, EmojiHappy, Home } from 'svelte-heros';
	import componentProps from '../props/Rating.json'
	import componentProps2 from '../props/AdvancedRating.json'
	import componentProps3 from '../props/ScoreRating.json'
  // Props table
  let items = componentProps.props
	let items2 = componentProps2.props
	let items3 = componentProps3.props
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

<Htwo label="Total and rating props" />

The default rating icon is a star. Set the total and rating props.

<ExampleDiv>	
<Rating total="5" rating="4.66" />
</ExampleDiv>

```html
<Rating total="5" rating="4.66" />
```

<Htwo label="Ceil prop" />

The default rounding for the rate is `floor`, but by adding the `ceil` prop, you can round it up.

<ExampleDiv>	
<Rating total="5" rating="4.66" ceil />
</ExampleDiv>

```html
<Rating total="5" rating="4.66" ceil />
```

<Htwo label="Text slot" />

Use the `text` slot to add any text.

<ExampleDiv>	<Rating total="5" rating="3.21">
		<p slot="text" class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">3.21 out of 5</p>
	</Rating>
</ExampleDiv>

```html
<Rating total="5" rating="3.21">
	<p slot="text" class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">3.21 out of 5</p>
</Rating>
```

<Htwo label="Icon size and color" />

Use the `ratingUp` and `ratingDown` slots to add icons of your choice.

<h3>Size and color</h3>

The default icon size is `24`. Set the `class` in a icon component to change colors.

<ExampleDiv>	<Rating total="5" rating="3.21">
		<span slot="ratingUp">
			<Heart class="text-red-700 dark:text-red-500" />
		</span>
		<span slot="ratingDown">
			<Heart class="text-gray-300 dark:text-gray-500" />
		</span>
	</Rating>
</ExampleDiv>

```html
<Rating total="5" rating="3.21">
	<span slot="ratingUp">
		<Heart class="text-red-700 dark:text-red-500" />
	</span>
	<span slot="ratingDown">
		<Heart class="text-gray-300 dark:text-gray-500" />
	</span>
</Rating>
```

<ExampleDiv>	<Rating total="5" rating="4.7">
		<span slot="ratingUp">
			<EmojiHappy class="text-purple-500 dark:text-purple-700" />
		</span>
		<span slot="ratingDown">
			<EmojiHappy class="text-gray-300 dark:text-gray-500" />
		</span>
	</Rating>
</ExampleDiv>

```html
<Rating total="5" rating="4.7">
	<span slot="ratingUp">
		<EmojiHappy class="text-purple-500 dark:text-purple-700" />
	</span>
	<span slot="ratingDown">
		<EmojiHappy class="text-gray-300 dark:text-gray-500" />
	</span>
</Rating>
```

<ExampleDiv>	<Rating total="5" rating="5">
		<span slot="ratingUp">
			<ThumbUp class="text-yellow-300 dark:text-yellow-200" />
		</span>
		<span slot="ratingDown">
			<ThumbUp class="text-gray-300 dark:text-gray-500" />
		</span>
	</Rating>
</ExampleDiv>

```html
<Rating total="5" rating="5">
	<span slot="ratingUp">
		<ThumbUp class="text-yellow-300 dark:text-yellow-200" />
	</span>
	<span slot="ratingDown">
		<ThumbUp class="text-gray-300 dark:text-gray-500" />
	</span>
</Rating>
```


<Htwo label="AdvancedRating component" />

Set the `total`, rating`, and `ratings` prop for AdvancedRation component. Use the `rating` slot for Rating component with the `total` and `rating` props. Use the `globalText` slot for additional information.

<ExampleDiv>	
<AdvancedRating
		total="5"
		rating="3.21"
		ratings={[
			{ label: '5 star', rating: 70 },
			{ label: '4 star', rating: 17 },
			{ label: '3 star', rating: 8 },
			{ label: '2 star', rating: 4 },
			{ label: '1 star', rating: 1 }
		]}
	>
		<span slot="rating">
			<Rating total="5" rating="3.21">
				<p slot="text" class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">3.21 out of 5</p>
			</Rating>
		</span>
		<p slot="globalText" class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">1,745 global ratings</p>
	</AdvancedRating>
</ExampleDiv>

```html
<AdvancedRating
	total="5"
	rating="3.21"
	ratings={[
		{ label: '5 star', rating: 70 },
		{ label: '4 star', rating: 17 },
		{ label: '3 star', rating: 8 },
		{ label: '2 star', rating: 4 },
		{ label: '1 star', rating: 1 }
	]}
>
	<span slot="rating">
		<Rating total="5" rating="3.21">
			<p slot="text" class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">3.21 out of 5</p>
		</Rating>
	</span>
	<p slot="globalText" class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">1,745 global ratings</p>
</AdvancedRating>
```

<Htwo label="Different icon" />

As we describe in the Rating component, you can change an icon in the `ratingUp` and `ratingDown` in the Rating component.

<ExampleDiv>	<AdvancedRating
		total="5"
		rating="3.21"
		ratings={[
			{ label: '5 star', rating: 70 },
			{ label: '4 star', rating: 17 },
			{ label: '3 star', rating: 8 },
			{ label: '2 star', rating: 4 },
			{ label: '1 star', rating: 1 }
		]}
	>
		<span slot="rating">
			<Rating total="5" rating="3.21" ceil>
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
  total="5"
  rating="3.21"
  ratings={[
    { label: '5 star', rating: 70 },
    { label: '4 star', rating: 17 },
    { label: '3 star', rating: 8 },
    { label: '2 star', rating: 4 },
    { label: '1 star', rating: 1 }
  ]}
>
  <span slot="rating">
    <Rating total="5" rating="3.21" ceil>
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



<Htwo label="Props" />

The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.

<h3>Rating</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</TableProp>

<h3>AdvancedRating</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items2} rowState='hover' />
</TableProp>

<h3>ScoreRating</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items3} rowState='hover' />
</TableProp>
