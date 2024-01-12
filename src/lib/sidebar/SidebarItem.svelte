<script lang="ts">
    interface Props{
        icon?: any;
        subtext?: any;
        href?: string | undefined;
        label?: string | undefined;
        spanClass?: string | undefined;
        activeClass?: string | undefined;
        nonActiveClass?: string | undefined 
    }
   
    import { page } from '$app/stores';
    import { twMerge } from 'tailwind-merge';
  
    let { icon, subtext, href, label, spanClass, activeClass, nonActiveClass, ...attributes} = $props<Props>();
    let currentUrl = $state();
    let spanCls: string = twMerge('ms-3', spanClass);

    $effect(() => {
		currentUrl = $page.url.pathname;
	});
    let activeCls = twMerge('flex items-center p-2 text-base font-normal text-gray-900 bg-gray-200 dark:bg-gray-700 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700', activeClass)
    let inactiveCls = twMerge('flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700', nonActiveClass)
</script>
  
  <li>
    <a {...attributes} {href}
    aria-current={currentUrl === href}
    class={currentUrl === href ? activeCls : inactiveCls}
    >
      {#if icon}
        {@render icon()}
        {/if}
      <span class={spanCls}>{label}</span>
      {#if subtext}
        {@render subtext()}
      {/if}
    </a>
  </li>