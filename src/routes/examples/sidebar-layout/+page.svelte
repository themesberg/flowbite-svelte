<!-- Frontmatter goes here -->
<script context="module">
  export const metadata = {
    title: 'Responsive Sidebar Layout',
    dir: 'Examples',
    description: 'Flowbite Svete Responsive sidebar layout',
    breadcrumb_title: 'Sidebar Layout'
  };
</script>

<script>
  import { MetaTag } from '../../utils';
  import { Img } from '$lib';
  import PageHeadSection from '../../utils/PageHeadSection.svelte';
  const breadcrumb_title = 'Responsive Sidebar Layout';
  const title = 'Responsive Sidebar Layout';
  const dir = 'Examples';
  const description = 'Flowbite Svete Responsive sidebar layout';
  const libFiles = {
    'GitHub Repo': 'https://github.com/shinokada/flowbite-sveltekit-responsive-sidebar-layout',
    Demo: 'https://sveltekit-sidebar-layout.vercel.app/'
  };
</script>

<MetaTag {breadcrumb_title} {title} {dir} {description} />
<div class="max-w-3xl 2xl:max-w-4xl mx-auto mt-8">
  <div class="container mx-auto" id="mainContent">
    <PageHeadSection {dir} {breadcrumb_title} {title} {description} {libFiles} />

    <Img src="/images/sveltekit-sidebar-layout-optimized.png" alt="sveltekit sidebar layout" />
  </div>
</div>
