<script>
  import '../../app.css';
  import {
    Footer,
    FooterBrand,
    FooterLinkGroup,
    FooterLink,
    FooterCopyright,
    FooterIcon,
    Navbar,
    NavBrand,
    NavHamburger,
    NavUl,
    NavLi,
    Button,
    DarkMode
  } from '$lib';
  import { Github } from './utils';
  let navClass = 'bg-white border-gray-200 py-2.5 dark:bg-gray-800';
  let navDivClass = 'flex flex-wrap justify-between items-center mx-auto max-w-8xl px-4';
  let btnClass =
    'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2 ml-2';
</script>

<main
  class="flex-auto mx-auto max-w-8xl min-w-0 lg:static lg:max-h-full lg:overflow-visible divide-y dark:divide-gray-700">
  <slot />

<aside class="py-16 bg-gray-50 lg:py-20 dark:bg-gray-800">
  <div class="px-4 mx-auto max-w-8xl">
    <h2
      class="mb-4 text-4xl font-bold tracking-tight text-gray-900 md:font-extrabold lg:leading-none dark:text-white md:text-center lg:mb-7"
    >
      Sign up for our newsletter
    </h2>
    <p
      class="mb-6 text-base text-gray-500 md:mb-10 dark:text-gray-400 md:text-center md:text-xl lg:px-20 xl:px-56"
    >
      Do you want to get notified when a new component is added to Flowbite? Sign up for our
      newsletter and you will be among the first to find out about new features, components,
      versions, and tools.
    </p>
    <div id="revue-embed" class="mb-4">
      <form
        action="https://www.getrevue.co/profile/flowbite/add_subscriber"
        method="post"
        id="revue-form"
        name="revue-form"
        class="flex max-w-xl md:mx-auto"
      >
        <div class="w-full">
          <label for="member_email" class="hidden">Email address</label>
          <div class="relative h-full">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                ><path
                  d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg
              >
            </div>
            <input
              type="email"
              id="member_email"
              name="member[email]"
              class="block w-full px-3 py-4 pl-10 text-base text-gray-900 bg-white border border-gray-200 rounded-l-xl revue-form-field focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
        </div>
        <div class="revue-form-actions">
          <input
            type="submit"
            name="member[subscribe]"
            id="member_submit"
            class="w-full px-4 py-4 text-base font-semibold text-center text-white bg-primary-600 border border-primary-600 cursor-pointer rounded-r-xl formkit-submit hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-primary-600"
            value="Subscribe"
          />
        </div>
      </form>
    </div>
    <p class="text-sm text-gray-500 md:text-center dark:text-gray-400">
      By subscribing, you agree with Revue’s <a
        rel="nofollow noopener noreferrer"
        class="text-primary-600 dark-text-primary-400 hover:underline"
        href="https://www.getrevue.co/terms">Terms of Service</a
      >
      and
      <a
        class="text-primary-600 dark-text-primary-400 hover:underline"
        rel="nofollow noopener noreferrer"
        href="https://www.getrevue.co/privacy">Privacy Policy</a
      >.
    </p>
  </div>
</aside>

<Footer
  footerType="custom"
  customClass="justify-self-end pt-16 pb-8 px-4 lg:pt-24 lg:pb-10 dark:bg-gray-900"
>
  <div class="grid gap-12 lg:grid-cols-6 lg:gap-24 max-w-8xl mx-auto">
    <div class="col-span-2">
      <FooterBrand
        href="https://flowbite.com"
        src="/images/flowbite-svelte-icon-logo.svg"
        alt="Flowbite Logo"
        name="Flowbite"
        aClass="flex mb-6"
      />
      <p class="text-gray-600 dark:text-gray-400">
        Flowbite is an ecosystem built on top of Tailwind CSS including a component library, block
        sections, a Figma design system and other resources.
      </p>
    </div>
    <div>
      <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">Resources</h2>
      <FooterLinkGroup>
        <FooterLink liClass="mb-4" href="https://flowbite.com/">Flowbite</FooterLink>
        <FooterLink liClass="mb-4" href="https://tailwindcss.com/">Tailwind CSS</FooterLink>
        <FooterLink liClass="mb-4" href="https://flowbite-svelte.com/">Flowbite-Svelte</FooterLink>
      </FooterLinkGroup>
    </div>
    <div>
      <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">
        HELP & SUPPORT
      </h2>
      <FooterLinkGroup>
        <FooterLink liClass="mb-4" href="https://discord.gg/4eeurUVvTy">Discord</FooterLink>
        <FooterLink liClass="mb-4" href="https://github.com/shinokada/flowbite-svelte-blocks/issues"
          >GitHub</FooterLink
        >
      </FooterLinkGroup>
    </div>
    <div>
      <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">Follow us</h2>
      <FooterLinkGroup>
        <FooterLink liClass="mb-4" href="https://github.com/shinokada/flowbite-svelte-blocks"
          >Gihub</FooterLink
        >
        <FooterLink liClass="mb-4" href="https://discord.gg/4eeurUVvTy">Discord</FooterLink>
      </FooterLinkGroup>
    </div>
    <div>
      <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">Legal</h2>
      <FooterLinkGroup>
        <FooterLink
          liClass="mb-4"
          href="https://github.com/shinokada/flowbite-svelte-blocks/LICENSE">LICENSE</FooterLink
        >
      </FooterLinkGroup>
    </div>
  </div>
  <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
  <div class="flex items-center justify-center">
    <FooterCopyright href="/" by="Flowbite™" />
    <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
      <FooterIcon
        href="https://github.com/shinokada/flowbite-svelte-blocks"
        class="text-gray-400 hover:text-gray-900"
        icon={Github}
      />
    </div>
  </div>
</Footer>
</main>