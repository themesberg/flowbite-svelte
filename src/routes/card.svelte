<script>
  import Card from '$lib/Card/Card.svelte';
  import { HiHomeSolid } from 'svelte-icons/hi';
  import { HighlightSvelte } from 'svelte-highlight';
</script>

<div class="mx-auto flex max-w-4xl flex-col gap-8 dark:text-white">
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Default card</span>
    <Card>
      <Card class="max-w-sm">
        <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
      </Card>
      <HighlightSvelte
        code={`<Card class="max-w-sm">
  <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    Noteworthy technology acquisitions 2021
  </h5>
  <p class="font-normal text-gray-700 dark:text-gray-400">
    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
  </p>
</Card>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Card with decorative image </span>
    <Card>
      <Card class="max-w-sm" imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
        <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
      </Card>
      <HighlightSvelte
        code={`<Card class="max-w-sm" imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
  <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    Noteworthy technology acquisitions 2021
  </h5>
  <p class="font-normal text-gray-700 dark:text-gray-400">
    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
  </p>
</Card>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Horizontal card </span>
    <Card>
      <Card class="max-w-sm" imgSrc="https://flowbite.com/docs/images/blog/image-4.jpg" horizontal={true}>
        <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
      </Card>
      <HighlightSvelte
        code={`<Card class="max-w-sm" imgSrc="https://flowbite.com/docs/images/blog/image-4.jpg" horizontal={true}>
  <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    Noteworthy technology acquisitions 2021
  </h5>
  <p class="font-normal text-gray-700 dark:text-gray-400">
    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
  </p>
</Card>`}
      />
    </Card>
  </div>
</div>
