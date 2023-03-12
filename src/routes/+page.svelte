<script>
  import { Alert, Button } from '$lib';
  import { goto } from '$app/navigation';
  import * as Block from './blocks/+server';
  import { MetaTags } from 'svelte-meta-tags';

  let title = 'Flowbite Svelte - UI Component Library';
  let description =
    'Flowbite Svelte is a free and open-source Tailwind CSS and Flowbite powered UI component library for Svelte and SvelteKit.';
  let default_title = 'Svelte UI Components';
</script>

<MetaTags
  {title}
  {description}
  facebook={{
    appId: '453670756870545'
  }}
  openGraph={{
    type: 'website',
    url: `https://flowbite-svelte.com/`,
    title: `${title}`,
    description: `${description}`,
    images: [
      {
        url: `https://open-graph-vercel.vercel.app/api/flowbite-svelte?title=${default_title}`,
        width: 1200,
        height: 630,
        alt: `${title}`
      }
    ],
    site_name: 'Flowbite-Svelte'
  }}
  twitter={{
    handle: '@shinokada',
    cardType: 'summary_large_image',
    title: `${title}`,
    description: `${description}`,
    image: `https://open-graph-vercel.vercel.app/api/flowbite-svelte?title=${default_title}`,
    imageAlt: `${title} logo`
  }} />

<div class="relative bg-white overflow-hidden mt-12 md:mt-24 mx-auto dark:bg-gray-900 2xl:px-8">
  <div class="mx-auto max-w-8xl">
    <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
            <a href="/components/banner" class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
                <span class="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">New</span> 
                <span class="text-sm font-medium">Sticky Banner is out! See what's new</span> 
                <svg aria-hidden="true" class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
            </a>
            <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Flowbite Svelte <span class="block text-primary-600 dark:text-primary-500 xl:inline">UI Component Library</span></h1>
            <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Speed up your web development with Flowbite Svelte. Flowbite Svelte is an official Flowbite component library for Svelte. All interactivities are handled by Svelte.</p>
            <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                <Button href="/pages/getting-started" size="lg" color="primary">Getting started <svg aria-hidden="true" class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></Button>
                <Button href="#components" size="lg" color="alternative" class="hover:text-primary-600 dark:hover:text-primary-500"><svg class="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>Explore components</Button>
            </div>
        </div>
    </section>
  </div>
</div>

<section class="w-full max-w-8xl mx-auto" id="components">
  <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
    <Block.AccordionBlock />
    <Block.AlertBlock />
    <Block.AvatarBlock />
    <Block.BadgeBlock />
    <Block.BannerBlock />
    <Block.BreadcrumbBlock />
    <Block.BlockquoteBlock />
    <Block.ButtonBlock />
    <Block.ButtongroupBlock />
    <Block.CardBlock />
    <Block.CarouselBlock />
    <Block.CheckboxBlock />
    <Block.DatepickerBlock />
    <Block.DrawerBlock />
    <Block.DropdownBlock />
    <Block.FileinputBlock />
    <Block.FloatingLabelBlock />
    <Block.FooterBlock />
    <Block.FormBlock rel="external" />
    <Block.HeadingBlock />
    <Block.HrBlock />
    <Block.ImageBlock />
    <Block.IndicatorBlock />
    <Block.InputfieldBlock />
    <Block.KbdBlock />
    <Block.LinkBlock />
    <Block.ListBlock />
    <Block.ListgroupBlock />
    <Block.MegamenuBlock />
    <Block.ModalBlock />
    <Block.NavbarBlock />
    <Block.PaginationBlock />
    <Block.ParagraphBlock />
    <Block.PopoverBlock />
    <Block.ProgressbarBlock />
    <Block.RadioBlock />
    <Block.RangeBlock />
    <Block.RatingBlock />
    <Block.SearchinputBlock />
    <Block.SelectBlock />
    <Block.SidebarBlock />
    <Block.SkeletonBlock />
    <Block.SpeedDial />
    <Block.SpinnerBlock />
    <Block.TabBlock />
    <Block.TableBlock />
    <Block.TextareaBlock />
    <Block.TextBlock />
    <Block.TimelineBlock />
    <Block.ToastBlock />
    <Block.ToggleBlock />
    <Block.TooltipBlock />
    <Block.TypographyBlock />
    <Block.VideoBlock />
  </div>
</section>
