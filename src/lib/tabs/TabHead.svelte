<script lang="ts">
  export let tabStyle: 'default' | 'full' | 'icon' | 'pill' | 'underline' | 'custom' = 'default';
  export let customDivClass: string = '';
  export let customUlClass: string = '';

  const border = 'border-b border-gray-200 dark:border-gray-700';

  const divClasses = {
    default: 'mb-4 ' + border,
    full: 'mb-4',
    icon: 'mb-4 ' + border,
    pill: 'mb-4 ',
    underline: 'mb-4 text-sm font-medium text-center text-gray-500 dark:text-gray-400 ' + border,
    custom: customDivClass
  };

  const ulClasses = {
    default: 'flex flex-wrap -mb-px',
    full: 'hidden text-sm font-medium text-center text-gray-500 rounded-lg divide-x divide-gray-200 shadow sm:flex dark:divide-gray-700 dark:text-gray-400 mb-1',
    icon: 'flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400',
    pill: 'flex flex-wrap',
    underline: 'flex flex-wrap -mb-px',
    custom: customUlClass
  };
</script>

<div class={divClasses[tabStyle]}>
  <ul class={ulClasses[tabStyle]} role="tablist">
    <slot />
  </ul>
</div>
