<script lang="ts">
  import { page } from '$app/stores';
  import { Pagination, Button, type PaginationItemProps } from '$lib';

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
  let pagenationSize: PaginationItemProps['size'] = $state('default');
  const changeSize = () => {
    pagenationSize = pagenationSize === 'large' ? 'default' : 'large';
  };

  const changeActivePage = () => {
    pages.forEach((page) => {
      let splitUrl = page.href?.split('?');
      let queryString = splitUrl?.slice(1).join('?');
      const hrefParams = new URLSearchParams(queryString);
      let hrefValue = hrefParams.get('page');
      if (hrefValue === activeUrl) {
        page.active = true;
      } else {
        page.active = false;
      }
    });
  };
  changeActivePage();
  $effect(() => {
    changeActivePage();
  });
</script>

{activeUrl}
<div class="flex flex-col items-center justify-center gap-3">
  <div class="h-12">
    <Pagination {pages} {previous} {next} size={pagenationSize} />
  </div>
  <Button onclick={changeSize}>
    {#if pagenationSize === 'default'}
      Large
    {:else}
      Default
    {/if}
  </Button>
</div>
