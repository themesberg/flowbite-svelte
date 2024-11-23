import { c as comment, a as append, t as template } from "./disclose-version.0TX42Q8e.js";
import { p as push, a6 as state, e as setContext, u as user_effect, f as first_child, a as pop, b as get, a7 as set, t as template_effect, N as NAMESPACE_SVG, d as derived, g as getContext, c as child, r as reset } from "./runtime.BkfDdwap.js";
import { s as snippet } from "./snippet.BDfn85k4.js";
import { e as element } from "./H1.DunGd_Oq.js";
import { a as set_attributes, U as list, t as twMerge } from "./theme.BtjZjf2R.js";
import { p as prop, b as proxy, r as rest_props } from "./props.B7eOu8hW.js";
function List($$anchor, $$props) {
  push($$props, true);
  let tag = prop($$props, "tag", 3, "ul"), isContenteditable = prop($$props, "isContenteditable", 3, false), position = prop($$props, "position", 3, "inside"), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "tag",
    "isContenteditable",
    "position",
    "ctxClass",
    "class"
  ]);
  let contextClass = state(proxy($$props.ctxClass || ""));
  setContext("ctxClass", () => get(contextClass));
  user_effect(() => {
    set(contextClass, proxy($$props.ctxClass || ""));
  });
  let classList = derived(() => list({
    position: position(),
    tag: tag(),
    className: $$props.class
  }));
  var fragment = comment();
  var node = first_child(fragment);
  element(node, tag, false, ($$element, $$anchor2) => {
    let attributes;
    template_effect(() => attributes = set_attributes(
      $$element,
      attributes,
      {
        ...restProps,
        class: get(classList),
        contenteditable: isContenteditable()
      },
      void 0,
      $$element.namespaceURI === NAMESPACE_SVG,
      $$element.nodeName.includes("-")
    ));
    var fragment_1 = comment();
    var node_1 = first_child(fragment_1);
    snippet(node_1, () => $$props.children);
    append($$anchor2, fragment_1);
  });
  append($$anchor, fragment);
  pop();
}
var root = template(`<li><!></li>`);
function Li($$anchor, $$props) {
  push($$props, true);
  let restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "icon",
    "class"
  ]);
  const getCtxClass = getContext("ctxClass");
  let liCls = derived(() => twMerge(getCtxClass(), $$props.icon && "flex items-center", $$props.class));
  var li = root();
  let attributes;
  var node = child(li);
  snippet(node, () => $$props.children);
  reset(li);
  template_effect(() => attributes = set_attributes(li, attributes, { ...restProps, class: get(liCls) }));
  append($$anchor, li);
  pop();
}
export {
  List as L,
  Li as a
};
