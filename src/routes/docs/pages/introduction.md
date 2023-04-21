---
layout: componentLayout
breadcrumb_title: Svelte UI Components - Flowbite
title: Flowbite Svelte - UI Component Library
component_title: Introduction
dir: Pages
description: Learn more about the free and open-source Flowbite Svelte UI components and start building modern web applications using native Svelte components based on Tailwind CSS
---


[Flowbite Svelte](https://github.com/themesberg/flowbite-svelte) is a free and open-source UI component library based on the core Flowbite components and built with native Svelte components and interactivity handling.

This library features hundreds of interactive elements such as navbars, dropdowns, modals, and sidebars all handled by Svelte and based on the utility classes from Tailwind CSS.

## Getting started

Learn how to get started with Flowbite Svelte by following the quickstart guide and start leveraging the interactive Svelte components coupled with Flowbite and Tailwind CSS.

### Using SvelteKit

You can install SvelteKit or Svelte to start your app. For SvelteKit:

```bash example
npm create svelte@latest my-app
cd my-app
npm install
```

### Using Svelte

If you want to get started with Svelte:

```bash
npm create vite@latest myapp -- --template svelte
cd myapp
npm install
```

### Install Tailwind CSS

In order to enable the utility classes from Tailwind CSS install the package using NPM:

```bash
npx svelte-add@latest tailwindcss
npm i
```

Run a local development server by running:

```bash
npm run dev
```

### Install Flowbite Svelte

Run the following command to install all Flowbite dependencies and libraries:

```sh
npm i flowbite flowbite-svelte classnames @popperjs/core
```

### Configuration

Update the `tailwind.config.cjs` file from your root project folder to let the Tailwind CSS compiler know where to look for the utility classes and also set up the Flowbite plugin.

```js
const config = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],

  theme: {
    extend: {},
  },

  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: 'class',
};

module.exports = config;
```

That's it! Now you should be able to work with the Flowbite Svelte library and import components such as the navbar, dropdown, modal, and more.

## Svelte

Svelte is a modern and growing front-end compiler. Developers build boilerplate-free components using languages HTML, CSS and JavaScript. Svelte compiles your code to tiny, framework-less vanilla JS.

## Tailwind CSS

Flowbite Svelte leverages the utility classes from the popular [Tailwind CSS](https://tailwindcss.com) framework allowing greater customization capabilities directly from a component level in Svelte.

## Flowbite Ecosystem

[Flowbite](https://flowbite.com) is also available in other frameworks such as vanilla JS with HTML, React, Vue, Angular, and even integration possibilities with back-end frameworks such as Laravel, Django, Flask, and Phoenix.

Check out the main [GitHub repository](https://github.com/themesberg/flowbite) to explore other libraries too as well as the [Figma design system](https://flowbite.com/figma/).

## UI Components

Flowbite Svelte has a rich collection of commonly used components coded with Svelte that leverage the utility classes from Tailwind CSS and you can check out the full list of components by navigating through the components section in the sidebar on the left side of the page.

## Contributing

Flowbite Svelte is a free and open-source UI component library built with Svelte native components and based on the Flowbite ecosystem and contributions are more than welcome.

Check out [contributing guide](/docs/pages/how-to-contribute) to learn how you can be a part of the open-source community.

## License

Flowbite Svelte is a free and open-source UI component library licensed under the [MIT License](https://github.com/themesberg/flowbite-svelte/blob/main/LICENSE).

