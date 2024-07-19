<Review {review}>
  <p class="mb-2 font-light text-gray-500 dark:text-gray-400">
    The flat was spotless, very comfortable, and the host was amazing. I
    highly recommend this accommodation for anyone visiting Brasov city
    centre. It's quite a while since we are no longer using hotel facilities
    but self contained places. And the main reason is poor cleanliness and
    staff not being trained properly. This place exceeded our expectation and
    will return for sure.
  </p>
  <p class="mb-5 font-light text-gray-500 dark:text-gray-400">
    It is obviously not the same build quality as those very expensive
    watches. But that is like comparing a Citroën to a Ferrari. This watch was
    well under £100! An absolute bargain.
  </p>
  {#snippet item1()}
    <div class="flex">
      <LandmarkSolid class="mr-2 h-5 w-5" />
      {review.item1}
    </div>
  {/snippet}
  {#snippet item2()}
    <div class="flex">
      <CalendarMonthSolid class="mr-2 h-5 w-5" />
      {review.item2}
    </div>
  {/snippet}
  {#snippet item3()}
    <div class="flex">
      <UsersGroupOutline class="mr-2 h-5 w-5" />
      {review.item3}
    </div>
  {/snippet}
  <aside class="mt-3 flex items-center space-x-5 rtl:space-x-reverse">
    <a
      href="/"
      class="inline-flex items-center text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
    >
      <ThumbsUpSolid
        class="me-2.5 h-3.5 w-3.5 text-primary-600 dark:text-primary-500"
      />
      Helpful
    </a>
    <a
      href="/"
      class="group inline-flex items-center text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
    >
      <ThumbsDownSolid
        class="me-2.5 h-3.5 w-3.5 text-primary-600 dark:text-primary-500"
      />
      Not helpful
    </a>
  </aside>
</Review>