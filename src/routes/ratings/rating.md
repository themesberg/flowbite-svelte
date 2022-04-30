---
layout: ratingLayout
---

<script>
	import Htwo from '../utils/Htwo.svelte'
import ExampleDiv from '../utils/ExampleDiv.svelte'
	import { Rating, Table, TableDefaultRow, Breadcrumb } from '$lib/index';
	import { HeartSolid, ThumbUpSolid, EmojiHappySolid } from 'svelte-heros';
	import componentProps from '../props/Rating.json'
  // Props table
  let items = componentProps.props
	let propHeader = ['Name', 'Type', 'Default']
	
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg'
let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

  let crumbs = [
    {
      label:'Home',
      href:'/'
    },
    {
      label:'Rating home',
      href:'/ratings/'
    },
    {
      label:'Rating',
      href:'/ratings/rating'
    }
  ]
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

<Breadcrumb {crumbs}/>

<h1 class="text-3xl w-full dark:text-white py-8">Rating Component</h1>

<Htwo label="Set up" />

<p>Let's import all necessary components in the script tag. We import a heart, thumb-up, and smiley icons, but you can use any icons as you like.</p>

```html
<script>
	import { Rating } from 'flowbite-svelte';
	import { HeartSolid, ThumbUpSolid, EmojiHappySolid } from 'svelte-heros';
</script>
```

<Htwo label="Total and rating props" />

<p>The default rating icon is a star. Set the total and rating props.</p>

<ExampleDiv>	
<Rating total="5" rating="4.66" />
</ExampleDiv>

```html
<Rating total="5" rating="4.66" />
```

<Htwo label="Ceil prop" />

<p>The default rounding for the rate is `floor`, but by adding the `ceil` prop, you can round it up.</p>

<ExampleDiv>	
<Rating total="5" rating="4.66" ceil />
</ExampleDiv>

```html
<Rating total="5" rating="4.66" ceil />
```

<Htwo label="Text slot" />

<p>Use the `text` slot to add any text.</p>

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

<p>Use the `ratingUp` and `ratingDown` slots to add icons of your choice.</p>

<h3>Size and color</h3>

<p>The default icon size is `24`. Set the `class` in a icon component to change colors.</p>

<ExampleDiv>	<Rating total="5" rating="3.21">
		<span slot="ratingUp">
			<HeartSolid class="text-red-700 dark:text-red-500" />
		</span>
		<span slot="ratingDown">
			<HeartSolid class="text-gray-300 dark:text-gray-500" />
		</span>
	</Rating>
</ExampleDiv>

```html
<Rating total="5" rating="3.21">
	<span slot="ratingUp">
		<HeartSolid class="text-red-700 dark:text-red-500" />
	</span>
	<span slot="ratingDown">
		<HeartSolid class="text-gray-300 dark:text-gray-500" />
	</span>
</Rating>
```

<ExampleDiv>	<Rating total="5" rating="4.7">
		<span slot="ratingUp">
			<EmojiHappySolid class="text-purple-500 dark:text-purple-700" />
		</span>
		<span slot="ratingDown">
			<EmojiHappySolid class="text-gray-300 dark:text-gray-500" />
		</span>
	</Rating>
</ExampleDiv>

```html
<Rating total="5" rating="4.7">
	<span slot="ratingUp">
		<EmojiHappySolid class="text-purple-500 dark:text-purple-700" />
	</span>
	<span slot="ratingDown">
		<EmojiHappySolid class="text-gray-300 dark:text-gray-500" />
	</span>
</Rating>
```

<ExampleDiv>	<Rating total="5" rating="5">
		<span slot="ratingUp">
			<ThumbUpSolid class="text-yellow-300 dark:text-yellow-200" />
		</span>
		<span slot="ratingDown">
			<ThumbUpSolid class="text-gray-300 dark:text-gray-500" />
		</span>
	</Rating>
</ExampleDiv>

```html
<Rating total="5" rating="5">
	<span slot="ratingUp">
		<ThumbUpSolid class="text-yellow-300 dark:text-yellow-200" />
	</span>
	<span slot="ratingDown">
		<ThumbUpSolid class="text-gray-300 dark:text-gray-500" />
	</span>
</Rating>
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/type-list">type-list page</a> for type information.</p>

<Table header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</Table>
