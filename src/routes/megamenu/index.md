---
layout: listgroupLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
  import TableProp from '../utils/TableProp.svelte'
  import TableDefaultRow from '../utils/TableDefaultRow.svelte'
  import { Navbar, NavBrand, NavHamburger, NavUl, NavLi, MegaMenu, Breadcrumb, BreadcrumbItem } from '$lib/index'
  import { Dropdown, DropdownItem, DropdownDivider } from "$lib/index"
  import {
    Adjustments,
    UserCircle,
    InboxIn,
    CloudDownload,
    Home,
    ArrowSmRight
  } from "svelte-heros";
  import componentProps from '../props/MegaMenu.json'
  // Props table
  let items = componentProps.props
  let propHeader = ['Name', 'Type', 'Default']

  let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
  let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

  let menu = [
    {name: 'About us', href: '/about', icon: UserCircle},
    {name: 'Blog', href: '/blog', icon: UserCircle},
    {name: 'Contact us', href: '/contact', icon: UserCircle},
    {name: 'Library', href: '/library', icon: UserCircle},
    {name: 'Newsletter', href: '/news', icon: UserCircle},
    {name: 'Support Center', href: '/support', icon: UserCircle},
    {name: 'Resources', href: '/resource', icon: UserCircle},
    {name: 'Playground', href: '/play', icon: UserCircle},
    {name: 'Terms', href: '/tersm', icon: UserCircle},
    {name: 'Pro Version', href: '/pro', icon: UserCircle},
    {name: 'License', href: '/license', icon: UserCircle},
  ];


  let menu2 = [
    {name: 'Online Stores', help: "Connect with third-party tools that you're already using."},
    {name: 'Segmentation', help: "Connect with third-party tools that you're already using."},
    {name: 'Marketing CRM', help: "Connect with third-party tools that you're already using."},

    {name: 'Online Stores', help: "Connect with third-party tools that you're already using."},
    {name: 'Segmentation', help: "Connect with third-party tools that you're already using."},
    {name: 'Marketing CRM', help: "Connect with third-party tools that you're already using."},

    {name: 'Audience Management', help: "Connect with third-party tools that you're already using."},
    {name: 'Creative Tools', help: "Connect with third-party tools that you're already using."},
    // {name: 'Marketing Automation', help: "Connect with third-party tools that you're already using."},
  ];

</script>

<Breadcrumb>
  <BreadcrumbItem href="/" icon={Home} variation="solid">Home</BreadcrumbItem>
  <BreadcrumbItem href="/footer">List group</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white py-8">List group</h1>

<Htwo label="Mega menu examples" />

<ExampleDiv class="flex justify-center flex-col gap-2">
    <Navbar let:hidden let:toggle>
    <NavBrand href="/">
        <img
        src="https://flowbite.com/docs/images/logo.svg"
        class="mr-3 h-6 sm:h-9"
        alt="Flowbite Logo"
        />
        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        Flowbite
        </span>
    </NavBrand>
    <NavHamburger on:click={toggle} />
    <NavUl {hidden}>
        <NavLi href="/" active={true}>Home</NavLi>
        <Dropdown label="Dropdown" placement="bottom-start" inline={true}>
        <DropdownItem>Dashboard</DropdownItem>
        <DropdownItem>Settings</DropdownItem>
        <DropdownItem>Earnings</DropdownItem>
        <DropdownDivider />
        <DropdownItem>Sign out</DropdownItem>
        </Dropdown>
        <NavLi href="/services">Services</NavLi>
        <NavLi href="/pricing">Pricing</NavLi>
        <NavLi href="/contact">Contact</NavLi>
    </NavUl>
    </Navbar>
    <MegaMenu items={menu} let:item>
        <a href={item.href}>{item.name}</a>
    </MegaMenu>
</ExampleDiv>

<ExampleDiv class="flex justify-center flex-col gap-2">
    <MegaMenu items={menu} let:item>
        <a href={item.href} class="flex items-center hover:text-blue-600 dark:hover:text-blue-500">
            <span class="sr-only">{items.term}</span>
            <svelte:component this={item.icon} class="w-4 h-4 mr-2" />
            {item.name}
        </a>
    </MegaMenu>
</ExampleDiv>

<ExampleDiv class="flex justify-center flex-col gap-2">
    <MegaMenu full items={menu2} let:item>
        <a href="/" class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 h-full">
        <div class="font-semibold dark:text-white">{item.name}</div>
        <span class="text-sm font-light text-gray-500 dark:text-gray-400">{item.help}</span>
        </a>
    </MegaMenu>
</ExampleDiv>

<ExampleDiv class="flex justify-center flex-col gap-2">
    <MegaMenu full items={menu2} let:item>
        <a href="/" class="hover:underline">
        {item.name}
        </a>
            <div slot="extra" class="mt-4 md:mt-0">
                <h2 class="mb-2 font-semibold text-gray-900 dark:text-white">Our brands</h2>
                <p class="mb-2 p-0 text-sm font-light text-gray-500 dark:text-gray-300">At Flowbite, we have a portfolio of brands that cater to a variety of preferences.</p>
                <a href="/" class="inline-flex items-center text-sm font-medium text-blue-600 hover:underline hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-700">
                    Explore our brands 
                    <span class="sr-only">Explore our brands </span>
                    <ArrowSmRight class="w-4 h-4 ml-1"/>
                </a>
            </div>
    </MegaMenu>
</ExampleDiv>
```html
<MegaMenu />
````

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.</p>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</TableProp>
