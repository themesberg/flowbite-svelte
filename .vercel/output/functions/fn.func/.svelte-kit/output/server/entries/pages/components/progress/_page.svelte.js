import { a6 as noop, Q as push, a0 as spread_attributes, W as attr, V as escape_html, X as stringify, Z as store_get, $ as unsubscribe_stores, S as pop, a3 as copy_payload, a4 as assign_payload, a2 as bind_props, Y as ensure_array_like } from "../../../../chunks/index.js";
import { ao as progressbar } from "../../../../chunks/theme.js";
import { B as Button } from "../../../../chunks/markdown.js";
import { l as linear, c as cubicOut, a as sineOut } from "../../../../chunks/index4.js";
import { twMerge } from "tailwind-merge";
import { w as writable } from "../../../../chunks/index2.js";
import { L as Label, R as Radio, C as CompoAttributesViewer } from "../../../../chunks/CompoAttributesViewer.js";
import { H as HighlightCompo } from "../../../../chunks/HighlightCompo.js";
import { C as CodeWrapper } from "../../../../chunks/CodeWrapper.js";
import { a as H1 } from "../../../../chunks/H1.js";
import { H as H2 } from "../../../../chunks/H2.js";
const now = () => Date.now();
const raf = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (_) => noop()
  ),
  now: () => now(),
  tasks: /* @__PURE__ */ new Set()
};
function loop(callback) {
  let task;
  if (raf.tasks.size === 0) ;
  return {
    promise: new Promise((fulfill) => {
      raf.tasks.add(task = { c: callback, f: fulfill });
    }),
    abort() {
      raf.tasks.delete(task);
    }
  };
}
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
  function set(new_value, opts) {
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
    task = loop((now2) => {
      if (now2 < start) return true;
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
      const elapsed = now2 - start;
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
    set,
    update: (fn, opts) => set(fn(
      /** @type {any} */
      target_value,
      /** @type {any} */
      value
    ), opts),
    subscribe: store.subscribe
  };
}
function Progressbar($$payload, $$props) {
  push();
  var $$store_subs;
  let {
    progress = "45",
    precision = 0,
    tweenDuration = 400,
    animate = false,
    size = "h-2.5",
    labelInside = false,
    labelOutside = "",
    easing = cubicOut,
    color = "primary",
    div2Class,
    oustsideSpanClass,
    oustsideProgressClass,
    labeloutsidedivClass,
    divClass,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const _progress = tweened(0, { duration: animate ? tweenDuration : 0, easing });
  const {
    base,
    labelInsideDiv,
    insideDiv,
    outsideDiv,
    oustsideSpan,
    outsideProgress
  } = progressbar({ color, labelInside });
  if (labelOutside) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div${spread_attributes({
      ...restProps,
      class: outsideDiv({ class: labeloutsidedivClass })
    })}><span${attr("class", oustsideSpan({ class: oustsideSpanClass }))}>${escape_html(labelOutside)}</span> <span${attr("class", outsideProgress({ class: oustsideProgressClass }))}>${escape_html(progress)}%</span></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div${spread_attributes({
    ...restProps,
    class: twMerge(base({ class: divClass }), size)
  })}>`;
  if (labelInside) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div${attr("class", twMerge(labelInsideDiv({ class: div2Class }), size))}${attr("style", `width: ${stringify(store_get($$store_subs ??= {}, "$_progress", _progress))}%`)}>${escape_html(store_get($$store_subs ??= {}, "$_progress", _progress).toFixed(precision))}%</div>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div${attr("class", twMerge(insideDiv({ class: div2Class }), size))}${attr("style", `width: ${stringify(store_get($$store_subs ??= {}, "$_progress", _progress))}%`)}></div>`;
  }
  $$payload.out += `<!--]--></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
const __vite_glob_0_0 = '<script>\n  import { Progressbar } from "svelte-5-ui-lib";\n<\/script>\n';
function _page($$payload, $$props) {
  push();
  const dirName = "progress";
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/Setup.svelte": __vite_glob_0_0
  });
  let progress = "45";
  const progressSizes = [
    { size: "h-4", class: "" },
    { size: "h-6", class: "p-2" },
    { size: "h-8", class: "p-3" },
    { size: "h-10", class: "p-4" }
  ];
  function updateProgressSize(selectedSize) {
    const newSize = progressSizes.find((size) => size.size === selectedSize);
    if (newSize) {
      progressSize = newSize;
    }
  }
  let progressSize = progressSizes[0];
  const colors = Object.keys(progressbar.variants.color);
  let progressColor = "primary";
  let labelInside = false;
  const changeLabelInside = () => {
    labelInside = !labelInside;
  };
  let { labelContent = "Svelte-5-Ui-Lib" } = $$props;
  const changeLabelContent = () => {
    labelContent = labelContent === "Svelte-5-Ui-Lib" ? "" : "Svelte-5-Ui-Lib";
  };
  let animation = false;
  let tweenDuration = void 0;
  let easing = void 0;
  const changeAnimation = () => {
    animation = !animation;
    if (animation) {
      tweenDuration = 1500;
      easing = sineOut;
    } else {
      tweenDuration = void 0;
      easing = void 0;
    }
  };
  let generatedCode = (() => {
    let props = [];
    props.push(` progress="${progress}"`);
    if (progressColor !== "primary") props.push(` color="${progressColor}"`);
    if (labelInside) props.push(" labelInside");
    if (labelContent !== "") props.push(` labelOutside="${labelContent}"`);
    if (progressSize.size !== "h-4") props.push(` size="${progressSize.size}"`);
    if (progressSize.class !== "") {
      props.push(` div2Class="${progressSize.class}"`);
    }
    if (animation) {
      props.push(" animate");
      props.push(" precision={0}");
      props.push(" tweenDuration={1500}");
      props.push(" easing={sineOut}");
    }
    const propsString = props.length > 0 ? props.map((prop) => `
  ${prop}`).join("") + "\n" : "";
    return `<Progressbar${propsString} />`;
  })();
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    H1($$payload2, {
      children: ($$payload3) => {
        $$payload3.out += `<!---->Progress bar`;
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
        $$payload3.out += `<!---->Interactive Progressbar Builder`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    {
      let codeblock = function($$payload3) {
        HighlightCompo($$payload3, { code: generatedCode });
      };
      CodeWrapper($$payload2, {
        codeblock,
        children: ($$payload3) => {
          const each_array = ensure_array_like(progressSizes);
          const each_array_1 = ensure_array_like(colors);
          $$payload3.out += `<div class="my-4 h-16">`;
          if (animation) {
            $$payload3.out += "<!--[-->";
            Progressbar($$payload3, {
              progress,
              size: progressSize.size,
              color: progressColor,
              labelOutside: labelContent,
              labelInside,
              div2Class: progressSize.class,
              animate: true,
              tweenDuration,
              easing
            });
          } else {
            $$payload3.out += "<!--[!-->";
            Progressbar($$payload3, {
              progress,
              size: progressSize.size,
              color: progressColor,
              labelOutside: labelContent,
              labelInside,
              div2Class: progressSize.class
            });
          }
          $$payload3.out += `<!--]--></div> <div class="mb-4 flex flex-wrap space-x-2">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Size`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let size = each_array[$$index];
            Radio($$payload3, {
              labelClass: "w-24 my-1",
              name: "progress_size",
              get group() {
                return progressSize.size;
              },
              set group($$value) {
                progressSize.size = $$value;
                $$settled = false;
              },
              value: size.size,
              onchange: () => updateProgressSize(size.size),
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(size.size)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> <div class="flex flex-wrap space-x-2">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Color`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
            let color = each_array_1[$$index_1];
            Radio($$payload3, {
              labelClass: "w-24 my-1",
              name: "interactive_progress_color",
              get group() {
                return progressColor;
              },
              set group($$value) {
                progressColor = $$value;
                $$settled = false;
              },
              color,
              value: color,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(color)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> <div class="flex flex-wrap justify-center gap-2 md:justify-start">`;
          Button($$payload3, {
            class: "w-48",
            onclick: changeLabelContent,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(labelContent ? "Remove outlise label" : "Add outside label")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-48",
            color: "purple",
            onclick: changeLabelInside,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(labelInside ? "Remove inside label" : "Add inside label")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-48",
            color: "red",
            onclick: changeAnimation,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(animation ? "No animation" : "Animation")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-48",
            color: "emerald",
            onclick: () => progress = `${Math.round(Math.random() * 100)}`,
            children: ($$payload4) => {
              $$payload4.out += `<!---->Randomize`;
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
  bind_props($$props, { labelContent });
  pop();
}
export {
  _page as default
};
