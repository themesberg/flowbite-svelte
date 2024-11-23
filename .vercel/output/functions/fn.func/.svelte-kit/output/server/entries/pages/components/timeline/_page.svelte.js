import { Q as push, a0 as spread_attributes, S as pop, Y as ensure_array_like, W as attr, V as escape_html, a1 as getContext, a3 as copy_payload, a4 as assign_payload } from "../../../../chunks/index.js";
import { aD as activity, aE as activityitem, aF as group, aG as groupitem } from "../../../../chunks/theme.js";
import { L as Label, R as Radio, C as CompoAttributesViewer } from "../../../../chunks/CompoAttributesViewer.js";
import { D as DynamicCodeBlockHighlight } from "../../../../chunks/DynamicCodeBlockHighlight.js";
import { C as CodeWrapper } from "../../../../chunks/CodeWrapper.js";
import { a as H1 } from "../../../../chunks/H1.js";
import { H as H2 } from "../../../../chunks/H2.js";
import { g as getExampleFileName, i as isSvelteOverflow } from "../../../../chunks/helpers.js";
import { h as html, B as Button } from "../../../../chunks/markdown.js";
import { T as Timeline, a as TimelineItem } from "../../../../chunks/TimelineItem.js";
import { A as ArrowRightOutline } from "../../../../chunks/ArrowRightOutline.js";
import { twMerge } from "tailwind-merge";
function Activity($$payload, $$props) {
  push();
  let {
    children,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const base = activity({ class: className });
  $$payload.out += `<ol${spread_attributes({ ...restProps, class: base })}>`;
  children($$payload);
  $$payload.out += `<!----></ol>`;
  pop();
}
function ActivityItem($$payload, $$props) {
  push();
  let {
    activities,
    liClass,
    spanClass,
    imgClass,
    outerDivClass,
    innerDivClass,
    timeClass,
    titleClass,
    textClass,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const {
    li,
    span,
    img,
    outerDiv,
    innerDiv,
    time,
    title,
    text
  } = activityitem();
  const each_array = ensure_array_like(activities);
  $$payload.out += `<!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let { name, date, src, alt, activity: activity2 } = each_array[$$index];
    $$payload.out += `<li${spread_attributes({
      ...restProps,
      class: li({ class: liClass })
    })}><span${attr("class", span({ class: spanClass }))}><img${attr("class", img({ class: imgClass }))}${attr("src", src)}${attr("alt", alt)}></span> <div${attr("class", outerDiv({ class: outerDivClass }))}><div${attr("class", innerDiv({ class: innerDivClass }))}><time${attr("class", time({ class: timeClass }))}>${escape_html(date)}</time> <div${attr("class", title({ class: titleClass }))}>${html(name)}</div></div> `;
    if (activity2) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div${attr("class", text({ class: textClass }))}>${html(activity2)}</div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div></li>`;
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function Group($$payload, $$props) {
  push();
  let {
    children,
    divClass,
    timeClass,
    date,
    olClass,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const { div, time, ol } = group();
  $$payload.out += `<div${attr("class", div({ class: divClass }))}><time${attr("class", time({ class: timeClass }))}>${escape_html(date)}</time> <ol${spread_attributes({
    ...restProps,
    class: ol({ class: olClass })
  })}>`;
  children($$payload);
  $$payload.out += `<!----></ol></div>`;
  pop();
}
function GroupItem($$payload, $$props) {
  push();
  let {
    timelines,
    aClass,
    imgClass,
    divClass,
    titleClass,
    spanClass,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const { a, img, div, title, span } = groupitem();
  const each_array = ensure_array_like(timelines);
  $$payload.out += `<!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let { name, src, alt, isPrivate, href, comment } = each_array[$$index];
    $$payload.out += `<li${spread_attributes({ ...restProps })}><a${attr("href", href)}${attr("class", a({ class: aClass }))}><img${attr("class", img({ class: imgClass }))}${attr("src", src)}${attr("alt", alt)}> <div${attr("class", div({ class: divClass }))}><div${attr("class", title({ class: titleClass }))}>${html(name)}</div> `;
    if (comment) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="text-sm font-normal">${escape_html(comment)}</div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> <span${attr("class", span({ class: spanClass }))}>`;
    if (isPrivate) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<svg class="me-1 h-3 w-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clip-rule="evenodd"></path><path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"></path></svg> Private`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `<svg class="me-1 h-3 w-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clip-rule="evenodd"></path></svg> Public`;
    }
    $$payload.out += `<!--]--></span></div></a></li>`;
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function CalendarWeekSolid($$payload, $$props) {
  push();
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let {
    size = ctx.size || "md",
    color = ctx.color || "currentColor",
    title,
    desc,
    class: className,
    ariaLabel = "calendar week solid",
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let ariaDescribedby = `${title?.id || ""} ${desc?.id || ""}`;
  const hasDescription = !!(title?.id || desc?.id);
  $$payload.out += `<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      ...restProps,
      class: twMerge("shrink-0", sizes[size], className),
      "aria-label": ariaLabel,
      "aria-describedby": hasDescription ? ariaDescribedby : void 0,
      viewBox: "0 0 24 24"
    },
    void 0,
    void 0,
    3
  )}>`;
  if (title?.id && title.title) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<title${attr("id", title.id)}>${escape_html(title.title)}</title>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if (desc?.id && desc.desc) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<desc${attr("id", desc.id)}>${escape_html(desc.desc)}</desc>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--><path fill-rule="evenodd" d="M6 5V4a1 1 0 1 1 2 0v1h3V4a1 1 0 1 1 2 0v1h3V4a1 1 0 1 1 2 0v1h1a2 2 0 0 1 2 2v2H3V7a2 2 0 0 1 2-2h1ZM3 19v-8h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm5-6a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Z" clip-rule="evenodd"></path></svg>`;
  pop();
}
const __vite_glob_0_0 = `<script lang="ts">
  import { Activity, ActivityItem } from "$lib";
  const activities = [
    {
      name: 'Bonnie moved <a href="/" class="font-semibold text-primary-600 dark:text-primary-500 hover:underline">Jese Leos</a> to <span class="bg-gray-100 text-gray-800 text-xs font-normal me-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300">Funny Group</span>',
      date: "just now",
      alt: "image alt here",
      src: "/images/profile-picture-2.webp"
    },
    {
      name: "We don’t serve their kind here! What? Your droids. ",
      date: "2 hours ago",
      alt: "image alt here",
      src: "/images/profile-picture-2.webp",
      activity: "The approach will not be easy. You are required to maneuver straight down this trench and skim the surface to this point. The target area is only two meters wide. "
    },
    {
      name: "They’ll have to wait outside. We don’t want them here. ",
      date: "1 day ago",
      alt: "image alt here",
      src: "/images/profile-picture-3.webp"
    }
  ];
<\/script>

<Activity>
  <ActivityItem {activities} />
</Activity>
`;
const __vite_glob_0_1 = '<script lang="ts">\n  import { Timeline, TimelineItem, Button } from "$lib";\n  import { ArrowRightOutline } from "flowbite-svelte-icons";\n<\/script>\n\n<Timeline>\n  <TimelineItem title="Application UI code in Tailwind CSS" date="February 2022">\n    <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>\n    <Button color="alternative">Learn more<ArrowRightOutline class="ms-2 h-5 w-5" /></Button>\n  </TimelineItem>\n  <TimelineItem title="Application UI code in Tailwind CSS" date="March 2022">\n    <p class="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>\n  </TimelineItem>\n  <TimelineItem title="Application UI code in Tailwind CSS" date="April 2022">\n    <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>\n  </TimelineItem>\n</Timeline>\n';
const __vite_glob_0_2 = `<script lang="ts">
  import { Group, GroupItem } from "$lib";
  const groupTimelines = [
    {
      name: '<span class="font-medium text-gray-900 dark:text-white">Jese Leos</span> likes <span class="font-medium text-gray-900 dark:text-white">Bonnie Green\\'s</span> post in <span class="font-medium text-gray-900 dark:text-white"> How to start with Flowbite library</span>',
      src: "/images/profile-picture-1.webp",
      alt: "alt here",
      href: "/",
      isPrivate: true,
      comment: '"I wanted to share a webinar zeroheight."'
    },
    {
      name: '<span class="font-medium text-gray-900 dark:text-white">Bonnie Green</span> react to <span class="font-medium text-gray-900 dark:text-white">Thomas Lean\\'s</span> comment',
      src: "/images/profile-picture-2.webp",
      alt: "alt here",
      href: "/",
      isPrivate: true,
      comment: '"I wanted to share a webinar zeroheight."'
    }
  ];
<\/script>

<Group date="January 13th, 2022">
  <GroupItem timelines={groupTimelines} />
</Group>
`;
const __vite_glob_0_3 = '<script lang="ts">\n  import { Timeline, TimelineItem } from "$lib";\n  import { CalendarWeekSolid } from "flowbite-svelte-icons";\n<\/script>\n\n<Timeline order="horizontal">\n  <TimelineItem title="Flowbite Library v1.0.0" date="Released on December 2nd, 2021">\n    {#snippet orientationSlot()}\n      <div class="flex items-center">\n        <div class="z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-200 ring-0 ring-white sm:ring-8 dark:bg-primary-900 dark:ring-gray-900">\n          <CalendarWeekSolid class="h-4 w-4 text-primary-600 dark:text-primary-400" />\n        </div>\n        <div class="hidden h-0.5 w-full bg-gray-200 sm:flex dark:bg-gray-700"></div>\n      </div>\n    {/snippet}\n    <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>\n  </TimelineItem>\n  <TimelineItem title="Flowbite Library v1.2.0" date="Released on December 23th, 2021">\n    {#snippet orientationSlot()}\n      <div class="flex items-center">\n        <div class="z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-200 ring-0 ring-white sm:ring-8 dark:bg-primary-900 dark:ring-gray-900">\n          <CalendarWeekSolid class="h-4 w-4 text-primary-600 dark:text-primary-400" />\n        </div>\n        <div class="hidden h-0.5 w-full bg-gray-200 sm:flex dark:bg-gray-700"></div>\n      </div>\n    {/snippet}\n    <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>\n  </TimelineItem>\n  <TimelineItem title="Flowbite Library v1.3.0" date="Released on January 5th, 2021">\n    {#snippet orientationSlot()}\n      <div class="flex items-center">\n        <div class="z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-200 ring-0 ring-white sm:ring-8 dark:bg-primary-900 dark:ring-gray-900">\n          <CalendarWeekSolid class="h-4 w-4 text-primary-600 dark:text-primary-400" />\n        </div>\n        <div class="hidden h-0.5 w-full bg-gray-200 sm:flex dark:bg-gray-700"></div>\n      </div>\n    {/snippet}\n    <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>\n  </TimelineItem>\n</Timeline>\n';
const __vite_glob_0_4 = '<script lang="ts">\n  import { Group, GroupItem, Activity, ActivityItem, Timeline, TimelineItem } from "$lib";\n<\/script>\n';
const __vite_glob_0_5 = '<script lang="ts">\n  import { Timeline, TimelineItem } from "$lib";\n  import { CalendarWeekSolid } from "flowbite-svelte-icons";\n<\/script>\n\n<Timeline order="vertical">\n  <TimelineItem title="Flowbite Application UI v2.0.0" date="Released on January 13th, 2022">\n    {#snippet orientationSlot()}\n      <span class="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary-200 ring-8 ring-white dark:bg-primary-900 dark:ring-gray-900">\n        <CalendarWeekSolid class="h-4 w-4 text-primary-600 dark:text-primary-400" />\n      </span>\n    {/snippet}\n    <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>\n  </TimelineItem>\n  <TimelineItem title="Flowbite Figma v1.3.0" date="Released on December 7th, 2021">\n    {#snippet orientationSlot()}\n      <span class="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary-200 ring-8 ring-white dark:bg-primary-900 dark:ring-gray-900">\n        <CalendarWeekSolid class="h-4 w-4 text-primary-600 dark:text-primary-400" />\n      </span>\n    {/snippet}\n    <p class="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>\n  </TimelineItem>\n  <TimelineItem title="Flowbite Library v1.2.2" date="Released on December 2nd, 2021">\n    {#snippet orientationSlot()}\n      <span class="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary-200 ring-8 ring-white dark:bg-primary-900 dark:ring-gray-900">\n        <CalendarWeekSolid class="h-4 w-4 text-primary-600 dark:text-primary-400" />\n      </span>\n    {/snippet}\n    <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>\n  </TimelineItem>\n</Timeline>\n';
function DefaultTimeline($$payload) {
  Timeline($$payload, {
    children: ($$payload2) => {
      TimelineItem($$payload2, {
        title: "Application UI code in Tailwind CSS",
        date: "February 2022",
        children: ($$payload3) => {
          $$payload3.out += `<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce &amp; Marketing pages.</p> `;
          Button($$payload3, {
            color: "alternative",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Learn more`;
              ArrowRightOutline($$payload4, { class: "ms-2 h-5 w-5" });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      TimelineItem($$payload2, {
        title: "Application UI code in Tailwind CSS",
        date: "March 2022",
        children: ($$payload3) => {
          $$payload3.out += `<p class="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      TimelineItem($$payload2, {
        title: "Application UI code in Tailwind CSS",
        date: "April 2022",
        children: ($$payload3) => {
          $$payload3.out += `<p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
}
function VerticalTimeline($$payload) {
  Timeline($$payload, {
    order: "vertical",
    children: ($$payload2) => {
      {
        let orientationSlot = function($$payload3) {
          $$payload3.out += `<span class="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary-200 ring-8 ring-white dark:bg-primary-900 dark:ring-gray-900">`;
          CalendarWeekSolid($$payload3, {
            class: "h-4 w-4 text-primary-600 dark:text-primary-400"
          });
          $$payload3.out += `<!----></span>`;
        };
        TimelineItem($$payload2, {
          title: "Flowbite Application UI v2.0.0",
          date: "Released on January 13th, 2022",
          orientationSlot,
          children: ($$payload3) => {
            $$payload3.out += `<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce &amp; Marketing pages.</p>`;
          },
          $$slots: { orientationSlot: true, default: true }
        });
      }
      $$payload2.out += `<!----> `;
      {
        let orientationSlot = function($$payload3) {
          $$payload3.out += `<span class="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary-200 ring-8 ring-white dark:bg-primary-900 dark:ring-gray-900">`;
          CalendarWeekSolid($$payload3, {
            class: "h-4 w-4 text-primary-600 dark:text-primary-400"
          });
          $$payload3.out += `<!----></span>`;
        };
        TimelineItem($$payload2, {
          title: "Flowbite Figma v1.3.0",
          date: "Released on December 7th, 2021",
          orientationSlot,
          children: ($$payload3) => {
            $$payload3.out += `<p class="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>`;
          },
          $$slots: { orientationSlot: true, default: true }
        });
      }
      $$payload2.out += `<!----> `;
      {
        let orientationSlot = function($$payload3) {
          $$payload3.out += `<span class="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary-200 ring-8 ring-white dark:bg-primary-900 dark:ring-gray-900">`;
          CalendarWeekSolid($$payload3, {
            class: "h-4 w-4 text-primary-600 dark:text-primary-400"
          });
          $$payload3.out += `<!----></span>`;
        };
        TimelineItem($$payload2, {
          title: "Flowbite Library v1.2.2",
          date: "Released on December 2nd, 2021",
          orientationSlot,
          children: ($$payload3) => {
            $$payload3.out += `<p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>`;
          },
          $$slots: { orientationSlot: true, default: true }
        });
      }
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
}
function HorizontalTimeline($$payload) {
  Timeline($$payload, {
    order: "horizontal",
    children: ($$payload2) => {
      {
        let orientationSlot = function($$payload3) {
          $$payload3.out += `<div class="flex items-center"><div class="z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-200 ring-0 ring-white sm:ring-8 dark:bg-primary-900 dark:ring-gray-900">`;
          CalendarWeekSolid($$payload3, {
            class: "h-4 w-4 text-primary-600 dark:text-primary-400"
          });
          $$payload3.out += `<!----></div> <div class="hidden h-0.5 w-full bg-gray-200 sm:flex dark:bg-gray-700"></div></div>`;
        };
        TimelineItem($$payload2, {
          title: "Flowbite Library v1.0.0",
          date: "Released on December 2nd, 2021",
          orientationSlot,
          children: ($$payload3) => {
            $$payload3.out += `<p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>`;
          },
          $$slots: { orientationSlot: true, default: true }
        });
      }
      $$payload2.out += `<!----> `;
      {
        let orientationSlot = function($$payload3) {
          $$payload3.out += `<div class="flex items-center"><div class="z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-200 ring-0 ring-white sm:ring-8 dark:bg-primary-900 dark:ring-gray-900">`;
          CalendarWeekSolid($$payload3, {
            class: "h-4 w-4 text-primary-600 dark:text-primary-400"
          });
          $$payload3.out += `<!----></div> <div class="hidden h-0.5 w-full bg-gray-200 sm:flex dark:bg-gray-700"></div></div>`;
        };
        TimelineItem($$payload2, {
          title: "Flowbite Library v1.2.0",
          date: "Released on December 23th, 2021",
          orientationSlot,
          children: ($$payload3) => {
            $$payload3.out += `<p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>`;
          },
          $$slots: { orientationSlot: true, default: true }
        });
      }
      $$payload2.out += `<!----> `;
      {
        let orientationSlot = function($$payload3) {
          $$payload3.out += `<div class="flex items-center"><div class="z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-200 ring-0 ring-white sm:ring-8 dark:bg-primary-900 dark:ring-gray-900">`;
          CalendarWeekSolid($$payload3, {
            class: "h-4 w-4 text-primary-600 dark:text-primary-400"
          });
          $$payload3.out += `<!----></div> <div class="hidden h-0.5 w-full bg-gray-200 sm:flex dark:bg-gray-700"></div></div>`;
        };
        TimelineItem($$payload2, {
          title: "Flowbite Library v1.3.0",
          date: "Released on January 5th, 2021",
          orientationSlot,
          children: ($$payload3) => {
            $$payload3.out += `<p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>`;
          },
          $$slots: { orientationSlot: true, default: true }
        });
      }
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
}
function ActivityLog($$payload) {
  const activities = [
    {
      name: 'Bonnie moved <a href="/" class="font-semibold text-primary-600 dark:text-primary-500 hover:underline">Jese Leos</a> to <span class="bg-gray-100 text-gray-800 text-xs font-normal me-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300">Funny Group</span>',
      date: "just now",
      alt: "image alt here",
      src: "/images/profile-picture-2.webp"
    },
    {
      name: "We don’t serve their kind here! What? Your droids. ",
      date: "2 hours ago",
      alt: "image alt here",
      src: "/images/profile-picture-2.webp",
      activity: "The approach will not be easy. You are required to maneuver straight down this trench and skim the surface to this point. The target area is only two meters wide. "
    },
    {
      name: "They’ll have to wait outside. We don’t want them here. ",
      date: "1 day ago",
      alt: "image alt here",
      src: "/images/profile-picture-3.webp"
    }
  ];
  Activity($$payload, {
    children: ($$payload2) => {
      ActivityItem($$payload2, { activities });
    },
    $$slots: { default: true }
  });
}
function GroupedTimeline($$payload) {
  const groupTimelines = [
    {
      name: `<span class="font-medium text-gray-900 dark:text-white">Jese Leos</span> likes <span class="font-medium text-gray-900 dark:text-white">Bonnie Green's</span> post in <span class="font-medium text-gray-900 dark:text-white"> How to start with Flowbite library</span>`,
      src: "/images/profile-picture-1.webp",
      alt: "alt here",
      href: "/",
      isPrivate: true,
      comment: '"I wanted to share a webinar zeroheight."'
    },
    {
      name: `<span class="font-medium text-gray-900 dark:text-white">Bonnie Green</span> react to <span class="font-medium text-gray-900 dark:text-white">Thomas Lean's</span> comment`,
      src: "/images/profile-picture-2.webp",
      alt: "alt here",
      href: "/",
      isPrivate: true,
      comment: '"I wanted to share a webinar zeroheight."'
    }
  ];
  Group($$payload, {
    date: "January 13th, 2022",
    children: ($$payload2) => {
      GroupItem($$payload2, { timelines: groupTimelines });
    },
    $$slots: { default: true }
  });
}
function _page($$payload, $$props) {
  push();
  const dirName = "timeline";
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/ActivityLog.svelte": __vite_glob_0_0,
    "./examples/DefaultTimeline.svelte": __vite_glob_0_1,
    "./examples/GroupedTimeline.svelte": __vite_glob_0_2,
    "./examples/HorizontalTimeline.svelte": __vite_glob_0_3,
    "./examples/Setup.svelte": __vite_glob_0_4,
    "./examples/VerticalTimeline.svelte": __vite_glob_0_5
  });
  const exampleArr = [
    {
      name: "Default timeline",
      component: DefaultTimeline
    },
    {
      name: "Vertical timeline",
      component: VerticalTimeline
    },
    {
      name: "Horizontal timeline",
      component: HorizontalTimeline
    },
    {
      name: "Activity log",
      component: ActivityLog
    },
    {
      name: "Grouped timeline",
      component: GroupedTimeline
    }
  ];
  let selectedExample = exampleArr[0].name;
  let svelteCode = getExampleFileName(selectedExample, exampleArr);
  function findObject(arr, name) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = findObject(exampleArr, selectedExample);
  let exampleExpand = false;
  let showExpandButton = isSvelteOverflow(svelteCode, exampleModules);
  const handleExpandClick = () => {
    exampleExpand = !exampleExpand;
  };
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    H1($$payload2, {
      children: ($$payload3) => {
        $$payload3.out += `<!---->Timeline`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    {
      let codeblock = function($$payload3) {
        DynamicCodeBlockHighlight($$payload3, {
          replaceLib: true,
          handleExpandClick,
          expand: exampleExpand,
          showExpandButton,
          code: exampleModules[`./examples/${svelteCode}`]
        });
      };
      CodeWrapper($$payload2, {
        codeblock,
        children: ($$payload3) => {
          const each_array = ensure_array_like(exampleArr);
          $$payload3.out += `<div class="mb-8 flex flex-wrap">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Example`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let style = each_array[$$index];
            Radio($$payload3, {
              labelClass: "w-40 my-1",
              onclick: () => exampleExpand = false,
              name: "block_style",
              get group() {
                return selectedExample;
              },
              set group($$value) {
                selectedExample = $$value;
                $$settled = false;
              },
              value: style.name,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(style.name)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> <!---->`;
          SelectedComponent($$payload3, {});
          $$payload3.out += `<!---->`;
        },
        $$slots: { codeblock: true, default: true }
      });
    }
    $$payload2.out += `<!----> `;
    H2($$payload2, {
      children: ($$payload3) => {
        $$payload3.out += `<!---->Component data`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    CompoAttributesViewer($$payload2, { dirName });
    $$payload2.out += `<!---->`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  pop();
}
export {
  _page as default
};
