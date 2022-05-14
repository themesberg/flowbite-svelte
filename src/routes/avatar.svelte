<script>
  import {
    Avatar,
    AvatarGroup,
    AvatarGroupCounter,
    Dropdown,
    DropdownDivider,
    DropdownHeader,
    DropdownItem,
  } from '$lib';

  import Card from '$lib/Card/Card.svelte';
  import { HighlightSvelte } from 'svelte-highlight';
</script>

<div class="mx-auto flex max-w-4xl flex-col gap-8 dark:text-white">
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Default accordion</span>
    <Card>
      <div class="flex flex-wrap gap-2">
        <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true} />
        <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" />
      </div>
      <HighlightSvelte
        code={`<div class="flex flex-wrap gap-2">
  <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true} />
  <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" />
</div>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Bordered Avatar</span>
    <Card>
      <div class="flex flex-wrap gap-2">
        <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true} bordered={true} />
        <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" bordered={true} />
      </div>
      <HighlightSvelte
        code={`<div class="flex flex-wrap gap-2">
  <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true} bordered={true} />
  <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" bordered={true} />
</div>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Placeholder</span>
    <Card>
      <div class="flex flex-wrap gap-2">
        <Avatar />
        <Avatar rounded={true} />
      </div>
      <HighlightSvelte
        code={`<div class="flex flex-wrap gap-2">
  <Avatar />
  <Avatar rounded={true} />
</div>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Dot indicator</span>
    <Card>
      <div class="flex flex-wrap gap-2">
        <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" status="online" />
        <Avatar
          img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          rounded={true}
          status="busy"
          statusPosition="top-left"
        />
        <Avatar
          img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          status="offline"
          statusPosition="bottom-right"
        />
        <Avatar
          img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          rounded={true}
          status="away"
          statusPosition="bottom-left"
        />
      </div>
      <HighlightSvelte
        code={`<div class="flex flex-wrap gap-2">
  <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" status="online" />
  <Avatar
    img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
    rounded={true}
    status="busy"
    statusPosition="top-left"
  />
  <Avatar
    img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
    status="offline"
    statusPosition="bottom-right"
  />
  <Avatar
    img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
    rounded={true}
    status="away"
    statusPosition="bottom-left"
  />
</div>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Stacked</span>
    <Card>
      <AvatarGroup>
        <Avatar img="https://flowbite.com/docs/images/people/profile-picture-1.jpg" rounded={true} stacked={true} />
        <Avatar img="https://flowbite.com/docs/images/people/profile-picture-2.jpg" rounded={true} stacked={true} />
        <Avatar img="https://flowbite.com/docs/images/people/profile-picture-3.jpg" rounded={true} stacked={true} />
        <Avatar img="https://flowbite.com/docs/images/people/profile-picture-4.jpg" rounded={true} stacked={true} />
        <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true} stacked={true} />
      </AvatarGroup>
      <AvatarGroup>
        <Avatar img="https://flowbite.com/docs/images/people/profile-picture-1.jpg" rounded={true} stacked={true} />
        <Avatar img="https://flowbite.com/docs/images/people/profile-picture-2.jpg" rounded={true} stacked={true} />
        <Avatar img="https://flowbite.com/docs/images/people/profile-picture-3.jpg" rounded={true} stacked={true} />
        <Avatar img="https://flowbite.com/docs/images/people/profile-picture-4.jpg" rounded={true} stacked={true} />
        <AvatarGroupCounter total={99} href="#" />
      </AvatarGroup>
      <HighlightSvelte
        code={`<AvatarGroup>
  <Avatar img="https://flowbite.com/docs/images/people/profile-picture-1.jpg" rounded={true} stacked={true} />
  <Avatar img="https://flowbite.com/docs/images/people/profile-picture-2.jpg" rounded={true} stacked={true} />
  <Avatar img="https://flowbite.com/docs/images/people/profile-picture-3.jpg" rounded={true} stacked={true} />
  <Avatar img="https://flowbite.com/docs/images/people/profile-picture-4.jpg" rounded={true} stacked={true} />
  <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true} stacked={true} />
</AvatarGroup>
<AvatarGroup>
  <Avatar img="https://flowbite.com/docs/images/people/profile-picture-1.jpg" rounded={true} stacked={true} />
  <Avatar img="https://flowbite.com/docs/images/people/profile-picture-2.jpg" rounded={true} stacked={true} />
  <Avatar img="https://flowbite.com/docs/images/people/profile-picture-3.jpg" rounded={true} stacked={true} />
  <Avatar img="https://flowbite.com/docs/images/people/profile-picture-4.jpg" rounded={true} stacked={true} />
  <AvatarGroupCounter total={99} href="#" />
</AvatarGroup>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Avatar text</span>
    <Card>
      <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true}>
        <div class="space-y-1 font-medium dark:text-white">
          <div>Jese Leos</div>
          <div class="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
        </div>
      </Avatar>
      <HighlightSvelte
        code={`<Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true}>
  <div class="space-y-1 font-medium dark:text-white">
    <div>Jese Leos</div>
    <div class="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
  </div>
</Avatar>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">User dropdown</span>
    <Card>
      <Dropdown arrowIcon={false} inline={true}>
        <Avatar
          slot="label"
          alt="User settings"
          img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          rounded={true}
        />
        <DropdownHeader>
          <span class="block text-sm"> Bonnie Green </span>
          <span class="block truncate text-sm font-medium"> name@flowbite.com </span>
        </DropdownHeader>
        <DropdownItem>Dashboard</DropdownItem>
        <DropdownItem>Settings</DropdownItem>
        <DropdownItem>Earnings</DropdownItem>
        <DropdownDivider />
        <DropdownItem>Sign out</DropdownItem>
      </Dropdown>
      <HighlightSvelte
        code={`<Dropdown arrowIcon={false} inline={true}>
  <Avatar
    slot="label"
    alt="User settings"
    img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
    rounded={true}
  />
  <DropdownHeader>
    <span class="block text-sm"> Bonnie Green </span>
    <span class="block truncate text-sm font-medium"> name@flowbite.com </span>
  </DropdownHeader>
  <DropdownItem>Dashboard</DropdownItem>
  <DropdownItem>Settings</DropdownItem>
  <DropdownItem>Earnings</DropdownItem>
  <DropdownDivider />
  <DropdownItem>Sign out</DropdownItem>
</Dropdown>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Sizing</span>
    <Card>
      <div class="flex flex-wrap items-center gap-2">
        <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" size="xs" />
        <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" size="sm" />
        <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" size="md" />
        <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" size="lg" />
        <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" size="xl" />
      </div>
      <HighlightSvelte
        code={`<div class="flex flex-wrap items-center gap-2">
  <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" size="xs" />
  <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" size="sm" />
  <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" size="md" />
  <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" size="lg" />
  <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" size="xl" />
</div>`}
      />
    </Card>
  </div>
</div>
