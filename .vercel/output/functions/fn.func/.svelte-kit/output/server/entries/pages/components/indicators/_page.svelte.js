import { a3 as copy_payload, a4 as assign_payload, S as pop, Q as push, Y as ensure_array_like, V as escape_html } from "../../../../chunks/index.js";
import { G as indicator } from "../../../../chunks/theme.js";
import { a as Badge, B as Button } from "../../../../chunks/markdown.js";
import { I as Indicator } from "../../../../chunks/Indicator.js";
import { L as Label, R as Radio, C as CompoAttributesViewer } from "../../../../chunks/CompoAttributesViewer.js";
import { H as HighlightCompo } from "../../../../chunks/HighlightCompo.js";
import { D as DynamicCodeBlockHighlight } from "../../../../chunks/DynamicCodeBlockHighlight.js";
import { C as CodeWrapper } from "../../../../chunks/CodeWrapper.js";
import { a as H1 } from "../../../../chunks/H1.js";
import { H as H2 } from "../../../../chunks/H2.js";
import { g as getExampleFileName, a as isGeneratedCodeOverflow, i as isSvelteOverflow } from "../../../../chunks/helpers.js";
import { A as Avatar } from "../../../../chunks/Avatar.js";
import { E as EnvelopeSolid } from "../../../../chunks/EnvelopeSolid.js";
import { C as CheckCircleSolid } from "../../../../chunks/CheckCircleSolid.js";
const __vite_glob_0_0 = '<script lang="ts">\n  import { Avatar, Badge, Indicator } from "$lib";\n<\/script>\n\n<div class="flex gap-2">\n  <ul class="w-full max-w-sm divide-y divide-gray-200 dark:divide-gray-700">\n    <li class="py-3 sm:py-4">\n      <div class="flex items-center space-x-3 rtl:space-x-reverse">\n        <Avatar src="/images/profile-picture-5.webp" alt="Neil image" />\n        <div class="min-w-0 flex-1">\n          <p class="truncate text-sm font-semibold text-gray-900 dark:text-white">Neil Sims</p>\n          <p class="truncate text-sm text-gray-500 dark:text-gray-400">email@flowbite.com</p>\n        </div>\n        <Badge color="green" rounded class="px-2.5 py-0.5">\n          <Indicator color="green" size="xs" class="me-1" />Available\n        </Badge>\n      </div>\n    </li>\n    <li class="py-3 sm:py-4">\n      <div class="flex items-center space-x-3 rtl:space-x-reverse">\n        <div class="flex-shrink-0">\n          <Avatar src="/images/profile-picture-4.webp" alt="Bonnie image" />\n        </div>\n        <div class="min-w-0 flex-1">\n          <p class="truncate text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</p>\n          <p class="truncate text-sm text-gray-500 dark:text-gray-400">email@flowbite.com</p>\n        </div>\n        <Badge color="red" rounded class="px-2.5 py-0.5">\n          <Indicator color="red" size="xs" class="me-1" />Unavailable\n        </Badge>\n      </div>\n    </li>\n  </ul>\n</div>\n';
const __vite_glob_0_1 = '<script lang="ts">\n  import { Button, Indicator } from "$lib";\n  import { EnvelopeSolid } from "flowbite-svelte-icons";\n<\/script>\n\n<div class="flex justify-center">\n  <Button size="lg" class="relative">\n    <EnvelopeSolid class="me-2 h-4 w-4 text-white dark:text-white" />\n    <span class="sr-only">Notifications</span>\n    Messages\n    <Indicator color="red" border size="xl" placement="top-right">\n      <span class="text-xs font-bold text-white">8</span>\n    </Indicator>\n  </Button>\n</div>\n';
const __vite_glob_0_2 = '<script lang="ts">\n  import { Indicator } from "$lib";\n<\/script>\n\n<div class="flex flex-wrap justify-start gap-4 md:justify-center">\n  <span class="flex items-center"><Indicator size="sm" color="orange" class="me-1.5" />Visitors</span>\n  <span class="flex items-center"><Indicator size="sm" color="purple" class="me-1.5" />Sessions</span>\n  <span class="flex items-center"><Indicator size="sm" color="indigo" class="me-1.5" />Customers</span>\n  <span class="flex items-center"><Indicator size="sm" color="teal" class="me-1.5" />Revenue</span>\n</div>\n';
const __vite_glob_0_3 = '<script>\n  import { Indicator } from "svelte-5-ui-lib";\n<\/script>\n';
const __vite_glob_0_4 = '<script lang="ts">\n  import { Avatar } from "$lib";\n<\/script>\n\n<div class="flex justify-center">\n  <Avatar src="/images/profile-picture-5.webp" dot={{ color: "green", size: "lg", placement: "top-right" }} />\n  <Avatar src="/images/profile-picture-5.webp" dot={{ color: "red", size: "lg", placement: "top-right" }} />\n</div>\n';
const __vite_glob_0_5 = '<script lang="ts">\n  import { Indicator } from "$lib";\n  import { CheckCircleSolid } from "flowbite-svelte-icons";\n<\/script>\n\n<ol class="flex items-center">\n  <li class="relative mb-6 w-full">\n    <div class="flex items-center">\n      <Indicator size="xl" class="z-10 shrink-0 bg-primary-200 ring-0 ring-white sm:ring-8 dark:bg-primary-900 dark:ring-gray-900">\n        <CheckCircleSolid class="h-6 w-6 text-primary-600 dark:text-primary-300" />\n      </Indicator>\n      <div class="flex h-0.5 w-full bg-gray-200 dark:bg-gray-700"></div>\n    </div>\n    <div class="mt-3">\n      <h3 class="font-medium text-gray-900 dark:text-white">Step 1</h3>\n    </div>\n  </li>\n  <li class="relative mb-6 w-full">\n    <div class="flex items-center">\n      <Indicator size="xl" class="z-10 shrink-0 bg-primary-200 ring-0 ring-white sm:ring-8 dark:bg-primary-900 dark:ring-gray-900">\n        <CheckCircleSolid class="h-6 w-6 text-primary-600 dark:text-primary-300" />\n      </Indicator>\n      <div class="flex h-0.5 w-full bg-gray-200 dark:bg-gray-700"></div>\n    </div>\n    <div class="mt-3">\n      <h3 class="font-medium text-gray-900 dark:text-white">Step 2</h3>\n    </div>\n  </li>\n  <li class="relative mb-6 w-full">\n    <div class="flex items-center">\n      <Indicator size="xl" class="z-10 shrink-0 bg-primary-200 ring-0 ring-white sm:ring-8 dark:bg-primary-900 dark:ring-gray-900">\n        <CheckCircleSolid class="h-6 w-6 text-primary-600 dark:text-primary-300" />\n      </Indicator>\n      <div class="flex h-0.5 w-full bg-gray-200 dark:bg-gray-700"></div>\n    </div>\n    <div class="mt-3">\n      <h3 class="font-medium text-gray-900 dark:text-white">Step 2</h3>\n    </div>\n  </li>\n  <li class="relative mb-6 w-full">\n    <div class="flex items-center">\n      <Indicator size="xl" color="blue" class="z-10 shrink-0 ring-0 ring-white sm:ring-8 dark:bg-gray-700 dark:ring-gray-900">\n        <CheckCircleSolid class="h-6 w-6 text-gray-800 dark:text-gray-300" />\n      </Indicator>\n    </div>\n    <div class="mt-3">\n      <h3 class="font-medium text-gray-900 dark:text-white">Step 3</h3>\n    </div>\n  </li>\n</ol>\n<ol class="flex items-center">\n  <li class="relative mb-6 w-full">\n    <div class="flex items-center">\n      <Indicator size="xl" class="z-10 shrink-0 bg-primary-200 ring-0 ring-white sm:ring-8 dark:bg-primary-900 dark:ring-gray-900">\n        <Indicator color="orange" />\n      </Indicator>\n      <div class="flex h-0.5 w-full bg-gray-200 dark:bg-gray-700"></div>\n    </div>\n    <div class="mt-3">\n      <h3 class="font-medium text-gray-900 dark:text-white">Step 1</h3>\n    </div>\n  </li>\n  <li class="relative mb-6 w-full">\n    <div class="flex items-center">\n      <Indicator size="xl" class="z-10 shrink-0 bg-primary-200 ring-0 ring-white sm:ring-8 dark:bg-primary-900 dark:ring-gray-900">\n        <Indicator color="orange" />\n      </Indicator>\n      <div class="flex h-0.5 w-full bg-gray-200 dark:bg-gray-700"></div>\n    </div>\n    <div class="mt-3">\n      <h3 class="font-medium text-gray-900 dark:text-white">Step 2</h3>\n    </div>\n  </li>\n  <li class="relative mb-6 w-full">\n    <div class="flex items-center">\n      <Indicator size="xl" class="z-10 shrink-0 bg-primary-200 ring-0 ring-white sm:ring-8 dark:bg-primary-900 dark:ring-gray-900">\n        <Indicator color="orange" />\n      </Indicator>\n      <div class="flex h-0.5 w-full bg-gray-200 dark:bg-gray-700"></div>\n    </div>\n    <div class="mt-3">\n      <h3 class="font-medium text-gray-900 dark:text-white">Step 2</h3>\n    </div>\n  </li>\n  <li class="relative mb-6 w-full">\n    <div class="flex items-center">\n      <Indicator size="xl" class="z-10 shrink-0 ring-0 ring-white sm:ring-8 dark:bg-gray-700 dark:ring-gray-900">\n        <Indicator color="emerald" class="dark:!bg-gray-300" />\n      </Indicator>\n    </div>\n    <div class="mt-3">\n      <h3 class="font-medium text-gray-900 dark:text-white">Step 3</h3>\n    </div>\n  </li>\n</ol>\n';
function Badge_1($$payload) {
  $$payload.out += `<div class="flex gap-2"><ul class="w-full max-w-sm divide-y divide-gray-200 dark:divide-gray-700"><li class="py-3 sm:py-4"><div class="flex items-center space-x-3 rtl:space-x-reverse">`;
  Avatar($$payload, {
    src: "/images/profile-picture-5.webp",
    alt: "Neil image"
  });
  $$payload.out += `<!----> <div class="min-w-0 flex-1"><p class="truncate text-sm font-semibold text-gray-900 dark:text-white">Neil Sims</p> <p class="truncate text-sm text-gray-500 dark:text-gray-400">email@flowbite.com</p></div> `;
  Badge($$payload, {
    color: "green",
    rounded: true,
    class: "px-2.5 py-0.5",
    children: ($$payload2) => {
      Indicator($$payload2, { color: "green", size: "xs", class: "me-1" });
      $$payload2.out += `<!---->Available`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div></li> <li class="py-3 sm:py-4"><div class="flex items-center space-x-3 rtl:space-x-reverse"><div class="flex-shrink-0">`;
  Avatar($$payload, {
    src: "/images/profile-picture-4.webp",
    alt: "Bonnie image"
  });
  $$payload.out += `<!----></div> <div class="min-w-0 flex-1"><p class="truncate text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</p> <p class="truncate text-sm text-gray-500 dark:text-gray-400">email@flowbite.com</p></div> `;
  Badge($$payload, {
    color: "red",
    rounded: true,
    class: "px-2.5 py-0.5",
    children: ($$payload2) => {
      Indicator($$payload2, { color: "red", size: "xs", class: "me-1" });
      $$payload2.out += `<!---->Unavailable`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div></li></ul></div>`;
}
function Count($$payload) {
  $$payload.out += `<div class="flex justify-center">`;
  Button($$payload, {
    size: "lg",
    class: "relative",
    children: ($$payload2) => {
      EnvelopeSolid($$payload2, {
        class: "me-2 h-4 w-4 text-white dark:text-white"
      });
      $$payload2.out += `<!----> <span class="sr-only">Notifications</span> Messages `;
      Indicator($$payload2, {
        color: "red",
        border: true,
        size: "xl",
        placement: "top-right",
        children: ($$payload3) => {
          $$payload3.out += `<span class="text-xs font-bold text-white">8</span>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div>`;
}
function Legend($$payload) {
  $$payload.out += `<div class="flex flex-wrap justify-start gap-4 md:justify-center"><span class="flex items-center">`;
  Indicator($$payload, { size: "sm", color: "orange", class: "me-1.5" });
  $$payload.out += `<!---->Visitors</span> <span class="flex items-center">`;
  Indicator($$payload, { size: "sm", color: "purple", class: "me-1.5" });
  $$payload.out += `<!---->Sessions</span> <span class="flex items-center">`;
  Indicator($$payload, { size: "sm", color: "indigo", class: "me-1.5" });
  $$payload.out += `<!---->Customers</span> <span class="flex items-center">`;
  Indicator($$payload, { size: "sm", color: "teal", class: "me-1.5" });
  $$payload.out += `<!---->Revenue</span></div>`;
}
function Status($$payload) {
  $$payload.out += `<div class="flex justify-center">`;
  Avatar($$payload, {
    src: "/images/profile-picture-5.webp",
    dot: {
      color: "green",
      size: "lg",
      placement: "top-right"
    }
  });
  $$payload.out += `<!----> `;
  Avatar($$payload, {
    src: "/images/profile-picture-5.webp",
    dot: {
      color: "red",
      size: "lg",
      placement: "top-right"
    }
  });
  $$payload.out += `<!----></div>`;
}
function Stepper($$payload) {
  $$payload.out += `<ol class="flex items-center"><li class="relative mb-6 w-full"><div class="flex items-center">`;
  Indicator($$payload, {
    size: "xl",
    class: "z-10 shrink-0 bg-primary-200 ring-0 ring-white sm:ring-8 dark:bg-primary-900 dark:ring-gray-900",
    children: ($$payload2) => {
      CheckCircleSolid($$payload2, {
        class: "h-6 w-6 text-primary-600 dark:text-primary-300"
      });
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <div class="flex h-0.5 w-full bg-gray-200 dark:bg-gray-700"></div></div> <div class="mt-3"><h3 class="font-medium text-gray-900 dark:text-white">Step 1</h3></div></li> <li class="relative mb-6 w-full"><div class="flex items-center">`;
  Indicator($$payload, {
    size: "xl",
    class: "z-10 shrink-0 bg-primary-200 ring-0 ring-white sm:ring-8 dark:bg-primary-900 dark:ring-gray-900",
    children: ($$payload2) => {
      CheckCircleSolid($$payload2, {
        class: "h-6 w-6 text-primary-600 dark:text-primary-300"
      });
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <div class="flex h-0.5 w-full bg-gray-200 dark:bg-gray-700"></div></div> <div class="mt-3"><h3 class="font-medium text-gray-900 dark:text-white">Step 2</h3></div></li> <li class="relative mb-6 w-full"><div class="flex items-center">`;
  Indicator($$payload, {
    size: "xl",
    class: "z-10 shrink-0 bg-primary-200 ring-0 ring-white sm:ring-8 dark:bg-primary-900 dark:ring-gray-900",
    children: ($$payload2) => {
      CheckCircleSolid($$payload2, {
        class: "h-6 w-6 text-primary-600 dark:text-primary-300"
      });
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <div class="flex h-0.5 w-full bg-gray-200 dark:bg-gray-700"></div></div> <div class="mt-3"><h3 class="font-medium text-gray-900 dark:text-white">Step 2</h3></div></li> <li class="relative mb-6 w-full"><div class="flex items-center">`;
  Indicator($$payload, {
    size: "xl",
    color: "blue",
    class: "z-10 shrink-0 ring-0 ring-white sm:ring-8 dark:bg-gray-700 dark:ring-gray-900",
    children: ($$payload2) => {
      CheckCircleSolid($$payload2, {
        class: "h-6 w-6 text-gray-800 dark:text-gray-300"
      });
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div> <div class="mt-3"><h3 class="font-medium text-gray-900 dark:text-white">Step 3</h3></div></li></ol> <ol class="flex items-center"><li class="relative mb-6 w-full"><div class="flex items-center">`;
  Indicator($$payload, {
    size: "xl",
    class: "z-10 shrink-0 bg-primary-200 ring-0 ring-white sm:ring-8 dark:bg-primary-900 dark:ring-gray-900",
    children: ($$payload2) => {
      Indicator($$payload2, { color: "orange" });
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <div class="flex h-0.5 w-full bg-gray-200 dark:bg-gray-700"></div></div> <div class="mt-3"><h3 class="font-medium text-gray-900 dark:text-white">Step 1</h3></div></li> <li class="relative mb-6 w-full"><div class="flex items-center">`;
  Indicator($$payload, {
    size: "xl",
    class: "z-10 shrink-0 bg-primary-200 ring-0 ring-white sm:ring-8 dark:bg-primary-900 dark:ring-gray-900",
    children: ($$payload2) => {
      Indicator($$payload2, { color: "orange" });
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <div class="flex h-0.5 w-full bg-gray-200 dark:bg-gray-700"></div></div> <div class="mt-3"><h3 class="font-medium text-gray-900 dark:text-white">Step 2</h3></div></li> <li class="relative mb-6 w-full"><div class="flex items-center">`;
  Indicator($$payload, {
    size: "xl",
    class: "z-10 shrink-0 bg-primary-200 ring-0 ring-white sm:ring-8 dark:bg-primary-900 dark:ring-gray-900",
    children: ($$payload2) => {
      Indicator($$payload2, { color: "orange" });
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <div class="flex h-0.5 w-full bg-gray-200 dark:bg-gray-700"></div></div> <div class="mt-3"><h3 class="font-medium text-gray-900 dark:text-white">Step 2</h3></div></li> <li class="relative mb-6 w-full"><div class="flex items-center">`;
  Indicator($$payload, {
    size: "xl",
    class: "z-10 shrink-0 ring-0 ring-white sm:ring-8 dark:bg-gray-700 dark:ring-gray-900",
    children: ($$payload2) => {
      Indicator($$payload2, { color: "emerald", class: "dark:!bg-gray-300" });
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div> <div class="mt-3"><h3 class="font-medium text-gray-900 dark:text-white">Step 3</h3></div></li></ol>`;
}
function _page($$payload, $$props) {
  push();
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
  let selectedExample = exampleArr[0].name;
  let svelteCode = getExampleFileName(selectedExample, exampleArr);
  function findObject(arr, name) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = findObject(exampleArr, selectedExample);
  const sizes = Object.keys(indicator.variants.size);
  const colors = Object.keys(indicator.variants.color);
  const placements = Object.keys(indicator.variants.placement);
  let color = "primary";
  let size = "md";
  let border = false;
  const changeBorder = () => {
    border = !border;
  };
  let cornerStyle = "circular";
  const changeCornerStyle = () => {
    cornerStyle = cornerStyle === "circular" ? "rounded" : "circular";
  };
  let placement = "default";
  let generatedCode = (() => {
    let props = [];
    if (color !== "primary") props.push(` color="${color}"`);
    if (size !== "md") props.push(` size="${size}"`);
    if (border) props.push(" border");
    if (placement !== "default") props.push(` placement="${placement}"`);
    if (cornerStyle !== "circular") props.push(` cornerStyle="${cornerStyle}"`);
    const propsString = props.length > 0 ? props.map((prop) => `
  ${prop}`).join("") + "\n" : "";
    return `<div class="borer relative h-56 w-56 rounded-lg border-gray-300 m-8">
  <Indicator${propsString} />
</div>`;
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
        $$payload3.out += `<!---->Indicator`;
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
        $$payload3.out += `<!---->Interactive indicator`;
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
        codeblock,
        children: ($$payload3) => {
          const each_array = ensure_array_like(colors);
          const each_array_1 = ensure_array_like(sizes);
          const each_array_2 = ensure_array_like(placements);
          $$payload3.out += `<div class="borer relative h-56 w-56 rounded-lg border-gray-300 bg-gray-200 dark:border-gray-700 dark:bg-gray-800">`;
          Indicator($$payload3, {
            color,
            size,
            border,
            placement,
            cornerStyle
          });
          $$payload3.out += `<!----></div> <div class="mt-8 space-y-4"><div class="flex flex-wrap space-x-2">`;
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
              name: "color",
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
          $$payload3.out += `<!--]--></div> <div class="flex flex-wrap space-x-4">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Size`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
            let sizeOption = each_array_1[$$index_1];
            Radio($$payload3, {
              labelClass: "w-24 my-1",
              name: "size",
              get group() {
                return size;
              },
              set group($$value) {
                size = $$value;
                $$settled = false;
              },
              value: sizeOption,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(sizeOption)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> <div class="flex flex-wrap space-x-4">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Placement`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
            let positionOption = each_array_2[$$index_2];
            Radio($$payload3, {
              labelClass: "w-32 my-1",
              name: "placement",
              get group() {
                return placement;
              },
              set group($$value) {
                placement = $$value;
                $$settled = false;
              },
              value: positionOption,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(positionOption)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> `;
          Button($$payload3, {
            onclick: changeBorder,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(border ? "Remove border" : "Add border")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            onclick: changeCornerStyle,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(cornerStyle === "circular" ? "Rounded" : "Circular")}`;
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
              labelClass: "w-28 my-1",
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
