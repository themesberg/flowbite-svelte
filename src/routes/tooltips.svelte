<script>
  import { Tooltip, Button } from '$lib';

  import Card from '$lib/Card/Card.svelte';
  import { HiHomeSolid } from 'svelte-icons/hi';
  import { HighlightSvelte } from 'svelte-highlight';
</script>

<div class="mx-auto flex max-w-4xl flex-col gap-8 dark:text-white">
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Using tooltips </span>
    <Card>
      <Tooltip content="Tooltip content">
        <Button>Default tooltip</Button>
      </Tooltip>
      <HighlightSvelte
        code={`<Tooltip content="Tooltip content">
  <Button>Default tooltip</Button>
</Tooltip>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Tooltip styles</span>
    <Card>
      <div class="flex gap-2">
        <Tooltip content="Tooltip content" style="light">
          <Button>Light tooltip</Button>
        </Tooltip>
        <Tooltip content="Tooltip content" style="dark">
          <Button>Dark tooltip</Button>
        </Tooltip>
      </div>
      <HighlightSvelte
        code={`<div class="flex gap-2">
  <Tooltip content="Tooltip content" style="light">
    <Button>Light tooltip</Button>
  </Tooltip>
  <Tooltip content="Tooltip content" style="dark">
    <Button>Dark tooltip</Button>
  </Tooltip>
</div>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Placement</span>
    <Card>
      <div class="flex gap-2">
        <Tooltip content="Tooltip content" placement="top">
          <Button>Tooltip top</Button>
        </Tooltip>
        <Tooltip content="Tooltip content" placement="right">
          <Button>Tooltip right</Button>
        </Tooltip>
        <Tooltip content="Tooltip content" placement="bottom">
          <Button>Tooltip bottom</Button>
        </Tooltip>
        <Tooltip content="Tooltip content" placement="left">
          <Button>Tooltip left</Button>
        </Tooltip>
      </div>
      <HighlightSvelte
        code={`<div class="flex gap-2">
  <Tooltip content="Tooltip content" placement="top">
    <Button>Tooltip top</Button>
  </Tooltip>
  <Tooltip content="Tooltip content" placement="right">
    <Button>Tooltip right</Button>
  </Tooltip>
  <Tooltip content="Tooltip content" placement="bottom">
    <Button>Tooltip bottom</Button>
  </Tooltip>
  <Tooltip content="Tooltip content" placement="left">
    <Button>Tooltip left</Button>
  </Tooltip>
</div>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Triggering</span>
    <Card>
      <div class="flex gap-2">
        <Tooltip content="Tooltip content" trigger="hover">
          <Button>Tooltip hover</Button>
        </Tooltip>
        <Tooltip content="Tooltip content" trigger="click">
          <Button>Tooltip click</Button>
        </Tooltip>
      </div>
      <HighlightSvelte
        code={`<div class="flex gap-2">
  <Tooltip content="Tooltip content" trigger="hover">
    <Button>Tooltip hover</Button>
  </Tooltip>
  <Tooltip content="Tooltip content" trigger="click">
    <Button>Tooltip click</Button>
  </Tooltip>
</div>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Disable arrow</span>
    <Card>
      <Tooltip content="Tooltip content" arrow={false}>
        <Button>Default tooltip</Button>
      </Tooltip>
      <HighlightSvelte
        code={`<Tooltip content="Tooltip content" arrow={false}>
  <Button>Default tooltip</Button>
</Tooltip>`}
      />
    </Card>
  </div>
</div>
