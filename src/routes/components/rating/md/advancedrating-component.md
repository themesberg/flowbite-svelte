<AdvancedRating
  ratings={[
    { label: '5 star', rating: 70 },
    { label: '4 star', rating: 17 },
    { label: '3 star', rating: 8 },
    { label: '2 star', rating: 4 },
    { label: '1 star', rating: 1 }
  ]}>
  {#snippet rating()}
    <Rating total={5} rating={3.72} id="example-8">
        {#snippet text()}
      <p class="text-sm font-medium text-gray-500 dark:text-gray-400 ms-2">3.72 out of 5</p>
        {/snippet}
    </Rating>
  {/snippet}
  {#snippet globalText()}
  <p class="mt-2 text-sm font-medium text-gray-500 dark:text-gray-400">1,745 global ratings</p>
  {/snippet}
</AdvancedRating>