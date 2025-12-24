<script lang="ts">
  import { Popover, Button, Avatar } from "flowbite-svelte";
</script>

<Button>User profile</Button>
<Popover class="w-64 bg-white text-sm font-light text-gray-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400">
  <div class="p-3">
    <div class="mb-2 flex items-center justify-between">
      <Avatar href="/" src="/images/people/profile-picture-1.jpg" alt="Jese Leos" />
      <Button size="xs">Follow</Button>
    </div>
    <div class="text-base leading-none font-semibold text-gray-900 dark:text-white">
      <a href="/">Jese Leos</a>
    </div>
    <div class="mb-3 text-sm font-normal">
      <a href="/" class="hover:underline">@jeseleos</a>
    </div>
    <div class="mb-4 text-sm font-light">
      Open-source contributor. Building <a href="/" class="text-primary-600 dark:text-primary-500 hover:underline">flowbite.com</a>
      .
    </div>
    <ul class="flex text-sm font-light">
      <li class="me-2">
        <a href="/" class="hover:underline">
          <span class="font-semibold text-gray-900 dark:text-white">799</span>
          <span>Following</span>
        </a>
      </li>
      <li>
        <a href="/" class="hover:underline">
          <span class="font-semibold text-gray-900 dark:text-white">3,758</span>
          <span>Followers</span>
        </a>
      </li>
    </ul>
  </div>
</Popover>
