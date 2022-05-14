<script>
  import { Rating, RatingAdvanced, RatingStar } from '$lib';

  import Card from '$lib/Card/Card.svelte';
  import { HiHomeSolid } from 'svelte-icons/hi';
  import { HighlightSvelte } from 'svelte-highlight';
</script>

<div class="mx-auto flex max-w-4xl flex-col gap-8 dark:text-white">
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Default rating</span>
    <Card>
      <Rating>
        <RatingStar />
        <RatingStar />
        <RatingStar />
        <RatingStar />
        <RatingStar filled={false} />
      </Rating>
      <HighlightSvelte
        code={`<Rating>
  <RatingStar />
  <RatingStar />
  <RatingStar />
  <RatingStar />
  <RatingStar filled={false} />
</Rating>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Rating with text </span>
    <Card>
      <Rating>
        <RatingStar />
        <RatingStar />
        <RatingStar />
        <RatingStar />
        <RatingStar filled={false} />
        <p class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4.95 out of 5</p>
      </Rating>
      <HighlightSvelte
        code={`<Rating>
  <RatingStar />
  <RatingStar />
  <RatingStar />
  <RatingStar />
  <RatingStar filled={false} />
  <p class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4.95 out of 5</p>
</Rating>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Rating count </span>
    <Card>
      <Rating>
        <RatingStar />
        <p class="ml-2 text-sm font-bold text-gray-900 dark:text-white">4.95</p>
        <span class="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
        <a href="#" class="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">
          73 reviews
        </a>
      </Rating>
      <HighlightSvelte
        code={`<Rating>
  <RatingStar />
  <p class="ml-2 text-sm font-bold text-gray-900 dark:text-white">4.95</p>
  <span class="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
  <a href="#" class="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">
    73 reviews
  </a>
</Rating>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Star sizing </span>
    <Card>
      <Rating>
        <RatingStar />
        <RatingStar />
        <RatingStar />
        <RatingStar />
        <RatingStar filled={false} />
      </Rating>
      <Rating size="md">
        <RatingStar />
        <RatingStar />
        <RatingStar />
        <RatingStar />
        <RatingStar filled={false} />
      </Rating>
      <Rating size="lg">
        <RatingStar />
        <RatingStar />
        <RatingStar />
        <RatingStar />
        <RatingStar filled={false} />
      </Rating>
      <HighlightSvelte
        code={`<Rating>
  <RatingStar />
  <RatingStar />
  <RatingStar />
  <RatingStar />
  <RatingStar filled={false} />
</Rating>
<Rating size="md">
  <RatingStar />
  <RatingStar />
  <RatingStar />
  <RatingStar />
  <RatingStar filled={false} />
</Rating>
<Rating size="lg">
  <RatingStar />
  <RatingStar />
  <RatingStar />
  <RatingStar />
  <RatingStar filled={false} />
</Rating>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Advanced rating </span>
    <Card>
      <Rating>
        <RatingStar />
        <RatingStar />
        <RatingStar />
        <RatingStar />
        <RatingStar filled={false} />
        <p class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4.95 out of 5</p>
      </Rating>
      <p class="text-sm font-medium text-gray-500 dark:text-gray-400">1,745 global ratings</p>
      <RatingAdvanced percentFilled={70}>5 star</RatingAdvanced>
      <RatingAdvanced percentFilled={17}>4 star</RatingAdvanced>
      <RatingAdvanced percentFilled={8}>3 star</RatingAdvanced>
      <RatingAdvanced percentFilled={4}>2 star</RatingAdvanced>
      <RatingAdvanced percentFilled={1}>1 star</RatingAdvanced>
      <HighlightSvelte
        code={`<Rating>
  <RatingStar />
  <RatingStar />
  <RatingStar />
  <RatingStar />
  <RatingStar filled={false} />
  <p class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4.95 out of 5</p>
</Rating>
<p class="text-sm font-medium text-gray-500 dark:text-gray-400">1,745 global ratings</p>
<RatingAdvanced percentFilled={70}>5 star</RatingAdvanced>
<RatingAdvanced percentFilled={17}>4 star</RatingAdvanced>
<RatingAdvanced percentFilled={8}>3 star</RatingAdvanced>
<RatingAdvanced percentFilled={4}>2 star</RatingAdvanced>
<RatingAdvanced percentFilled={1}>1 star</RatingAdvanced>`}
      />
    </Card>
  </div>
</div>
