import { a as append, t as template } from "../chunks/disclose-version.0TX42Q8e.js";
import { b as get, a7 as set, a6 as state, c as child, r as reset } from "../chunks/runtime.BkfDdwap.js";
import { b as proxy } from "../chunks/props.B7eOu8hW.js";
import "../chunks/theme.BtjZjf2R.js";
import { I as Input } from "../chunks/index.CCICtSX3.js";
var root = template(`<div class="p-8"><!></div>`);
function _page($$anchor) {
  let foo = state(void 0);
  var div = root();
  var node = child(div);
  Input(node, {
    name: "field1",
    get value() {
      return get(foo);
    },
    set value($$value) {
      set(foo, proxy($$value));
    }
  });
  reset(div);
  append($$anchor, div);
}
export {
  _page as component
};
