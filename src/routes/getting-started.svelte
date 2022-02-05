<script>
  import Prism from "prismjs";
  import "prismjs/themes/prism.css";
  import "prism-themes/themes/prism-duotone-light.css";
  // let language = "html";
</script>

<div class="container mt-4 flex flex-wrap mx-auto">
  <h1 class="text-2xl w-full">Getting Started</h1>
  <h2 class="text-xl w-full">Installation</h2>
  <p>Install SvelteKit.</p>
  <div class="code">
    {@html Prism.highlight(
      `
$ npm init svelte@next sveltekit-demo
$ cd sveltekit-demo
$ npm install
      `,
      Prism.languages["html"]
    )}
  </div>
  <p>Install Tailwind CSS and Flowbite.</p>
  <div class="code">
    {@html Prism.highlight(
      `
$ npx svelte-add@latest tailwindcss
$ npm i flowbite
      `,
      Prism.languages["html"]
    )}
  </div>
  <p>Install svelte-flow.</p>
  <div class="code">
    {@html Prism.highlight(
      `
$ npm i -D svelte-flow
      `,
      Prism.languages["html"]
    )}
  </div>
  <p>Add the following in the script tag in the __layout.svelte :</p>
  <div class="code">
    {@html Prism.highlight(
      `
  import "../app.css";
  import "flowbite/dist/flowbite.css";
      `,
      Prism.languages["html"]
    )}
  </div>
  <p>Add the following in the script tag in the __layout.svelte :</p>
  <div class="code">
    {@html Prism.highlight(
      `
<div class="mx-auto p-2">
  <slot />
</div>
      `,
      Prism.languages["html"]
    )}
  </div>
  <p>And modify the src/app.html adding flowbite.js as the following:</p>
  <div class="code">
    {@html Prism.highlight(
      `
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
    <script src="https://unpkg.com/flowbite@1.3.2/dist/flowbite.js" ✂prettier:content✂="" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=">{}</script>
  </body>
</html>
      `,
      Prism.languages["html"]
    )}
  </div>
</div>
