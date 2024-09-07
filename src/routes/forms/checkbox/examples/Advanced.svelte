<script lang="ts">
  import { Checkbox } from '$lib';
  import React from '../../../utils/icons/React.svelte';
  import Vue from '../../../utils/icons/Vue.svelte';
  import Angular from '../../../utils/icons/Angular.svelte';
</script>

<p class="mb-5 text-lg font-medium text-gray-900 dark:text-white">Choose technology:</p>
<div class="grid w-full gap-6 md:grid-cols-3">
  <Checkbox custom>
    <div class="w-full cursor-pointer rounded-lg border-2 border-gray-200 bg-white p-5 font-normal text-gray-500 hover:bg-gray-50 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-gray-300">
      <React />
      <div class="w-full text-lg font-semibold">React Js</div>
      <div class="w-full text-sm">A JavaScript library for building user interfaces.</div>
    </div>
  </Checkbox>
  <Checkbox custom>
    <div class="w-full cursor-pointer rounded-lg border-2 border-gray-200 bg-white p-5 font-normal text-gray-500 hover:bg-gray-50 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-gray-300">
      <Vue />
      <div class="w-full text-lg font-semibold">Vue Js</div>
      <div class="w-full text-sm">Vue.js is an model–view front end JavaScript framework.</div>
    </div>
  </Checkbox>
  <Checkbox custom>
    <div class="w-full cursor-pointer rounded-lg border-2 border-gray-200 bg-white p-5 font-normal text-gray-500 hover:bg-gray-50 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-gray-300">
      <Angular />
      <div class="w-full text-lg font-semibold">Angular</div>
      <div class="w-full text-sm">A TypeScript-based web application framework.</div>
    </div>
  </Checkbox>
</div>