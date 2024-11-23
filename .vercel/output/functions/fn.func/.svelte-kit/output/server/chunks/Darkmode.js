import { Q as push, T as head, a0 as spread_attributes, W as attr, S as pop } from "./index.js";
import { o as darkmode } from "./theme.js";
function Darkmode($$payload, $$props) {
  push();
  let {
    class: className,
    lightIcon,
    darkIcon,
    size = "md",
    ariaLabel = "Dark mode",
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const btnCls = darkmode({ class: className });
  const sizes = { sm: "w-4 h-4", md: "w-5 h-5", lg: "w-6 h-6" };
  head($$payload, ($$payload2) => {
    $$payload2.out += `<script>
    if ("THEME_PREFERENCE_KEY" in localStorage) {
      localStorage.getItem("THEME_PREFERENCE_KEY") === "dark" ? window.document.documentElement.classList.add("dark") : window.document.documentElement.classList.remove("dark");
    } else {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) window.document.documentElement.classList.add("dark");
    }
  <\/script><!---->`;
  });
  $$payload.out += `<button${spread_attributes({
    "aria-label": ariaLabel,
    type: "button",
    ...restProps,
    class: btnCls
  })}><span class="hidden dark:block">`;
  if (lightIcon) {
    $$payload.out += "<!--[-->";
    lightIcon($$payload);
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<svg role="img" aria-label="Light mode"${attr("class", sizes[size])} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1
    0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>`;
  }
  $$payload.out += `<!--]--></span> <span class="block dark:hidden">`;
  if (darkIcon) {
    $$payload.out += "<!--[-->";
    darkIcon($$payload);
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<svg role="img" aria-label="Dark mode"${attr("class", sizes[size])} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>`;
  }
  $$payload.out += `<!--]--></span></button>`;
  pop();
}
export {
  Darkmode as D
};
