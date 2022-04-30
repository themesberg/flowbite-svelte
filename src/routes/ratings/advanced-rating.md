---
layout: ratingLayout
---

<script>
	import Htwo from '../utils/Htwo.svelte'
import ExampleDiv from '../utils/ExampleDiv.svelte'
	import { Rating, AdvancedRating, ScoreRating, Table, TableDefaultRow, Breadcrumb } from '$lib/index';
	import { ThumbUpSolid } from 'svelte-heros';
	import componentProps from '../props/AdvancedRating.json'
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
      label:'Advanced rating',
      href:'/ratings/advanced-rating'
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

<h1 class="text-3xl w-full dark:text-white py-8">AdvancedRating Component</h1>

<Htwo label="Set up" />

<p>Let's import all necessary components in the script tag. We import a thumb-up icon but you can use any icons as you like.</p>

```html
<script>
	import { Rating, AdvancedRating } from 'flowbite-svelte';
	import { ThumbUpSolid } from 'svelte-heros';
</script>
```

<Htwo label="AdvancedRating component" />

<p>Set the `total`, rating`, and `ratings` prop for AdvancedRation component. Use the `rating` slot for Rating component with the `total` and `rating` props. Use the `globalText` slot for additional information.</p>

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
			<Rating total="5" rating="3.21">
				<p slot="text" class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">3.21 out of 5</p>
			</Rating>
		</span>
		<p slot="globalText" class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">1,745 global ratings</p>
	</AdvancedRating>
</ExampleDiv>

```html
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
			<Rating total="5" rating="3.21">
				<p slot="text" class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">3.21 out of 5</p>
			</Rating>
		</span>
		<p slot="globalText" class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">1,745 global ratings</p>
	</AdvancedRating>
</div>
```

<Htwo label="Different icon" />

<p>As we describe in the Rating component, you can change an icon in the `ratingUp` and `ratingDown` in the Rating component.</p>

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
          <ThumbUpSolid class="text-yellow-300 dark:text-yellow-200" />
        </span>
        <span slot="ratingDown">
          <ThumbUpSolid class="text-gray-300 dark:text-gray-500" />
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
        <ThumbUpSolid class="text-yellow-300 dark:text-yellow-200" />
      </span>
      <span slot="ratingDown">
        <ThumbUpSolid class="text-gray-300 dark:text-gray-500" />
      </span>
      <p slot="text" class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">3.21 out of 5</p>
    </Rating>
  </span>
  <p slot="globalText" class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">1,745 global ratings</p>
</AdvancedRating>
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/type-list">type-list page</a> for type information.</p>

<Table header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</Table>
