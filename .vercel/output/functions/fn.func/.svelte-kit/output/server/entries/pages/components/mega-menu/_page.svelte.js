import { Q as push, Y as ensure_array_like, a0 as spread_attributes, W as attr, a2 as bind_props, S as pop, a1 as getContext, V as escape_html, a3 as copy_payload, a4 as assign_payload } from "../../../../chunks/index.js";
import { K as megamenu } from "../../../../chunks/theme.js";
import { L as Label, R as Radio, C as CompoAttributesViewer } from "../../../../chunks/CompoAttributesViewer.js";
import { D as DynamicCodeBlockHighlight } from "../../../../chunks/DynamicCodeBlockHighlight.js";
import { C as CodeWrapper } from "../../../../chunks/CodeWrapper.js";
import { a as H1 } from "../../../../chunks/H1.js";
import { H as H2 } from "../../../../chunks/H2.js";
import { g as getExampleFileName, i as isSvelteOverflow } from "../../../../chunks/helpers.js";
import { u as uiHelpers } from "../../../../chunks/uiHelpers.svelte.js";
import { N as Navbar, a as NavUl, c as NavLi, b as NavBrand } from "../../../../chunks/NavUl.js";
import { C as ChevronDownOutline } from "../../../../chunks/ChevronDownOutline.js";
import { twMerge } from "tailwind-merge";
function MegaMenu($$payload, $$props) {
  push();
  let {
    children,
    footer,
    items = [],
    full,
    dropdownStatus = void 0,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const { base, div, ul, footerDiv } = megamenu();
  if (dropdownStatus) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(items);
    $$payload.out += `<div${spread_attributes({
      ...restProps,
      class: base({ className })
    })}><div${attr("class", div())}><ul${attr("class", ul())}>`;
    if (each_array.length !== 0) {
      $$payload.out += "<!--[-->";
      for (let index = 0, $$length = each_array.length; index < $$length; index++) {
        let item = each_array[index];
        $$payload.out += `<li>`;
        children($$payload, { item, index });
        $$payload.out += `<!----></li>`;
      }
    } else {
      $$payload.out += "<!--[!-->";
      children($$payload, { item: items[0], index: 0 });
      $$payload.out += `<!---->`;
    }
    $$payload.out += `<!--]--></ul> `;
    if (full && footer) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div${attr("class", footerDiv())}>`;
      footer($$payload);
      $$payload.out += `<!----></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { dropdownStatus });
  pop();
}
function UserCircleOutline($$payload, $$props) {
  push();
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let {
    size = ctx.size || "md",
    color = ctx.color || "currentColor",
    title,
    strokeWidth = ctx.strokeWidth || "2",
    desc,
    class: className,
    ariaLabel = "user circle outline",
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let ariaDescribedby = `${title?.id || ""} ${desc?.id || ""}`;
  const hasDescription = !!(title?.id || desc?.id);
  $$payload.out += `<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      color,
      ...restProps,
      class: twMerge("shrink-0", sizes[size], className),
      "aria-label": ariaLabel,
      "aria-describedby": hasDescription ? ariaDescribedby : void 0,
      viewBox: "0 0 24 24"
    },
    void 0,
    void 0,
    3
  )}>`;
  if (title?.id && title.title) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<title${attr("id", title.id)}>${escape_html(title.title)}</title>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if (desc?.id && desc.desc) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<desc${attr("id", desc.id)}>${escape_html(desc.desc)}</desc>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${attr("stroke-width", strokeWidth)} d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path></svg>`;
  pop();
}
const __vite_glob_0_0 = '<script>\n  import { Navbar, NavBrand, NavUl, NavLi, MegaMenu, uiHelpers } from "$lib";\n  import { ChevronDownOutline } from "flowbite-svelte-icons";\n  let menu = [\n    { name: "About us", href: "/about" },\n    { name: "Blog", href: "/blog" },\n    { name: "Contact us", href: "/contact" },\n    { name: "Library", href: "/library" },\n    { name: "Newsletter", href: "/news" },\n    { name: "Support Center", href: "/support" },\n    { name: "Resources", href: "/resource" },\n    { name: "Playground", href: "/play" },\n    { name: "Terms", href: "/terms" },\n    { name: "Pro Version", href: "/pro" },\n    { name: "License", href: "/license" }\n  ];\n  let nav = uiHelpers();\n  let navStatus = $state(false);\n  let toggleNav = nav.toggle;\n  let closeNav = nav.close;\n  let mega = uiHelpers();\n  let megaStatus = $state(false);\n  const toggleMega = mega.toggle;\n  $effect(() => {\n    navStatus = nav.isOpen;\n    megaStatus = mega.isOpen;\n  });\n<\/script>\n\n<div class="h-64">\n  <Navbar {toggleNav} {closeNav} {navStatus}>\n    {#snippet brand()}\n      <NavBrand href="/">\n        <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />\n        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>\n      </NavBrand>\n    {/snippet}\n    <NavUl>\n      <NavLi href="/">Home</NavLi>\n      <NavLi class="cursor-pointer" onclick={toggleMega}>\n        Mega menu<ChevronDownOutline class="ms-2 inline h-6 w-6 text-primary-800 dark:text-white" />\n      </NavLi>\n\n      <NavLi href="/services">Services</NavLi>\n      <NavLi href="/services">Products</NavLi>\n    </NavUl>\n  </Navbar>\n  <div class="relative">\n    <MegaMenu items={menu} dropdownStatus={megaStatus} class="absolute -top-[20px] left-[300px] w-[400px]">\n      {#snippet children(prop)}\n        <a href={prop.item.href} class="hover:text-primary-600 dark:hover:text-primary-500">{prop.item.name}</a>\n      {/snippet}\n    </MegaMenu>\n  </div>\n</div>\n';
const __vite_glob_0_1 = '<script>\n  import { Navbar, NavBrand, NavUl, NavLi, MegaMenu, uiHelpers } from "$lib";\n  import { ChevronDownOutline, UserCircleOutline } from "flowbite-svelte-icons";\n  let menu = [\n    { name: "About us", href: "/about", Icon: UserCircleOutline },\n    { name: "Blog", href: "/blog", Icon: UserCircleOutline },\n    { name: "Contact us", href: "/contact", Icon: UserCircleOutline },\n    { name: "Library", href: "/library", Icon: UserCircleOutline },\n    { name: "Newsletter", href: "/news", Icon: UserCircleOutline },\n    { name: "Support Center", href: "/support", Icon: UserCircleOutline },\n    { name: "Resources", href: "/resource", Icon: UserCircleOutline },\n    { name: "Playground", href: "/play", Icon: UserCircleOutline },\n    { name: "Terms", href: "/tersm", Icon: UserCircleOutline },\n    { name: "Pro Version", href: "/pro", Icon: UserCircleOutline },\n    { name: "License", href: "/license", Icon: UserCircleOutline }\n  ];\n  let nav = uiHelpers();\n  let navStatus = $state(false);\n  let toggleNav = nav.toggle;\n  let closeNav = nav.close;\n  let mega = uiHelpers();\n  let megaStatus = $state(false);\n  const toggleMega = mega.toggle;\n  $effect(() => {\n    navStatus = nav.isOpen;\n    megaStatus = mega.isOpen;\n  });\n<\/script>\n\n<div class="h-64">\n  <Navbar {toggleNav} {closeNav} {navStatus}>\n    {#snippet brand()}\n      <NavBrand href="/">\n        <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />\n        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>\n      </NavBrand>\n    {/snippet}\n    <NavUl>\n      <NavLi href="/">Home</NavLi>\n      <NavLi class="cursor-pointer" onclick={toggleMega}>\n        Mega menu<ChevronDownOutline class="ms-2 inline h-6 w-6 text-primary-800 dark:text-white" />\n      </NavLi>\n      <NavLi href="/services">Services</NavLi>\n      <NavLi href="/services">Products</NavLi>\n    </NavUl>\n  </Navbar>\n  <div class="relative">\n    <MegaMenu items={menu} dropdownStatus={megaStatus} class="absolute -top-[20px] left-[300px] w-[450px]">\n      {#snippet children(prop)}\n        <a href={prop.item.href} class="flex items-center hover:text-primary-600 dark:hover:text-primary-500">\n          <prop.item.Icon class="me-2 h-4 w-4" />\n          {prop.item.name}\n        </a>\n      {/snippet}\n    </MegaMenu>\n  </div>\n</div>\n';
function Default($$payload, $$props) {
  push();
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
  let navStatus = false;
  let toggleNav = nav.toggle;
  let closeNav = nav.close;
  let mega = uiHelpers();
  let megaStatus = false;
  const toggleMega = mega.toggle;
  $$payload.out += `<div class="h-64">`;
  {
    let brand = function($$payload2) {
      NavBrand($$payload2, {
        href: "/",
        children: ($$payload3) => {
          $$payload3.out += `<img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo"> <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>`;
        },
        $$slots: { default: true }
      });
    };
    Navbar($$payload, {
      toggleNav,
      closeNav,
      navStatus,
      brand,
      children: ($$payload2) => {
        NavUl($$payload2, {
          children: ($$payload3) => {
            NavLi($$payload3, {
              href: "/",
              children: ($$payload4) => {
                $$payload4.out += `<!---->Home`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!----> `;
            NavLi($$payload3, {
              class: "cursor-pointer",
              onclick: toggleMega,
              children: ($$payload4) => {
                $$payload4.out += `<!---->Mega menu`;
                ChevronDownOutline($$payload4, {
                  class: "ms-2 inline h-6 w-6 text-primary-800 dark:text-white"
                });
                $$payload4.out += `<!---->`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!----> `;
            NavLi($$payload3, {
              href: "/services",
              children: ($$payload4) => {
                $$payload4.out += `<!---->Services`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!----> `;
            NavLi($$payload3, {
              href: "/services",
              children: ($$payload4) => {
                $$payload4.out += `<!---->Products`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!---->`;
          },
          $$slots: { default: true }
        });
      },
      $$slots: { brand: true, default: true }
    });
  }
  $$payload.out += `<!----> <div class="relative">`;
  {
    let children = function($$payload2, prop) {
      $$payload2.out += `<a${attr("href", prop.item.href)} class="hover:text-primary-600 dark:hover:text-primary-500">${escape_html(prop.item.name)}</a>`;
    };
    MegaMenu($$payload, {
      items: menu,
      dropdownStatus: megaStatus,
      class: "absolute -top-[20px] left-[300px] w-[400px]",
      children,
      $$slots: { default: true }
    });
  }
  $$payload.out += `<!----></div></div>`;
  pop();
}
function Icon($$payload, $$props) {
  push();
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
  let navStatus = false;
  let toggleNav = nav.toggle;
  let closeNav = nav.close;
  let mega = uiHelpers();
  let megaStatus = false;
  const toggleMega = mega.toggle;
  $$payload.out += `<div class="h-64">`;
  {
    let brand = function($$payload2) {
      NavBrand($$payload2, {
        href: "/",
        children: ($$payload3) => {
          $$payload3.out += `<img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo"> <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>`;
        },
        $$slots: { default: true }
      });
    };
    Navbar($$payload, {
      toggleNav,
      closeNav,
      navStatus,
      brand,
      children: ($$payload2) => {
        NavUl($$payload2, {
          children: ($$payload3) => {
            NavLi($$payload3, {
              href: "/",
              children: ($$payload4) => {
                $$payload4.out += `<!---->Home`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!----> `;
            NavLi($$payload3, {
              class: "cursor-pointer",
              onclick: toggleMega,
              children: ($$payload4) => {
                $$payload4.out += `<!---->Mega menu`;
                ChevronDownOutline($$payload4, {
                  class: "ms-2 inline h-6 w-6 text-primary-800 dark:text-white"
                });
                $$payload4.out += `<!---->`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!----> `;
            NavLi($$payload3, {
              href: "/services",
              children: ($$payload4) => {
                $$payload4.out += `<!---->Services`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!----> `;
            NavLi($$payload3, {
              href: "/services",
              children: ($$payload4) => {
                $$payload4.out += `<!---->Products`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!---->`;
          },
          $$slots: { default: true }
        });
      },
      $$slots: { brand: true, default: true }
    });
  }
  $$payload.out += `<!----> <div class="relative">`;
  {
    let children = function($$payload2, prop) {
      $$payload2.out += `<a${attr("href", prop.item.href)} class="flex items-center hover:text-primary-600 dark:hover:text-primary-500"><!---->`;
      prop.item.Icon($$payload2, { class: "me-2 h-4 w-4" });
      $$payload2.out += `<!----> ${escape_html(prop.item.name)}</a>`;
    };
    MegaMenu($$payload, {
      items: menu,
      dropdownStatus: megaStatus,
      class: "absolute -top-[20px] left-[300px] w-[450px]",
      children,
      $$slots: { default: true }
    });
  }
  $$payload.out += `<!----></div></div>`;
  pop();
}
function _page($$payload, $$props) {
  push();
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
  let selectedExample = exampleArr[0].name;
  let svelteCode = getExampleFileName(selectedExample, exampleArr);
  function findObject(arr, name) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = findObject(exampleArr, selectedExample);
  let exampleExpand = false;
  let showExpandButton = isSvelteOverflow(svelteCode, exampleModules);
  const handleExpandClick = () => {
    exampleExpand = !exampleExpand;
  };
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    H1($$payload2, {
      children: ($$payload3) => {
        $$payload3.out += `<!---->Mega menu`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    {
      let codeblock = function($$payload3) {
        DynamicCodeBlockHighlight($$payload3, {
          replaceLib: true,
          handleExpandClick,
          expand: exampleExpand,
          showExpandButton,
          code: exampleModules[`./examples/${svelteCode}`]
        });
      };
      CodeWrapper($$payload2, {
        codeblock,
        children: ($$payload3) => {
          const each_array = ensure_array_like(exampleArr);
          $$payload3.out += `<div class="mb-12 flex flex-wrap">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Example`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let style = each_array[$$index];
            Radio($$payload3, {
              labelClass: "w-48 my-1",
              onclick: () => exampleExpand = false,
              name: "block_style",
              get group() {
                return selectedExample;
              },
              set group($$value) {
                selectedExample = $$value;
                $$settled = false;
              },
              value: style.name,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(style.name)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> <!---->`;
          SelectedComponent($$payload3, {});
          $$payload3.out += `<!---->`;
        },
        $$slots: { codeblock: true, default: true }
      });
    }
    $$payload2.out += `<!----> `;
    H2($$payload2, {
      children: ($$payload3) => {
        $$payload3.out += `<!---->Component data`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    CompoAttributesViewer($$payload2, { dirName });
    $$payload2.out += `<!---->`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  pop();
}
export {
  _page as default
};
