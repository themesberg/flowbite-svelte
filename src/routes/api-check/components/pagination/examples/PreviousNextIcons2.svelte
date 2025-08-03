<script>
  import { PaginationItem } from "flowbite-svelte";
  import { ArrowLeftOutline, ArrowRightOutline } from "flowbite-svelte-icons";
  const previous = () => {
    alert("Previous btn clicked. Make a call to your server to fetch data.");
  };
  const next = () => {
    alert("Next btn clicked. Make a call to your server to fetch data.");
  };
</script>

<div class="flex space-x-3 rtl:space-x-reverse">
  <PaginationItem class="flex items-center" onclick={previous}>
    <ArrowLeftOutline class="me-2 h-3.5 w-3.5" />
    Previous
  </PaginationItem>
  <PaginationItem class="flex items-center" onclick={next}>
    Next
    <ArrowRightOutline class="ms-2 h-3.5 w-3.5" />
  </PaginationItem>
</div>
<div class="flex space-x-3 rtl:space-x-reverse">
  <PaginationItem size="large" class="flex items-center" onclick={previous}>
    <ArrowLeftOutline class="me-2 h-5 w-5" />
    Previous
  </PaginationItem>
  <PaginationItem size="large" class="flex items-center" onclick={next}>
    Next
    <ArrowRightOutline class="ms-2 h-5 w-5" />
  </PaginationItem>
</div>