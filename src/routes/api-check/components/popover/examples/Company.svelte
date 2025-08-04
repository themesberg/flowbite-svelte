<script>
  import { Popover, Button, Avatar } from "flowbite-svelte";
  import { GlobeOutline, HeartSolid, ThumbsUpSolid, DotsHorizontalOutline } from "flowbite-svelte-icons";
</script>

<Button>Company profile</Button>
<Popover class="w-80 text-sm">
  <div class="flex">
    <div class="me-3 shrink-0">
      <a href="/" class="block rounded-lg bg-gray-100 p-2 dark:bg-gray-700">
        <img class="h-8 w-8 rounded-full" src="/images/flowbite-svelte-icon-logo.svg" alt="Flowbite logo" />
      </a>
    </div>
    <div>
      <p class="mb-1 text-base leading-none font-semibold text-gray-900 dark:text-white">
        <a href="/" class="hover:underline">Flowbite</a>
      </p>
      <p class="mb-3 text-sm font-normal">Tech company</p>
      <p class="mb-4 text-sm font-light">Open-source library of Tailwind CSS components and Figma design system.</p>
      <ul class="text-sm font-light">
        <li class="mb-2 flex items-center">
          <GlobeOutline class="me-2 h-3.5 w-3.5" />
          <a href="/" class="text-primary-600 dark:text-primary-500 hover:underline">https://flowbite.com/</a>
        </li>
        <li class="mb-2 flex items-start">
          <HeartSolid class="me-2 h-5 w-5" />
          <span>4,567,346 people like this including 5 of your friends</span>
        </li>
      </ul>
      <div class="ms-4 mb-3 flex">
        <Avatar src="/images/profile-picture-1.webp" stacked />
        <Avatar src="/images/profile-picture-2.webp" stacked />
        <Avatar src="/images/profile-picture-3.webp" stacked />
        <Avatar stacked href="/" class="bg-gray-700 text-white hover:bg-gray-600 dark:bg-gray-700">+3</Avatar>
      </div>
      <div class="flex">
        <Button color="alternative" class="me-2 w-full">
          <ThumbsUpSolid class="me-2" />
          Like page
        </Button>
        <Button color="alternative">
          <DotsHorizontalOutline class="h-3.5 w-3.5" />
        </Button>
      </div>
    </div>
  </div>
</Popover>
