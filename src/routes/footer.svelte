<script>
  import { Footer, FooterBrand, FooterCopyright, FooterIcon, FooterLink, FooterLinkGroup } from '$lib';

  import Card from '$lib/Card/Card.svelte';
  import { FaDribbble, FaFacebook, FaGithub, FaInstagram, FaPiedPiper, FaTwitter } from 'svelte-icons/fa';
  import { HighlightSvelte } from 'svelte-highlight';
</script>

<div class="mx-auto flex max-w-4xl flex-col gap-8 dark:text-white">
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Default Footer</span>
    <Card>
      <Footer>
        <FooterCopyright href="#" by="Flowbite™" year={2022} />
        <FooterLinkGroup class="mt-3 flex-wrap items-center text-sm sm:mt-0">
          <FooterLink href="#">About</FooterLink>
          <FooterLink href="#">Privacy Policy</FooterLink>
          <FooterLink href="#">Licensing</FooterLink>
          <FooterLink href="#">Contact</FooterLink>
        </FooterLinkGroup>
      </Footer>
      <HighlightSvelte
        code={`<Footer>
  <FooterCopyright href="#" by="Flowbite™" year={2022} />
  <FooterLinkGroup class="mt-3 flex-wrap items-center text-sm sm:mt-0">
    <FooterLink href="#">About</FooterLink>
    <FooterLink href="#">Privacy Policy</FooterLink>
    <FooterLink href="#">Licensing</FooterLink>
    <FooterLink href="#">Contact</FooterLink>
  </FooterLinkGroup>
</Footer>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Footer with logo</span>
    <Card>
      <Footer class="flex flex-col">
        <div class="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <FooterBrand
            href="https://flowbite.com"
            src="https://flowbite.com/docs/images/logo.svg"
            alt="Flowbite Logo"
            name="Flowbite"
          />
          <FooterLinkGroup class="mt-3 flex-wrap items-center text-sm sm:mt-0">
            <FooterLink href="#">About</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Licensing</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
          </FooterLinkGroup>
        </div>
        <hr class="my-6 w-full border-gray-200 p-1 dark:border-gray-700 sm:mx-auto lg:my-8" />
        <FooterCopyright href="#" by="Flowbite™" year={2022} />
      </Footer>
      <HighlightSvelte
        code={`<Footer class="flex flex-col">
  <div class="w-full justify-between sm:flex sm:items-center sm:justify-between">
    <FooterBrand
      href="https://flowbite.com"
      src="https://flowbite.com/docs/images/logo.svg"
      alt="Flowbite Logo"
      name="Flowbite"
    />
    <FooterLinkGroup class="mt-3 flex-wrap items-center text-sm sm:mt-0">
      <FooterLink href="#">About</FooterLink>
      <FooterLink href="#">Privacy Policy</FooterLink>
      <FooterLink href="#">Licensing</FooterLink>
      <FooterLink href="#">Contact</FooterLink>
    </FooterLinkGroup>
  </div>
  <hr class="my-6 w-full border-gray-200 p-1 dark:border-gray-700 sm:mx-auto lg:my-8" />
  <FooterCopyright href="#" by="Flowbite™" year={2022} />
</Footer>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Footer with social media icons </span>
    <Card>
      <Footer class="flex flex-col">
        <div class="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <FooterBrand
              href="https://flowbite.com"
              src="https://flowbite.com/docs/images/logo.svg"
              alt="Flowbite Logo"
              name="Flowbite"
              class="m-6"
            />
          </div>
          <div class="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">About</h2>
              <FooterLinkGroup class="flex-col">
                <FooterLink class="mb-4" href="#">Flowbite</FooterLink>
                <FooterLink class="mb-4" href="#">Tailwind CSS</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Follow us</h2>
              <FooterLinkGroup class="flex-col">
                <FooterLink class="mb-4" href="#">Gihub</FooterLink>
                <FooterLink class="mb-4" href="#">Discord</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Legal</h2>
              <FooterLinkGroup class="flex-col">
                <FooterLink class="mb-4" href="#">Privacy Policy</FooterLink>
                <FooterLink class="mb-4" href="#">Terms & Conditions</FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>
        <hr class="my-6 w-full border-gray-200 p-1 dark:border-gray-700 sm:mx-auto lg:my-8" />
        <div class="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright href="#" by="Flowbite™" year={2022} />
          <div class="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon href="#" class="text-gray-400 hover:text-gray-900" icon={FaFacebook} />
            <FooterIcon href="#" class="text-gray-400 hover:text-gray-900" icon={FaInstagram} />
            <FooterIcon href="#" class="text-gray-400 hover:text-gray-900" icon={FaTwitter} />
            <FooterIcon href="#" class="text-gray-400 hover:text-gray-900" icon={FaGithub} />
            <FooterIcon href="#" class="text-gray-400 hover:text-gray-900" icon={FaDribbble} />
          </div>
        </div>
      </Footer>
      <HighlightSvelte
        code={`<Footer class="flex flex-col">
  <div class="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
    <div>
      <FooterBrand
        href="https://flowbite.com"
        src="https://flowbite.com/docs/images/logo.svg"
        alt="Flowbite Logo"
        name="Flowbite"
        class="m-6"
      />
    </div>
    <div class="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
      <div>
        <h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">About</h2>
        <FooterLinkGroup class="flex-col">
          <FooterLink class="mb-4" href="#">Flowbite</FooterLink>
          <FooterLink class="mb-4" href="#">Tailwind CSS</FooterLink>
        </FooterLinkGroup>
      </div>
      <div>
        <h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Follow us</h2>
        <FooterLinkGroup class="flex-col">
          <FooterLink class="mb-4" href="#">Gihub</FooterLink>
          <FooterLink class="mb-4" href="#">Discord</FooterLink>
        </FooterLinkGroup>
      </div>
      <div>
        <h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Legal</h2>
        <FooterLinkGroup class="flex-col">
          <FooterLink class="mb-4" href="#">Privacy Policy</FooterLink>
          <FooterLink class="mb-4" href="#">Terms & Conditions</FooterLink>
        </FooterLinkGroup>
      </div>
    </div>
  </div>
  <hr class="my-6 w-full border-gray-200 p-1 dark:border-gray-700 sm:mx-auto lg:my-8" />
  <div class="w-full sm:flex sm:items-center sm:justify-between">
    <FooterCopyright href="#" by="Flowbite™" year={2022} />
    <div class="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
      <FooterIcon href="#" class="text-gray-400 hover:text-gray-900" icon={FaFacebook} />
      <FooterIcon href="#" class="text-gray-400 hover:text-gray-900" icon={FaInstagram} />
      <FooterIcon href="#" class="text-gray-400 hover:text-gray-900" icon={FaTwitter} />
      <FooterIcon href="#" class="text-gray-400 hover:text-gray-900" icon={FaGithub} />
      <FooterIcon href="#" class="text-gray-400 hover:text-gray-900" icon={FaDribbble} />
    </div>
  </div>
</Footer>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Footer sitemap links </span>
    <Card>
      <Footer class="flex flex-col !bg-gray-800">
        <div class="grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
          <div>
            <h2 class="mb-6 text-sm font-semibold uppercase text-gray-400">Company</h2>
            <FooterLinkGroup class="flex-col">
              <FooterLink class="mb-4 text-gray-300" href="#">About</FooterLink>
              <FooterLink class="mb-4 text-gray-300" href="#">Careers</FooterLink>
              <FooterLink class="mb-4 text-gray-300" href="#">Brand Center</FooterLink>
              <FooterLink class="mb-4 text-gray-300" href="#">Blog</FooterLink>
            </FooterLinkGroup>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold uppercase text-gray-400">Download</h2>
            <FooterLinkGroup class="flex-col">
              <FooterLink class="mb-4 text-gray-300" href="#">Discord Server</FooterLink>
              <FooterLink class="mb-4 text-gray-300" href="#">Twitter</FooterLink>
              <FooterLink class="mb-4 text-gray-300" href="#">Facebook</FooterLink>
              <FooterLink class="mb-4 text-gray-300" href="#">Contact Us</FooterLink>
            </FooterLinkGroup>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold uppercase text-gray-400">Legal</h2>
            <FooterLinkGroup class="flex-col">
              <FooterLink class="mb-4 text-gray-300" href="#">Privacy Policy</FooterLink>
              <FooterLink class="mb-4 text-gray-300" href="#">Licensing</FooterLink>
              <FooterLink class="mb-4 text-gray-300" href="#">Terms & Conditions</FooterLink>
            </FooterLinkGroup>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold uppercase text-gray-400">Download</h2>
            <FooterLinkGroup class="flex-col">
              <FooterLink class="mb-4 text-gray-300" href="#">iOS</FooterLink>
              <FooterLink class="mb-4 text-gray-300" href="#">Android</FooterLink>
              <FooterLink class="mb-4 text-gray-300" href="#">Windows</FooterLink>
              <FooterLink class="mb-4 text-gray-300" href="#">MacOS</FooterLink>
            </FooterLinkGroup>
          </div>
        </div>
        <hr class="my-6 w-full border-gray-200 p-1 dark:border-gray-700 sm:mx-auto lg:my-8" />
        <div class="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright class="text-gray-300" href="#" by="Flowbite™" year={2022} />
          <div class="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon href="#" class="text-gray-400 hover:text-white" icon={FaFacebook} />
            <FooterIcon href="#" class="text-gray-400 hover:text-white" icon={FaInstagram} />
            <FooterIcon href="#" class="text-gray-400 hover:text-white" icon={FaPiedPiper} />
            <FooterIcon href="#" class="text-gray-400 hover:text-white" icon={FaGithub} />
            <FooterIcon href="#" class="text-gray-400 hover:text-white" icon={FaDribbble} />
          </div>
        </div>
      </Footer>
      <HighlightSvelte
        code={`<Footer class="flex flex-col !bg-gray-800">
  <div class="grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
    <div>
      <h2 class="mb-6 text-sm font-semibold uppercase text-gray-400">Company</h2>
      <FooterLinkGroup class="flex-col">
        <FooterLink class="mb-4 text-gray-300" href="#">About</FooterLink>
        <FooterLink class="mb-4 text-gray-300" href="#">Careers</FooterLink>
        <FooterLink class="mb-4 text-gray-300" href="#">Brand Center</FooterLink>
        <FooterLink class="mb-4 text-gray-300" href="#">Blog</FooterLink>
      </FooterLinkGroup>
    </div>
    <div>
      <h2 class="mb-6 text-sm font-semibold uppercase text-gray-400">Download</h2>
      <FooterLinkGroup class="flex-col">
        <FooterLink class="mb-4 text-gray-300" href="#">Discord Server</FooterLink>
        <FooterLink class="mb-4 text-gray-300" href="#">Twitter</FooterLink>
        <FooterLink class="mb-4 text-gray-300" href="#">Facebook</FooterLink>
        <FooterLink class="mb-4 text-gray-300" href="#">Contact Us</FooterLink>
      </FooterLinkGroup>
    </div>
    <div>
      <h2 class="mb-6 text-sm font-semibold uppercase text-gray-400">Legal</h2>
      <FooterLinkGroup class="flex-col">
        <FooterLink class="mb-4 text-gray-300" href="#">Privacy Policy</FooterLink>
        <FooterLink class="mb-4 text-gray-300" href="#">Licensing</FooterLink>
        <FooterLink class="mb-4 text-gray-300" href="#">Terms & Conditions</FooterLink>
      </FooterLinkGroup>
    </div>
    <div>
      <h2 class="mb-6 text-sm font-semibold uppercase text-gray-400">Download</h2>
      <FooterLinkGroup class="flex-col">
        <FooterLink class="mb-4 text-gray-300" href="#">iOS</FooterLink>
        <FooterLink class="mb-4 text-gray-300" href="#">Android</FooterLink>
        <FooterLink class="mb-4 text-gray-300" href="#">Windows</FooterLink>
        <FooterLink class="mb-4 text-gray-300" href="#">MacOS</FooterLink>
      </FooterLinkGroup>
    </div>
  </div>
  <hr class="my-6 w-full border-gray-200 p-1 dark:border-gray-700 sm:mx-auto lg:my-8" />
  <div class="w-full sm:flex sm:items-center sm:justify-between">
    <FooterCopyright class="text-gray-300" href="#" by="Flowbite™" year={2022} />
    <div class="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
      <FooterIcon href="#" class="text-gray-400 hover:text-white" icon={FaFacebook} />
      <FooterIcon href="#" class="text-gray-400 hover:text-white" icon={FaInstagram} />
      <FooterIcon href="#" class="text-gray-400 hover:text-white" icon={FaPiedPiper} />
      <FooterIcon href="#" class="text-gray-400 hover:text-white" icon={FaGithub} />
      <FooterIcon href="#" class="text-gray-400 hover:text-white" icon={FaDribbble} />
    </div>
  </div>
</Footer>`}
      />
    </Card>
  </div>
</div>
