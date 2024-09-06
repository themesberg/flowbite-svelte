<script lang="ts">
  import { Skeleton, ImagePlaceholder, Banner } from '$lib';
</script>

<div class="relative">
  <div class="p-6">
    <Skeleton class="py-4" />
    <ImagePlaceholder class="py-4" />
  </div>
  <Banner id="signup-banner" position="absolute" bannerType="signup">
    <form action="/" class="flex w-full flex-col items-center md:flex-row">
      <label for="email" class="mb-2 me-auto flex-shrink-0 text-sm font-medium text-gray-500 md:m-0 md:mb-0 md:me-4 dark:text-gray-400">Sign up for our newsletter</label>
      <input type="email" id="email" placeholder="Enter your email" class="mb-2 block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 md:mb-0 md:me-4 md:w-64 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" required />
      <button type="submit" class="w-full rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Subscribe</button>
    </form>
  </Banner>
</div>