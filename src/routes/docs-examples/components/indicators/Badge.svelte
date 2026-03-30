<script lang="ts">
  import { Indicator, Avatar, Badge } from "flowbite-svelte";
</script>

<ul class="divide-default w-full max-w-sm divide-y">
  <li class="py-3 sm:py-4">
    <div class="flex items-center space-x-3 rtl:space-x-reverse">
      <Avatar src="/images/people/profile-picture-5.jpg" alt="Neil image" />
      <div class="min-w-0 flex-1">
        <p class="text-heading truncate text-sm font-semibold">Neil Sims</p>
        <p class="text-body truncate text-sm">email@flowbite.com</p>
      </div>
      <Badge color="success" class="px-2.5 py-0.5">
        <Indicator color="success" size="xs" class="me-1" />Available
      </Badge>
    </div>
  </li>
  <li class="py-3 sm:py-4">
    <div class="flex items-center space-x-3 rtl:space-x-reverse">
      <div class="shrink-0">
        <Avatar src="/images/people/profile-picture-4.jpg" alt="Bonnie image" />
      </div>
      <div class="min-w-0 flex-1">
        <p class="text-heading truncate text-sm font-semibold">Bonnie Green</p>
        <p class="text-body truncate text-sm">email@flowbite.com</p>
      </div>
      <Badge color="danger" class="px-2.5 py-0.5">
        <Indicator color="danger" size="xs" class="me-1" />Unavailable
      </Badge>
    </div>
  </li>
</ul>
