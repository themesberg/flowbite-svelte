<script lang="ts">
  import { Banner, Skeleton, ImagePlaceholder, A } from "flowbite-svelte";
  import { SalePercentSolid, ArrowRightOutline } from "flowbite-svelte-icons";
</script>

<Skeleton class="py-4" />
<ImagePlaceholder class="py-4" />

<Banner type="bottom" class="absolute">
  <p class="text-body flex items-center text-sm font-normal">
    <span class="bg-neutral-quaternary me-3 inline-flex rounded-full p-1">
      <SalePercentSolid class="text-body h-4 w-4" />
      <span class="sr-only">Discount coupon</span>
    </span>
    <span>
      Get 5% commission per sale <A href="https://flowbite.com">
        Become a partner <ArrowRightOutline class="ms-2 h-3 w-3" />
      </A>
    </span>
  </p>
</Banner>
