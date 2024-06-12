<script>
	import {
		Footer,
		FooterCopyright,
		FooterLinkGroup,
		FooterLink,
		FooterBrand,
		FooterIcon
	} from 'flowbite-svelte';
</script>

<Footer footerType="socialmedia" class="mt-12">
	<div class="container mx-auto px-4 sm:py-12 md:px-0">
		<div class="md:flex md:justify-between">
			<div class="grid grid-cols-2 gap-8 sm:grid-cols-6 sm:gap-6">
				<div class="col-span-2 mb-6 md:mb-0">
					<FooterBrand
						href="https://flowbite.com"
						src="/images/flowbite-svelte-icon-logo.svg"
						alt="Flowbite Logo"
						name="Flowbite"
					/>
					<p class="mt-4 max-w-lg text-gray-500 dark:text-gray-400">
						Flowbite is a UI library of elements &amp; components based on Tailwind CSS that can get
						you started building websites faster and more efficiently.
					</p>
				</div>
				<div>
					<h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
						Resources
					</h2>
					<FooterLinkGroup>
						<FooterLink liClass="mb-4" href="/">Flowbite</FooterLink>
						<FooterLink liClass="mb-4" href="/">Figma</FooterLink>
						<FooterLink liClass="mb-4" href="/">Tailwind CSS</FooterLink>
						<FooterLink liClass="mb-4" href="/">Blog</FooterLink>
						<FooterLink liClass="mb-4" href="/">Blocks</FooterLink>
					</FooterLinkGroup>
				</div>
				<div>
					<h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
						Help and support
					</h2>
					<FooterLinkGroup>
						<FooterLink liClass="mb-4" href="/">GitHub Repository</FooterLink>
						<FooterLink liClass="mb-4" href="/">Flowbite Library</FooterLink>
					</FooterLinkGroup>
				</div>
				<div>
					<h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
						Follow us
					</h2>
					<FooterLinkGroup>
						<FooterLink liClass="mb-4" href="/">GitHub</FooterLink>
						<FooterLink liClass="mb-4" href="/">Twitter</FooterLink>
						<FooterLink liClass="mb-4" href="/">Facebook</FooterLink>
						<FooterLink liClass="mb-4" href="/">LinkedIn</FooterLink>
					</FooterLinkGroup>
				</div>
				<div>
					<h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Legal</h2>
					<FooterLinkGroup>
						<FooterLink liClass="mb-4" href="/">Privacy Policy</FooterLink>
						<FooterLink liClass="mb-4" href="/">Terms & Conditions</FooterLink>
						<FooterLink liClass="mb-4" href="/">EULA</FooterLink>
					</FooterLinkGroup>
				</div>
			</div>
		</div>
		<hr class="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
		<div class="sm:flex sm:items-center sm:justify-center">
			<FooterCopyright href="/" by="Flowbite™" />
		</div>
	</div>
</Footer>
