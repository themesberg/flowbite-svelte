<script lang="ts">
  import { Popover, Button, Avatar } from "flowbite-svelte";
</script>

<Button>User profile</Button>
<Popover class="w-64 text-sm">
  <div class="p-3">
    <div class="mb-2 flex items-center justify-between">
      <Avatar href="/" src="/images/people/profile-picture-1.jpg" alt="Jese Leos" />
      <Button size="xs">Follow</Button>
    </div>
    <div class="text-heading text-base leading-none font-semibold">
      <a href="/">Jese Leos</a>
    </div>
    <div class="mb-3 text-sm font-normal">
      <a href="/" class="hover:underline">@jeseleos</a>
    </div>
    <div class="mb-4 text-sm">
      Open-source contributor. Building <a href="/" class="text-fg-brand hover:underline">flowbite.com</a>
      .
    </div>
    <ul class="flex text-sm">
      <li class="me-2">
        <a href="/" class="hover:underline">
          <span class="text-heading font-semibold">799</span>
          <span>Following</span>
        </a>
      </li>
      <li>
        <a href="/" class="hover:underline">
          <span class="text-heading font-semibold">3,758</span>
          <span>Followers</span>
        </a>
      </li>
    </ul>
  </div>
</Popover>
