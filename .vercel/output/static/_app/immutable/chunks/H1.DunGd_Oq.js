import { e as assign_nodes, c as comment, a as append } from "./disclose-version.0TX42Q8e.js";
import { o as block, E as EFFECT_TRANSPARENT, q as branch, w as hydrating, C as hydrate_next, x as hydrate_node, L as pause_effect, K as resume_effect, v as destroy_effect, V as get_first_child, z as create_text, I as set_hydrating, B as set_hydrate_node, O as active_effect, N as NAMESPACE_SVG, p as push, f as first_child, a as pop, t as template_effect, b as get, d as derived } from "./runtime.BkfDdwap.js";
import { s as snippet } from "./snippet.BDfn85k4.js";
import { a as set_attributes, a7 as heading, a8 as ce } from "./theme.BtjZjf2R.js";
import { e as set_should_intro } from "./store.B2xZ3Ft6.js";
import { p as prop, r as rest_props } from "./props.B7eOu8hW.js";
function element(node, get_tag, is_svg, render_fn, get_namespace, location) {
  let was_hydrating = hydrating;
  if (hydrating) {
    hydrate_next();
  }
  var tag;
  var current_tag;
  var element2 = null;
  if (hydrating && hydrate_node.nodeType === 1) {
    element2 = /** @type {Element} */
    hydrate_node;
    hydrate_next();
  }
  var anchor = (
    /** @type {TemplateNode} */
    hydrating ? hydrate_node : node
  );
  var effect;
  block(() => {
    const next_tag = get_tag() || null;
    var ns = next_tag === "svg" ? NAMESPACE_SVG : null;
    if (next_tag === tag) return;
    if (effect) {
      if (next_tag === null) {
        pause_effect(effect, () => {
          effect = null;
          current_tag = null;
        });
      } else if (next_tag === current_tag) {
        resume_effect(effect);
      } else {
        destroy_effect(effect);
        set_should_intro(false);
      }
    }
    if (next_tag && next_tag !== current_tag) {
      effect = branch(() => {
        element2 = hydrating ? (
          /** @type {Element} */
          element2
        ) : ns ? document.createElementNS(ns, next_tag) : document.createElement(next_tag);
        assign_nodes(element2, element2);
        if (render_fn) {
          var child_anchor = (
            /** @type {TemplateNode} */
            hydrating ? get_first_child(element2) : element2.appendChild(create_text())
          );
          if (hydrating) {
            if (child_anchor === null) {
              set_hydrating(false);
            } else {
              set_hydrate_node(child_anchor);
            }
          }
          render_fn(element2, child_anchor);
        }
        active_effect.nodes_end = element2;
        anchor.before(element2);
      });
    }
    tag = next_tag;
    if (tag) current_tag = tag;
    set_should_intro(true);
  }, EFFECT_TRANSPARENT);
  if (was_hydrating) {
    set_hydrating(true);
    set_hydrate_node(anchor);
  }
}
function Heading($$anchor, $$props) {
  push($$props, true);
  let tag = prop($$props, "tag", 3, "h1"), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "tag",
    "class"
  ]);
  let headingClass = derived(() => heading({ tag: tag(), className: $$props.class }));
  var fragment = comment();
  var node = first_child(fragment);
  element(node, tag, false, ($$element, $$anchor2) => {
    let attributes;
    template_effect(() => attributes = set_attributes($$element, attributes, { ...restProps, class: get(headingClass) }, void 0, $$element.namespaceURI === NAMESPACE_SVG, $$element.nodeName.includes("-")));
    var fragment_1 = comment();
    var node_1 = first_child(fragment_1);
    snippet(node_1, () => $$props.children);
    append($$anchor2, fragment_1);
  });
  append($$anchor, fragment);
  pop();
}
const highlightcompo = ce({
  slots: {
    base: "mt-4 max-w-4xl rounded bg-gray-50 dark:bg-gray-700",
    badge: "absolute -top-8 right-[8px]",
    button: "absolute right-2 top-2 rounded px-2 py-1 text-white"
  },
  variants: {
    expanded: {
      true: { base: "min-h-full" },
      false: { base: "" }
    }
  }
});
const codewrapper = ce({
  slots: {
    base: "max-w-4xl rounded-md border border-gray-200 bg-white bg-gradient-to-r dark:border-gray-600 dark:bg-gray-950",
    inner: "p-6"
  }
});
const h1Cls = ce({
  base: "my-8 text-3xl"
});
const h2Cls = ce({
  base: "my-6 text-2xl"
});
const h3Cls = ce({
  base: "my-4 text-xl"
});
function H1($$anchor, $$props) {
  push($$props, true);
  const base = derived(() => h1Cls({ className: $$props.class }));
  Heading($$anchor, {
    tag: "h1",
    get class() {
      return get(base);
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = comment();
      var node = first_child(fragment_1);
      snippet(node, () => $$props.children);
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
  pop();
}
export {
  H1 as H,
  Heading as a,
  h2Cls as b,
  codewrapper as c,
  h3Cls as d,
  element as e,
  highlightcompo as h
};
