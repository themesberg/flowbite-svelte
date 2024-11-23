import { a as append, t as template, c as comment, b as text } from "./disclose-version.0TX42Q8e.js";
import { p as push, t as template_effect, a as pop, b as get, f as first_child, a6 as state, a7 as set, c as child, n as next, s as sibling, r as reset, d as derived } from "./runtime.BkfDdwap.js";
import { d as delegate, a as set_text } from "./store.B2xZ3Ft6.js";
import { p as prop, i as if_block } from "./props.B7eOu8hW.js";
import { h as action, B as Badge, b as set_class, i as toggle_class } from "./theme.BtjZjf2R.js";
import { B as Button, H as HighlightSvelte, a as Highlight, m as markdown } from "./markdown.Ba9FtS5g.js";
import { r as replaceLibImport, c as copyToClipboard } from "./helpers.B9KbZW0W.js";
import { h as highlightcompo } from "./H1.DunGd_Oq.js";
const handleExpandClick = (_, expand) => {
  set(expand, !get(expand));
};
var root_8 = template(`<button type="button" class="absolute bottom-0 start-0 w-full border-t border-gray-200 bg-gray-100 px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"> </button>`);
var root = template(`<div><div class="relative"><div tabindex="-1"><!> <!></div> <!> <!></div></div>`);
function HighlightCompo($$anchor, $$props) {
  push($$props, true);
  let code = prop($$props, "code", 7), replaceLib = prop($$props, "replaceLib", 3, true);
  if (replaceLib()) {
    code(replaceLibImport(code()));
  }
  let showExpandButton = state(false);
  let expand = state(false);
  const checkOverflow = (el) => {
    const isOverflowingY = el.clientHeight < el.scrollHeight;
    set(showExpandButton, isOverflowingY);
  };
  const $$d = derived(highlightcompo), base = derived(() => get($$d).base), badge = derived(() => get($$d).badge), button = derived(() => get($$d).button);
  let copiedStatus = state(false);
  function handleCopyClick() {
    copyToClipboard(code()).then(() => {
      set(copiedStatus, true);
      setTimeout(
        () => {
          set(copiedStatus, false);
        },
        1e3
      );
    }).catch((err) => {
      console.error("Error in copying:", err);
    });
  }
  var div = root();
  const class_derived = derived(() => get(base)({ className: $$props.class }));
  var div_1 = child(div);
  var div_2 = child(div_1);
  var node = child(div_2);
  if_block(node, () => get(copiedStatus), ($$anchor2) => {
    var class_1 = derived(() => get(badge)({ class: $$props.badgeClass }));
    Badge($$anchor2, {
      get class() {
        return get(class_1);
      },
      color: "green",
      children: ($$anchor3, $$slotProps) => {
        next();
        var text$1 = text("Copied to clipboard");
        append($$anchor3, text$1);
      },
      $$slots: { default: true }
    });
  });
  var node_1 = sibling(node, 2);
  if_block(
    node_1,
    () => $$props.codeLang === "md",
    ($$anchor2) => {
      Highlight($$anchor2, {
        language: markdown,
        get code() {
          return code();
        }
      });
    },
    ($$anchor2) => {
      var fragment_2 = comment();
      var node_2 = first_child(fragment_2);
      if_block(
        node_2,
        code,
        ($$anchor3) => {
          HighlightSvelte($$anchor3, {
            get code() {
              return code();
            }
          });
        },
        ($$anchor3) => {
          var text_1 = text("no code is provided");
          append($$anchor3, text_1);
        },
        true
      );
      append($$anchor2, fragment_2);
    }
  );
  reset(div_2);
  action(div_2, ($$node) => checkOverflow($$node));
  var node_3 = sibling(div_2, 2);
  var class_2 = derived(() => get(button)({ class: $$props.buttonClass }));
  Button(node_3, {
    get class() {
      return get(class_2);
    },
    onclick: handleCopyClick,
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_2 = text("Copy");
      append($$anchor2, text_2);
    },
    $$slots: { default: true }
  });
  var node_4 = sibling(node_3, 2);
  if_block(node_4, () => get(showExpandButton), ($$anchor2) => {
    var button_1 = root_8();
    button_1.__click = [handleExpandClick, expand];
    var text_3 = child(button_1, true);
    reset(button_1);
    template_effect(() => set_text(text_3, get(expand) ? "Collapse code" : "Expand code"));
    append($$anchor2, button_1);
  });
  reset(div_1);
  reset(div);
  template_effect(() => {
    set_class(div, get(class_derived));
    set_class(div_2, `overflow-hidden ${(get(showExpandButton) ? "pb-8" : "") ?? ""}`);
    toggle_class(div_2, "max-h-72", !get(expand));
  });
  append($$anchor, div);
  pop();
}
delegate(["click"]);
export {
  HighlightCompo as H
};
