import { c as comment, a as append } from "../chunks/disclose-version.0TX42Q8e.js";
import { p as push, f as first_child, a as pop } from "../chunks/runtime.BkfDdwap.js";
import { s as snippet } from "../chunks/snippet.BDfn85k4.js";
function _layout($$anchor, $$props) {
  push($$props, true);
  var fragment = comment();
  var node = first_child(fragment);
  snippet(node, () => $$props.children);
  append($$anchor, fragment);
  pop();
}
export {
  _layout as component
};
