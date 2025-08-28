<script lang="ts">
  import { Drawer, Button, CloseButton } from "flowbite-svelte";
  import { InfoCircleSolid, ArrowRightOutline } from "flowbite-svelte-icons";
  let openHidden = $state(false);
</script>

<div class="text-center">
  <Button onclick={() => (openHidden = true)}>Show drawer</Button>
</div>

<Drawer bind:open={openHidden}>
  <h5 id="drawer-label" class="mb-4 inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400">
    <InfoCircleSolid class="me-2.5 h-5 w-5" />Info
  </h5>
  <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
    Supercharge your hiring by taking advantage of our <a href="/" class="text-primary-600 dark:text-primary-500 underline hover:no-underline">limited-time sale</a>
    for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board. Lorem ipsum dolor sit, amet consectetur adipisicing elit. At vel quidem sed numquam repellendus. Nihil earum veritatis quas non quisquam nisi hic ad, quo ullam iusto aliquid architecto saepe asperiores. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet ratione vero repudiandae ex? Possimus doloremque culpa excepturi, corporis natus hic perferendis dolorem dignissimos fugit nostrum ipsam sapiente voluptate eos ea! Lorem ipsum dolor sit, amet consectetur adipisicing elit. At vel quidem sed numquam repellendus. Nihil earum veritatis quas non quisquam nisi hic ad, quo ullam iusto aliquid architecto saepe asperiores. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet ratione vero repudiandae ex? Possimus doloremque culpa excepturi, corporis natus hic perferendis dolorem dignissimos fugit nostrum ipsam sapiente voluptate eos ea! Lorem ipsum dolor sit, amet
    consectetur adipisicing elit. At vel quidem sed numquam repellendus. Nihil earum veritatis quas non quisquam nisi hic ad, quo ullam iusto aliquid architecto saepe asperiores. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet ratione vero repudiandae ex? Possimus doloremque culpa excepturi, corporis natus hic perferendis dolorem dignissimos fugit nostrum ipsam sapiente voluptate eos ea! Lorem ipsum dolor sit, amet consectetur adipisicing elit. At vel quidem sed numquam repellendus. Nihil earum veritatis quas non quisquam nisi hic ad, quo ullam iusto aliquid architecto saepe asperiores. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet ratione vero repudiandae ex? Possimus doloremque culpa excepturi, corporis natus hic perferendis dolorem dignissimos fugit nostrum ipsam sapiente voluptate eos ea! Lorem ipsum dolor sit, amet consectetur adipisicing elit. At vel quidem sed numquam repellendus. Nihil earum veritatis quas non quisquam nisi hic ad, quo ullam iusto
    aliquid architecto saepe asperiores. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet ratione vero repudiandae ex? Possimus doloremque culpa excepturi, corporis natus hic perferendis dolorem dignissimos fugit nostrum ipsam sapiente voluptate eos ea!
  </p>
  <div class="grid grid-cols-2 gap-4">
    <Button color="light" href="/">Learn more</Button>
    <Button href="/" class="px-4">Get access <ArrowRightOutline class="ms-2 h-5 w-5" /></Button>
  </div>
</Drawer>
