<script>
  import { Spinner, Button } from "$lib";
</script>

<h1 class="my-4 text-3xl">Spinner</h1>

<div class="border rounded p-4 my-4">
  <h2 class="my-4 text-2xl">Default spinner</h2>
  <Spinner />
</div>

<div class="border rounded p-4 my-4">
  <h2 class="my-4 text-2xl">Colors</h2>
  <Spinner />
  <Spinner color="gray" />
  <Spinner color="green" />
  <Spinner color="red" />
  <Spinner color="yellow" />
  <Spinner color="pink" />
  <Spinner color="purple" />
</div>

<div class="border rounded p-4 my-4">
  <h2 class="my-4 text-2xl">Sizes</h2>
  <Spinner size="4" />
  <Spinner size="6" />
  <Spinner size="8" />
</div>

<div class="border rounded p-4 my-4">
  <h2 class="my-4 text-2xl">Alignment</h2>
  <div class="text-left"><Spinner /></div>
  <div class="text-center"><Spinner /></div>
  <div class="text-right"><Spinner /></div>
</div>

<div class="border rounded p-4 my-4">
  <h2 class="my-4 text-2xl">Buttons</h2>
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

