---
layout: doc
---

<script>
  import { EcommerceCard } from "$lib/index";
  let img2 = {
    src: "/images/product-2.jpeg",
    alt: "product image",
  };
  let img3 = {
    src: "/images/product-3.jpeg",
    alt: "product image",
  };
  let img4 = {
    src: "/images/product-4.jpeg",
    alt: "product image",
  };
</script>

<h1 class="text-3xl w-full dark:text-white">Ecommerce Card: Setup</h1>

```svelte
<script>
  import { EcommerceCard } from "$lib/index";
  let img2 = {
    src: "/images/product-2.jpeg",
    alt: "product image",
  };
  let img3 = {
    src: "/images/product-3.jpeg",
    alt: "product image",
  };
  let img4 = {
    src: "/images/product-4.jpeg",
    alt: "product image",
  };
</script>
```

<h1 class="text-3xl w-full dark:text-white">Ecommerce Cards</h1>

```svelte
<EcommerceCard
  title="Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport"
  link="/alerts"
  price="$543"
/>
```

<div class="container flex flex-wrap mt-8 mx-auto justify-center">
<EcommerceCard
  title="Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport"
  link="/alerts"
  price="$543"
/>
</div>

```svelte
<EcommerceCard
  title="Women's Cashmere Sweaters Lorem ipsum dolor sit amet."
  link="/tabs"
  btnColor="red"
  stars="4.0"
  price="$461"
  img={img2}
/>
```

<div class="container flex flex-wrap mt-8 mx-auto justify-center">
  <EcommerceCard
    title="Women's Cashmere Sweaters Lorem ipsum dolor sit amet."
    link="/tabs"
    btnColor="red"
    stars="4.0"
    price="$461"
    img={img2}
  />
</div>


```svelte
<EcommerceCard
  title="Pink cup Lorem ipsum dolor sit amet et mete."
  link="/cards"
  btnColor="purple"
  stars="3"
  price="$321"
  img={img3}
/>
```

<div class="container flex flex-wrap mt-8 mx-auto justify-center">
  <EcommerceCard
    title="Pink cup Lorem ipsum dolor sit amet et mete."
    link="/cards"
    btnColor="purple"
    stars="3"
    price="$321"
    img={img3}
  />
</div>

```svelte
<EcommerceCard
  title="Nintendo Game Lorem ipsum dolor sit amet."
  link="modals"
  btnColor="green"
  stars="5"
  price="$211"
  img={img4}
/>
```

<div class="container flex flex-wrap mt-8 mx-auto justify-center">
  <EcommerceCard
    title="Nintendo Game Lorem ipsum dolor sit amet."
    link="modals"
    btnColor="green"
    stars="5"
    price="$211"
    img={img4}
  />
</div>