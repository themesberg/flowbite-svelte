import { c as comment, a as append, t as template, n as ns_template, b as text } from "../chunks/disclose-version.0TX42Q8e.js";
import { p as push, f as first_child, c as child, b as get, r as reset, s as sibling, t as template_effect, a as pop, d as derived, g as getContext, u as user_effect, a7 as set, n as next, a6 as state, h as noop } from "../chunks/runtime.BkfDdwap.js";
import { a as set_text } from "../chunks/store.B2xZ3Ft6.js";
import { e as each, i as index } from "../chunks/each.CtHIoDcm.js";
import { p as prop, i as if_block, r as rest_props, b as proxy, c as component } from "../chunks/props.B7eOu8hW.js";
import { b as set_class, a as set_attributes, al as megamenu, s as set_attribute, t as twMerge, am as Navbar, V as uiHelpers } from "../chunks/theme.BtjZjf2R.js";
import { C as CompoAttributesViewer, L as Label, R as Radio } from "../chunks/CompoAttributesViewer.HsPJjrMu.js";
import { D as DynamicCodeBlockHighlight } from "../chunks/DynamicCodeBlockHighlight.BS23lgW_.js";
import { C as CodeWrapper } from "../chunks/CodeWrapper.CdoIAYb8.js";
import { H as H1 } from "../chunks/H1.DunGd_Oq.js";
import { H as H2 } from "../chunks/H2.qsp5CBkK.js";
import { g as getExampleFileName, d as isSvelteOverflow } from "../chunks/helpers.B9KbZW0W.js";
import { s as snippet } from "../chunks/snippet.BDfn85k4.js";
import { N as NavUl, a as NavLi, b as NavBrand } from "../chunks/NavUl.D3IokGIf.js";
import { C as ChevronDownOutline } from "../chunks/ChevronDownOutline.C3ncqrR6.js";
var root_2$3 = template(`<li><!></li>`);
var root_4$2 = template(`<div><!></div>`);
var root_1$1 = template(`<div><div><ul></ul> <!></div></div>`);
function MegaMenu($$anchor, $$props) {
  push($$props, true);
  let items = prop($$props, "items", 19, () => []), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "footer",
    "items",
    "full",
    "dropdownStatus",
    "class"
  ]);
  const $$d = derived(megamenu), base = derived(() => get($$d).base), div = derived(() => get($$d).div), ul = derived(() => get($$d).ul), footerDiv = derived(() => get($$d).footerDiv);
  var fragment = comment();
  var node = first_child(fragment);
  if_block(node, () => $$props.dropdownStatus, ($$anchor2) => {
    var div_1 = root_1$1();
    let attributes;
    var div_2 = child(div_1);
    const class_derived = derived(() => get(div)());
    var ul_1 = child(div_2);
    const class_derived_1 = derived(() => get(ul)());
    each(
      ul_1,
      21,
      items,
      index,
      ($$anchor3, item, index2) => {
        var li = root_2$3();
        var node_1 = child(li);
        snippet(node_1, () => $$props.children, () => ({ item: get(item), index: index2 }));
        reset(li);
        append($$anchor3, li);
      },
      ($$anchor3) => {
        var fragment_1 = comment();
        var node_2 = first_child(fragment_1);
        snippet(node_2, () => $$props.children, () => ({ item: items()[0], index: 0 }));
        append($$anchor3, fragment_1);
      }
    );
    reset(ul_1);
    var node_3 = sibling(ul_1, 2);
    if_block(node_3, () => $$props.full && $$props.footer, ($$anchor3) => {
      var div_3 = root_4$2();
      const class_derived_2 = derived(() => get(footerDiv)());
      var node_4 = child(div_3);
      snippet(node_4, () => $$props.footer);
      reset(div_3);
      template_effect(() => set_class(div_3, get(class_derived_2)));
      append($$anchor3, div_3);
    });
    reset(div_2);
    reset(div_1);
    template_effect(() => {
      attributes = set_attributes(div_1, attributes, {
        ...restProps,
        class: get(base)({ className: $$props.class })
      });
      set_class(div_2, get(class_derived));
      set_class(ul_1, get(class_derived_1));
    });
    append($$anchor2, div_1);
  });
  append($$anchor, fragment);
  pop();
}
var root_1 = ns_template(`<title> </title>`);
var root_2$2 = ns_template(`<desc> </desc>`);
var root$3 = ns_template(`<svg><!><!><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path></svg>`);
function UserCircleOutline($$anchor, $$props) {
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
  let size = prop($$props, "size", 19, () => ctx.size || "md"), color = prop($$props, "color", 19, () => ctx.color || "currentColor"), strokeWidth = prop($$props, "strokeWidth", 19, () => ctx.strokeWidth || "2"), ariaLabel = prop($$props, "ariaLabel", 3, "user circle outline"), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "size",
    "color",
    "title",
    "strokeWidth",
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
    var title_1 = root_1();
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
    var desc_1 = root_2$2();
    var text_1 = child(desc_1, true);
    reset(desc_1);
    template_effect(() => {
      set_attribute(desc_1, "id", $$props.desc.id);
      set_text(text_1, $$props.desc.desc);
    });
    append($$anchor2, desc_1);
  });
  var path = sibling(node_1);
  reset(svg);
  template_effect(() => {
    attributes = set_attributes(
      svg,
      attributes,
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        color: color(),
        ...restProps,
        class: twMerge("shrink-0", sizes[size()], $$props.class),
        "aria-label": ariaLabel(),
        "aria-describedby": get(hasDescription) ? ariaDescribedby : void 0,
        viewBox: "0 0 24 24"
      },
      void 0,
      true
    );
    set_attribute(path, "stroke-width", strokeWidth());
  });
  append($$anchor, svg);
  pop();
}
const __vite_glob_0_0 = '<script>\n  import { Navbar, NavBrand, NavUl, NavLi, MegaMenu, uiHelpers } from "$lib";\n  import { ChevronDownOutline } from "flowbite-svelte-icons";\n  let menu = [\n    { name: "About us", href: "/about" },\n    { name: "Blog", href: "/blog" },\n    { name: "Contact us", href: "/contact" },\n    { name: "Library", href: "/library" },\n    { name: "Newsletter", href: "/news" },\n    { name: "Support Center", href: "/support" },\n    { name: "Resources", href: "/resource" },\n    { name: "Playground", href: "/play" },\n    { name: "Terms", href: "/terms" },\n    { name: "Pro Version", href: "/pro" },\n    { name: "License", href: "/license" }\n  ];\n  let nav = uiHelpers();\n  let navStatus = $state(false);\n  let toggleNav = nav.toggle;\n  let closeNav = nav.close;\n  let mega = uiHelpers();\n  let megaStatus = $state(false);\n  const toggleMega = mega.toggle;\n  $effect(() => {\n    navStatus = nav.isOpen;\n    megaStatus = mega.isOpen;\n  });\n<\/script>\n\n<div class="h-64">\n  <Navbar {toggleNav} {closeNav} {navStatus}>\n    {#snippet brand()}\n      <NavBrand href="/">\n        <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />\n        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>\n      </NavBrand>\n    {/snippet}\n    <NavUl>\n      <NavLi href="/">Home</NavLi>\n      <NavLi class="cursor-pointer" onclick={toggleMega}>\n        Mega menu<ChevronDownOutline class="ms-2 inline h-6 w-6 text-primary-800 dark:text-white" />\n      </NavLi>\n\n      <NavLi href="/services">Services</NavLi>\n      <NavLi href="/services">Products</NavLi>\n    </NavUl>\n  </Navbar>\n  <div class="relative">\n    <MegaMenu items={menu} dropdownStatus={megaStatus} class="absolute -top-[20px] left-[300px] w-[400px]">\n      {#snippet children(prop)}\n        <a href={prop.item.href} class="hover:text-primary-600 dark:hover:text-primary-500">{prop.item.name}</a>\n      {/snippet}\n    </MegaMenu>\n  </div>\n</div>\n';
const __vite_glob_0_1 = '<script>\n  import { Navbar, NavBrand, NavUl, NavLi, MegaMenu, uiHelpers } from "$lib";\n  import { ChevronDownOutline, UserCircleOutline } from "flowbite-svelte-icons";\n  let menu = [\n    { name: "About us", href: "/about", Icon: UserCircleOutline },\n    { name: "Blog", href: "/blog", Icon: UserCircleOutline },\n    { name: "Contact us", href: "/contact", Icon: UserCircleOutline },\n    { name: "Library", href: "/library", Icon: UserCircleOutline },\n    { name: "Newsletter", href: "/news", Icon: UserCircleOutline },\n    { name: "Support Center", href: "/support", Icon: UserCircleOutline },\n    { name: "Resources", href: "/resource", Icon: UserCircleOutline },\n    { name: "Playground", href: "/play", Icon: UserCircleOutline },\n    { name: "Terms", href: "/tersm", Icon: UserCircleOutline },\n    { name: "Pro Version", href: "/pro", Icon: UserCircleOutline },\n    { name: "License", href: "/license", Icon: UserCircleOutline }\n  ];\n  let nav = uiHelpers();\n  let navStatus = $state(false);\n  let toggleNav = nav.toggle;\n  let closeNav = nav.close;\n  let mega = uiHelpers();\n  let megaStatus = $state(false);\n  const toggleMega = mega.toggle;\n  $effect(() => {\n    navStatus = nav.isOpen;\n    megaStatus = mega.isOpen;\n  });\n<\/script>\n\n<div class="h-64">\n  <Navbar {toggleNav} {closeNav} {navStatus}>\n    {#snippet brand()}\n      <NavBrand href="/">\n        <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />\n        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>\n      </NavBrand>\n    {/snippet}\n    <NavUl>\n      <NavLi href="/">Home</NavLi>\n      <NavLi class="cursor-pointer" onclick={toggleMega}>\n        Mega menu<ChevronDownOutline class="ms-2 inline h-6 w-6 text-primary-800 dark:text-white" />\n      </NavLi>\n      <NavLi href="/services">Services</NavLi>\n      <NavLi href="/services">Products</NavLi>\n    </NavUl>\n  </Navbar>\n  <div class="relative">\n    <MegaMenu items={menu} dropdownStatus={megaStatus} class="absolute -top-[20px] left-[300px] w-[450px]">\n      {#snippet children(prop)}\n        <a href={prop.item.href} class="flex items-center hover:text-primary-600 dark:hover:text-primary-500">\n          <prop.item.Icon class="me-2 h-4 w-4" />\n          {prop.item.name}\n        </a>\n      {/snippet}\n    </MegaMenu>\n  </div>\n</div>\n';
var root_2$1 = template(`<img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo"> <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>`, 1);
var root_6$1 = template(`Mega menu<!>`, 1);
var root_4$1 = template(`<!> <!> <!> <!>`, 1);
var root_9$1 = template(`<a class="hover:text-primary-600 dark:hover:text-primary-500"> </a>`);
var root$2 = template(`<div class="h-64"><!> <div class="relative"><!></div></div>`);
function Default($$anchor, $$props) {
  push($$props, true);
  let menu = [
    { name: "About us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact us", href: "/contact" },
    { name: "Library", href: "/library" },
    { name: "Newsletter", href: "/news" },
    { name: "Support Center", href: "/support" },
    { name: "Resources", href: "/resource" },
    { name: "Playground", href: "/play" },
    { name: "Terms", href: "/terms" },
    { name: "Pro Version", href: "/pro" },
    { name: "License", href: "/license" }
  ];
  let nav = uiHelpers();
  let navStatus = state(false);
  let toggleNav = nav.toggle;
  let closeNav = nav.close;
  let mega = uiHelpers();
  let megaStatus = state(false);
  const toggleMega = mega.toggle;
  user_effect(() => {
    set(navStatus, proxy(nav.isOpen));
    set(megaStatus, proxy(mega.isOpen));
  });
  var div = root$2();
  var node = child(div);
  {
    const brand = ($$anchor2) => {
      NavBrand($$anchor2, {
        href: "/",
        children: ($$anchor3, $$slotProps) => {
          var fragment_1 = root_2$1();
          next(2);
          append($$anchor3, fragment_1);
        },
        $$slots: { default: true }
      });
    };
    Navbar(node, {
      toggleNav,
      closeNav,
      get navStatus() {
        return get(navStatus);
      },
      brand,
      children: ($$anchor2, $$slotProps) => {
        NavUl($$anchor2, {
          children: ($$anchor3, $$slotProps2) => {
            var fragment_3 = root_4$1();
            var node_1 = first_child(fragment_3);
            NavLi(node_1, {
              href: "/",
              children: ($$anchor4, $$slotProps3) => {
                next();
                var text$1 = text("Home");
                append($$anchor4, text$1);
              },
              $$slots: { default: true }
            });
            var node_2 = sibling(node_1, 2);
            NavLi(node_2, {
              class: "cursor-pointer",
              onclick: toggleMega,
              children: ($$anchor4, $$slotProps3) => {
                next();
                var fragment_4 = root_6$1();
                var node_3 = sibling(first_child(fragment_4));
                ChevronDownOutline(node_3, {
                  class: "ms-2 inline h-6 w-6 text-primary-800 dark:text-white"
                });
                append($$anchor4, fragment_4);
              },
              $$slots: { default: true }
            });
            var node_4 = sibling(node_2, 2);
            NavLi(node_4, {
              href: "/services",
              children: ($$anchor4, $$slotProps3) => {
                next();
                var text_1 = text("Services");
                append($$anchor4, text_1);
              },
              $$slots: { default: true }
            });
            var node_5 = sibling(node_4, 2);
            NavLi(node_5, {
              href: "/services",
              children: ($$anchor4, $$slotProps3) => {
                next();
                var text_2 = text("Products");
                append($$anchor4, text_2);
              },
              $$slots: { default: true }
            });
            append($$anchor3, fragment_3);
          },
          $$slots: { default: true }
        });
      },
      $$slots: { brand: true, default: true }
    });
  }
  var div_1 = sibling(node, 2);
  var node_6 = child(div_1);
  {
    const children = ($$anchor2, prop2 = noop) => {
      var a = root_9$1();
      var text_3 = child(a, true);
      reset(a);
      template_effect(() => {
        set_attribute(a, "href", prop2().item.href);
        set_text(text_3, prop2().item.name);
      });
      append($$anchor2, a);
    };
    MegaMenu(node_6, {
      items: menu,
      get dropdownStatus() {
        return get(megaStatus);
      },
      class: "absolute -top-[20px] left-[300px] w-[400px]",
      children,
      $$slots: { default: true }
    });
  }
  reset(div_1);
  reset(div);
  append($$anchor, div);
  pop();
}
var root_2 = template(`<img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo"> <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>`, 1);
var root_6 = template(`Mega menu<!>`, 1);
var root_4 = template(`<!> <!> <!> <!>`, 1);
var root_9 = template(`<a class="flex items-center hover:text-primary-600 dark:hover:text-primary-500"><!> </a>`);
var root$1 = template(`<div class="h-64"><!> <div class="relative"><!></div></div>`);
function Icon($$anchor, $$props) {
  push($$props, true);
  let menu = [
    {
      name: "About us",
      href: "/about",
      Icon: UserCircleOutline
    },
    {
      name: "Blog",
      href: "/blog",
      Icon: UserCircleOutline
    },
    {
      name: "Contact us",
      href: "/contact",
      Icon: UserCircleOutline
    },
    {
      name: "Library",
      href: "/library",
      Icon: UserCircleOutline
    },
    {
      name: "Newsletter",
      href: "/news",
      Icon: UserCircleOutline
    },
    {
      name: "Support Center",
      href: "/support",
      Icon: UserCircleOutline
    },
    {
      name: "Resources",
      href: "/resource",
      Icon: UserCircleOutline
    },
    {
      name: "Playground",
      href: "/play",
      Icon: UserCircleOutline
    },
    {
      name: "Terms",
      href: "/tersm",
      Icon: UserCircleOutline
    },
    {
      name: "Pro Version",
      href: "/pro",
      Icon: UserCircleOutline
    },
    {
      name: "License",
      href: "/license",
      Icon: UserCircleOutline
    }
  ];
  let nav = uiHelpers();
  let navStatus = state(false);
  let toggleNav = nav.toggle;
  let closeNav = nav.close;
  let mega = uiHelpers();
  let megaStatus = state(false);
  const toggleMega = mega.toggle;
  user_effect(() => {
    set(navStatus, proxy(nav.isOpen));
    set(megaStatus, proxy(mega.isOpen));
  });
  var div = root$1();
  var node = child(div);
  {
    const brand = ($$anchor2) => {
      NavBrand($$anchor2, {
        href: "/",
        children: ($$anchor3, $$slotProps) => {
          var fragment_1 = root_2();
          next(2);
          append($$anchor3, fragment_1);
        },
        $$slots: { default: true }
      });
    };
    Navbar(node, {
      toggleNav,
      closeNav,
      get navStatus() {
        return get(navStatus);
      },
      brand,
      children: ($$anchor2, $$slotProps) => {
        NavUl($$anchor2, {
          children: ($$anchor3, $$slotProps2) => {
            var fragment_3 = root_4();
            var node_1 = first_child(fragment_3);
            NavLi(node_1, {
              href: "/",
              children: ($$anchor4, $$slotProps3) => {
                next();
                var text$1 = text("Home");
                append($$anchor4, text$1);
              },
              $$slots: { default: true }
            });
            var node_2 = sibling(node_1, 2);
            NavLi(node_2, {
              class: "cursor-pointer",
              onclick: toggleMega,
              children: ($$anchor4, $$slotProps3) => {
                next();
                var fragment_4 = root_6();
                var node_3 = sibling(first_child(fragment_4));
                ChevronDownOutline(node_3, {
                  class: "ms-2 inline h-6 w-6 text-primary-800 dark:text-white"
                });
                append($$anchor4, fragment_4);
              },
              $$slots: { default: true }
            });
            var node_4 = sibling(node_2, 2);
            NavLi(node_4, {
              href: "/services",
              children: ($$anchor4, $$slotProps3) => {
                next();
                var text_1 = text("Services");
                append($$anchor4, text_1);
              },
              $$slots: { default: true }
            });
            var node_5 = sibling(node_4, 2);
            NavLi(node_5, {
              href: "/services",
              children: ($$anchor4, $$slotProps3) => {
                next();
                var text_2 = text("Products");
                append($$anchor4, text_2);
              },
              $$slots: { default: true }
            });
            append($$anchor3, fragment_3);
          },
          $$slots: { default: true }
        });
      },
      $$slots: { brand: true, default: true }
    });
  }
  var div_1 = sibling(node, 2);
  var node_6 = child(div_1);
  {
    const children = ($$anchor2, prop2 = noop) => {
      var a = root_9();
      var node_7 = child(a);
      component(node_7, () => prop2().item.Icon, ($$anchor3, $$component) => {
        $$component($$anchor3, { class: "me-2 h-4 w-4" });
      });
      var text_3 = sibling(node_7);
      reset(a);
      template_effect(() => {
        set_attribute(a, "href", prop2().item.href);
        set_text(text_3, ` ${prop2().item.name ?? ""}`);
      });
      append($$anchor2, a);
    };
    MegaMenu(node_6, {
      items: menu,
      get dropdownStatus() {
        return get(megaStatus);
      },
      class: "absolute -top-[20px] left-[300px] w-[450px]",
      children,
      $$slots: { default: true }
    });
  }
  reset(div_1);
  reset(div);
  append($$anchor, div);
  pop();
}
var root_3 = template(`<div class="mb-12 flex flex-wrap"><!> <!></div> <!>`, 1);
var root = template(`<!> <!> <!> <!>`, 1);
function _page($$anchor, $$props) {
  push($$props, true);
  const dirName = "mega-menu";
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/Default.svelte": __vite_glob_0_0,
    "./examples/Icon.svelte": __vite_glob_0_1
  });
  const exampleArr = [
    {
      name: "Default",
      component: Default
    },
    {
      name: "Icon",
      component: Icon
    }
    // { name: 'Card with action button', component: ExampleComponents.CardWithActionButton }
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
      var text$1 = text("Mega menu");
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
            labelClass: "w-48 my-1",
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
