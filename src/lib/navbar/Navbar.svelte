<script lang="ts">
  import type { LinkType } from '../types';
  import { page, session } from '$app/stores';
  export let siteName: string = 'Svelte Flow';
  export let logo: string = '/images/flowbite-svelte-logo-30.png';
  export let alt: string = 'Svelte Flow';
  export let textsize: string = 'text-sm';
  let barHidden: boolean = true;
  const handleClickbtn = () => {
    barHidden = !barHidden;
  };
  export let menus: LinkType[];
  export let navClass: string = 'px-2 bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700';
  const navDivClass: string = 'container flex flex-wrap justify-between items-center mx-auto';
  export let spanClass: string = 'self-center text-lg font-semibold text-gray-900 whitespace-nowrap dark:text-white';
  export let buttonClass: string = 'inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-500';
  export let liLinkClass: string = `block py-2 pr-4 pl-3  text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 dark:hover:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent ${textsize}`;
</script>

<nav class={navClass}>
  <div class={navDivClass}>
    <a href="/" class="flex">
      <img src={logo} {alt} />
      <span class={spanClass}>{siteName}</span>
    </a>
    <button on:click={handleClickbtn} type="button" class={buttonClass} aria-controls="mobile-menu-2" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" /></svg>
      <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
    </button>
    <div class:hidden={barHidden} class="hidden w-full md:block md:w-auto" id="mobile-menu">
      <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
        {#each menus as { name, href, rel }}
          <li>
            <a class:active={$page.url.pathname === href} {href} {rel} class={liLinkClass}>{name}</a>
          </li>
        {/each}
      </ul>
      {#if $session['user']}
        <slot name="user" />
      {/if}
    </div>
  </div>
</nav>

<style>
  #mobile-menu .active {
    color: #fab534;
  }
</style>
