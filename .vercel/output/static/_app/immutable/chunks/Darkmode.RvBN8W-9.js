import { a as append, t as template, c as comment, d as template_with_script } from "./disclose-version.0TX42Q8e.js";
import { p as push, t as template_effect, a as pop, s as sibling, f as first_child, c as child, r as reset } from "./runtime.BkfDdwap.js";
import { h as head } from "./store.B2xZ3Ft6.js";
import { p as prop, i as if_block, r as rest_props } from "./props.B7eOu8hW.js";
import { s as snippet } from "./snippet.BDfn85k4.js";
import { d as darkmode, c as set_svg_class, a as set_attributes } from "./theme.BtjZjf2R.js";
var root_1 = template_with_script(
  `<script>
    if ("THEME_PREFERENCE_KEY" in localStorage) {
      localStorage.getItem("THEME_PREFERENCE_KEY") === "dark" ? window.document.documentElement.classList.add("dark") : window.document.documentElement.classList.remove("dark");
    } else {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) window.document.documentElement.classList.add("dark");
    }
  <\/script><!---->`,
  1
);
var root_3 = template(`<svg role="img" aria-label="Light mode" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1
    0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>`);
var root_5 = template(`<svg role="img" aria-label="Dark mode" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>`);
var root = template(`<button><span class="hidden dark:block"><!></span> <span class="block dark:hidden"><!></span></button>`);
function Darkmode($$anchor, $$props) {
  push($$props, true);
  let size = prop($$props, "size", 3, "md"), ariaLabel = prop($$props, "ariaLabel", 3, "Dark mode"), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "class",
    "lightIcon",
    "darkIcon",
    "size",
    "ariaLabel"
  ]);
  const btnCls = darkmode({ class: $$props.class });
  const sizes = { sm: "w-4 h-4", md: "w-5 h-5", lg: "w-6 h-6" };
  const toggleTheme = (ev) => {
    const target = ev.target;
    const isDark = target.ownerDocument.documentElement.classList.toggle("dark");
    if (target.ownerDocument === document)
      localStorage.setItem("THEME_PREFERENCE_KEY", isDark ? "dark" : "light");
  };
  var button = root();
  head(($$anchor2) => {
    var fragment = root_1();
    var node = sibling(first_child(fragment));
    append($$anchor2, fragment);
  });
  let attributes;
  var span = child(button);
  var node_1 = child(span);
  if_block(
    node_1,
    () => $$props.lightIcon,
    ($$anchor2) => {
      var fragment_1 = comment();
      var node_2 = first_child(fragment_1);
      snippet(node_2, () => $$props.lightIcon);
      append($$anchor2, fragment_1);
    },
    ($$anchor2) => {
      var svg = root_3();
      template_effect(() => set_svg_class(svg, sizes[size()]));
      append($$anchor2, svg);
    }
  );
  reset(span);
  var span_1 = sibling(span, 2);
  var node_3 = child(span_1);
  if_block(
    node_3,
    () => $$props.darkIcon,
    ($$anchor2) => {
      var fragment_2 = comment();
      var node_4 = first_child(fragment_2);
      snippet(node_4, () => $$props.darkIcon);
      append($$anchor2, fragment_2);
    },
    ($$anchor2) => {
      var svg_1 = root_5();
      template_effect(() => set_svg_class(svg_1, sizes[size()]));
      append($$anchor2, svg_1);
    }
  );
  reset(span_1);
  reset(button);
  template_effect(() => attributes = set_attributes(button, attributes, {
    onclick: toggleTheme,
    "aria-label": ariaLabel(),
    type: "button",
    ...restProps,
    class: btnCls
  }));
  append($$anchor, button);
  pop();
}
export {
  Darkmode as D
};
