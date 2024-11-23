import { a as append, t as template, c as comment, b as text } from "../chunks/disclose-version.0TX42Q8e.js";
import { p as push, t as template_effect, a as pop, c as child, s as sibling, f as first_child, n as next, r as reset, b as get, a6 as state, a7 as set, d as derived } from "../chunks/runtime.BkfDdwap.js";
import { a as set_text } from "../chunks/store.B2xZ3Ft6.js";
import { e as each, i as index } from "../chunks/each.CtHIoDcm.js";
import { p as prop, i as if_block, r as rest_props, b as proxy } from "../chunks/props.B7eOu8hW.js";
import { a as set_attributes, s as set_attribute } from "../chunks/theme.BtjZjf2R.js";
import { B as Button } from "../chunks/markdown.Ba9FtS5g.js";
import { s as snippet } from "../chunks/snippet.BDfn85k4.js";
import { C as CompoAttributesViewer, L as Label, R as Radio } from "../chunks/CompoAttributesViewer.HsPJjrMu.js";
import { H as HighlightCompo } from "../chunks/HighlightCompo.D1kgIYBY.js";
import { C as CodeWrapper } from "../chunks/CodeWrapper.CdoIAYb8.js";
import { H as H1 } from "../chunks/H1.DunGd_Oq.js";
import { H as H2 } from "../chunks/H2.qsp5CBkK.js";
var root$1 = template(`<video><source> <!> <track kind="captions"> Your browser does not support the video tag.</video>`, 2);
function Video($$anchor, $$props) {
  push($$props, true);
  let type = prop($$props, "type", 3, "video/mp4"), srclang = prop($$props, "srclang", 3, "en"), label = prop($$props, "label", 3, "english_captions"), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "type",
    "trackSrc",
    "src",
    "srclang",
    "label",
    "class"
  ]);
  var video = root$1();
  let attributes;
  var source = child(video);
  var node = sibling(source, 2);
  if_block(node, () => $$props.children, ($$anchor2) => {
    var fragment = comment();
    var node_1 = first_child(fragment);
    snippet(node_1, () => $$props.children);
    append($$anchor2, fragment);
  });
  var track = sibling(node, 2);
  next();
  reset(video);
  template_effect(() => {
    attributes = set_attributes(video, attributes, { ...restProps, class: $$props.class });
    set_attribute(source, "src", $$props.src);
    set_attribute(source, "type", type());
    set_attribute(track, "src", $$props.trackSrc);
    set_attribute(track, "srclang", srclang());
    set_attribute(track, "label", label());
  });
  append($$anchor, video);
  pop();
}
const __vite_glob_0_0 = '<script>\n  import { Video } from "svelte-5-ui-lib";\n<\/script>\n';
var root_5 = template(`<div class="mb-4 md:h-[500px]"><!></div> <div class="mb-4 flex flex-wrap space-x-6"><!> <!></div> <div class="flex flex-wrap justify-center gap-2 md:justify-start"><!> <!> <!></div>`, 1);
var root = template(`<!> <!> <!> <!> <!> <!> <!>`, 1);
function _page($$anchor, $$props) {
  push($$props, true);
  const dirName = "video";
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/Setup.svelte": __vite_glob_0_0
  });
  let controls = state(true);
  const changeControls = () => {
    set(controls, !get(controls));
  };
  let autoplay = state(false);
  const changeAutoplay = () => {
    set(autoplay, !get(autoplay));
  };
  let muted = state(false);
  const changeMuted = () => {
    set(muted, !get(muted));
  };
  const videoClasses = [
    { name: "default", class: "w-full" },
    { name: "width", class: "w-96" },
    { name: "height", class: "h-80" },
    {
      name: "responsive",
      class: "w-full max-w-full h-auto"
    },
    {
      name: "customStyle",
      class: "w-full max-w-full h-auto rounded-3xl border border-gray-200 dark:border-gray-700"
    }
  ];
  let selectedClass = state("default");
  let currentClass = derived(() => videoClasses.find((t) => t.name === get(selectedClass)) || videoClasses[0]);
  let generatedCode = derived(() => (() => {
    let props = [];
    if (get(controls)) props.push(" controls");
    if (get(autoplay)) props.push(" autoplay");
    if (get(muted)) props.push(" muted");
    if (get(currentClass).name !== "default") props.push(` class="${get(currentClass).class}"`);
    const propsString = props.length > 0 ? props.map((prop2) => `
  ${prop2}`).join("") + "\n" : "";
    return `<Video src="/videos/flowbite.mp4"${propsString} trackSrc="flowbite.mp4" />`;
  })());
  var fragment = root();
  var node = first_child(fragment);
  H1(node, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text("Video");
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
      var text_2 = text("Interactive Video Player Builder");
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
      codeblock,
      children: ($$anchor2, $$slotProps) => {
        var fragment_2 = root_5();
        var div = first_child(fragment_2);
        var node_5 = child(div);
        Video(node_5, {
          src: "/videos/flowbite.mp4",
          get controls() {
            return get(controls);
          },
          get autoplay() {
            return get(autoplay);
          },
          get muted() {
            return get(muted);
          },
          trackSrc: "flowbite.mp4",
          get class() {
            return get(currentClass).class;
          }
        });
        reset(div);
        var div_1 = sibling(div, 2);
        var node_6 = child(div_1);
        Label(node_6, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_3 = text("Style");
            append($$anchor3, text_3);
          },
          $$slots: { default: true }
        });
        var node_7 = sibling(node_6, 2);
        each(node_7, 17, () => videoClasses, index, ($$anchor3, option) => {
          Radio($$anchor3, {
            labelClass: "w-24 my-1",
            name: "interactive_toast_color",
            get group() {
              return get(selectedClass);
            },
            set group($$value) {
              set(selectedClass, proxy($$value));
            },
            get value() {
              return get(option).name;
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_4 = text();
              template_effect(() => set_text(text_4, get(option).name));
              append($$anchor4, text_4);
            },
            $$slots: { default: true }
          });
        });
        reset(div_1);
        var div_2 = sibling(div_1, 2);
        var node_8 = child(div_2);
        Button(node_8, {
          class: "w-40",
          color: "emerald",
          onclick: changeControls,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_5 = text();
            template_effect(() => set_text(text_5, get(controls) ? "Remove controls" : "Add controls"));
            append($$anchor3, text_5);
          },
          $$slots: { default: true }
        });
        var node_9 = sibling(node_8, 2);
        Button(node_9, {
          class: "w-40",
          color: "blue",
          onclick: changeAutoplay,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_6 = text();
            template_effect(() => set_text(text_6, get(autoplay) ? "Remove autoplay" : "Add autoplay"));
            append($$anchor3, text_6);
          },
          $$slots: { default: true }
        });
        var node_10 = sibling(node_9, 2);
        Button(node_10, {
          class: "w-40",
          color: "pink",
          onclick: changeMuted,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_7 = text();
            template_effect(() => set_text(text_7, get(muted) ? "Remove muted" : "Add muted"));
            append($$anchor3, text_7);
          },
          $$slots: { default: true }
        });
        reset(div_2);
        append($$anchor2, fragment_2);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_11 = sibling(node_4, 2);
  H2(node_11, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_8 = text("Component data");
      append($$anchor2, text_8);
    },
    $$slots: { default: true }
  });
  var node_12 = sibling(node_11, 2);
  CompoAttributesViewer(node_12, { dirName });
  append($$anchor, fragment);
  pop();
}
export {
  _page as component
};
