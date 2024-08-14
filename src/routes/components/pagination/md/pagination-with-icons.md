<Pagination {pages} {previous} {next}>
  {#snippet prevContent()}
    <span class="sr-only">Previous</span>
    <ChevronLeftOutline class="h-5 w-5" />
  {/snippet}
  {#snippet nextContent()}
    <span class="sr-only">Next</span>
    <ChevronRightOutline class="h-5 w-5" />
  {/snippet}
</Pagination>