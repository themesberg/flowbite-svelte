<script lang="ts">
  import { Footer, FooterCopyright, FooterLinkGroup, FooterLink, FooterBrand, FooterIcon } from "flowbite-svelte";
  import { FacebookSolid, GithubSolid, DiscordSolid, TwitterSolid } from "flowbite-svelte-icons";
  import Dribble from "$icons/Dribble.svelte";
</script>

<Footer footerType="socialmedia">
  <div class="md:flex md:justify-between">
    <div class="mb-6 md:mb-0">
      <FooterBrand href="https://flowbite.com" src="/images/flowbite-svelte-icon-logo.svg" alt="Flowbite Logo" name="Flowbite" />
    </div>
    <div class="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
      <div>
        <h2 class="text-heading mb-6 text-sm font-semibold uppercase">Resources</h2>
        <FooterLinkGroup>
          <FooterLink class="mb-4" href="/">Flowbite</FooterLink>
          <FooterLink class="mb-4" href="/">Tailwind CSS</FooterLink>
        </FooterLinkGroup>
      </div>
      <div>
        <h2 class="text-heading mb-6 text-sm font-semibold uppercase">Follow us</h2>
        <FooterLinkGroup>
          <FooterLink class="mb-4" href="/">GitHub</FooterLink>
          <FooterLink class="mb-4" href="/">Discord</FooterLink>
        </FooterLinkGroup>
      </div>
      <div>
        <h2 class="text-heading mb-6 text-sm font-semibold uppercase">Legal</h2>
        <FooterLinkGroup>
          <FooterLink class="mb-4" href="/">Privacy Policy</FooterLink>
          <FooterLink class="mb-4" href="/">Terms & Conditions</FooterLink>
        </FooterLinkGroup>
      </div>
    </div>
  </div>
  <hr class="border-default my-6 sm:mx-auto lg:my-8" />
  <div class="sm:flex sm:items-center sm:justify-between">
    <FooterCopyright href="/" by="Flowbite™" />
    <div class="mt-4 flex space-x-6 sm:mt-0 sm:justify-center rtl:space-x-reverse">
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
