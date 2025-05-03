<script>
  import { Range, Label } from "$lib";
  let minmaxValue = $state(5);
  let stepValue = $state(2.5);
</script>

<h1 class="my-4 text-3xl">Range</h1>

<p>The range component can be used as an input field to get a number from the user based on your custom selection (ie. from 1 to 100) by using a sliding animation.</p>

<h2 class="my-4 text-2xl">Range slider example</h2>

<div class="example-container my-4">
  <Label>Default range</Label>
  <Range id="range1" value={50} />
</div>

<h2 class="my-4 text-2xl">Disabled state</h2>

<div class="example-container my-4">
  <Label>Default range</Label>
  <Range id="range-disabled" disabled value={50} />
</div>

<h2 class="my-4 text-2xl">Binding value</h2>

<p>Use bind:value to bind the range input value as seen the the following examples.</p>

<h2 class="my-4 text-2xl">Min and max</h2>

<div class="example-container my-4">
  <Label>Min-max range</Label>
  <Range id="range-minmax" min="0" max="10" bind:value={minmaxValue} />
  <p>Value: {minmaxValue}</p>
</div>

<h2 class="my-4 text-2xl">Steps</h2>

<div class="example-container my-4">
  <Label>Range steps</Label>
  <Range id="range-steps" min="0" max="5" bind:value={stepValue} step="0.5" />
  <p>Value: {stepValue}</p>
</div>

<h2 class="my-4 text-2xl">Sizes</h2>

<div class="example-container my-4 space-y-6">
  <Label>Small range</Label>
  <Range id="small-range" size="sm" value={50} />
  <Label>Default range</Label>
  <Range id="default-range" size="md" value={50} />
  <Label>Large range</Label>
  <Range id="large-range" size="lg" value={50} />
</div>

<h2 class="my-4 text-2xl">Unknown attributes</h2>

<p>Since we added `...restProps` to input field, you can contain the props which are not declared with export. It will pass down other unknown attributes to an element in a component.</p>
