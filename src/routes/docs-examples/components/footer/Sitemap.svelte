<script lang="ts">
  import { Footer, FooterLinkGroup, FooterLink, FooterIcon, FooterCopyright } from "flowbite-svelte";
  import { FacebookSolid, GithubSolid, DiscordSolid, TwitterSolid } from "flowbite-svelte-icons";
  import Dribble from "$icons/Dribble.svelte";
</script>

<Footer footerType="sitemap">
  <div class="grid grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
    <div>
      <h2 class="text-heading mb-6 text-sm font-semibold uppercase">Company</h2>
      <FooterLinkGroup class="text-body">
        <FooterLink class="mb-4" href="/">About</FooterLink>
        <FooterLink class="mb-4" href="/">Careers</FooterLink>
        <FooterLink class="mb-4" href="/">Brand Center</FooterLink>
        <FooterLink class="mb-4" href="/">Blog</FooterLink>
      </FooterLinkGroup>
    </div>
    <div>
      <h2 class="text-heading mb-6 text-sm font-semibold uppercase">Help center</h2>
      <FooterLinkGroup class="text-body">
        <FooterLink class="mb-4" href="/">Discord Server</FooterLink>
        <FooterLink class="mb-4" href="/">Twitter</FooterLink>
        <FooterLink class="mb-4" href="/">Facebook</FooterLink>
        <FooterLink class="mb-4" href="/">Contact Us</FooterLink>
      </FooterLinkGroup>
    </div>
    <div>
      <h2 class="text-heading mb-6 text-sm font-semibold uppercase">Legal</h2>
      <FooterLinkGroup class="text-body">
        <FooterLink class="mb-4" href="/">Privacy Policy</FooterLink>
        <FooterLink class="mb-4" href="/">Licensing</FooterLink>
        <FooterLink class="mb-4" href="/">Terms & Conditions</FooterLink>
      </FooterLinkGroup>
    </div>
    <div>
      <h2 class="text-heading mb-6 text-sm font-semibold uppercase">Download</h2>
      <FooterLinkGroup class="text-body">
        <FooterLink class="mb-4" href="/">iOS</FooterLink>
        <FooterLink class="mb-4" href="/">Android</FooterLink>
        <FooterLink class="mb-4" href="/">Windows</FooterLink>
        <FooterLink class="mb-4" href="/">MacOS</FooterLink>
      </FooterLinkGroup>
    </div>
  </div>
  <div class="bg-neutral-secondary-soft px-4 py-6 md:flex md:items-center md:justify-between">
    <FooterCopyright class="text-body text-sm sm:text-center" href="/" by="Flowbite™" />
    <div class="mt-4 flex space-x-6 sm:justify-center md:mt-0 rtl:space-x-reverse">
      <FooterIcon href="/">
        <FacebookSolid class="text-body hover:text-heading h-5 w-5" />
      </FooterIcon>
      <FooterIcon href="/">
        <DiscordSolid class="text-body hover:text-heading h-5 w-5" />
      </FooterIcon>
      <FooterIcon href="/">
        <TwitterSolid class="text-body hover:text-heading h-5 w-5" />
      </FooterIcon>
      <FooterIcon href="/">
        <GithubSolid class="text-body hover:text-heading h-5 w-5" />
      </FooterIcon>
      <FooterIcon href="/">
        <Dribble />
      </FooterIcon>
    </div>
  </div>
</Footer>
