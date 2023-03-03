<!-- Frontmatter goes here -->
<script context="module">
  export const metadata = {
    title: 'Responsive Sidebar Layout',
    dir: 'Examples',
    description: 'Flowbite Svete Responsive sidebar layout',
    breadcrumb_title: 'Sidebar Layout'
  }
</script>

<MetaTag {breadcrumb_title} {title} {dir} {description}/>

<script>
  import { CompoDescription, Htwo, MetaTag } from '../utils'
  import { Breadcrumb, BreadcrumbItem, Heading, A, List, Li, Img } from '$lib'
  const breadcrumb_title = 'Responsive Sidebar Layout'
  const title = 'Responsive Sidebar Layout'
  const dir = 'Examples'
  const description = 'Flowbite Svete Responsive sidebar layout'
</script>

<Breadcrumb class="pt-16 py-8">
  <BreadcrumbItem href="/" home >Home</BreadcrumbItem>
  <BreadcrumbItem>{dir}</BreadcrumbItem>
  <BreadcrumbItem>{breadcrumb_title}</BreadcrumbItem>
</Breadcrumb>

<Heading class="mb-2" tag="h1" customSize="text-3xl">{title}</Heading>

<CompoDescription>{description}</CompoDescription>

<Htwo label="Repo & Demo" />

<List tag="ul" class="space-y-1 my-4">
  <Li><A href="https://github.com/shinokada/flowbite-sveltekit-responsive-sidebar-layout">GitHub Repo</A></Li>
  <Li><A href="https://sveltekit-sidebar-layout.vercel.app/">Demo</A></Li>
</List>

<Img src="/images/sveltekit-sidebar-layout-optimized.png" alt='sveltekit sidebar layout' />