<script>
    import { Progressbar, Button } from '$lib';
    import { sineOut } from 'svelte/easing';
    let progress = '45'
</script>

<Progressbar
  {progress}
  animate
  precision={2}
  labelOutside="With animation"
  labelInside
  tweenDuration={1500}
  easing={sineOut}
  size="h-6"
  color="yellow"
  div2class="bg-blue-600 text-blue-100 text-base font-medium text-center p-1 leading-none rounded-full"
  class="mb-8"
/>
<Progressbar
  {progress}
  labelOutside="Without animation"
  labelInside
  size="h-6"
  color="gray"
  div2class="bg-blue-600 text-blue-100 text-base font-medium text-center p-1 leading-none rounded-full"
/>
<Button onclick={() => (progress = `${Math.round(Math.random() * 100)}`)} class="mt-8">
  Randomize
</Button>