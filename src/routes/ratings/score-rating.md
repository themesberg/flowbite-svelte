---
layout: ratingLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
  import TableProp from '../utils/TableProp.svelte'
  import TableDefaultRow from '../utils/TableDefaultRow.svelte'
  import { Rating, ScoreRating, Breadcrumb, BreadcrumbItem } from '$lib/index'
  import { Home } from 'svelte-heros';
  import componentProps from '../props/ScoreRating.json'
  // Props table
  let items = componentProps.props
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
  <BreadcrumbItem href="/ratings">Ratings</BreadcrumbItem>
  <BreadcrumbItem>Score ratings</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white py-8">ScoreRating Component</h1>

<Htwo label="Set up" />

<p>Let's import all necessary components in the script tag.</p>

```html
<script>
  import { Rating, ScoreRating } from 'flowbite-svelte';
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

<p>The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.</p>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</TableProp>
