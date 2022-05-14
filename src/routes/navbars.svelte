<script>
  import {
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarLink,
    NavbarToggle,
    Dropdown,
    DropdownHeader,
    DropdownDivider,
    DropdownItem,
    Avatar,
    Button,
  } from '$lib';

  import Card from '$lib/Card/Card.svelte';
  import { HighlightSvelte } from 'svelte-highlight';
</script>

<div class="mx-auto flex max-w-4xl flex-col gap-8 dark:text-white">
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Default navbar</span>
    <Card>
      <Navbar fluid={true} rounded={true}>
        <NavbarBrand href="https://flowbite.com/">
          <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
          <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"> Flowbite </span>
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink href="/navbars" active={true}>Home</NavbarLink>
          <NavbarLink href="/navbars">About</NavbarLink>
          <NavbarLink href="/navbars">Services</NavbarLink>
          <NavbarLink href="/navbars">Pricing</NavbarLink>
          <NavbarLink href="/navbars">Contact</NavbarLink>
        </NavbarCollapse>
      </Navbar>
      <HighlightSvelte
        code={`<Navbar fluid={true} rounded={true}>
  <NavbarBrand href="https://flowbite.com/">
    <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"> Flowbite </span>
  </NavbarBrand>
  <NavbarToggle />
  <NavbarCollapse>
    <NavbarLink href="/navbars" active={true}>Home</NavbarLink>
    <NavbarLink href="/navbars">About</NavbarLink>
    <NavbarLink href="/navbars">Services</NavbarLink>
    <NavbarLink href="/navbars">Pricing</NavbarLink>
    <NavbarLink href="/navbars">Contact</NavbarLink>
  </NavbarCollapse>
</Navbar>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Navbar with CTA button </span>
    <Card>
      <Navbar fluid={true} rounded={true}>
        <NavbarBrand href="https://flowbite.com/">
          <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
          <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"> Flowbite </span>
        </NavbarBrand>
        <div class="flex md:order-2">
          <Button>Get started</Button>
          <NavbarToggle />
        </div>
        <NavbarCollapse>
          <NavbarLink href="/navbars" active={true}>Home</NavbarLink>
          <NavbarLink href="/navbars">About</NavbarLink>
          <NavbarLink href="/navbars">Services</NavbarLink>
          <NavbarLink href="/navbars">Pricing</NavbarLink>
          <NavbarLink href="/navbars">Contact</NavbarLink>
        </NavbarCollapse>
      </Navbar>
      <HighlightSvelte
        code={`<Navbar fluid={true} rounded={true}>
  <NavbarBrand href="https://flowbite.com/">
    <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"> Flowbite </span>
  </NavbarBrand>
  <div class="flex md:order-2">
    <Button>Get started</Button>
    <NavbarToggle />
  </div>
  <NavbarCollapse>
    <NavbarLink href="/navbars" active={true}>Home</NavbarLink>
    <NavbarLink href="/navbars">About</NavbarLink>
    <NavbarLink href="/navbars">Services</NavbarLink>
    <NavbarLink href="/navbars">Pricing</NavbarLink>
    <NavbarLink href="/navbars">Contact</NavbarLink>
  </NavbarCollapse>
</Navbar>`}
      />
    </Card>
  </div>
  <div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">Navbar with dropdown </span>
    <Card>
      <Navbar fluid={true} rounded={true}>
        <NavbarBrand href="https://flowbite.com/">
          <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
          <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"> Flowbite </span>
        </NavbarBrand>
        <div class="flex md:order-2">
          <Dropdown arrowIcon={false} inline={true}>
            <Avatar
              slot="label"
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded={true}
            />
            <DropdownHeader>
              <span class="block text-sm"> Bonnie Green </span>
              <span class="block truncate text-sm font-medium"> name@flowbite.com </span>
            </DropdownHeader>
            <DropdownItem>Dashboard</DropdownItem>
            <DropdownItem>Settings</DropdownItem>
            <DropdownItem>Earnings</DropdownItem>
            <DropdownDivider />
            <DropdownItem>Sign out</DropdownItem>
          </Dropdown>
          <NavbarToggle />
        </div>
        <NavbarCollapse>
          <NavbarLink href="/navbars" active={true}>Home</NavbarLink>
          <NavbarLink href="/navbars">About</NavbarLink>
          <NavbarLink href="/navbars">Services</NavbarLink>
          <NavbarLink href="/navbars">Pricing</NavbarLink>
          <NavbarLink href="/navbars">Contact</NavbarLink>
        </NavbarCollapse>
      </Navbar>
      <HighlightSvelte
        code={`<Navbar fluid={true} rounded={true}>
  <NavbarBrand href="https://flowbite.com/">
    <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"> Flowbite </span>
  </NavbarBrand>
  <div class="flex md:order-2">
    <Button>Get started</Button>
    <NavbarToggle />
  </div>
  <NavbarCollapse>
    <NavbarLink href="/navbars" active={true}>Home</NavbarLink>
    <NavbarLink href="/navbars">About</NavbarLink>
    <NavbarLink href="/navbars">Services</NavbarLink>
    <NavbarLink href="/navbars">Pricing</NavbarLink>
    <NavbarLink href="/navbars">Contact</NavbarLink>
  </NavbarCollapse>
</Navbar>`}
      />
    </Card>
  </div>
</div>
