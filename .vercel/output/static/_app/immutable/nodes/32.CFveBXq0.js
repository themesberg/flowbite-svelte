import { a as append, t as template, b as text } from "../chunks/disclose-version.0TX42Q8e.js";
import { p as push, t as template_effect, a as pop, c as child, r as reset, s as sibling, n as next, b as get, d as derived, f as first_child, a7 as set, a6 as state } from "../chunks/runtime.BkfDdwap.js";
import { a as set_text } from "../chunks/store.B2xZ3Ft6.js";
import { e as each, i as index } from "../chunks/each.CtHIoDcm.js";
import { p as prop, r as rest_props, b as proxy } from "../chunks/props.B7eOu8hW.js";
import { a as set_attributes, b as set_class, c as set_svg_class, aq as cardPlaceholder, ar as listPlaceholder, as as testimonialPlaceholder, at as videoPlaceholder, au as widgetPlaceholder, K as skeleton, J as imagePlaceholder } from "../chunks/theme.BtjZjf2R.js";
import { B as Button } from "../chunks/markdown.Ba9FtS5g.js";
import { S as Skeleton, I as ImagePlaceholder } from "../chunks/Skeleton.DR3Y1iyj.js";
import { T as TextPlaceholder } from "../chunks/TextPlaceholder.CtZFdosa.js";
import { C as CompoAttributesViewer, L as Label, R as Radio } from "../chunks/CompoAttributesViewer.HsPJjrMu.js";
import { H as HighlightCompo } from "../chunks/HighlightCompo.D1kgIYBY.js";
import { C as CodeWrapper } from "../chunks/CodeWrapper.CdoIAYb8.js";
import { H as H1 } from "../chunks/H1.DunGd_Oq.js";
import { H as H2 } from "../chunks/H2.qsp5CBkK.js";
var root$5 = template(`<div><div><svg width="48" height="48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"></path></svg></div> <div></div> <div></div> <div></div> <div></div> <div><svg aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg> <div></div> <div></div></div> <span class="sr-only">Loading...</span></div>`);
function CardPlaceholder($$anchor, $$props) {
  push($$props, true);
  let size = prop($$props, "size", 3, "sm"), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "size",
    "class"
  ]);
  const $$d = derived(() => cardPlaceholder({ size: size() })), base = derived(() => get($$d).base), imageArea = derived(() => get($$d).imageArea), imageIcon = derived(() => get($$d).imageIcon), line = derived(() => get($$d).line), footerArea = derived(() => get($$d).footerArea);
  var div = root$5();
  let attributes;
  var div_1 = child(div);
  const class_derived = derived(() => get(imageArea)());
  var svg = child(div_1);
  const class_derived_1 = derived(() => get(imageIcon)());
  reset(div_1);
  var div_2 = sibling(div_1, 2);
  const class_derived_2 = derived(() => get(line)({ class: "mb-4 h-2.5 w-1/2" }));
  var div_3 = sibling(div_2, 2);
  const class_derived_3 = derived(() => get(line)({ class: "mb-2.5 h-2" }));
  var div_4 = sibling(div_3, 2);
  const class_derived_4 = derived(() => get(line)({ class: "mb-2.5 h-2" }));
  var div_5 = sibling(div_4, 2);
  const class_derived_5 = derived(() => get(line)({ class: "h-2" }));
  var div_6 = sibling(div_5, 2);
  const class_derived_6 = derived(() => get(footerArea)());
  var svg_1 = child(div_6);
  const class_derived_7 = derived(() => get(line)({ class: "h-14 w-14" }));
  var div_7 = sibling(svg_1, 2);
  const class_derived_8 = derived(() => get(line)({ class: "mb-2 h-2.5 w-32" }));
  var div_8 = sibling(div_7, 2);
  const class_derived_9 = derived(() => get(line)({ class: "mb-2 h-2 w-32" }));
  reset(div_6);
  next(2);
  reset(div);
  template_effect(() => {
    attributes = set_attributes(div, attributes, {
      role: "status",
      ...restProps,
      class: get(base)({ className: $$props.class })
    });
    set_class(div_1, get(class_derived));
    set_svg_class(svg, get(class_derived_1));
    set_class(div_2, get(class_derived_2));
    set_class(div_3, get(class_derived_3));
    set_class(div_4, get(class_derived_4));
    set_class(div_5, get(class_derived_5));
    set_class(div_6, get(class_derived_6));
    set_svg_class(svg_1, get(class_derived_7));
    set_class(div_7, get(class_derived_8));
    set_class(div_8, get(class_derived_9));
  });
  append($$anchor, div);
  pop();
}
var root_1 = template(`<div><div><div></div> <div></div></div> <div></div></div>`);
var root$4 = template(`<div><!> <span class="sr-only">Loading...</span></div>`);
function ListPlaceholder($$anchor, $$props) {
  push($$props, true);
  let itemNumber = prop($$props, "itemNumber", 3, 5), size = prop($$props, "size", 3, "md"), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "itemNumber",
    "size",
    "rounded",
    "class"
  ]);
  const $$d = derived(() => listPlaceholder({ size: size(), rounded: $$props.rounded })), base = derived(() => get($$d).base), item = derived(() => get($$d).item), itemContent = derived(() => get($$d).itemContent), itemTitle = derived(() => get($$d).itemTitle), itemSubtitle = derived(() => get($$d).itemSubtitle), itemExtra = derived(() => get($$d).itemExtra);
  let items = derived(() => [...Array(itemNumber()).keys()]);
  var div = root$4();
  let attributes;
  var node = child(div);
  each(node, 17, () => get(items), index, ($$anchor2, _, i) => {
    var div_1 = root_1();
    const class_derived = derived(() => get(item)({ class: i > 0 ? "pt-4" : "" }));
    var div_2 = child(div_1);
    const class_derived_1 = derived(() => get(itemContent)());
    var div_3 = child(div_2);
    const class_derived_2 = derived(() => get(itemTitle)());
    var div_4 = sibling(div_3, 2);
    const class_derived_3 = derived(() => get(itemSubtitle)());
    reset(div_2);
    var div_5 = sibling(div_2, 2);
    const class_derived_4 = derived(() => get(itemExtra)());
    reset(div_1);
    template_effect(() => {
      set_class(div_1, get(class_derived));
      set_class(div_2, get(class_derived_1));
      set_class(div_3, get(class_derived_2));
      set_class(div_4, get(class_derived_3));
      set_class(div_5, get(class_derived_4));
    });
    append($$anchor2, div_1);
  });
  next(2);
  reset(div);
  template_effect(() => attributes = set_attributes(div, attributes, {
    role: "status",
    ...restProps,
    class: get(base)({ className: $$props.class })
  }));
  append($$anchor, div);
  pop();
}
var root$3 = template(`<div><div></div> <div></div> <div><svg aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg> <div></div> <div></div></div> <span class="sr-only">Loading...</span></div>`);
function TestimonialPlaceholder($$anchor, $$props) {
  push($$props, true);
  let restProps = rest_props($$props, ["$$slots", "$$events", "$$legacy", "class"]);
  const { wrapper, line1, line2, svg, subContent } = testimonialPlaceholder();
  var div = root$3();
  let attributes;
  var div_1 = child(div);
  const class_derived = derived(() => line2({ class: "mx-auto mb-2.5 h-2.5 max-w-[640px]" }));
  var div_2 = sibling(div_1, 2);
  const class_derived_1 = derived(() => line2({ class: "mx-auto h-2.5 max-w-[540px]" }));
  var div_3 = sibling(div_2, 2);
  const class_derived_2 = derived(subContent);
  var svg_1 = child(div_3);
  const class_derived_3 = derived(svg);
  var div_4 = sibling(svg_1, 2);
  const class_derived_4 = derived(() => line1({ class: "me-3 h-2.5 w-20" }));
  var div_5 = sibling(div_4, 2);
  const class_derived_5 = derived(() => line1({ class: "h-2 w-24" }));
  reset(div_3);
  next(2);
  reset(div);
  template_effect(() => {
    attributes = set_attributes(div, attributes, {
      role: "status",
      ...restProps,
      class: wrapper({ className: $$props.class })
    });
    set_class(div_1, get(class_derived));
    set_class(div_2, get(class_derived_1));
    set_class(div_3, get(class_derived_2));
    set_svg_class(svg_1, get(class_derived_3));
    set_class(div_4, get(class_derived_4));
    set_class(div_5, get(class_derived_5));
  });
  append($$anchor, div);
  pop();
}
var root$2 = template(`<div role="status"><svg width="48" height="48" class="text-gray-200 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 384 512"><path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z"></path></svg> <span class="sr-only">Loading...</span></div>`);
function VideoPlaceholder($$anchor, $$props) {
  push($$props, true);
  let size = prop($$props, "size", 3, "sm");
  const base = derived(() => videoPlaceholder({ size: size(), className: $$props.class }));
  var div = root$2();
  template_effect(() => set_class(div, get(base)));
  append($$anchor, div);
  pop();
}
var root$1 = template(`<div role="status"><div></div> <div></div> <div><div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div></div> <span class="sr-only">Loading...</span></div>`);
function WidgetPlaceholder($$anchor, $$props) {
  push($$props, true);
  const { base, wrapper, vLine, hLine } = widgetPlaceholder({});
  var div = root$1();
  const class_derived = derived(() => base({ className: $$props.class }));
  var div_1 = child(div);
  const class_derived_1 = derived(() => hLine({ class: "mb-2.5 h-2.5 w-32" }));
  var div_2 = sibling(div_1, 2);
  const class_derived_2 = derived(() => hLine({ class: "mb-10 h-2 w-48" }));
  var div_3 = sibling(div_2, 2);
  const class_derived_3 = derived(wrapper);
  var div_4 = child(div_3);
  const class_derived_4 = derived(() => vLine({ class: "h-72" }));
  var div_5 = sibling(div_4, 2);
  const class_derived_5 = derived(() => vLine({ class: "h-56" }));
  var div_6 = sibling(div_5, 2);
  const class_derived_6 = derived(() => vLine({ class: "h-72" }));
  var div_7 = sibling(div_6, 2);
  const class_derived_7 = derived(() => vLine({ class: "h-64" }));
  var div_8 = sibling(div_7, 2);
  const class_derived_8 = derived(() => vLine({ class: "h-80" }));
  var div_9 = sibling(div_8, 2);
  const class_derived_9 = derived(() => vLine({ class: "h-72" }));
  var div_10 = sibling(div_9, 2);
  const class_derived_10 = derived(() => vLine({ class: "h-80" }));
  reset(div_3);
  next(2);
  reset(div);
  template_effect(() => {
    set_class(div, get(class_derived));
    set_class(div_1, get(class_derived_1));
    set_class(div_2, get(class_derived_2));
    set_class(div_3, get(class_derived_3));
    set_class(div_4, get(class_derived_4));
    set_class(div_5, get(class_derived_5));
    set_class(div_6, get(class_derived_6));
    set_class(div_7, get(class_derived_7));
    set_class(div_8, get(class_derived_8));
    set_class(div_9, get(class_derived_9));
    set_class(div_10, get(class_derived_10));
  });
  append($$anchor, div);
  pop();
}
const __vite_glob_0_0 = '<script>\n  import { Skeleton, CardPlaceholder, ImagePlaceholder, VideoPlaceholder, TextPlaceholder, WidgetPlaceholder, ListPlaceholder, TestimonialPlaceholder } from "svelte-5-ui-lib";\n<\/script>\n';
var root_5 = template(`<div class="md:h-40"><!></div> <div class="my-4 flex flex-wrap space-x-4"><!> <!></div> <!>`, 1);
var root_12 = template(`<div class="md:h-64"><!></div> <div class="my-4 flex flex-wrap space-x-4"><!> <!></div> <div class="mb-4 flex flex-wrap space-x-4"><!> <!></div> <!>`, 1);
var root_22 = template(`<div class="md:h-64"><!></div> <div class="my-4 flex flex-wrap space-x-4"><!> <!></div> <!>`, 1);
var root_29 = template(`<!> <div class="my-4 flex flex-wrap space-x-4"><!> <!></div> <!>`, 1);
var root_36 = template(`<!> <div class="my-4 flex flex-wrap space-x-4"><!> <!></div> <!>`, 1);
var root_43 = template(`<!> <!>`, 1);
var root_47 = template(`<div class="md:h-[500px]"><!></div> <div class="my-4 flex flex-wrap space-x-4"><!> <!></div> <div class="mb-4 flex flex-wrap space-x-4"><!> <!></div> <div class="mb-4 flex flex-wrap space-x-4"><!> <!></div> <!>`, 1);
var root_60 = template(`<!> <!>`, 1);
var root = template(`<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>`, 1);
function _page($$anchor, $$props) {
  push($$props, true);
  const dirName = "skeleton";
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/Setup.svelte": __vite_glob_0_0
  });
  const skeletonSizes = Object.keys(skeleton.variants.size);
  let skeletonSize = state("sm");
  const imageSizes = Object.keys(imagePlaceholder.variants.size);
  let imagePlaceholderSize = state("md");
  let imagePlaceholderRounded = state("none");
  const videoSizes = skeletonSizes;
  let videoPlaceholderSize = state("sm");
  const imageRoundedSizes = Object.keys(imagePlaceholder.variants.rounded);
  const textSizes = skeletonSizes;
  let textPlaceholderSize = state("sm");
  const cardSizes = skeletonSizes;
  let cardPlaceholderSize = state("sm");
  const listSizes = imageSizes;
  const listRoundedSizes = imageRoundedSizes;
  const listItemNumbers = [1, 2, 3, 4, 5];
  let listPlaceholderSize = state("md");
  let listPlaceholderRounded = state("none");
  let listPlaceholderItemNumber = state(5);
  let skeletonClass = state("");
  let imagePlaceholderClass = state("");
  let videoPlaceholderClass = state("");
  let textPlaceholderClass = state("");
  let cardPlaceholderClass = state("");
  let widgetPlaceholderClass = state("");
  let listPlaceholderClass = state("");
  let TestimonialPlaceholderClass = state("");
  const generatePlaceholderCode = (componentName, size, classes) => {
    let props = [];
    if (componentName === "Skeleton" && size !== "sm") props.push(` size="${size}"`);
    if (componentName === "ImagePlaceholder" && size !== "md") props.push(` size="${size}"`);
    if (componentName === "VideoPlaceholder" && size !== "sm") props.push(` size="${size}"`);
    if (componentName === "TextPlaceholder" && size !== "sm") props.push(` size="${size}"`);
    if (componentName === "CardPlaceholder" && size !== "sm") props.push(` size="${size}"`);
    if (componentName === "ListPlaceholder" && size !== "md") props.push(` size="${size}"`);
    if (classes !== "") props.push(` class="${classes}"`);
    if (componentName === "ImagePlaceholder" && get(imagePlaceholderRounded) !== "none") props.push(` rounded="${get(imagePlaceholderRounded)}"`);
    if (componentName === "ListPlaceholder" && get(listPlaceholderItemNumber) !== 5) props.push(` itemNumber={${get(listPlaceholderItemNumber)}}`);
    if (componentName === "ListPlaceholder" && get(listPlaceholderRounded) !== "none") props.push(` rounded="${get(listPlaceholderRounded)}"`);
    return `<${componentName}${props.join("")} />`;
  };
  let generatedCodeSkeleton = derived(() => generatePlaceholderCode("Skeleton", get(skeletonSize), get(skeletonClass)));
  let generatedCodeVideo = derived(() => generatePlaceholderCode("VideoPlaceholder", get(videoPlaceholderSize), get(videoPlaceholderClass)));
  let generatedCodeText = derived(() => generatePlaceholderCode("TextPlaceholder", get(textPlaceholderSize), get(textPlaceholderClass)));
  let generatedCodeCard = derived(() => generatePlaceholderCode("CardPlaceholder", get(cardPlaceholderSize), get(cardPlaceholderClass)));
  let generatedCodeImage = derived(() => generatePlaceholderCode("ImagePlaceholder", get(imagePlaceholderSize), get(imagePlaceholderClass)));
  let generatedCodeWidget = derived(() => generatePlaceholderCode("WidgetPlaceholder", "md", get(widgetPlaceholderClass)));
  let generatedCodeList = derived(() => generatePlaceholderCode("ListPlaceholder", get(listPlaceholderSize), get(listPlaceholderClass)));
  let generatedCodeTestimonial = derived(() => generatePlaceholderCode("TestimonialPlaceholder", "md", get(TestimonialPlaceholderClass)));
  var fragment = root();
  var node = first_child(fragment);
  H1(node, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text("Skeleton");
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
      var text_2 = text("Default skeleton");
      append($$anchor2, text_2);
    },
    $$slots: { default: true }
  });
  var node_4 = sibling(node_3, 2);
  {
    const codeblock = ($$anchor2) => {
      HighlightCompo($$anchor2, {
        get code() {
          return get(generatedCodeSkeleton);
        }
      });
    };
    CodeWrapper(node_4, {
      codeblock,
      children: ($$anchor2, $$slotProps) => {
        var fragment_2 = root_5();
        var div = first_child(fragment_2);
        var node_5 = child(div);
        Skeleton(node_5, {
          get size() {
            return get(skeletonSize);
          },
          get class() {
            return get(skeletonClass);
          }
        });
        reset(div);
        var div_1 = sibling(div, 2);
        var node_6 = child(div_1);
        Label(node_6, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_3 = text("Size(width)");
            append($$anchor3, text_3);
          },
          $$slots: { default: true }
        });
        var node_7 = sibling(node_6, 2);
        each(node_7, 17, () => skeletonSizes, index, ($$anchor3, size) => {
          Radio($$anchor3, {
            labelClass: "w-12 my-1",
            name: "skeletonsize",
            get group() {
              return get(skeletonSize);
            },
            set group($$value) {
              set(skeletonSize, proxy($$value));
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
        var node_8 = sibling(div_1, 2);
        Button(node_8, {
          class: "w-36",
          onclick: () => get(skeletonClass) === "" ? set(skeletonClass, "ml-4") : set(skeletonClass, ""),
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_5 = text();
            template_effect(() => set_text(text_5, get(skeletonClass) ? "Remove class" : "Add class"));
            append($$anchor3, text_5);
          },
          $$slots: { default: true }
        });
        append($$anchor2, fragment_2);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_9 = sibling(node_4, 2);
  H2(node_9, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_6 = text("Image placeholder");
      append($$anchor2, text_6);
    },
    $$slots: { default: true }
  });
  var node_10 = sibling(node_9, 2);
  {
    const codeblock = ($$anchor2) => {
      HighlightCompo($$anchor2, {
        get code() {
          return get(generatedCodeImage);
        }
      });
    };
    CodeWrapper(node_10, {
      codeblock,
      children: ($$anchor2, $$slotProps) => {
        var fragment_7 = root_12();
        var div_2 = first_child(fragment_7);
        var node_11 = child(div_2);
        ImagePlaceholder(node_11, {
          get size() {
            return get(imagePlaceholderSize);
          },
          get rounded() {
            return get(imagePlaceholderRounded);
          },
          get class() {
            return get(imagePlaceholderClass);
          }
        });
        reset(div_2);
        var div_3 = sibling(div_2, 2);
        var node_12 = child(div_3);
        Label(node_12, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_7 = text("Size");
            append($$anchor3, text_7);
          },
          $$slots: { default: true }
        });
        var node_13 = sibling(node_12, 2);
        each(node_13, 17, () => imageSizes, index, ($$anchor3, size) => {
          Radio($$anchor3, {
            labelClass: "w-12 my-1",
            name: "imageSize",
            get group() {
              return get(imagePlaceholderSize);
            },
            set group($$value) {
              set(imagePlaceholderSize, proxy($$value));
            },
            get value() {
              return get(size);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_8 = text();
              template_effect(() => set_text(text_8, get(size)));
              append($$anchor4, text_8);
            },
            $$slots: { default: true }
          });
        });
        reset(div_3);
        var div_4 = sibling(div_3, 2);
        var node_14 = child(div_4);
        Label(node_14, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_9 = text("Rounded");
            append($$anchor3, text_9);
          },
          $$slots: { default: true }
        });
        var node_15 = sibling(node_14, 2);
        each(node_15, 17, () => imageRoundedSizes, index, ($$anchor3, size) => {
          Radio($$anchor3, {
            labelClass: "w-12 my-1",
            name: "imageRoundedSize",
            get group() {
              return get(imagePlaceholderRounded);
            },
            set group($$value) {
              set(imagePlaceholderRounded, proxy($$value));
            },
            get value() {
              return get(size);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_10 = text();
              template_effect(() => set_text(text_10, get(size)));
              append($$anchor4, text_10);
            },
            $$slots: { default: true }
          });
        });
        reset(div_4);
        var node_16 = sibling(div_4, 2);
        Button(node_16, {
          class: "w-36",
          onclick: () => get(imagePlaceholderClass) === "" ? set(imagePlaceholderClass, "ml-4") : set(imagePlaceholderClass, ""),
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_11 = text();
            template_effect(() => set_text(text_11, get(imagePlaceholderClass) ? "Remove class" : "Add class"));
            append($$anchor3, text_11);
          },
          $$slots: { default: true }
        });
        append($$anchor2, fragment_7);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_17 = sibling(node_10, 2);
  H2(node_17, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_12 = text("Video placeholder");
      append($$anchor2, text_12);
    },
    $$slots: { default: true }
  });
  var node_18 = sibling(node_17, 2);
  {
    const codeblock = ($$anchor2) => {
      HighlightCompo($$anchor2, {
        get code() {
          return get(generatedCodeVideo);
        }
      });
    };
    CodeWrapper(node_18, {
      codeblock,
      children: ($$anchor2, $$slotProps) => {
        var fragment_14 = root_22();
        var div_5 = first_child(fragment_14);
        var node_19 = child(div_5);
        VideoPlaceholder(node_19, {
          get size() {
            return get(videoPlaceholderSize);
          },
          get class() {
            return get(videoPlaceholderClass);
          }
        });
        reset(div_5);
        var div_6 = sibling(div_5, 2);
        var node_20 = child(div_6);
        Label(node_20, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_13 = text("Size(width)");
            append($$anchor3, text_13);
          },
          $$slots: { default: true }
        });
        var node_21 = sibling(node_20, 2);
        each(node_21, 17, () => videoSizes, index, ($$anchor3, size) => {
          Radio($$anchor3, {
            labelClass: "w-12 my-1",
            name: "videoSize",
            get group() {
              return get(videoPlaceholderSize);
            },
            set group($$value) {
              set(videoPlaceholderSize, proxy($$value));
            },
            get value() {
              return get(size);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_14 = text();
              template_effect(() => set_text(text_14, get(size)));
              append($$anchor4, text_14);
            },
            $$slots: { default: true }
          });
        });
        reset(div_6);
        var node_22 = sibling(div_6, 2);
        Button(node_22, {
          class: "w-36",
          onclick: () => get(videoPlaceholderClass) === "" ? set(videoPlaceholderClass, "ml-4") : set(videoPlaceholderClass, ""),
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_15 = text();
            template_effect(() => set_text(text_15, get(videoPlaceholderClass) ? "Remove class" : "Add class"));
            append($$anchor3, text_15);
          },
          $$slots: { default: true }
        });
        append($$anchor2, fragment_14);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_23 = sibling(node_18, 2);
  H2(node_23, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_16 = text("Text placeholder");
      append($$anchor2, text_16);
    },
    $$slots: { default: true }
  });
  var node_24 = sibling(node_23, 2);
  {
    const codeblock = ($$anchor2) => {
      HighlightCompo($$anchor2, {
        get code() {
          return get(generatedCodeText);
        }
      });
    };
    CodeWrapper(node_24, {
      codeblock,
      children: ($$anchor2, $$slotProps) => {
        var fragment_19 = root_29();
        var node_25 = first_child(fragment_19);
        TextPlaceholder(node_25, {
          get size() {
            return get(textPlaceholderSize);
          },
          get class() {
            return get(textPlaceholderClass);
          }
        });
        var div_7 = sibling(node_25, 2);
        var node_26 = child(div_7);
        Label(node_26, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_17 = text("Size(width)");
            append($$anchor3, text_17);
          },
          $$slots: { default: true }
        });
        var node_27 = sibling(node_26, 2);
        each(node_27, 17, () => textSizes, index, ($$anchor3, size) => {
          Radio($$anchor3, {
            labelClass: "w-12 my-1",
            name: "textSize",
            get group() {
              return get(textPlaceholderSize);
            },
            set group($$value) {
              set(textPlaceholderSize, proxy($$value));
            },
            get value() {
              return get(size);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_18 = text();
              template_effect(() => set_text(text_18, get(size)));
              append($$anchor4, text_18);
            },
            $$slots: { default: true }
          });
        });
        reset(div_7);
        var node_28 = sibling(div_7, 2);
        Button(node_28, {
          class: "w-36",
          onclick: () => get(textPlaceholderClass) === "" ? set(textPlaceholderClass, "ml-4") : set(textPlaceholderClass, ""),
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_19 = text();
            template_effect(() => set_text(text_19, get(textPlaceholderClass) ? "Remove class" : "Add class"));
            append($$anchor3, text_19);
          },
          $$slots: { default: true }
        });
        append($$anchor2, fragment_19);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_29 = sibling(node_24, 2);
  H2(node_29, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_20 = text("Card placeholder");
      append($$anchor2, text_20);
    },
    $$slots: { default: true }
  });
  var node_30 = sibling(node_29, 2);
  {
    const codeblock = ($$anchor2) => {
      HighlightCompo($$anchor2, {
        get code() {
          return get(generatedCodeCard);
        }
      });
    };
    CodeWrapper(node_30, {
      codeblock,
      children: ($$anchor2, $$slotProps) => {
        var fragment_24 = root_36();
        var node_31 = first_child(fragment_24);
        CardPlaceholder(node_31, {
          get size() {
            return get(cardPlaceholderSize);
          },
          get class() {
            return get(cardPlaceholderClass);
          }
        });
        var div_8 = sibling(node_31, 2);
        var node_32 = child(div_8);
        Label(node_32, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_21 = text("Size(width)");
            append($$anchor3, text_21);
          },
          $$slots: { default: true }
        });
        var node_33 = sibling(node_32, 2);
        each(node_33, 17, () => cardSizes, index, ($$anchor3, size) => {
          Radio($$anchor3, {
            labelClass: "w-12 my-1",
            name: "cardSize",
            get group() {
              return get(cardPlaceholderSize);
            },
            set group($$value) {
              set(cardPlaceholderSize, proxy($$value));
            },
            get value() {
              return get(size);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_22 = text();
              template_effect(() => set_text(text_22, get(size)));
              append($$anchor4, text_22);
            },
            $$slots: { default: true }
          });
        });
        reset(div_8);
        var node_34 = sibling(div_8, 2);
        Button(node_34, {
          class: "w-36",
          onclick: () => get(cardPlaceholderClass) === "" ? set(cardPlaceholderClass, "ml-4") : set(cardPlaceholderClass, ""),
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_23 = text();
            template_effect(() => set_text(text_23, get(cardPlaceholderClass) ? "Remove class" : "Add class"));
            append($$anchor3, text_23);
          },
          $$slots: { default: true }
        });
        append($$anchor2, fragment_24);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_35 = sibling(node_30, 2);
  H2(node_35, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_24 = text("Widget placeholder");
      append($$anchor2, text_24);
    },
    $$slots: { default: true }
  });
  var node_36 = sibling(node_35, 2);
  {
    const codeblock = ($$anchor2) => {
      HighlightCompo($$anchor2, {
        get code() {
          return get(generatedCodeWidget);
        }
      });
    };
    CodeWrapper(node_36, {
      codeblock,
      children: ($$anchor2, $$slotProps) => {
        var fragment_29 = root_43();
        var node_37 = first_child(fragment_29);
        WidgetPlaceholder(node_37, {
          get class() {
            return get(widgetPlaceholderClass);
          }
        });
        var node_38 = sibling(node_37, 2);
        Button(node_38, {
          class: "mt-4 w-36",
          onclick: () => get(widgetPlaceholderClass) === "" ? set(widgetPlaceholderClass, "ml-4") : set(widgetPlaceholderClass, ""),
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_25 = text();
            template_effect(() => set_text(text_25, get(widgetPlaceholderClass) ? "Remove class" : "Add class"));
            append($$anchor3, text_25);
          },
          $$slots: { default: true }
        });
        append($$anchor2, fragment_29);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_39 = sibling(node_36, 2);
  H2(node_39, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_26 = text("List placeholder");
      append($$anchor2, text_26);
    },
    $$slots: { default: true }
  });
  var node_40 = sibling(node_39, 2);
  {
    const codeblock = ($$anchor2) => {
      HighlightCompo($$anchor2, {
        get code() {
          return get(generatedCodeList);
        }
      });
    };
    CodeWrapper(node_40, {
      codeblock,
      children: ($$anchor2, $$slotProps) => {
        var fragment_32 = root_47();
        var div_9 = first_child(fragment_32);
        var node_41 = child(div_9);
        ListPlaceholder(node_41, {
          get itemNumber() {
            return get(listPlaceholderItemNumber);
          },
          get size() {
            return get(listPlaceholderSize);
          },
          get rounded() {
            return get(listPlaceholderRounded);
          },
          get class() {
            return get(listPlaceholderClass);
          }
        });
        reset(div_9);
        var div_10 = sibling(div_9, 2);
        var node_42 = child(div_10);
        Label(node_42, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_27 = text("Size");
            append($$anchor3, text_27);
          },
          $$slots: { default: true }
        });
        var node_43 = sibling(node_42, 2);
        each(node_43, 17, () => listSizes, index, ($$anchor3, size) => {
          Radio($$anchor3, {
            labelClass: "w-12 my-1",
            name: "size",
            get group() {
              return get(listPlaceholderSize);
            },
            set group($$value) {
              set(listPlaceholderSize, proxy($$value));
            },
            get value() {
              return get(size);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_28 = text();
              template_effect(() => set_text(text_28, get(size)));
              append($$anchor4, text_28);
            },
            $$slots: { default: true }
          });
        });
        reset(div_10);
        var div_11 = sibling(div_10, 2);
        var node_44 = child(div_11);
        Label(node_44, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_29 = text("Rounded");
            append($$anchor3, text_29);
          },
          $$slots: { default: true }
        });
        var node_45 = sibling(node_44, 2);
        each(node_45, 17, () => listRoundedSizes, index, ($$anchor3, size) => {
          Radio($$anchor3, {
            labelClass: "w-12 my-1",
            name: "roundedSize",
            get group() {
              return get(listPlaceholderRounded);
            },
            set group($$value) {
              set(listPlaceholderRounded, proxy($$value));
            },
            get value() {
              return get(size);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_30 = text();
              template_effect(() => set_text(text_30, get(size)));
              append($$anchor4, text_30);
            },
            $$slots: { default: true }
          });
        });
        reset(div_11);
        var div_12 = sibling(div_11, 2);
        var node_46 = child(div_12);
        Label(node_46, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_31 = text("Items:");
            append($$anchor3, text_31);
          },
          $$slots: { default: true }
        });
        var node_47 = sibling(node_46, 2);
        each(node_47, 17, () => listItemNumbers, index, ($$anchor3, itemNumber) => {
          Radio($$anchor3, {
            labelClass: "w-10 my-1",
            name: "itemNumber",
            get group() {
              return get(listPlaceholderItemNumber);
            },
            set group($$value) {
              set(listPlaceholderItemNumber, proxy($$value));
            },
            get value() {
              return get(itemNumber);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_32 = text();
              template_effect(() => set_text(text_32, get(itemNumber)));
              append($$anchor4, text_32);
            },
            $$slots: { default: true }
          });
        });
        reset(div_12);
        var node_48 = sibling(div_12, 2);
        Button(node_48, {
          class: "w-36",
          onclick: () => get(listPlaceholderClass) === "" ? set(listPlaceholderClass, "ml-4") : set(listPlaceholderClass, ""),
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_33 = text();
            template_effect(() => set_text(text_33, get(listPlaceholderClass) ? "Remove class" : "Add class"));
            append($$anchor3, text_33);
          },
          $$slots: { default: true }
        });
        append($$anchor2, fragment_32);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_49 = sibling(node_40, 2);
  H2(node_49, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_34 = text("Testimonial placeholder");
      append($$anchor2, text_34);
    },
    $$slots: { default: true }
  });
  var node_50 = sibling(node_49, 2);
  {
    const codeblock = ($$anchor2) => {
      HighlightCompo($$anchor2, {
        get code() {
          return get(generatedCodeTestimonial);
        }
      });
    };
    CodeWrapper(node_50, {
      codeblock,
      children: ($$anchor2, $$slotProps) => {
        var fragment_41 = root_60();
        var node_51 = first_child(fragment_41);
        TestimonialPlaceholder(node_51, {
          get class() {
            return get(TestimonialPlaceholderClass);
          }
        });
        var node_52 = sibling(node_51, 2);
        Button(node_52, {
          class: "mt-4 w-36",
          onclick: () => get(TestimonialPlaceholderClass) === "" ? set(TestimonialPlaceholderClass, "mx-auto w-[200px] sm:w-[400px]") : set(TestimonialPlaceholderClass, ""),
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_35 = text();
            template_effect(() => set_text(text_35, get(TestimonialPlaceholderClass) ? "Remove class" : "Add class"));
            append($$anchor3, text_35);
          },
          $$slots: { default: true }
        });
        append($$anchor2, fragment_41);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_53 = sibling(node_50, 2);
  H2(node_53, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_36 = text("Component data");
      append($$anchor2, text_36);
    },
    $$slots: { default: true }
  });
  var node_54 = sibling(node_53, 2);
  CompoAttributesViewer(node_54, { dirName });
  append($$anchor, fragment);
  pop();
}
export {
  _page as component
};
