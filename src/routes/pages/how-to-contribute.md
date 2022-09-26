---
layout: pageLayout
dir: Pages
title: How to Contribute
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import { Breadcrumb, BreadcrumbItem, Heading, A } from '$lib'
  
</script>

<Breadcrumb class="pb-8">
  <BreadcrumbItem href="/" home >Home</BreadcrumbItem>
  <BreadcrumbItem>{dir}</BreadcrumbItem>
  <BreadcrumbItem>{title}</BreadcrumbItem>
</Breadcrumb>

<Heading class="mb-2" tag="h1" customSize="text-3xl">{title}</Heading>

<p class='w-full'>Here are some guidelines we'd like you to follow before submitting a PR.</p>

<Htwo label="Please use pnpm to install a fork" />

<p>The repo uses `pnpm`, so using `pnpm` is desirable when you fork and install dependencies to avoid unseen problems.</p>

<Htwo label="Frontend pages" />

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

<p>When making a commit, we recommend using <a class="text-blue-700" href="https://www.conventionalcommits.org/en/v1.0.0/">the Conventional commits</a>.</p>

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

<p class='w-full'>I'm in a process of finding the best A11y testing method at the moment. For now, please install [@axe-core/cli](https://www.npmjs.com/package/@axe-core/cli) to test pages relating to your change.</p>

```sh
npm install @axe-core/cli -g
```

<p class='w-full'>Test a page.</p>

```sh
axe http://localhost:3000/dropdowns/image
```
