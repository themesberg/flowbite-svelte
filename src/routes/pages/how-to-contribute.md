---
layout: pageLayout
breadcrumb_title: How to Contribute
title: How to Contribute
dir: Pages
---


<MetaTags
  title={breadcrumb_title}
  titleTemplate="%s | Flowbite-Svelte"
  description={title}
  facebook={{
  appId: '453670756870545'
}}
openGraph={{
  type: 'website',
  url:`https://flowbite-svelte.com/${dir.toLowerCase()}/${breadcrumb_title.toLowerCase().replaceAll(' ', '-')}`,
    title: `${title}`,
    description: `${title}`,
    images: [
      {
        url: `https://open-graph-vercel.vercel.app/api/flowbite-svelte?title=${breadcrumb_title}`,
        width: 1200,
        height: 630,
        alt: `${title}`
      }
    ],
    site_name: 'Flowbite-Svelte'
  }}
  twitter={{
    handle: '@shinokada',
    cardType: 'summary_large_image',
    title: `${title}`,
    description: `${title}`,
    image: `https://open-graph-vercel.vercel.app/api/flowbite-svelte?title=${breadcrumb_title}`,
    imageAlt: `${title}`
  }}
/>

<script>
  import Htwo from '../utils/Htwo.svelte'
  import { MetaTags } from 'svelte-meta-tags';
  import { Breadcrumb, BreadcrumbItem, Heading, A } from '$lib'
  
</script>

<Breadcrumb class="pt-16 py-8">
  <BreadcrumbItem href="/" home >Home</BreadcrumbItem>
  <BreadcrumbItem>{dir}</BreadcrumbItem>
  <BreadcrumbItem>{breadcrumb_title}</BreadcrumbItem>
</Breadcrumb>

<Heading class="mb-2" tag="h1" customSize="text-3xl">{title}</Heading>

<p class='w-full'>Here are some guidelines we'd like you to follow before submitting a PR.</p>

<Htwo label="Create a fork" />

<p>Create a fork from <a href="https://github.com/themesberg/flowbite-svelte">Flowbite-Svelte</a> to your repository first.</p>

<Htwo label="Please use pnpm to install a fork" />

<p>The repo uses `pnpm`, so using `pnpm` is desirable when you fork and install dependencies to avoid unseen problems.</p>

<p>When there is a change in package.json, remove pnpm-lock.yml and node_modules directory and run `pnpm i`.</p>

<Htwo label="Tailwind CSS" />

<p class='w-full'><a class="text-blue-700" href="https://tailwindcss.com/docs/content-configuration#dynamic-class-names">Tailwind warns</a> that you don't construct class names dynamically. Instead of this:</p>

```html
<div class="text-{{ error ? 'red' : 'green' }}-600"></div>
```

<p class='w-full'>Always use complete class names:</p>

```html
<div class="{{ error ? 'text-red-600' : 'text-green-600' }}"></div>
```

<Htwo label="Types and Props" />

<p class='w-full'>Add a type to `export`ed variables. When we generate props files, it will automatically pick up types from your file. If you don't add a type, it will break.</p>

<p class='w-full'>Use `lib/types file for nested objects.</p>

```js
// these work
export let icons: AccordionIconType = {
  up: ChevronUpSolid,
  down: ChevronDownSolid
};

export let child: TopMenuType[] | undefined = undefined;
...

// doesn't work
export let comment: CommentType = {
  id: number | string;
  user: {
    name: string;
    joined: string;
  };
};
// put it in lib/types
export interface CommentType {
  id: number | string;
  user: {
    name: string;
    joined: string;
  };
};

// then 
export let comment: CommentType;
```

<p class='w-full'>See more details in the [createprops' README](https://github.com/shinokada/createprops) file.</p>

<p class='w-full'>Please run the following to update prop files.</p>

```sh
npm run gen:props
```

<p class='w-full'>This script will update/generate files in `src/routes/props`.</p>

<p class='w-full'>Again avoid type inference for `export`ed variables.</p>

<Htwo label="Conventional commit" />

<p>When making a commit, we recommend using <A class="text-blue-700" href="https://www.conventionalcommits.org/en/v1.0.0/">the Conventional commits</A>.</p>

<p class='w-full'>Some examples are:</p>

```sh
feat: add rating component
fix: add if statement to Button component
chore: clean up About page
docs: add timeline page
style: update home page
test: add modal test
```

<p class='w-full'>Use `!` for a minor bump.</p>

```sh
feat!: add drawer compoent and page
```

<p class='w-full'>When you have a breaking change:</p>

```
git commit -a "feat: change btnClass name to bClass" -m "BREAKING CHANGE: change the Button component attributes"
```

<Htwo label="Playwright Test" />

<p class='w-full'>Before submitting a PR, please run a test:</p>

```sh
npm run test
```

If you want to run an single test file, `tests/typography.spec.ts`:

```sh
npx playwright test tests/typography.spec.ts
```

<Htwo label="A11y Test" />

<p class='w-full'>Please test a page with [Nu Html Checker](https://validator.unl.edu/) relating to your change.</p>

<p class='w-full'>Test a page.</p>

```sh
axe http://localhost:3000/dropdowns/image
```
