---
layout: docLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import { Breadcrumb, BreadcrumbItem } from '$lib/index'
  import { Home } from 'svelte-heros'
</script>

<Breadcrumb>
  <BreadcrumbItem href="/" icon={Home} variation="solid">Home</BreadcrumbItem>
  <BreadcrumbItem>How to contribute</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white pt-8 pb-4">How to Contribute</h1>

<p>Here are some guidelines we'd like you to follow before submitting a PR.</p>

<Htwo label="Please use pnpm to install a fork" />

<p>The repo uses `pnpm`, so using `pnpm` is desiable when you fork and install dependencies to avoid unseen problems.</p>

<Htwo label="Frontend pages" />

<p><a href="https://tailwindcss.com/docs/content-configuration#dynamic-class-names">Tailwind warns</a> that you don't construct class names dynamically. Instead of this:</p>

```html
<div class="text-{{ error ? 'red' : 'green' }}-600"></div>
```

<p>Always use complete class names:</p>

```html
<div class="{{ error ? 'text-red-600' : 'text-green-600' }}"></div>
```

<Htwo label="Types and Props" />

<p>Please add a type to `export`ed variables. When we generate props files, it will automatically pick up types from your file. If you don't add a type, it will break.</p>

<p>Please run the following to update prop files.</p>

```sh
npm run gen:props
```

<p>This script will update/generate files in `src/routes/props`.</p>

<p>Again avoid type inference for `export`ed variables.</p>


<Htwo label="Conventional commit" />

<p>When making a commit, we recommend using <a href="https://www.conventionalcommits.org/en/v1.0.0/">the Coventional commits</a>.</p>

Some examples are:

```sh
feat: add rating component
fix: add if statement to Button component
chore: clean up About page
docs: add timeline page
style: update home page
test: add modal test
```

When you have a breaking change:

```
git commit -a "feat: change btnClass name to bClass" -m "BREAKING CHANGE: change the Button component attributes"
```

<Htwo label="Playwright Test" />

<p>Before submitting a PR, please run a test:</p>

```sh
npm run test
```

<Htwo label="A11y Test" />

<p>I'm in a process of finding the best A11y testing method at the moment. For now, please install [@axe-core/cli](https://www.npmjs.com/package/@axe-core/cli) to test pages relating to your change.</p>

```sh
npm install @axe-core/cli -g
```

<p>Test a page.</p>

```sh
axe http://localhost:3000/dropdowns/image
```
