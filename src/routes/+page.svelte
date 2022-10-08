<script>
  import { Button } from '$lib';
  import { goto } from '$app/navigation';
  import { Responsive } from 'svelte-sidebar-menu';
  import * as Block from './blocks/+server';

  const handleClick = () => {
    goto('/pages/getting-started');
  };
</script>

<Responsive />

<div class="relative bg-white overflow-hidden mt-24 lg:mb-8 mx-auto dark:bg-gray-900 2xl:px-8">
  <div class="max-w-full mx-auto ">
    <div class="relative z-10 xl:pb-8 bg-transparent lg:max-w-2xl lg:w-full">
      <div class="my-auto mx-auto max-w-7xl xl:pl-8 xl:pt-8">
        <div class="sm:text-center lg:text-left">
          <h1 class="max-w-md text-4xl tracking-tight font-extrabold text-gray-900  dark:text-white">
            <span class="block xl:inline">Flowbite Svelte</span>
            <span class="block text-indigo-600 dark:text-white xl:inline">UI Component</span>
          </h1>
          <p
            class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg lg:max-w-sm sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 dark:text-white">
            Speed up your web development with Flowbite Svelte. Flowbite Svelte is an official Flowbite
            component library for Svelte. All interactivities are handled by Svelte.
          </p>
          <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div class="mt-3 sm:mt-0 sm:ml-3">
              <Button size="lg" on:click={handleClick}>Getting started</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="px-16 py-4 lg:p-0 lg:pr-4 lg:absolute lg:inset-y-0 lg:right-0 lg:w-5/12 lg:pt-8 ">
    <img class="" src="/images/office1.webp" alt="Header" />
  </div>
</div>

<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
  <Block.AccordionBlock />
  <Block.AlertBlock />
  <Block.AvatarBlock />
  <Block.BadgeBlock />
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
