<script lang="ts">
  import { Rating, Star, Heart, Thumbup, AdvancedRating, ScoreRating, RatingComment, Review } from '$lib';
  const headerLabel = {
    desc1: '8.7',
    desc2: 'Excellent',
    desc3: '376 reviews',
    link: {
      label: 'Read all reviews',
      url: '/'
    }
  };

  let comment = {
    id: '1',
    user: {
      name: 'Jese Leos',
      img: {
        src: '/images/profile-picture-2.webp',
        alt: 'Jese Leos'
      },
      joined: 'Joined on August 2014'
    },
    total: 5,
    rating: 4.5,
    heading: 'Thinking to buy another one!',
    address: 'the UK',
    datetime: '2022-03-25'
  };

  import { LandmarkSolid, CalendarMonthSolid, UsersGroupOutline, ThumbsUpSolid, ThumbsDownSolid } from 'flowbite-svelte-icons';
  let review = {
    name: 'Jese Leos',
    imgSrc: '/images/profile-picture-2.webp',
    imgAlt: 'jese leos',
    address: 'United States',
    reviewDate: 'January 20, 2022',
    title: 'Spotless, good appliances, excellent layout, host was genuinely nice and helpful.',
    rating: 8.79,
    item1: 'Apartament with City View',
    item2: '3 nights December 2021',
    item3: 'Family'
  };
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  import H3 from '../../utils/H3.svelte';
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<H1>Rating</H1>

<H2>Setup</H2>
<HighlightCompo code={modules['./md/setup.md'] as string} />

<H2>Default rating</H2>
<CodeWrapper>
  <Rating total={5} size={30} rating={1.4} />
  <Rating total={5} size={30} rating={4.66} />
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/default-rating.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Star</H2>
<CodeWrapper innerClass="flex gap-2">
  <Star size={30} id="0" fillPercent={0} />
  <Star size={30} id="10" fillPercent={10} />
  <Star size={30} id="20" fillPercent={20} />
  <Star size={30} id="30" fillPercent={30} />
  <Star size={30} id="40" fillPercent={40} />
  <Star size={30} id="50" fillPercent={50} />
  <Star size={30} id="60" fillPercent={60} />
  <Star size={30} id="70" fillPercent={70} />
  <Star size={30} id="80" fillPercent={80} />
  <Star size={30} id="90" fillPercent={90} />
  <Star size={30} id="100" fillPercent={100} />
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/star.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Rating with text</H2>
<CodeWrapper>
  <Rating total={5} rating={3.4}>
    {#snippet text()}
      <p class="ms-2 pt-4 text-sm font-medium text-gray-500 dark:text-gray-400">3.4 out of 5</p>
    {/snippet}
  </Rating>
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/rating-with-text.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Rating count</H2>
<CodeWrapper>
  <Rating count rating={4.95}>
    <span class="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400"></span>
    <a href="/" class="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">73 reviews</a>
  </Rating>
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/rating-count.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Icon size and color</H2>
<H3>Size and color</H3>
<CodeWrapper>
  <Rating total={5} rating={3.3} Icon={Heart} />
  <Rating total={10} rating={7.6} Icon={Heart} />
  <Rating total={5} rating={4.7} Icon={Thumbup} />
  <Rating total={10} rating={8.2} Icon={Thumbup} />
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/size-and-color.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>AdvancedRating component</H2>
<CodeWrapper>
  <AdvancedRating
    ratings={[
      { label: '5 star', rating: 70 },
      { label: '4 star', rating: 17 },
      { label: '3 star', rating: 8 },
      { label: '2 star', rating: 4 },
      { label: '1 star', rating: 1 }
    ]}
  >
    {#snippet rating()}
      <Rating total={5} rating={3.72}>
        {#snippet text()}
          <p class="ms-2 pt-4 text-sm font-medium text-gray-500 dark:text-gray-400">3.72 out of 5</p>
        {/snippet}
      </Rating>
    {/snippet}
    {#snippet globalText()}
      <p class="mt-2 text-sm font-medium text-gray-500 dark:text-gray-400">1,745 global ratings</p>
    {/snippet}
  </AdvancedRating>
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/advancedrating-component.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Different icon</H2>
<CodeWrapper>
  <AdvancedRating
    ratings={[
      { label: '5 star', rating: 70 },
      { label: '4 star', rating: 17 },
      { label: '3 star', rating: 8 },
      { label: '2 star', rating: 4 },
      { label: '1 star', rating: 1 }
    ]}
  >
    {#snippet rating()}
      <Rating total={5} rating={3.8} Icon={Thumbup}>
        {#snippet text()}
          <p class="ms-2 pt-4 text-sm font-medium text-gray-500 dark:text-gray-400">3.8 out of 5</p>
        {/snippet}
      </Rating>
    {/snippet}
    {#snippet globalText()}
      <p class="mt-2 text-sm font-medium text-gray-500 dark:text-gray-400">1,745 global ratings</p>
    {/snippet}
  </AdvancedRating>
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/different-icon.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Score rating</H2>
<CodeWrapper>
  <ScoreRating
    {headerLabel}
    ratings={[
      { label: 'Staff', rating: 8.8 },
      { label: 'Comfort', rating: 8.9 },
      { label: 'Free WiFi', rating: 8.8 },
      { label: 'Facilities', rating: 5.4 }
    ]}
    ratings2={[
      { label: 'Value for money', rating: 8.9 },
      { label: 'Cleanliness', rating: 7.0 },
      { label: 'Location', rating: 8.0 }
    ]}
  />
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/score-rating.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Rating comment</H2>
<CodeWrapper>
  <RatingComment {comment} helpfullink="/" abuselink="/">
    <p class="mb-2 font-light text-gray-500 dark:text-gray-400">This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No problems.</p>
    <p class="mb-3 font-light text-gray-500 dark:text-gray-400">It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.</p>
    <a href="/" class="mb-5 block text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Read more</a>
    {#snippet evaluation()}
      19 people found this helpful
    {/snippet}
  </RatingComment>
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/rating-comment.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Review content</H2>
<CodeWrapper>
  <Review {review}>
    <p class="mb-2 font-light text-gray-500 dark:text-gray-400">The flat was spotless, very comfortable, and the host was amazing. I highly recommend this accommodation for anyone visiting Brasov city centre. It's quite a while since we are no longer using hotel facilities but self contained places. And the main reason is poor cleanliness and staff not being trained properly. This place exceeded our expectation and will return for sure.</p>
    <p class="mb-5 font-light text-gray-500 dark:text-gray-400">It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.</p>
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
      <a href="/" class="inline-flex items-center text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
        <ThumbsUpSolid class="me-2.5 h-3.5 w-3.5 text-primary-600 dark:text-primary-500" />
        Helpful
      </a>
      <a href="/" class="group inline-flex items-center text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
        <ThumbsDownSolid class="me-2.5 h-3.5 w-3.5 text-primary-600 dark:text-primary-500" />
        Not helpful
      </a>
    </aside>
  </Review>
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/review-content.md'] as string} />
  {/snippet}
</CodeWrapper>
