<script lang="ts">
  import classNames from 'classnames';
  export let divClass =
    'rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6';

  // the source of the example, if you want it
  //   export let src;

  // all meta tags of the code block
  export let meta;

  function hack(node: HTMLElement) {
    node.parentElement.classList.add('w-full');
  }
</script>

<div use:hack class={classNames(divClass, meta.class.split('_'))}>
  <slot name="example" />
</div>
<div class="code">
  <pre class="language-svelte"><slot name="code" /></pre>
</div>
