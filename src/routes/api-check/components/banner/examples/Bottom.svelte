<script>
  import { Banner, Skeleton, ImagePlaceholder, A } from "flowbite-svelte";
  import { SalePercentSolid, ArrowRightOutline } from "flowbite-svelte-icons";
</script>

<Skeleton class="py-4" />
<ImagePlaceholder class="py-4" />

<Banner type="bottom" class="absolute">
  <p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
    <span class="me-3 inline-flex rounded-full bg-gray-200 p-1 dark:bg-gray-600">
      <SalePercentSolid class="h-4 w-4 text-gray-500 dark:text-gray-400" />
      <span class="sr-only">Discount coupon</span>
    </span>
    <span>
      Get 5% commission per sale <A href="https://flowbite.com">
        Become a partner <ArrowRightOutline class="ms-2 h-3 w-3" />
      </A>
    </span>
  </p>
</Banner>
