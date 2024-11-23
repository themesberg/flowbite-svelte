import { Q as push, a1 as getContext, W as attr, a0 as spread_attributes, V as escape_html, S as pop, R as setContext, a5 as element, Y as ensure_array_like, _ as spread_props } from "./index.js";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";
import { I as listGroupItem, J as listGroup } from "./theme.js";
function ListgroupItem($$payload, $$props) {
  push();
  let {
    children,
    onclick,
    active,
    current,
    disabled,
    name,
    Icon,
    href,
    currentClass = "text-white bg-primary-700 dark:text-white dark:bg-gray-800",
    normalClass,
    disabledClass = "text-gray-900 bg-gray-100 dark:bg-gray-600 dark:text-gray-400",
    liClass = "py-2 px-4 w-full text-sm font-medium list-none first:rounded-t-lg last:rounded-b-lg",
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  active = getContext("active");
  const itemClass = listGroupItem({
    state: disabled ? "disabled" : current ? "current" : "normal",
    active,
    class: twMerge(liClass, disabled ? disabledClass : current ? currentClass : normalClass, className)
  });
  const buttonClass = tv({
    base: "flex items-center text-left",
    extend: listGroupItem
  })({
    state: disabled ? "disabled" : current ? "current" : "normal",
    active,
    class: itemClass
  });
  const linkClass = tv({ base: "block", extend: listGroupItem })({
    state: disabled ? "disabled" : current ? "current" : "normal",
    active,
    class: itemClass
  });
  if (!active && children) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<li${attr("class", itemClass)}>`;
    children($$payload);
    $$payload.out += `<!----></li>`;
  } else {
    $$payload.out += "<!--[!-->";
    if (href) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<a${spread_attributes({
        ...restProps,
        href,
        class: linkClass,
        "aria-current": current
      })}>${escape_html(name)}</a>`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `<button type="button"${attr("class", buttonClass)}${attr("disabled", disabled, true)}${attr("aria-current", current)}>`;
      if (Icon) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<!---->`;
        Icon($$payload, { class: "me-2.5 h-5 w-5" });
        $$payload.out += `<!---->`;
      } else {
        $$payload.out += "<!--[!-->";
      }
      $$payload.out += `<!--]--> `;
      if (name) {
        $$payload.out += "<!--[-->";
        $$payload.out += `${escape_html(name)}`;
      } else {
        $$payload.out += "<!--[!-->";
        children($$payload);
        $$payload.out += `<!---->`;
      }
      $$payload.out += `<!--]--></button>`;
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function Listgroup($$payload, $$props) {
  push();
  let {
    children,
    items,
    active,
    onclick,
    rounded = true,
    border = true,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const base = listGroup({ rounded, border, className });
  let tag = active ? "div" : "ul";
  setContext("active", active);
  element(
    $$payload,
    tag,
    () => {
      $$payload.out += `${spread_attributes({ ...restProps, class: base })}`;
    },
    () => {
      if (items) {
        $$payload.out += "<!--[-->";
        const each_array = ensure_array_like(items);
        $$payload.out += `<!--[-->`;
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let item = each_array[$$index];
          if (typeof item === "string") {
            $$payload.out += "<!--[-->";
            ListgroupItem($$payload, {
              active,
              onclick,
              children: ($$payload2) => {
                $$payload2.out += `<!---->${escape_html(item)}`;
              },
              $$slots: { default: true }
            });
          } else {
            $$payload.out += "<!--[!-->";
            ListgroupItem($$payload, spread_props([
              { active },
              item,
              {
                onclick: item.onclick ? item.onclick : onclick,
                children: ($$payload2) => {
                  $$payload2.out += `<!---->${escape_html(item)}`;
                },
                $$slots: { default: true }
              }
            ]));
          }
          $$payload.out += `<!--]-->`;
        }
        $$payload.out += `<!--]-->`;
      } else {
        $$payload.out += "<!--[!-->";
        if (children) {
          $$payload.out += "<!--[-->";
          children($$payload);
          $$payload.out += `<!---->`;
        } else {
          $$payload.out += "<!--[!-->";
        }
        $$payload.out += `<!--]-->`;
      }
      $$payload.out += `<!--]-->`;
    }
  );
  pop();
}
export {
  Listgroup as L,
  ListgroupItem as a
};
