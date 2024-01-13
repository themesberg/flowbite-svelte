<script lang="ts">
    interface Props{
        children: any;
        solid?: boolean;
        navClass?: string | undefined;
        solidClass?: string | undefined;
        olClass?: string | undefined;
        ariaLabel?: string | undefined;
        class?: string | undefined;
    }
    import { twMerge } from 'tailwind-merge';
    let { children, solid = false, navClass, solidClass, olClass, ariaLabel = 'Breadcrumb', class: classname, ...attributes} = $props<Props>();
    let navCls: string = twMerge('flex',navClass);
    let solidCls: string = twMerge('flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700', solidClass);
    let olCls: string = twMerge('inline-flex items-center space-x-1 rtl:space-x-reverse md:space-x-3 rtl:space-x-reverse', olClass);
    let classNav: string = solid ? solidCls : navCls;
  </script>
  
  <nav aria-label={ariaLabel} {...attributes} class={twMerge(classNav, classname)}>
    <ol class={olCls}>
      <slot />
    </ol>
  </nav>