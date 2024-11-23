import { Q as push, a5 as element, W as attr, X as stringify, _ as spread_props, a0 as spread_attributes, S as pop } from "./index.js";
import { d as avatar } from "./theme.js";
import { I as Indicator } from "./Indicator.js";
function Avatar($$payload, $$props) {
  push();
  let {
    children,
    src,
    href,
    target,
    cornerStyle = "circular",
    border = false,
    stacked = false,
    dot,
    class: className,
    alt,
    size = "md",
    onclick,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  dot = dot && {
    placement: "top-right",
    color: "gray",
    size: "lg",
    ...dot
  };
  let avatarClass = avatar({
    cornerStyle,
    border,
    stacked,
    size,
    className
  });
  if (!src || !!href || children || dot) {
    $$payload.out += "<!--[-->";
    const $$tag = href ? "a" : "div";
    element(
      $$payload,
      $$tag,
      () => {
        $$payload.out += `${spread_attributes({
          role: href ? "link" : "img",
          href,
          target,
          ...restProps,
          class: avatarClass
        })}`;
      },
      () => {
        if (src) {
          $$payload.out += "<!--[-->";
          $$payload.out += `<img${attr("alt", alt)}${attr("src", src)}${attr("class", cornerStyle === "circular" ? "rounded-full" : "rounded")}>`;
        } else {
          $$payload.out += "<!--[!-->";
          if (children) {
            $$payload.out += "<!--[-->";
            children($$payload);
            $$payload.out += `<!---->`;
          } else {
            $$payload.out += "<!--[!-->";
            $$payload.out += `<svg${attr("class", `h-full w-full ${stringify(cornerStyle === "circular" ? "rounded-full" : "rounded")}`)} fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>`;
          }
          $$payload.out += `<!--]-->`;
        }
        $$payload.out += `<!--]--> `;
        if (dot) {
          $$payload.out += "<!--[-->";
          Indicator($$payload, spread_props([
            {
              border: true,
              offset: cornerStyle === "circular" ? true : false
            },
            dot
          ]));
        } else {
          $$payload.out += "<!--[!-->";
        }
        $$payload.out += `<!--]-->`;
      }
    );
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<img${spread_attributes({ alt, src, ...restProps, class: avatarClass })} onload="this.__e=event" onerror="this.__e=event">`;
  }
  $$payload.out += `<!--]-->`;
  pop();
}
export {
  Avatar as A
};
