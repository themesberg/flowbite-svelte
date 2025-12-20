<script lang="ts">
  import { Indicator, Avatar, Badge } from "flowbite-svelte";
</script>

<ul class="w-full max-w-sm divide-y divide-gray-200 dark:divide-gray-700">
  <li class="py-3 sm:py-4">
    <div class="flex items-center space-x-3 rtl:space-x-reverse">
      <Avatar src="/images/profile-picture-5.webp" alt="Neil image" />
      <div class="min-w-0 flex-1">
        <p class="truncate text-sm font-semibold text-gray-900 dark:text-white">Neil Sims</p>
        <p class="truncate text-sm text-gray-500 dark:text-gray-400">email@flowbite.com</p>
      </div>
      <Badge color="success" class="px-2.5 py-0.5">
        <Indicator color="success" size="xs" class="me-1" />Available
      </Badge>
    </div>
  </li>
  <li class="py-3 sm:py-4">
    <div class="flex items-center space-x-3 rtl:space-x-reverse">
      <div class="shrink-0">
        <Avatar src="/images/profile-picture-4.webp" alt="Bonnie image" />
      </div>
      <div class="min-w-0 flex-1">
        <p class="truncate text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</p>
        <p class="truncate text-sm text-gray-500 dark:text-gray-400">email@flowbite.com</p>
      </div>
      <Badge color="danger" class="px-2.5 py-0.5">
        <Indicator color="danger" size="xs" class="me-1" />Unavailable
      </Badge>
    </div>
  </li>
</ul>
