<script>
  import { SectionHeader, MetaTag } from '../utils';
  import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
  import {
    AccountRecoverysection,
    Bannersection,
    Blogsection,
    ContactFormsection,
    Contentsection,
    CookieConsentsection,
    CrudDeleteConfirm,
    Cta,
    Faqsection,
    Featuresection,
    Footersection,
    Headersection,
    Herosection,
    LoginFormsection,
    Maintenancesection,
    Newslettersection,
    Page404section,
    Page500section,
    Popupsection,
    Pricingsection,
    ProjectPortfolioSection,
    RegisterFormsection,
    ResetPasswordFormsection,
    Schedulesection,
    SocialProofsection,
    Teamsection,
    Testimonialsection,
    UserOnboarding
  } from '../sections';
  const title = 'Marketing UI - Flowbite Svelte Blocks';
  const breadcrumb_title = 'Marketing UI';
  const description =
    'Get started with a large collection of free and premium UI components built with Tailwind CSS and the Flowbite library featuring hero sections, headers, contact forms, and more.';
  const dir = 'marketing';
</script>

<MetaTag {breadcrumb_title} {title} {dir} {description} withoutLink={true} />

<SectionHeader category="marketing" title="Marketing UI" {breadcrumb_title} {description} />

<section class="pb-8 bg-white dark:bg-gray-900 lg:pb-24" id="components">
  <div class="px-4 mx-auto max-w-8xl lg:px-4 lg:text-center">
    <div class="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 xl:grid-cols-3">
      <AccountRecoverysection />
      <Bannersection />
      <Blogsection />
      <ContactFormsection />
      <Contentsection />
      <CookieConsentsection />
      <CrudDeleteConfirm />
      <Cta />
      <Herosection />
      <Faqsection />
      <Featuresection />
      <Footersection />
      <Headersection />
      <LoginFormsection />
      <Maintenancesection />
      <Newslettersection />
      <Page404section />
      <Page500section />
      <Popupsection />
      <Pricingsection />
      <ProjectPortfolioSection />
      <RegisterFormsection />
      <ResetPasswordFormsection />
      <Schedulesection />
      <SocialProofsection />
      <Teamsection />
      <Testimonialsection />
      <UserOnboarding />
    </div>
  </div>
</section>
