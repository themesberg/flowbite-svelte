# How to Contribute

Here are some guidelines we'd like you to follow before submitting a PR.

## Frontend pages

<p><a href="https://tailwindcss.com/docs/content-configuration#dynamic-class-names">Tailwind warns</a> that you don't construct class names dynamically. Instead of this:</p>

```html
<div class="text-{{ error ? 'red' : 'green' }}-600"></div>
```

### Always use complete class names:

```html
<div class="{{ error ? 'text-red-600' : 'text-green-600' }}"></div>
```

## Types and Props

Please add a type to `export`ed variables. When we generate props files, it will automatically pick up types from your file. If you don't add a type, it will break.

Please run the following to update prop files.

```sh
npm run gen:props
```

This script will update/generate files in `src/routes/props`.

Again avoid type inference for `export`ed variables.

Please put all export variables before functions to avoid breaking props tables.

## One or two at a time

Please don't send a large amount of changes at once. It takes time to go through all changes. It is easier to check and update the repo asap.

## Conventional commit

<p>When making a commit, we recommend using <a href="https://www.conventionalcommits.org/en/v1.0.0/">the Conventional commits</a>.</p>

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

## Testing

<p>Before submitting a PR, please run a test:</p>

```sh
npm run test
```
