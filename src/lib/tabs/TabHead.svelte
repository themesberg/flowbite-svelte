<script lang="ts">
  export let tabStyle: 'default' | 'full' | 'icon' | 'pill' | 'underline' | 'custom';
  export let customDivClass: string = '';
  export let customUlClass: string = '';
  type classOptions = {
    [key: string]: string;
  };
  const divClasses: classOptions = {
    default: 'mb-4 border-b border-gray-200 dark:border-gray-700',
    full: 'mb-4',
    icon: 'mb-4 border-b border-gray-200 dark:border-gray-700',
    pill: 'mb-4 ',
    underline:
      'mb-4 text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700',
    custom: customDivClass
  };

  const ulClasses: classOptions = {
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
