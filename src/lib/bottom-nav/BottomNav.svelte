<script lang="ts">
  import { setContext } from 'svelte';
  import classNames from 'classnames';
  export let position: 'static'|'fixed'|'absolute'|'relative'|'sticky' = 'fixed';
  export let navType: 'default'|'border'|'application'|'pagination'|'group'|'card'|'meeting'|'video'|'custom'='default';

  export let outerDefault: string = 'w-full z-50 border-gray-200 dark:bg-gray-700 dark:border-gray-600';
  export let innerDefault: string = 'grid h-full max-w-lg mx-auto';

  setContext('navType', navType);

  const outerDivClasses = {
    default: 'bottom-0 left-0 h-16 bg-white border-t',
    border: 'bottom-0 left-0 h-16 bg-white border-t',
    application: 'h-16 max-w-lg -translate-x-1/2 bg-white border rounded-full bottom-4 left-1/2',
    pagination: 'bottom-0 h-16 -translate-x-1/2 bg-white border-t left-1/2',
    group: 'bottom-0 -translate-x-1/2 bg-white border-t left-1/2',
    card: 'bottom-0 left-0 h-16 bg-white border-t',
    meeting: 'bottom-0 left-0 grid h-16 grid-cols-1 px-8 bg-white border-t md:grid-cols-3',
    video: 'bottom-0 left-0 grid h-24 grid-cols-1 px-8 bg-white border-t md:grid-cols-3',
    custom: ''
  }

  const innerDivClasses = {
    default: '',
    border: '',
    application: '',
    pagination: '',
    group: '',
    card: '',
    meeting: 'flex items-center justify-center mx-auto',
    video: 'flex items-center w-full',
    custom: ''
  }

  $: outerClass = classNames(
    position,
    outerDefault,
    outerDivClasses[navType],
    $$props.outerDiv
  )
  $: innerClass = classNames(
    innerDefault,
    innerDivClasses[navType],
    $$props.innerDiv
  )
</script>


<div class="{outerClass}" {...$$restProps} >
  <slot name="header" />
  <div class="{innerClass}">
      <slot />
  </div>
</div>
