<script lang="ts" >
 
  interface Props{
    children: any;
    closeNav: () => void;
    href?: string | undefined;
    linkClass?: string | undefined;
    activeClass?: string | undefined;
  }
  import { twMerge } from 'tailwind-merge'
  import { page } from '$app/stores';
	let { closeNav, href, children, linkClass, activeClass } = $props<Props>();

  let currentUrl = $state()

  $effect(()=>{
    currentUrl = $page.url.pathname
  })

	const linkStyle =
		'block py-2 px-3 text-md hover:underline text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 dark:text-white md:dark:hover:text-primary-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent';
	const activeStyle =
		'block py-2 px-3 text-md hover:underline text-white bg-primary-700 rounded md:bg-transparent md:text-primary-700 md:p-0 dark:text-white md:dark:text-primary-500';
  let linkCls = twMerge(linkStyle, linkClass)
  let activeCls = twMerge(activeStyle, activeClass)

</script>

<li>
	<a {href} onclick={closeNav} aria-current={currentUrl === href} class="{currentUrl === href ? activeCls : linkCls}">
		{@render children()}
	</a>
</li>
