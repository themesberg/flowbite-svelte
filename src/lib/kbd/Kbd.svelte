<script lang="ts">
    interface Props{
        children: any;
        class: string;
    }
    import { twMerge } from 'tailwind-merge';
    let { children, class:classname } = $props<Props>();
    let kbdCls: string = 'text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500';
  </script>
  
  <kbd class={twMerge(kbdCls, classname)}>
    {@render children()}
  </kbd>
  