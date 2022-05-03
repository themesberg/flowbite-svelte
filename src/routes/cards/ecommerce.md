---
layout: cardLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
import ExampleDiv from '../utils/ExampleDiv.svelte'
  import { EcommerceCard, Table, TableDefaultRow, Breadcrumb } from '$lib/index';
  import componentProps from '../props/EcommerceCard.json'
  // Props table
  let items = componentProps.props
	let propHeader = ['Name', 'Type', 'Default']
	
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'
  let img1 = {
    src: "/images/product-1.webp",
    alt: "product image",
  };
  let img2 = {
    src: "/images/product-2.webp",
    alt: "product image",
  };
  let img3 = {
    src: "/images/product-3.webp",
    alt: "product image",
  };
  let img4 = {
    src: "/images/product-4.webp",
    alt: "product image",
  };

  let crumbs = [
    {
      label:'Home',
      href:'/'
    },
    {
      label:'Cards',
      href:'/cards/'
    },
    {
      label:'Ecommerce card',
      href:'/cards/ecommerce'
    },
  ]
</script>

<Breadcrumb {crumbs}/>


<h1 class="text-3xl w-full dark:text-white py-8">Ecommerce Card</h1>

<Htwo label="Set up" />

```html
<script>
  import { EcommerceCard } from "flowbite-svelte";
  let img1 = {
    src: "/images/product-1.webp",
    alt: "product image",
  };
  let img2 = {
    src: "/images/product-2.webp",
    alt: "product image",
  };
  let img3 = {
    src: "/images/product-3.webp",
    alt: "product image",
  };
  let img4 = {
    src: "/images/product-4.webp",
    alt: "product image",
  };
</script>
```

<Htwo label="Examples" />

<ExampleDiv class="flex justify-center">
<EcommerceCard
  title="Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport"
  link="/alerts"
  price="$543"
  img={img1}
/>
</ExampleDiv>

```html
<EcommerceCard
  title="Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport"
  link="/alerts"
  price="$543"
  img={img1}
/>
```

<ExampleDiv class="flex justify-center">
  <EcommerceCard
    title="Women's Cashmere Sweaters Lorem ipsum dolor sit amet."
    link="/tabs"
    btnColor="red"
    stars="4.0"
    price="$461"
    img={img2}
  />
</ExampleDiv>

```html
<EcommerceCard
  title="Women's Cashmere Sweaters Lorem ipsum dolor sit amet."
  link="/tabs"
  btnColor="red"
  stars="4.0"
  price="$461"
  img={img2}
/>
```

<ExampleDiv class="flex justify-center">
  <EcommerceCard
    title="Pink cup Lorem ipsum dolor sit amet et mete."
    link="/cards"
    btnColor="purple"
    stars="3"
    price="$321"
    img={img3}
  />
</ExampleDiv>


```html
<EcommerceCard
  title="Pink cup Lorem ipsum dolor sit amet et mete."
  link="/cards"
  btnColor="purple"
  stars="3"
  price="$321"
  img={img3}
/>
```

<ExampleDiv class="flex justify-center">
  <EcommerceCard
    title="Nintendo Game Lorem ipsum dolor sit amet."
    link="modals"
    btnColor="green"
    stars="5"
    price="$211"
    img={img4}
  />
</ExampleDiv>

```html
<EcommerceCard
  title="Nintendo Game Lorem ipsum dolor sit amet."
  link="modals"
  btnColor="green"
  stars="5"
  price="$211"
  img={img4}
/>
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/type-list">type-list page</a> for type information.</p>

<Table header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</Table>