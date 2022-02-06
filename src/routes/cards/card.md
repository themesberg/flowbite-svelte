---
layout: doc
---

<script>
  import { Card } from "$lib/index";
</script>

<h1 class="text-3xl w-full">Card: Setup</h1>

Import Card in the script tag.

```svelte
<script>
  import { Card } from "$lib/index";
</script>
```

<h2 class="text-xl w-full mt-8">Simple Card</h2>

```svelte
<Card header="Simple card with header and content">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio.
</Card>
```

<div class="container flex flex-wrap mt-8 mx-auto justify-center">
  <Card header="Simple card with header and content">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio
    consequatur modi ab nisi perferendis placeat natus repellendus officiis
    ipsa.
  </Card>
</div>

<h2 class="text-xl w-full mt-8">Card with Link</h2>

```svelte
<Card header="Card with link" link="/">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio.
</Card>
```

<div class="container flex flex-wrap mt-8 mx-auto justify-center">
  <Card header="Card with link" link="/">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio
    consequatur modi ab nisi perferendis placeat natus repellendus officiis
    ipsa.
  </Card>
</div>

<h2 class="text-xl w-full mt-8">Card with link and image</h2>

```svelte
<Card img="/images/image-1.jpeg" header="Card with link and image" link="/">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio.
</Card>
```

<div class="container flex flex-wrap mt-8 mx-auto justify-center">
  <Card img="/images/image-1.jpeg" header="Card with link and image" link="/">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio
    consequatur modi ab nisi perferendis placeat natus repellendus officiis
    ipsa.
  </Card>
</div>

<h2 class="text-xl w-full mt-8">Card with image</h2>

```svelte
<Card img="/images/image-2.jpeg" header="Card with image"
  >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio.
</Card>
```

<div class="container flex flex-wrap mt-8 mx-auto justify-center">
  <Card img="/images/image-2.jpeg" header="Card with image"
    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio
    consequatur modi ab nisi perferendis placeat natus repellendus officiis
    ipsa.
  </Card>
</div>

<h2 class="text-xl w-full mt-8">Card with red button</h2>

```svelte
<Card
  img="/images/image-1.jpeg"
  header="Red button"
  link="/"
  btnColor="red"
>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio.
</Card>
```

<div class="container flex flex-wrap mt-8 mx-auto justify-center">
  <Card
    img="/images/image-1.jpeg"
    header="Red button"
    link="/"
    btnColor="red"
  >
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio
    consequatur modi ab nisi perferendis placeat natus repellendus officiis
    ipsa.
  </Card>
</div>

<h2 class="text-xl w-full mt-8">Card with yellow button</h2>

```svelte
<Card
  img="/images/image-1.jpeg"
  header="Yellow button"
  link="/"
  btnColor="yellow"
>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio.
</Card>
```

<div class="container flex flex-wrap mt-8 mx-auto justify-center">
  <Card
    img="/images/image-1.jpeg"
    header="Yellow button"
    link="/"
    btnColor="yellow"
  >
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio.
  </Card>
</div>

<h2 class="text-xl w-full mt-8">Card with purple button</h2>

```svelte
<Card
  img="/images/image-1.jpeg"
  header="Purple button"
  link="/"
  btnColor="purple"
>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio
  consequatur modi ab nisi perferendis placeat natus repellendus officiis
  ipsa.
</Card>
```

<div class="container flex flex-wrap mt-8 mx-auto justify-center">
  <Card
    img="/images/image-1.jpeg"
    header="Purple button"
    link="/"
    btnColor="purple"
  >
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio
    consequatur modi ab nisi perferendis placeat natus repellendus officiis
    ipsa.
  </Card>
</div>
