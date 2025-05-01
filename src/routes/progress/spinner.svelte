<script>
  import { Spinner, Button } from '$lib';
</script>

<h1 class="text-3xl my-4">Spinner</h1>

<div class="example-container">
  <h2 class="text-2xl my-4">Default spinner</h2>
  <Spinner />
</div>

<div class="example-container">
  <h2 class="text-2xl my-4">Colors</h2>
  <Spinner />
  <Spinner color="gray" />
  <Spinner color="green" />
  <Spinner color="red" />
  <Spinner color="yellow" />
  <Spinner color="pink" />
  <Spinner color="purple" />
</div>

<div class="example-container">
  <h2 class="text-2xl my-4">Sizes</h2>
  <Spinner size="4" />
  <Spinner size="6" />
  <Spinner size="8" />
</div>

<div class="example-container">
  <h2 class="text-2xl my-4">Alignment</h2>
  <div class="text-left"><Spinner /></div>
  <div class="text-center"><Spinner /></div>
  <div class="text-right"><Spinner /></div>
</div>

<div class="example-container">
  <h2 class="text-2xl my-4">Buttons</h2>
  <div class="flex flex-wrap items-center gap-2">
    <Button>
      <Spinner class="me-3" size="4" color="blue" />
      Loading ...
    </Button>
    <Button outline color="gray">
      <Spinner class="me-3" size="4" />
      Loading ...
    </Button>
  </div>
</div>

<style>
  .example-container {
    margin-bottom: 2rem;
    padding: 1rem;
    border: 1px solid #e5e7eb;
    border-radius: 0.5rem;
  }
</style>