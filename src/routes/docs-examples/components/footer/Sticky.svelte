<script lang="ts">
  import { Footer, FooterLinkGroup, FooterLink, ImagePlaceholder, TextPlaceholder, Skeleton, FooterCopyright } from "flowbite-svelte";
</script>

<div style="height:300px;" class="overflow-scroll pb-16">
  <Skeleton class="my-8" />
  <ImagePlaceholder class="my-8" />
  <TextPlaceholder class="my-8" />
</div>
<Footer class="absolute start-0 bottom-0 z-20 w-full border-t border-default bg-neutral-primary-soft p-4 shadow-sm md:flex md:items-center md:justify-between md:p-6">
  <FooterCopyright href="/" by="Flowbite™" year={2022} />
  <FooterLinkGroup class="mt-3 flex flex-wrap items-center text-sm text-body sm:mt-0">
    <FooterLink href="/">About</FooterLink>
    <FooterLink href="/">Privacy Policy</FooterLink>
    <FooterLink href="/">Licensing</FooterLink>
    <FooterLink href="/">Contact</FooterLink>
  </FooterLinkGroup>
</Footer>
