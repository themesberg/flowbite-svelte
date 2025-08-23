<script>
  import { Button, Progressradial } from "$lib";
  import { sineOut } from "svelte/easing";
  let progress = "45";
</script>

<div class="m-4 mx-auto max-w-7xl space-y-4 p-4">
  <Progressradial progress={65} />

  <!-- Basic with percentage shown inside -->
  <Progressradial progress="75" labelInside={true} />

  <!-- Custom size and thickness -->
  <Progressradial progress="50" size="h-40 w-40" thickness="6" />

  <!-- With animation -->
  <Progressradial progress="80" animate={true} tweenDuration={1500} />

  <!-- Custom color and with label -->
  <Progressradial progress="60" color="secondary" labelInside={true} animate={true} labelOutside="Download Progress" />

  <!-- With decimal precision -->
  <Progressradial progress="33.75" precision={1} labelInside={true} />

  <h2>Colors</h2>
  <div class="grid grid-cols-8">
    <Progressradial progress="65" labelOutside="default" />
    <Progressradial color="secondary" progress="65" labelOutside="secondary" />
    <Progressradial color="gray" progress="65" labelOutside="gray" />
    <Progressradial color="red" progress="65" labelOutside="red" />
    <Progressradial color="orange" progress="65" labelOutside="orange" />
    <Progressradial color="amber" progress="65" labelOutside="amber" />
    <Progressradial color="yellow" progress="65" labelOutside="yellow" />
    <Progressradial color="lime" progress="65" labelOutside="lime" />
    <Progressradial color="green" progress="65" labelOutside="green" />
    <Progressradial color="emerald" progress="65" labelOutside="emerald" />
    <Progressradial color="teal" progress="65" labelOutside="teal" />
    <Progressradial color="cyan" progress="65" labelOutside="cyan" />
    <Progressradial color="sky" progress="65" labelOutside="sky" />
    <Progressradial color="blue" progress="65" labelOutside="blue" />
    <Progressradial color="indigo" progress="65" labelOutside="indigo" />
    <Progressradial color="violet" progress="65" labelOutside="violet" />
    <Progressradial color="purple" progress="65" labelOutside="purple" />
    <Progressradial color="fuchsia" progress="65" labelOutside="fuchsia" />
    <Progressradial color="pink" progress="65" labelOutside="pink" />
    <Progressradial color="rose" progress="65" labelOutside="rose" />
  </div>

  <h2>Radius</h2>
  <div class="grid grid-cols-8">
    <Progressradial progress="65" radius={10} />
    <Progressradial progress="65" radius={15} />
    <Progressradial progress="65" radius={20} />
    <Progressradial progress="65" radius={25} />
  </div>

  <h2>Thickness</h2>
  <div class="grid grid-cols-8">
    <Progressradial progress="65" />
    <Progressradial progress="65" thickness={5} />
    <Progressradial progress="65" thickness={10} />
    <Progressradial progress="65" thickness={15} />
  </div>

  <h2>Size</h2>
  <div class="grid grid-cols-8">
    <Progressradial size="w-20 h-20" />
    <Progressradial size="w-28 h-28" />
    <Progressradial size="w-32 h-32" />
    <Progressradial size="w-40 h-40" />
  </div>

  <h2>Animation</h2>
  <div class="grid grid-cols-8">
    <Progressradial {progress} animate precision={1} labelOutside="Animation" labelInside tweenDuration={1000} easing={sineOut} />
  </div>
  <Button onclick={() => (progress = `${Math.round(Math.random() * 100)}`)} class="mt-8">Randomize</Button>
</div>

<h2>Starting position</h2>
<div class="grid grid-cols-8">
  <Progressradial />
  <Progressradial progress={50} startingPosition="right" />
  <Progressradial progress={50} startingPosition="bottom" />
  <Progressradial progress={50} startingPosition="left" />
</div>
