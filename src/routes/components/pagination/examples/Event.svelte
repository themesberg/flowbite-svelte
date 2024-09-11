<script lang="ts">
  import { page } from '$app/stores';
  import { Pagination } from '$lib';

  let activeUrl = $state($page.url.searchParams.get('page'));
  let pages = $state([
    { name: '1', href: '/components/pagination?page=1', active: false },
    { name: '2', href: '/components/pagination?page=2', active: false },
    { name: '3', href: '/components/pagination?page=3', active: false },
    { name: '4', href: '/components/pagination?page=4', active: false },
    { name: '5', href: '/components/pagination?page=5', active: false }
  ]);
  const previous = () => {
    alert('Previous btn clicked. Make a call to your server to fetch data.');
  };
  const next = () => {
    alert('Next btn clicked. Make a call to your server to fetch data.');
  };
  const handleClick = () => {
    alert('Page clicked');
  };

  $effect(() => {
    pages.forEach((page) => {
      let splitUrl = page.href.split('?');
      let queryString = splitUrl.slice(1).join('?');
      const hrefParams = new URLSearchParams(queryString);
      let hrefValue = hrefParams.get('page');
      if (hrefValue === activeUrl) {
        page.active = true;
      } else {
        page.active = false;
      }
    });
    pages = pages;
  });
</script>

<div class="flex flex-col items-center justify-center gap-3">
  <Pagination {pages} {previous} {next} onclick={handleClick} />
</div>