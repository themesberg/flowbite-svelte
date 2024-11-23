import { a as append, t as template, b as text } from "../chunks/disclose-version.0TX42Q8e.js";
import { c as child, s as sibling, f as first_child, n as next, r as reset, p as push, a6 as state, u as user_effect, a as pop, b as get, t as template_effect, a7 as set, d as derived } from "../chunks/runtime.BkfDdwap.js";
import { a as set_text } from "../chunks/store.B2xZ3Ft6.js";
import { e as each, i as index } from "../chunks/each.CtHIoDcm.js";
import { b as proxy, c as component } from "../chunks/props.B7eOu8hW.js";
import { B as Badge, m as indicator, V as uiHelpers } from "../chunks/theme.BtjZjf2R.js";
import { B as Button } from "../chunks/markdown.Ba9FtS5g.js";
import { I as Indicator } from "../chunks/Indicator.BIdmiP_T.js";
import { C as CompoAttributesViewer, L as Label, R as Radio } from "../chunks/CompoAttributesViewer.HsPJjrMu.js";
import { H as HighlightCompo } from "../chunks/HighlightCompo.D1kgIYBY.js";
import { D as DynamicCodeBlockHighlight } from "../chunks/DynamicCodeBlockHighlight.BS23lgW_.js";
import { C as CodeWrapper } from "../chunks/CodeWrapper.CdoIAYb8.js";
import { H as H1 } from "../chunks/H1.DunGd_Oq.js";
import { H as H2 } from "../chunks/H2.qsp5CBkK.js";
import { g as getExampleFileName, i as isGeneratedCodeOverflow, d as isSvelteOverflow } from "../chunks/helpers.B9KbZW0W.js";
import "../chunks/legacy.DvF4DOPZ.js";
import { A as Avatar } from "../chunks/Avatar.BvpffrdL.js";
import { E as EnvelopeSolid } from "../chunks/EnvelopeSolid.D3NXeFbI.js";
import { C as CheckCircleSolid } from "../chunks/CheckCircleSolid.D51Mv3aE.js";
const __vite_glob_0_0 = '<script lang="ts">\n  import { Avatar, Badge, Indicator } from "$lib";\n<\/script>\n\n<div class="flex gap-2">\n  <ul class="w-full max-w-sm divide-y divide-gray-200 dark:divide-gray-700">\n    <li class="py-3 sm:py-4">\n      <div class="flex items-center space-x-3 rtl:space-x-reverse">\n        <Avatar src="/images/profile-picture-5.webp" alt="Neil image" />\n        <div class="min-w-0 flex-1">\n          <p class="truncate text-sm font-semibold text-gray-900 dark:text-white">Neil Sims</p>\n          <p class="truncate text-sm text-gray-500 dark:text-gray-400">email@flowbite.com</p>\n        </div>\n        <Badge color="green" rounded class="px-2.5 py-0.5">\n          <Indicator color="green" size="xs" class="me-1" />Available\n        </Badge>\n      </div>\n    </li>\n    <li class="py-3 sm:py-4">\n      <div class="flex items-center space-x-3 rtl:space-x-reverse">\n        <div class="flex-shrink-0">\n          <Avatar src="/images/profile-picture-4.webp" alt="Bonnie image" />\n        </div>\n        <div class="min-w-0 flex-1">\n          <p class="truncate text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</p>\n          <p class="truncate text-sm text-gray-500 dark:text-gray-400">email@flowbite.com</p>\n        </div>\n        <Badge color="red" rounded class="px-2.5 py-0.5">\n          <Indicator color="red" size="xs" class="me-1" />Unavailable\n        </Badge>\n      </div>\n    </li>\n  </ul>\n</div>\n';
const __vite_glob_0_1 = '<script lang="ts">\n  import { Button, Indicator } from "$lib";\n  import { EnvelopeSolid } from "flowbite-svelte-icons";\n<\/script>\n\n<div class="flex justify-center">\n  <Button size="lg" class="relative">\n    <EnvelopeSolid class="me-2 h-4 w-4 text-white dark:text-white" />\n    <span class="sr-only">Notifications</span>\n    Messages\n    <Indicator color="red" border size="xl" placement="top-right">\n      <span class="text-xs font-bold text-white">8</span>\n    </Indicator>\n  </Button>\n</div>\n';
const __vite_glob_0_2 = '<script lang="ts">\n  import { Indicator } from "$lib";\n<\/script>\n\n<div class="flex flex-wrap justify-start gap-4 md:justify-center">\n  <span class="flex items-center"><Indicator size="sm" color="orange" class="me-1.5" />Visitors</span>\n  <span class="flex items-center"><Indicator size="sm" color="purple" class="me-1.5" />Sessions</span>\n  <span class="flex items-center"><Indicator size="sm" color="indigo" class="me-1.5" />Customers</span>\n  <span class="flex items-center"><Indicator size="sm" color="teal" class="me-1.5" />Revenue</span>\n</div>\n';
const __vite_glob_0_3 = '<script>\n  import { Indicator } from "svelte-5-ui-lib";\n<\/script>\n';
const __vite_glob_0_4 = '<script lang="ts">\n  import { Avatar } from "$lib";\n<\/script>\n\n<div class="flex justify-center">\n  <Avatar src="/images/profile-picture-5.webp" dot={{ color: "green", size: "lg", placement: "top-right" }} />\n  <Avatar src="/images/profile-picture-5.webp" dot={{ color: "red", size: "lg", placement: "top-right" }} />\n</div>\n';
const __vite_glob_0_5 = '<script lang="ts">\n  import { Indicator } from "$lib";\n  import { CheckCircleSolid } from "flowbite-svelte-icons";\n<\/script>\n\n<ol class="flex items-center">\n  <li class="relative mb-6 w-full">\n    <div class="flex items-center">\n      <Indicator size="xl" class="z-10 shrink-0 bg-primary-200 ring-0 ring-white sm:ring-8 dark:bg-primary-900 dark:ring-gray-900">\n        <CheckCircleSolid class="h-6 w-6 text-primary-600 dark:text-primary-300" />\n      </Indicator>\n      <div class="flex h-0.5 w-full bg-gray-200 dark:bg-gray-700"></div>\n    </div>\n    <div class="mt-3">\n      <h3 class="font-medium text-gray-900 dark:text-white">Step 1</h3>\n    </div>\n  </li>\n  <li class="relative mb-6 w-full">\n    <div class="flex items-center">\n      <Indicator size="xl" class="z-10 shrink-0 bg-primary-200 ring-0 ring-white sm:ring-8 dark:bg-primary-900 dark:ring-gray-900">\n        <CheckCircleSolid class="h-6 w-6 text-primary-600 dark:text-primary-300" />\n      </Indicator>\n      <div class="flex h-0.5 w-full bg-gray-200 dark:bg-gray-700"></div>\n    </div>\n    <div class="mt-3">\n      <h3 class="font-medium text-gray-900 dark:text-white">Step 2</h3>\n    </div>\n  </li>\n  <li class="relative mb-6 w-full">\n    <div class="flex items-center">\n      <Indicator size="xl" class="z-10 shrink-0 bg-primary-200 ring-0 ring-white sm:ring-8 dark:bg-primary-900 dark:ring-gray-900">\n        <CheckCircleSolid class="h-6 w-6 text-primary-600 dark:text-primary-300" />\n      </Indicator>\n      <div class="flex h-0.5 w-full bg-gray-200 dark:bg-gray-700"></div>\n    </div>\n    <div class="mt-3">\n      <h3 class="font-medium text-gray-900 dark:text-white">Step 2</h3>\n    </div>\n  </li>\n  <li class="relative mb-6 w-full">\n    <div class="flex items-center">\n      <Indicator size="xl" color="blue" class="z-10 shrink-0 ring-0 ring-white sm:ring-8 dark:bg-gray-700 dark:ring-gray-900">\n        <CheckCircleSolid class="h-6 w-6 text-gray-800 dark:text-gray-300" />\n      </Indicator>\n    </div>\n    <div class="mt-3">\n      <h3 class="font-medium text-gray-900 dark:text-white">Step 3</h3>\n    </div>\n  </li>\n</ol>\n<ol class="flex items-center">\n  <li class="relative mb-6 w-full">\n    <div class="flex items-center">\n      <Indicator size="xl" class="z-10 shrink-0 bg-primary-200 ring-0 ring-white sm:ring-8 dark:bg-primary-900 dark:ring-gray-900">\n        <Indicator color="orange" />\n      </Indicator>\n      <div class="flex h-0.5 w-full bg-gray-200 dark:bg-gray-700"></div>\n    </div>\n    <div class="mt-3">\n      <h3 class="font-medium text-gray-900 dark:text-white">Step 1</h3>\n    </div>\n  </li>\n  <li class="relative mb-6 w-full">\n    <div class="flex items-center">\n      <Indicator size="xl" class="z-10 shrink-0 bg-primary-200 ring-0 ring-white sm:ring-8 dark:bg-primary-900 dark:ring-gray-900">\n        <Indicator color="orange" />\n      </Indicator>\n      <div class="flex h-0.5 w-full bg-gray-200 dark:bg-gray-700"></div>\n    </div>\n    <div class="mt-3">\n      <h3 class="font-medium text-gray-900 dark:text-white">Step 2</h3>\n    </div>\n  </li>\n  <li class="relative mb-6 w-full">\n    <div class="flex items-center">\n      <Indicator size="xl" class="z-10 shrink-0 bg-primary-200 ring-0 ring-white sm:ring-8 dark:bg-primary-900 dark:ring-gray-900">\n        <Indicator color="orange" />\n      </Indicator>\n      <div class="flex h-0.5 w-full bg-gray-200 dark:bg-gray-700"></div>\n    </div>\n    <div class="mt-3">\n      <h3 class="font-medium text-gray-900 dark:text-white">Step 2</h3>\n    </div>\n  </li>\n  <li class="relative mb-6 w-full">\n    <div class="flex items-center">\n      <Indicator size="xl" class="z-10 shrink-0 ring-0 ring-white sm:ring-8 dark:bg-gray-700 dark:ring-gray-900">\n        <Indicator color="emerald" class="dark:!bg-gray-300" />\n      </Indicator>\n    </div>\n    <div class="mt-3">\n      <h3 class="font-medium text-gray-900 dark:text-white">Step 3</h3>\n    </div>\n  </li>\n</ol>\n';
var root_1$1 = template(`<!>Available`, 1);
var root_2$1 = template(`<!>Unavailable`, 1);
var root$5 = template(`<div class="flex gap-2"><ul class="w-full max-w-sm divide-y divide-gray-200 dark:divide-gray-700"><li class="py-3 sm:py-4"><div class="flex items-center space-x-3 rtl:space-x-reverse"><!> <div class="min-w-0 flex-1"><p class="truncate text-sm font-semibold text-gray-900 dark:text-white">Neil Sims</p> <p class="truncate text-sm text-gray-500 dark:text-gray-400">email@flowbite.com</p></div> <!></div></li> <li class="py-3 sm:py-4"><div class="flex items-center space-x-3 rtl:space-x-reverse"><div class="flex-shrink-0"><!></div> <div class="min-w-0 flex-1"><p class="truncate text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</p> <p class="truncate text-sm text-gray-500 dark:text-gray-400">email@flowbite.com</p></div> <!></div></li></ul></div>`);
function Badge_1($$anchor) {
  var div = root$5();
  var ul = child(div);
  var li = child(ul);
  var div_1 = child(li);
  var node = child(div_1);
  Avatar(node, {
    src: "/images/profile-picture-5.webp",
    alt: "Neil image"
  });
  var node_1 = sibling(node, 4);
  Badge(node_1, {
    color: "green",
    rounded: true,
    class: "px-2.5 py-0.5",
    children: ($$anchor2, $$slotProps) => {
      var fragment = root_1$1();
      var node_2 = first_child(fragment);
      Indicator(node_2, { color: "green", size: "xs", class: "me-1" });
      next();
      append($$anchor2, fragment);
    },
    $$slots: { default: true }
  });
  reset(div_1);
  reset(li);
  var li_1 = sibling(li, 2);
  var div_2 = child(li_1);
  var div_3 = child(div_2);
  var node_3 = child(div_3);
  Avatar(node_3, {
    src: "/images/profile-picture-4.webp",
    alt: "Bonnie image"
  });
  reset(div_3);
  var node_4 = sibling(div_3, 4);
  Badge(node_4, {
    color: "red",
    rounded: true,
    class: "px-2.5 py-0.5",
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_2$1();
      var node_5 = first_child(fragment_1);
      Indicator(node_5, { color: "red", size: "xs", class: "me-1" });
      next();
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
  reset(div_2);
  reset(li_1);
  reset(ul);
  reset(div);
  append($$anchor, div);
}
var root_2 = template(`<span class="text-xs font-bold text-white">8</span>`);
var root_1 = template(`<!> <span class="sr-only">Notifications</span> Messages <!>`, 1);
var root$4 = template(`<div class="flex justify-center"><!></div>`);
function Count($$anchor) {
  var div = root$4();
  var node = child(div);
  Button(node, {
    size: "lg",
    class: "relative",
    children: ($$anchor2, $$slotProps) => {
      var fragment = root_1();
      var node_1 = first_child(fragment);
      EnvelopeSolid(node_1, {
        class: "me-2 h-4 w-4 text-white dark:text-white"
      });
      var node_2 = sibling(node_1, 4);
      Indicator(node_2, {
        color: "red",
        border: true,
        size: "xl",
        placement: "top-right",
        children: ($$anchor3, $$slotProps2) => {
          var span = root_2();
          append($$anchor3, span);
        },
        $$slots: { default: true }
      });
      append($$anchor2, fragment);
    },
    $$slots: { default: true }
  });
  reset(div);
  append($$anchor, div);
}
var root$3 = template(`<div class="flex flex-wrap justify-start gap-4 md:justify-center"><span class="flex items-center"><!>Visitors</span> <span class="flex items-center"><!>Sessions</span> <span class="flex items-center"><!>Customers</span> <span class="flex items-center"><!>Revenue</span></div>`);
function Legend($$anchor) {
  var div = root$3();
  var span = child(div);
  var node = child(span);
  Indicator(node, { size: "sm", color: "orange", class: "me-1.5" });
  next();
  reset(span);
  var span_1 = sibling(span, 2);
  var node_1 = child(span_1);
  Indicator(node_1, { size: "sm", color: "purple", class: "me-1.5" });
  next();
  reset(span_1);
  var span_2 = sibling(span_1, 2);
  var node_2 = child(span_2);
  Indicator(node_2, { size: "sm", color: "indigo", class: "me-1.5" });
  next();
  reset(span_2);
  var span_3 = sibling(span_2, 2);
  var node_3 = child(span_3);
  Indicator(node_3, { size: "sm", color: "teal", class: "me-1.5" });
  next();
  reset(span_3);
  reset(div);
  append($$anchor, div);
}
var root$2 = template(`<div class="flex justify-center"><!> <!></div>`);
function Status($$anchor) {
  var div = root$2();
  var node = child(div);
  Avatar(node, {
    src: "/images/profile-picture-5.webp",
    dot: {
      color: "green",
      size: "lg",
      placement: "top-right"
    }
  });
  var node_1 = sibling(node, 2);
  Avatar(node_1, {
    src: "/images/profile-picture-5.webp",
    dot: {
      color: "red",
      size: "lg",
      placement: "top-right"
    }
  });
  reset(div);
  append($$anchor, div);
}
var root$1 = template(`<ol class="flex items-center"><li class="relative mb-6 w-full"><div class="flex items-center"><!> <div class="flex h-0.5 w-full bg-gray-200 dark:bg-gray-700"></div></div> <div class="mt-3"><h3 class="font-medium text-gray-900 dark:text-white">Step 1</h3></div></li> <li class="relative mb-6 w-full"><div class="flex items-center"><!> <div class="flex h-0.5 w-full bg-gray-200 dark:bg-gray-700"></div></div> <div class="mt-3"><h3 class="font-medium text-gray-900 dark:text-white">Step 2</h3></div></li> <li class="relative mb-6 w-full"><div class="flex items-center"><!> <div class="flex h-0.5 w-full bg-gray-200 dark:bg-gray-700"></div></div> <div class="mt-3"><h3 class="font-medium text-gray-900 dark:text-white">Step 2</h3></div></li> <li class="relative mb-6 w-full"><div class="flex items-center"><!></div> <div class="mt-3"><h3 class="font-medium text-gray-900 dark:text-white">Step 3</h3></div></li></ol> <ol class="flex items-center"><li class="relative mb-6 w-full"><div class="flex items-center"><!> <div class="flex h-0.5 w-full bg-gray-200 dark:bg-gray-700"></div></div> <div class="mt-3"><h3 class="font-medium text-gray-900 dark:text-white">Step 1</h3></div></li> <li class="relative mb-6 w-full"><div class="flex items-center"><!> <div class="flex h-0.5 w-full bg-gray-200 dark:bg-gray-700"></div></div> <div class="mt-3"><h3 class="font-medium text-gray-900 dark:text-white">Step 2</h3></div></li> <li class="relative mb-6 w-full"><div class="flex items-center"><!> <div class="flex h-0.5 w-full bg-gray-200 dark:bg-gray-700"></div></div> <div class="mt-3"><h3 class="font-medium text-gray-900 dark:text-white">Step 2</h3></div></li> <li class="relative mb-6 w-full"><div class="flex items-center"><!></div> <div class="mt-3"><h3 class="font-medium text-gray-900 dark:text-white">Step 3</h3></div></li></ol>`, 1);
function Stepper($$anchor) {
  var fragment = root$1();
  var ol = first_child(fragment);
  var li = child(ol);
  var div = child(li);
  var node = child(div);
  Indicator(node, {
    size: "xl",
    class: "z-10 shrink-0 bg-primary-200 ring-0 ring-white sm:ring-8 dark:bg-primary-900 dark:ring-gray-900",
    children: ($$anchor2, $$slotProps) => {
      CheckCircleSolid($$anchor2, {
        class: "h-6 w-6 text-primary-600 dark:text-primary-300"
      });
    },
    $$slots: { default: true }
  });
  next(2);
  reset(div);
  next(2);
  reset(li);
  var li_1 = sibling(li, 2);
  var div_1 = child(li_1);
  var node_1 = child(div_1);
  Indicator(node_1, {
    size: "xl",
    class: "z-10 shrink-0 bg-primary-200 ring-0 ring-white sm:ring-8 dark:bg-primary-900 dark:ring-gray-900",
    children: ($$anchor2, $$slotProps) => {
      CheckCircleSolid($$anchor2, {
        class: "h-6 w-6 text-primary-600 dark:text-primary-300"
      });
    },
    $$slots: { default: true }
  });
  next(2);
  reset(div_1);
  next(2);
  reset(li_1);
  var li_2 = sibling(li_1, 2);
  var div_2 = child(li_2);
  var node_2 = child(div_2);
  Indicator(node_2, {
    size: "xl",
    class: "z-10 shrink-0 bg-primary-200 ring-0 ring-white sm:ring-8 dark:bg-primary-900 dark:ring-gray-900",
    children: ($$anchor2, $$slotProps) => {
      CheckCircleSolid($$anchor2, {
        class: "h-6 w-6 text-primary-600 dark:text-primary-300"
      });
    },
    $$slots: { default: true }
  });
  next(2);
  reset(div_2);
  next(2);
  reset(li_2);
  var li_3 = sibling(li_2, 2);
  var div_3 = child(li_3);
  var node_3 = child(div_3);
  Indicator(node_3, {
    size: "xl",
    color: "blue",
    class: "z-10 shrink-0 ring-0 ring-white sm:ring-8 dark:bg-gray-700 dark:ring-gray-900",
    children: ($$anchor2, $$slotProps) => {
      CheckCircleSolid($$anchor2, {
        class: "h-6 w-6 text-gray-800 dark:text-gray-300"
      });
    },
    $$slots: { default: true }
  });
  reset(div_3);
  next(2);
  reset(li_3);
  reset(ol);
  var ol_1 = sibling(ol, 2);
  var li_4 = child(ol_1);
  var div_4 = child(li_4);
  var node_4 = child(div_4);
  Indicator(node_4, {
    size: "xl",
    class: "z-10 shrink-0 bg-primary-200 ring-0 ring-white sm:ring-8 dark:bg-primary-900 dark:ring-gray-900",
    children: ($$anchor2, $$slotProps) => {
      Indicator($$anchor2, { color: "orange" });
    },
    $$slots: { default: true }
  });
  next(2);
  reset(div_4);
  next(2);
  reset(li_4);
  var li_5 = sibling(li_4, 2);
  var div_5 = child(li_5);
  var node_5 = child(div_5);
  Indicator(node_5, {
    size: "xl",
    class: "z-10 shrink-0 bg-primary-200 ring-0 ring-white sm:ring-8 dark:bg-primary-900 dark:ring-gray-900",
    children: ($$anchor2, $$slotProps) => {
      Indicator($$anchor2, { color: "orange" });
    },
    $$slots: { default: true }
  });
  next(2);
  reset(div_5);
  next(2);
  reset(li_5);
  var li_6 = sibling(li_5, 2);
  var div_6 = child(li_6);
  var node_6 = child(div_6);
  Indicator(node_6, {
    size: "xl",
    class: "z-10 shrink-0 bg-primary-200 ring-0 ring-white sm:ring-8 dark:bg-primary-900 dark:ring-gray-900",
    children: ($$anchor2, $$slotProps) => {
      Indicator($$anchor2, { color: "orange" });
    },
    $$slots: { default: true }
  });
  next(2);
  reset(div_6);
  next(2);
  reset(li_6);
  var li_7 = sibling(li_6, 2);
  var div_7 = child(li_7);
  var node_7 = child(div_7);
  Indicator(node_7, {
    size: "xl",
    class: "z-10 shrink-0 ring-0 ring-white sm:ring-8 dark:bg-gray-700 dark:ring-gray-900",
    children: ($$anchor2, $$slotProps) => {
      Indicator($$anchor2, { color: "emerald", class: "dark:!bg-gray-300" });
    },
    $$slots: { default: true }
  });
  reset(div_7);
  next(2);
  reset(li_7);
  reset(ol_1);
  append($$anchor, fragment);
}
var root_5 = template(`<div class="borer relative h-56 w-56 rounded-lg border-gray-300 bg-gray-200 dark:border-gray-700 dark:bg-gray-800"><!></div> <div class="mt-8 space-y-4"><div class="flex flex-wrap space-x-2"><!> <!></div> <div class="flex flex-wrap space-x-4"><!> <!></div> <div class="flex flex-wrap space-x-4"><!> <!></div> <!> <!></div>`, 1);
var root_19 = template(`<div class="mb-12 flex flex-wrap"><!> <!></div> <!>`, 1);
var root = template(`<!> <!> <!> <!> <!> <!> <!> <!> <!>`, 1);
function _page($$anchor, $$props) {
  push($$props, true);
  const dirName = "indicator";
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/Badge.svelte": __vite_glob_0_0,
    "./examples/Count.svelte": __vite_glob_0_1,
    "./examples/Legend.svelte": __vite_glob_0_2,
    "./examples/Setup.svelte": __vite_glob_0_3,
    "./examples/Status.svelte": __vite_glob_0_4,
    "./examples/Stepper.svelte": __vite_glob_0_5
  });
  const exampleArr = [
    {
      name: "Legend",
      component: Legend
    },
    {
      name: "Count",
      component: Count
    },
    {
      name: "Status",
      component: Status
    },
    {
      name: "Badge",
      component: Badge_1
    },
    {
      name: "Stepper",
      component: Stepper
    }
  ];
  let selectedExample = state(proxy(exampleArr[0].name));
  let svelteCode = derived(() => getExampleFileName(get(selectedExample), exampleArr));
  function findObject(arr, name) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = derived(() => findObject(exampleArr, get(selectedExample)));
  const sizes = Object.keys(indicator.variants.size);
  const colors = Object.keys(indicator.variants.color);
  const placements = Object.keys(indicator.variants.placement);
  let color = state("primary");
  let size = state("md");
  let border = state(false);
  const changeBorder = () => {
    set(border, !get(border));
  };
  let cornerStyle = state("circular");
  const changeCornerStyle = () => {
    set(cornerStyle, proxy(get(cornerStyle) === "circular" ? "rounded" : "circular"));
  };
  let placement = state("default");
  let generatedCode = derived(() => (() => {
    let props = [];
    if (get(color) !== "primary") props.push(` color="${get(color)}"`);
    if (get(size) !== "md") props.push(` size="${get(size)}"`);
    if (get(border)) props.push(" border");
    if (get(placement) !== "default") props.push(` placement="${get(placement)}"`);
    if (get(cornerStyle) !== "circular") props.push(` cornerStyle="${get(cornerStyle)}"`);
    const propsString = props.length > 0 ? props.map((prop) => `
  ${prop}`).join("") + "\n" : "";
    return `<div class="borer relative h-56 w-56 rounded-lg border-gray-300 m-8">
  <Indicator${propsString} />
</div>`;
  })());
  let builder = uiHelpers();
  let builderExpand = state(false);
  let showBuilderExpandButton = derived(() => isGeneratedCodeOverflow(get(generatedCode)));
  const handleBuilderExpandClick = () => {
    set(builderExpand, !get(builderExpand));
  };
  let codeBlock = uiHelpers();
  let exampleExpand = state(false);
  let showExpandButton = derived(() => isSvelteOverflow(get(svelteCode), exampleModules));
  const handleExpandClick = () => {
    set(exampleExpand, !get(exampleExpand));
  };
  user_effect(() => {
    set(exampleExpand, proxy(codeBlock.isOpen));
    set(builderExpand, proxy(builder.isOpen));
  });
  var fragment = root();
  var node = first_child(fragment);
  H1(node, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text("Indicator");
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
  var node_1 = sibling(node, 2);
  H2(node_1, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_1 = text("Setup");
      append($$anchor2, text_1);
    },
    $$slots: { default: true }
  });
  var node_2 = sibling(node_1, 2);
  HighlightCompo(node_2, {
    get code() {
      return exampleModules[`./examples/Setup.svelte`];
    }
  });
  var node_3 = sibling(node_2, 2);
  H2(node_3, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_2 = text("Interactive indicator");
      append($$anchor2, text_2);
    },
    $$slots: { default: true }
  });
  var node_4 = sibling(node_3, 2);
  {
    const codeblock = ($$anchor2) => {
      DynamicCodeBlockHighlight($$anchor2, {
        handleExpandClick: handleBuilderExpandClick,
        get expand() {
          return get(builderExpand);
        },
        get showExpandButton() {
          return get(showBuilderExpandButton);
        },
        get code() {
          return get(generatedCode);
        }
      });
    };
    CodeWrapper(node_4, {
      codeblock,
      children: ($$anchor2, $$slotProps) => {
        var fragment_2 = root_5();
        var div = first_child(fragment_2);
        var node_5 = child(div);
        Indicator(node_5, {
          get color() {
            return get(color);
          },
          get size() {
            return get(size);
          },
          get border() {
            return get(border);
          },
          get placement() {
            return get(placement);
          },
          get cornerStyle() {
            return get(cornerStyle);
          }
        });
        reset(div);
        var div_1 = sibling(div, 2);
        var div_2 = child(div_1);
        var node_6 = child(div_2);
        Label(node_6, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_3 = text("Color");
            append($$anchor3, text_3);
          },
          $$slots: { default: true }
        });
        var node_7 = sibling(node_6, 2);
        each(node_7, 17, () => colors, index, ($$anchor3, colorOption) => {
          Radio($$anchor3, {
            labelClass: "w-24 my-1",
            name: "color",
            get group() {
              return get(color);
            },
            set group($$value) {
              set(color, proxy($$value));
            },
            get color() {
              return get(colorOption);
            },
            get value() {
              return get(colorOption);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_4 = text();
              template_effect(() => set_text(text_4, get(colorOption)));
              append($$anchor4, text_4);
            },
            $$slots: { default: true }
          });
        });
        reset(div_2);
        var div_3 = sibling(div_2, 2);
        var node_8 = child(div_3);
        Label(node_8, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_5 = text("Size");
            append($$anchor3, text_5);
          },
          $$slots: { default: true }
        });
        var node_9 = sibling(node_8, 2);
        each(node_9, 17, () => sizes, index, ($$anchor3, sizeOption) => {
          Radio($$anchor3, {
            labelClass: "w-24 my-1",
            name: "size",
            get group() {
              return get(size);
            },
            set group($$value) {
              set(size, proxy($$value));
            },
            get value() {
              return get(sizeOption);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_6 = text();
              template_effect(() => set_text(text_6, get(sizeOption)));
              append($$anchor4, text_6);
            },
            $$slots: { default: true }
          });
        });
        reset(div_3);
        var div_4 = sibling(div_3, 2);
        var node_10 = child(div_4);
        Label(node_10, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_7 = text("Placement");
            append($$anchor3, text_7);
          },
          $$slots: { default: true }
        });
        var node_11 = sibling(node_10, 2);
        each(node_11, 17, () => placements, index, ($$anchor3, positionOption) => {
          Radio($$anchor3, {
            labelClass: "w-32 my-1",
            name: "placement",
            get group() {
              return get(placement);
            },
            set group($$value) {
              set(placement, proxy($$value));
            },
            get value() {
              return get(positionOption);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_8 = text();
              template_effect(() => set_text(text_8, get(positionOption)));
              append($$anchor4, text_8);
            },
            $$slots: { default: true }
          });
        });
        reset(div_4);
        var node_12 = sibling(div_4, 2);
        Button(node_12, {
          onclick: changeBorder,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_9 = text();
            template_effect(() => set_text(text_9, get(border) ? "Remove border" : "Add border"));
            append($$anchor3, text_9);
          },
          $$slots: { default: true }
        });
        var node_13 = sibling(node_12, 2);
        Button(node_13, {
          onclick: changeCornerStyle,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_10 = text();
            template_effect(() => set_text(text_10, get(cornerStyle) === "circular" ? "Rounded" : "Circular"));
            append($$anchor3, text_10);
          },
          $$slots: { default: true }
        });
        reset(div_1);
        append($$anchor2, fragment_2);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_14 = sibling(node_4, 2);
  H2(node_14, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_11 = text("Examples");
      append($$anchor2, text_11);
    },
    $$slots: { default: true }
  });
  var node_15 = sibling(node_14, 2);
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
    CodeWrapper(node_15, {
      codeblock,
      children: ($$anchor2, $$slotProps) => {
        var fragment_12 = root_19();
        var div_5 = first_child(fragment_12);
        var node_16 = child(div_5);
        Label(node_16, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_12 = text("Example");
            append($$anchor3, text_12);
          },
          $$slots: { default: true }
        });
        var node_17 = sibling(node_16, 2);
        each(node_17, 17, () => exampleArr, index, ($$anchor3, style) => {
          Radio($$anchor3, {
            labelClass: "w-28 my-1",
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
              var text_13 = text();
              template_effect(() => set_text(text_13, get(style).name));
              append($$anchor4, text_13);
            },
            $$slots: { default: true }
          });
        });
        reset(div_5);
        var node_18 = sibling(div_5, 2);
        component(node_18, () => get(SelectedComponent), ($$anchor3, $$component) => {
          $$component($$anchor3, {});
        });
        append($$anchor2, fragment_12);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_19 = sibling(node_15, 2);
  H2(node_19, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_14 = text("Component data");
      append($$anchor2, text_14);
    },
    $$slots: { default: true }
  });
  var node_20 = sibling(node_19, 2);
  CompoAttributesViewer(node_20, { dirName });
  append($$anchor, fragment);
  pop();
}
export {
  _page as component
};
