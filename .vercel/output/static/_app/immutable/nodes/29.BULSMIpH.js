import { a as append, t as template, b as text } from "../chunks/disclose-version.0TX42Q8e.js";
import { p as push, u as user_effect, f as first_child, t as template_effect, a as pop, c as child, r as reset, s as sibling, b as get, d as derived, a6 as state, a7 as set, n as next } from "../chunks/runtime.BkfDdwap.js";
import { s as setup_stores, a as set_text, b as store_get } from "../chunks/store.B2xZ3Ft6.js";
import { p as prop, i as if_block, r as rest_props, b as proxy } from "../chunks/props.B7eOu8hW.js";
import { e as each, i as index } from "../chunks/each.CtHIoDcm.js";
import { a9 as raf, aa as loop, ab as linear, ac as cubicOut, a as set_attributes, b as set_class, s as set_attribute, t as twMerge, ad as progressbar, ae as sineOut } from "../chunks/theme.BtjZjf2R.js";
import { B as Button } from "../chunks/markdown.Ba9FtS5g.js";
import { w as writable } from "../chunks/index.IFFPp5_U.js";
import { C as CompoAttributesViewer, L as Label, R as Radio } from "../chunks/CompoAttributesViewer.HsPJjrMu.js";
import { H as HighlightCompo } from "../chunks/HighlightCompo.D1kgIYBY.js";
import { C as CodeWrapper } from "../chunks/CodeWrapper.CdoIAYb8.js";
import { H as H1 } from "../chunks/H1.DunGd_Oq.js";
import { H as H2 } from "../chunks/H2.qsp5CBkK.js";
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function get_interpolator(a, b) {
  if (a === b || a !== a) return () => a;
  const type = typeof a;
  if (type !== typeof b || Array.isArray(a) !== Array.isArray(b)) {
    throw new Error("Cannot interpolate values of different type");
  }
  if (Array.isArray(a)) {
    const arr = (
      /** @type {Array<any>} */
      b.map((bi, i) => {
        return get_interpolator(
          /** @type {Array<any>} */
          a[i],
          bi
        );
      })
    );
    return (t) => arr.map((fn) => fn(t));
  }
  if (type === "object") {
    if (!a || !b) {
      throw new Error("Object cannot be null");
    }
    if (is_date(a) && is_date(b)) {
      const an = a.getTime();
      const bn = b.getTime();
      const delta = bn - an;
      return (t) => new Date(an + t * delta);
    }
    const keys = Object.keys(b);
    const interpolators = {};
    keys.forEach((key) => {
      interpolators[key] = get_interpolator(a[key], b[key]);
    });
    return (t) => {
      const result = {};
      keys.forEach((key) => {
        result[key] = interpolators[key](t);
      });
      return result;
    };
  }
  if (type === "number") {
    const delta = (
      /** @type {number} */
      b - /** @type {number} */
      a
    );
    return (t) => a + t * delta;
  }
  throw new Error(`Cannot interpolate ${type} values`);
}
function tweened(value, defaults = {}) {
  const store = writable(value);
  let task;
  let target_value = value;
  function set2(new_value, opts) {
    target_value = new_value;
    if (value == null) {
      store.set(value = new_value);
      return Promise.resolve();
    }
    let previous_task = task;
    let started = false;
    let {
      delay = 0,
      duration = 400,
      easing = linear,
      interpolate = get_interpolator
    } = { ...defaults, ...opts };
    if (duration === 0) {
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      store.set(value = target_value);
      return Promise.resolve();
    }
    const start = raf.now() + delay;
    let fn;
    task = loop((now) => {
      if (now < start) return true;
      if (!started) {
        fn = interpolate(
          /** @type {any} */
          value,
          new_value
        );
        if (typeof duration === "function")
          duration = duration(
            /** @type {any} */
            value,
            new_value
          );
        started = true;
      }
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      const elapsed = now - start;
      if (elapsed > /** @type {number} */
      duration) {
        store.set(value = new_value);
        return false;
      }
      store.set(value = fn(easing(elapsed / duration)));
      return true;
    });
    return task.promise;
  }
  return {
    set: set2,
    update: (fn, opts) => set2(fn(
      /** @type {any} */
      target_value,
      /** @type {any} */
      value
    ), opts),
    subscribe: store.subscribe
  };
}
var root_1 = template(`<div><span> </span> <span> </span></div>`);
var root_2 = template(`<div> </div>`);
var root_3 = template(`<div></div>`);
var root$1 = template(`<!> <div><!></div>`, 1);
function Progressbar($$anchor, $$props) {
  push($$props, true);
  const $$stores = setup_stores();
  const $_progress = () => store_get(_progress, "$_progress", $$stores);
  let progress = prop($$props, "progress", 3, "45"), precision = prop($$props, "precision", 3, 0), tweenDuration = prop($$props, "tweenDuration", 3, 400), animate = prop($$props, "animate", 3, false), size = prop($$props, "size", 3, "h-2.5"), labelInside = prop($$props, "labelInside", 3, false), labelOutside = prop($$props, "labelOutside", 3, ""), easing = prop($$props, "easing", 3, cubicOut), color = prop($$props, "color", 3, "primary"), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "progress",
    "precision",
    "tweenDuration",
    "animate",
    "size",
    "labelInside",
    "labelOutside",
    "easing",
    "color",
    "div2Class",
    "oustsideSpanClass",
    "oustsideProgressClass",
    "labeloutsidedivClass",
    "divClass"
  ]);
  const _progress = tweened(0, {
    duration: animate() ? tweenDuration() : 0,
    easing: easing()
  });
  const $$d = derived(() => progressbar({
    color: color(),
    labelInside: labelInside()
  })), base = derived(() => get($$d).base), labelInsideDiv = derived(() => get($$d).labelInsideDiv), insideDiv = derived(() => get($$d).insideDiv), outsideDiv = derived(() => get($$d).outsideDiv), oustsideSpan = derived(() => get($$d).oustsideSpan), outsideProgress = derived(() => get($$d).outsideProgress);
  user_effect(() => {
    _progress.set(Number(progress()));
  });
  var fragment = root$1();
  var node = first_child(fragment);
  if_block(node, labelOutside, ($$anchor2) => {
    var div = root_1();
    let attributes;
    var span = child(div);
    const class_derived = derived(() => get(oustsideSpan)({ class: $$props.oustsideSpanClass }));
    var text2 = child(span, true);
    reset(span);
    var span_1 = sibling(span, 2);
    const class_derived_1 = derived(() => get(outsideProgress)({ class: $$props.oustsideProgressClass }));
    var text_1 = child(span_1);
    reset(span_1);
    reset(div);
    template_effect(() => {
      attributes = set_attributes(div, attributes, {
        ...restProps,
        class: get(outsideDiv)({ class: $$props.labeloutsidedivClass })
      });
      set_class(span, get(class_derived));
      set_text(text2, labelOutside());
      set_class(span_1, get(class_derived_1));
      set_text(text_1, `${progress() ?? ""}%`);
    });
    append($$anchor2, div);
  });
  var div_1 = sibling(node, 2);
  let attributes_1;
  var node_1 = child(div_1);
  if_block(
    node_1,
    labelInside,
    ($$anchor2) => {
      var div_2 = root_2();
      const class_derived_2 = derived(() => twMerge(get(labelInsideDiv)({ class: $$props.div2Class }), size()));
      var text_2 = child(div_2);
      template_effect(() => set_text(text_2, `${$_progress().toFixed(precision()) ?? ""}%`));
      reset(div_2);
      template_effect(() => {
        set_class(div_2, get(class_derived_2));
        set_attribute(div_2, "style", `width: ${$_progress() ?? ""}%`);
      });
      append($$anchor2, div_2);
    },
    ($$anchor2) => {
      var div_3 = root_3();
      const class_derived_3 = derived(() => twMerge(get(insideDiv)({ class: $$props.div2Class }), size()));
      template_effect(() => {
        set_class(div_3, get(class_derived_3));
        set_attribute(div_3, "style", `width: ${$_progress() ?? ""}%`);
      });
      append($$anchor2, div_3);
    }
  );
  reset(div_1);
  template_effect(() => attributes_1 = set_attributes(div_1, attributes_1, {
    ...restProps,
    class: twMerge(get(base)({ class: $$props.divClass }), size())
  }));
  append($$anchor, fragment);
  pop();
}
const __vite_glob_0_0 = '<script>\n  import { Progressbar } from "svelte-5-ui-lib";\n<\/script>\n';
var root_5 = template(`<div class="my-4 h-16"><!></div> <div class="mb-4 flex flex-wrap space-x-2"><!> <!></div> <div class="flex flex-wrap space-x-2"><!> <!></div> <div class="flex flex-wrap justify-center gap-2 md:justify-start"><!> <!> <!> <!></div>`, 1);
var root = template(`<!> <!> <!> <!> <!> <!> <!>`, 1);
function _page($$anchor, $$props) {
  push($$props, true);
  const dirName = "progress";
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/Setup.svelte": __vite_glob_0_0
  });
  let progress = state("45");
  const progressSizes = [
    { size: "h-4", class: "" },
    { size: "h-6", class: "p-2" },
    { size: "h-8", class: "p-3" },
    { size: "h-10", class: "p-4" }
  ];
  function updateProgressSize(selectedSize) {
    const newSize = progressSizes.find((size) => size.size === selectedSize);
    if (newSize) {
      set(progressSize, proxy(newSize));
    }
  }
  let progressSize = state(proxy(progressSizes[0]));
  const colors = Object.keys(progressbar.variants.color);
  let progressColor = state("primary");
  let labelInside = state(false);
  const changeLabelInside = () => {
    set(labelInside, !get(labelInside));
  };
  let labelContent = prop($$props, "labelContent", 15, "Svelte-5-Ui-Lib");
  const changeLabelContent = () => {
    labelContent(labelContent() === "Svelte-5-Ui-Lib" ? "" : "Svelte-5-Ui-Lib");
  };
  let animation = state(false);
  let tweenDuration = state(void 0);
  let easing = state(void 0);
  const changeAnimation = () => {
    set(animation, !get(animation));
    if (get(animation)) {
      set(tweenDuration, 1500);
      set(easing, proxy(sineOut));
    } else {
      set(tweenDuration, void 0);
      set(easing, void 0);
    }
  };
  let generatedCode = derived(() => (() => {
    let props = [];
    props.push(` progress="${get(progress)}"`);
    if (get(progressColor) !== "primary") props.push(` color="${get(progressColor)}"`);
    if (get(labelInside)) props.push(" labelInside");
    if (labelContent() !== "") props.push(` labelOutside="${labelContent()}"`);
    if (get(progressSize).size !== "h-4") props.push(` size="${get(progressSize).size}"`);
    if (get(progressSize).class !== "") {
      props.push(` div2Class="${get(progressSize).class}"`);
    }
    if (get(animation)) {
      props.push(" animate");
      props.push(" precision={0}");
      props.push(" tweenDuration={1500}");
      props.push(" easing={sineOut}");
    }
    const propsString = props.length > 0 ? props.map((prop2) => `
  ${prop2}`).join("") + "\n" : "";
    return `<Progressbar${propsString} />`;
  })());
  var fragment = root();
  var node = first_child(fragment);
  H1(node, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text("Progress bar");
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
      var text_2 = text("Interactive Progressbar Builder");
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
        if_block(
          node_5,
          () => get(animation),
          ($$anchor3) => {
            Progressbar($$anchor3, {
              get progress() {
                return get(progress);
              },
              get size() {
                return get(progressSize).size;
              },
              get color() {
                return get(progressColor);
              },
              get labelOutside() {
                return labelContent();
              },
              get labelInside() {
                return get(labelInside);
              },
              get div2Class() {
                return get(progressSize).class;
              },
              animate: true,
              get tweenDuration() {
                return get(tweenDuration);
              },
              get easing() {
                return get(easing);
              }
            });
          },
          ($$anchor3) => {
            Progressbar($$anchor3, {
              get progress() {
                return get(progress);
              },
              get size() {
                return get(progressSize).size;
              },
              get color() {
                return get(progressColor);
              },
              get labelOutside() {
                return labelContent();
              },
              get labelInside() {
                return get(labelInside);
              },
              get div2Class() {
                return get(progressSize).class;
              }
            });
          }
        );
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
        each(node_7, 17, () => progressSizes, index, ($$anchor3, size) => {
          Radio($$anchor3, {
            labelClass: "w-24 my-1",
            name: "progress_size",
            get group() {
              return get(progressSize).size;
            },
            set group($$value) {
              get(progressSize).size = $$value;
            },
            get value() {
              return get(size).size;
            },
            onchange: () => updateProgressSize(get(size).size),
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_4 = text();
              template_effect(() => set_text(text_4, get(size).size));
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
        each(node_9, 17, () => colors, index, ($$anchor3, color) => {
          Radio($$anchor3, {
            labelClass: "w-24 my-1",
            name: "interactive_progress_color",
            get group() {
              return get(progressColor);
            },
            set group($$value) {
              set(progressColor, proxy($$value));
            },
            get color() {
              return get(color);
            },
            get value() {
              return get(color);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_6 = text();
              template_effect(() => set_text(text_6, get(color)));
              append($$anchor4, text_6);
            },
            $$slots: { default: true }
          });
        });
        reset(div_2);
        var div_3 = sibling(div_2, 2);
        var node_10 = child(div_3);
        Button(node_10, {
          class: "w-48",
          onclick: changeLabelContent,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_7 = text();
            template_effect(() => set_text(text_7, labelContent() ? "Remove outlise label" : "Add outside label"));
            append($$anchor3, text_7);
          },
          $$slots: { default: true }
        });
        var node_11 = sibling(node_10, 2);
        Button(node_11, {
          class: "w-48",
          color: "purple",
          onclick: changeLabelInside,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_8 = text();
            template_effect(() => set_text(text_8, get(labelInside) ? "Remove inside label" : "Add inside label"));
            append($$anchor3, text_8);
          },
          $$slots: { default: true }
        });
        var node_12 = sibling(node_11, 2);
        Button(node_12, {
          class: "w-48",
          color: "red",
          onclick: changeAnimation,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_9 = text();
            template_effect(() => set_text(text_9, get(animation) ? "No animation" : "Animation"));
            append($$anchor3, text_9);
          },
          $$slots: { default: true }
        });
        var node_13 = sibling(node_12, 2);
        Button(node_13, {
          class: "w-48",
          color: "emerald",
          onclick: () => set(progress, `${Math.round(Math.random() * 100)}`),
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_10 = text("Randomize");
            append($$anchor3, text_10);
          },
          $$slots: { default: true }
        });
        reset(div_3);
        append($$anchor2, fragment_2);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_14 = sibling(node_4, 2);
  H2(node_14, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_11 = text("Component data");
      append($$anchor2, text_11);
    },
    $$slots: { default: true }
  });
  var node_15 = sibling(node_14, 2);
  CompoAttributesViewer(node_15, { dirName });
  append($$anchor, fragment);
  pop();
}
export {
  _page as component
};
