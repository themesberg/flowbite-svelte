<script>
  import { Spinner, Button } from '$lib';

  import Card from '$lib/Card/Card.svelte';
  import { HighlightSvelte } from 'svelte-highlight';
</script>

<div class="mx-auto flex max-w-4xl flex-col gap-8 dark:text-white">
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Default spinner </span>
    <Card>
      <Spinner aria-label="Default status example" />
      <HighlightSvelte code={`<Spinner aria-label="Default status example" />`} />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Colors </span>
    <Card>
      <div class="flex flex-wrap gap-2">
        <Spinner color="blue" aria-label="Blue spinner example" />
        <Spinner color="green" aria-label="Green spinner example" />
        <Spinner color="red" aria-label="Red spinner example" />
        <Spinner color="yellow" aria-label="Yellow spinner example" />
        <Spinner color="pink" aria-label="Pink spinner example" />
        <Spinner color="purple" aria-label="Purple spinner example" />
      </div>
      <HighlightSvelte
        code={`<div class="flex flex-wrap gap-2">
  <Spinner color="blue" aria-label="Blue spinner example" />
  <Spinner color="green" aria-label="Green spinner example" />
  <Spinner color="red" aria-label="Red spinner example" />
  <Spinner color="yellow" aria-label="Yellow spinner example" />
  <Spinner color="pink" aria-label="Pink spinner example" />
  <Spinner color="purple" aria-label="Purple spinner example" />
</div>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Sizing </span>
    <Card>
      <div class="flex flex-wrap items-center gap-2">
        <Spinner aria-label="Extra small spinner example" size="xs" />
        <Spinner aria-label="Small spinner example" size="sm" />
        <Spinner aria-label="Medium sized spinner example" size="md" />
        <Spinner aria-label="Large spinner example" size="lg" />
        <Spinner aria-label="Extra large spinner example" size="xl" />
      </div>
      <HighlightSvelte
        code={`<div class="flex flex-wrap items-center gap-2">
  <Spinner aria-label="Extra small spinner example" size="xs" />
  <Spinner aria-label="Small spinner example" size="sm" />
  <Spinner aria-label="Medium sized spinner example" size="md" />
  <Spinner aria-label="Large spinner example" size="lg" />
  <Spinner aria-label="Extra large spinner example" size="xl" />
</div>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Alignment </span>
    <Card>
      <div class="flex flex-col gap-2">
        <div class="text-left">
          <Spinner aria-label="Left-aligned spinner example" />
        </div>
        <div class="text-center">
          <Spinner aria-label="Center-aligned spinner example" />
        </div>
        <div class="text-right">
          <Spinner aria-label="Right-aligned spinner example" />
        </div>
      </div>
      <HighlightSvelte
        code={`<div class="flex flex-col gap-2">
  <div class="text-left">
    <Spinner aria-label="Left-aligned spinner example" />
  </div>
  <div class="text-center">
    <Spinner aria-label="Center-aligned spinner example" />
  </div>
  <div class="text-right">
    <Spinner aria-label="Right-aligned spinner example" />
  </div>
</div>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Buttons </span>
    <Card>
      <div class="flex flex-row gap-3">
        <Button>
          <Spinner aria-label="Spinner button example" />
          <span class="pl-3"> Loading... </span>
        </Button>
        <Button color="alternative">
          <Spinner aria-label="Alternate spinner button example" />
          <span class="pl-3"> Loading... </span>
        </Button>
      </div>
      <HighlightSvelte
        code={`<div class="flex flex-row gap-3">
  <Button>
    <Spinner aria-label="Spinner button example" />
    <span class="pl-3"> Loading... </span>
  </Button>
  <Button color="alternative">
    <Spinner aria-label="Alternate spinner button example" />
    <span class="pl-3"> Loading... </span>
  </Button>
</div>`}
      />
    </Card>
  </div>
</div>
