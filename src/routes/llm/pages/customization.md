# Customization - Flowbite Svelte


When working with components, you may want to customize their default or specific classes. Here's a guide on how to achieve that. Starting from version 0.38.0, we have transitioned from using classnames to tailwind-merge, which allows us to easily overwrite classes and avoid style conflicts. This update brings enhanced flexibility and simplifies the process of customizing component styles.

## Understanding Props

Each component has a props section where you can find information on how to customize classes. For example, let's refer to the [Alert component data section](https://next.flowbite-svelte.com/docs/components/alert#component-data).

In this case, you can overwrite the outer div class by adding the `class` prop. Here's an example:

```svelte
<script lang="ts">
  import { Alert } from "flowbite-svelte";
</script>

<Alert class="bg-sky-500 text-white">Add a class to overwrite the default class!</Alert>
```

Thanks to tailwind-merge, you can efficiently merge Tailwind CSS classes without style conflicts. One of its features is that the last conflicting class wins. Please read more details about [Merging behavior](https://github.com/dcastil/tailwind-merge/blob/v1.13.1/docs/features.md)

## Importance of ! for Some Components

In Tailwind CSS, you can make any utility class important by adding a `!` character at the beginning of the class name. Certain components may require this approach to successfully overwrite styles. Here's an example:

```svelte
<script lang="ts">
  import { Button } from "flowbite-svelte";
</script>

<Button class="bg-blue-500!">Blue Button</Button>
<Button class="bg-green-500!">Green Button</Button>
```

## Overwriting Specific Classes

While the `class` prop can be used for most components, some components with a complex structure may require multiple props.

For instance, let's consider [the Banner component](https://next.flowbite-svelte.com/docs/components/banner#component-data) has two relevant props: `class` for `div` and `classInner` for `innerClass`. To overwrite the `div`, you can use the `classDiv` prop:

```svelte
<script lang="ts">
  import { Banner, Skeleton, ImagePlaceholder } from "flowbite-svelte";
</script>

<Skeleton class="py-4" />
<ImagePlaceholder class="py-4" />

<Banner id="default-banner" type="bottom" class="border-green-600 bg-green-700 dark:border-green-400 dark:bg-green-500" innerClass="text-white">
  <p class="flex items-center text-sm font-normal">Overwriting divClass and innerClass</p>
</Banner>
```

You can observe the background color change to green.

### New way of customization

Instead of intrducing multiple props for component's internal element classes new prop `classes` has been introduced: an object of internal element names and desired new classes. The above example will therefore change to:

```svelte
<script lang="ts">
  import { Banner, Skeleton, ImagePlaceholder } from "flowbite-svelte";
</script>

<Skeleton class="py-4" />
<ImagePlaceholder class="py-4" />

<Banner id="default-banner" type="bottom" class="border-green-600 bg-green-700 dark:border-green-400 dark:bg-green-500" classes={{ insideDiv: "text-white" }}>
  <p class="flex items-center text-sm font-normal">Overwriting divClass and innerClass</p>
</Banner>
```

The `classes` prop becomes the default way of customization and the multiple props mentioned above are marked as deprecated.

We hope these instructions help you confidently customize component classes. Feel free to reach out if you have any further questions!

## Global customization

To customize the flowbite-svelte component globally, follow these steps:

Start by creating your own component based on flowbite-svelte.

Create a new file for your button component in the lib directory:

```svelte
<script lang="ts">
  // src/lib/MyButton.svelte
  import { Button } from "flowbite-svelte";
  let { children } = $props();
</script>

<Button color="green" pill class="p-8">
  {@render children()}
</Button>
```

Once you have created your button component, you can use it in your project.

In your project, import your custom button component:

```js
<script lang="ts">import MyButton from "$lib/MyButton.svelte"</script>
```

Use the custom button component in your project by adding the following code:

```html
<MyButton>My New Button</MyButton>
```

With these steps, you can customize and use your own button component globally based on flowbite-svelte. Feel free to modify the styles and properties of the component according to your requirements.
