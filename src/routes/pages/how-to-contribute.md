---
layout: docLayout
---

<script>
import Htwo from '../utils/Htwo.svelte'
</script>

<h1 class="text-3xl w-full dark:text-white py-8">How to Contribute</h1>

<p>Here are some guidelines we'd like you to follow before submitting a PR.</p>

<Htwo label="Frontend pages" />

<p><a href="https://tailwindcss.com/docs/content-configuration#dynamic-class-names">Tailwind warns</a> that you don't construct class names dynamically. In stead of this:</p>

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

<p>When make a commit, we recommend using <a href="https://www.conventionalcommits.org/en/v1.0.0/">the Coventional commits</a>.</p>

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

<Htwo label="Test" />

<p>Before submitting a PR, please run a test:</p>

```sh
npm run test
```