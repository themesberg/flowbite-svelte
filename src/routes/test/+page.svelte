<script>
  import Carousel from '$lib/carousels/Carousel.svelte';
  import TabItem from '$lib/tabs/TabItem.svelte';
  import Tabs from '$lib/tabs/Tabs.svelte';
  import { images } from '../docs/components/imageData/+server.js';
  import { fly } from 'svelte/transition';

  const myFlyIn = (x) => fly(x, { delay: 250, duration: 900, x: 700 });
  const myFlyOut = (x) => fly(x, { delay: 250, duration: 900, x: -700 });
</script>

AAA
<div>
  <Tabs style="none" defaultClass="flex rounded-lg divide-x divide-gray-200 shadow dark:divide-gray-700" activeClasses1="p-40 w-full group-first:rounded-l-lg group-last:rounded-r-lg text-gray-900 bg-gray-100 focus:outline-none dark:bg-gray-700 dark:text-white">
    <TabItem class="w-full" open>
      <span slot="title">Profile</span>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <b>Profile:</b>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </TabItem>
    <TabItem class="w-full">
      <span slot="title">Dashboard</span>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <b>Dashboard:</b>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </TabItem>
    <TabItem class="w-full">
      <span slot="title">Settings</span>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <b>Settings:</b>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </TabItem>
    <TabItem class="w-full">
      <span slot="title">Users</span>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <b>Users:</b>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </TabItem>
  </Tabs>
</div>

<div class="w-1/2">
  <Carousel {images} duration={900}>
    <a href={images[index].href} slot="slide" let:Slide let:index>
      <Slide image={images[index]} />
    </a>
  </Carousel>
</div>
