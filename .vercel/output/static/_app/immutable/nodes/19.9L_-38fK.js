import { a as append, t as template, c as comment, n as ns_template, b as text } from "../chunks/disclose-version.0TX42Q8e.js";
import { p as push, c as child, s as sibling, r as reset, t as template_effect, a as pop, b as get, d as derived, f as first_child, g as getContext, n as next, a6 as state, u as user_effect, a7 as set } from "../chunks/runtime.BkfDdwap.js";
import { a as set_text } from "../chunks/store.B2xZ3Ft6.js";
import { e as each, i as index } from "../chunks/each.CtHIoDcm.js";
import { p as prop, i as if_block, r as rest_props, b as proxy, c as component } from "../chunks/props.B7eOu8hW.js";
import { b as set_class, a as set_attributes, aY as footerCopyright, aZ as footerIcon, s as set_attribute, t as twMerge, V as uiHelpers } from "../chunks/theme.BtjZjf2R.js";
import { C as CompoAttributesViewer, L as Label, R as Radio } from "../chunks/CompoAttributesViewer.HsPJjrMu.js";
import { D as DynamicCodeBlockHighlight } from "../chunks/DynamicCodeBlockHighlight.BS23lgW_.js";
import { C as CodeWrapper } from "../chunks/CodeWrapper.CdoIAYb8.js";
import { H as H1 } from "../chunks/H1.DunGd_Oq.js";
import { H as H2 } from "../chunks/H2.qsp5CBkK.js";
import { g as getExampleFileName, d as isSvelteOverflow } from "../chunks/helpers.B9KbZW0W.js";
import "../chunks/legacy.DvF4DOPZ.js";
import { F as Footer, b as FooterUl, c as FooterLi, a as FooterBrand } from "../chunks/FooterUl.rLmcpaBi.js";
import { s as snippet } from "../chunks/snippet.BDfn85k4.js";
import { F as FacebookSolid, D as DiscordSolid } from "../chunks/FacebookSolid.DgdrFVUS.js";
import { S as Skeleton, I as ImagePlaceholder } from "../chunks/Skeleton.DR3Y1iyj.js";
import { T as TextPlaceholder } from "../chunks/TextPlaceholder.CtZFdosa.js";
var root_1$8 = template(`<a> </a>`);
var root_2$7 = template(`<span> </span>`);
var root$4 = template(`<span> <!> </span>`);
function FooterCopyright($$anchor, $$props) {
  push($$props, true);
  let copyrightMessage = prop($$props, "copyrightMessage", 3, "All Rights Reserved."), year = prop($$props, "year", 7), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "spanClass",
    "aClass",
    "href",
    "by",
    "copyrightMessage",
    "year"
  ]);
  if (!year()) year((/* @__PURE__ */ new Date()).getFullYear());
  const $$d = derived(footerCopyright), base = derived(() => get($$d).base), link = derived(() => get($$d).link), bySpan = derived(() => get($$d).bySpan);
  var span = root$4();
  const class_derived = derived(() => get(base)({ class: $$props.spanClass }));
  var text2 = child(span);
  var node = sibling(text2);
  if_block(
    node,
    () => $$props.href,
    ($$anchor2) => {
      var a = root_1$8();
      let attributes;
      var text_1 = child(a, true);
      reset(a);
      template_effect(() => {
        attributes = set_attributes(a, attributes, {
          ...restProps,
          href: $$props.href,
          class: get(link)({ class: $$props.aClass })
        });
        set_text(text_1, $$props.by);
      });
      append($$anchor2, a);
    },
    ($$anchor2) => {
      var span_1 = root_2$7();
      const class_derived_1 = derived(() => get(bySpan)());
      var text_2 = child(span_1, true);
      reset(span_1);
      template_effect(() => {
        set_class(span_1, get(class_derived_1));
        set_text(text_2, $$props.by);
      });
      append($$anchor2, span_1);
    }
  );
  var text_3 = sibling(node);
  reset(span);
  template_effect(() => {
    set_class(span, get(class_derived));
    set_text(text2, `© ${year() ?? ""} `);
    set_text(text_3, ` ${copyrightMessage() ?? ""}`);
  });
  append($$anchor, span);
  pop();
}
var root_1$7 = template(`<a><!></a>`);
function FooterIcon($$anchor, $$props) {
  push($$props, true);
  let restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "href",
    "ariaLabel",
    "class"
  ]);
  const aCls = derived(() => footerIcon({ class: $$props.class }));
  var fragment = comment();
  var node = first_child(fragment);
  if_block(
    node,
    () => $$props.href,
    ($$anchor2) => {
      var a = root_1$7();
      let attributes;
      var node_1 = child(a);
      snippet(node_1, () => $$props.children);
      reset(a);
      template_effect(() => attributes = set_attributes(a, attributes, {
        ...restProps,
        href: $$props.href,
        "aria-label": $$props.ariaLabel,
        class: get(aCls)
      }));
      append($$anchor2, a);
    },
    ($$anchor2) => {
      var fragment_1 = comment();
      var node_2 = first_child(fragment_1);
      snippet(node_2, () => $$props.children);
      append($$anchor2, fragment_1);
    }
  );
  append($$anchor, fragment);
  pop();
}
var root_1$6 = ns_template(`<title> </title>`);
var root_2$6 = ns_template(`<desc> </desc>`);
var root$3 = ns_template(`<svg><!><!><path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"></path></svg>`);
function GithubSolid($$anchor, $$props) {
  var _a, _b;
  push($$props, true);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let size = prop($$props, "size", 19, () => ctx.size || "md"), color = prop($$props, "color", 19, () => ctx.color || "currentColor"), ariaLabel = prop($$props, "ariaLabel", 3, "github solid"), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "size",
    "color",
    "title",
    "desc",
    "class",
    "ariaLabel"
  ]);
  let ariaDescribedby = `${((_a = $$props.title) == null ? void 0 : _a.id) || ""} ${((_b = $$props.desc) == null ? void 0 : _b.id) || ""}`;
  const hasDescription = derived(() => {
    var _a2, _b2;
    return !!(((_a2 = $$props.title) == null ? void 0 : _a2.id) || ((_b2 = $$props.desc) == null ? void 0 : _b2.id));
  });
  var svg = root$3();
  let attributes;
  var node = child(svg);
  if_block(node, () => {
    var _a2;
    return ((_a2 = $$props.title) == null ? void 0 : _a2.id) && $$props.title.title;
  }, ($$anchor2) => {
    var title_1 = root_1$6();
    var text2 = child(title_1, true);
    reset(title_1);
    template_effect(() => {
      set_attribute(title_1, "id", $$props.title.id);
      set_text(text2, $$props.title.title);
    });
    append($$anchor2, title_1);
  });
  var node_1 = sibling(node);
  if_block(node_1, () => {
    var _a2;
    return ((_a2 = $$props.desc) == null ? void 0 : _a2.id) && $$props.desc.desc;
  }, ($$anchor2) => {
    var desc_1 = root_2$6();
    var text_1 = child(desc_1, true);
    reset(desc_1);
    template_effect(() => {
      set_attribute(desc_1, "id", $$props.desc.id);
      set_text(text_1, $$props.desc.desc);
    });
    append($$anchor2, desc_1);
  });
  next();
  reset(svg);
  template_effect(() => attributes = set_attributes(
    svg,
    attributes,
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color(),
      ...restProps,
      class: twMerge("shrink-0", sizes[size()], $$props.class),
      "aria-label": ariaLabel(),
      "aria-describedby": get(hasDescription) ? ariaDescribedby : void 0,
      viewBox: "0 0 24 24"
    },
    void 0,
    true
  ));
  append($$anchor, svg);
  pop();
}
var root_1$5 = ns_template(`<title> </title>`);
var root_2$5 = ns_template(`<desc> </desc>`);
var root$2 = ns_template(`<svg><!><!><path fill-rule="evenodd" d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z" clip-rule="evenodd"></path></svg>`);
function TwitterSolid($$anchor, $$props) {
  var _a, _b;
  push($$props, true);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let size = prop($$props, "size", 19, () => ctx.size || "md"), color = prop($$props, "color", 19, () => ctx.color || "currentColor"), ariaLabel = prop($$props, "ariaLabel", 3, "twitter solid"), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "size",
    "color",
    "title",
    "desc",
    "class",
    "ariaLabel"
  ]);
  let ariaDescribedby = `${((_a = $$props.title) == null ? void 0 : _a.id) || ""} ${((_b = $$props.desc) == null ? void 0 : _b.id) || ""}`;
  const hasDescription = derived(() => {
    var _a2, _b2;
    return !!(((_a2 = $$props.title) == null ? void 0 : _a2.id) || ((_b2 = $$props.desc) == null ? void 0 : _b2.id));
  });
  var svg = root$2();
  let attributes;
  var node = child(svg);
  if_block(node, () => {
    var _a2;
    return ((_a2 = $$props.title) == null ? void 0 : _a2.id) && $$props.title.title;
  }, ($$anchor2) => {
    var title_1 = root_1$5();
    var text2 = child(title_1, true);
    reset(title_1);
    template_effect(() => {
      set_attribute(title_1, "id", $$props.title.id);
      set_text(text2, $$props.title.title);
    });
    append($$anchor2, title_1);
  });
  var node_1 = sibling(node);
  if_block(node_1, () => {
    var _a2;
    return ((_a2 = $$props.desc) == null ? void 0 : _a2.id) && $$props.desc.desc;
  }, ($$anchor2) => {
    var desc_1 = root_2$5();
    var text_1 = child(desc_1, true);
    reset(desc_1);
    template_effect(() => {
      set_attribute(desc_1, "id", $$props.desc.id);
      set_text(text_1, $$props.desc.desc);
    });
    append($$anchor2, desc_1);
  });
  next();
  reset(svg);
  template_effect(() => attributes = set_attributes(
    svg,
    attributes,
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color(),
      ...restProps,
      class: twMerge("shrink-0", sizes[size()], $$props.class),
      "aria-label": ariaLabel(),
      "aria-describedby": get(hasDescription) ? ariaDescribedby : void 0,
      viewBox: "0 0 24 24"
    },
    void 0,
    true
  ));
  append($$anchor, svg);
  pop();
}
const __vite_glob_0_0 = '<script lang="ts">\n  import { Footer, FooterLi, FooterUl, FooterCopyright } from "$lib";\n<\/script>\n\n<Footer class="shadow-none" footerType="logo">\n  <div class="sm:flex sm:items-center sm:justify-between">\n    <FooterCopyright href="/" by="Flowbite" year={2022} />\n    <FooterUl class="mt-3 flex flex-wrap items-center text-sm text-gray-500 sm:mt-0 dark:text-gray-400">\n      <FooterLi href="/">About</FooterLi>\n      <FooterLi href="/">Privacy Policy</FooterLi>\n      <FooterLi href="/">Licensing</FooterLi>\n      <FooterLi href="/">Contact</FooterLi>\n    </FooterUl>\n  </div>\n</Footer>\n';
const __vite_glob_0_1 = '<script lang="ts">\n  import { Footer, FooterBrand, FooterLi, FooterUl, FooterCopyright } from "$lib";\n<\/script>\n\n<Footer footerType="logo">\n  <div class="sm:flex sm:items-center sm:justify-between">\n    <FooterBrand href="https://flowbite.com" src="/images/flowbite-svelte-icon-logo.svg" alt="Flowbite Logo" name="Flowbite" />\n    <FooterUl class="mb-6 flex flex-wrap items-center text-sm text-gray-500 sm:mb-0 dark:text-gray-400">\n      <FooterLi href="/">About</FooterLi>\n      <FooterLi href="/">Privacy Policy</FooterLi>\n      <FooterLi href="/">Licensing</FooterLi>\n      <FooterLi href="/">Contact</FooterLi>\n    </FooterUl>\n  </div>\n  <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />\n  <FooterCopyright href="/" by="Flowbite™" />\n</Footer>\n';
const __vite_glob_0_2 = '<script>\n  import { Footer, FooterBrand, FooterLi, FooterUl, FooterCopyright, FooterIcon } from "$lib";\n<\/script>\n';
const __vite_glob_0_3 = '<script lang="ts">\n  import { Footer, FooterLi, FooterUl, FooterCopyright, FooterIcon } from "$lib";\n  import { FacebookSolid, GithubSolid, DiscordSolid, TwitterSolid } from "flowbite-svelte-icons";\n<\/script>\n\n<Footer footerType="sitemap">\n  <div class="grid grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">\n    <div>\n      <h2 class="mb-6 text-sm font-semibold uppercase text-gray-400">Company</h2>\n      <FooterUl class="text-gray-300">\n        <FooterLi liClass="mb-4" href="/">About</FooterLi>\n        <FooterLi liClass="mb-4" href="/">Careers</FooterLi>\n        <FooterLi liClass="mb-4" href="/">Brand Center</FooterLi>\n        <FooterLi liClass="mb-4" href="/">Blog</FooterLi>\n      </FooterUl>\n    </div>\n    <div>\n      <h2 class="mb-6 text-sm font-semibold uppercase text-gray-400">Download</h2>\n      <FooterUl class="text-gray-300">\n        <FooterLi liClass="mb-4" href="/">Discord Server</FooterLi>\n        <FooterLi liClass="mb-4" href="/">Twitter</FooterLi>\n        <FooterLi liClass="mb-4" href="/">Facebook</FooterLi>\n        <FooterLi liClass="mb-4" href="/">Contact Us</FooterLi>\n      </FooterUl>\n    </div>\n    <div>\n      <h2 class="mb-6 text-sm font-semibold uppercase text-gray-400">Legal</h2>\n      <FooterUl class="text-gray-300">\n        <FooterLi liClass="mb-4" href="/">Privacy Policy</FooterLi>\n        <FooterLi liClass="mb-4" href="/">Licensing</FooterLi>\n        <FooterLi liClass="mb-4" href="/">Terms & Conditions</FooterLi>\n      </FooterUl>\n    </div>\n    <div>\n      <h2 class="mb-6 text-sm font-semibold uppercase text-gray-400">Download</h2>\n      <FooterUl class="text-gray-300">\n        <FooterLi liClass="mb-4" href="/">iOS</FooterLi>\n        <FooterLi liClass="mb-4" href="/">Android</FooterLi>\n        <FooterLi liClass="mb-4" href="/">Windows</FooterLi>\n        <FooterLi liClass="mb-4" href="/">MacOS</FooterLi>\n      </FooterUl>\n    </div>\n  </div>\n  <div class="bg-gray-700 px-4 py-6 md:flex md:items-center md:justify-between">\n    <FooterCopyright spanClass="text-sm text-gray-300 sm:text-center" href="/" by="Flowbite™" />\n    <div class="mt-4 flex space-x-6 sm:justify-center md:mt-0 rtl:space-x-reverse">\n      <FooterIcon href="/">\n        <FacebookSolid class="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" />\n      </FooterIcon>\n      <FooterIcon href="/">\n        <DiscordSolid class="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" />\n      </FooterIcon>\n      <FooterIcon href="/">\n        <TwitterSolid class="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" />\n      </FooterIcon>\n      <FooterIcon href="/">\n        <GithubSolid class="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" />\n      </FooterIcon>\n    </div>\n  </div>\n</Footer>\n';
const __vite_glob_0_4 = '<script lang="ts">\n  import { Footer, FooterBrand, FooterLi, FooterUl, FooterCopyright, FooterIcon } from "$lib";\n  import { FacebookSolid, GithubSolid, DiscordSolid, TwitterSolid } from "flowbite-svelte-icons";\n<\/script>\n\n<Footer footerType="socialmedia">\n  <div class="md:flex md:justify-between">\n    <div class="mb-6 md:mb-0">\n      <FooterBrand href="https://flowbite.com" src="/images/flowbite-svelte-icon-logo.svg" alt="Flowbite Logo" name="Flowbite" />\n    </div>\n    <div class="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">\n      <div>\n        <h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Resources</h2>\n        <FooterUl>\n          <FooterLi liClass="mb-4" href="/">Flowbite</FooterLi>\n          <FooterLi liClass="mb-4" href="/">Tailwind CSS</FooterLi>\n        </FooterUl>\n      </div>\n      <div>\n        <h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Follow us</h2>\n        <FooterUl>\n          <FooterLi liClass="mb-4" href="/">GitHub</FooterLi>\n          <FooterLi liClass="mb-4" href="/">Discord</FooterLi>\n        </FooterUl>\n      </div>\n      <div>\n        <h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Legal</h2>\n        <FooterUl>\n          <FooterLi liClass="mb-4" href="/">Privacy Policy</FooterLi>\n          <FooterLi liClass="mb-4" href="/">Terms & Conditions</FooterLi>\n        </FooterUl>\n      </div>\n    </div>\n  </div>\n  <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />\n  <div class="sm:flex sm:items-center sm:justify-between">\n    <FooterCopyright href="/" by="Flowbite™" />\n    <div class="mt-4 flex space-x-6 sm:mt-0 sm:justify-center rtl:space-x-reverse">\n      <FooterIcon href="/">\n        <FacebookSolid class="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" />\n      </FooterIcon>\n      <FooterIcon href="/">\n        <DiscordSolid class="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" />\n      </FooterIcon>\n      <FooterIcon href="/">\n        <TwitterSolid class="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" />\n      </FooterIcon>\n      <FooterIcon href="/">\n        <GithubSolid class="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" />\n      </FooterIcon>\n    </div>\n  </div>\n</Footer>\n';
const __vite_glob_0_5 = '<script lang="ts">\n  import { Footer, FooterCopyright, FooterUl, FooterLi, Skeleton, ImagePlaceholder, TextPlaceholder } from "$lib";\n<\/script>\n\n<div class="relative p-6">\n  <div style="height:300px;" class="overflow-auto">\n    <Skeleton class="my-8" />\n    <ImagePlaceholder class="my-8" />\n    <TextPlaceholder class="my-8" />\n  </div>\n  <Footer footerType="sticky" class="absolute">\n    <FooterCopyright href="/" by="Flowbite™" />\n    <FooterUl class="mt-3 flex flex-wrap items-center text-sm text-gray-500 sm:mt-0 dark:text-gray-400">\n      <FooterLi href="/">About</FooterLi>\n      <FooterLi href="/">Privacy Policy</FooterLi>\n      <FooterLi href="/">Licensing</FooterLi>\n      <FooterLi href="/">Contact</FooterLi>\n    </FooterUl>\n  </Footer>\n</div>\n';
var root_2$4 = template(`<!> <!> <!> <!>`, 1);
var root_1$4 = template(`<div class="sm:flex sm:items-center sm:justify-between"><!> <!></div>`);
function Default($$anchor) {
  Footer($$anchor, {
    class: "shadow-none",
    footerType: "logo",
    children: ($$anchor2, $$slotProps) => {
      var div = root_1$4();
      var node = child(div);
      FooterCopyright(node, { href: "/", by: "Flowbite", year: 2022 });
      var node_1 = sibling(node, 2);
      FooterUl(node_1, {
        class: "mt-3 flex flex-wrap items-center text-sm text-gray-500 sm:mt-0 dark:text-gray-400",
        children: ($$anchor3, $$slotProps2) => {
          var fragment_1 = root_2$4();
          var node_2 = first_child(fragment_1);
          FooterLi(node_2, {
            href: "/",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text$1 = text("About");
              append($$anchor4, text$1);
            },
            $$slots: { default: true }
          });
          var node_3 = sibling(node_2, 2);
          FooterLi(node_3, {
            href: "/",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_1 = text("Privacy Policy");
              append($$anchor4, text_1);
            },
            $$slots: { default: true }
          });
          var node_4 = sibling(node_3, 2);
          FooterLi(node_4, {
            href: "/",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_2 = text("Licensing");
              append($$anchor4, text_2);
            },
            $$slots: { default: true }
          });
          var node_5 = sibling(node_4, 2);
          FooterLi(node_5, {
            href: "/",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_3 = text("Contact");
              append($$anchor4, text_3);
            },
            $$slots: { default: true }
          });
          append($$anchor3, fragment_1);
        },
        $$slots: { default: true }
      });
      reset(div);
      append($$anchor2, div);
    },
    $$slots: { default: true }
  });
}
var root_2$3 = template(`<!> <!> <!> <!>`, 1);
var root_1$3 = template(`<div class="sm:flex sm:items-center sm:justify-between"><!> <!></div> <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700"> <!>`, 1);
function Logo($$anchor) {
  Footer($$anchor, {
    footerType: "logo",
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1$3();
      var div = first_child(fragment_1);
      var node = child(div);
      FooterBrand(node, {
        href: "https://flowbite.com",
        src: "/images/flowbite-svelte-icon-logo.svg",
        alt: "Flowbite Logo",
        name: "Flowbite"
      });
      var node_1 = sibling(node, 2);
      FooterUl(node_1, {
        class: "mb-6 flex flex-wrap items-center text-sm text-gray-500 sm:mb-0 dark:text-gray-400",
        children: ($$anchor3, $$slotProps2) => {
          var fragment_2 = root_2$3();
          var node_2 = first_child(fragment_2);
          FooterLi(node_2, {
            href: "/",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text$1 = text("About");
              append($$anchor4, text$1);
            },
            $$slots: { default: true }
          });
          var node_3 = sibling(node_2, 2);
          FooterLi(node_3, {
            href: "/",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_1 = text("Privacy Policy");
              append($$anchor4, text_1);
            },
            $$slots: { default: true }
          });
          var node_4 = sibling(node_3, 2);
          FooterLi(node_4, {
            href: "/",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_2 = text("Licensing");
              append($$anchor4, text_2);
            },
            $$slots: { default: true }
          });
          var node_5 = sibling(node_4, 2);
          FooterLi(node_5, {
            href: "/",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_3 = text("Contact");
              append($$anchor4, text_3);
            },
            $$slots: { default: true }
          });
          append($$anchor3, fragment_2);
        },
        $$slots: { default: true }
      });
      reset(div);
      var node_6 = sibling(div, 4);
      FooterCopyright(node_6, { href: "/", by: "Flowbite™" });
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
}
var root_2$2 = template(`<!> <!> <!> <!>`, 1);
var root_7 = template(`<!> <!> <!> <!>`, 1);
var root_12 = template(`<!> <!> <!>`, 1);
var root_16 = template(`<!> <!> <!> <!>`, 1);
var root_1$2 = template(`<div class="grid grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4"><div><h2 class="mb-6 text-sm font-semibold uppercase text-gray-400">Company</h2> <!></div> <div><h2 class="mb-6 text-sm font-semibold uppercase text-gray-400">Download</h2> <!></div> <div><h2 class="mb-6 text-sm font-semibold uppercase text-gray-400">Legal</h2> <!></div> <div><h2 class="mb-6 text-sm font-semibold uppercase text-gray-400">Download</h2> <!></div></div> <div class="bg-gray-700 px-4 py-6 md:flex md:items-center md:justify-between"><!> <div class="mt-4 flex space-x-6 sm:justify-center md:mt-0 rtl:space-x-reverse"><!> <!> <!> <!></div></div>`, 1);
function SitemapLink($$anchor) {
  Footer($$anchor, {
    footerType: "sitemap",
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1$2();
      var div = first_child(fragment_1);
      var div_1 = child(div);
      var node = sibling(child(div_1), 2);
      FooterUl(node, {
        class: "text-gray-300",
        children: ($$anchor3, $$slotProps2) => {
          var fragment_2 = root_2$2();
          var node_1 = first_child(fragment_2);
          FooterLi(node_1, {
            liClass: "mb-4",
            href: "/",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text$1 = text("About");
              append($$anchor4, text$1);
            },
            $$slots: { default: true }
          });
          var node_2 = sibling(node_1, 2);
          FooterLi(node_2, {
            liClass: "mb-4",
            href: "/",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_1 = text("Careers");
              append($$anchor4, text_1);
            },
            $$slots: { default: true }
          });
          var node_3 = sibling(node_2, 2);
          FooterLi(node_3, {
            liClass: "mb-4",
            href: "/",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_2 = text("Brand Center");
              append($$anchor4, text_2);
            },
            $$slots: { default: true }
          });
          var node_4 = sibling(node_3, 2);
          FooterLi(node_4, {
            liClass: "mb-4",
            href: "/",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_3 = text("Blog");
              append($$anchor4, text_3);
            },
            $$slots: { default: true }
          });
          append($$anchor3, fragment_2);
        },
        $$slots: { default: true }
      });
      reset(div_1);
      var div_2 = sibling(div_1, 2);
      var node_5 = sibling(child(div_2), 2);
      FooterUl(node_5, {
        class: "text-gray-300",
        children: ($$anchor3, $$slotProps2) => {
          var fragment_3 = root_7();
          var node_6 = first_child(fragment_3);
          FooterLi(node_6, {
            liClass: "mb-4",
            href: "/",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_4 = text("Discord Server");
              append($$anchor4, text_4);
            },
            $$slots: { default: true }
          });
          var node_7 = sibling(node_6, 2);
          FooterLi(node_7, {
            liClass: "mb-4",
            href: "/",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_5 = text("Twitter");
              append($$anchor4, text_5);
            },
            $$slots: { default: true }
          });
          var node_8 = sibling(node_7, 2);
          FooterLi(node_8, {
            liClass: "mb-4",
            href: "/",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_6 = text("Facebook");
              append($$anchor4, text_6);
            },
            $$slots: { default: true }
          });
          var node_9 = sibling(node_8, 2);
          FooterLi(node_9, {
            liClass: "mb-4",
            href: "/",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_7 = text("Contact Us");
              append($$anchor4, text_7);
            },
            $$slots: { default: true }
          });
          append($$anchor3, fragment_3);
        },
        $$slots: { default: true }
      });
      reset(div_2);
      var div_3 = sibling(div_2, 2);
      var node_10 = sibling(child(div_3), 2);
      FooterUl(node_10, {
        class: "text-gray-300",
        children: ($$anchor3, $$slotProps2) => {
          var fragment_4 = root_12();
          var node_11 = first_child(fragment_4);
          FooterLi(node_11, {
            liClass: "mb-4",
            href: "/",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_8 = text("Privacy Policy");
              append($$anchor4, text_8);
            },
            $$slots: { default: true }
          });
          var node_12 = sibling(node_11, 2);
          FooterLi(node_12, {
            liClass: "mb-4",
            href: "/",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_9 = text("Licensing");
              append($$anchor4, text_9);
            },
            $$slots: { default: true }
          });
          var node_13 = sibling(node_12, 2);
          FooterLi(node_13, {
            liClass: "mb-4",
            href: "/",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_10 = text("Terms & Conditions");
              append($$anchor4, text_10);
            },
            $$slots: { default: true }
          });
          append($$anchor3, fragment_4);
        },
        $$slots: { default: true }
      });
      reset(div_3);
      var div_4 = sibling(div_3, 2);
      var node_14 = sibling(child(div_4), 2);
      FooterUl(node_14, {
        class: "text-gray-300",
        children: ($$anchor3, $$slotProps2) => {
          var fragment_5 = root_16();
          var node_15 = first_child(fragment_5);
          FooterLi(node_15, {
            liClass: "mb-4",
            href: "/",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_11 = text("iOS");
              append($$anchor4, text_11);
            },
            $$slots: { default: true }
          });
          var node_16 = sibling(node_15, 2);
          FooterLi(node_16, {
            liClass: "mb-4",
            href: "/",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_12 = text("Android");
              append($$anchor4, text_12);
            },
            $$slots: { default: true }
          });
          var node_17 = sibling(node_16, 2);
          FooterLi(node_17, {
            liClass: "mb-4",
            href: "/",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_13 = text("Windows");
              append($$anchor4, text_13);
            },
            $$slots: { default: true }
          });
          var node_18 = sibling(node_17, 2);
          FooterLi(node_18, {
            liClass: "mb-4",
            href: "/",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_14 = text("MacOS");
              append($$anchor4, text_14);
            },
            $$slots: { default: true }
          });
          append($$anchor3, fragment_5);
        },
        $$slots: { default: true }
      });
      reset(div_4);
      reset(div);
      var div_5 = sibling(div, 2);
      var node_19 = child(div_5);
      FooterCopyright(node_19, {
        spanClass: "text-sm text-gray-300 sm:text-center",
        href: "/",
        by: "Flowbite™"
      });
      var div_6 = sibling(node_19, 2);
      var node_20 = child(div_6);
      FooterIcon(node_20, {
        href: "/",
        children: ($$anchor3, $$slotProps2) => {
          FacebookSolid($$anchor3, {
            class: "h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
          });
        },
        $$slots: { default: true }
      });
      var node_21 = sibling(node_20, 2);
      FooterIcon(node_21, {
        href: "/",
        children: ($$anchor3, $$slotProps2) => {
          DiscordSolid($$anchor3, {
            class: "h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
          });
        },
        $$slots: { default: true }
      });
      var node_22 = sibling(node_21, 2);
      FooterIcon(node_22, {
        href: "/",
        children: ($$anchor3, $$slotProps2) => {
          TwitterSolid($$anchor3, {
            class: "h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
          });
        },
        $$slots: { default: true }
      });
      var node_23 = sibling(node_22, 2);
      FooterIcon(node_23, {
        href: "/",
        children: ($$anchor3, $$slotProps2) => {
          GithubSolid($$anchor3, {
            class: "h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
          });
        },
        $$slots: { default: true }
      });
      reset(div_6);
      reset(div_5);
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
}
var root_2$1 = template(`<!> <!>`, 1);
var root_5 = template(`<!> <!>`, 1);
var root_8 = template(`<!> <!>`, 1);
var root_1$1 = template(`<div class="md:flex md:justify-between"><div class="mb-6 md:mb-0"><!></div> <div class="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6"><div><h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Resources</h2> <!></div> <div><h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Follow us</h2> <!></div> <div><h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Legal</h2> <!></div></div></div> <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700"> <div class="sm:flex sm:items-center sm:justify-between"><!> <div class="mt-4 flex space-x-6 sm:mt-0 sm:justify-center rtl:space-x-reverse"><!> <!> <!> <!></div></div>`, 1);
function SocialMedia($$anchor) {
  Footer($$anchor, {
    footerType: "socialmedia",
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1$1();
      var div = first_child(fragment_1);
      var div_1 = child(div);
      var node = child(div_1);
      FooterBrand(node, {
        href: "https://flowbite.com",
        src: "/images/flowbite-svelte-icon-logo.svg",
        alt: "Flowbite Logo",
        name: "Flowbite"
      });
      reset(div_1);
      var div_2 = sibling(div_1, 2);
      var div_3 = child(div_2);
      var node_1 = sibling(child(div_3), 2);
      FooterUl(node_1, {
        children: ($$anchor3, $$slotProps2) => {
          var fragment_2 = root_2$1();
          var node_2 = first_child(fragment_2);
          FooterLi(node_2, {
            liClass: "mb-4",
            href: "/",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text$1 = text("Flowbite");
              append($$anchor4, text$1);
            },
            $$slots: { default: true }
          });
          var node_3 = sibling(node_2, 2);
          FooterLi(node_3, {
            liClass: "mb-4",
            href: "/",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_1 = text("Tailwind CSS");
              append($$anchor4, text_1);
            },
            $$slots: { default: true }
          });
          append($$anchor3, fragment_2);
        },
        $$slots: { default: true }
      });
      reset(div_3);
      var div_4 = sibling(div_3, 2);
      var node_4 = sibling(child(div_4), 2);
      FooterUl(node_4, {
        children: ($$anchor3, $$slotProps2) => {
          var fragment_3 = root_5();
          var node_5 = first_child(fragment_3);
          FooterLi(node_5, {
            liClass: "mb-4",
            href: "/",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_2 = text("GitHub");
              append($$anchor4, text_2);
            },
            $$slots: { default: true }
          });
          var node_6 = sibling(node_5, 2);
          FooterLi(node_6, {
            liClass: "mb-4",
            href: "/",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_3 = text("Discord");
              append($$anchor4, text_3);
            },
            $$slots: { default: true }
          });
          append($$anchor3, fragment_3);
        },
        $$slots: { default: true }
      });
      reset(div_4);
      var div_5 = sibling(div_4, 2);
      var node_7 = sibling(child(div_5), 2);
      FooterUl(node_7, {
        children: ($$anchor3, $$slotProps2) => {
          var fragment_4 = root_8();
          var node_8 = first_child(fragment_4);
          FooterLi(node_8, {
            liClass: "mb-4",
            href: "/",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_4 = text("Privacy Policy");
              append($$anchor4, text_4);
            },
            $$slots: { default: true }
          });
          var node_9 = sibling(node_8, 2);
          FooterLi(node_9, {
            liClass: "mb-4",
            href: "/",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_5 = text("Terms & Conditions");
              append($$anchor4, text_5);
            },
            $$slots: { default: true }
          });
          append($$anchor3, fragment_4);
        },
        $$slots: { default: true }
      });
      reset(div_5);
      reset(div_2);
      reset(div);
      var div_6 = sibling(div, 4);
      var node_10 = child(div_6);
      FooterCopyright(node_10, { href: "/", by: "Flowbite™" });
      var div_7 = sibling(node_10, 2);
      var node_11 = child(div_7);
      FooterIcon(node_11, {
        href: "/",
        children: ($$anchor3, $$slotProps2) => {
          FacebookSolid($$anchor3, {
            class: "h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
          });
        },
        $$slots: { default: true }
      });
      var node_12 = sibling(node_11, 2);
      FooterIcon(node_12, {
        href: "/",
        children: ($$anchor3, $$slotProps2) => {
          DiscordSolid($$anchor3, {
            class: "h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
          });
        },
        $$slots: { default: true }
      });
      var node_13 = sibling(node_12, 2);
      FooterIcon(node_13, {
        href: "/",
        children: ($$anchor3, $$slotProps2) => {
          TwitterSolid($$anchor3, {
            class: "h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
          });
        },
        $$slots: { default: true }
      });
      var node_14 = sibling(node_13, 2);
      FooterIcon(node_14, {
        href: "/",
        children: ($$anchor3, $$slotProps2) => {
          GithubSolid($$anchor3, {
            class: "h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
          });
        },
        $$slots: { default: true }
      });
      reset(div_7);
      reset(div_6);
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
}
var root_2 = template(`<!> <!> <!> <!>`, 1);
var root_1 = template(`<!> <!>`, 1);
var root$1 = template(`<div class="relative p-6"><div style="height:300px;" class="overflow-auto"><!> <!> <!></div> <!></div>`);
function Sticky($$anchor) {
  var div = root$1();
  var div_1 = child(div);
  var node = child(div_1);
  Skeleton(node, { class: "my-8" });
  var node_1 = sibling(node, 2);
  ImagePlaceholder(node_1, { class: "my-8" });
  var node_2 = sibling(node_1, 2);
  TextPlaceholder(node_2, { class: "my-8" });
  reset(div_1);
  var node_3 = sibling(div_1, 2);
  Footer(node_3, {
    footerType: "sticky",
    class: "absolute",
    children: ($$anchor2, $$slotProps) => {
      var fragment = root_1();
      var node_4 = first_child(fragment);
      FooterCopyright(node_4, { href: "/", by: "Flowbite™" });
      var node_5 = sibling(node_4, 2);
      FooterUl(node_5, {
        class: "mt-3 flex flex-wrap items-center text-sm text-gray-500 sm:mt-0 dark:text-gray-400",
        children: ($$anchor3, $$slotProps2) => {
          var fragment_1 = root_2();
          var node_6 = first_child(fragment_1);
          FooterLi(node_6, {
            href: "/",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text$1 = text("About");
              append($$anchor4, text$1);
            },
            $$slots: { default: true }
          });
          var node_7 = sibling(node_6, 2);
          FooterLi(node_7, {
            href: "/",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_1 = text("Privacy Policy");
              append($$anchor4, text_1);
            },
            $$slots: { default: true }
          });
          var node_8 = sibling(node_7, 2);
          FooterLi(node_8, {
            href: "/",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_2 = text("Licensing");
              append($$anchor4, text_2);
            },
            $$slots: { default: true }
          });
          var node_9 = sibling(node_8, 2);
          FooterLi(node_9, {
            href: "/",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_3 = text("Contact");
              append($$anchor4, text_3);
            },
            $$slots: { default: true }
          });
          append($$anchor3, fragment_1);
        },
        $$slots: { default: true }
      });
      append($$anchor2, fragment);
    },
    $$slots: { default: true }
  });
  reset(div);
  append($$anchor, div);
}
var root_3 = template(`<div class="mb-12 flex flex-wrap"><!> <!></div> <!>`, 1);
var root = template(`<!> <!> <!> <!>`, 1);
function _page($$anchor, $$props) {
  push($$props, true);
  const dirName = "footer";
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/Default.svelte": __vite_glob_0_0,
    "./examples/Logo.svelte": __vite_glob_0_1,
    "./examples/Setup.svelte": __vite_glob_0_2,
    "./examples/SitemapLink.svelte": __vite_glob_0_3,
    "./examples/SocialMedia.svelte": __vite_glob_0_4,
    "./examples/Sticky.svelte": __vite_glob_0_5
  });
  const exampleArr = [
    {
      name: "Default",
      component: Default
    },
    {
      name: "Logo",
      component: Logo
    },
    {
      name: "Sitemap link",
      component: SitemapLink
    },
    {
      name: "Social media",
      component: SocialMedia
    },
    {
      name: "Sticky",
      component: Sticky
    }
  ];
  let selectedExample = state(proxy(exampleArr[0].name));
  let svelteCode = derived(() => getExampleFileName(get(selectedExample), exampleArr));
  function findObject(arr, name) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = derived(() => findObject(exampleArr, get(selectedExample)));
  let codeBlock = uiHelpers();
  let exampleExpand = state(false);
  let showExpandButton = derived(() => isSvelteOverflow(get(svelteCode), exampleModules));
  const handleExpandClick = () => {
    set(exampleExpand, !get(exampleExpand));
  };
  user_effect(() => {
    set(exampleExpand, proxy(codeBlock.isOpen));
  });
  var fragment = root();
  var node = first_child(fragment);
  H1(node, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text("Footer");
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
  var node_1 = sibling(node, 2);
  {
    const codeblock = ($$anchor2) => {
      DynamicCodeBlockHighlight($$anchor2, {
        replaceLib: true,
        handleExpandClick,
        get expand() {
          return get(exampleExpand);
        },
        get showExpandButton() {
          return get(showExpandButton);
        },
        get code() {
          return exampleModules[`./examples/${get(svelteCode)}`];
        }
      });
    };
    CodeWrapper(node_1, {
      codeblock,
      children: ($$anchor2, $$slotProps) => {
        var fragment_2 = root_3();
        var div = first_child(fragment_2);
        var node_2 = child(div);
        Label(node_2, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_1 = text("Example");
            append($$anchor3, text_1);
          },
          $$slots: { default: true }
        });
        var node_3 = sibling(node_2, 2);
        each(node_3, 17, () => exampleArr, index, ($$anchor3, style) => {
          Radio($$anchor3, {
            labelClass: "w-32 my-1",
            onclick: () => set(exampleExpand, false),
            name: "block_style",
            get group() {
              return get(selectedExample);
            },
            set group($$value) {
              set(selectedExample, proxy($$value));
            },
            get value() {
              return get(style).name;
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_2 = text();
              template_effect(() => set_text(text_2, get(style).name));
              append($$anchor4, text_2);
            },
            $$slots: { default: true }
          });
        });
        reset(div);
        var node_4 = sibling(div, 2);
        component(node_4, () => get(SelectedComponent), ($$anchor3, $$component) => {
          $$component($$anchor3, {});
        });
        append($$anchor2, fragment_2);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_5 = sibling(node_1, 2);
  H2(node_5, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_3 = text("Component data");
      append($$anchor2, text_3);
    },
    $$slots: { default: true }
  });
  var node_6 = sibling(node_5, 2);
  CompoAttributesViewer(node_6, { dirName });
  append($$anchor, fragment);
  pop();
}
export {
  _page as component
};
