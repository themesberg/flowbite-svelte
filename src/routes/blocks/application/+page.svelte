<script>
  import { SectionHeader, MetaTag } from '../utils';
  import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
  import {
    AdvancedTable,
    CrudCreateDrawer,
    CrudCreateForm,
    CrudCreateModal,
    CrudDeleteConfirm,
    CrudReadDrawer,
    CrudReadModal,
    CrudReadSection,
    CrudSuccessMessage,
    CrudUpdateDrawer,
    CrudUpdateForm,
    CrudUpdateModal,
    DashboardFooter,
    DashboardNavbar,
    DropdownFilter,
    FacetedSearchDrawerSection,
    FacetedSearchModalSection,
    SideNavigation,
    TableFooter,
    TableHeader
  } from '../sections';
  const title = 'Application UI - Flowbite Svelte Blocks';
  const breadcrumb_title = 'Application UI';
  const description =
    'Get started with a collection of free and premium Tailwind CSS UI components for admin dashboard layouts, sidebars, charts, widgets, kanban boards, and more.';
  const dir = 'application';
</script>

<MetaTag {breadcrumb_title} {title} {dir} {description} withoutLink={true} />

<SectionHeader category="application" title="Application UI" {breadcrumb_title} {description} />

<section class="pb-8 bg-white dark:bg-gray-900 lg:pb-24" id="components">
  <div class="px-4 mx-auto max-w-8xl lg:text-center">
    <div class="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 xl:grid-cols-3">
      <TableHeader />
      <AdvancedTable />
      <CrudCreateDrawer />
      <CrudCreateForm />
      <CrudCreateModal />
      <CrudDeleteConfirm />
      <CrudReadDrawer />
      <CrudReadModal />
      <CrudReadSection />
      <CrudSuccessMessage />
      <CrudUpdateDrawer />
      <CrudUpdateForm />
      <CrudUpdateModal />
      <DashboardFooter />
      <DashboardNavbar />
      <DropdownFilter />
      <FacetedSearchDrawerSection />
      <FacetedSearchModalSection />
      <SideNavigation />
      <TableFooter />
    </div>
  </div>
</section>
