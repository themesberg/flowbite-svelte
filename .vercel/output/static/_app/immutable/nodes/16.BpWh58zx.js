import { c as comment, a as append, t as template, b as text } from "../chunks/disclose-version.0TX42Q8e.js";
import { p as push, c as child, s as sibling, f as first_child, r as reset, t as template_effect, b as get, a as pop, d as derived, n as next, a7 as set, a6 as state } from "../chunks/runtime.BkfDdwap.js";
import { a as set_text } from "../chunks/store.B2xZ3Ft6.js";
import { e as each, i as index } from "../chunks/each.CtHIoDcm.js";
import { aI as android, a as set_attributes, b as set_class, aJ as defaultMockup, aK as desktop, aL as ios, aM as laptop, aN as smartwatch, aO as tablet, s as set_attribute } from "../chunks/theme.BtjZjf2R.js";
import { i as if_block, r as rest_props, p as prop, c as component, b as proxy } from "../chunks/props.B7eOu8hW.js";
import { s as snippet } from "../chunks/snippet.BDfn85k4.js";
import { C as CompoAttributesViewer, L as Label, R as Radio } from "../chunks/CompoAttributesViewer.HsPJjrMu.js";
import { H as HighlightCompo } from "../chunks/HighlightCompo.D1kgIYBY.js";
import { C as CodeWrapper } from "../chunks/CodeWrapper.CdoIAYb8.js";
import { H as H1 } from "../chunks/H1.DunGd_Oq.js";
import { H as H2 } from "../chunks/H2.qsp5CBkK.js";
var root$7 = template(`<div><div></div> <div></div> <div></div> <div></div> <div></div> <div><!></div></div>`);
function Android($$anchor, $$props) {
  push($$props, true);
  let restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "divClass",
    "div2Class",
    "div3Class",
    "div4Class",
    "div5Class",
    "div6Class",
    "div7Class"
  ]);
  const {
    div,
    slot,
    top,
    leftTop,
    leftMid,
    leftBot,
    right
  } = android();
  var div_1 = root$7();
  let attributes;
  var div_2 = child(div_1);
  const class_derived = derived(() => top({ class: $$props.div2Class }));
  var div_3 = sibling(div_2, 2);
  const class_derived_1 = derived(() => leftTop({ class: $$props.div3Class }));
  var div_4 = sibling(div_3, 2);
  const class_derived_2 = derived(() => leftMid({ class: $$props.div4Class }));
  var div_5 = sibling(div_4, 2);
  const class_derived_3 = derived(() => leftBot({ class: $$props.div5Class }));
  var div_6 = sibling(div_5, 2);
  const class_derived_4 = derived(() => right({ class: $$props.div6Class }));
  var div_7 = sibling(div_6, 2);
  const class_derived_5 = derived(() => slot({ class: $$props.div7Class }));
  var node = child(div_7);
  if_block(node, () => $$props.children, ($$anchor2) => {
    var fragment = comment();
    var node_1 = first_child(fragment);
    snippet(node_1, () => $$props.children);
    append($$anchor2, fragment);
  });
  reset(div_7);
  reset(div_1);
  template_effect(() => {
    attributes = set_attributes(div_1, attributes, {
      ...restProps,
      class: div({ class: $$props.divClass })
    });
    set_class(div_2, get(class_derived));
    set_class(div_3, get(class_derived_1));
    set_class(div_4, get(class_derived_2));
    set_class(div_5, get(class_derived_3));
    set_class(div_6, get(class_derived_4));
    set_class(div_7, get(class_derived_5));
  });
  append($$anchor, div_1);
  pop();
}
var root$6 = template(`<div><div></div> <div></div> <div></div> <div></div> <div><!></div></div>`);
function DefaultMockup($$anchor, $$props) {
  push($$props, true);
  let restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "divClass",
    "div2Class",
    "div3Class",
    "div4Class",
    "div5Class",
    "div6Class"
  ]);
  const { div, slot, top, leftTop, leftBot, right } = defaultMockup();
  var div_1 = root$6();
  let attributes;
  var div_2 = child(div_1);
  const class_derived = derived(() => top({ class: $$props.div2Class }));
  var div_3 = sibling(div_2, 2);
  const class_derived_1 = derived(() => leftTop({ class: $$props.div3Class }));
  var div_4 = sibling(div_3, 2);
  const class_derived_2 = derived(() => leftBot({ class: $$props.div4Class }));
  var div_5 = sibling(div_4, 2);
  const class_derived_3 = derived(() => right({ class: $$props.div5Class }));
  var div_6 = sibling(div_5, 2);
  const class_derived_4 = derived(() => slot({ class: $$props.div6Class }));
  var node = child(div_6);
  if_block(node, () => $$props.children, ($$anchor2) => {
    var fragment = comment();
    var node_1 = first_child(fragment);
    snippet(node_1, () => $$props.children);
    append($$anchor2, fragment);
  });
  reset(div_6);
  reset(div_1);
  template_effect(() => {
    attributes = set_attributes(div_1, attributes, {
      ...restProps,
      class: div({ class: $$props.divClass })
    });
    set_class(div_2, get(class_derived));
    set_class(div_3, get(class_derived_1));
    set_class(div_4, get(class_derived_2));
    set_class(div_5, get(class_derived_3));
    set_class(div_6, get(class_derived_4));
  });
  append($$anchor, div_1);
  pop();
}
var root$5 = template(`<div><div><!></div></div> <div></div> <div></div>`, 1);
function Desktop($$anchor, $$props) {
  push($$props, true);
  let restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "divClass",
    "div2Class",
    "div3Class",
    "div4Class"
  ]);
  const { div, inner, bot, botUnder } = desktop();
  var fragment = root$5();
  var div_1 = first_child(fragment);
  let attributes;
  var div_2 = child(div_1);
  const class_derived = derived(() => inner({ class: $$props.div2Class }));
  var node = child(div_2);
  if_block(node, () => $$props.children, ($$anchor2) => {
    var fragment_1 = comment();
    var node_1 = first_child(fragment_1);
    snippet(node_1, () => $$props.children);
    append($$anchor2, fragment_1);
  });
  reset(div_2);
  reset(div_1);
  var div_3 = sibling(div_1, 2);
  const class_derived_1 = derived(() => bot({ class: $$props.div3Class }));
  var div_4 = sibling(div_3, 2);
  const class_derived_2 = derived(() => botUnder({ class: $$props.div4Class }));
  template_effect(() => {
    attributes = set_attributes(div_1, attributes, {
      ...restProps,
      class: div({ class: $$props.divClass })
    });
    set_class(div_2, get(class_derived));
    set_class(div_3, get(class_derived_1));
    set_class(div_4, get(class_derived_2));
  });
  append($$anchor, fragment);
  pop();
}
var root$4 = template(`<div><div></div> <div></div> <div></div> <div></div> <div><!></div></div>`);
function Ios($$anchor, $$props) {
  push($$props, true);
  let restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "divClass",
    "div2Class",
    "div3Class",
    "div4Class",
    "div5Class",
    "div6Class"
  ]);
  const { div, slot, top, leftTop, leftBot, right } = ios();
  var div_1 = root$4();
  let attributes;
  var div_2 = child(div_1);
  const class_derived = derived(() => top({ class: $$props.div2Class }));
  var div_3 = sibling(div_2, 2);
  const class_derived_1 = derived(() => leftTop({ class: $$props.div3Class }));
  var div_4 = sibling(div_3, 2);
  const class_derived_2 = derived(() => leftBot({ class: $$props.div4Class }));
  var div_5 = sibling(div_4, 2);
  const class_derived_3 = derived(() => right({ class: $$props.div5Class }));
  var div_6 = sibling(div_5, 2);
  const class_derived_4 = derived(() => slot({ class: $$props.div6Class }));
  var node = child(div_6);
  if_block(node, () => $$props.children, ($$anchor2) => {
    var fragment = comment();
    var node_1 = first_child(fragment);
    snippet(node_1, () => $$props.children);
    append($$anchor2, fragment);
  });
  reset(div_6);
  reset(div_1);
  template_effect(() => {
    attributes = set_attributes(div_1, attributes, {
      ...restProps,
      class: div({ class: $$props.divClass })
    });
    set_class(div_2, get(class_derived));
    set_class(div_3, get(class_derived_1));
    set_class(div_4, get(class_derived_2));
    set_class(div_5, get(class_derived_3));
    set_class(div_6, get(class_derived_4));
  });
  append($$anchor, div_1);
  pop();
}
var root$3 = template(`<div><div><div><!></div></div> <div><div></div></div></div>`);
function Laptop($$anchor, $$props) {
  push($$props, true);
  let restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "divClass",
    "div2Class",
    "div3Class",
    "div4Class"
  ]);
  const { div, inner, bot, botCen } = laptop();
  var div_1 = root$3();
  let attributes;
  var div_2 = child(div_1);
  const class_derived = derived(() => div({ class: $$props.divClass }));
  var div_3 = child(div_2);
  const class_derived_1 = derived(() => inner({ class: $$props.div2Class }));
  var node = child(div_3);
  if_block(node, () => $$props.children, ($$anchor2) => {
    var fragment = comment();
    var node_1 = first_child(fragment);
    snippet(node_1, () => $$props.children);
    append($$anchor2, fragment);
  });
  reset(div_3);
  reset(div_2);
  var div_4 = sibling(div_2, 2);
  const class_derived_2 = derived(() => bot({ class: $$props.div3Class }));
  var div_5 = child(div_4);
  const class_derived_3 = derived(() => botCen({ class: $$props.div4Class }));
  reset(div_4);
  reset(div_1);
  template_effect(() => {
    attributes = set_attributes(div_1, attributes, { ...restProps });
    set_class(div_2, get(class_derived));
    set_class(div_3, get(class_derived_1));
    set_class(div_4, get(class_derived_2));
    set_class(div_5, get(class_derived_3));
  });
  append($$anchor, div_1);
  pop();
}
var root$2 = template(`<div><div></div> <div><div></div> <div></div> <div><!></div></div> <div></div></div>`);
function Smartwatch($$anchor, $$props) {
  push($$props, true);
  let restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "divClass",
    "div2Class",
    "div3Class",
    "div4Class",
    "div5Class",
    "div6Class"
  ]);
  const { div, top, rightTop, rightBot, bot, slot } = smartwatch();
  var div_1 = root$2();
  let attributes;
  var div_2 = child(div_1);
  const class_derived = derived(() => div({ class: $$props.divClass }));
  var div_3 = sibling(div_2, 2);
  const class_derived_1 = derived(() => top({ class: $$props.div2Class }));
  var div_4 = child(div_3);
  const class_derived_2 = derived(() => rightTop({ class: $$props.div3Class }));
  var div_5 = sibling(div_4, 2);
  const class_derived_3 = derived(() => rightBot({ class: $$props.div4Class }));
  var div_6 = sibling(div_5, 2);
  const class_derived_4 = derived(() => slot({ class: $$props.div5Class }));
  var node = child(div_6);
  if_block(node, () => $$props.children, ($$anchor2) => {
    var fragment = comment();
    var node_1 = first_child(fragment);
    snippet(node_1, () => $$props.children);
    append($$anchor2, fragment);
  });
  reset(div_6);
  reset(div_3);
  var div_7 = sibling(div_3, 2);
  const class_derived_5 = derived(() => bot({ class: $$props.div6Class }));
  reset(div_1);
  template_effect(() => {
    attributes = set_attributes(div_1, attributes, { ...restProps });
    set_class(div_2, get(class_derived));
    set_class(div_3, get(class_derived_1));
    set_class(div_4, get(class_derived_2));
    set_class(div_5, get(class_derived_3));
    set_class(div_6, get(class_derived_4));
    set_class(div_7, get(class_derived_5));
  });
  append($$anchor, div_1);
  pop();
}
var root$1 = template(`<div><div></div> <div></div> <div></div> <div></div> <div><!></div></div>`);
function Tablet($$anchor, $$props) {
  push($$props, true);
  let restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "divClass",
    "div2Class",
    "div3Class",
    "div4Class",
    "div5Class",
    "div6Class"
  ]);
  const {
    div,
    leftTop,
    leftMid,
    leftBot,
    right,
    slot
  } = tablet();
  var div_1 = root$1();
  let attributes;
  var div_2 = child(div_1);
  const class_derived = derived(() => leftTop({ class: $$props.div2Class }));
  var div_3 = sibling(div_2, 2);
  const class_derived_1 = derived(() => leftMid({ class: $$props.div3Class }));
  var div_4 = sibling(div_3, 2);
  const class_derived_2 = derived(() => leftBot({ class: $$props.div4Class }));
  var div_5 = sibling(div_4, 2);
  const class_derived_3 = derived(() => right({ class: $$props.div5Class }));
  var div_6 = sibling(div_5, 2);
  const class_derived_4 = derived(() => slot({ class: $$props.div6Class }));
  var node = child(div_6);
  if_block(node, () => $$props.children, ($$anchor2) => {
    var fragment = comment();
    var node_1 = first_child(fragment);
    snippet(node_1, () => $$props.children);
    append($$anchor2, fragment);
  });
  reset(div_6);
  reset(div_1);
  template_effect(() => {
    attributes = set_attributes(div_1, attributes, {
      ...restProps,
      class: div({ class: $$props.divClass })
    });
    set_class(div_2, get(class_derived));
    set_class(div_3, get(class_derived_1));
    set_class(div_4, get(class_derived_2));
    set_class(div_5, get(class_derived_3));
    set_class(div_6, get(class_derived_4));
  });
  append($$anchor, div_1);
  pop();
}
function DeviceMockup($$anchor, $$props) {
  push($$props, true);
  let device = prop($$props, "device", 3, "default");
  const componets = {
    android: Android,
    ios: Ios,
    tablet: Tablet,
    default: DefaultMockup,
    smartwatch: Smartwatch,
    laptop: Laptop,
    desktop: Desktop
  };
  let DeviceComponent = derived(() => componets[device()]);
  var fragment = comment();
  var node = first_child(fragment);
  component(node, () => get(DeviceComponent), ($$anchor2, $$component) => {
    $$component($$anchor2, {
      children: ($$anchor3, $$slotProps) => {
        var fragment_1 = comment();
        var node_1 = first_child(fragment_1);
        snippet(node_1, () => $$props.children);
        append($$anchor3, fragment_1);
      },
      $$slots: { default: true }
    });
  });
  append($$anchor, fragment);
  pop();
}
const __vite_glob_0_0 = '<script>\n  import { DeviceMockup } from "svelte-5-ui-lib";\n<\/script>\n';
var root_9 = template(`<img> <img>`, 1);
var root_5 = template(`<div class="mb-8 flex flex-wrap space-x-2"><!> <!></div> <!>`, 1);
var root = template(`<!> <!> <!> <!> <!> <!> <!>`, 1);
function _page($$anchor, $$props) {
  push($$props, true);
  const dirName = "device-mockup";
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/Setup.svelte": __vite_glob_0_0
  });
  const devices = [
    {
      name: "Default",
      device: "default",
      lightimage: {
        src: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png",
        class: "dark:hidden w-[272px] h-[572px]",
        alt: "default example 1"
      },
      darkimage: {
        src: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png",
        class: "hidden dark:block w-[272px] h-[572px]",
        alt: "default example 2"
      }
    },
    {
      name: "Ios",
      device: "ios",
      lightimage: {
        src: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-light.png",
        class: "dark:hidden w-[272px] h-[572px]",
        alt: "ios example 1"
      },
      darkimage: {
        src: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-dark.png",
        class: "hidden dark:block w-[272px] h-[572px]",
        alt: "ios example 2"
      }
    },
    {
      name: "Android",
      device: "android",
      lightimage: {
        src: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png",
        class: "dark:hidden w-[272px] h-[572px]",
        alt: "android example 1"
      },
      darkimage: {
        src: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png",
        class: "hidden dark:block w-[272px] h-[572px]",
        alt: "android example 2"
      }
    },
    {
      name: "Tablet",
      device: "tablet",
      lightimage: {
        src: "https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image.png",
        class: "dark:hidden h-[426px] md:h-[654px]",
        alt: "tablet example 1"
      },
      darkimage: {
        src: "https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image-dark.png",
        class: "hidden dark:block h-[426px] md:h-[654px]",
        alt: "tablet example 2"
      }
    },
    {
      name: "Laptop",
      device: "laptop",
      lightimage: {
        src: "https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen.png",
        class: "dark:hidden h-[156px] md:h-[278px] w-full rounded-xl",
        alt: "laptop example 1"
      },
      darkimage: {
        src: "https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen-dark.png",
        class: "hidden dark:block h-[156px] md:h-[278px] w-full rounded-lg",
        alt: "laptop example 2"
      }
    },
    {
      name: "Desktop",
      device: "desktop",
      lightimage: {
        src: "https://flowbite.s3.amazonaws.com/docs/device-mockups/screen-image-imac.png",
        class: "dark:hidden h-[140px] md:h-[262px] w-full rounded-xl",
        alt: "desktop example 1"
      },
      darkimage: {
        src: "https://flowbite.s3.amazonaws.com/docs/device-mockups/screen-image-imac-dark.png",
        class: "hidden dark:block h-[140px] md:h-[262px] w-full rounded-xl",
        alt: "desktop example 2"
      }
    },
    {
      name: "Smartwatch",
      device: "smartwatch",
      lightimage: {
        src: "https://flowbite.s3.amazonaws.com/docs/device-mockups/watch-screen-image.png",
        class: "dark:hidden h-[193px] w-[188px",
        alt: "smartwatch example 1"
      },
      darkimage: {
        src: "https://flowbite.s3.amazonaws.com/docs/device-mockups/watch-screen-image-dark.png",
        class: "hidden dark:block h-[193px] w-[188px]",
        alt: "smartwatch example 2"
      }
    }
  ];
  const deviceNames = devices.map((device) => device.name);
  let selectedDevice = state("Default");
  let currentDevice = derived(() => devices.find((d) => d.name === get(selectedDevice)) || devices[0]);
  let generatedCode = derived(() => (() => {
    let props = [];
    if (get(currentDevice).device !== "default") props.push(` device="${get(currentDevice).device}"`);
    return `<DeviceMockup${props.join("")}>
  <img src="${get(currentDevice).lightimage.src}" class="${get(currentDevice).lightimage.class}" alt="${get(currentDevice).lightimage.alt}" />
  <img src="${get(currentDevice).darkimage.src}" class="${get(currentDevice).darkimage.class}" alt="${get(currentDevice).darkimage.alt}" />
</DeviceMockup>`;
  })());
  var fragment = root();
  var node = first_child(fragment);
  H1(node, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text("Device mockup");
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
      var text_2 = text("Interactive Device Mockup Builder");
      append($$anchor2, text_2);
    },
    $$slots: { default: true }
  });
  var node_4 = sibling(node_3, 2);
  {
    const codeblock = ($$anchor2) => {
      HighlightCompo($$anchor2, {
        get code() {
          return get(generatedCode);
        }
      });
    };
    CodeWrapper(node_4, {
      innerClass: "overflow-auto",
      codeblock,
      children: ($$anchor2, $$slotProps) => {
        var fragment_2 = root_5();
        var div = first_child(fragment_2);
        var node_5 = child(div);
        Label(node_5, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_3 = text("Device");
            append($$anchor3, text_3);
          },
          $$slots: { default: true }
        });
        var node_6 = sibling(node_5, 2);
        each(node_6, 17, () => deviceNames, index, ($$anchor3, device) => {
          Radio($$anchor3, {
            labelClass: "w-24 my-1",
            name: "alert_reactive",
            get group() {
              return get(selectedDevice);
            },
            set group($$value) {
              set(selectedDevice, proxy($$value));
            },
            get value() {
              return get(device);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_4 = text();
              template_effect(() => set_text(text_4, get(device)));
              append($$anchor4, text_4);
            },
            $$slots: { default: true }
          });
        });
        reset(div);
        var node_7 = sibling(div, 2);
        DeviceMockup(node_7, {
          get device() {
            return get(currentDevice).device;
          },
          children: ($$anchor3, $$slotProps2) => {
            var fragment_5 = root_9();
            var img = first_child(fragment_5);
            var img_1 = sibling(img, 2);
            template_effect(() => {
              set_attribute(img, "src", get(currentDevice).lightimage.src);
              set_class(img, get(currentDevice).lightimage.class);
              set_attribute(img, "alt", get(currentDevice).lightimage.alt);
              set_attribute(img_1, "src", get(currentDevice).darkimage.src);
              set_class(img_1, get(currentDevice).darkimage.class);
              set_attribute(img_1, "alt", get(currentDevice).darkimage.alt);
            });
            append($$anchor3, fragment_5);
          },
          $$slots: { default: true }
        });
        append($$anchor2, fragment_2);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_8 = sibling(node_4, 2);
  H2(node_8, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_5 = text("Component data");
      append($$anchor2, text_5);
    },
    $$slots: { default: true }
  });
  var node_9 = sibling(node_8, 2);
  CompoAttributesViewer(node_9, { dirName });
  append($$anchor, fragment);
  pop();
}
export {
  _page as component
};
