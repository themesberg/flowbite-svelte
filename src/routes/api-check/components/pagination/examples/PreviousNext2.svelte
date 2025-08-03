<script>
  import { PaginationItem } from "flowbite-svelte";
  const previous = () => {
    alert("Previous btn clicked. Make a call to your server to fetch data.");
  };
  const next = () => {
    alert("Next btn clicked. Make a call to your server to fetch data.");
  };
</script>

<div class="flex space-x-3 rtl:space-x-reverse">
  <PaginationItem onclick={previous}>Previous</PaginationItem>
  <PaginationItem onclick={next}>Next</PaginationItem>
</div>
<div class="flex space-x-3 rtl:space-x-reverse">
  <PaginationItem size="large" onclick={previous}>Previous</PaginationItem>
  <PaginationItem size="large" onclick={next}>Next</PaginationItem>
</div>