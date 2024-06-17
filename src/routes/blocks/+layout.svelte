<script lang="ts">
  import { page } from '$app/stores';
  import { afterNavigate } from '$app/navigation';
  import { Footer, FooterBrand, FooterLinkGroup, FooterLink, FooterCopyright, FooterIcon, Navbar, NavBrand, NavHamburger, NavUl, NavLi, DarkMode, Tooltip } from 'flowbite-svelte';
  import GitHubHome from './utils/icons/GitHubHome.svelte';
  import DocBadge from './utils/DocBadge.svelte';
  import Discord from './utils/icons/Discord.svelte';
  import YoutubeHome from './utils/icons/YoutubeHome.svelte';
  import ToolbarLink from './utils/ToolbarLink.svelte';

  let version = __BLOCKS_VERSION__;

  // to fix scrolling problem
  afterNavigate((navigation) => {
    document.getElementById('svelte')?.scrollTo({ top: 0 });
  });

  let activeUrl: string;
  let activeCategory: boolean;

  $: {
    activeUrl = $page.url.pathname;
    const keywords = ['marketing', 'application', 'publisher'];
    const isActive = keywords.some((keyword) => activeUrl.includes(keyword));
    activeCategory = isActive ? true : false;
    // console.log(isActive); // Output: true or false
  }

  let divClass = 'w-full ml-auto lg:block lg:w-auto order-1 lg:order-none';
  let ulClass = 'flex flex-col py-3 my-4 lg:flex-row lg:my-0 text-sm font-medium text-gray-900 dark:text-gray-300 gap-4';
</script>

<div class="flex flex-col min-h-screen bg-white dark:bg-gray-900">
  <header class="sticky top-0 z-40 flex-none w-full mx-auto bg-white border-b border-gray-200 dark:border-gray-600 dark:bg-gray-800">
    <Navbar color="default" fluid class="flex items-center justify-between w-full mx-auto py-1.5 px-4" let:hidden let:toggle>
      <NavBrand href="/">
        <img src="/images/flowbite-svelte-icon-logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"> Flowbite Svelte Blocks </span>
      </NavBrand>
      <NavUl {hidden} {divClass} {ulClass} {activeUrl} nonActiveClass="md:!pl-3 md:!py-2 lg:!pl-0 text-gray-700 hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 dark:text-gray-400 lg:dark:text-white lg:dark:hover:text-primary-700 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent" activeClass="md:!pl-3 md:!py-2 lg:!pl-0 text-white bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:dark:text-primary-700 dark:bg-primary-600 lg:dark:bg-transparent cursor-default">
        <NavLi class="lg:px-2 lg:mb-0" href="/blocks">Blocks</NavLi>
        <NavLi href="/blocks/pages/quickstart">Quickstart</NavLi>
        <NavLi href="/">Flowbite Svelte</NavLi>
        <NavLi href="/icons/svelte-4">Icons</NavLi>
        <NavLi href="/admin-dashboard">Dashboard</NavLi>
      </NavUl>
      <div class="flex items-center ml-auto">
        <ToolbarLink class="hidden sm:inline-block dark:hover:text-white hover:text-gray-900" name="View on GitHub" href="https://github.com/themesberg/flowbite-svelte-blocks">
          <GitHubHome /></ToolbarLink>
        <ToolbarLink class="hidden xl:inline-block dark:hover:text-white hover:text-gray-900" name="Join community on Discord" href="https://discord.gg/4eeurUVvTy"><Discord /></ToolbarLink>
        <ToolbarLink class="hidden xl:inline-block dark:hover:text-white hover:text-gray-900" name="Subscribe to YouTube channel" href="https://www.youtube.com/channel/UC_Ms4V2kYDsh7F_CSsHyQ6A">
          <YoutubeHome />
        </ToolbarLink>
        <DarkMode size="lg" class="inline-block dark:hover:text-white hover:text-gray-900" />
        <Tooltip class="dark:bg-gray-900" placement="bottom-end">Toggle dark mode</Tooltip>
      </div>
      <a href="https://www.npmjs.com/package/flowbite-svelte-blocks" class="hidden sm:block">
        <DocBadge large class="ml-2 xl:ml-6 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-800 dark:hover:text-white">
          v{version}
        </DocBadge>
      </a>

      <NavHamburger on:click={toggle} btnClass="ml-3 m-0 lg:hidden" />
    </Navbar>
  </header>
  <main class="grow">
    <slot />
  </main>
</div>

<aside class="py-16 bg-gray-50 lg:py-20 dark:bg-gray-800">
  <div class="px-4 mx-auto max-w-8xl">
    <h2 class="mb-4 text-4xl font-bold tracking-tight text-gray-900 md:font-extrabold lg:leading-none dark:text-white md:text-center lg:mb-7">Sign up for our newsletter</h2>
    <p class="mb-6 text-base text-gray-500 md:mb-10 dark:text-gray-400 md:text-center md:text-xl lg:px-20 xl:px-56">Do you want to get notified when a new component is added to Flowbite? Sign up for our newsletter and you will be among the first to find out about new features, components, versions, and tools.</p>
    <div id="revue-embed" class="mb-4">
      <form action="https://app.convertkit.com/forms/4692392/subscriptions" method="post" id="revue-form" name="revue-form" class="flex max-w-xl md:mx-auto">
        <div class="w-full">
          <label for="member_email" class="hidden">Email address</label>
          <div class="relative h-full">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
            </div>
            <input type="email" id="member_email" name="member[email]" class="block w-full px-3 py-4 pl-10 text-base text-gray-900 bg-white border border-gray-200 rounded-l-xl revue-form-field focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email" required />
          </div>
        </div>
        <div class="revue-form-actions">
          <input type="submit" name="member[subscribe]" id="member_submit" class="w-full px-4 py-4 text-base font-semibold text-center text-white bg-primary-600 border border-primary-600 cursor-pointer rounded-r-xl formkit-submit hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-primary-600" value="Subscribe" />
        </div>
      </form>
    </div>
    <p class="text-sm text-gray-500 md:text-center dark:text-gray-400">
      By subscribing, you agree with Revue’s <a rel="nofollow noopener noreferrer" class="text-primary-600 dark-text-primary-400 hover:underline" href="https://www.getrevue.co/terms">Terms of Service</a>
      and
      <a class="text-blue-600 dark-text-blue-400 hover:underline" rel="nofollow noopener noreferrer" href="https://www.getrevue.co/privacy">Privacy Policy</a>.
    </p>
  </div>
</aside>

<Footer footerType="socialmedia">
  <div class="grid gap-12 lg:grid-cols-6 lg:gap-24 max-w-8xl mx-auto">
    <div class="col-span-2">
      <FooterBrand href="https://flowbite.com" src="/images/flowbite-svelte-icon-logo.svg" alt="Flowbite Logo" name="Flowbite" aClass="flex mb-6" />
      <p class="text-gray-600 dark:text-gray-400">Flowbite is an ecosystem built on top of Tailwind CSS including a component library, block sections, a Figma design system and other resources.</p>
    </div>
    <div>
      <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">Resources</h2>
      <FooterLinkGroup>
        <FooterLink liClass="mb-4" href="https://flowbite.com/">Flowbite</FooterLink>
        <FooterLink liClass="mb-4" href="https://tailwindcss.com/">Tailwind CSS</FooterLink>
        <FooterLink liClass="mb-4" href="/">Flowbite-Svelte</FooterLink>
        <FooterLink liClass="mb-4" href="/icons/svelte-4">Flowbite-Svelte-Icons</FooterLink>
      </FooterLinkGroup>
    </div>
    <div>
      <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">HELP & SUPPORT</h2>
      <FooterLinkGroup>
        <FooterLink liClass="mb-4" href="https://discord.gg/4eeurUVvTy">Discord</FooterLink>
        <FooterLink liClass="mb-4" href="https://github.com/themesberg/flowbite-svelte-blocks/issues">GitHub</FooterLink>
      </FooterLinkGroup>
    </div>
    <div>
      <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">Follow us</h2>
      <FooterLinkGroup>
        <FooterLink liClass="mb-4" href="https://github.com/themesberg/flowbite-svelte-blocks">Github</FooterLink>
        <FooterLink liClass="mb-4" href="https://discord.gg/4eeurUVvTy">Discord</FooterLink>
      </FooterLinkGroup>
    </div>
    <div>
      <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">Legal</h2>
      <FooterLinkGroup>
        <FooterLink liClass="mb-4" href="https://github.com/themesberg/flowbite-svelte-blocks/LICENSE">LICENSE</FooterLink>
      </FooterLinkGroup>
    </div>
  </div>
  <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
  <div class="flex items-center justify-center">
    <FooterCopyright href="/" by="Flowbite™" />
    <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
      <FooterIcon href="https://github.com/themesberg/flowbite-svelte-blocks" class="text-gray-400 hover:text-gray-900" icon={GitHubHome} />
    </div>
  </div>
</Footer>
