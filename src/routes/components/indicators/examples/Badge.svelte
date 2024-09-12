<script lang="ts">
  import { Avatar, Badge, Indicator } from '$lib';
</script>

<div class="flex gap-2">
  <ul class="w-full max-w-sm divide-y divide-gray-200 dark:divide-gray-700">
    <li class="py-3 sm:py-4">
      <div class="flex items-center space-x-3 rtl:space-x-reverse">
        <Avatar src="/images/profile-picture-5.webp" alt="Neil image" />
        <div class="min-w-0 flex-1">
          <p class="truncate text-sm font-semibold text-gray-900 dark:text-white">Neil Sims</p>
          <p class="truncate text-sm text-gray-500 dark:text-gray-400">email@flowbite.com</p>
        </div>
        <Badge color="green" rounded class="px-2.5 py-0.5">
          <Indicator color="green" size="xs" class="me-1" />Available
        </Badge>
      </div>
    </li>
    <li class="py-3 sm:py-4">
      <div class="flex items-center space-x-3 rtl:space-x-reverse">
        <div class="flex-shrink-0">
          <Avatar src="/images/profile-picture-4.webp" alt="Bonnie image" />
        </div>
        <div class="min-w-0 flex-1">
          <p class="truncate text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</p>
          <p class="truncate text-sm text-gray-500 dark:text-gray-400">email@flowbite.com</p>
        </div>
        <Badge color="red" rounded class="px-2.5 py-0.5">
          <Indicator color="red" size="xs" class="me-1" />Unavailable
        </Badge>
      </div>
    </li>
  </ul>
</div>
