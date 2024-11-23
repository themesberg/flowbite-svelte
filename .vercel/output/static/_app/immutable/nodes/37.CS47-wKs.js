import { a as append, t as template, c as comment, n as ns_template, b as text } from "../chunks/disclose-version.0TX42Q8e.js";
import { p as push, c as child, r as reset, t as template_effect, a as pop, f as first_child, s as sibling, b as get, d as derived, n as next, g as getContext, a6 as state, u as user_effect, a7 as set } from "../chunks/runtime.BkfDdwap.js";
import { a as set_text } from "../chunks/store.B2xZ3Ft6.js";
import { e as each, i as index } from "../chunks/each.CtHIoDcm.js";
import { r as rest_props, i as if_block, p as prop, b as proxy, c as component } from "../chunks/props.B7eOu8hW.js";
import { b1 as activity, a as set_attributes, b as set_class, s as set_attribute, b2 as activityitem, b3 as group, b4 as groupitem, t as twMerge, V as uiHelpers } from "../chunks/theme.BtjZjf2R.js";
import { C as CompoAttributesViewer, L as Label, R as Radio } from "../chunks/CompoAttributesViewer.HsPJjrMu.js";
import { D as DynamicCodeBlockHighlight } from "../chunks/DynamicCodeBlockHighlight.BS23lgW_.js";
import { C as CodeWrapper } from "../chunks/CodeWrapper.CdoIAYb8.js";
import { H as H1 } from "../chunks/H1.DunGd_Oq.js";
import { H as H2 } from "../chunks/H2.qsp5CBkK.js";
import { g as getExampleFileName, d as isSvelteOverflow } from "../chunks/helpers.B9KbZW0W.js";
import "../chunks/legacy.DvF4DOPZ.js";
import { h as html, B as Button } from "../chunks/markdown.Ba9FtS5g.js";
import { T as Timeline, a as TimelineItem } from "../chunks/TimelineItem.tPeCwhF4.js";
import { A as ArrowRightOutline } from "../chunks/ArrowRightOutline.C1f8PGpf.js";
import { s as snippet } from "../chunks/snippet.BDfn85k4.js";
var root$3 = template(`<ol><!></ol>`);
function Activity($$anchor, $$props) {
  push($$props, true);
  let restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "class"
  ]);
  const base = activity({ class: $$props.class });
  var ol = root$3();
  let attributes;
  var node = child(ol);
  snippet(node, () => $$props.children);
  reset(ol);
  template_effect(() => attributes = set_attributes(ol, attributes, { ...restProps, class: base }));
  append($$anchor, ol);
  pop();
}
var root_2$5 = template(`<div><!></div>`);
var root_1$5 = template(`<li><span><img></span> <div><div><time> </time> <div><!></div></div> <!></div></li>`);
function ActivityItem($$anchor, $$props) {
  push($$props, true);
  let restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "activities",
    "liClass",
    "spanClass",
    "imgClass",
    "outerDivClass",
    "innerDivClass",
    "timeClass",
    "titleClass",
    "textClass"
  ]);
  const $$d = derived(activityitem), li = derived(() => get($$d).li), span = derived(() => get($$d).span), img = derived(() => get($$d).img), outerDiv = derived(() => get($$d).outerDiv), innerDiv = derived(() => get($$d).innerDiv), time = derived(() => get($$d).time), title = derived(() => get($$d).title), text2 = derived(() => get($$d).text);
  var fragment = comment();
  var node = first_child(fragment);
  each(node, 17, () => $$props.activities, index, ($$anchor2, $$item) => {
    let name = () => get($$item).name;
    let date = () => get($$item).date;
    let src = () => get($$item).src;
    let alt = () => get($$item).alt;
    let activity2 = () => get($$item).activity;
    var li_1 = root_1$5();
    let attributes;
    var span_1 = child(li_1);
    const class_derived = derived(() => get(span)({ class: $$props.spanClass }));
    var img_1 = child(span_1);
    const class_derived_1 = derived(() => get(img)({ class: $$props.imgClass }));
    reset(span_1);
    var div = sibling(span_1, 2);
    const class_derived_2 = derived(() => get(outerDiv)({ class: $$props.outerDivClass }));
    var div_1 = child(div);
    const class_derived_3 = derived(() => get(innerDiv)({ class: $$props.innerDivClass }));
    var time_1 = child(div_1);
    const class_derived_4 = derived(() => get(time)({ class: $$props.timeClass }));
    var text_1 = child(time_1, true);
    reset(time_1);
    var div_2 = sibling(time_1, 2);
    const class_derived_5 = derived(() => get(title)({ class: $$props.titleClass }));
    var node_1 = child(div_2);
    html(node_1, name);
    reset(div_2);
    reset(div_1);
    var node_2 = sibling(div_1, 2);
    if_block(node_2, activity2, ($$anchor3) => {
      var div_3 = root_2$5();
      const class_derived_6 = derived(() => get(text2)({ class: $$props.textClass }));
      var node_3 = child(div_3);
      html(node_3, activity2);
      reset(div_3);
      template_effect(() => set_class(div_3, get(class_derived_6)));
      append($$anchor3, div_3);
    });
    reset(div);
    reset(li_1);
    template_effect(() => {
      attributes = set_attributes(li_1, attributes, {
        ...restProps,
        class: get(li)({ class: $$props.liClass })
      });
      set_class(span_1, get(class_derived));
      set_class(img_1, get(class_derived_1));
      set_attribute(img_1, "src", src());
      set_attribute(img_1, "alt", alt());
      set_class(div, get(class_derived_2));
      set_class(div_1, get(class_derived_3));
      set_class(time_1, get(class_derived_4));
      set_text(text_1, date());
      set_class(div_2, get(class_derived_5));
    });
    append($$anchor2, li_1);
  });
  append($$anchor, fragment);
  pop();
}
var root$2 = template(`<div><time> </time> <ol><!></ol></div>`);
function Group($$anchor, $$props) {
  push($$props, true);
  let restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "divClass",
    "timeClass",
    "date",
    "olClass"
  ]);
  const $$d = derived(group), div = derived(() => get($$d).div), time = derived(() => get($$d).time), ol = derived(() => get($$d).ol);
  var div_1 = root$2();
  const class_derived = derived(() => get(div)({ class: $$props.divClass }));
  var time_1 = child(div_1);
  const class_derived_1 = derived(() => get(time)({ class: $$props.timeClass }));
  var text2 = child(time_1, true);
  reset(time_1);
  var ol_1 = sibling(time_1, 2);
  let attributes;
  var node = child(ol_1);
  snippet(node, () => $$props.children);
  reset(ol_1);
  reset(div_1);
  template_effect(() => {
    set_class(div_1, get(class_derived));
    set_class(time_1, get(class_derived_1));
    set_text(text2, $$props.date);
    attributes = set_attributes(ol_1, attributes, {
      ...restProps,
      class: get(ol)({ class: $$props.olClass })
    });
  });
  append($$anchor, div_1);
  pop();
}
var root_2$4 = template(`<div class="text-sm font-normal"> </div>`);
var root_3$4 = template(`<svg class="me-1 h-3 w-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clip-rule="evenodd"></path><path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"></path></svg> Private`, 1);
var root_4$3 = template(`<svg class="me-1 h-3 w-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clip-rule="evenodd"></path></svg> Public`, 1);
var root_1$4 = template(`<li><a><img> <div><div><!></div> <!> <span><!></span></div></a></li>`);
function GroupItem($$anchor, $$props) {
  push($$props, true);
  let restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "timelines",
    "aClass",
    "imgClass",
    "divClass",
    "titleClass",
    "spanClass"
  ]);
  const $$d = derived(groupitem), a = derived(() => get($$d).a), img = derived(() => get($$d).img), div = derived(() => get($$d).div), title = derived(() => get($$d).title), span = derived(() => get($$d).span);
  var fragment = comment();
  var node = first_child(fragment);
  each(node, 17, () => $$props.timelines, index, ($$anchor2, $$item) => {
    let name = () => get($$item).name;
    let src = () => get($$item).src;
    let alt = () => get($$item).alt;
    let isPrivate = () => get($$item).isPrivate;
    let href = () => get($$item).href;
    let comment2 = () => get($$item).comment;
    var li = root_1$4();
    let attributes;
    var a_1 = child(li);
    const class_derived = derived(() => get(a)({ class: $$props.aClass }));
    var img_1 = child(a_1);
    const class_derived_1 = derived(() => get(img)({ class: $$props.imgClass }));
    var div_1 = sibling(img_1, 2);
    const class_derived_2 = derived(() => get(div)({ class: $$props.divClass }));
    var div_2 = child(div_1);
    const class_derived_3 = derived(() => get(title)({ class: $$props.titleClass }));
    var node_1 = child(div_2);
    html(node_1, name);
    reset(div_2);
    var node_2 = sibling(div_2, 2);
    if_block(node_2, comment2, ($$anchor3) => {
      var div_3 = root_2$4();
      var text2 = child(div_3, true);
      reset(div_3);
      template_effect(() => set_text(text2, comment2()));
      append($$anchor3, div_3);
    });
    var span_1 = sibling(node_2, 2);
    const class_derived_4 = derived(() => get(span)({ class: $$props.spanClass }));
    var node_3 = child(span_1);
    if_block(
      node_3,
      isPrivate,
      ($$anchor3) => {
        var fragment_1 = root_3$4();
        next();
        append($$anchor3, fragment_1);
      },
      ($$anchor3) => {
        var fragment_2 = root_4$3();
        next();
        append($$anchor3, fragment_2);
      }
    );
    reset(span_1);
    reset(div_1);
    reset(a_1);
    reset(li);
    template_effect(() => {
      attributes = set_attributes(li, attributes, { ...restProps });
      set_attribute(a_1, "href", href());
      set_class(a_1, get(class_derived));
      set_class(img_1, get(class_derived_1));
      set_attribute(img_1, "src", src());
      set_attribute(img_1, "alt", alt());
      set_class(div_1, get(class_derived_2));
      set_class(div_2, get(class_derived_3));
      set_class(span_1, get(class_derived_4));
    });
    append($$anchor2, li);
  });
  append($$anchor, fragment);
  pop();
}
var root_1$3 = ns_template(`<title> </title>`);
var root_2$3 = ns_template(`<desc> </desc>`);
var root$1 = ns_template(`<svg><!><!><path fill-rule="evenodd" d="M6 5V4a1 1 0 1 1 2 0v1h3V4a1 1 0 1 1 2 0v1h3V4a1 1 0 1 1 2 0v1h1a2 2 0 0 1 2 2v2H3V7a2 2 0 0 1 2-2h1ZM3 19v-8h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm5-6a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Z" clip-rule="evenodd"></path></svg>`);
function CalendarWeekSolid($$anchor, $$props) {
  var _a, _b;
  push($$props, true);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let size = prop($$props, "size", 19, () => ctx.size || "md"), color = prop($$props, "color", 19, () => ctx.color || "currentColor"), ariaLabel = prop($$props, "ariaLabel", 3, "calendar week solid"), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "size",
    "color",
    "title",
    "desc",
    "class",
    "ariaLabel"
  ]);
  let ariaDescribedby = `${((_a = $$props.title) == null ? void 0 : _a.id) || ""} ${((_b = $$props.desc) == null ? void 0 : _b.id) || ""}`;
  const hasDescription = derived(() => {
    var _a2, _b2;
    return !!(((_a2 = $$props.title) == null ? void 0 : _a2.id) || ((_b2 = $$props.desc) == null ? void 0 : _b2.id));
  });
  var svg = root$1();
  let attributes;
  var node = child(svg);
  if_block(node, () => {
    var _a2;
    return ((_a2 = $$props.title) == null ? void 0 : _a2.id) && $$props.title.title;
  }, ($$anchor2) => {
    var title_1 = root_1$3();
    var text2 = child(title_1, true);
    reset(title_1);
    template_effect(() => {
      set_attribute(title_1, "id", $$props.title.id);
      set_text(text2, $$props.title.title);
    });
    append($$anchor2, title_1);
  });
  var node_1 = sibling(node);
  if_block(node_1, () => {
    var _a2;
    return ((_a2 = $$props.desc) == null ? void 0 : _a2.id) && $$props.desc.desc;
  }, ($$anchor2) => {
    var desc_1 = root_2$3();
    var text_1 = child(desc_1, true);
    reset(desc_1);
    template_effect(() => {
      set_attribute(desc_1, "id", $$props.desc.id);
      set_text(text_1, $$props.desc.desc);
    });
    append($$anchor2, desc_1);
  });
  next();
  reset(svg);
  template_effect(() => attributes = set_attributes(
    svg,
    attributes,
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color(),
      ...restProps,
      class: twMerge("shrink-0", sizes[size()], $$props.class),
      "aria-label": ariaLabel(),
      "aria-describedby": get(hasDescription) ? ariaDescribedby : void 0,
      viewBox: "0 0 24 24"
    },
    void 0,
    true
  ));
  append($$anchor, svg);
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
var root_3$3 = template(`Learn more<!>`, 1);
var root_2$2 = template(`<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce &amp; Marketing pages.</p> <!>`, 1);
var root_4$2 = template(`<p class="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>`);
var root_5$2 = template(`<p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>`);
var root_1$2 = template(`<!> <!> <!>`, 1);
function DefaultTimeline($$anchor) {
  Timeline($$anchor, {
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1$2();
      var node = first_child(fragment_1);
      TimelineItem(node, {
        title: "Application UI code in Tailwind CSS",
        date: "February 2022",
        children: ($$anchor3, $$slotProps2) => {
          var fragment_2 = root_2$2();
          var node_1 = sibling(first_child(fragment_2), 2);
          Button(node_1, {
            color: "alternative",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var fragment_3 = root_3$3();
              var node_2 = sibling(first_child(fragment_3));
              ArrowRightOutline(node_2, { class: "ms-2 h-5 w-5" });
              append($$anchor4, fragment_3);
            },
            $$slots: { default: true }
          });
          append($$anchor3, fragment_2);
        },
        $$slots: { default: true }
      });
      var node_3 = sibling(node, 2);
      TimelineItem(node_3, {
        title: "Application UI code in Tailwind CSS",
        date: "March 2022",
        children: ($$anchor3, $$slotProps2) => {
          var p = root_4$2();
          append($$anchor3, p);
        },
        $$slots: { default: true }
      });
      var node_4 = sibling(node_3, 2);
      TimelineItem(node_4, {
        title: "Application UI code in Tailwind CSS",
        date: "April 2022",
        children: ($$anchor3, $$slotProps2) => {
          var p_1 = root_5$2();
          append($$anchor3, p_1);
        },
        $$slots: { default: true }
      });
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
}
var root_2$1 = template(`<span class="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary-200 ring-8 ring-white dark:bg-primary-900 dark:ring-gray-900"><!></span>`);
var root_3$2 = template(`<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce &amp; Marketing pages.</p>`);
var root_4$1 = template(`<span class="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary-200 ring-8 ring-white dark:bg-primary-900 dark:ring-gray-900"><!></span>`);
var root_5$1 = template(`<p class="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>`);
var root_6$1 = template(`<span class="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary-200 ring-8 ring-white dark:bg-primary-900 dark:ring-gray-900"><!></span>`);
var root_7$1 = template(`<p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>`);
var root_1$1 = template(`<!> <!> <!>`, 1);
function VerticalTimeline($$anchor) {
  Timeline($$anchor, {
    order: "vertical",
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1$1();
      var node = first_child(fragment_1);
      {
        const orientationSlot = ($$anchor3) => {
          var span = root_2$1();
          var node_1 = child(span);
          CalendarWeekSolid(node_1, {
            class: "h-4 w-4 text-primary-600 dark:text-primary-400"
          });
          reset(span);
          append($$anchor3, span);
        };
        TimelineItem(node, {
          title: "Flowbite Application UI v2.0.0",
          date: "Released on January 13th, 2022",
          orientationSlot,
          children: ($$anchor3, $$slotProps2) => {
            var p = root_3$2();
            append($$anchor3, p);
          },
          $$slots: { orientationSlot: true, default: true }
        });
      }
      var node_2 = sibling(node, 2);
      {
        const orientationSlot = ($$anchor3) => {
          var span_1 = root_4$1();
          var node_3 = child(span_1);
          CalendarWeekSolid(node_3, {
            class: "h-4 w-4 text-primary-600 dark:text-primary-400"
          });
          reset(span_1);
          append($$anchor3, span_1);
        };
        TimelineItem(node_2, {
          title: "Flowbite Figma v1.3.0",
          date: "Released on December 7th, 2021",
          orientationSlot,
          children: ($$anchor3, $$slotProps2) => {
            var p_1 = root_5$1();
            append($$anchor3, p_1);
          },
          $$slots: { orientationSlot: true, default: true }
        });
      }
      var node_4 = sibling(node_2, 2);
      {
        const orientationSlot = ($$anchor3) => {
          var span_2 = root_6$1();
          var node_5 = child(span_2);
          CalendarWeekSolid(node_5, {
            class: "h-4 w-4 text-primary-600 dark:text-primary-400"
          });
          reset(span_2);
          append($$anchor3, span_2);
        };
        TimelineItem(node_4, {
          title: "Flowbite Library v1.2.2",
          date: "Released on December 2nd, 2021",
          orientationSlot,
          children: ($$anchor3, $$slotProps2) => {
            var p_2 = root_7$1();
            append($$anchor3, p_2);
          },
          $$slots: { orientationSlot: true, default: true }
        });
      }
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
}
var root_2 = template(`<div class="flex items-center"><div class="z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-200 ring-0 ring-white sm:ring-8 dark:bg-primary-900 dark:ring-gray-900"><!></div> <div class="hidden h-0.5 w-full bg-gray-200 sm:flex dark:bg-gray-700"></div></div>`);
var root_3$1 = template(`<p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>`);
var root_4 = template(`<div class="flex items-center"><div class="z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-200 ring-0 ring-white sm:ring-8 dark:bg-primary-900 dark:ring-gray-900"><!></div> <div class="hidden h-0.5 w-full bg-gray-200 sm:flex dark:bg-gray-700"></div></div>`);
var root_5 = template(`<p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>`);
var root_6 = template(`<div class="flex items-center"><div class="z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-200 ring-0 ring-white sm:ring-8 dark:bg-primary-900 dark:ring-gray-900"><!></div> <div class="hidden h-0.5 w-full bg-gray-200 sm:flex dark:bg-gray-700"></div></div>`);
var root_7 = template(`<p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>`);
var root_1 = template(`<!> <!> <!>`, 1);
function HorizontalTimeline($$anchor) {
  Timeline($$anchor, {
    order: "horizontal",
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1();
      var node = first_child(fragment_1);
      {
        const orientationSlot = ($$anchor3) => {
          var div = root_2();
          var div_1 = child(div);
          var node_1 = child(div_1);
          CalendarWeekSolid(node_1, {
            class: "h-4 w-4 text-primary-600 dark:text-primary-400"
          });
          reset(div_1);
          next(2);
          reset(div);
          append($$anchor3, div);
        };
        TimelineItem(node, {
          title: "Flowbite Library v1.0.0",
          date: "Released on December 2nd, 2021",
          orientationSlot,
          children: ($$anchor3, $$slotProps2) => {
            var p = root_3$1();
            append($$anchor3, p);
          },
          $$slots: { orientationSlot: true, default: true }
        });
      }
      var node_2 = sibling(node, 2);
      {
        const orientationSlot = ($$anchor3) => {
          var div_2 = root_4();
          var div_3 = child(div_2);
          var node_3 = child(div_3);
          CalendarWeekSolid(node_3, {
            class: "h-4 w-4 text-primary-600 dark:text-primary-400"
          });
          reset(div_3);
          next(2);
          reset(div_2);
          append($$anchor3, div_2);
        };
        TimelineItem(node_2, {
          title: "Flowbite Library v1.2.0",
          date: "Released on December 23th, 2021",
          orientationSlot,
          children: ($$anchor3, $$slotProps2) => {
            var p_1 = root_5();
            append($$anchor3, p_1);
          },
          $$slots: { orientationSlot: true, default: true }
        });
      }
      var node_4 = sibling(node_2, 2);
      {
        const orientationSlot = ($$anchor3) => {
          var div_4 = root_6();
          var div_5 = child(div_4);
          var node_5 = child(div_5);
          CalendarWeekSolid(node_5, {
            class: "h-4 w-4 text-primary-600 dark:text-primary-400"
          });
          reset(div_5);
          next(2);
          reset(div_4);
          append($$anchor3, div_4);
        };
        TimelineItem(node_4, {
          title: "Flowbite Library v1.3.0",
          date: "Released on January 5th, 2021",
          orientationSlot,
          children: ($$anchor3, $$slotProps2) => {
            var p_2 = root_7();
            append($$anchor3, p_2);
          },
          $$slots: { orientationSlot: true, default: true }
        });
      }
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
}
function ActivityLog($$anchor) {
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
  Activity($$anchor, {
    children: ($$anchor2, $$slotProps) => {
      ActivityItem($$anchor2, { activities });
    },
    $$slots: { default: true }
  });
}
function GroupedTimeline($$anchor) {
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
  Group($$anchor, {
    date: "January 13th, 2022",
    children: ($$anchor2, $$slotProps) => {
      GroupItem($$anchor2, { timelines: groupTimelines });
    },
    $$slots: { default: true }
  });
}
var root_3 = template(`<div class="mb-8 flex flex-wrap"><!> <!></div> <!>`, 1);
var root = template(`<!> <!> <!> <!>`, 1);
function _page($$anchor, $$props) {
  push($$props, true);
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
  let selectedExample = state(proxy(exampleArr[0].name));
  let svelteCode = derived(() => getExampleFileName(get(selectedExample), exampleArr));
  function findObject(arr, name) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = derived(() => findObject(exampleArr, get(selectedExample)));
  let codeBlock = uiHelpers();
  let exampleExpand = state(false);
  let showExpandButton = derived(() => isSvelteOverflow(get(svelteCode), exampleModules));
  const handleExpandClick = () => {
    set(exampleExpand, !get(exampleExpand));
  };
  user_effect(() => {
    set(exampleExpand, proxy(codeBlock.isOpen));
  });
  var fragment = root();
  var node = first_child(fragment);
  H1(node, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text("Timeline");
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
  var node_1 = sibling(node, 2);
  {
    const codeblock = ($$anchor2) => {
      DynamicCodeBlockHighlight($$anchor2, {
        replaceLib: true,
        handleExpandClick,
        get expand() {
          return get(exampleExpand);
        },
        get showExpandButton() {
          return get(showExpandButton);
        },
        get code() {
          return exampleModules[`./examples/${get(svelteCode)}`];
        }
      });
    };
    CodeWrapper(node_1, {
      codeblock,
      children: ($$anchor2, $$slotProps) => {
        var fragment_2 = root_3();
        var div = first_child(fragment_2);
        var node_2 = child(div);
        Label(node_2, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_1 = text("Example");
            append($$anchor3, text_1);
          },
          $$slots: { default: true }
        });
        var node_3 = sibling(node_2, 2);
        each(node_3, 17, () => exampleArr, index, ($$anchor3, style) => {
          Radio($$anchor3, {
            labelClass: "w-40 my-1",
            onclick: () => set(exampleExpand, false),
            name: "block_style",
            get group() {
              return get(selectedExample);
            },
            set group($$value) {
              set(selectedExample, proxy($$value));
            },
            get value() {
              return get(style).name;
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_2 = text();
              template_effect(() => set_text(text_2, get(style).name));
              append($$anchor4, text_2);
            },
            $$slots: { default: true }
          });
        });
        reset(div);
        var node_4 = sibling(div, 2);
        component(node_4, () => get(SelectedComponent), ($$anchor3, $$component) => {
          $$component($$anchor3, {});
        });
        append($$anchor2, fragment_2);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_5 = sibling(node_1, 2);
  H2(node_5, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_3 = text("Component data");
      append($$anchor2, text_3);
    },
    $$slots: { default: true }
  });
  var node_6 = sibling(node_5, 2);
  CompoAttributesViewer(node_6, { dirName });
  append($$anchor, fragment);
  pop();
}
export {
  _page as component
};
