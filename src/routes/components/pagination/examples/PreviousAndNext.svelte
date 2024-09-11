<script lang="ts">
  import { PaginationItem } from '$lib';
  
  const previous = () => {
    alert('Previous btn clicked. Make a call to your server to fetch data.');
  };
  const next = () => {
    alert('Next btn clicked. Make a call to your server to fetch data.');
  };
</script>

<div class="flex flex-col items-center justify-center gap-3">
  <div class="flex space-x-3 rtl:space-x-reverse">
    <PaginationItem onclick={previous}>Previous</PaginationItem>
    <PaginationItem onclick={next}>Next</PaginationItem>
  </div>
</div>