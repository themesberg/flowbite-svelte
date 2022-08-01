---
layout: cardLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
  import GitHubSource from '../utils/GitHubSource.svelte'
  import TableProp from '../utils/TableProp.svelte'
  import TableDefaultRow from '../utils/TableDefaultRow.svelte'
  import { Avatar, Button, Breadcrumb, BreadcrumbItem, Card, SignInCard, EcommerceCard, Dropdown, DropdownItem, List, Toggle } from '$lib/index'
  import { DotsHorizontal, ArrowRight } from 'svelte-heros'
  import CloseButton from "$lib/utils/CloseButton.svelte"
  import { Home } from 'svelte-heros';
  import componentProps from '../props/Card.json'
  import componentProps2 from '../props/SignInCard.json'
  import componentProps3 from '../props/EcommerceCard.json'
  // Props table
  let items = componentProps.props
  let items2 = componentProps2.props
  let items3 = componentProps3.props

	let propHeader = ['Name', 'Type', 'Default']
  let slotHeader = ['Name', 'Description']

  let slotItems = [['default', 'For a button label.']]

	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
  let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

  const btn1 = ()　=>　{
    alert('You clicked.')
  }

  let vCard = false;
  let hCard = false;
  let img1 = {
    src: "/images/product-1.webp",
    alt: "product image",
  };
  let list = [
    { img: { src: "/images/profile-picture-1.webp", alt: "Neil Sims",},
      name: "Neil Sims", email: "email@windster.com", value: "$320"
    },
    { img: { src: "/images/profile-picture-2.webp", alt: "Bonnie Green" },
      name: "Bonnie Green", email: "email@windster.com", value: "$3467"
    },
    { img: { src: "/images/profile-picture-3.webp", alt: "Michael Gough" },
      name: "Michael Gough", email: "email@windster.com", value: "$67"
    },
  ];
</script>

<Breadcrumb>
  <BreadcrumbItem href="/" icon={Home} variation="solid">Home</BreadcrumbItem>
  <BreadcrumbItem href="/cards">Cards</BreadcrumbItem>
  <BreadcrumbItem>Card default</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white pt-8 pb-4">Card</h1>

<ExampleDiv>
<GitHubSource href="cards/Card.svelte">Card</GitHubSource>
<GitHubSource href="cards/SignInCard.svelte">SignInCard</GitHubSource>
<GitHubSource href="cards/EcommerceCard.svelte">EcommerceCard</GitHubSource>
</ExampleDiv>

<Htwo label="Set up" />

<p>Import Card in the script tag.</p>

```html
<script>
  import { Card, SignInCard, EcommerceCard } from "flowbite-svelte";
</script>
```

<Htwo label="Default card" />

Use the following simple card component with a title and description.

Notice the `href` prop set, as that card is one big `<a/>` element.

<ExampleDiv>
  <Card href="/cards">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
      Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
    </p>
  </Card>
</ExampleDiv>

```html
<Card href="/cards">
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
  <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
  </p>
</Card>
```

<Htwo label="Card with action button" />

Use the following example of a card element if you also want to have an action button.

<ExampleDiv>
  <Card>
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
      Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
    </p>
    <Button>
      Read more <ArrowRight class="w-5 h-5 ml-2"/>
    </Button>
  </Card>
</ExampleDiv>

```html
<Card>
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
  </p>
  <Button>
    Read more <ArrowRight class="w-5 h-5 ml-2"/>
  </Button>
</Card>
```

<Htwo label="Card with image" />

User <code>reverse={true}</code> to reverse the position of an image.

You can use the following example of a card element with an image for blog posts, user cards, and many more.

<ExampleDiv>
<div>
  <Card img="/images/image-1.jpeg" reverse={vCard}>
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
      Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
    </p>
    <Button>
      Read more <ArrowRight class="w-5 h-5 ml-2"/>
    </Button>
  </Card>
  <Toggle bind:checked={vCard} class="mt-4 italic dark:text-gray-500">Reverse</Toggle>
  </div>
</ExampleDiv>

```html
<Card img="/images/image-1.jpeg" reverse={true}>
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
  </p>
  <Button>
    Read more <ArrowRight class="w-5 h-5 ml-2"/>
  </Button>
</Card>
```

<Htwo label="Horizontal card" />

If you want to spice up your cards you can use the following card which has its child elements aligned horizontally.

<ExampleDiv>
<div>
  <Card img="/images/image-1.jpeg" href="/" horizontal reverse={hCard}>
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
      Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
    </p>
  </Card>
  <Toggle bind:checked={hCard} class="mt-4 italic dark:text-gray-500">Reverse</Toggle>
  </div>
</ExampleDiv>

```html
<Card img="/images/image-1.jpeg" href="/" horizontal reverse={true}>
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
  </p>
</Card>
```

<Htwo label="User profile card" />

Use this user profile card example if you want to show a dropdown menu and buttons to enable multiple actions from your user.

<ExampleDiv>
  <Card padding='sm'>
    <div class="flex justify-end">
      <Dropdown class="w-44">
        <CloseButton slot="trigger" class="text-gray-500 dark:text-gray-400">
          <DotsHorizontal class="w-6 h-6"/>
        </CloseButton>
        <DropdownItem>Edit</DropdownItem>
        <DropdownItem>Export data</DropdownItem>
        <DropdownItem>Delete</DropdownItem>
      </Dropdown>
    </div>
    <div class="flex flex-col items-center pb-4">
      <Avatar size="lg" src="/images/profile-picture-3.webp" />
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
        <div class="flex mt-4 space-x-3 lg:mt-6">
          <Button>Add friend</Button>
          <Button color="light" class="dark:text-white">Message</Button>
        </div>
    </div>
  </Card>
</ExampleDiv>

```html
<Card padding='sm'>
  <div class="flex justify-end">
    <Dropdown class="w-44">
      <CloseButton slot="trigger" class="text-gray-500 dark:text-gray-400">
        <DotsHorizontal class="w-6 h-6"/>
      </CloseButton>
      <DropdownItem>Edit</DropdownItem>
      <DropdownItem>Export data</DropdownItem>
      <DropdownItem>Delete</DropdownItem>
    </Dropdown>
  </div>
  <div class="flex flex-col items-center pb-4">
    <Avatar size="lg" src="/images/profile-picture-3.webp" />
      <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
      <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
      <div class="flex mt-4 space-x-3 lg:mt-6">
        <Button>Add friend</Button>
        <Button color="light" class="dark:text-white">Message</Button>
      </div>
  </div>
</Card>
```

<Htwo label="Card with form inputs" />

Use this card example where you can add form input elements that can be used for authentication actions or any other context where you need to receive information from your users.

[See `SignInCard` for details](/cards/signin)

<ExampleDiv>
  <SignInCard rememberMe signup={{name: 'Create account', href:'/'}} lostPassword={{name: 'Lost password', href:"/"}}/>
</ExampleDiv>

```html
  <SignInCard rememberMe signup={{name: 'Create account', href:'/'}} lostPassword={{name: 'Lost password', href:"/"}}/>
```

<Htwo label="Call to action card" />

Use this CTA card example to encourage your users to visit a certain page such as downloading the iOS or Android application for your project.

<ExampleDiv>
  <Card class="!max-w-2xl text-center" padding='xl'>
    <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Work fast from anywhere</h5>
    <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
      Stay up to date and move work forward with Flowbite on iOS & Android. Download the app today.
    </p>
    <div class="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
      <Button>Download it</Button>
      <Button>Get it on</Button>
    </div>
  </Card>
</ExampleDiv>

```html
<Card class="!max-w-2xl text-center" padding='xl'>
  <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Work fast from anywhere</h5>
  <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
    Stay up to date and move work forward with Flowbite on iOS & Android. Download the app today.
  </p>
  <div class="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
    <Button>Download it</Button>
    <Button>Get it on</Button>
  </div>
</Card>
```

<Htwo label="Card with list" />

Use this card example if you want to show a list of data:

<ExampleDiv>
  <Card padding="xl">
    <div class="flex justify-between items-center mb-4">
        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Customers</h5>
        <a href="/" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
            View all
        </a>
   </div>
    <List items={list} let:item class="border-0 dark:!bg-transparent">
      <div class="flex items-center space-x-4">
        <Avatar src={item.img.src} alt={item.img.alt}/>
        <div class="flex-1 space-y-1 font-medium dark:text-white">
          <div>{item.name}</div>
          <div class="text-sm text-gray-500 dark:text-gray-400">{item.email}</div>
        </div>
        <div class="inline-flex items-center text-xl font-semibold text-gray-900 dark:text-white">
            {item.value}
        </div>
      </div>
    </List>
  </Card>
</ExampleDiv>

```html
<script>
  let list = [
    { img: { src: "/images/profile-picture-1.webp", alt: "Neil Sims",},
      name: "Neil Sims", email: "email@windster.com", value: "$320"
    },
    { img: { src: "/images/profile-picture-2.webp", alt: "Bonnie Green" },
      name: "Bonnie Green", email: "email@windster.com", value: "$3467"
    },
    { img: { src: "/images/profile-picture-3.webp", alt: "Michael Gough" },
      name: "Michael Gough", email: "email@windster.com", value: "$67"
    },
  ];
</script>

<Card padding="xl">
  <div class="flex justify-between items-center mb-4">
      <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
        Latest Customers
      </h5>
      <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
          View all
      </a>
  </div>
  <List items={list} let:item class="border-0 dark:!bg-transparent">
    <div class="flex items-center space-x-4">
      <Avatar src={item.img.src} alt={item.img.alt}/>
      <div class="flex-1 space-y-1 font-medium dark:text-white">
        <div>{item.name}</div>
        <div class="text-sm text-gray-500 dark:text-gray-400">{item.email}</div>
      </div>
      <div class="inline-flex items-center text-xl font-semibold text-gray-900 dark:text-white">
          {item.value}
      </div>
    </div>
  </List>
</Card>
```

<Htwo label="E-commerce card" />

Use this card for your e-commerce websites and show information about the products and enable actions such as adding a review and adding the product to the cart.

[See `EcommerceCard` for details](/cards/ecommerce)

<ExampleDiv>
  <EcommerceCard
    title="Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport"
    href="/"
    price="$543"
    img={img1}
    stars={4}
    btnText="Buy now"
  >
  <p cloass="dark:text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
  </EcommerceCard>
</ExampleDiv>

```html
<EcommerceCard
  title="Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport"
  href="/"
  price="$543"
  img={img1}
  stars={star5}
  btnText="Buy now"
>
<p cloass="dark:text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
</EcommerceCard>
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.</p>

<h3>Card</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</TableProp>

<h3>SignInCard</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items2} rowState='hover' />
</TableProp>

<h3>EcommerceCard</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items3} rowState='hover' />
</TableProp>

<Htwo label="Slots" />

<h3>Card</h3>

<TableProp header={slotHeader} {divClass} {theadClass}>
  <TableDefaultRow items={slotItems} rowState='hover' />
</TableProp>

<h3>EcommerceCard</h3>

<TableProp header={slotHeader} {divClass} {theadClass}>
  <TableDefaultRow items={slotItems} rowState='hover' />
</TableProp>