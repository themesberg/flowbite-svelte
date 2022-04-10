<script>
  import 'prism-themes/themes/prism-holi-theme.css';
  import { Utterances } from '@codewithshin/svelte-utterances';
</script>

<div class="max-w-3xl mx-auto pb-8">
  <div class="container flex flex-wrap mx-auto pt-8">
    <slot />
  </div>
  <div class="container my-16 mx-auto">
    <Utterances reponame="shinokada/flowbite-svelte" theme="dark-blue" />
  </div>
</div>
