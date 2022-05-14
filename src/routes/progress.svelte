<script>
  import { Progress } from '$lib';

  import Card from '$lib/Card/Card.svelte';
  import { HighlightSvelte } from 'svelte-highlight';
</script>

<div class="mx-auto flex max-w-4xl flex-col gap-8 dark:text-white">
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Default Progress</span>
    <Card>
      <Progress progress={45} />
      <HighlightSvelte code={`<Progress progress={45} />`} />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Sizing</span>
    <Card>
      <div class="flex flex-col gap-2">
        <div class="text-base font-medium dark:text-white">Small</div>
        <Progress progress={45} size="sm" color="dark" />
        <div class="text-base font-medium dark:text-white">Default</div>
        <Progress progress={45} size="md" color="dark" />
        <div class="text-lg font-medium dark:text-white">Large</div>
        <Progress progress={45} size="lg" color="dark" />
        <div class="text-lg font-medium dark:text-white">Extra Large</div>
        <Progress progress={45} size="xl" color="dark" />
      </div>
      <HighlightSvelte
        code={`<div class="flex flex-col gap-2">
  <div class="text-base font-medium dark:text-white">Small</div>
  <Progress progress={45} size="sm" color="dark" />
  <div class="text-base font-medium dark:text-white">Default</div>
  <Progress progress={45} size="md" color="dark" />
  <div class="text-lg font-medium dark:text-white">Large</div>
  <Progress progress={45} size="lg" color="dark" />
  <div class="text-lg font-medium dark:text-white">Extra Large</div>
  <Progress progress={45} size="xl" color="dark" />
</div>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Colors</span>
    <Card>
      <div class="flex flex-col gap-2">
        <div class="text-base font-medium">Dark</div>
        <Progress progress={45} color="dark" />
        <div class="text-base font-medium text-blue-700">Blue</div>
        <Progress progress={45} color="blue" />
        <div class="text-base font-medium text-red-700">Red</div>
        <Progress progress={45} color="red" />
        <div class="text-base font-medium text-green-700">Green</div>
        <Progress progress={45} color="green" />
        <div class="text-base font-medium text-yellow-700">Yellow</div>
        <Progress progress={45} color="yellow" />
        <div class="text-base font-medium text-indigo-700">Indigo</div>
        <Progress progress={45} color="indigo" />
        <div class="text-base font-medium text-purple-700">Purple</div>
        <Progress progress={45} color="purple" />
      </div>
      <HighlightSvelte
        code={`<div class="flex flex-col gap-2">
  <div class="text-base font-medium">Dark</div>
  <Progress progress={45} color="dark" />
  <div class="text-base font-medium text-blue-700">Blue</div>
  <Progress progress={45} color="blue" />
  <div class="text-base font-medium text-red-700">Red</div>
  <Progress progress={45} color="red" />
  <div class="text-base font-medium text-green-700">Green</div>
  <Progress progress={45} color="green" />
  <div class="text-base font-medium text-yellow-700">Yellow</div>
  <Progress progress={45} color="yellow" />
  <div class="text-base font-medium text-indigo-700">Indigo</div>
  <Progress progress={45} color="indigo" />
  <div class="text-base font-medium text-purple-700">Purple</div>
  <Progress progress={45} color="purple" />
</div>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">With labels inside</span>
    <Card>
      <Progress progress={50} label="Flowbite" size="lg" />
      <HighlightSvelte code={`<Progress progress={50} label="Flowbite" size="lg" />`} />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">With labels outside</span>
    <Card>
      <Progress progress={45} label="Flowbite" labelPosition="outside" labelProgress={true} />
      <HighlightSvelte
        code={`<Progress progress={45} label="Flowbite" labelPosition="outside" labelProgress={true} />`}
      />
    </Card>
  </div>
</div>
