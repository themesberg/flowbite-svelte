<script>
  import { page } from "$app/state";
  import { Pagination } from "flowbite-svelte";

  let activeUrl = $derived(page.url.searchParams.get("page"));
  let pages = $state([
    { name: "1", href: "/docs/components/pagination?page=1", active: false },
    { name: "2", href: "/docs/components/pagination?page=2", active: false },
    { name: "3", href: "/docs/components/pagination?page=3", active: false },
    { name: "4", href: "/docs/components/pagination?page=4", active: false },
    { name: "5", href: "/docs/components/pagination?page=5", active: false }
  ]);

  $effect(() => {
    pages.forEach((page) => {
      let splitUrl = page.href?.split("?");
      let queryString = splitUrl?.slice(1).join("?");
      const hrefParams = new URLSearchParams(queryString);
      let hrefValue = hrefParams.get("page");
      if (hrefValue === activeUrl) {
        page.active = true;
      } else {
        page.active = false;
      }
    });
    pages = pages;
  });

  const previous = () => {
    alert("Previous btn clicked. Make a call to your server to fetch data.");
  };
  const next = () => {
    alert("Next btn clicked. Make a call to your server to fetch data.");
  };
</script>

<Pagination {pages} {previous} {next} />
<Pagination {pages} size="large" {previous} {next} />