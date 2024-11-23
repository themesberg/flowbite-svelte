import { c as comment, a as append, t as template, b as text } from "../chunks/disclose-version.0TX42Q8e.js";
import { p as push, f as first_child, t as template_effect, a as pop, c as child, s as sibling, r as reset, b as get, d as derived, a6 as state, u as user_effect, a7 as set, n as next } from "../chunks/runtime.BkfDdwap.js";
import { r as replay_events, a as set_text } from "../chunks/store.B2xZ3Ft6.js";
import { e as each, i as index } from "../chunks/each.CtHIoDcm.js";
import { p as prop, i as if_block, r as rest_props, b as proxy, c as component } from "../chunks/props.B7eOu8hW.js";
import { j as handle_lazy_img, a as set_attributes, b as set_class, s as set_attribute, aQ as img, B as Badge, V as uiHelpers } from "../chunks/theme.BtjZjf2R.js";
import { h as html, B as Button } from "../chunks/markdown.Ba9FtS5g.js";
import { C as CompoAttributesViewer, L as Label, R as Radio } from "../chunks/CompoAttributesViewer.HsPJjrMu.js";
import { H as HighlightCompo } from "../chunks/HighlightCompo.D1kgIYBY.js";
import { D as DynamicCodeBlockHighlight } from "../chunks/DynamicCodeBlockHighlight.BS23lgW_.js";
import { C as CodeWrapper } from "../chunks/CodeWrapper.CdoIAYb8.js";
import { H as H1 } from "../chunks/H1.DunGd_Oq.js";
import { H as H2 } from "../chunks/H2.qsp5CBkK.js";
import { g as getExampleFileName, i as isGeneratedCodeOverflow, d as isSvelteOverflow } from "../chunks/helpers.B9KbZW0W.js";
import "../chunks/legacy.DvF4DOPZ.js";
var root_2$1 = template(`<figure><img> <figcaption><!></figcaption></figure>`);
var root_3$1 = template(`<img>`);
var root_4$1 = template(`<a><!></a>`);
function Img($$anchor, $$props) {
  push($$props, true);
  const imageSlot = ($$anchor2) => {
    var fragment = comment();
    var node = first_child(fragment);
    if_block(
      node,
      () => $$props.caption,
      ($$anchor3) => {
        var figure_1 = root_2$1();
        const class_derived = derived(() => get(figure)({ class: $$props.figClass }));
        var img_1 = child(figure_1);
        let attributes;
        var figcaption = sibling(img_1, 2);
        const class_derived_1 = derived(() => get(figureCaption)({ class: $$props.captionClass }));
        var node_1 = child(figcaption);
        html(node_1, () => $$props.caption);
        reset(figcaption);
        reset(figure_1);
        template_effect(() => {
          set_class(figure_1, get(class_derived));
          attributes = set_attributes(img_1, attributes, {
            ...restProps,
            class: get(base)({ class: $$props.imgClass })
          });
          set_class(figcaption, get(class_derived_1));
        });
        handle_lazy_img(img_1);
        replay_events(img_1);
        append($$anchor3, figure_1);
      },
      ($$anchor3) => {
        var img_2 = root_3$1();
        let attributes_1;
        template_effect(() => attributes_1 = set_attributes(img_2, attributes_1, {
          ...restProps,
          class: get(base)({ class: $$props.imgClass })
        }));
        handle_lazy_img(img_2);
        replay_events(img_2);
        append($$anchor3, img_2);
      }
    );
    append($$anchor2, fragment);
  };
  let size = prop($$props, "size", 3, "none"), alignment = prop($$props, "alignment", 3, "left"), effect = prop($$props, "effect", 3, "none"), shadow = prop($$props, "shadow", 3, "none"), rounded = prop($$props, "rounded", 3, "none"), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "size",
    "alignment",
    "effect",
    "shadow",
    "rounded",
    "caption",
    "imgClass",
    "figClass",
    "captionClass",
    "href"
  ]);
  let $$d = derived(() => img({
    size: size(),
    alignment: alignment(),
    effect: effect(),
    shadow: shadow(),
    rounded: rounded()
  })), base = derived(() => get($$d).base), figure = derived(() => get($$d).figure), figureCaption = derived(() => get($$d).figureCaption);
  var fragment_1 = comment();
  var node_2 = first_child(fragment_1);
  if_block(
    node_2,
    () => $$props.href,
    ($$anchor2) => {
      var a = root_4$1();
      var node_3 = child(a);
      imageSlot(node_3);
      reset(a);
      template_effect(() => set_attribute(a, "href", $$props.href));
      append($$anchor2, a);
    },
    ($$anchor2) => {
      imageSlot($$anchor2);
    }
  );
  append($$anchor, fragment_1);
  pop();
}
var root_3 = template(`<img>`);
var root_5$1 = template(`<source>`);
var root_4 = template(`<picture><!> <img></picture>`);
var root_2 = template(`<figure><!> <figcaption><!></figcaption></figure>`);
var root_7 = template(`<img>`);
var root_9 = template(`<source>`);
var root_8 = template(`<picture><!> <img></picture>`);
var root_10 = template(`<a><!></a>`);
function ImgEnhanced($$anchor, $$props) {
  push($$props, true);
  const imageSlot = ($$anchor2) => {
    var fragment = comment();
    var node = first_child(fragment);
    if_block(
      node,
      () => $$props.caption,
      ($$anchor3) => {
        var figure_1 = root_2();
        const class_derived = derived(() => get(figure)({ class: $$props.figClass }));
        var node_1 = child(figure_1);
        if_block(
          node_1,
          () => typeof $$props.src === "string",
          ($$anchor4) => {
            var img_1 = root_3();
            let attributes;
            template_effect(() => attributes = set_attributes(img_1, attributes, {
              ...restProps,
              src: $$props.src.img.src,
              class: get(base)({ class: $$props.imgClass }),
              width: $$props.src.img.w,
              height: $$props.src.img.h
            }));
            handle_lazy_img(img_1);
            replay_events(img_1);
            append($$anchor4, img_1);
          },
          ($$anchor4) => {
            var picture = root_4();
            var node_2 = child(picture);
            each(node_2, 17, () => Object.entries($$props.src.sources), index, ($$anchor5, $$item) => {
              let format = () => get($$item)[0];
              let srcset = () => get($$item)[1];
              var source = root_5$1();
              template_effect(() => {
                set_attribute(source, "srcset", srcset());
                set_attribute(source, "type", "image/" + format());
              });
              append($$anchor5, source);
            });
            var img_2 = sibling(node_2, 2);
            let attributes_1;
            reset(picture);
            template_effect(() => attributes_1 = set_attributes(img_2, attributes_1, {
              ...restProps,
              src: $$props.src.img.src,
              class: get(base)({ class: $$props.imgClass }),
              width: $$props.src.img.w,
              height: $$props.src.img.h
            }));
            handle_lazy_img(img_2);
            replay_events(img_2);
            append($$anchor4, picture);
          }
        );
        var figcaption = sibling(node_1, 2);
        const class_derived_1 = derived(() => get(figureCaption)({ class: $$props.captionClass }));
        var node_3 = child(figcaption);
        html(node_3, () => $$props.caption);
        reset(figcaption);
        reset(figure_1);
        template_effect(() => {
          set_class(figure_1, get(class_derived));
          set_class(figcaption, get(class_derived_1));
        });
        append($$anchor3, figure_1);
      },
      ($$anchor3) => {
        var fragment_1 = comment();
        var node_4 = first_child(fragment_1);
        if_block(
          node_4,
          () => typeof $$props.src === "string",
          ($$anchor4) => {
            var img_3 = root_7();
            let attributes_2;
            template_effect(() => attributes_2 = set_attributes(img_3, attributes_2, {
              ...restProps,
              src: $$props.src.img.src,
              class: get(base)({ class: $$props.imgClass }),
              width: $$props.src.img.w,
              height: $$props.src.img.h
            }));
            handle_lazy_img(img_3);
            replay_events(img_3);
            append($$anchor4, img_3);
          },
          ($$anchor4) => {
            var picture_1 = root_8();
            var node_5 = child(picture_1);
            each(node_5, 17, () => Object.entries($$props.src.sources), index, ($$anchor5, $$item) => {
              let format = () => get($$item)[0];
              let srcset = () => get($$item)[1];
              var source_1 = root_9();
              template_effect(() => {
                set_attribute(source_1, "srcset", srcset());
                set_attribute(source_1, "type", "image/" + format());
              });
              append($$anchor5, source_1);
            });
            var img_4 = sibling(node_5, 2);
            let attributes_3;
            reset(picture_1);
            template_effect(() => attributes_3 = set_attributes(img_4, attributes_3, {
              ...restProps,
              src: $$props.src.img.src,
              class: get(base)({ class: $$props.imgClass }),
              width: $$props.src.img.w,
              height: $$props.src.img.h
            }));
            handle_lazy_img(img_4);
            replay_events(img_4);
            append($$anchor4, picture_1);
          }
        );
        append($$anchor3, fragment_1);
      }
    );
    append($$anchor2, fragment);
  };
  let size = prop($$props, "size", 3, "none"), alignment = prop($$props, "alignment", 3, "left"), effect = prop($$props, "effect", 3, "none"), shadow = prop($$props, "shadow", 3, "none"), rounded = prop($$props, "rounded", 3, "none"), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "src",
    "size",
    "alignment",
    "effect",
    "shadow",
    "rounded",
    "caption",
    "imgClass",
    "figClass",
    "captionClass",
    "href"
  ]);
  let $$d = derived(() => img({
    size: size(),
    alignment: alignment(),
    effect: effect(),
    shadow: shadow(),
    rounded: rounded()
  })), base = derived(() => get($$d).base), figure = derived(() => get($$d).figure), figureCaption = derived(() => get($$d).figureCaption);
  var fragment_2 = comment();
  var node_6 = first_child(fragment_2);
  if_block(
    node_6,
    () => $$props.href,
    ($$anchor2) => {
      var a = root_10();
      var node_7 = child(a);
      imageSlot(node_7);
      reset(a);
      template_effect(() => set_attribute(a, "href", $$props.href));
      append($$anchor2, a);
    },
    ($$anchor2) => {
      imageSlot($$anchor2);
    }
  );
  append($$anchor, fragment_2);
  pop();
}
const __vite_glob_0_0 = '<script>\n  import { ImgEnhanced } from "$lib";\n  import MyImage from "./garnished.webp?enhanced";\n<\/script>\n\n<ImgEnhanced src={MyImage} alt="An alt text" caption="This is a caption" />\n';
const __vite_glob_0_1 = '<script>\n  import { EnhancedImg } from "$lib";\n  import MyImage from "./garnished.webp?enhanced";\n<\/script>\n\n<EnhancedImg src={MyImage} alt="An alt text" caption="This is a caption" />\n';
const __vite_glob_0_2 = '<script lang="ts">\n  import { Img } from "$lib";\n<\/script>\n\n<div class="flex justify-center">\n  <Img srcset="/images/examples/image-1.jpg 1x, /images/examples/image-1@2x.jpg 2x" alt="sample 1" class="w-full max-w-xl rounded-lg" />\n</div>\n';
const __vite_glob_0_3 = '<script>\n  import { Img } from "svelte-5-ui-lib";\n<\/script>\n';
var root$1 = template(`<div class="flex justify-center"><!></div>`);
function RetinaReady($$anchor) {
  var div = root$1();
  var node = child(div);
  Img(node, {
    srcset: "/images/examples/image-1.jpg 1x, /images/examples/image-1@2x.jpg 2x",
    alt: "sample 1",
    class: "w-full max-w-xl rounded-lg"
  });
  reset(div);
  append($$anchor, div);
}
const MyImage = {
  sources: {
    avif: "" + new URL("../assets/garnished.BkQnFkyS.avif", import.meta.url).href + " 925w, " + new URL("../assets/garnished.ziIfAfZ7.avif", import.meta.url).href + " 1850w",
    webp: "" + new URL("../assets/garnished.VPMenER1.webp", import.meta.url).href + " 925w, " + new URL("../assets/garnished.BrH-V07o.webp", import.meta.url).href + " 1850w",
    png: "" + new URL("../assets/garnished.OF7x5Emd.png", import.meta.url).href + " 925w, " + new URL("../assets/garnished.Dab1lv_v.png", import.meta.url).href + " 1850w"
  },
  img: {
    src: "" + new URL("../assets/garnished.Dab1lv_v.png", import.meta.url).href,
    w: 1850,
    h: 1233
  }
};
function Enhanced($$anchor) {
  ImgEnhanced($$anchor, {
    src: MyImage,
    alt: "An alt text",
    caption: "This is a caption"
  });
}
var root_5 = template(`<div class="mb-4 overflow-y-auto md:h-[470px]"><!></div> <div class="mb-4 flex flex-wrap space-x-2"><!> <!></div> <div class="mb-4 flex flex-wrap space-x-2"><!> <!></div> <div class="mb-4 flex flex-wrap space-x-2"><!> <!></div> <div class="mb-4 flex flex-wrap space-x-2"><!> <!></div> <div class="mb-4 flex flex-wrap space-x-2"><!> <!></div> <div class="flex flex-wrap justify-center gap-2 md:justify-start"><!> <!></div>`, 1);
var root_26 = template(`<div class="mb-12 flex flex-wrap"><!> <!></div> <!>`, 1);
var root = template(`<!> <!> <!> <!> <!> <!> <!> <!> <!> <!>`, 1);
function _page($$anchor, $$props) {
  push($$props, true);
  const dirName = "typography/img";
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/Enhanced.svelte": __vite_glob_0_0,
    "./examples/ImportEx.svelte": __vite_glob_0_1,
    "./examples/RetinaReady.svelte": __vite_glob_0_2,
    "./examples/Setup.svelte": __vite_glob_0_3
  });
  const exampleArr = [
    // { name: "Import ex", component: ExampleComponents.ImportEx },
    {
      name: "Enhanced",
      component: Enhanced
    },
    {
      name: "Retina ready",
      component: RetinaReady
    }
  ];
  let selectedExample = state(proxy(exampleArr[0].name));
  let svelteCode = derived(() => getExampleFileName(get(selectedExample), exampleArr));
  function findObject(arr, name) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = derived(() => findObject(exampleArr, get(selectedExample)));
  const sizes = Object.keys(img.variants.size);
  let imgSize = state("none");
  const alignments = Object.keys(img.variants.alignment);
  let imgAlignment = state("left");
  const effects = Object.keys(img.variants.effect);
  let imgEffect = state("none");
  const shadows = Object.keys(img.variants.shadow);
  let imgShadow = state("none");
  const roundeds = Object.keys(img.variants.rounded);
  let imgRounded = state("none");
  let imgCaption = state(false);
  const changeImgCaption = () => {
    set(imgCaption, !get(imgCaption));
  };
  let imgHref = state("");
  const changeImgHrf = () => {
    set(imgHref, proxy(get(imgHref) === "" ? "/" : ""));
  };
  let generatedCode = derived(() => (() => {
    let props = [];
    if (get(imgSize) !== "none") props.push(` size="${get(imgSize)}"`);
    if (get(imgAlignment) !== "left") props.push(` alignment="${get(imgAlignment)}"`);
    if (get(imgEffect) !== "none") props.push(` effect="${get(imgEffect)}"`);
    if (get(imgShadow) !== "none") props.push(` shadow="${get(imgShadow)}"`);
    if (get(imgRounded) !== "none") props.push(` rounded="${get(imgRounded)}"`);
    if (get(imgEffect) !== "none" && get(imgCaption)) props.push(` figClass="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"`);
    if (get(imgEffect) !== "none" && get(imgCaption)) props.push(` captionClass="absolute bottom-6 px-4 text-lg text-white"`);
    if (get(imgCaption)) props.push(` caption="Image caption"`);
    if (get(imgHref)) props.push(` href="/"`);
    const propsString = props.length > 0 ? props.map((prop2) => `
  ${prop2}`).join("") + "\n" : "";
    return `<Img${propsString} src='/images/examples/content-gallery-1.png'/>`;
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
      var text$1 = text("Image");
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
      var text_2 = text("Interactive Image Builder");
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
        var src = derived(() => get(imgEffect) !== "none" ? "/images/examples/content-gallery-3.png" : get(imgRounded) === "full" ? "/images/examples/image-4@2x.jpg" : "/images/examples/image-1@2x.jpg");
        var figClass = derived(() => get(imgEffect) !== "none" && get(imgCaption) ? "relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0" : "");
        var captionClass = derived(() => get(imgEffect) !== "none" && get(imgCaption) ? "absolute bottom-6 px-4 text-lg text-white" : "");
        var caption = derived(() => get(imgEffect) !== "none" ? "Do you want to get notified when a new component is added to Flowbite?" : get(imgCaption) ? "Image caption" : "");
        Img(node_5, {
          get src() {
            return get(src);
          },
          get size() {
            return get(imgSize);
          },
          get shadow() {
            return get(imgShadow);
          },
          get alignment() {
            return get(imgAlignment);
          },
          get rounded() {
            return get(imgRounded);
          },
          alt: "sample 1",
          get effect() {
            return get(imgEffect);
          },
          get figClass() {
            return get(figClass);
          },
          get captionClass() {
            return get(captionClass);
          },
          get caption() {
            return get(caption);
          },
          get href() {
            return get(imgHref);
          }
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
        each(node_7, 17, () => sizes, index, ($$anchor3, option) => {
          Radio($$anchor3, {
            labelClass: "w-16 my-1",
            name: "img_size",
            get group() {
              return get(imgSize);
            },
            set group($$value) {
              set(imgSize, proxy($$value));
            },
            get value() {
              return get(option);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_4 = text();
              template_effect(() => set_text(text_4, get(option)));
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
            var text_5 = text("Alignment");
            append($$anchor3, text_5);
          },
          $$slots: { default: true }
        });
        var node_9 = sibling(node_8, 2);
        each(node_9, 17, () => alignments, index, ($$anchor3, alignment) => {
          Radio($$anchor3, {
            labelClass: "w-20 my-1",
            name: "img_alignment",
            get group() {
              return get(imgAlignment);
            },
            set group($$value) {
              set(imgAlignment, proxy($$value));
            },
            get value() {
              return get(alignment);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_6 = text();
              template_effect(() => set_text(text_6, get(alignment)));
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
            var text_7 = text("Shadow");
            append($$anchor3, text_7);
          },
          $$slots: { default: true }
        });
        var node_11 = sibling(node_10, 2);
        each(node_11, 17, () => shadows, index, ($$anchor3, shadow) => {
          Radio($$anchor3, {
            labelClass: "w-20 my-1",
            name: "img_shadow",
            get group() {
              return get(imgShadow);
            },
            set group($$value) {
              set(imgShadow, proxy($$value));
            },
            get value() {
              return get(shadow);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_8 = text();
              template_effect(() => set_text(text_8, get(shadow)));
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
            var text_9 = text("Rounded");
            append($$anchor3, text_9);
          },
          $$slots: { default: true }
        });
        var node_13 = sibling(node_12, 2);
        each(node_13, 17, () => roundeds, index, ($$anchor3, rounded) => {
          Radio($$anchor3, {
            labelClass: "w-20 my-1",
            name: "img_rounded",
            get group() {
              return get(imgRounded);
            },
            set group($$value) {
              set(imgRounded, proxy($$value));
            },
            get value() {
              return get(rounded);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_10 = text();
              template_effect(() => set_text(text_10, get(rounded)));
              append($$anchor4, text_10);
            },
            $$slots: { default: true }
          });
        });
        reset(div_4);
        var div_5 = sibling(div_4, 2);
        var node_14 = child(div_5);
        Label(node_14, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_11 = text("Effect");
            append($$anchor3, text_11);
          },
          $$slots: { default: true }
        });
        var node_15 = sibling(node_14, 2);
        each(node_15, 17, () => effects, index, ($$anchor3, effect) => {
          Radio($$anchor3, {
            labelClass: "w-24 my-1",
            name: "img_effect",
            get group() {
              return get(imgEffect);
            },
            set group($$value) {
              set(imgEffect, proxy($$value));
            },
            get value() {
              return get(effect);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_12 = text();
              template_effect(() => set_text(text_12, get(effect)));
              append($$anchor4, text_12);
            },
            $$slots: { default: true }
          });
        });
        reset(div_5);
        var div_6 = sibling(div_5, 2);
        var node_16 = child(div_6);
        Button(node_16, {
          class: "w-48",
          color: "blue",
          onclick: changeImgCaption,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_13 = text();
            template_effect(() => set_text(text_13, get(imgCaption) ? "Remove caption" : "Add caption"));
            append($$anchor3, text_13);
          },
          $$slots: { default: true }
        });
        var node_17 = sibling(node_16, 2);
        Button(node_17, {
          class: "w-48",
          color: "lime",
          onclick: changeImgHrf,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_14 = text();
            template_effect(() => set_text(text_14, get(imgHref) === "" ? "Add href" : "Remove href"));
            append($$anchor3, text_14);
          },
          $$slots: { default: true }
        });
        reset(div_6);
        append($$anchor2, fragment_2);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_18 = sibling(node_4, 2);
  Badge(node_18, {
    large: true,
    class: "my-4",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_15 = text("Warning: the caption is using @html.");
      append($$anchor2, text_15);
    },
    $$slots: { default: true }
  });
  var node_19 = sibling(node_18, 2);
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
        var fragment_16 = root_26();
        var div_7 = first_child(fragment_16);
        var node_21 = child(div_7);
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
              var text_18 = text();
              template_effect(() => set_text(text_18, get(style).name));
              append($$anchor4, text_18);
            },
            $$slots: { default: true }
          });
        });
        reset(div_7);
        var node_23 = sibling(div_7, 2);
        component(node_23, () => get(SelectedComponent), ($$anchor3, $$component) => {
          $$component($$anchor3, {});
        });
        append($$anchor2, fragment_16);
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
