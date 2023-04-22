<script lang="ts">
  import classNames from 'classnames';
  export let aClass: string =
    'flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white';
  export let imgClass: string = 'w-8 h-8 mr-2';
  export let src: string = '';
  export let href: string = '';
  export let alt: string = '';
</script>

<a {href} class={classNames(aClass, $$props.classA)}>
  <img class={classNames(imgClass, $$props.classImg)} {src} {alt} />
  <slot />
</a>
