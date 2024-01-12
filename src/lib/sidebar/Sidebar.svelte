<script lang="ts">
	interface Props {
		children: any;
		asideClass?: string | undefined;
		ariaLabel?: string | undefined;
        divClass?: string | undefined;

	}
	
	import { twMerge } from 'tailwind-merge';

	let { children, 

        divClass = '', 
        asideClass = 'w-64', 
        ariaLabel, 
        ...attributes 
    } = $props<Props>();

    let divCls = twMerge('overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800', divClass)
    let asideCls = twMerge('w-64', asideClass)
    
	// export let asideClass: string = 'w-64';
	// export let nonActiveClass: string = 'flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700';
	// export let activeClass: string = 'flex items-center p-2 text-base font-normal text-gray-900 bg-gray-200 dark:bg-gray-700 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700';
	// export let ariaLabel: string = 'Sidebar';

	// setContext<SidebarType>('sidebarContext', { activeClass, nonActiveClass });
</script>

<aside {...attributes} class={asideCls} aria-label={ariaLabel}>
	<div class={twMerge(divCls)}>
        {@render children()}
    </div>
</aside>
