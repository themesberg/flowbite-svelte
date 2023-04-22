<script>
  import { SectionHeader, MetaTag } from '../utils';
  import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
  import { BlogTemplatesection, CommentSection, RelatedArticle } from '../sections';
  import RelatedArticles from './related-articles.svelte';
  const title = 'Publisher UI - Flowbite Svelte Blocks';
  const breadcrumb_title = 'Publisher UI';
  const description =
    'Get started with a collection of free and premium Tailwind CSS UI components for publishing blog posts, articles, comment sections, sidebar widgets, and more.';
  const dir = 'publisher';
</script>

<MetaTag {breadcrumb_title} {title} {dir} {description} withoutLink={true} />

<SectionHeader category="publisher" title="Publisher UI" {breadcrumb_title} {description} />

<section class="pb-8 bg-white dark:bg-gray-900 lg:pb-24" id="components">
  <div class="px-4 mx-auto max-w-8xl lg:px-4 lg:text-center">
    <div class="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 xl:grid-cols-3">
      <BlogTemplatesection />
      <CommentSection />
      <RelatedArticle />
    </div>
  </div>
</section>
