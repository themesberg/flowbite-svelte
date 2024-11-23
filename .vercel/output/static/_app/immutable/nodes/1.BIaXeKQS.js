import { a as append, t as template } from "../chunks/disclose-version.0TX42Q8e.js";
import "../chunks/legacy.DvF4DOPZ.js";
import { p as push, f as first_child, t as template_effect, a as pop, c as child, r as reset, s as sibling } from "../chunks/runtime.BkfDdwap.js";
import { s as setup_stores, a as set_text, b as store_get } from "../chunks/store.B2xZ3Ft6.js";
import { i as init } from "../chunks/lifecycle.BITzOuoa.js";
import { p as page } from "../chunks/stores.CC5X2N5j.js";
var root = template(`<h1> </h1> <p> </p>`, 1);
function Error($$anchor, $$props) {
  push($$props, false);
  const $$stores = setup_stores();
  const $page = () => store_get(page, "$page", $$stores);
  init();
  var fragment = root();
  var h1 = first_child(fragment);
  var text = child(h1, true);
  reset(h1);
  var p = sibling(h1, 2);
  var text_1 = child(p, true);
  reset(p);
  template_effect(() => {
    var _a;
    set_text(text, $page().status);
    set_text(text_1, (_a = $page().error) == null ? void 0 : _a.message);
  });
  append($$anchor, fragment);
  pop();
}
export {
  Error as component
};
