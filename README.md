# SVELTE-FLOW

## Installation

Install SvelteKit and TailwindCSS:

```sh
npm init svelte@next sveltekit-demo
cd sveltekit-demo
npm install
npx svelte-add@latest tailwindcss
```

Install Flowbite:

```sh
npm i flowbite
```

Add the following to the __layout.svelte:

```html
<script>
  import "../app.css";
  import "flowbite/dist/flowbite.css";
</script>
<div class="mx-auto p-2">
  <slot />
</div>
```

In `src/app.html`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="description" content="" />
    <link rel="icon" href="%svelte.assets%/favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
   
  %svelte.head%
  </head>
  <body>
    <div id="svelte">%svelte.body%</div>
    
    <script src="/node_modules/flowbite/dist/flowbite.js"></script>
  </body>
</html>
```

Install `svelte-flow`:

```sh
npm i -D svelte-flow
```

## Alert components

There are three components you can use: `Alert`, `BorderAlert`, and `InfoAlert`. 
All Alert components have three props: `color`, `alertId`, and `closeBtn`.

```js
let color = "blue";// blue (default), red, yellow, purple, green, indigo, gray, (no pink)
let alertId = "alert-1";// string
let closeBtn = false;// boolean
```

Additionally `InforAlert` has `infoLink` prop:

```js
let infoLink = false;// string
```

You can set a URL:

```js
let infoLink = '/about'
```

## Button component

```js
let rounded = false; // boolean true/false
let size = "sm"; // xs, sm, base
let name = "Read more"; // string
let type = "blue"; // blue (default), red, yellow, purple, green, indigo, gray, pink
```

## Card components

There are `Card`, `CtaCard`, `EcommerceCard`, `HorizontalCard`, `InteractiveCard`, `ListCard`, and `SignInCard` compoents.

### Card component

```js
let link; // URL
let img; // src
let btnName = "Read more"; // string
let btnColor = "blue"; // blue (default), red, yellow, purple, green, indigo, gray, pink
let header = 'Lorem ...'// string
```

### Cta Card

```js
let title = "Work fast from anywhere"; // string
let content =
    "Stay up to date and move work forward with Flowbite on iOS &amp; Android. Download the app today."; // string
let btns = [ // array of objects
    {
      logo: "M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z", // SVG or src
      title: "Download on the",//string
      body: "Mac App Store",//string
      link: "/#",// URL
    },
    ...
]
```

### Ecommerce card

```js
let img = { // object
    src: "/images/product-1.png",// src
    alt: "product image",// string
  };
let link = "/#"; // url
let btnColor = "blue"; // color
let title = "Apple Watch Series ..."; // string
let stars = "5.0"; // float number
let price // string
```

### Horizontal card

```js
let link; // url
let img; // src
let header // string
```

### Interactive card

```js
let dropdownLinks = [ // array of objects with href and name
    {
      href: "/",
      name: "Name 1",
    },
    ...
  ];
let img = { // object with src and alt
    src: "",
    alt: "",
  };
let header = "Lorem ipsum"; //string
let content = "Proin efficitur purus felis.";//string
let btnColor1 = "blue";// string
let link1 = { href: "", title: "" };// object with href and title
let link2 = { href: "", title: "" };// object with href and title
```

### List card

```js
let lists = [ // array of objects with img{src, alt}, field1, field2, field3
    {
      img: {
        src: "/images/profile-picture-1.jpeg",
        alt: "Neil Sims",
      },
      field1: "Neil Sims",
      field2: "email@windster.com",
      field3: "Advisor",
    },
    ...
  ];
  export let title = "Latest Customers"; // string
  export let action = { // object with link and title
    link: "/#",
    title: "View all",
  };
```

### SignIn card

```js
let title = "Sign in"; // string
let actionLink = "/sign-in"; // URL
let field1 = { // object
    name: "email", // string
    title: "Your email", // string
    placeholder: "name@company.com", // string
    required: "true", // boolean
  };
let signupLink;
let lostPasswordLink;
```

## List component

```js
let lists = [//array of objects
    {
      title: "Profile", // string
      icon: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z",//SVG or src
      link: "/profile", // URL
      external: false, // boolean
    },
    ...
  ];
```

## Modal components

ExtraLargeModal, LargeModal, MediumModal, ModalButton, SignInModal, SmallModal

To be finished

## Navbar component

The default value for the active menu item is `#ff0066`.
To overwrite the class `active` for active menu item, add the following to `src/app.css`:

```css
#mobile-menu .active{
  color: #3490fa !important;
}
```

### Props and their default values

- sitename: `sitename = "Svelte Flow"`.
- logo: `logo = "/images/mkdir-logo.png"`
- textsize: `textsize = "sm"`
- menus:

```js
let menus = [
    {
      name: "Home",
      link: "/",
    },
    ...
  ];
```

## Tab components

There are three tab components: DefaultTabs, InteractiveTabs, and PillTabs.

### DefaultTabs component

```js
let tabs = [
    {
      name: "Profile",
      active: true,
      link: "/#",
    },
    ...
  ];
```

### InteractiveTabs

```js
let tabId = "myTab";
let tabs = [
    {
      name: "Profile",
      selected: true,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    ...
```