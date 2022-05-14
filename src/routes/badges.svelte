<script>
  import { Badge } from '$lib';

  import Card from '$lib/Card/Card.svelte';
  import { HiClockSolid, HiCheckOutline } from 'svelte-icons/hi';
  import { HighlightSvelte } from 'svelte-highlight';
</script>

<div class="mx-auto flex max-w-4xl flex-col gap-8 dark:text-white">
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Default badge</span>
    <Card>
      <div class="flex flex-wrap gap-2">
        <Badge color="blue">Default</Badge>
        <Badge color="gray">Dark</Badge>
        <Badge color="red">Red</Badge>
        <Badge color="green">Green</Badge>
        <Badge color="yellow">Yellow</Badge>
        <Badge color="indigo">Indigo</Badge>
        <Badge color="purple">Purple</Badge>
        <Badge color="pink">Pink</Badge>
      </div>
      <HighlightSvelte
        code={`<div class="flex flex-wrap gap-2">
  <Badge color="blue">Default</Badge>
  <Badge color="gray">Dark</Badge>
  <Badge color="red">Red</Badge>
  <Badge color="green">Green</Badge>
  <Badge color="yellow">Yellow</Badge>
  <Badge color="indigo">Indigo</Badge>
  <Badge color="purple">Purple</Badge>
  <Badge color="pink">Pink</Badge>
</div>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Large badge</span>
    <Card>
      <div class="flex flex-wrap gap-2">
        <Badge color="blue" size="sm">Default</Badge>
        <Badge color="gray" size="sm">Dark</Badge>
        <Badge color="red" size="sm">Red</Badge>
        <Badge color="green" size="sm">Green</Badge>
        <Badge color="yellow" size="sm">Yellow</Badge>
        <Badge color="indigo" size="sm">Indigo</Badge>
        <Badge color="purple" size="sm">Purple</Badge>
        <Badge color="pink" size="sm">Pink</Badge>
      </div>
      <HighlightSvelte
        code={`<div class="flex flex-wrap gap-2">
  <Badge color="blue" size="sm">Default</Badge>
  <Badge color="gray" size="sm">Dark</Badge>
  <Badge color="red" size="sm">Red</Badge>
  <Badge color="green" size="sm">Green</Badge>
  <Badge color="yellow" size="sm">Yellow</Badge>
  <Badge color="indigo" size="sm">Indigo</Badge>
  <Badge color="purple" size="sm">Purple</Badge>
  <Badge color="pink" size="sm">Pink</Badge>
</div>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Badges with icon</span>
    <Card>
      <div class="flex flex-wrap gap-2">
        <Badge icon={HiCheckOutline}>2 minutes ago</Badge>
        <Badge color="gray" icon={HiClockSolid}>3 days ago</Badge>
      </div>
      <HighlightSvelte
        code={`<div class="flex flex-wrap gap-2">
  <Badge icon={HiCheckOutline}>2 minutes ago</Badge>
  <Badge color="gray" icon={HiClockSolid}>3 days ago</Badge>
</div>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Badges with icon only</span>
    <Card>
      <div class="flex flex-wrap items-center gap-2">
        <Badge icon={HiCheckOutline} />
        <Badge color="gray" icon={HiCheckOutline} />
        <Badge size="sm" icon={HiCheckOutline} />
        <Badge color="gray" size="sm" icon={HiCheckOutline} />
      </div>
      <HighlightSvelte
        code={`<div class="flex flex-wrap items-center gap-2">
  <Badge icon={HiCheckOutline} />
  <Badge color="gray" icon={HiCheckOutline} />
  <Badge size="sm" icon={HiCheckOutline} />
  <Badge color="gray" size="sm" icon={HiCheckOutline} />
</div>`}
      />
    </Card>
  </div>
</div>
