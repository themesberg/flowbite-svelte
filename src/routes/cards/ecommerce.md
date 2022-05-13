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
  let star5 = 5.0
  let star4 = 4.7
  let star3 = 3.5

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
  let star5 = 5.0
  let star4 = 4.7
  let star3 = 3.5
</script>
```

<Htwo label="Examples" />

<ExampleDiv class="flex justify-center">
<EcommerceCard
  title="Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport"
  href="/"
  price="$543"
  img={img1}
  stars={star5}
  btnText="Buy now"
/>
</ExampleDiv>

```html
<EcommerceCard
  title="Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport"
  href="/"
  price="$543"
  img={img1}
  stars={star5}
  btnText="Buy now"
/>
```

<Htwo label="Without stars" />

<ExampleDiv class="flex justify-center">
  <EcommerceCard
    title="Women's Cashmere Sweaters Lorem ipsum dolor sit amet."
    href="/"
    btnColor="red"
    price="$461"
    img={img2}
    btnText="Buy now"
  />
</ExampleDiv>

```html
<EcommerceCard
  title="Women's Cashmere Sweaters Lorem ipsum dolor sit amet."
  href="/"
  btnColor="red"
  price="$461"
  img={img2}
  btnText="Buy now"
/>
```

<Htwo label="Without stars and button" />

<ExampleDiv class="flex justify-center">
  <EcommerceCard
    title="Pink cup Lorem ipsum dolor sit amet et mete."
    href="/"
    price="$321"
    img={img3}
  />
</ExampleDiv>


```html
<EcommerceCard
  title="Pink cup Lorem ipsum dolor sit amet et mete."
  href="/"
  price="$321"
  img={img3}
/>
```

<Htwo label="Without stars, button, price" />

<ExampleDiv class="flex justify-center">
  <EcommerceCard
    title="Nintendo Game Lorem ipsum dolor sit amet."
    href="/"
    img={img4}
  />
</ExampleDiv>

```html
<EcommerceCard
  title="Nintendo Game Lorem ipsum dolor sit amet."
  href="/"
  img={img4}
/>
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.</p>

<Table header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</Table>