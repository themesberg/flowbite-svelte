<script lang="ts">
  import { List, DescriptionList } from '$lib';
</script>

<List tag="dl" class="divide-y divide-gray-200 text-gray-900 dark:divide-gray-700  dark:text-white">
  <div class="flex flex-col pb-3">
    <DescriptionList tag="dt" class="mb-1">Email address</DescriptionList>
    <DescriptionList tag="dd">yourname@flowbite.com</DescriptionList>
  </div>
  <div class="flex flex-col pb-3">
    <DescriptionList tag="dt" class="mb-1">Home address</DescriptionList>
    <DescriptionList tag="dd">92 Miles Drive, Newark, NJ 07103, California, USA</DescriptionList>
  </div>
  <div class="flex flex-col pb-3">
    <DescriptionList tag="dt" class="mb-1">Phone number</DescriptionList>
    <DescriptionList tag="dd">+00 123 456 789 / +12 345 678</DescriptionList>
  </div>
</List>
