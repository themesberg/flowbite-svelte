import { a as append, n as ns_template, b as text, t as template } from "../chunks/disclose-version.0TX42Q8e.js";
import { p as push, g as getContext, c as child, r as reset, t as template_effect, s as sibling, b as get, a as pop, d as derived, f as first_child, n as next, a6 as state, u as user_effect, a7 as set } from "../chunks/runtime.BkfDdwap.js";
import { a as set_text } from "../chunks/store.B2xZ3Ft6.js";
import { e as each, i as index } from "../chunks/each.CtHIoDcm.js";
import { p as prop, i as if_block, r as rest_props, b as proxy, c as component } from "../chunks/props.B7eOu8hW.js";
import { s as set_attribute, a as set_attributes, t as twMerge, V as uiHelpers } from "../chunks/theme.BtjZjf2R.js";
import { B as Breadcrumb, a as BreadcrumbItem } from "../chunks/BreadcrumbItem.B7Fco-nU.js";
import { B as Button } from "../chunks/markdown.Ba9FtS5g.js";
import { C as CompoAttributesViewer, L as Label, R as Radio } from "../chunks/CompoAttributesViewer.HsPJjrMu.js";
import { D as DynamicCodeBlockHighlight } from "../chunks/DynamicCodeBlockHighlight.BS23lgW_.js";
import { C as CodeWrapper } from "../chunks/CodeWrapper.CdoIAYb8.js";
import { H as H1 } from "../chunks/H1.DunGd_Oq.js";
import { H as H2 } from "../chunks/H2.qsp5CBkK.js";
import { g as getExampleFileName, d as isSvelteOverflow } from "../chunks/helpers.B9KbZW0W.js";
import "../chunks/legacy.DvF4DOPZ.js";
var root_1$4 = ns_template(`<title> </title>`);
var root_2$1 = ns_template(`<desc> </desc>`);
var root$5 = ns_template(`<svg><!><!><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m7 16 4-4-4-4m6 8 4-4-4-4"></path></svg>`);
function ChevronDoubleRightOutline($$anchor, $$props) {
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
  let size = prop($$props, "size", 19, () => ctx.size || "md"), color = prop($$props, "color", 19, () => ctx.color || "currentColor"), strokeWidth = prop($$props, "strokeWidth", 19, () => ctx.strokeWidth || "2"), ariaLabel = prop($$props, "ariaLabel", 3, "chevron double right outline"), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "size",
    "color",
    "title",
    "strokeWidth",
    "desc",
    "class",
    "ariaLabel"
  ]);
  let ariaDescribedby = `${((_a = $$props.title) == null ? void 0 : _a.id) || ""} ${((_b = $$props.desc) == null ? void 0 : _b.id) || ""}`;
  const hasDescription = derived(() => {
    var _a2, _b2;
    return !!(((_a2 = $$props.title) == null ? void 0 : _a2.id) || ((_b2 = $$props.desc) == null ? void 0 : _b2.id));
  });
  var svg = root$5();
  let attributes;
  var node = child(svg);
  if_block(node, () => {
    var _a2;
    return ((_a2 = $$props.title) == null ? void 0 : _a2.id) && $$props.title.title;
  }, ($$anchor2) => {
    var title_1 = root_1$4();
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
    var desc_1 = root_2$1();
    var text_1 = child(desc_1, true);
    reset(desc_1);
    template_effect(() => {
      set_attribute(desc_1, "id", $$props.desc.id);
      set_text(text_1, $$props.desc.desc);
    });
    append($$anchor2, desc_1);
  });
  var path = sibling(node_1);
  reset(svg);
  template_effect(() => {
    attributes = set_attributes(
      svg,
      attributes,
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        color: color(),
        ...restProps,
        class: twMerge("shrink-0", sizes[size()], $$props.class),
        "aria-label": ariaLabel(),
        "aria-describedby": get(hasDescription) ? ariaDescribedby : void 0,
        viewBox: "0 0 24 24"
      },
      void 0,
      true
    );
    set_attribute(path, "stroke-width", strokeWidth());
  });
  append($$anchor, svg);
  pop();
}
var root_1$3 = ns_template(`<title> </title>`);
var root_2 = ns_template(`<desc> </desc>`);
var root$4 = ns_template(`<svg><!><!><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"></path></svg>`);
function HomeOutline($$anchor, $$props) {
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
  let size = prop($$props, "size", 19, () => ctx.size || "md"), color = prop($$props, "color", 19, () => ctx.color || "currentColor"), strokeWidth = prop($$props, "strokeWidth", 19, () => ctx.strokeWidth || "2"), ariaLabel = prop($$props, "ariaLabel", 3, "home outline"), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "size",
    "color",
    "title",
    "strokeWidth",
    "desc",
    "class",
    "ariaLabel"
  ]);
  let ariaDescribedby = `${((_a = $$props.title) == null ? void 0 : _a.id) || ""} ${((_b = $$props.desc) == null ? void 0 : _b.id) || ""}`;
  const hasDescription = derived(() => {
    var _a2, _b2;
    return !!(((_a2 = $$props.title) == null ? void 0 : _a2.id) || ((_b2 = $$props.desc) == null ? void 0 : _b2.id));
  });
  var svg = root$4();
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
    var desc_1 = root_2();
    var text_1 = child(desc_1, true);
    reset(desc_1);
    template_effect(() => {
      set_attribute(desc_1, "id", $$props.desc.id);
      set_text(text_1, $$props.desc.desc);
    });
    append($$anchor2, desc_1);
  });
  var path = sibling(node_1);
  reset(svg);
  template_effect(() => {
    attributes = set_attributes(
      svg,
      attributes,
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        color: color(),
        ...restProps,
        class: twMerge("shrink-0", sizes[size()], $$props.class),
        "aria-label": ariaLabel(),
        "aria-describedby": get(hasDescription) ? ariaDescribedby : void 0,
        viewBox: "0 0 24 24"
      },
      void 0,
      true
    );
    set_attribute(path, "stroke-width", strokeWidth());
  });
  append($$anchor, svg);
  pop();
}
const __vite_glob_0_0 = '<script lang="ts">\n  import { Breadcrumb, BreadcrumbItem } from "$lib";\n<\/script>\n\n<div class="overflow-x-scroll p-2 sm:p-6">\n  <Breadcrumb>\n    <BreadcrumbItem href="/" home>Home</BreadcrumbItem>\n    <BreadcrumbItem href="/">Projects</BreadcrumbItem>\n    <BreadcrumbItem>Flowbite Svelte</BreadcrumbItem>\n  </Breadcrumb>\n</div>\n';
const __vite_glob_0_1 = '<script lang="ts">\n  import { Breadcrumb, BreadcrumbItem } from "$lib";\n  import { ChevronDoubleRightOutline, HomeOutline } from "flowbite-svelte-icons";\n<\/script>\n\n<div class="overflow-x-scroll p-2 sm:p-6">\n  <Breadcrumb class="overflow-x-scroll bg-gray-50 px-5 py-3 dark:bg-gray-900">\n    <BreadcrumbItem href="/" home>\n      {#snippet icon()}\n        <HomeOutline class="me-2 h-4 w-4" />\n      {/snippet}Home\n    </BreadcrumbItem>\n    <BreadcrumbItem href="/">\n      {#snippet icon()}\n        <ChevronDoubleRightOutline class="mx-2 h-5 w-5 dark:text-white" />\n      {/snippet}\n      Projects\n    </BreadcrumbItem>\n    <BreadcrumbItem>\n      {#snippet icon()}\n        <ChevronDoubleRightOutline class="mx-2 h-5 w-5 dark:text-white" />\n      {/snippet}\n      Flowbite Svelte\n    </BreadcrumbItem>\n  </Breadcrumb>\n</div>\n';
const __vite_glob_0_2 = '<script lang="ts">\n  import { Breadcrumb, BreadcrumbItem } from "$lib";\n<\/script>\n\n<div class="overflow-x-scroll p-2 sm:p-6">\n  <Breadcrumb solid class="overflow-x-scroll">\n    <BreadcrumbItem href="/" home>Home</BreadcrumbItem>\n    <BreadcrumbItem href="/">Projects</BreadcrumbItem>\n    <BreadcrumbItem>Flowbite Svelte</BreadcrumbItem>\n  </Breadcrumb>\n</div>\n';
var root_1$2 = template(`<!> <!> <!>`, 1);
var root$3 = template(`<div class="overflow-x-scroll p-2 sm:p-6"><!></div>`);
function Default($$anchor) {
  var div = root$3();
  var node = child(div);
  Breadcrumb(node, {
    children: ($$anchor2, $$slotProps) => {
      var fragment = root_1$2();
      var node_1 = first_child(fragment);
      BreadcrumbItem(node_1, {
        href: "/",
        home: true,
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text$1 = text("Home");
          append($$anchor3, text$1);
        },
        $$slots: { default: true }
      });
      var node_2 = sibling(node_1, 2);
      BreadcrumbItem(node_2, {
        href: "/",
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text_1 = text("Projects");
          append($$anchor3, text_1);
        },
        $$slots: { default: true }
      });
      var node_3 = sibling(node_2, 2);
      BreadcrumbItem(node_3, {
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text_2 = text("Flowbite Svelte");
          append($$anchor3, text_2);
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
var root_1$1 = template(`<!> <!> <!>`, 1);
var root$2 = template(`<div class="overflow-x-scroll p-2 sm:p-6"><!></div>`);
function Icon($$anchor) {
  var div = root$2();
  var node = child(div);
  Breadcrumb(node, {
    class: "overflow-x-scroll bg-gray-50 px-5 py-3 dark:bg-gray-900",
    children: ($$anchor2, $$slotProps) => {
      var fragment = root_1$1();
      var node_1 = first_child(fragment);
      {
        const icon = ($$anchor3) => {
          HomeOutline($$anchor3, { class: "me-2 h-4 w-4" });
        };
        BreadcrumbItem(node_1, {
          href: "/",
          home: true,
          icon,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text$1 = text("Home");
            append($$anchor3, text$1);
          },
          $$slots: { icon: true, default: true }
        });
      }
      var node_2 = sibling(node_1, 2);
      {
        const icon = ($$anchor3) => {
          ChevronDoubleRightOutline($$anchor3, { class: "mx-2 h-5 w-5 dark:text-white" });
        };
        BreadcrumbItem(node_2, {
          href: "/",
          icon,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_1 = text("Projects");
            append($$anchor3, text_1);
          },
          $$slots: { icon: true, default: true }
        });
      }
      var node_3 = sibling(node_2, 2);
      {
        const icon = ($$anchor3) => {
          ChevronDoubleRightOutline($$anchor3, { class: "mx-2 h-5 w-5 dark:text-white" });
        };
        BreadcrumbItem(node_3, {
          icon,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_2 = text("Flowbite Svelte");
            append($$anchor3, text_2);
          },
          $$slots: { icon: true, default: true }
        });
      }
      append($$anchor2, fragment);
    },
    $$slots: { default: true }
  });
  reset(div);
  append($$anchor, div);
}
var root_1 = template(`<!> <!> <!>`, 1);
var root$1 = template(`<div class="overflow-x-scroll p-2 sm:p-6"><!></div>`);
function Solid($$anchor) {
  var div = root$1();
  var node = child(div);
  Breadcrumb(node, {
    solid: true,
    class: "overflow-x-scroll",
    children: ($$anchor2, $$slotProps) => {
      var fragment = root_1();
      var node_1 = first_child(fragment);
      BreadcrumbItem(node_1, {
        href: "/",
        home: true,
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text$1 = text("Home");
          append($$anchor3, text$1);
        },
        $$slots: { default: true }
      });
      var node_2 = sibling(node_1, 2);
      BreadcrumbItem(node_2, {
        href: "/",
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text_1 = text("Projects");
          append($$anchor3, text_1);
        },
        $$slots: { default: true }
      });
      var node_3 = sibling(node_2, 2);
      BreadcrumbItem(node_3, {
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text_2 = text("Flowbite Svelte");
          append($$anchor3, text_2);
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
var root_3 = template(`<div class="mb-12 flex flex-wrap"><!> <!></div> <!>`, 1);
var root_9 = template(`<!> <!> <!>`, 1);
var root_8 = template(`<div class="h-20"><!></div> <div class="flex flex-wrap justify-center gap-2 md:justify-start"><!> <!></div>`, 1);
var root = template(`<!> <!> <!> <!> <!> <!>`, 1);
function _page($$anchor, $$props) {
  push($$props, true);
  const dirName = "breadcrumb";
  let navClass = state("");
  const changeNavClass = () => {
    set(navClass, proxy(get(navClass) === "" ? "border border-red-500 p-2" : ""));
  };
  let olClass = state("");
  const changeOlClass = () => {
    set(olClass, proxy(get(olClass) === "" ? "border border-blue-500 p-2" : ""));
  };
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/Default.svelte": __vite_glob_0_0,
    "./examples/Icon.svelte": __vite_glob_0_1,
    "./examples/Solid.svelte": __vite_glob_0_2
  });
  const exampleArr = [
    {
      name: "Default",
      component: Default
    },
    {
      name: "Solid",
      component: Solid
    },
    {
      name: "Icon",
      component: Icon
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
      var text$1 = text("Breadcrumb");
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
      var text_3 = text("navClass and olClass");
      append($$anchor2, text_3);
    },
    $$slots: { default: true }
  });
  var node_6 = sibling(node_5, 2);
  CodeWrapper(node_6, {
    innerClass: "overflow-x-scroll p-2 sm:p-6",
    children: ($$anchor2, $$slotProps) => {
      var fragment_5 = root_8();
      var div_1 = first_child(fragment_5);
      var node_7 = child(div_1);
      Breadcrumb(node_7, {
        get navClass() {
          return get(navClass);
        },
        get olClass() {
          return get(olClass);
        },
        children: ($$anchor3, $$slotProps2) => {
          var fragment_6 = root_9();
          var node_8 = first_child(fragment_6);
          BreadcrumbItem(node_8, {
            href: "/",
            home: true,
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_4 = text("Home");
              append($$anchor4, text_4);
            },
            $$slots: { default: true }
          });
          var node_9 = sibling(node_8, 2);
          BreadcrumbItem(node_9, {
            href: "/",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_5 = text("Projects");
              append($$anchor4, text_5);
            },
            $$slots: { default: true }
          });
          var node_10 = sibling(node_9, 2);
          BreadcrumbItem(node_10, {
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_6 = text("Flowbite Svelte");
              append($$anchor4, text_6);
            },
            $$slots: { default: true }
          });
          append($$anchor3, fragment_6);
        },
        $$slots: { default: true }
      });
      reset(div_1);
      var div_2 = sibling(div_1, 2);
      var node_11 = child(div_2);
      Button(node_11, {
        class: "w-48",
        onclick: changeNavClass,
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text_7 = text();
          template_effect(() => set_text(text_7, get(navClass) ? "Remove navClass" : "Add navClass"));
          append($$anchor3, text_7);
        },
        $$slots: { default: true }
      });
      var node_12 = sibling(node_11, 2);
      Button(node_12, {
        class: "w-48",
        color: "green",
        onclick: changeOlClass,
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text_8 = text();
          template_effect(() => set_text(text_8, get(olClass) ? "Remove olClass" : "Add olClass"));
          append($$anchor3, text_8);
        },
        $$slots: { default: true }
      });
      reset(div_2);
      append($$anchor2, fragment_5);
    },
    $$slots: { default: true }
  });
  var node_13 = sibling(node_6, 2);
  H2(node_13, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_9 = text("Component data");
      append($$anchor2, text_9);
    },
    $$slots: { default: true }
  });
  var node_14 = sibling(node_13, 2);
  CompoAttributesViewer(node_14, { dirName });
  append($$anchor, fragment);
  pop();
}
export {
  _page as component
};
