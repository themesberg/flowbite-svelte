import { b as text, a as append, t as template, n as ns_template } from "../chunks/disclose-version.0TX42Q8e.js";
import { n as next, c as child, b as get, s as sibling, f as first_child, a7 as set, t as template_effect, r as reset, a6 as state, p as push, u as user_effect, a as pop, d as derived } from "../chunks/runtime.BkfDdwap.js";
import { a as set_text } from "../chunks/store.B2xZ3Ft6.js";
import { b as proxy, p as prop, i as if_block, c as component } from "../chunks/props.B7eOu8hW.js";
import { e as each, i as index } from "../chunks/each.CtHIoDcm.js";
import { C as anchor, N as CloseButton, V as uiHelpers } from "../chunks/theme.BtjZjf2R.js";
import { B as Button } from "../chunks/markdown.Ba9FtS5g.js";
import { C as CompoAttributesViewer, L as Label, R as Radio } from "../chunks/CompoAttributesViewer.HsPJjrMu.js";
import { I as Input } from "../chunks/index.CCICtSX3.js";
import { A } from "../chunks/A.XuSt3J-W.js";
import { A as ArrowRightOutline } from "../chunks/ArrowRightOutline.C1f8PGpf.js";
import { H as HighlightCompo } from "../chunks/HighlightCompo.D1kgIYBY.js";
import { D as DynamicCodeBlockHighlight } from "../chunks/DynamicCodeBlockHighlight.BS23lgW_.js";
import { C as CodeWrapper } from "../chunks/CodeWrapper.CdoIAYb8.js";
import { H as H1 } from "../chunks/H1.DunGd_Oq.js";
import { H as H2 } from "../chunks/H2.qsp5CBkK.js";
import { g as getExampleFileName, i as isGeneratedCodeOverflow, d as isSvelteOverflow } from "../chunks/helpers.B9KbZW0W.js";
import "../chunks/legacy.DvF4DOPZ.js";
import { C as Card } from "../chunks/Card.nT-sWZgG.js";
import { T as Toggle } from "../chunks/Toggle.DCK_TCRE.js";
const __vite_glob_0_0 = '<script lang="ts">\n  import { Button } from "$lib";\n<\/script>\n\n<Button href="/">Read more</Button>\n';
const __vite_glob_0_1 = '<script lang="ts">\n  import { Card } from "$lib";\n<\/script>\n\n<Card href="/">\n  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>\n  <p class="font-normal leading-tight text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>\n</Card>\n';
const __vite_glob_0_2 = '<script lang="ts">\n  import { Card, Toggle, Button } from "$lib";\n  import { ArrowRightOutline } from "flowbite-svelte-icons";\n  let vCard = $state(false);\n<\/script>\n\n<div class="flex flex-col space-y-4">\n  <Card img={{ src: "/images/image-1.webp", alt: "my image" }} reverse={vCard}>\n    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions</h5>\n    <p class="mb-3 font-normal leading-tight text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order.</p>\n    <Button>\n      Read more <ArrowRightOutline class="ms-2 h-3.5 w-3.5 text-white" />\n    </Button>\n  </Card>\n  <Toggle bind:checked={vCard} spanClass="italic dark:text-gray-500">Reverse: {vCard}</Toggle>\n</div>\n';
const __vite_glob_0_3 = '<script lang="ts">\n  import { A } from "$lib";\n  import { ArrowRightOutline } from "flowbite-svelte-icons";\n  import Figma from "../../../utils/icons/Figma.svelte";\n<\/script>\n\n<A href="/" class="inline-flex items-center justify-center rounded-lg bg-gray-50 p-5 text-base font-medium hover:bg-gray-100 hover:text-gray-900 hover:no-underline dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">\n  <Figma />\n  <span class="ms-3 w-full">Get started with our Figma Design System</span>\n  <ArrowRightOutline class="ms-2 h-6 w-6" />\n</A>\n';
const __vite_glob_0_4 = '<script>\n  import { A } from "svelte-5-ui-lib";\n  import { ArrowRightOutline } from "flowbite-svelte-icons";\n<\/script>\n';
function ButtonLink($$anchor) {
  Button($$anchor, {
    href: "/",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text("Read more");
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
}
var root_1$2 = template(`<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5> <p class="font-normal leading-tight text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>`, 1);
function CardLink($$anchor) {
  Card($$anchor, {
    href: "/",
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1$2();
      next(2);
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
}
var root_2 = template(`Read more <!>`, 1);
var root_1$1 = template(`<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions</h5> <p class="mb-3 font-normal leading-tight text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order.</p> <!>`, 1);
var root$2 = template(`<div class="flex flex-col space-y-4"><!> <!></div>`);
function CardWithImage($$anchor) {
  let vCard = state(false);
  var div = root$2();
  var node = child(div);
  Card(node, {
    img: { src: "/images/image-1.webp", alt: "my image" },
    get reverse() {
      return get(vCard);
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment = root_1$1();
      var node_1 = sibling(first_child(fragment), 4);
      Button(node_1, {
        children: ($$anchor3, $$slotProps2) => {
          next();
          var fragment_1 = root_2();
          var node_2 = sibling(first_child(fragment_1));
          ArrowRightOutline(node_2, { class: "ms-2 h-3.5 w-3.5 text-white" });
          append($$anchor3, fragment_1);
        },
        $$slots: { default: true }
      });
      append($$anchor2, fragment);
    },
    $$slots: { default: true }
  });
  var node_3 = sibling(node, 2);
  Toggle(node_3, {
    get checked() {
      return get(vCard);
    },
    set checked($$value) {
      set(vCard, proxy($$value));
    },
    spanClass: "italic dark:text-gray-500",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text();
      template_effect(() => set_text(text$1, `Reverse: ${get(vCard) ?? ""}`));
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
  reset(div);
  append($$anchor, div);
}
var root$1 = ns_template(`<svg width="18" height="25" viewBox="0 0 18 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_18_290731)"><path d="M4.38242 24.8955C6.80071 24.8955 8.76338 23.1035 8.76338 20.8955V16.8955H4.38242C1.96413 16.8955 0.00146484 18.6875 0.00146484 20.8955C0.00146484 23.1035 1.96413 24.8955 4.38242 24.8955Z" fill="#0ACF83"></path><path d="M0.00146484 12.8955C0.00146484 10.6875 1.96413 8.89551 4.38242 8.89551H8.76338V16.8955H4.38242C1.96413 16.8955 0.00146484 15.1035 0.00146484 12.8955Z" fill="#A259FF"></path><path d="M0.00195312 4.89551C0.00195312 2.68751 1.96462 0.895508 4.38291 0.895508H8.76387V8.8955H4.38291C1.96462 8.8955 0.00195312 7.1035 0.00195312 4.89551Z" fill="#F24E1E"></path><path d="M8.76367 0.895508H13.1446C15.5629 0.895508 17.5256 2.68751 17.5256 4.89551C17.5256 7.1035 15.5629 8.8955 13.1446 8.8955H8.76367V0.895508Z" fill="#FF7262"></path><path d="M17.5256 12.8955C17.5256 15.1035 15.5629 16.8955 13.1446 16.8955C10.7263 16.8955 8.76367 15.1035 8.76367 12.8955C8.76367 10.6875 10.7263 8.89551 13.1446 8.89551C15.5629 8.89551 17.5256 10.6875 17.5256 12.8955Z" fill="#1ABCFE"></path></g><defs><clipPath id="clip0_18_290731"><rect width="17.5273" height="24" fill="white" transform="translate(0 0.895508)"></rect></clipPath></defs></svg>`);
function Figma($$anchor) {
  var svg = root$1();
  append($$anchor, svg);
}
var root_1 = template(`<!> <span class="ms-3 w-full">Get started with our Figma Design System</span> <!>`, 1);
function CtaLink($$anchor) {
  A($$anchor, {
    href: "/",
    class: "inline-flex items-center justify-center rounded-lg bg-gray-50 p-5 text-base font-medium hover:bg-gray-100 hover:text-gray-900 hover:no-underline dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white",
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1();
      var node = first_child(fragment_1);
      Figma(node);
      var node_1 = sibling(node, 4);
      ArrowRightOutline(node_1, { class: "ms-2 h-6 w-6" });
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
}
var root_8 = template(` <!>`, 1);
var root_5 = template(`<!> <!> <div class="mb-4 md:h-10"><!></div> <div class="mb-4 flex flex-wrap space-x-2"><!> <!></div> <div class="flex flex-wrap justify-center gap-2 md:justify-start"><!> <!></div>`, 1);
var root_17 = template(`<div class="mb-8 flex flex-wrap"><!> <!></div> <!>`, 1);
var root = template(`<!> <!> <!> <!> <!> <!> <!> <!> <!>`, 1);
function _page($$anchor, $$props) {
  push($$props, true);
  let text$1 = prop($$props, "text", 15, "Read more");
  const dirName = "typography/anchor";
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/ButtonLink.svelte": __vite_glob_0_0,
    "./examples/CardLink.svelte": __vite_glob_0_1,
    "./examples/CardWithImage.svelte": __vite_glob_0_2,
    "./examples/CtaLink.svelte": __vite_glob_0_3,
    "./examples/Setup.svelte": __vite_glob_0_4
  });
  const exampleArr = [
    {
      name: "Button link",
      component: ButtonLink
    },
    {
      name: "Cta link",
      component: CtaLink
    },
    {
      name: "Card link",
      component: CardLink
    },
    {
      name: "Card with image",
      component: CardWithImage
    }
  ];
  let selectedExample = state(proxy(exampleArr[0].name));
  let svelteCode = derived(() => getExampleFileName(get(selectedExample), exampleArr));
  function findObject(arr, name) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = derived(() => findObject(exampleArr, get(selectedExample)));
  const colors = Object.keys(anchor.variants.color);
  let anchorColor = state("primary");
  let linkClass = state("font-medium hover:underline");
  const changeLinkClass = () => {
    set(linkClass, proxy(get(linkClass) === "font-medium hover:underline" ? "underline hover:no-underline italic font-semibold" : "font-medium hover:underline"));
  };
  let linkIcon = state(false);
  const changeIcon = () => {
    set(linkIcon, !get(linkIcon));
  };
  let generatedCode = derived(() => (() => {
    let props = [];
    let iconSlot;
    props.push(` href="/"`);
    if (get(anchorColor) !== "primary") props.push(` color="${get(anchorColor)}"`);
    if (get(linkClass)) props.push(` class="${get(linkClass)}"`);
    iconSlot = get(linkIcon) ? `
  <ArrowRightOutline class="ms-2 h-6 w-6" />` : "";
    const propsString = props.length > 0 ? props.map((prop2) => `
  ${prop2}`).join("") + "\n" : "";
    return `<A${propsString}>
  ${text$1()} ${iconSlot}
</A>`;
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
      var text_1 = text("Links");
      append($$anchor2, text_1);
    },
    $$slots: { default: true }
  });
  var node_1 = sibling(node, 2);
  H2(node_1, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_2 = text("Setup");
      append($$anchor2, text_2);
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
      var text_3 = text("Interactive Link Builder");
      append($$anchor2, text_3);
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
        var node_5 = first_child(fragment_2);
        Label(node_5, {
          class: "text-md mb-2",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_4 = text("Edit link");
            append($$anchor3, text_4);
          },
          $$slots: { default: true }
        });
        var node_6 = sibling(node_5, 2);
        {
          const right = ($$anchor3) => {
            CloseButton($$anchor3, { onclick: () => text$1("") });
          };
          Input(node_6, {
            type: "text",
            get value() {
              return text$1();
            },
            set value($$value) {
              text$1($$value);
            },
            placeholder: "Write your blockquote text",
            class: "mb-4 pr-12",
            right,
            $$slots: { right: true }
          });
        }
        var div = sibling(node_6, 2);
        var node_7 = child(div);
        A(node_7, {
          href: "/",
          get color() {
            return get(anchorColor);
          },
          get class() {
            return get(linkClass);
          },
          children: ($$anchor3, $$slotProps2) => {
            next();
            var fragment_4 = root_8();
            var text_5 = first_child(fragment_4);
            var node_8 = sibling(text_5);
            if_block(node_8, () => get(linkIcon), ($$anchor4) => {
              ArrowRightOutline($$anchor4, { class: "ms-2 h-6 w-6" });
            });
            template_effect(() => set_text(text_5, `${text$1() ?? ""} `));
            append($$anchor3, fragment_4);
          },
          $$slots: { default: true }
        });
        reset(div);
        var div_1 = sibling(div, 2);
        var node_9 = child(div_1);
        Label(node_9, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_6 = text("Color");
            append($$anchor3, text_6);
          },
          $$slots: { default: true }
        });
        var node_10 = sibling(node_9, 2);
        each(node_10, 17, () => colors, index, ($$anchor3, colorOption) => {
          Radio($$anchor3, {
            labelClass: "w-24 my-1",
            name: "anchor_color",
            get group() {
              return get(anchorColor);
            },
            set group($$value) {
              set(anchorColor, proxy($$value));
            },
            get color() {
              return get(colorOption);
            },
            get value() {
              return get(colorOption);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_7 = text();
              template_effect(() => set_text(text_7, get(colorOption)));
              append($$anchor4, text_7);
            },
            $$slots: { default: true }
          });
        });
        reset(div_1);
        var div_2 = sibling(div_1, 2);
        var node_11 = child(div_2);
        Button(node_11, {
          class: "w-36",
          color: "blue",
          onclick: changeLinkClass,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_8 = text();
            template_effect(() => set_text(text_8, get(linkClass) === "font-medium hover:underline" ? "Change class" : "Remove class"));
            append($$anchor3, text_8);
          },
          $$slots: { default: true }
        });
        var node_12 = sibling(node_11, 2);
        Button(node_12, {
          class: "w-36",
          color: "pink",
          onclick: changeIcon,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_9 = text();
            template_effect(() => set_text(text_9, get(linkIcon) ? "Remove icon" : "Add icon"));
            append($$anchor3, text_9);
          },
          $$slots: { default: true }
        });
        reset(div_2);
        append($$anchor2, fragment_2);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_13 = sibling(node_4, 2);
  H2(node_13, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_10 = text("Examples");
      append($$anchor2, text_10);
    },
    $$slots: { default: true }
  });
  var node_14 = sibling(node_13, 2);
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
    CodeWrapper(node_14, {
      codeblock,
      children: ($$anchor2, $$slotProps) => {
        var fragment_11 = root_17();
        var div_3 = first_child(fragment_11);
        var node_15 = child(div_3);
        Label(node_15, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_11 = text("Example");
            append($$anchor3, text_11);
          },
          $$slots: { default: true }
        });
        var node_16 = sibling(node_15, 2);
        each(node_16, 17, () => exampleArr, index, ($$anchor3, style) => {
          Radio($$anchor3, {
            labelClass: "w-36 my-1",
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
              var text_12 = text();
              template_effect(() => set_text(text_12, get(style).name));
              append($$anchor4, text_12);
            },
            $$slots: { default: true }
          });
        });
        reset(div_3);
        var node_17 = sibling(div_3, 2);
        component(node_17, () => get(SelectedComponent), ($$anchor3, $$component) => {
          $$component($$anchor3, {});
        });
        append($$anchor2, fragment_11);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_18 = sibling(node_14, 2);
  H2(node_18, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_13 = text("Component data");
      append($$anchor2, text_13);
    },
    $$slots: { default: true }
  });
  var node_19 = sibling(node_18, 2);
  CompoAttributesViewer(node_19, { dirName });
  append($$anchor, fragment);
  pop();
}
export {
  _page as component
};
