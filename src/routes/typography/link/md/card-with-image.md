<div class="flex flex-col space-y-4">
  <Card
    img={{ src: '/images/image-1.webp', alt: 'my image' }}
    reverse={vCard}
  >
    <h5
      class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
    >
      Noteworthy technology acquisitions
    </h5>
    <p
      class="mb-3 font-normal leading-tight text-gray-700 dark:text-gray-400"
    >
      Here are the biggest enterprise technology acquisitions of so far, in
      reverse chronological order.
    </p>
    <Button>
      Read more <ArrowRightOutline class="ms-2 h-3.5 w-3.5 text-white" />
    </Button>
  </Card>
  <Toggle bind:checked={vCard} spanClass="italic dark:text-gray-500"
    >Reverse: {vCard}</Toggle
  >
</div>