<script>
  import Button from '$lib/buttons/Button.svelte';
  import CopyCliboardInput from '../utils/CopyCliboardInput.svelte';
  import ArrowRight from '../utils/icons/ArrowRight.svelte';
</script>

<div class="flex flex-col items-center p-4 sm:p-8 lg:p-24 bg-gray-50 dark:bg-gray-800">
  <div class="flex flex-col items-center gap-8">
    <div class="flex flex-col items-center gap-4">
      <div class="flex flex-col flex-start gap-4">
        <h3
          class="tracking-tight text-3xl lg:text-4xl font-extrabold text-center text-gray-900 dark:text-white">
          Get started
        </h3>
        <p class="max-w-2xl text-lg text-center">
          Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign
          up with your email.
        </p>
      </div>
      <div class="mt-4 md:mt-5 sm:flex justify-center sm:justify-start1 w-full">
        <div class="flex flex-col sm:flex-row mx-0 gap-4 sm:gap-6 items-center max-w-2xl">
          <CopyCliboardInput class="bg-white md:!w-80" />
          <Button
            size="lg"
            class="gap-2 sm:max-w-sm w-full md:w-fit whitespace-nowrap hover:bg-primary-800"
            href="/docs/components/accordion"
            color="primary">
            See our docs <ArrowRight />
          </Button>
        </div>
      </div>
    </div>
  </div>
</div>
