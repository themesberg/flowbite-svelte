---
layout: ratingLayout
---

<script>
	import { Rating, Table, TableDefaultRow, Breadcrumb } from '$lib/index';
	import { HeartIconSolid, ThumbUpIconSolid, EmojiHappyIconSolid } from '@codewithshin/svelte-heroicons';
	import componentProps from '../props/Rating.json'
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
      label:'Rating',
      href:'/ratings/'
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

<h2 class="text-2xl w-full dark:text-white py-4">Set up</h2>

<p>Let's import all necessary components in the script tag. We import a heart, thumb-up, and smiley icons, but you can use any icons as you like.</p>

```html
<script>
	import { Rating } from 'flowbite-svelte';
	import { HeartIconSolid, ThumbUpIconSolid, EmojiHappyIconSolid } from '@codewithshin/svelte-heroicons';
</script>
```

<h2 class="text-2xl w-full dark:text-white py-4">Total and rating props</h2>
<p>The default rating icon is a star. Set the total and rating props.</p>

<div class="container rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
	<Rating total="5" rating="4.66" />
</div>

```html
<Rating total="5" rating="4.66" />
```

<h2 class="text-2xl w-full dark:text-white py-4">Ceil prop</h2>
<p>The default rounding for the rate is `floor`, but by adding the `ceil` prop, you can round it up.</p>

<div class="container rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
	<Rating total="5" rating="4.66" ceil />
</div>

```html
<Rating total="5" rating="4.66" ceil />
```

<h2 class="text-2xl w-full dark:text-white py-4">Text slot</h2>

<p>Use the `text` slot to add any text.</p>

<div class="container rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
	<Rating total="5" rating="3.21">
		<p slot="text" class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">3.21 out of 5</p>
	</Rating>
</div>

```html
<Rating total="5" rating="3.21">
	<p slot="text" class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">3.21 out of 5</p>
</Rating>
```

<h2 class="text-2xl w-full dark:text-white py-4">Icon, size, and color</h2>

<p>Use the `ratingUp` and `ratingDown` slots to add icons of your choice.</p>

<h3>Size and color</h3>

<p>The default icon size is `h-5 w-5`. Set the `className` in a icon component for size and color.</p>

<div class="container rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
	<Rating total="5" rating="3.21">
		<span slot="ratingUp">
			<HeartIconSolid className="h-3 w-3 text-red-700 dark:text-red-500" />
		</span>
		<span slot="ratingDown">
			<HeartIconSolid className="h-3 w-3 text-gray-300 dark:text-gray-500" />
		</span>
	</Rating>
</div>

```html
<Rating total="5" rating="3.21">
	<span slot="ratingUp">
		<HeartIconSolid className="h-3 w-3 text-red-700 dark:text-red-500" />
	</span>
	<span slot="ratingDown">
		<HeartIconSolid className="h-3 w-3 text-gray-300 dark:text-gray-500" />
	</span>
</Rating>
```

<div class="container rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
	<Rating total="5" rating="4.7">
		<span slot="ratingUp">
			<EmojiHappyIconSolid className="h-4 w-4 text-purple-500 dark:text-purple-700" />
		</span>
		<span slot="ratingDown">
			<EmojiHappyIconSolid className="h-4 w-4 text-gray-300 dark:text-gray-500" />
		</span>
	</Rating>
</div>

```html
<Rating total="5" rating="4.7">
	<span slot="ratingUp">
		<EmojiHappyIconSolid className="h-4 w-4 text-purple-500 dark:text-purple-700" />
	</span>
	<span slot="ratingDown">
		<EmojiHappyIconSolid className="h-4 w-4 text-gray-300 dark:text-gray-500" />
	</span>
</Rating>
```

<div class="container rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
	<Rating total="5" rating="5">
		<span slot="ratingUp">
			<ThumbUpIconSolid className="h-6 w-6 text-yellow-300 dark:text-yellow-200" />
		</span>
		<span slot="ratingDown">
			<ThumbUpIconSolid className="h-6 w-6 text-gray-300 dark:text-gray-500" />
		</span>
	</Rating>
</div>

```html
<Rating total="5" rating="5">
	<span slot="ratingUp">
		<ThumbUpIconSolid className="h-6 w-6 text-yellow-300 dark:text-yellow-200" />
	</span>
	<span slot="ratingDown">
		<ThumbUpIconSolid className="h-6 w-6 text-gray-300 dark:text-gray-500" />
	</span>
</Rating>
```

<h2 class="text-2xl w-full dark:text-white py-4">Props</h2>

<p>The component has the following props, type, and default values. See <a href="/type-list" class="text-blue-600 hover:underline dark:text-blue-500">type-list page</a> for type information.</p>

<Table header={propHeader} {divClass} >
  <TableDefaultRow {items} rowState='hover' />
</Table>
