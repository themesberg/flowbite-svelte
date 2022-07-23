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
    Home
  } from "svelte-heros";
  import componentProps from '../props/MegaMenu.json'
  // Props table
  let items = componentProps.props
  let propHeader = ['Name', 'Type', 'Default']

  let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
  let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

  let menu = [
    {name: 'About us', href: '/about'},
    {name: 'Library', href: '/library'},
    {name: 'Resources', href: '/resource'},
    {name: 'Pro Version', href: '/pro'},
    {name: 'Blog', href: '/blog'},
    {name: 'Newsletter', href: '/news'},
    {name: 'Playground', href: '/play'},
    {name: 'License', href: '/license'},
    {name: 'Contact us', href: '/contact'},
    {name: 'Support Center', href: '/support'},
    {name: 'Terms', href: '/tersm'},
  ]
</script>

<Breadcrumb>
  <BreadcrumbItem href="/" icon={Home} variation="solid">Home</BreadcrumbItem>
  <BreadcrumbItem href="/footer">List group</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white py-8">List group</h1>

<Htwo label="Mega menu examples" />

<ExampleDiv class="flex justify-center">
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
    <MegaMenu />
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
