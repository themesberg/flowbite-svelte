import { c as comment, a as append } from "./disclose-version.0TX42Q8e.js";
import { p as push, a as pop, b as get, f as first_child, d as derived } from "./runtime.BkfDdwap.js";
import { s as snippet } from "./snippet.BDfn85k4.js";
import "./theme.BtjZjf2R.js";
import { a as Heading, b as h2Cls } from "./H1.DunGd_Oq.js";
function H2($$anchor, $$props) {
  push($$props, true);
  const base = derived(() => h2Cls({ className: $$props.class }));
  Heading($$anchor, {
    tag: "h2",
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
  H2 as H
};
