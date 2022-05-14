<script>
  import { Dropdown, DropdownDivider, DropdownHeader, DropdownItem } from '$lib';

  import Card from '$lib/Card/Card.svelte';
  import { HiHomeSolid } from 'svelte-icons/hi';
  import { HighlightSvelte } from 'svelte-highlight';

  // @ts-ignore
  const onClick = (num) => (e) => alert(num);
</script>

<div class="mx-auto flex max-w-4xl flex-col gap-8 dark:text-white">
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Dropdown example</span>
    <Card>
      <Dropdown label="Dropdown button">
        <DropdownItem>Dashboard</DropdownItem>
        <DropdownItem>Settings</DropdownItem>
        <DropdownItem>Earnings</DropdownItem>
        <DropdownItem>Sign out</DropdownItem>
      </Dropdown>
      <HighlightSvelte
        code={`<Dropdown label="Dropdown button">
  <DropdownItem>Dashboard</DropdownItem>
  <DropdownItem>Settings</DropdownItem>
  <DropdownItem>Earnings</DropdownItem>
  <DropdownItem>Sign out</DropdownItem>
</Dropdown>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Dropdown divider</span>
    <Card>
      <Dropdown label="Dropdown button">
        <DropdownItem>Dashboard</DropdownItem>
        <DropdownItem>Settings</DropdownItem>
        <DropdownItem>Earnings</DropdownItem>
        <DropdownDivider />
        <DropdownItem>Separated link</DropdownItem>
      </Dropdown>
      <HighlightSvelte
        code={`<Dropdown label="Dropdown button">
  <DropdownItem>Dashboard</DropdownItem>
  <DropdownItem>Settings</DropdownItem>
  <DropdownItem>Earnings</DropdownItem>
  <DropdownDivider />
  <DropdownItem>Separated link</DropdownItem>
</Dropdown>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Dropdown header</span>
    <Card>
      <Dropdown label="Dropdown button">
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
        code={`<Dropdown label="Dropdown button">
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
    <span class="text-2xl font-bold">Inline dropdown </span>
    <Card>
      <Dropdown label="Dropdown" inline={true}>
        <DropdownItem>Dashboard</DropdownItem>
        <DropdownItem>Settings</DropdownItem>
        <DropdownItem>Earnings</DropdownItem>
        <DropdownItem>Sign out</DropdownItem>
      </Dropdown>
      <HighlightSvelte
        code={`<Dropdown label="Dropdown" inline={true}>
  <DropdownItem>Dashboard</DropdownItem>
  <DropdownItem>Settings</DropdownItem>
  <DropdownItem>Earnings</DropdownItem>
  <DropdownItem>Sign out</DropdownItem>
</Dropdown>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Dropdown item on click handler</span>
    <Card>
      <Dropdown label="Dropdown">
        <DropdownItem on:click={onClick(1)}>Dashboard</DropdownItem>
        <DropdownItem on:click={onClick(2)}>Settings</DropdownItem>
        <DropdownItem on:click={onClick(3)}>Earnings</DropdownItem>
        <DropdownItem on:click={onClick(4)}>Sign out</DropdownItem>
      </Dropdown>
      <HighlightSvelte
        code={`${'<'}script${'>'}
  const onClick = (num) => (e) => alert(num);
</script>

<Dropdown label="Dropdown">
  <DropdownItem on:click={onClick(1)}>Dashboard</DropdownItem>
  <DropdownItem on:click={onClick(2)}>Settings</DropdownItem>
  <DropdownItem on:click={onClick(3)}>Earnings</DropdownItem>
  <DropdownItem on:click={onClick(4)}>Sign out</DropdownItem>
</Dropdown>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Sizing</span>
    <Card>
      <div class="flex items-center gap-4">
        <Dropdown label="Small dropdown" size="sm">
          <DropdownItem>Dashboard</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Earnings</DropdownItem>
          <DropdownItem>Sign out</DropdownItem>
        </Dropdown>
        <Dropdown label="Large dropdown" size="lg">
          <DropdownItem>Dashboard</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Earnings</DropdownItem>
          <DropdownItem>Sign out</DropdownItem>
        </Dropdown>
      </div>
      <HighlightSvelte
        code={`<div class="flex items-center gap-4">
  <Dropdown label="Small dropdown" size="sm">
    <DropdownItem>Dashboard</DropdownItem>
    <DropdownItem>Settings</DropdownItem>
    <DropdownItem>Earnings</DropdownItem>
    <DropdownItem>Sign out</DropdownItem>
  </Dropdown>
  <Dropdown label="Large dropdown" size="lg">
    <DropdownItem>Dashboard</DropdownItem>
    <DropdownItem>Settings</DropdownItem>
    <DropdownItem>Earnings</DropdownItem>
    <DropdownItem>Sign out</DropdownItem>
  </Dropdown>
</div>`}
      />
    </Card>
  </div>
</div>
