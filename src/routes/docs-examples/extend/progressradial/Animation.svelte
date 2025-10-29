<script lang="ts">
  import { Progressradial, Button } from "flowbite-svelte";
  import { sineOut } from "svelte/easing";
  let progress = $state(45);
</script>

<Progressradial {progress} animate precision={1} labelOutside="Animation" labelInside tweenDuration={1000} easing={sineOut} classes={{outside:'dark:text-white', label: "dark:text-white"}}/>
<Button onclick={() => (progress = Math.round(Math.random() * 100))} class="mx-auto mt-8 w-24">Randomize</Button>
