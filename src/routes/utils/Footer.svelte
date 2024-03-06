<script>
  import { Footer, FooterBrand, FooterLi, FooterUl } from '$lib';
</script>

<Footer
  footerclass="shadow-none dark:bg-gray-950 rounded-none border-t border-gray-200 dark:border-gray-600"
  footerType="logo"
>
  <div class="sm:flex sm:items-center sm:justify-between">
    <FooterBrand href="/" name="Svelt 5 UI Lib" />
    <FooterUl
      ulclass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0"
    >
      <FooterLi href="https://github.com/shinokada/svelte-5-ui-lib"
        >Repo</FooterLi
      >
      <FooterLi href="/pages/about">About</FooterLi>
    </FooterUl>
  </div>
</Footer>
