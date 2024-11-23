import { a as append, t as template, b as text } from "../chunks/disclose-version.0TX42Q8e.js";
import { c as child, f as first_child, n as next, s as sibling, r as reset, p as push, a6 as state, u as user_effect, a as pop, b as get, t as template_effect, a7 as set, d as derived } from "../chunks/runtime.BkfDdwap.js";
import { a as set_text } from "../chunks/store.B2xZ3Ft6.js";
import { e as each, i as index } from "../chunks/each.CtHIoDcm.js";
import { b as proxy, c as component } from "../chunks/props.B7eOu8hW.js";
import { aU as button, g as gradientButton, V as uiHelpers } from "../chunks/theme.BtjZjf2R.js";
import { B as Button } from "../chunks/markdown.Ba9FtS5g.js";
import { G as GradientButton } from "../chunks/GradientButton.iHHan53H.js";
import { C as CompoAttributesViewer, L as Label, R as Radio } from "../chunks/CompoAttributesViewer.HsPJjrMu.js";
import { H as HighlightCompo } from "../chunks/HighlightCompo.D1kgIYBY.js";
import { D as DynamicCodeBlockHighlight } from "../chunks/DynamicCodeBlockHighlight.BS23lgW_.js";
import { C as CodeWrapper } from "../chunks/CodeWrapper.CdoIAYb8.js";
import { H as H1 } from "../chunks/H1.DunGd_Oq.js";
import { H as H2 } from "../chunks/H2.qsp5CBkK.js";
import { b as capitalizeFirstLetter, g as getExampleFileName, i as isGeneratedCodeOverflow, d as isSvelteOverflow } from "../chunks/helpers.B9KbZW0W.js";
import "../chunks/legacy.DvF4DOPZ.js";
import { A as ArrowRightOutline } from "../chunks/ArrowRightOutline.C1f8PGpf.js";
import { S as ShoppingBagSolid } from "../chunks/ShoppingBagSolid.Dfyq49NL.js";
import { I as Indicator } from "../chunks/Indicator.BIdmiP_T.js";
import { T as ThumbsUpSolid } from "../chunks/ThumbsUpSolid.CIE3OZly.js";
import { S as Spinner } from "../chunks/Spinner.B5FrR-LX.js";
const __vite_glob_0_0 = '<script lang="ts">\n  import { Button } from "$lib";\n  import { ShoppingBagSolid, ArrowRightOutline } from "flowbite-svelte-icons";\n<\/script>\n\n<div class="flex flex-wrap gap-2">\n  <Button><ShoppingBagSolid class="me-2 h-4 w-4" />Buy Now</Button>\n  <Button>Choose Plan<ArrowRightOutline class="ms-2 h-5 w-5" /></Button>\n</div>\n';
const __vite_glob_0_1 = '<script lang="ts">\n  import { Button, Indicator } from "$lib";\n<\/script>\n\n<Button class="gap-2">\n  Messages\n  <Indicator color="cyan" class="bg-primary-200 text-xs font-semibold text-primary-800" size="lg">2</Indicator>\n</Button>\n';
const __vite_glob_0_2 = '<script lang="ts">\n  import { Button } from "$lib";\n  const btn1 = () => {\n    alert("You clicked btn1.");\n  };\n<\/script>\n\n<Button onclick={btn1}>Button 1</Button>\n';
const __vite_glob_0_3 = '<script lang="ts">\n  import { Button } from "$lib";\n  import { ArrowRightOutline, ThumbsUpSolid } from "flowbite-svelte-icons";\n<\/script>\n\n<Button class="!p-2"><ArrowRightOutline class="h-7 w-7" /></Button>\n<Button pill={true} class="!p-2"><ArrowRightOutline class="h-5 w-5" /></Button>\n<Button outline={true} class="!p-2" size="lg">\n  <ThumbsUpSolid class="h-7 w-7" />\n</Button>\n<Button pill={true} outline={true} class="!p-2" size="xl">\n  <ThumbsUpSolid class="h-5 w-5" />\n</Button>\n';
const __vite_glob_0_4 = '<script lang="ts">\n  import { Button, Spinner } from "$lib";\n<\/script>\n\n<Button>\n  <Spinner class="me-3" size="4" color="teal" />Loading ...\n</Button>\n<Button color="alternative">\n  <Spinner class="me-3" size="4" />Loading ...\n</Button>\n';
const __vite_glob_0_5 = '<script lang="ts">\n  import { Button } from "$lib";\n<\/script>\n';
var root_1$2 = template(`<!>Buy Now`, 1);
var root_2$1 = template(`Choose Plan<!>`, 1);
var root$3 = template(`<div class="flex flex-wrap gap-2"><!> <!></div>`);
function ButtonWithIcon($$anchor) {
  var div = root$3();
  var node = child(div);
  Button(node, {
    children: ($$anchor2, $$slotProps) => {
      var fragment = root_1$2();
      var node_1 = first_child(fragment);
      ShoppingBagSolid(node_1, { class: "me-2 h-4 w-4" });
      next();
      append($$anchor2, fragment);
    },
    $$slots: { default: true }
  });
  var node_2 = sibling(node, 2);
  Button(node_2, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var fragment_1 = root_2$1();
      var node_3 = sibling(first_child(fragment_1));
      ArrowRightOutline(node_3, { class: "ms-2 h-5 w-5" });
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
  reset(div);
  append($$anchor, div);
}
var root_1$1 = template(`Messages <!>`, 1);
function ButtonWithLabel($$anchor) {
  Button($$anchor, {
    class: "gap-2",
    children: ($$anchor2, $$slotProps) => {
      next();
      var fragment_1 = root_1$1();
      var node = sibling(first_child(fragment_1));
      Indicator(node, {
        color: "cyan",
        class: "bg-primary-200 text-xs font-semibold text-primary-800",
        size: "lg",
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text$1 = text("2");
          append($$anchor3, text$1);
        },
        $$slots: { default: true }
      });
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
}
function Events($$anchor) {
  const btn1 = () => {
    alert("You clicked btn1.");
  };
  Button($$anchor, {
    onclick: btn1,
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text("Button 1");
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
}
var root$2 = template(`<!> <!> <!> <!>`, 1);
function IconButtons($$anchor) {
  var fragment = root$2();
  var node = first_child(fragment);
  Button(node, {
    class: "!p-2",
    children: ($$anchor2, $$slotProps) => {
      ArrowRightOutline($$anchor2, { class: "h-7 w-7" });
    },
    $$slots: { default: true }
  });
  var node_1 = sibling(node, 2);
  Button(node_1, {
    pill: true,
    class: "!p-2",
    children: ($$anchor2, $$slotProps) => {
      ArrowRightOutline($$anchor2, { class: "h-5 w-5" });
    },
    $$slots: { default: true }
  });
  var node_2 = sibling(node_1, 2);
  Button(node_2, {
    outline: true,
    class: "!p-2",
    size: "lg",
    children: ($$anchor2, $$slotProps) => {
      ThumbsUpSolid($$anchor2, { class: "h-7 w-7" });
    },
    $$slots: { default: true }
  });
  var node_3 = sibling(node_2, 2);
  Button(node_3, {
    pill: true,
    outline: true,
    class: "!p-2",
    size: "xl",
    children: ($$anchor2, $$slotProps) => {
      ThumbsUpSolid($$anchor2, { class: "h-5 w-5" });
    },
    $$slots: { default: true }
  });
  append($$anchor, fragment);
}
var root_1 = template(`<!>Loading ...`, 1);
var root_2 = template(`<!>Loading ...`, 1);
var root$1 = template(`<!> <!>`, 1);
function Loader($$anchor) {
  var fragment = root$1();
  var node = first_child(fragment);
  Button(node, {
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1();
      var node_1 = first_child(fragment_1);
      Spinner(node_1, { class: "me-3", size: "4", color: "teal" });
      next();
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
  var node_2 = sibling(node, 2);
  Button(node_2, {
    color: "alternative",
    children: ($$anchor2, $$slotProps) => {
      var fragment_2 = root_2();
      var node_3 = first_child(fragment_2);
      Spinner(node_3, { class: "me-3", size: "4" });
      next();
      append($$anchor2, fragment_2);
    },
    $$slots: { default: true }
  });
  append($$anchor, fragment);
}
var root_5 = template(`<div class="h-16"><!></div> <div class="mb-4 flex flex-wrap space-x-2"><!> <!></div> <div class="mb-4 flex flex-wrap space-x-2"><!> <!></div> <div class="flex flex-wrap justify-center gap-2 md:justify-start"><!> <!> <!> <!> <!> <!></div>`, 1);
var root_21 = template(`<div class="h-16"><!></div> <div class="mb-4 flex flex-wrap space-x-2"><!> <!></div> <div class="mb-4 flex flex-wrap space-x-2"><!> <!></div> <div class="flex flex-wrap justify-center gap-2 md:justify-start"><!> <!> <!> <!> <!> <!></div>`, 1);
var root_37 = template(`<div class="mb-12 flex flex-wrap"><!> <!></div> <!>`, 1);
var root = template(`<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>`, 1);
function _page($$anchor, $$props) {
  push($$props, true);
  const dirName = "buttons";
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/ButtonWithIcon.svelte": __vite_glob_0_0,
    "./examples/ButtonWithLabel.svelte": __vite_glob_0_1,
    "./examples/Events.svelte": __vite_glob_0_2,
    "./examples/IconButtons.svelte": __vite_glob_0_3,
    "./examples/Loader.svelte": __vite_glob_0_4,
    "./examples/Setup.svelte": __vite_glob_0_5
  });
  const exampleArr = [
    {
      name: "Button with Icon",
      component: ButtonWithIcon
    },
    {
      name: "Button with label",
      component: ButtonWithLabel
    },
    {
      name: "Events",
      component: Events
    },
    {
      name: "Icon buttons",
      component: IconButtons
    },
    {
      name: "Loader",
      component: Loader
    }
  ];
  let selectedExample = state(proxy(exampleArr[0].name));
  let svelteCode = derived(() => getExampleFileName(get(selectedExample), exampleArr));
  function findObject(arr, name) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = derived(() => findObject(exampleArr, get(selectedExample)));
  const btnColors = Object.keys(button.variants.color);
  let btnColor = state("primary");
  let btnClass = state("");
  const changeBtnClass = () => {
    set(btnClass, proxy(get(btnClass) === "" ? "w-48" : ""));
  };
  let btnLink = state("");
  const changeBtnLink = () => {
    set(btnLink, proxy(get(btnLink) === "" ? "/" : ""));
  };
  let btnOutline = state(false);
  const changeBtnOutline = () => {
    set(btnOutline, !get(btnOutline));
  };
  let btnShadow = state(false);
  const changeBtnShadow = () => {
    set(btnShadow, !get(btnShadow));
  };
  let btnPill = state(false);
  const changeBtnPill = () => {
    set(btnPill, !get(btnPill));
  };
  let btnDisabled = state(false);
  const changeBtnDisabled = () => {
    set(btnDisabled, !get(btnDisabled));
  };
  const btnSizes = Object.keys(button.variants.size);
  let btnSize = state("md");
  const gradientColors = Object.keys(gradientButton.variants.color);
  let gradientColor = state("blue");
  const gradientSizes = Object.keys(button.variants.size);
  let gradientSize = state("md");
  let gradientClass = state("");
  const changeGradientClass = () => {
    set(gradientClass, proxy(get(gradientClass) === "" ? "w-48" : ""));
  };
  let gradientOutline = state(false);
  const changeGradientOutline = () => {
    set(gradientOutline, !get(gradientOutline));
  };
  let gradientShadow = state(false);
  const changeGradientShadow = () => {
    set(gradientShadow, !get(gradientShadow));
  };
  let graidentPill = state(false);
  const changeGradientPill = () => {
    set(graidentPill, !get(graidentPill));
  };
  let gradientDisabled = state(false);
  const changeGradientDisabled = () => {
    set(gradientDisabled, !get(gradientDisabled));
  };
  let gradientLink = state("");
  const changeGradientLink = () => {
    set(gradientLink, proxy(get(gradientLink) === "" ? "/" : ""));
  };
  let generatedCode = derived(() => (() => {
    let props = [];
    if (get(btnColor) !== "primary") props.push(` color="${get(btnColor)}"`);
    if (get(btnShadow)) props.push(" shadow");
    if (get(btnOutline)) props.push(" outline");
    if (get(btnPill)) props.push(" pill");
    if (get(btnClass)) props.push(` class="${get(btnClass)}"`);
    if (get(btnLink)) props.push(` href="${get(btnLink)}"`);
    if (get(btnDisabled)) props.push(" disabled");
    if (get(btnSize) !== "md") props.push(` size="${get(btnSize)}"`);
    const propsString = props.length > 0 ? props.map((prop) => `
  ${prop}`).join("") + "\n" : "";
    return `<Button${propsString}>My Button</Button>`;
  })());
  let gradientGeneratedCode = derived(() => (() => {
    let props = [];
    if (get(gradientColor) !== "blue") props.push(` color="${get(gradientColor)}"`);
    if (get(gradientShadow)) props.push(" shadow");
    if (get(gradientOutline)) props.push(" outline");
    if (get(graidentPill)) props.push(" pill");
    if (get(gradientClass)) props.push(` class="${get(gradientClass)}"`);
    if (get(gradientLink)) props.push(` href="${get(gradientLink)}"`);
    if (get(gradientDisabled)) props.push(" disabled");
    if (get(gradientSize) !== "md") props.push(` size="${get(gradientSize)}"`);
    const propsString = props.length > 0 ? props.map((prop) => `
  ${prop}`).join("") + "\n" : "";
    return `<GradientButton${propsString}>My Gradient Button</GradientButton>`;
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
      var text$1 = text("Buttons");
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
      var text_2 = text("Interactive Button Bilder");
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
      innerClass: "flex flex-wrap gap-2",
      codeblock,
      children: ($$anchor2, $$slotProps) => {
        var fragment_2 = root_5();
        var div = first_child(fragment_2);
        var node_5 = child(div);
        var href = derived(() => get(btnLink) ? get(btnLink) : "");
        Button(node_5, {
          get color() {
            return get(btnColor);
          },
          get class() {
            return get(btnClass);
          },
          get outline() {
            return get(btnOutline);
          },
          get shadow() {
            return get(btnShadow);
          },
          get pill() {
            return get(btnPill);
          },
          get disabled() {
            return get(btnDisabled);
          },
          get size() {
            return get(btnSize);
          },
          get href() {
            return get(href);
          },
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_3 = text("Button");
            append($$anchor3, text_3);
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
            var text_4 = text("Color");
            append($$anchor3, text_4);
          },
          $$slots: { default: true }
        });
        var node_7 = sibling(node_6, 2);
        each(node_7, 17, () => btnColors, index, ($$anchor3, colorOption) => {
          Radio($$anchor3, {
            labelClass: "w-24 my-1",
            name: "btn_color",
            get group() {
              return get(btnColor);
            },
            set group($$value) {
              set(btnColor, proxy($$value));
            },
            get color() {
              return get(colorOption);
            },
            get value() {
              return get(colorOption);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_5 = text();
              template_effect(() => set_text(text_5, get(colorOption)));
              append($$anchor4, text_5);
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
            var text_6 = text("Size");
            append($$anchor3, text_6);
          },
          $$slots: { default: true }
        });
        var node_9 = sibling(node_8, 2);
        each(node_9, 17, () => btnSizes, index, ($$anchor3, sizeOption) => {
          Radio($$anchor3, {
            labelClass: "w-24 my-1",
            name: "btn_size",
            get group() {
              return get(btnSize);
            },
            set group($$value) {
              set(btnSize, proxy($$value));
            },
            get value() {
              return get(sizeOption);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_7 = text();
              template_effect(() => set_text(text_7, get(sizeOption)));
              append($$anchor4, text_7);
            },
            $$slots: { default: true }
          });
        });
        reset(div_2);
        var div_3 = sibling(div_2, 2);
        var node_10 = child(div_3);
        Button(node_10, {
          class: "w-40",
          color: "blue",
          onclick: changeBtnOutline,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_8 = text();
            template_effect(() => set_text(text_8, get(btnOutline) === false ? "Add outline" : "Remove outline"));
            append($$anchor3, text_8);
          },
          $$slots: { default: true }
        });
        var node_11 = sibling(node_10, 2);
        Button(node_11, {
          class: "w-40",
          color: "green",
          onclick: changeBtnShadow,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_9 = text();
            template_effect(() => set_text(text_9, get(btnShadow) === false ? "Add shadow" : "Remove shadow"));
            append($$anchor3, text_9);
          },
          $$slots: { default: true }
        });
        var node_12 = sibling(node_11, 2);
        Button(node_12, {
          class: "w-40",
          color: "yellow",
          onclick: changeBtnPill,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_10 = text();
            template_effect(() => set_text(text_10, get(btnPill) === false ? "Add pill" : "Remove pill"));
            append($$anchor3, text_10);
          },
          $$slots: { default: true }
        });
        var node_13 = sibling(node_12, 2);
        Button(node_13, {
          class: "w-40",
          color: "red",
          onclick: changeBtnDisabled,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_11 = text();
            template_effect(() => set_text(text_11, get(btnDisabled) === false ? "Add disabled" : "Remove disabled"));
            append($$anchor3, text_11);
          },
          $$slots: { default: true }
        });
        var node_14 = sibling(node_13, 2);
        Button(node_14, {
          class: "w-40",
          onclick: changeBtnClass,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_12 = text();
            template_effect(() => set_text(text_12, get(btnClass) === "" ? "Add class" : "Remove class"));
            append($$anchor3, text_12);
          },
          $$slots: { default: true }
        });
        var node_15 = sibling(node_14, 2);
        Button(node_15, {
          class: "w-40",
          color: "sky",
          onclick: changeBtnLink,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_13 = text();
            template_effect(() => set_text(text_13, get(btnLink) === "" ? "Add link" : "Remove link"));
            append($$anchor3, text_13);
          },
          $$slots: { default: true }
        });
        reset(div_3);
        append($$anchor2, fragment_2);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_16 = sibling(node_4, 2);
  H2(node_16, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_14 = text("Interactive Gradient Button Builder");
      append($$anchor2, text_14);
    },
    $$slots: { default: true }
  });
  var node_17 = sibling(node_16, 2);
  {
    const codeblock = ($$anchor2) => {
      HighlightCompo($$anchor2, {
        get code() {
          return get(gradientGeneratedCode);
        }
      });
    };
    CodeWrapper(node_17, {
      codeblock,
      children: ($$anchor2, $$slotProps) => {
        var fragment_14 = root_21();
        var div_4 = first_child(fragment_14);
        var node_18 = child(div_4);
        GradientButton(node_18, {
          get outline() {
            return get(gradientOutline);
          },
          get shadow() {
            return get(gradientShadow);
          },
          get pill() {
            return get(graidentPill);
          },
          get class() {
            return get(gradientClass);
          },
          get disabled() {
            return get(gradientDisabled);
          },
          get color() {
            return get(gradientColor);
          },
          get size() {
            return get(gradientSize);
          },
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_15 = text();
            template_effect(() => set_text(text_15, capitalizeFirstLetter(get(gradientColor))));
            append($$anchor3, text_15);
          },
          $$slots: { default: true }
        });
        reset(div_4);
        var div_5 = sibling(div_4, 2);
        var node_19 = child(div_5);
        Label(node_19, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_16 = text("Color");
            append($$anchor3, text_16);
          },
          $$slots: { default: true }
        });
        var node_20 = sibling(node_19, 2);
        each(node_20, 17, () => gradientColors, index, ($$anchor3, colorOption) => {
          Radio($$anchor3, {
            labelClass: "w-32 my-1",
            name: "gradient_color",
            get group() {
              return get(gradientColor);
            },
            set group($$value) {
              set(gradientColor, proxy($$value));
            },
            get value() {
              return get(colorOption);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_17 = text();
              template_effect(() => set_text(text_17, get(colorOption)));
              append($$anchor4, text_17);
            },
            $$slots: { default: true }
          });
        });
        reset(div_5);
        var div_6 = sibling(div_5, 2);
        var node_21 = child(div_6);
        Label(node_21, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_18 = text("Size");
            append($$anchor3, text_18);
          },
          $$slots: { default: true }
        });
        var node_22 = sibling(node_21, 2);
        each(node_22, 17, () => gradientSizes, index, ($$anchor3, sizeOption) => {
          Radio($$anchor3, {
            labelClass: "w-24 my-1",
            name: "gradient_size",
            get group() {
              return get(gradientSize);
            },
            set group($$value) {
              set(gradientSize, proxy($$value));
            },
            get value() {
              return get(sizeOption);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_19 = text();
              template_effect(() => set_text(text_19, get(sizeOption)));
              append($$anchor4, text_19);
            },
            $$slots: { default: true }
          });
        });
        reset(div_6);
        var div_7 = sibling(div_6, 2);
        var node_23 = child(div_7);
        Button(node_23, {
          class: "w-40",
          color: "blue",
          onclick: changeGradientOutline,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_20 = text();
            template_effect(() => set_text(text_20, get(gradientOutline) === false ? "Add outline" : "Remove outline"));
            append($$anchor3, text_20);
          },
          $$slots: { default: true }
        });
        var node_24 = sibling(node_23, 2);
        Button(node_24, {
          class: "w-40",
          color: "green",
          onclick: changeGradientShadow,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_21 = text();
            template_effect(() => set_text(text_21, get(gradientShadow) === false ? "Add shadow" : "Remove shadow"));
            append($$anchor3, text_21);
          },
          $$slots: { default: true }
        });
        var node_25 = sibling(node_24, 2);
        Button(node_25, {
          class: "w-40",
          color: "yellow",
          onclick: changeGradientPill,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_22 = text();
            template_effect(() => set_text(text_22, get(graidentPill) === false ? "Add pill" : "Remove pill"));
            append($$anchor3, text_22);
          },
          $$slots: { default: true }
        });
        var node_26 = sibling(node_25, 2);
        Button(node_26, {
          class: "w-40",
          color: "red",
          onclick: changeGradientDisabled,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_23 = text();
            template_effect(() => set_text(text_23, get(gradientDisabled) === false ? "Add disabled" : "Remove disabled"));
            append($$anchor3, text_23);
          },
          $$slots: { default: true }
        });
        var node_27 = sibling(node_26, 2);
        Button(node_27, {
          class: "w-40",
          onclick: changeGradientClass,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_24 = text();
            template_effect(() => set_text(text_24, get(gradientClass) === "" ? "Add class" : "Remove class"));
            append($$anchor3, text_24);
          },
          $$slots: { default: true }
        });
        var node_28 = sibling(node_27, 2);
        Button(node_28, {
          class: "w-40",
          color: "sky",
          onclick: changeGradientLink,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_25 = text();
            template_effect(() => set_text(text_25, get(btnLink) === "" ? "Add link" : "Remove link"));
            append($$anchor3, text_25);
          },
          $$slots: { default: true }
        });
        reset(div_7);
        append($$anchor2, fragment_14);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_29 = sibling(node_17, 2);
  H2(node_29, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_26 = text("Examples");
      append($$anchor2, text_26);
    },
    $$slots: { default: true }
  });
  var node_30 = sibling(node_29, 2);
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
    CodeWrapper(node_30, {
      codeblock,
      children: ($$anchor2, $$slotProps) => {
        var fragment_27 = root_37();
        var div_8 = first_child(fragment_27);
        var node_31 = child(div_8);
        Label(node_31, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_27 = text("Example");
            append($$anchor3, text_27);
          },
          $$slots: { default: true }
        });
        var node_32 = sibling(node_31, 2);
        each(node_32, 17, () => exampleArr, index, ($$anchor3, style) => {
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
              var text_28 = text();
              template_effect(() => set_text(text_28, get(style).name));
              append($$anchor4, text_28);
            },
            $$slots: { default: true }
          });
        });
        reset(div_8);
        var node_33 = sibling(div_8, 2);
        component(node_33, () => get(SelectedComponent), ($$anchor3, $$component) => {
          $$component($$anchor3, {});
        });
        append($$anchor2, fragment_27);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_34 = sibling(node_30, 2);
  H2(node_34, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_29 = text("Component data");
      append($$anchor2, text_29);
    },
    $$slots: { default: true }
  });
  var node_35 = sibling(node_34, 2);
  CompoAttributesViewer(node_35, { dirName });
  append($$anchor, fragment);
  pop();
}
export {
  _page as component
};
