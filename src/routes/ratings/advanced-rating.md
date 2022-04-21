---
layout: ratingLayout
---

<script>
	import { Rating, AdvancedRating, ScoreRating, Table, TableDefaultRow, Breadcrumb } from '$lib/index';
	import { ThumbUpIconSolid } from '@codewithshin/svelte-heroicons';
	import componentProps from '../props/AdvancedRating.json'
  // Props table
  let items = componentProps.props
	let propHeader = ['Name', 'Type', 'Default']
	// console.log(items)
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg'

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

<h2 class="text-2xl w-full dark:text-white py-4">Set up</h2>

<p>Let's import all necessary components in the script tag. We import a thumb-up icon but you can use any icons as you like.</p>

```html
<script>
	import { Rating, AdvancedRating } from 'flowbite-svelte';
	import { ThumbUpIconSolid } from '@codewithshin/svelte-heroicons';
</script>
```

<h2 class="text-2xl w-full mt-8 dark:text-white py-4">AdvancedRating Component</h2>

<p>Set the `total`, rating`, and `ratings` prop for AdvancedRation component. Use the `rating` slot for Rating component with the `total` and `rating` props. Use the `globalText` slot for additional information.</p>

<div class="container rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
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
</div>

```html
<div class="container rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
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
</div>
```

<h2 class="text-2xl w-full mt-8 dark:text-white py-4">Different icon</h2>

<p>As we describe in the Rating component, you can change an icon in the `ratingUp` and `ratingDown` in the Rating component.</p>

<div class="container rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
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
          <ThumbUpIconSolid className="h-5 w-5 text-yellow-300 dark:text-yellow-200" />
        </span>
        <span slot="ratingDown">
          <ThumbUpIconSolid className="h-5 w-5 text-gray-300 dark:text-gray-500" />
        </span>
				<p slot="text" class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">3.21 out of 5</p>
			</Rating>
		</span>
		<p slot="globalText" class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">1,745 global ratings</p>
	</AdvancedRating>
</div>

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
        <ThumbUpIconSolid className="h-5 w-5 text-yellow-300 dark:text-yellow-200" />
      </span>
      <span slot="ratingDown">
        <ThumbUpIconSolid className="h-5 w-5 text-gray-300 dark:text-gray-500" />
      </span>
      <p slot="text" class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">3.21 out of 5</p>
    </Rating>
  </span>
  <p slot="globalText" class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">1,745 global ratings</p>
</AdvancedRating>
```


<h2 class="text-2xl w-full dark:text-white py-4">Props</h2>

<p>The component has the following props, type, and default values. See <a href="/type-list" class="text-blue-600 hover:underline dark:text-blue-500">type-list page</a> for type information.</p>

<Table header={propHeader} {divClass} >
  <TableDefaultRow {items} rowState='hover' />
</Table>



