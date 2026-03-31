<script lang="ts">
  import { Checkbox } from "flowbite-svelte";
  import React from "$icons/React.svelte";
  import Vue from "$icons/Vue.svelte";
  import Angular from "$icons/Angular.svelte";
</script>

<p class="text-heading mb-5 text-lg font-medium">Choose technology:</p>
<div class="grid w-full gap-6 md:grid-cols-3">
  <Checkbox custom>
    <div
      class="peer-checked:border-fg-brand border-default bg-neutral-primary-soft text-body peer-checked:text-heading hover:bg-neutral-primary-medium hover:text-heading w-full cursor-pointer rounded-lg border-2 p-5 font-normal"
    >
      <React />
      <div class="w-full text-lg font-semibold">React Js</div>
      <div class="w-full text-sm">A JavaScript library for building user interfaces.</div>
    </div>
  </Checkbox>
  <Checkbox custom>
    <div
      class="peer-checked:border-fg-brand border-default bg-neutral-primary-soft text-body peer-checked:text-heading hover:bg-neutral-primary-medium hover:text-heading w-full cursor-pointer rounded-lg border-2 p-5 font-normal"
    >
      <Vue />
      <div class="w-full text-lg font-semibold">Vue Js</div>
      <div class="w-full text-sm">Vue.js is an model–view front end JavaScript framework.</div>
    </div>
  </Checkbox>
  <Checkbox custom>
    <div
      class="peer-checked:border-fg-brand border-default bg-neutral-primary-soft text-body peer-checked:text-heading hover:bg-neutral-primary-medium hover:text-heading w-full cursor-pointer rounded-lg border-2 p-5 font-normal"
    >
      <Angular />
      <div class="w-full text-lg font-semibold">Angular</div>
      <div class="w-full text-sm">A TypeScript-based web application framework.</div>
    </div>
  </Checkbox>
</div>
