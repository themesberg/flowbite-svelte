import { Q as push, a0 as spread_attributes, W as attr, V as escape_html, S as pop, a1 as getContext, a3 as copy_payload, a4 as assign_payload, Y as ensure_array_like } from "../../../../chunks/index.js";
import { a as fade, f as fly, b as blur } from "../../../../chunks/index3.js";
import { l as linear, s as sineIn } from "../../../../chunks/index4.js";
import { an as popover } from "../../../../chunks/theme.js";
import { B as Button } from "../../../../chunks/markdown.js";
import { L as Label, R as Radio, C as CompoAttributesViewer } from "../../../../chunks/CompoAttributesViewer.js";
import { H as HighlightCompo } from "../../../../chunks/HighlightCompo.js";
import { D as DynamicCodeBlockHighlight } from "../../../../chunks/DynamicCodeBlockHighlight.js";
import { C as CodeWrapper } from "../../../../chunks/CodeWrapper.js";
import { a as H1 } from "../../../../chunks/H1.js";
import { H as H2 } from "../../../../chunks/H2.js";
import { g as getExampleFileName, a as isGeneratedCodeOverflow, i as isSvelteOverflow } from "../../../../chunks/helpers.js";
import { A as Avatar } from "../../../../chunks/Avatar.js";
import { twMerge } from "tailwind-merge";
import { T as ThumbsUpSolid } from "../../../../chunks/ThumbsUpSolid.js";
import { C as ChevronRightOutline } from "../../../../chunks/ChevronRightOutline.js";
import { Q as QuestionCircleSolid } from "../../../../chunks/QuestionCircleSolid.js";
import { C as Checkbox } from "../../../../chunks/Checkbox.js";
import { I as Input } from "../../../../chunks/index5.js";
import { C as CheckOutline } from "../../../../chunks/CheckOutline.js";
import { C as CloseOutline } from "../../../../chunks/CloseOutline.js";
function Popover($$payload, $$props) {
  push();
  let {
    children,
    titleSlot,
    color = "default",
    arrow = true,
    offset = 0,
    triggeredBy,
    position = "top",
    class: className,
    reference,
    transition = fade,
    params,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let { base, title, h3, arrowBase } = popover({ color, arrow, position });
  let visible = false;
  if (transition && visible) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div${spread_attributes({
      role: "tooltip",
      ...restProps,
      class: `${base({ className })} ${"invisible opacity-0"} transition-opacity duration-200`
    })}>`;
    if (typeof titleSlot === "string") {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div${attr("class", title())}><h3${attr("class", h3())}>${escape_html(titleSlot)}</h3></div>`;
    } else {
      $$payload.out += "<!--[!-->";
      if (titleSlot) {
        $$payload.out += "<!--[-->";
        titleSlot($$payload);
        $$payload.out += `<!---->`;
      } else {
        $$payload.out += "<!--[!-->";
      }
      $$payload.out += `<!--]-->`;
    }
    $$payload.out += `<!--]--> `;
    children($$payload);
    $$payload.out += `<!----> `;
    if (arrow) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div${attr("class", arrowBase({ arrow, position }))}></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div>`;
  } else {
    $$payload.out += "<!--[!-->";
    {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function DatabaseSolid($$payload, $$props) {
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
    ariaLabel = "database solid",
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
  $$payload.out += `<!--]--><path d="M12 7.205c4.418 0 8-1.165 8-2.602C20 3.165 16.418 2 12 2S4 3.165 4 4.603c0 1.437 3.582 2.602 8 2.602ZM12 22c4.963 0 8-1.686 8-2.603v-4.404c-.052.032-.112.06-.165.09a7.75 7.75 0 0 1-.745.387c-.193.088-.394.173-.6.253-.063.024-.124.05-.189.073a18.934 18.934 0 0 1-6.3.998c-2.135.027-4.26-.31-6.3-.998-.065-.024-.126-.05-.189-.073a10.143 10.143 0 0 1-.852-.373 7.75 7.75 0 0 1-.493-.267c-.053-.03-.113-.058-.165-.09v4.404C4 20.315 7.037 22 12 22Zm7.09-13.928a9.91 9.91 0 0 1-.6.253c-.063.025-.124.05-.189.074a18.935 18.935 0 0 1-6.3.998c-2.135.027-4.26-.31-6.3-.998-.065-.024-.126-.05-.189-.074a10.163 10.163 0 0 1-.852-.372 7.816 7.816 0 0 1-.493-.268c-.055-.03-.115-.058-.167-.09V12c0 .917 3.037 2.603 8 2.603s8-1.686 8-2.603V7.596c-.052.031-.112.059-.165.09a7.816 7.816 0 0 1-.745.386Z"></path></svg>`;
  pop();
}
function DotsHorizontalOutline($$payload, $$props) {
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
    ariaLabel = "dots horizontal outline",
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let ariaDescribedby = `${title?.id || ""} ${desc?.id || ""}`;
  const hasDescription = !!(title?.id || desc?.id);
  $$payload.out += `<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      color,
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
  $$payload.out += `<!--]--><path stroke="currentColor" stroke-linecap="round" stroke-width="3" d="M6 12h.01m6 0h.01m5.99 0h.01"></path></svg>`;
  pop();
}
function GlobeOutline($$payload, $$props) {
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
    strokeWidth = ctx.strokeWidth || "2",
    desc,
    class: className,
    ariaLabel = "globe outline",
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let ariaDescribedby = `${title?.id || ""} ${desc?.id || ""}`;
  const hasDescription = !!(title?.id || desc?.id);
  $$payload.out += `<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      color,
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
  $$payload.out += `<!--]--><path stroke="currentColor" stroke-linecap="round"${attr("stroke-width", strokeWidth)} d="M4.37 7.657c2.063.528 2.396 2.806 3.202 3.87 1.07 1.413 2.075 1.228 3.192 2.644 1.805 2.289 1.312 5.705 1.312 6.705M20 15h-1a4 4 0 0 0-4 4v1M8.587 3.992c0 .822.112 1.886 1.515 2.58 1.402.693 2.918.351 2.918 2.334 0 .276 0 2.008 1.972 2.008 2.026.031 2.026-1.678 2.026-2.008 0-.65.527-.9 1.177-.9H20M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg>`;
  pop();
}
function HeartSolid($$payload, $$props) {
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
    ariaLabel = "heart solid",
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
  $$payload.out += `<!--]--><path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z"></path></svg>`;
  pop();
}
const __vite_glob_0_0 = '<script>\n  import { Popover, Button, Avatar } from "$lib";\n  import { GlobeOutline, HeartSolid, ThumbsUpSolid, DotsHorizontalOutline } from "flowbite-svelte-icons";\n<\/script>\n\n<div class="flex h-80 items-end justify-center">\n  <Button id="demo" class="-mb-4">Company profile</Button>\n  <Popover triggeredBy="#demo" class="w-80 text-sm">\n    <div class="flex p-3">\n      <div class="me-3 shrink-0">\n        <a href="/" aria-label="popover-example" class="block rounded-lg bg-gray-100 p-2 dark:bg-gray-700">\n          <img class="h-8 w-8 rounded-full" src="/images/flowbite-svelte-icon-logo.svg" alt="Flowbite logo" />\n        </a>\n      </div>\n      <div>\n        <p class="mb-1 text-base font-semibold leading-none text-gray-900 dark:text-white">\n          <a href="/" class="hover:underline">Flowbite</a>\n        </p>\n        <p class="mb-3 text-sm font-normal">Tech company</p>\n        <p class="mb-4 text-sm font-light">Open-source library of Tailwind CSS components and Figma design system.</p>\n        <ul class="text-sm font-light">\n          <li class="mb-2 flex items-center">\n            <GlobeOutline class="me-2 h-3.5 w-3.5" />\n            <a href="/" class="text-primary-600 hover:underline dark:text-primary-500">https://flowbite.com/</a>\n          </li>\n          <li class="mb-2 flex items-start">\n            <HeartSolid class="me-2 h-5 w-5" />\n            <span>4,567,346 people like this including 5 of your friends</span>\n          </li>\n        </ul>\n        <div class="mb-3 ms-4 flex">\n          <Avatar src="/images/profile-picture-1.webp" stacked />\n          <Avatar src="/images/profile-picture-2.webp" stacked />\n          <Avatar src="/images/profile-picture-3.webp" stacked />\n          <Avatar stacked href="/" class="bg-gray-700 text-white hover:bg-gray-600 dark:bg-gray-700">+3</Avatar>\n        </div>\n        <div class="flex">\n          <Button color="alternative" class="me-2 w-full">\n            <ThumbsUpSolid class="me-2" />\n            Like page\n          </Button>\n          <Button color="alternative">\n            <DotsHorizontalOutline class="h-3.5 w-3.5" />\n          </Button>\n        </div>\n      </div>\n    </div>\n  </Popover>\n</div>\n';
const __vite_glob_0_1 = '<script>\n  import { Popover } from "$lib";\n  import { QuestionCircleSolid, ChevronRightOutline } from "flowbite-svelte-icons";\n<\/script>\n\n<div class="h-80">\n  <div class="flex items-center text-sm font-light text-gray-500 dark:text-gray-400">\n    This is just some informational text\n    <button id="b3">\n      <QuestionCircleSolid class="ms-1.5 h-5 w-5" />\n      <span class="sr-only">Show information</span>\n    </button>\n  </div>\n  <Popover arrow={false} triggeredBy="#b3" class="w-72 bg-white p-3 text-sm font-light text-gray-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400" position="bottom-start">\n    <div class="space-y-2 p-3">\n      <h3 class="font-semibold text-gray-900 dark:text-white">Activity growth - Incremental</h3>\n      Report helps navigate cumulative growth of community activities. Ideally, the chart should have a growing trend.\n      <h3 class="font-semibold text-gray-900 dark:text-white">Calculation</h3>\n      For each date bucket, the all-time volume of activities is calculated. This means that activities in period n contain all activities up to period n.\n      <a href="/" class="flex items-center font-medium text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-600">\n        Read more <ChevronRightOutline class="ms-1.5 h-4 w-4 text-primary-600 dark:text-primary-500" />\n      </a>\n    </div>\n  </Popover>\n</div>\n';
const __vite_glob_0_2 = '<script lang="ts">\n  import { Button, Popover } from "$lib";\n<\/script>\n\n<div class="m-4 flex justify-center">\n  <div id="ext-ref" class=" m-8 w-40 rounded-lg border border-gray-200 p-2 dark:border-gray-600">External reference</div>\n</div>\n<div class="space-x-4 rtl:space-x-reverse">\n  <Button id="ref-left">Left</Button>\n  <Button id="ref-top">Top</Button>\n  <Button id="ref-right">Right</Button>\n</div>\n<Popover reference="#ext-ref" color="emerald" triggeredBy="#ref-left" position="left" class="w-40 p-4 text-sm font-light">Popover content.</Popover>\n<Popover reference="#ext-ref" color="cyan" triggeredBy="#ref-top" position="top" class="w-40 p-4 text-sm font-light">Popover content.</Popover>\n<Popover reference="#ext-ref" color="pink" triggeredBy="#ref-right" position="right" class="w-40 p-4 text-sm font-light">Popover content.</Popover>\n';
const __vite_glob_0_3 = '<script>\n  import { Popover } from "$lib";\n  import { ChevronRightOutline } from "flowbite-svelte-icons";\n<\/script>\n\n<div class="flex h-80 items-end">\n  <p class="font-light text-gray-500 dark:text-gray-400">\n    Due to its central geographic location in Southern Europe, <a href="/" class="text-primary-600 underline hover:no-underline dark:text-primary-500" id="popover-image">Italy</a>\n    has historically been home to myriad peoples and cultures. In addition to the various ancient peoples dispersed throughout what is now modern-day Italy, the most predominant being the Indo-European Italic peoples who gave the peninsula its name, beginning from the classical era, Phoenicians and Carthaginians founded colonies mostly in insular Italy\n  </p>\n  <Popover triggeredBy="#popover-image" class="w-96 text-sm font-light">\n    <div class="grid grid-cols-5">\n      <div class="col-span-3 p-3">\n        <div class="space-y-2">\n          <h3 class="font-semibold text-gray-900 dark:text-white">\n            About Italy\n            <p class="text-gray-500 dark:text-gray-500">Italy is located in the middle of the Mediterranean Sea, in Southern Europe it is also considered part of Western Europe. A unitary parliamentary republic with Rome as its capital and largest city.</p>\n            <a href="/" class="flex items-center font-medium text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-600">\n              Read more <ChevronRightOutline class="ms-1.5 h-2 w-2 text-primary-600 dark:text-primary-500" />\n            </a>\n          </h3>\n        </div>\n      </div>\n      <img src="/images/italy.png" class="col-span-2 h-full rounded-e-lg" alt="Italy map" />\n    </div>\n  </Popover>\n</div>\n';
const __vite_glob_0_4 = '<script lang="ts">\n  import { Popover, Label, Input, Checkbox, Button } from "$lib";\n  import { CheckOutline, CloseOutline } from "flowbite-svelte-icons";\n<\/script>\n\n<form class="mb-8">\n  <div class="mb-6">\n    <Label for="email" class="mb-2">Your email</Label>\n    <Input type="email" id="email" placeholder="name@flowbite.com" required />\n  </div>\n  <div class="mb-6">\n    <Label for="password" class="mb-2">Your password</Label>\n    <Input type="password" id="password" required />\n  </div>\n  <Checkbox class="mb-6">Remember me</Checkbox>\n  <Button type="submit">Submit</Button>\n</form>\n<Popover arrow={false} class="p-4 text-sm" triggeredBy="#password" position="bottom">\n  <h3 class="font-semibold text-gray-900 dark:text-white">Must have at least 6 characters</h3>\n  <div class="grid grid-cols-4 gap-2">\n    <div class="h-1 bg-orange-300 dark:bg-orange-400"></div>\n    <div class="h-1 bg-orange-300 dark:bg-orange-400"></div>\n    <div class="h-1 bg-gray-200 dark:bg-gray-600"></div>\n    <div class="h-1 bg-gray-200 dark:bg-gray-600"></div>\n  </div>\n  <p class="py-2">It’s better to have:</p>\n  <ul>\n    <li class="mb-1 flex items-center">\n      <CheckOutline class="me-2 h-4 w-4 text-green-400 dark:text-green-500" />\n      Upper &amp; lower case letters\n    </li>\n    <li class="mb-1 flex items-center">\n      <CheckOutline class="me-2 h-4 w-4 text-green-400 dark:text-green-500" />\n      A symbol (#$&amp;)\n    </li>\n    <li class="flex items-center">\n      <CloseOutline class="me-2 h-4 w-4 text-gray-300 dark:text-gray-400" />A longer password (min. 12 chars.)\n    </li>\n  </ul>\n</Popover>\n';
const __vite_glob_0_5 = '<script>\n  import { Popover, Button } from "$lib";\n  import { DatabaseSolid, ChevronRightOutline } from "flowbite-svelte-icons";\n<\/script>\n\n<div class="flex h-40 items-end justify-center">\n  <Button id="progress">\n    <DatabaseSolid class="me-2 h-5 w-5 text-white dark:text-white" /> Storage status\n  </Button>\n  <Popover triggeredBy="#progress" class="w-64 p-3 text-sm font-light">\n    <div class="space-y-2">\n      <h3 class="font-semibold text-gray-900 dark:text-white">Available storage</h3>\n      <p class="text-gray-500 dark:text-gray-400">\n        This server has <span class="font-semibold text-gray-900 dark:text-white">30</span>\n        of\n        <span class="font-semibold text-gray-900 dark:text-white">150 GB</span>\n        of block storage remaining.\n      </p>\n      <div class="mb-4 h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">\n        <div class="h-2.5 rounded-full bg-red-600" style="width: 85%"></div>\n      </div>\n      <a href="/" class="flex items-center font-medium text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-600">\n        Upgrade now <ChevronRightOutline class="ms-1.5 h-4 w-4 text-primary-600 dark:text-primary-500" />\n      </a>\n    </div>\n  </Popover>\n</div>\n';
const __vite_glob_0_6 = '<script lang="ts">\n  import { Popover, Button } from "$lib";\n<\/script>\n';
const __vite_glob_0_7 = `<script lang="ts">
  import { Button, Popover } from "$lib";
<\/script>

<div class="flex h-40 items-end justify-center">
  <Button id="titleSlot">Default popover</Button>
  <Popover class="w-64 text-sm font-light" triggeredBy="#titleSlot">
    {#snippet titleSlot()}
      <div class="rounded-t-md bg-sky-200 p-2 text-lg font-bold text-sky-600">titleSlot snippet</div>
    {/snippet}
    <p class="px-3 py-2">And here's some amazing content. It's very engaging. Right?</p>
  </Popover>
</div>
`;
const __vite_glob_0_8 = '<script lang="ts">\n  import { Button, Popover, Avatar } from "$lib";\n<\/script>\n\n<div class="flex h-64 items-end justify-center">\n  <Button id="user_profile" class="-mb-2">User profile</Button>\n  <Popover triggeredBy="#user_profile" class="w-64 bg-white text-sm font-light text-gray-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400">\n    <div class="p-6">\n      <div class="mb-2 flex items-center justify-between">\n        <Avatar href="/" src="/images/profile-picture-1.webp" alt="Jese Leos" />\n        <Button size="xs">Follow</Button>\n      </div>\n      <div class="text-base font-semibold leading-none text-gray-900 dark:text-white">\n        <a href="/">Jese Leos</a>\n      </div>\n      <div class="mb-3 text-sm font-normal">\n        <a href="/" class="hover:underline">@jeseleos</a>\n      </div>\n      <div class="mb-4 text-sm font-light">\n        Open-source contributor. Building <a href="/" class="text-primary-600 hover:underline dark:text-primary-500">flowbite.com</a>\n        .\n      </div>\n      <ul class="flex text-sm font-light">\n        <li class="me-2">\n          <a href="/" class="hover:underline">\n            <span class="font-semibold text-gray-900 dark:text-white">799</span>\n            <span>Following</span>\n          </a>\n        </li>\n        <li>\n          <a href="/" class="hover:underline">\n            <span class="font-semibold text-gray-900 dark:text-white">3,758</span>\n            <span>Followers</span>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </Popover>\n</div>\n';
function TitleSlot($$payload) {
  $$payload.out += `<div class="flex h-40 items-end justify-center">`;
  Button($$payload, {
    id: "titleSlot",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Default popover`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  {
    let titleSlot = function($$payload2) {
      $$payload2.out += `<div class="rounded-t-md bg-sky-200 p-2 text-lg font-bold text-sky-600">titleSlot snippet</div>`;
    };
    Popover($$payload, {
      class: "w-64 text-sm font-light",
      triggeredBy: "#titleSlot",
      titleSlot,
      children: ($$payload2) => {
        $$payload2.out += `<p class="px-3 py-2">And here's some amazing content. It's very engaging. Right?</p>`;
      },
      $$slots: { titleSlot: true, default: true }
    });
  }
  $$payload.out += `<!----></div>`;
}
function UserProfile($$payload) {
  $$payload.out += `<div class="flex h-64 items-end justify-center">`;
  Button($$payload, {
    id: "user_profile",
    class: "-mb-2",
    children: ($$payload2) => {
      $$payload2.out += `<!---->User profile`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Popover($$payload, {
    triggeredBy: "#user_profile",
    class: "w-64 bg-white text-sm font-light text-gray-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400",
    children: ($$payload2) => {
      $$payload2.out += `<div class="p-6"><div class="mb-2 flex items-center justify-between">`;
      Avatar($$payload2, {
        href: "/",
        src: "/images/profile-picture-1.webp",
        alt: "Jese Leos"
      });
      $$payload2.out += `<!----> `;
      Button($$payload2, {
        size: "xs",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Follow`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----></div> <div class="text-base font-semibold leading-none text-gray-900 dark:text-white"><a href="/">Jese Leos</a></div> <div class="mb-3 text-sm font-normal"><a href="/" class="hover:underline">@jeseleos</a></div> <div class="mb-4 text-sm font-light">Open-source contributor. Building <a href="/" class="text-primary-600 hover:underline dark:text-primary-500">flowbite.com</a> .</div> <ul class="flex text-sm font-light"><li class="me-2"><a href="/" class="hover:underline"><span class="font-semibold text-gray-900 dark:text-white">799</span> <span>Following</span></a></li> <li><a href="/" class="hover:underline"><span class="font-semibold text-gray-900 dark:text-white">3,758</span> <span>Followers</span></a></li></ul></div>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div>`;
}
function CompanyProfile($$payload) {
  $$payload.out += `<div class="flex h-80 items-end justify-center">`;
  Button($$payload, {
    id: "demo",
    class: "-mb-4",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Company profile`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Popover($$payload, {
    triggeredBy: "#demo",
    class: "w-80 text-sm",
    children: ($$payload2) => {
      $$payload2.out += `<div class="flex p-3"><div class="me-3 shrink-0"><a href="/" aria-label="popover-example" class="block rounded-lg bg-gray-100 p-2 dark:bg-gray-700"><img class="h-8 w-8 rounded-full" src="/images/flowbite-svelte-icon-logo.svg" alt="Flowbite logo"></a></div> <div><p class="mb-1 text-base font-semibold leading-none text-gray-900 dark:text-white"><a href="/" class="hover:underline">Flowbite</a></p> <p class="mb-3 text-sm font-normal">Tech company</p> <p class="mb-4 text-sm font-light">Open-source library of Tailwind CSS components and Figma design system.</p> <ul class="text-sm font-light"><li class="mb-2 flex items-center">`;
      GlobeOutline($$payload2, { class: "me-2 h-3.5 w-3.5" });
      $$payload2.out += `<!----> <a href="/" class="text-primary-600 hover:underline dark:text-primary-500">https://flowbite.com/</a></li> <li class="mb-2 flex items-start">`;
      HeartSolid($$payload2, { class: "me-2 h-5 w-5" });
      $$payload2.out += `<!----> <span>4,567,346 people like this including 5 of your friends</span></li></ul> <div class="mb-3 ms-4 flex">`;
      Avatar($$payload2, {
        src: "/images/profile-picture-1.webp",
        stacked: true
      });
      $$payload2.out += `<!----> `;
      Avatar($$payload2, {
        src: "/images/profile-picture-2.webp",
        stacked: true
      });
      $$payload2.out += `<!----> `;
      Avatar($$payload2, {
        src: "/images/profile-picture-3.webp",
        stacked: true
      });
      $$payload2.out += `<!----> `;
      Avatar($$payload2, {
        stacked: true,
        href: "/",
        class: "bg-gray-700 text-white hover:bg-gray-600 dark:bg-gray-700",
        children: ($$payload3) => {
          $$payload3.out += `<!---->+3`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----></div> <div class="flex">`;
      Button($$payload2, {
        color: "alternative",
        class: "me-2 w-full",
        children: ($$payload3) => {
          ThumbsUpSolid($$payload3, { class: "me-2" });
          $$payload3.out += `<!----> Like page`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Button($$payload2, {
        color: "alternative",
        children: ($$payload3) => {
          DotsHorizontalOutline($$payload3, { class: "h-3.5 w-3.5" });
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----></div></div></div>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div>`;
}
function Image($$payload) {
  $$payload.out += `<div class="flex h-80 items-end"><p class="font-light text-gray-500 dark:text-gray-400">Due to its central geographic location in Southern Europe, <a href="/" class="text-primary-600 underline hover:no-underline dark:text-primary-500" id="popover-image">Italy</a> has historically been home to myriad peoples and cultures. In addition to the various ancient peoples dispersed throughout what is now modern-day Italy, the most predominant being the Indo-European Italic peoples who gave the peninsula its name, beginning from the classical era, Phoenicians and Carthaginians founded colonies mostly in insular Italy</p> `;
  Popover($$payload, {
    triggeredBy: "#popover-image",
    class: "w-96 text-sm font-light",
    children: ($$payload2) => {
      $$payload2.out += `<div class="grid grid-cols-5"><div class="col-span-3 p-3"><div class="space-y-2"><h3 class="font-semibold text-gray-900 dark:text-white">About Italy <p class="text-gray-500 dark:text-gray-500">Italy is located in the middle of the Mediterranean Sea, in Southern Europe it is also considered part of Western Europe. A unitary parliamentary republic with Rome as its capital and largest city.</p> <a href="/" class="flex items-center font-medium text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-600">Read more `;
      ChevronRightOutline($$payload2, {
        class: "ms-1.5 h-2 w-2 text-primary-600 dark:text-primary-500"
      });
      $$payload2.out += `<!----></a></h3></div></div> <img src="/images/italy.png" class="col-span-2 h-full rounded-e-lg" alt="Italy map"></div>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div>`;
}
function Description($$payload) {
  $$payload.out += `<div class="h-80"><div class="flex items-center text-sm font-light text-gray-500 dark:text-gray-400">This is just some informational text <button id="b3">`;
  QuestionCircleSolid($$payload, { class: "ms-1.5 h-5 w-5" });
  $$payload.out += `<!----> <span class="sr-only">Show information</span></button></div> `;
  Popover($$payload, {
    arrow: false,
    triggeredBy: "#b3",
    class: "w-72 bg-white p-3 text-sm font-light text-gray-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400",
    position: "bottom-start",
    children: ($$payload2) => {
      $$payload2.out += `<div class="space-y-2 p-3"><h3 class="font-semibold text-gray-900 dark:text-white">Activity growth - Incremental</h3> Report helps navigate cumulative growth of community activities. Ideally, the chart should have a growing trend. <h3 class="font-semibold text-gray-900 dark:text-white">Calculation</h3> For each date bucket, the all-time volume of activities is calculated. This means that activities in period n contain all activities up to period n. <a href="/" class="flex items-center font-medium text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-600">Read more `;
      ChevronRightOutline($$payload2, {
        class: "ms-1.5 h-4 w-4 text-primary-600 dark:text-primary-500"
      });
      $$payload2.out += `<!----></a></div>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div>`;
}
function Progress($$payload) {
  $$payload.out += `<div class="flex h-40 items-end justify-center">`;
  Button($$payload, {
    id: "progress",
    children: ($$payload2) => {
      DatabaseSolid($$payload2, {
        class: "me-2 h-5 w-5 text-white dark:text-white"
      });
      $$payload2.out += `<!----> Storage status`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Popover($$payload, {
    triggeredBy: "#progress",
    class: "w-64 p-3 text-sm font-light",
    children: ($$payload2) => {
      $$payload2.out += `<div class="space-y-2"><h3 class="font-semibold text-gray-900 dark:text-white">Available storage</h3> <p class="text-gray-500 dark:text-gray-400">This server has <span class="font-semibold text-gray-900 dark:text-white">30</span> of <span class="font-semibold text-gray-900 dark:text-white">150 GB</span> of block storage remaining.</p> <div class="mb-4 h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700"><div class="h-2.5 rounded-full bg-red-600" style="width: 85%"></div></div> <a href="/" class="flex items-center font-medium text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-600">Upgrade now `;
      ChevronRightOutline($$payload2, {
        class: "ms-1.5 h-4 w-4 text-primary-600 dark:text-primary-500"
      });
      $$payload2.out += `<!----></a></div>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div>`;
}
function Password($$payload) {
  $$payload.out += `<form class="mb-8"><div class="mb-6">`;
  Label($$payload, {
    for: "email",
    class: "mb-2",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Your email`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Input($$payload, {
    type: "email",
    id: "email",
    placeholder: "name@flowbite.com",
    required: true
  });
  $$payload.out += `<!----></div> <div class="mb-6">`;
  Label($$payload, {
    for: "password",
    class: "mb-2",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Your password`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Input($$payload, {
    type: "password",
    id: "password",
    required: true
  });
  $$payload.out += `<!----></div> `;
  Checkbox($$payload, {
    class: "mb-6",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Remember me`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Button($$payload, {
    type: "submit",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Submit`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></form> `;
  Popover($$payload, {
    arrow: false,
    class: "p-4 text-sm",
    triggeredBy: "#password",
    position: "bottom",
    children: ($$payload2) => {
      $$payload2.out += `<h3 class="font-semibold text-gray-900 dark:text-white">Must have at least 6 characters</h3> <div class="grid grid-cols-4 gap-2"><div class="h-1 bg-orange-300 dark:bg-orange-400"></div> <div class="h-1 bg-orange-300 dark:bg-orange-400"></div> <div class="h-1 bg-gray-200 dark:bg-gray-600"></div> <div class="h-1 bg-gray-200 dark:bg-gray-600"></div></div> <p class="py-2">It’s better to have:</p> <ul><li class="mb-1 flex items-center">`;
      CheckOutline($$payload2, {
        class: "me-2 h-4 w-4 text-green-400 dark:text-green-500"
      });
      $$payload2.out += `<!----> Upper &amp; lower case letters</li> <li class="mb-1 flex items-center">`;
      CheckOutline($$payload2, {
        class: "me-2 h-4 w-4 text-green-400 dark:text-green-500"
      });
      $$payload2.out += `<!----> A symbol (#$&amp;)</li> <li class="flex items-center">`;
      CloseOutline($$payload2, {
        class: "me-2 h-4 w-4 text-gray-300 dark:text-gray-400"
      });
      $$payload2.out += `<!---->A longer password (min. 12 chars.)</li></ul>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!---->`;
}
function ExternalReference($$payload) {
  $$payload.out += `<div class="m-4 flex justify-center"><div id="ext-ref" class="m-8 w-40 rounded-lg border border-gray-200 p-2 dark:border-gray-600">External reference</div></div> <div class="space-x-4 rtl:space-x-reverse">`;
  Button($$payload, {
    id: "ref-left",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Left`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Button($$payload, {
    id: "ref-top",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Top`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Button($$payload, {
    id: "ref-right",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Right`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div> `;
  Popover($$payload, {
    reference: "#ext-ref",
    color: "emerald",
    triggeredBy: "#ref-left",
    position: "left",
    class: "w-40 p-4 text-sm font-light",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Popover content.`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Popover($$payload, {
    reference: "#ext-ref",
    color: "cyan",
    triggeredBy: "#ref-top",
    position: "top",
    class: "w-40 p-4 text-sm font-light",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Popover content.`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Popover($$payload, {
    reference: "#ext-ref",
    color: "pink",
    triggeredBy: "#ref-right",
    position: "right",
    class: "w-40 p-4 text-sm font-light",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Popover content.`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!---->`;
}
function _page($$payload, $$props) {
  push();
  const dirName = "popover";
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/CompanyProfile.svelte": __vite_glob_0_0,
    "./examples/Description.svelte": __vite_glob_0_1,
    "./examples/ExternalReference.svelte": __vite_glob_0_2,
    "./examples/Image.svelte": __vite_glob_0_3,
    "./examples/Password.svelte": __vite_glob_0_4,
    "./examples/Progress.svelte": __vite_glob_0_5,
    "./examples/Setup.svelte": __vite_glob_0_6,
    "./examples/TitleSlot.svelte": __vite_glob_0_7,
    "./examples/UserProfile.svelte": __vite_glob_0_8
  });
  const exampleArr = [
    {
      name: "Title slot",
      component: TitleSlot
    },
    {
      name: "User profile",
      component: UserProfile
    },
    {
      name: "Company profile",
      component: CompanyProfile
    },
    {
      name: "Image",
      component: Image
    },
    {
      name: "Description",
      component: Description
    },
    {
      name: "Progress",
      component: Progress
    },
    {
      name: "Password",
      component: Password
    },
    {
      name: "External reference",
      component: ExternalReference
    }
  ];
  let selectedExample = exampleArr[0].name;
  let svelteCode = getExampleFileName(selectedExample, exampleArr);
  function findObject(arr, name) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = findObject(exampleArr, selectedExample);
  const positions = Object.keys(popover.variants.position);
  let position = positions[0];
  const colors = Object.keys(popover.variants.color);
  let color = "default";
  let popoverClass = "w-64 text-sm font-light";
  const changeClass = () => {
    popoverClass = popoverClass === "w-64 text-sm font-light" ? "w-64 text-sm font-light p-2" : "w-64 text-sm font-light";
  };
  let arrow = true;
  const changeArrow = () => {
    arrow = !arrow;
    offset = 0;
  };
  let offset = 0;
  const changeOffset = () => {
    offset = offset === 0 ? 20 : 0;
    arrow = false;
  };
  const transitions = [
    {
      name: "Fade",
      transition: fade,
      params: { duration: 100, easing: linear }
    },
    {
      name: "Fly",
      transition: fly,
      params: { duration: 300, easing: linear, x: -150 }
    },
    {
      name: "Blur",
      transition: blur,
      params: { duration: 800, easing: sineIn }
    }
  ];
  let selectedTransition = "Fade";
  let currentTransition = transitions.find((t) => t.name === selectedTransition) || transitions[0];
  let generatedCode = (() => {
    let props = [];
    if (color !== "default") props.push(` color="${color}"`);
    if (position !== "top") props.push(` position="${position}"`);
    if (offset) props.push(` offset="${offset}"`);
    if (popoverClass !== "w-64 text-sm font-light") props.push(` class="${popoverClass}"`);
    if (arrow !== true) props.push(" arrow={false}");
    if (currentTransition !== transitions[0]) {
      props.push(` transition={${currentTransition.transition.name}}`);
      let paramValues = currentTransition.params;
      const paramsString = Object.entries(paramValues).map(([key, value]) => {
        if (typeof value === "function") {
          return `${key}:${value.name}`;
        }
        return `${key}:${value}`;
      }).join(",");
      props.push(` params={{${paramsString}}}`);
    }
    const propsString = props.length > 0 ? props.map((prop) => `
  ${prop}`).join("") + "\n" : "";
    return `<Button id="demo">Popover</Button>
<Popover titleSlot="Popover title" triggeredBy="#demo"${propsString} >
  My Popover content
</Popover>`;
  })();
  let builderExpand = false;
  let showBuilderExpandButton = isGeneratedCodeOverflow(generatedCode);
  const handleBuilderExpandClick = () => {
    builderExpand = !builderExpand;
  };
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
        $$payload3.out += `<!---->Popover`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    H2($$payload2, {
      children: ($$payload3) => {
        $$payload3.out += `<!---->Setup`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    HighlightCompo($$payload2, {
      code: exampleModules[`./examples/Setup.svelte`]
    });
    $$payload2.out += `<!----> `;
    H2($$payload2, {
      children: ($$payload3) => {
        $$payload3.out += `<!---->Interactive Popover Builder`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    {
      let codeblock = function($$payload3) {
        DynamicCodeBlockHighlight($$payload3, {
          handleExpandClick: handleBuilderExpandClick,
          expand: builderExpand,
          showExpandButton: showBuilderExpandButton,
          code: generatedCode
        });
      };
      CodeWrapper($$payload2, {
        class: "",
        codeblock,
        children: ($$payload3) => {
          const each_array = ensure_array_like(colors);
          const each_array_1 = ensure_array_like(positions);
          const each_array_2 = ensure_array_like(transitions);
          $$payload3.out += `<div class="flex h-64 items-center justify-center">`;
          Button($$payload3, {
            id: "b1",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Popover`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Popover($$payload3, {
            color,
            position,
            arrow,
            offset,
            class: popoverClass,
            transition: currentTransition.transition,
            params: currentTransition.params,
            titleSlot: "Popover title",
            triggeredBy: "#b1",
            children: ($$payload4) => {
              $$payload4.out += `<p class="px-3 py-2 dark:text-white">And here's some amazing content. It's very engaging. Right?</p>`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----></div> <div class="mb-4 flex flex-wrap space-x-4">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Color`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let colorOption = each_array[$$index];
            Radio($$payload3, {
              labelClass: "w-24 my-1",
              name: "alert_reactive",
              get group() {
                return color;
              },
              set group($$value) {
                color = $$value;
                $$settled = false;
              },
              color: colorOption,
              value: colorOption,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(colorOption)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> <div class="mb-4 flex flex-wrap space-x-2">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Position`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
            let option = each_array_1[$$index_1];
            Radio($$payload3, {
              labelClass: "w-28 my-1",
              name: "interactive_toast_position",
              get group() {
                return position;
              },
              set group($$value) {
                position = $$value;
                $$settled = false;
              },
              value: option,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(option)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> <div class="mb-4 flex flex-wrap space-x-2">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Transition`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
            let transition = each_array_2[$$index_2];
            Radio($$payload3, {
              labelClass: "w-16 my-1",
              name: "interactive_transition",
              get group() {
                return selectedTransition;
              },
              set group($$value) {
                selectedTransition = $$value;
                $$settled = false;
              },
              value: transition.name,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(transition.name)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> <div class="flex flex-wrap justify-center gap-2 md:justify-start">`;
          Button($$payload3, {
            class: "w-36",
            onclick: changeClass,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(popoverClass !== "w-64 text-sm font-light" ? "Remove class" : "Add class")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-36",
            color: "secondary",
            onclick: changeArrow,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(arrow ? "Remove arrow" : "Add arrow")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-36",
            color: "rose",
            onclick: changeOffset,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(offset ? "Remove offset" : "Add offset")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----></div>`;
        },
        $$slots: { codeblock: true, default: true }
      });
    }
    $$payload2.out += `<!----> `;
    H2($$payload2, {
      children: ($$payload3) => {
        $$payload3.out += `<!---->Examples`;
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
          const each_array_3 = ensure_array_like(exampleArr);
          $$payload3.out += `<div class="mb-12 flex flex-wrap">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Example`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
            let style = each_array_3[$$index_3];
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
