<script lang="ts">
  import { Footer, FooterBrand, FooterLi, FooterUl } from '$lib';
</script>

<Footer class="rounded-none border-t border-gray-200 shadow-none dark:border-gray-600 dark:bg-gray-950" footerType="logo">
  <div class="sm:flex sm:items-center sm:justify-between">
    <FooterBrand href="https://www.codewithshin.com/" name="codewithshin.com" />
    <FooterUl class="mt-3 flex flex-wrap items-center text-sm text-gray-500 sm:mt-0 dark:text-gray-400">
      <FooterLi href="https://github.com/shinokada/svelte-5-ui-lib">Repo</FooterLi>
      <FooterLi href="/pages/about">About</FooterLi>
    </FooterUl>
  </div>
</Footer>
