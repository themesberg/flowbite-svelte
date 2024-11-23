import { a as append, t as template, c as comment } from "./disclose-version.0TX42Q8e.js";
import { p as push, t as template_effect, a as pop, c as child, r as reset, s as sibling, f as first_child, b as get, d as derived } from "./runtime.BkfDdwap.js";
import { i as if_block } from "./props.B7eOu8hW.js";
import { s as snippet } from "./snippet.BDfn85k4.js";
import { b as set_class } from "./theme.BtjZjf2R.js";
import { c as codewrapper } from "./H1.DunGd_Oq.js";
var root_1 = template(`<div><!></div>`);
var root = template(`<div><!> <!></div>`);
function CodeWrapper($$anchor, $$props) {
  push($$props, true);
  const $$d = derived(codewrapper), base = derived(() => get($$d).base), inner = derived(() => get($$d).inner);
  var div = root();
  const class_derived = derived(() => get(base)({ class: $$props.class }));
  var node = child(div);
  if_block(node, () => $$props.children, ($$anchor2) => {
    var div_1 = root_1();
    const class_derived_1 = derived(() => get(inner)({ class: $$props.innerClass }));
    var node_1 = child(div_1);
    snippet(node_1, () => $$props.children);
    reset(div_1);
    template_effect(() => set_class(div_1, get(class_derived_1)));
    append($$anchor2, div_1);
  });
  var node_2 = sibling(node, 2);
  if_block(node_2, () => $$props.codeblock, ($$anchor2) => {
    var fragment = comment();
    var node_3 = first_child(fragment);
    snippet(node_3, () => $$props.codeblock);
    append($$anchor2, fragment);
  });
  reset(div);
  template_effect(() => set_class(div, get(class_derived)));
  append($$anchor, div);
  pop();
}
export {
  CodeWrapper as C
};
