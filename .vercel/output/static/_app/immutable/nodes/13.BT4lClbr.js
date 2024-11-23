import { b as text, a as append, t as template } from "../chunks/disclose-version.0TX42Q8e.js";
import { c as child, s as sibling, f as first_child, n as next, r as reset, p as push, a6 as state, u as user_effect, a as pop, b as get, t as template_effect, a7 as set, d as derived } from "../chunks/runtime.BkfDdwap.js";
import { a as set_text } from "../chunks/store.B2xZ3Ft6.js";
import { e as each, i as index } from "../chunks/each.CtHIoDcm.js";
import { b as proxy, c as component } from "../chunks/props.B7eOu8hW.js";
import { r as card, V as uiHelpers } from "../chunks/theme.BtjZjf2R.js";
import { B as Button } from "../chunks/markdown.Ba9FtS5g.js";
import { C as Card } from "../chunks/Card.nT-sWZgG.js";
import { C as CompoAttributesViewer, L as Label, R as Radio } from "../chunks/CompoAttributesViewer.HsPJjrMu.js";
import { T as Toggle } from "../chunks/Toggle.DCK_TCRE.js";
import { H as HighlightCompo } from "../chunks/HighlightCompo.D1kgIYBY.js";
import { D as DynamicCodeBlockHighlight } from "../chunks/DynamicCodeBlockHighlight.BS23lgW_.js";
import { C as CodeWrapper } from "../chunks/CodeWrapper.CdoIAYb8.js";
import { H as H1 } from "../chunks/H1.DunGd_Oq.js";
import { H as H2 } from "../chunks/H2.qsp5CBkK.js";
import { g as getExampleFileName, i as isGeneratedCodeOverflow, d as isSvelteOverflow } from "../chunks/helpers.B9KbZW0W.js";
import "../chunks/legacy.DvF4DOPZ.js";
import { A as ArrowRightOutline } from "../chunks/ArrowRightOutline.C1f8PGpf.js";
const __vite_glob_0_0 = '<script lang="ts">\n  import { Card, Button } from "$lib";\n<\/script>\n\n<div class="flex justify-center">\n  <Card class="text-center" size="lg" padding="xl">\n    <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Work fast from anywhere</h5>\n    <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Stay up to date and move work forward with Flowbite on iOS & Android. Download the app today.</p>\n    <div class="items-center justify-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0 rtl:space-x-reverse">\n      <Button>Download it</Button>\n      <Button>Get it on</Button>\n    </div>\n  </Card>\n</div>\n';
const __vite_glob_0_1 = '<script lang="ts">\n  import { Card, Button } from "$lib";\n  import { ArrowRightOutline } from "flowbite-svelte-icons";\n<\/script>\n\n<div class="flex justify-center">\n  <Card>\n    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions</h5>\n    <p class="mb-3 font-normal leading-tight text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order.</p>\n    <Button class="w-fit">\n      Read more <ArrowRightOutline class="ms-2 h-3.5 w-3.5 text-white" />\n    </Button>\n  </Card>\n</div>\n';
const __vite_glob_0_2 = '<script lang="ts">\n  import { Card } from "$lib";\n<\/script>\n\n<div class="flex justify-center">\n  <Card class="max-w-[250px]">\n    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Technology acquisitions</h5>\n    <p class="font-normal leading-tight text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions.</p>\n  </Card>\n</div>\n';
const __vite_glob_0_3 = '<script>\n  import { Card } from "svelte-5-ui-lib";\n<\/script>\n';
var root_1$2 = template(`<h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Work fast from anywhere</h5> <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Stay up to date and move work forward with Flowbite on iOS &amp; Android. Download the app today.</p> <div class="items-center justify-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0 rtl:space-x-reverse"><!> <!></div>`, 1);
var root$3 = template(`<div class="flex justify-center"><!></div>`);
function CallToActionCard($$anchor) {
  var div = root$3();
  var node = child(div);
  Card(node, {
    class: "text-center",
    size: "lg",
    padding: "xl",
    children: ($$anchor2, $$slotProps) => {
      var fragment = root_1$2();
      var div_1 = sibling(first_child(fragment), 4);
      var node_1 = child(div_1);
      Button(node_1, {
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text$1 = text("Download it");
          append($$anchor3, text$1);
        },
        $$slots: { default: true }
      });
      var node_2 = sibling(node_1, 2);
      Button(node_2, {
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text_1 = text("Get it on");
          append($$anchor3, text_1);
        },
        $$slots: { default: true }
      });
      reset(div_1);
      append($$anchor2, fragment);
    },
    $$slots: { default: true }
  });
  reset(div);
  append($$anchor, div);
}
var root_2 = template(`Read more <!>`, 1);
var root_1$1 = template(`<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions</h5> <p class="mb-3 font-normal leading-tight text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order.</p> <!>`, 1);
var root$2 = template(`<div class="flex justify-center"><!></div>`);
function CardWithActionButton($$anchor) {
  var div = root$2();
  var node = child(div);
  Card(node, {
    children: ($$anchor2, $$slotProps) => {
      var fragment = root_1$1();
      var node_1 = sibling(first_child(fragment), 4);
      Button(node_1, {
        class: "w-fit",
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
  reset(div);
  append($$anchor, div);
}
var root_1 = template(`<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Technology acquisitions</h5> <p class="font-normal leading-tight text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions.</p>`, 1);
var root$1 = template(`<div class="flex justify-center"><!></div>`);
function CustomSize($$anchor) {
  var div = root$1();
  var node = child(div);
  Card(node, {
    class: "max-w-[250px]",
    children: ($$anchor2, $$slotProps) => {
      var fragment = root_1();
      next(2);
      append($$anchor2, fragment);
    },
    $$slots: { default: true }
  });
  reset(div);
  append($$anchor, div);
}
var root_6 = template(`<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions</h5> <p class="font-normal leading-tight text-gray-700 dark:text-gray-300">Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order.</p>`, 1);
var root_5 = template(`<div class="flex justify-center"><!></div> <div class="my-4 flex flex-wrap space-x-4"><!> <!></div> <div class="flex flex-wrap space-x-2"><!> <!></div> <div class="my-4 flex flex-wrap space-x-4"><!> <!></div> <div class="my-4 flex flex-wrap space-x-4"><!> <!></div> <div class="flex flex-wrap justify-center gap-2 md:justify-start"><!> <!> <!> <!> <!></div>`, 1);
var root_26 = template(`<div class="mb-12 flex flex-wrap"><!> <!></div> <!>`, 1);
var root = template(`<!> <!> <!> <!> <!> <!> <!> <!> <!>`, 1);
function _page($$anchor, $$props) {
  push($$props, true);
  const dirName = "card";
  let reverse = state(false);
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/CallToActionCard.svelte": __vite_glob_0_0,
    "./examples/CardWithActionButton.svelte": __vite_glob_0_1,
    "./examples/CustomSize.svelte": __vite_glob_0_2,
    "./examples/Setup.svelte": __vite_glob_0_3
  });
  const exampleArr = [
    {
      name: "Custom size",
      component: CustomSize
    },
    {
      name: "Call to action card",
      component: CallToActionCard
    },
    {
      name: "Card with action button",
      component: CardWithActionButton
    }
  ];
  let selectedExample = state(proxy(exampleArr[0].name));
  let svelteCode = derived(() => getExampleFileName(get(selectedExample), exampleArr));
  function findObject(arr, name) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = derived(() => findObject(exampleArr, get(selectedExample)));
  const sizes = Object.keys(card.variants.size);
  let cardSize = state("sm");
  const colors = Object.keys(card.variants.color);
  let color = state("gray");
  const paddings = Object.keys(card.variants.padding);
  let cardPadding = state("lg");
  const shadows = Object.keys(card.variants.shadow);
  let cardShadow = state("md");
  let horizontal = state(false);
  const changeImgLayout = () => {
    set(horizontal, !get(horizontal));
  };
  let link = state("");
  const changeLink = () => {
    set(link, proxy(get(link) === "" ? "/" : ""));
  };
  let cardClass = state("");
  const changeClass = () => {
    set(cardClass, proxy(get(cardClass) === "" ? "pl-10" : ""));
  };
  let cardImage = state(proxy({}));
  const changeImage = () => {
    set(cardImage, proxy(Object.keys(get(cardImage)).length === 0 ? { src: "/images/image-1.webp", alt: "my image" } : {}));
  };
  let generatedCode = derived(() => (() => {
    let props = [];
    if (get(cardSize) !== "sm") props.push(` size="${get(cardSize)}"`);
    if (get(color) !== "gray") props.push(` color="${get(color)}"`);
    if (get(cardShadow) !== "md") props.push(` shadow="${get(cardShadow)}"`);
    if (get(cardClass)) props.push(` class="${get(cardClass)}"`);
    if (get(cardPadding) !== "lg") props.push(` padding="${get(cardPadding)}"`);
    if (get(link)) props.push(` href="${get(link)}"`);
    if (get(horizontal)) props.push(` horizontal`);
    if (get(reverse)) props.push(` reverse`);
    if (Object.keys(get(cardImage)).length > 0) {
      const imgString = Object.entries(get(cardImage)).map(([key, value]) => `${key}:"${value}"`).join(",");
      props.push(` img={{${imgString}}}`);
    }
    const propsString = props.length > 0 ? props.map((prop) => `
  ${prop}`).join("") + "\n" : "";
    return `<Card${propsString}>My Card</Card>`;
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
      var text$1 = text("Cards");
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
      var text_2 = text("Interactive Card Builder");
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
        var href = derived(() => get(link) ? get(link) : "");
        Card(node_5, {
          get size() {
            return get(cardSize);
          },
          get color() {
            return get(color);
          },
          get padding() {
            return get(cardPadding);
          },
          get shadow() {
            return get(cardShadow);
          },
          get href() {
            return get(href);
          },
          get class() {
            return get(cardClass);
          },
          get img() {
            return get(cardImage);
          },
          get horizontal() {
            return get(horizontal);
          },
          get reverse() {
            return get(reverse);
          },
          children: ($$anchor3, $$slotProps2) => {
            var fragment_3 = root_6();
            next(2);
            append($$anchor3, fragment_3);
          },
          $$slots: { default: true }
        });
        reset(div);
        var div_1 = sibling(div, 2);
        var node_6 = child(div_1);
        Label(node_6, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_3 = text("Size");
            append($$anchor3, text_3);
          },
          $$slots: { default: true }
        });
        var node_7 = sibling(node_6, 2);
        each(node_7, 17, () => sizes, index, ($$anchor3, size) => {
          Radio($$anchor3, {
            labelClass: "w-16 my-1",
            name: "interactive_card_size",
            get group() {
              return get(cardSize);
            },
            set group($$value) {
              set(cardSize, proxy($$value));
            },
            get value() {
              return get(size);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_4 = text();
              template_effect(() => set_text(text_4, get(size)));
              append($$anchor4, text_4);
            },
            $$slots: { default: true }
          });
        });
        reset(div_1);
        var div_2 = sibling(div_1, 2);
        var node_8 = child(div_2);
        Label(node_8, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_5 = text("Color");
            append($$anchor3, text_5);
          },
          $$slots: { default: true }
        });
        var node_9 = sibling(node_8, 2);
        each(node_9, 17, () => colors, index, ($$anchor3, colorOption) => {
          Radio($$anchor3, {
            labelClass: "w-24 my-1",
            name: "alert_reactive",
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
              var text_6 = text();
              template_effect(() => set_text(text_6, get(colorOption)));
              append($$anchor4, text_6);
            },
            $$slots: { default: true }
          });
        });
        reset(div_2);
        var div_3 = sibling(div_2, 2);
        var node_10 = child(div_3);
        Label(node_10, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_7 = text("Padding");
            append($$anchor3, text_7);
          },
          $$slots: { default: true }
        });
        var node_11 = sibling(node_10, 2);
        each(node_11, 17, () => paddings, index, ($$anchor3, padding) => {
          Radio($$anchor3, {
            labelClass: "w-16 my-1",
            name: "interactive_card_padding",
            get group() {
              return get(cardPadding);
            },
            set group($$value) {
              set(cardPadding, proxy($$value));
            },
            get value() {
              return get(padding);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_8 = text();
              template_effect(() => set_text(text_8, get(padding)));
              append($$anchor4, text_8);
            },
            $$slots: { default: true }
          });
        });
        reset(div_3);
        var div_4 = sibling(div_3, 2);
        var node_12 = child(div_4);
        Label(node_12, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_9 = text("Shadow");
            append($$anchor3, text_9);
          },
          $$slots: { default: true }
        });
        var node_13 = sibling(node_12, 2);
        each(node_13, 17, () => shadows, index, ($$anchor3, shadow) => {
          Radio($$anchor3, {
            labelClass: "w-16 my-1",
            name: "interactive_card_shadow",
            get group() {
              return get(cardShadow);
            },
            set group($$value) {
              set(cardShadow, proxy($$value));
            },
            get value() {
              return get(shadow);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_10 = text();
              template_effect(() => set_text(text_10, get(shadow)));
              append($$anchor4, text_10);
            },
            $$slots: { default: true }
          });
        });
        reset(div_4);
        var div_5 = sibling(div_4, 2);
        var node_14 = child(div_5);
        Button(node_14, {
          class: "w-40",
          color: "sky",
          onclick: changeLink,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_11 = text();
            template_effect(() => set_text(text_11, get(link) === "" ? "Add link" : "Remove link"));
            append($$anchor3, text_11);
          },
          $$slots: { default: true }
        });
        var node_15 = sibling(node_14, 2);
        Button(node_15, {
          class: "w-40",
          color: "green",
          onclick: changeClass,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_12 = text();
            template_effect(() => set_text(text_12, get(cardClass) ? "Remove class" : "Add class"));
            append($$anchor3, text_12);
          },
          $$slots: { default: true }
        });
        var node_16 = sibling(node_15, 2);
        Button(node_16, {
          class: "w-40",
          color: "blue",
          onclick: changeImage,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_13 = text();
            template_effect(() => set_text(text_13, Object.keys(get(cardImage)).length === 0 ? "Add image" : "Remove image"));
            append($$anchor3, text_13);
          },
          $$slots: { default: true }
        });
        var node_17 = sibling(node_16, 2);
        var disabled = derived(() => Object.keys(get(cardImage)).length === 0);
        Button(node_17, {
          get disabled() {
            return get(disabled);
          },
          class: "w-40",
          color: "violet",
          onclick: changeImgLayout,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_14 = text();
            template_effect(() => set_text(text_14, get(horizontal) ? "Vertical" : "Horizontal"));
            append($$anchor3, text_14);
          },
          $$slots: { default: true }
        });
        var node_18 = sibling(node_17, 2);
        var labelClass = derived(() => `italic dark:text-gray-500 ${(Object.keys(get(cardImage)).length === 0 ? "opacity-50 cursor-not-allowed" : "") ?? ""}`);
        var disabled_1 = derived(() => Object.keys(get(cardImage)).length === 0);
        Toggle(node_18, {
          get checked() {
            return get(reverse);
          },
          set checked($$value) {
            set(reverse, proxy($$value));
          },
          get labelClass() {
            return get(labelClass);
          },
          get disabled() {
            return get(disabled_1);
          },
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_15 = text();
            template_effect(() => set_text(text_15, `Reverse: ${get(reverse) ?? ""}`));
            append($$anchor3, text_15);
          },
          $$slots: { default: true }
        });
        reset(div_5);
        append($$anchor2, fragment_2);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_19 = sibling(node_4, 2);
  H2(node_19, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_16 = text("Examples");
      append($$anchor2, text_16);
    },
    $$slots: { default: true }
  });
  var node_20 = sibling(node_19, 2);
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
    CodeWrapper(node_20, {
      codeblock,
      children: ($$anchor2, $$slotProps) => {
        var fragment_18 = root_26();
        var div_6 = first_child(fragment_18);
        var node_21 = child(div_6);
        Label(node_21, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_17 = text("Example");
            append($$anchor3, text_17);
          },
          $$slots: { default: true }
        });
        var node_22 = sibling(node_21, 2);
        each(node_22, 17, () => exampleArr, index, ($$anchor3, style) => {
          Radio($$anchor3, {
            labelClass: "w-48 my-1",
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
              var text_18 = text();
              template_effect(() => set_text(text_18, get(style).name));
              append($$anchor4, text_18);
            },
            $$slots: { default: true }
          });
        });
        reset(div_6);
        var node_23 = sibling(div_6, 2);
        component(node_23, () => get(SelectedComponent), ($$anchor3, $$component) => {
          $$component($$anchor3, {});
        });
        append($$anchor2, fragment_18);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_24 = sibling(node_20, 2);
  H2(node_24, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_19 = text("Component data");
      append($$anchor2, text_19);
    },
    $$slots: { default: true }
  });
  var node_25 = sibling(node_24, 2);
  CompoAttributesViewer(node_25, { dirName });
  append($$anchor, fragment);
  pop();
}
export {
  _page as component
};
