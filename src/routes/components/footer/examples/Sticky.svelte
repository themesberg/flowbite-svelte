<script lang="ts">
  import { Footer, FooterCopyright, FooterUl, FooterLi, Skeleton, ImagePlaceholder, TextPlaceholder } from '$lib';
</script>

<div class="relative p-6">
  <div style="height:300px;" class="overflow-scroll">
    <Skeleton class="my-8" />
    <ImagePlaceholder class="my-8" />
    <TextPlaceholder class="my-8" />
  </div>
  <Footer footerType="sticky" class="absolute">
    <FooterCopyright href="/" by="Flowbite™" />
    <FooterUl class="mt-3 flex flex-wrap items-center text-sm text-gray-500 sm:mt-0 dark:text-gray-400">
      <FooterLi href="/">About</FooterLi>
      <FooterLi href="/">Privacy Policy</FooterLi>
      <FooterLi href="/">Licensing</FooterLi>
      <FooterLi href="/">Contact</FooterLi>
    </FooterUl>
  </Footer>
</div>
