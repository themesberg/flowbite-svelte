<script>
  import {
    Section,
    ArticleAuthor,
    ArticleBody,
    ArticleHead,
    ArticleWrapper,
    BlogHead,
    BlogBodyWrapper
  } from '$lib';
  import { ExampleDiv, SectionHeader, SectionBlock, MetaTag } from '../utils';
  import { ArrowSmallRight, VideoCamera, Newspaper, Home } from 'svelte-heros';
  const breadcrumb_title = 'Blog Sections';
  const title = 'Blog';
  const dir = 'marketing';
  const description =
    'Get started with a collection of website sections related to the blog area of your website including blog posts, article pages, comments, categories, and more.';
</script>

<MetaTag {breadcrumb_title} {title} {dir} {description} />

<SectionHeader
  category="marketing"
  title="Svelte {breadcrumb_title} - Flowbite"
  {breadcrumb_title}
  {description}
/>

<SectionBlock title="Default blog card">
  Use this example to show a preview of a blog post including the title, description, category,
  author, publication date, and CTA link.
</SectionBlock>

<ExampleDiv>
  <Section name="blog">
    <BlogHead>
      <svelte:fragment slot="h2">Our Blog</svelte:fragment>
      <svelte:fragment slot="paragraph">
        <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
          We use an agile approach to test assumptions and connect with the needs of your audience
          early and often.
        </p>
      </svelte:fragment>
    </BlogHead>
    <BlogBodyWrapper>
      <ArticleWrapper>
        <ArticleHead>
          <span
            class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800"
          >
            <VideoCamera variation="solid" size="14" />
            Tutorial
          </span>
          <span class="text-sm">14 days ago</span>
        </ArticleHead>
        <ArticleBody>
          <svelte:fragment slot="h2"
            ><a href="/">How to quickly deploy a static website</a></svelte:fragment
          >
          <svelte:fragment slot="paragraph">
            <p class="mb-5 font-light text-gray-500 dark:text-gray-400">
              Static websites are now used to bootstrap lots of websites and are becoming the basis
              for a variety of tools that even influence both web designers and developers influence
              both web designers and developers.
            </p>
          </svelte:fragment>
        </ArticleBody>
        <ArticleAuthor>
          <svelte:fragment slot="author">
            <img
              class="w-7 h-7 rounded-full"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
              alt="Jese Leos avatar"
            />
            <span class="font-medium dark:text-white"> Jese Leos </span>
          </svelte:fragment>
          <a
            href="/"
            class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
          >
            Read more
            <ArrowSmallRight class="ml-2" />
          </a>
        </ArticleAuthor>
      </ArticleWrapper>

      <ArticleWrapper>
        <ArticleHead>
          <span
            class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800"
          >
            <Newspaper variation="solid" size="14" />
            Tutorial
          </span>
          <span class="text-sm">14 days ago</span>
        </ArticleHead>
        <ArticleBody>
          <svelte:fragment slot="h2"><a href="/">Our first project with React</a></svelte:fragment>
          <svelte:fragment slot="paragraph">
            <p class="mb-5 font-light text-gray-500 dark:text-gray-400">
              Static websites are now used to bootstrap lots of websites and are becoming the basis
              for a variety of tools that even influence both web designers and developers influence
              both web designers and developers.
            </p>
          </svelte:fragment>
        </ArticleBody>
        <ArticleAuthor>
          <svelte:fragment slot="author">
            <img
              class="w-7 h-7 rounded-full"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
              alt="Bonnie Green avatar"
            />
            <span class="font-medium dark:text-white"> Bonnie Green </span>
          </svelte:fragment>
          <a
            href="/"
            class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
          >
            Read more
            <ArrowSmallRight class="ml-2" />
          </a>
        </ArticleAuthor>
      </ArticleWrapper>
    </BlogBodyWrapper>
  </Section>
</ExampleDiv>
