import { a as append, t as template, b as text } from "../chunks/disclose-version.0TX42Q8e.js";
import { p as push, g as getContext, t as template_effect, b as get, a as pop, d as derived, a6 as state, u as user_effect, a7 as set, f as first_child, n as next, s as sibling, c as child, r as reset } from "../chunks/runtime.BkfDdwap.js";
import { s as setup_stores, b as store_get, a as set_text } from "../chunks/store.B2xZ3Ft6.js";
import { e as each, i as index } from "../chunks/each.CtHIoDcm.js";
import { r as rest_props, b as proxy, c as component } from "../chunks/props.B7eOu8hW.js";
import { a as set_attributes, b8 as navhamburger, am as Navbar, V as uiHelpers, az as Dropdown, aS as sineIn } from "../chunks/theme.BtjZjf2R.js";
import { C as CompoAttributesViewer, L as Label, R as Radio } from "../chunks/CompoAttributesViewer.HsPJjrMu.js";
import { D as DynamicCodeBlockHighlight } from "../chunks/DynamicCodeBlockHighlight.BS23lgW_.js";
import { C as CodeWrapper } from "../chunks/CodeWrapper.CdoIAYb8.js";
import { H as H1 } from "../chunks/H1.DunGd_Oq.js";
import { H as H2 } from "../chunks/H2.qsp5CBkK.js";
import { g as getExampleFileName, d as isSvelteOverflow } from "../chunks/helpers.B9KbZW0W.js";
import { N as NavUl, a as NavLi, b as NavBrand } from "../chunks/NavUl.D3IokGIf.js";
import { p as page } from "../chunks/stores.CC5X2N5j.js";
import { S as Skeleton, I as ImagePlaceholder } from "../chunks/Skeleton.DR3Y1iyj.js";
import { T as TextPlaceholder } from "../chunks/TextPlaceholder.CtZFdosa.js";
import { D as DropdownUl } from "../chunks/DropdownUl.CBcIivYZ.js";
import { D as DropdownLi } from "../chunks/DropdownLi.DjyFOMgJ.js";
import { C as ChevronDownOutline } from "../chunks/ChevronDownOutline.C3ncqrR6.js";
import { B as Button } from "../chunks/markdown.Ba9FtS5g.js";
import { I as Input } from "../chunks/index.CCICtSX3.js";
import { S as SearchOutline } from "../chunks/SearchOutline.CyH-RaHz.js";
import { A as Avatar } from "../chunks/Avatar.BvpffrdL.js";
import { D as DropdownHeader } from "../chunks/DropdownHeader.kX0miDJ9.js";
import { D as DropdownFooter } from "../chunks/DropdownFooter.C1Z5A-Hq.js";
var root$4 = template(`<button><span class="sr-only">Open main menu</span> <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path></svg></button>`);
function NavHamburger($$anchor, $$props) {
  push($$props, true);
  let restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "toggleNav",
    "class"
  ]);
  let breakPoint;
  const context = getContext("navbarContext");
  breakPoint = context.breakPoint ?? "md";
  const toggleButton = derived(() => navhamburger({ breakPoint, className: $$props.class }));
  var button = root$4();
  let attributes;
  template_effect(() => attributes = set_attributes(button, attributes, {
    onclick: $$props.toggleNav,
    type: "button",
    ...restProps,
    class: get(toggleButton)
  }));
  append($$anchor, button);
  pop();
}
const __vite_glob_0_0 = '<script lang="ts">\n  import { Navbar, NavBrand, NavUl, NavLi, uiHelpers } from "$lib";\n  import { page } from "$app/stores";\n  let activeUrl = $state($page.url.pathname);\n  let nav = uiHelpers();\n  let navStatus = $state(false);\n  let toggleNav = nav.toggle;\n  let closeNav = nav.close;\n  $effect(() => {\n    navStatus = nav.isOpen;\n    activeUrl = $page.url.pathname;\n  });\n<\/script>\n\n<Navbar {toggleNav} {closeNav} {navStatus} breakPoint="md" navClass="bg-gray-100 rounded-xl">\n  {#snippet brand()}\n    <NavBrand siteName="Svelte 5">\n      <img width="30" src="/images/svelte-icon.png" alt="svelte icon" />\n    </NavBrand>\n  {/snippet}\n\n  <NavUl {activeUrl}>\n    <NavLi href="/">Home</NavLi>\n    <NavLi href="/components/navbar">Navbar</NavLi>\n    <NavLi href="/components/footer">Footer</NavLi>\n  </NavUl>\n</Navbar>\n';
const __vite_glob_0_1 = '<script lang="ts">\n  import { Navbar, NavBrand, NavUl, NavLi, uiHelpers } from "$lib";\n  import { page } from "$app/stores";\n  let activeUrl = $state($page.url.pathname);\n  let nav = uiHelpers();\n  let navStatus = $state(false);\n  let toggleNav = nav.toggle;\n  let closeNav = nav.close;\n  $effect(() => {\n    navStatus = nav.isOpen;\n    activeUrl = $page.url.pathname;\n  });\n<\/script>\n\n<Navbar {toggleNav} {closeNav} {navStatus} breakPoint="lg">\n  {#snippet brand()}\n    <NavBrand siteName="Svelte 5">\n      <img width="30" src="/images/svelte-icon.png" alt="svelte icon" />\n    </NavBrand>\n  {/snippet}\n\n  <NavUl {activeUrl}>\n    <NavLi href="/">Home</NavLi>\n    <NavLi href="/components/navbar">Navbar</NavLi>\n    <NavLi href="/components/footer">Footer</NavLi>\n  </NavUl>\n</Navbar>\n';
const __vite_glob_0_2 = '<script lang="ts">\n  import { Navbar, NavBrand, NavUl, NavLi, uiHelpers, Button, NavHamburger } from "$lib";\n  import { page } from "$app/stores";\n  let activeUrl = $state($page.url.pathname);\n  let nav = uiHelpers();\n  let navStatus = $state(false);\n  let toggleNav = nav.toggle;\n  $effect(() => {\n    navStatus = nav.isOpen;\n    activeUrl = $page.url.pathname;\n  });\n<\/script>\n\n<Navbar {navStatus} breakPoint="md" hamburgerMenu={false}>\n  {#snippet brand()}\n    <NavBrand siteName="Svelte 5 UI Lib">\n      <img width="30" src="/images/svelte-icon.png" alt="svelte icon" />\n    </NavBrand>\n  {/snippet}\n  {#snippet navSlotBlock()}\n    <div class="flex items-center space-x-1 md:order-2">\n      <Button size="sm">Get started</Button>\n      <NavHamburger {toggleNav} />\n    </div>\n  {/snippet}\n  <NavUl class="order-1" {activeUrl}>\n    <NavLi href="/">Home</NavLi>\n    <NavLi href="/components/navbar">Navbar</NavLi>\n    <NavLi href="/components/footer">Footer</NavLi>\n  </NavUl>\n</Navbar>\n';
const __vite_glob_0_3 = '<script lang="ts">\n  import { Navbar, NavBrand, NavUl, NavLi, uiHelpers } from "$lib";\n  import { page } from "$app/stores";\n  let activeUrl = $state($page.url.pathname);\n  let nav = uiHelpers();\n  let navStatus = $state(false);\n  let toggleNav = nav.toggle;\n  let closeNav = nav.close;\n  $effect(() => {\n    navStatus = nav.isOpen;\n    activeUrl = $page.url.pathname;\n  });\n<\/script>\n\n<Navbar {toggleNav} {closeNav} {navStatus} breakPoint="md">\n  {#snippet brand()}\n    <NavBrand siteName="Svelte 5">\n      <img width="30" src="/images/svelte-icon.png" alt="svelte icon" />\n    </NavBrand>\n  {/snippet}\n\n  <NavUl {activeUrl}>\n    <NavLi href="/">Home</NavLi>\n    <NavLi href="/components/navbar">Navbar</NavLi>\n    <NavLi href="/components/footer">Footer</NavLi>\n  </NavUl>\n</Navbar>\n';
const __vite_glob_0_4 = '<script lang="ts">\n  import { Navbar, NavBrand, NavUl, NavLi, uiHelpers, Dropdown, DropdownUl, DropdownLi } from "$lib";\n  import { page } from "$app/stores";\n  let activeUrl = $state($page.url.pathname);\n  import { ChevronDownOutline } from "flowbite-svelte-icons";\n  // for navbar\n  let nav = uiHelpers();\n  let navStatus = $state(false);\n  let toggleNav = nav.toggle;\n  let closeNav = nav.close;\n  // for Dropdown\n  let dropdown = uiHelpers();\n  let dropdownStatus = $state(false);\n  let closeDropdown = dropdown.close;\n  $effect(() => {\n    navStatus = nav.isOpen;\n    dropdownStatus = dropdown.isOpen;\n    activeUrl = $page.url.pathname;\n  });\n<\/script>\n\n<div class="h-64">\n  <Navbar {toggleNav} {closeNav} {navStatus} breakPoint="md">\n    {#snippet brand()}\n      <NavBrand siteName="Svelte 5">\n        <img width="30" src="/images/svelte-icon.png" alt="svelte icon" />\n      </NavBrand>\n    {/snippet}\n\n    <NavUl {activeUrl}>\n      <NavLi href="/">Home</NavLi>\n      <NavLi href="/components/navbar">Navbar</NavLi>\n      <NavLi onclick={dropdown.toggle} class="cursor-pointer">\n        Dropdown<ChevronDownOutline class="ms-2 inline h-6 w-6 text-primary-800 dark:text-white" />\n      </NavLi>\n      <div class="relative">\n        <Dropdown {dropdownStatus} {closeDropdown} class="absolute -top-[20px] left-[100px] md:-left-[170px] md:top-[20px]">\n          <DropdownUl>\n            <DropdownLi href="/components/alert">Alert</DropdownLi>\n            <DropdownLi href="/components/button">Button</DropdownLi>\n            <DropdownLi href="/components/drawer">Drawer</DropdownLi>\n          </DropdownUl>\n        </Dropdown>\n      </div>\n      <NavLi href="/components/footer">Footer</NavLi>\n    </NavUl>\n  </Navbar>\n</div>\n';
const __vite_glob_0_5 = '<script lang="ts">\n  import { Navbar, NavBrand, NavUl, NavLi, uiHelpers, Button, NavHamburger, Input } from "$lib";\n  import { page } from "$app/stores";\n  let activeUrl = $state($page.url.pathname);\n  import SearchOutline from "flowbite-svelte-icons/SearchOutline.svelte";\n\n  let nav = uiHelpers();\n  let navStatus = $state(false);\n  let toggleNav = nav.toggle;\n  $effect(() => {\n    navStatus = nav.isOpen;\n    activeUrl = $page.url.pathname;\n  });\n<\/script>\n\n<Navbar {navStatus} breakPoint="lg" hamburgerMenu={false}>\n  {#snippet brand()}\n    <NavBrand siteName="Svelte 5 UI Lib">\n      <img width="30" src="/images/svelte-icon.png" alt="svelte icon" />\n    </NavBrand>\n  {/snippet}\n  {#snippet navSlotBlock()}\n    <div class="flex items-center space-x-1 md:order-2">\n      <Button class="me-1 rounded-lg bg-white p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700">\n        <SearchOutline class="h-5 w-5" />\n      </Button>\n      <div class="relative hidden md:block">\n        <div class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">\n          <SearchOutline class="h-4 w-4" />\n        </div>\n        <Input id="search-navbar" class="bg-transparent ps-10" placeholder="Search..." />\n      </div>\n      <NavHamburger {toggleNav} />\n    </div>\n  {/snippet}\n  <NavUl class="order-1" {activeUrl}>\n    <NavLi href="/">Home</NavLi>\n    <NavLi href="/components/navbar">Navbar</NavLi>\n    <NavLi href="/components/footer">Footer</NavLi>\n  </NavUl>\n</Navbar>\n';
const __vite_glob_0_6 = '<script lang="ts">\n  import { Navbar, NavBrand, NavUl, NavLi, Skeleton, ImagePlaceholder, TextPlaceholder, uiHelpers } from "$lib";\n  import { page } from "$app/stores";\n  let activeUrl = $state($page.url.pathname);\n  let nav = uiHelpers();\n  let navStatus = $state(false);\n  let toggleNav = nav.toggle;\n  let closeNav = nav.close;\n  $effect(() => {\n    navStatus = nav.isOpen;\n    activeUrl = $page.url.pathname;\n  });\n<\/script>\n\n<div class="relative">\n  <Navbar {toggleNav} {closeNav} {navStatus} breakPoint="md" navClass="absolute w-full z-20 top-0 start-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">\n    {#snippet brand()}\n      <NavBrand siteName="Svelte 5">\n        <img width="30" src="/images/svelte-icon.png" alt="svelte icon" />\n      </NavBrand>\n    {/snippet}\n\n    <NavUl {activeUrl}>\n      <NavLi href="/">Home</NavLi>\n      <NavLi href="/components/navbar">Navbar</NavLi>\n      <NavLi href="/components/footer">Footer</NavLi>\n    </NavUl>\n  </Navbar>\n  <div style="height:300px;" class="overflow-auto px-8 py-24">\n    <Skeleton class="mb-8 mt-16" />\n    <ImagePlaceholder class="my-8" />\n    <TextPlaceholder class="my-8" />\n  </div>\n</div>\n';
const __vite_glob_0_7 = '<script lang="ts">\n  import { Navbar, NavBrand, NavUl, NavLi, uiHelpers, NavHamburger, Dropdown, DropdownHeader, DropdownUl, DropdownLi, Avatar, DropdownFooter } from "$lib";\n  import { page } from "$app/stores";\n  let activeUrl = $state($page.url.pathname);\n  import { sineIn } from "svelte/easing";\n  let nav = uiHelpers();\n  let navStatus = $state(false);\n  let toggleNav = nav.toggle;\n  let dropdownUser = uiHelpers();\n  let dropdownUserStatus = $state(false);\n  let closeDropdownUser = dropdownUser.close;\n  $effect(() => {\n    dropdownUserStatus = dropdownUser.isOpen;\n    navStatus = nav.isOpen;\n    activeUrl = $page.url.pathname;\n  });\n<\/script>\n\n<div class="h-80">\n  <Navbar {navStatus} hamburgerMenu={false}>\n    {#snippet brand()}\n      <NavBrand siteName="Svelte 5 UI Lib">\n        <img width="30" src="/images/svelte-icon.png" alt="svelte icon" />\n      </NavBrand>\n    {/snippet}\n    {#snippet navSlotBlock()}\n      <div class="flex items-center space-x-1 md:order-2">\n        <Avatar onclick={dropdownUser.toggle} src="/images/profile-picture-3.webp" dot={{ color: "green" }} />\n        <div class="relative">\n          <Dropdown dropdownStatus={dropdownUserStatus} closeDropdown={closeDropdownUser} params={{ y: 0, duration: 200, easing: sineIn }} class="absolute -left-[110px] top-[14px] md:-left-[160px] ">\n            <DropdownHeader class="px-4 py-2">\n              <span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>\n              <span class="block truncate text-sm font-medium">name@flowbite.com</span>\n            </DropdownHeader>\n            <DropdownUl>\n              <DropdownLi href="/">Dashboard</DropdownLi>\n              <DropdownLi href="/components/drawer">Drawer</DropdownLi>\n              <DropdownLi href="/components/footer">Footer</DropdownLi>\n              <DropdownLi href="/components">Alert</DropdownLi>\n            </DropdownUl>\n            <DropdownFooter class="px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">Sign out</DropdownFooter>\n          </Dropdown>\n        </div>\n        <NavHamburger {toggleNav} />\n      </div>\n    {/snippet}\n    <NavUl class="order-1" {activeUrl}>\n      <NavLi href="/">Home</NavLi>\n      <NavLi href="/components/navbar">Navbar</NavLi>\n      <NavLi href="/components/footer">Footer</NavLi>\n    </NavUl>\n  </Navbar>\n</div>\n';
var root_2$7 = template(`<img width="30" src="/images/svelte-icon.png" alt="svelte icon">`);
var root_4$5 = template(`<!> <!> <!>`, 1);
function Default($$anchor, $$props) {
  push($$props, true);
  const $$stores = setup_stores();
  const $page = () => store_get(page, "$page", $$stores);
  let activeUrl = state(proxy($page().url.pathname));
  let nav = uiHelpers();
  let navStatus = state(false);
  let toggleNav = nav.toggle;
  let closeNav = nav.close;
  user_effect(() => {
    set(navStatus, proxy(nav.isOpen));
    set(activeUrl, proxy($page().url.pathname));
  });
  {
    const brand = ($$anchor2) => {
      NavBrand($$anchor2, {
        siteName: "Svelte 5",
        children: ($$anchor3, $$slotProps) => {
          var img = root_2$7();
          append($$anchor3, img);
        },
        $$slots: { default: true }
      });
    };
    Navbar($$anchor, {
      toggleNav,
      closeNav,
      get navStatus() {
        return get(navStatus);
      },
      breakPoint: "md",
      brand,
      children: ($$anchor2, $$slotProps) => {
        NavUl($$anchor2, {
          get activeUrl() {
            return get(activeUrl);
          },
          children: ($$anchor3, $$slotProps2) => {
            var fragment_3 = root_4$5();
            var node = first_child(fragment_3);
            NavLi(node, {
              href: "/",
              children: ($$anchor4, $$slotProps3) => {
                next();
                var text$1 = text("Home");
                append($$anchor4, text$1);
              },
              $$slots: { default: true }
            });
            var node_1 = sibling(node, 2);
            NavLi(node_1, {
              href: "/components/navbar",
              children: ($$anchor4, $$slotProps3) => {
                next();
                var text_1 = text("Navbar");
                append($$anchor4, text_1);
              },
              $$slots: { default: true }
            });
            var node_2 = sibling(node_1, 2);
            NavLi(node_2, {
              href: "/components/footer",
              children: ($$anchor4, $$slotProps3) => {
                next();
                var text_2 = text("Footer");
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
  pop();
}
var root_2$6 = template(`<img width="30" src="/images/svelte-icon.png" alt="svelte icon">`);
var root_4$4 = template(`<!> <!> <!>`, 1);
function Breakpoint($$anchor, $$props) {
  push($$props, true);
  const $$stores = setup_stores();
  const $page = () => store_get(page, "$page", $$stores);
  let activeUrl = state(proxy($page().url.pathname));
  let nav = uiHelpers();
  let navStatus = state(false);
  let toggleNav = nav.toggle;
  let closeNav = nav.close;
  user_effect(() => {
    set(navStatus, proxy(nav.isOpen));
    set(activeUrl, proxy($page().url.pathname));
  });
  {
    const brand = ($$anchor2) => {
      NavBrand($$anchor2, {
        siteName: "Svelte 5",
        children: ($$anchor3, $$slotProps) => {
          var img = root_2$6();
          append($$anchor3, img);
        },
        $$slots: { default: true }
      });
    };
    Navbar($$anchor, {
      toggleNav,
      closeNav,
      get navStatus() {
        return get(navStatus);
      },
      breakPoint: "lg",
      brand,
      children: ($$anchor2, $$slotProps) => {
        NavUl($$anchor2, {
          get activeUrl() {
            return get(activeUrl);
          },
          children: ($$anchor3, $$slotProps2) => {
            var fragment_3 = root_4$4();
            var node = first_child(fragment_3);
            NavLi(node, {
              href: "/",
              children: ($$anchor4, $$slotProps3) => {
                next();
                var text$1 = text("Home");
                append($$anchor4, text$1);
              },
              $$slots: { default: true }
            });
            var node_1 = sibling(node, 2);
            NavLi(node_1, {
              href: "/components/navbar",
              children: ($$anchor4, $$slotProps3) => {
                next();
                var text_1 = text("Navbar");
                append($$anchor4, text_1);
              },
              $$slots: { default: true }
            });
            var node_2 = sibling(node_1, 2);
            NavLi(node_2, {
              href: "/components/footer",
              children: ($$anchor4, $$slotProps3) => {
                next();
                var text_2 = text("Footer");
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
  pop();
}
var root_2$5 = template(`<img width="30" src="/images/svelte-icon.png" alt="svelte icon">`);
var root_4$3 = template(`<!> <!> <!>`, 1);
var root$3 = template(`<div class="relative"><!> <div style="height:300px;" class="overflow-auto px-8 py-24"><!> <!> <!></div></div>`);
function Sticky($$anchor, $$props) {
  push($$props, true);
  const $$stores = setup_stores();
  const $page = () => store_get(page, "$page", $$stores);
  let activeUrl = state(proxy($page().url.pathname));
  let nav = uiHelpers();
  let navStatus = state(false);
  let toggleNav = nav.toggle;
  let closeNav = nav.close;
  user_effect(() => {
    set(navStatus, proxy(nav.isOpen));
    set(activeUrl, proxy($page().url.pathname));
  });
  var div = root$3();
  var node = child(div);
  {
    const brand = ($$anchor2) => {
      NavBrand($$anchor2, {
        siteName: "Svelte 5",
        children: ($$anchor3, $$slotProps) => {
          var img = root_2$5();
          append($$anchor3, img);
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
      breakPoint: "md",
      navClass: "absolute w-full z-20 top-0 start-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700",
      brand,
      children: ($$anchor2, $$slotProps) => {
        NavUl($$anchor2, {
          get activeUrl() {
            return get(activeUrl);
          },
          children: ($$anchor3, $$slotProps2) => {
            var fragment_2 = root_4$3();
            var node_1 = first_child(fragment_2);
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
              href: "/components/navbar",
              children: ($$anchor4, $$slotProps3) => {
                next();
                var text_1 = text("Navbar");
                append($$anchor4, text_1);
              },
              $$slots: { default: true }
            });
            var node_3 = sibling(node_2, 2);
            NavLi(node_3, {
              href: "/components/footer",
              children: ($$anchor4, $$slotProps3) => {
                next();
                var text_2 = text("Footer");
                append($$anchor4, text_2);
              },
              $$slots: { default: true }
            });
            append($$anchor3, fragment_2);
          },
          $$slots: { default: true }
        });
      },
      $$slots: { brand: true, default: true }
    });
  }
  var div_1 = sibling(node, 2);
  var node_4 = child(div_1);
  Skeleton(node_4, { class: "mb-8 mt-16" });
  var node_5 = sibling(node_4, 2);
  ImagePlaceholder(node_5, { class: "my-8" });
  var node_6 = sibling(node_5, 2);
  TextPlaceholder(node_6, { class: "my-8" });
  reset(div_1);
  reset(div);
  append($$anchor, div);
  pop();
}
var root_2$4 = template(`<img width="30" src="/images/svelte-icon.png" alt="svelte icon">`);
var root_7 = template(`Dropdown<!>`, 1);
var root_9 = template(`<!> <!> <!>`, 1);
var root_4$2 = template(`<!> <!> <!> <div class="relative"><!></div> <!>`, 1);
var root$2 = template(`<div class="h-64"><!></div>`);
function Dropdown_1($$anchor, $$props) {
  push($$props, true);
  const $$stores = setup_stores();
  const $page = () => store_get(page, "$page", $$stores);
  let activeUrl = state(proxy($page().url.pathname));
  let nav = uiHelpers();
  let navStatus = state(false);
  let toggleNav = nav.toggle;
  let closeNav = nav.close;
  let dropdown = uiHelpers();
  let dropdownStatus = state(false);
  let closeDropdown = dropdown.close;
  user_effect(() => {
    set(navStatus, proxy(nav.isOpen));
    set(dropdownStatus, proxy(dropdown.isOpen));
    set(activeUrl, proxy($page().url.pathname));
  });
  var div = root$2();
  var node = child(div);
  {
    const brand = ($$anchor2) => {
      NavBrand($$anchor2, {
        siteName: "Svelte 5",
        children: ($$anchor3, $$slotProps) => {
          var img = root_2$4();
          append($$anchor3, img);
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
      breakPoint: "md",
      brand,
      children: ($$anchor2, $$slotProps) => {
        NavUl($$anchor2, {
          get activeUrl() {
            return get(activeUrl);
          },
          children: ($$anchor3, $$slotProps2) => {
            var fragment_2 = root_4$2();
            var node_1 = first_child(fragment_2);
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
              href: "/components/navbar",
              children: ($$anchor4, $$slotProps3) => {
                next();
                var text_1 = text("Navbar");
                append($$anchor4, text_1);
              },
              $$slots: { default: true }
            });
            var node_3 = sibling(node_2, 2);
            NavLi(node_3, {
              get onclick() {
                return dropdown.toggle;
              },
              class: "cursor-pointer",
              children: ($$anchor4, $$slotProps3) => {
                next();
                var fragment_3 = root_7();
                var node_4 = sibling(first_child(fragment_3));
                ChevronDownOutline(node_4, {
                  class: "ms-2 inline h-6 w-6 text-primary-800 dark:text-white"
                });
                append($$anchor4, fragment_3);
              },
              $$slots: { default: true }
            });
            var div_1 = sibling(node_3, 2);
            var node_5 = child(div_1);
            Dropdown(node_5, {
              get dropdownStatus() {
                return get(dropdownStatus);
              },
              closeDropdown,
              class: "absolute -top-[20px] left-[100px] md:-left-[170px] md:top-[20px]",
              children: ($$anchor4, $$slotProps3) => {
                DropdownUl($$anchor4, {
                  children: ($$anchor5, $$slotProps4) => {
                    var fragment_5 = root_9();
                    var node_6 = first_child(fragment_5);
                    DropdownLi(node_6, {
                      href: "/components/alert",
                      children: ($$anchor6, $$slotProps5) => {
                        next();
                        var text_2 = text("Alert");
                        append($$anchor6, text_2);
                      },
                      $$slots: { default: true }
                    });
                    var node_7 = sibling(node_6, 2);
                    DropdownLi(node_7, {
                      href: "/components/button",
                      children: ($$anchor6, $$slotProps5) => {
                        next();
                        var text_3 = text("Button");
                        append($$anchor6, text_3);
                      },
                      $$slots: { default: true }
                    });
                    var node_8 = sibling(node_7, 2);
                    DropdownLi(node_8, {
                      href: "/components/drawer",
                      children: ($$anchor6, $$slotProps5) => {
                        next();
                        var text_4 = text("Drawer");
                        append($$anchor6, text_4);
                      },
                      $$slots: { default: true }
                    });
                    append($$anchor5, fragment_5);
                  },
                  $$slots: { default: true }
                });
              },
              $$slots: { default: true }
            });
            reset(div_1);
            var node_9 = sibling(div_1, 2);
            NavLi(node_9, {
              href: "/components/footer",
              children: ($$anchor4, $$slotProps3) => {
                next();
                var text_5 = text("Footer");
                append($$anchor4, text_5);
              },
              $$slots: { default: true }
            });
            append($$anchor3, fragment_2);
          },
          $$slots: { default: true }
        });
      },
      $$slots: { brand: true, default: true }
    });
  }
  reset(div);
  append($$anchor, div);
  pop();
}
var root_2$3 = template(`<img width="30" src="/images/svelte-icon.png" alt="svelte icon">`);
var root_3$3 = template(`<div class="flex items-center space-x-1 md:order-2"><!> <div class="relative hidden md:block"><div class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3"><!></div> <!></div> <!></div>`);
var root_6$2 = template(`<!> <!> <!>`, 1);
function SearchNavbar($$anchor, $$props) {
  push($$props, true);
  const $$stores = setup_stores();
  const $page = () => store_get(page, "$page", $$stores);
  let activeUrl = state(proxy($page().url.pathname));
  let nav = uiHelpers();
  let navStatus = state(false);
  let toggleNav = nav.toggle;
  user_effect(() => {
    set(navStatus, proxy(nav.isOpen));
    set(activeUrl, proxy($page().url.pathname));
  });
  {
    const brand = ($$anchor2) => {
      NavBrand($$anchor2, {
        siteName: "Svelte 5 UI Lib",
        children: ($$anchor3, $$slotProps) => {
          var img = root_2$3();
          append($$anchor3, img);
        },
        $$slots: { default: true }
      });
    };
    const navSlotBlock = ($$anchor2) => {
      var div = root_3$3();
      var node = child(div);
      Button(node, {
        class: "me-1 rounded-lg bg-white p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700",
        children: ($$anchor3, $$slotProps) => {
          SearchOutline($$anchor3, { class: "h-5 w-5" });
        },
        $$slots: { default: true }
      });
      var div_1 = sibling(node, 2);
      var div_2 = child(div_1);
      var node_1 = child(div_2);
      SearchOutline(node_1, { class: "h-4 w-4" });
      reset(div_2);
      var node_2 = sibling(div_2, 2);
      Input(node_2, {
        id: "search-navbar",
        class: "bg-transparent ps-10",
        placeholder: "Search..."
      });
      reset(div_1);
      var node_3 = sibling(div_1, 2);
      NavHamburger(node_3, { toggleNav });
      reset(div);
      append($$anchor2, div);
    };
    Navbar($$anchor, {
      get navStatus() {
        return get(navStatus);
      },
      breakPoint: "lg",
      hamburgerMenu: false,
      brand,
      navSlotBlock,
      children: ($$anchor2, $$slotProps) => {
        NavUl($$anchor2, {
          class: "order-1",
          get activeUrl() {
            return get(activeUrl);
          },
          children: ($$anchor3, $$slotProps2) => {
            var fragment_4 = root_6$2();
            var node_4 = first_child(fragment_4);
            NavLi(node_4, {
              href: "/",
              children: ($$anchor4, $$slotProps3) => {
                next();
                var text$1 = text("Home");
                append($$anchor4, text$1);
              },
              $$slots: { default: true }
            });
            var node_5 = sibling(node_4, 2);
            NavLi(node_5, {
              href: "/components/navbar",
              children: ($$anchor4, $$slotProps3) => {
                next();
                var text_1 = text("Navbar");
                append($$anchor4, text_1);
              },
              $$slots: { default: true }
            });
            var node_6 = sibling(node_5, 2);
            NavLi(node_6, {
              href: "/components/footer",
              children: ($$anchor4, $$slotProps3) => {
                next();
                var text_2 = text("Footer");
                append($$anchor4, text_2);
              },
              $$slots: { default: true }
            });
            append($$anchor3, fragment_4);
          },
          $$slots: { default: true }
        });
      },
      $$slots: {
        brand: true,
        navSlotBlock: true,
        default: true
      }
    });
  }
  pop();
}
var root_2$2 = template(`<img width="30" src="/images/svelte-icon.png" alt="svelte icon">`);
var root_3$2 = template(`<div class="flex items-center space-x-1 md:order-2"><!> <!></div>`);
var root_6$1 = template(`<!> <!> <!>`, 1);
function CtaButton($$anchor, $$props) {
  push($$props, true);
  const $$stores = setup_stores();
  const $page = () => store_get(page, "$page", $$stores);
  let activeUrl = state(proxy($page().url.pathname));
  let nav = uiHelpers();
  let navStatus = state(false);
  let toggleNav = nav.toggle;
  user_effect(() => {
    set(navStatus, proxy(nav.isOpen));
    set(activeUrl, proxy($page().url.pathname));
  });
  {
    const brand = ($$anchor2) => {
      NavBrand($$anchor2, {
        siteName: "Svelte 5 UI Lib",
        children: ($$anchor3, $$slotProps) => {
          var img = root_2$2();
          append($$anchor3, img);
        },
        $$slots: { default: true }
      });
    };
    const navSlotBlock = ($$anchor2) => {
      var div = root_3$2();
      var node = child(div);
      Button(node, {
        size: "sm",
        children: ($$anchor3, $$slotProps) => {
          next();
          var text$1 = text("Get started");
          append($$anchor3, text$1);
        },
        $$slots: { default: true }
      });
      var node_1 = sibling(node, 2);
      NavHamburger(node_1, { toggleNav });
      reset(div);
      append($$anchor2, div);
    };
    Navbar($$anchor, {
      get navStatus() {
        return get(navStatus);
      },
      breakPoint: "md",
      hamburgerMenu: false,
      brand,
      navSlotBlock,
      children: ($$anchor2, $$slotProps) => {
        NavUl($$anchor2, {
          class: "order-1",
          get activeUrl() {
            return get(activeUrl);
          },
          children: ($$anchor3, $$slotProps2) => {
            var fragment_3 = root_6$1();
            var node_2 = first_child(fragment_3);
            NavLi(node_2, {
              href: "/",
              children: ($$anchor4, $$slotProps3) => {
                next();
                var text_1 = text("Home");
                append($$anchor4, text_1);
              },
              $$slots: { default: true }
            });
            var node_3 = sibling(node_2, 2);
            NavLi(node_3, {
              href: "/components/navbar",
              children: ($$anchor4, $$slotProps3) => {
                next();
                var text_2 = text("Navbar");
                append($$anchor4, text_2);
              },
              $$slots: { default: true }
            });
            var node_4 = sibling(node_3, 2);
            NavLi(node_4, {
              href: "/components/footer",
              children: ($$anchor4, $$slotProps3) => {
                next();
                var text_3 = text("Footer");
                append($$anchor4, text_3);
              },
              $$slots: { default: true }
            });
            append($$anchor3, fragment_3);
          },
          $$slots: { default: true }
        });
      },
      $$slots: {
        brand: true,
        navSlotBlock: true,
        default: true
      }
    });
  }
  pop();
}
var root_2$1 = template(`<img width="30" src="/images/svelte-icon.png" alt="svelte icon">`);
var root_4$1 = template(`<!> <!> <!>`, 1);
function BackgroundColor($$anchor, $$props) {
  push($$props, true);
  const $$stores = setup_stores();
  const $page = () => store_get(page, "$page", $$stores);
  let activeUrl = state(proxy($page().url.pathname));
  let nav = uiHelpers();
  let navStatus = state(false);
  let toggleNav = nav.toggle;
  let closeNav = nav.close;
  user_effect(() => {
    set(navStatus, proxy(nav.isOpen));
    set(activeUrl, proxy($page().url.pathname));
  });
  {
    const brand = ($$anchor2) => {
      NavBrand($$anchor2, {
        siteName: "Svelte 5",
        children: ($$anchor3, $$slotProps) => {
          var img = root_2$1();
          append($$anchor3, img);
        },
        $$slots: { default: true }
      });
    };
    Navbar($$anchor, {
      toggleNav,
      closeNav,
      get navStatus() {
        return get(navStatus);
      },
      breakPoint: "md",
      navClass: "bg-gray-100 rounded-xl",
      brand,
      children: ($$anchor2, $$slotProps) => {
        NavUl($$anchor2, {
          get activeUrl() {
            return get(activeUrl);
          },
          children: ($$anchor3, $$slotProps2) => {
            var fragment_3 = root_4$1();
            var node = first_child(fragment_3);
            NavLi(node, {
              href: "/",
              children: ($$anchor4, $$slotProps3) => {
                next();
                var text$1 = text("Home");
                append($$anchor4, text$1);
              },
              $$slots: { default: true }
            });
            var node_1 = sibling(node, 2);
            NavLi(node_1, {
              href: "/components/navbar",
              children: ($$anchor4, $$slotProps3) => {
                next();
                var text_1 = text("Navbar");
                append($$anchor4, text_1);
              },
              $$slots: { default: true }
            });
            var node_2 = sibling(node_1, 2);
            NavLi(node_2, {
              href: "/components/footer",
              children: ($$anchor4, $$slotProps3) => {
                next();
                var text_2 = text("Footer");
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
  pop();
}
var root_2 = template(`<img width="30" src="/images/svelte-icon.png" alt="svelte icon">`);
var root_5 = template(`<span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span> <span class="block truncate text-sm font-medium">name@flowbite.com</span>`, 1);
var root_6 = template(`<!> <!> <!> <!>`, 1);
var root_4 = template(`<!> <!> <!>`, 1);
var root_3$1 = template(`<div class="flex items-center space-x-1 md:order-2"><!> <div class="relative"><!></div> <!></div>`);
var root_13 = template(`<!> <!> <!>`, 1);
var root$1 = template(`<div class="h-80"><!></div>`);
function UserDropdown($$anchor, $$props) {
  push($$props, true);
  const $$stores = setup_stores();
  const $page = () => store_get(page, "$page", $$stores);
  let activeUrl = state(proxy($page().url.pathname));
  let nav = uiHelpers();
  let navStatus = state(false);
  let toggleNav = nav.toggle;
  let dropdownUser = uiHelpers();
  let dropdownUserStatus = state(false);
  let closeDropdownUser = dropdownUser.close;
  user_effect(() => {
    set(dropdownUserStatus, proxy(dropdownUser.isOpen));
    set(navStatus, proxy(nav.isOpen));
    set(activeUrl, proxy($page().url.pathname));
  });
  var div = root$1();
  var node = child(div);
  {
    const brand = ($$anchor2) => {
      NavBrand($$anchor2, {
        siteName: "Svelte 5 UI Lib",
        children: ($$anchor3, $$slotProps) => {
          var img = root_2();
          append($$anchor3, img);
        },
        $$slots: { default: true }
      });
    };
    const navSlotBlock = ($$anchor2) => {
      var div_1 = root_3$1();
      var node_1 = child(div_1);
      Avatar(node_1, {
        get onclick() {
          return dropdownUser.toggle;
        },
        src: "/images/profile-picture-3.webp",
        dot: { color: "green" }
      });
      var div_2 = sibling(node_1, 2);
      var node_2 = child(div_2);
      Dropdown(node_2, {
        get dropdownStatus() {
          return get(dropdownUserStatus);
        },
        closeDropdown: closeDropdownUser,
        params: { y: 0, duration: 200, easing: sineIn },
        class: "absolute -left-[110px] top-[14px] md:-left-[160px] ",
        children: ($$anchor3, $$slotProps) => {
          var fragment_1 = root_4();
          var node_3 = first_child(fragment_1);
          DropdownHeader(node_3, {
            class: "px-4 py-2",
            children: ($$anchor4, $$slotProps2) => {
              var fragment_2 = root_5();
              next(2);
              append($$anchor4, fragment_2);
            },
            $$slots: { default: true }
          });
          var node_4 = sibling(node_3, 2);
          DropdownUl(node_4, {
            children: ($$anchor4, $$slotProps2) => {
              var fragment_3 = root_6();
              var node_5 = first_child(fragment_3);
              DropdownLi(node_5, {
                href: "/",
                children: ($$anchor5, $$slotProps3) => {
                  next();
                  var text$1 = text("Dashboard");
                  append($$anchor5, text$1);
                },
                $$slots: { default: true }
              });
              var node_6 = sibling(node_5, 2);
              DropdownLi(node_6, {
                href: "/components/drawer",
                children: ($$anchor5, $$slotProps3) => {
                  next();
                  var text_1 = text("Drawer");
                  append($$anchor5, text_1);
                },
                $$slots: { default: true }
              });
              var node_7 = sibling(node_6, 2);
              DropdownLi(node_7, {
                href: "/components/footer",
                children: ($$anchor5, $$slotProps3) => {
                  next();
                  var text_2 = text("Footer");
                  append($$anchor5, text_2);
                },
                $$slots: { default: true }
              });
              var node_8 = sibling(node_7, 2);
              DropdownLi(node_8, {
                href: "/components",
                children: ($$anchor5, $$slotProps3) => {
                  next();
                  var text_3 = text("Alert");
                  append($$anchor5, text_3);
                },
                $$slots: { default: true }
              });
              append($$anchor4, fragment_3);
            },
            $$slots: { default: true }
          });
          var node_9 = sibling(node_4, 2);
          DropdownFooter(node_9, {
            class: "px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600",
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_4 = text("Sign out");
              append($$anchor4, text_4);
            },
            $$slots: { default: true }
          });
          append($$anchor3, fragment_1);
        },
        $$slots: { default: true }
      });
      reset(div_2);
      var node_10 = sibling(div_2, 2);
      NavHamburger(node_10, { toggleNav });
      reset(div_1);
      append($$anchor2, div_1);
    };
    Navbar(node, {
      get navStatus() {
        return get(navStatus);
      },
      hamburgerMenu: false,
      brand,
      navSlotBlock,
      children: ($$anchor2, $$slotProps) => {
        NavUl($$anchor2, {
          class: "order-1",
          get activeUrl() {
            return get(activeUrl);
          },
          children: ($$anchor3, $$slotProps2) => {
            var fragment_5 = root_13();
            var node_11 = first_child(fragment_5);
            NavLi(node_11, {
              href: "/",
              children: ($$anchor4, $$slotProps3) => {
                next();
                var text_5 = text("Home");
                append($$anchor4, text_5);
              },
              $$slots: { default: true }
            });
            var node_12 = sibling(node_11, 2);
            NavLi(node_12, {
              href: "/components/navbar",
              children: ($$anchor4, $$slotProps3) => {
                next();
                var text_6 = text("Navbar");
                append($$anchor4, text_6);
              },
              $$slots: { default: true }
            });
            var node_13 = sibling(node_12, 2);
            NavLi(node_13, {
              href: "/components/footer",
              children: ($$anchor4, $$slotProps3) => {
                next();
                var text_7 = text("Footer");
                append($$anchor4, text_7);
              },
              $$slots: { default: true }
            });
            append($$anchor3, fragment_5);
          },
          $$slots: { default: true }
        });
      },
      $$slots: {
        brand: true,
        navSlotBlock: true,
        default: true
      }
    });
  }
  reset(div);
  append($$anchor, div);
  pop();
}
var root_3 = template(`<div class="mb-12 flex flex-wrap"><!> <!></div> <!>`, 1);
var root = template(`<!> <!> <!> <!>`, 1);
function _page($$anchor, $$props) {
  push($$props, true);
  const dirName = "nav";
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/BackgroundColor.svelte": __vite_glob_0_0,
    "./examples/Breakpoint.svelte": __vite_glob_0_1,
    "./examples/CtaButton.svelte": __vite_glob_0_2,
    "./examples/Default.svelte": __vite_glob_0_3,
    "./examples/Dropdown.svelte": __vite_glob_0_4,
    "./examples/SearchNavbar.svelte": __vite_glob_0_5,
    "./examples/Sticky.svelte": __vite_glob_0_6,
    "./examples/UserDropdown.svelte": __vite_glob_0_7
  });
  const exampleArr = [
    {
      name: "Default",
      component: Default
    },
    {
      name: "Breakpoint",
      component: Breakpoint
    },
    {
      name: "Cta button",
      component: CtaButton
    },
    {
      name: "Sticky",
      component: Sticky
    },
    {
      name: "Search navbar",
      component: SearchNavbar
    },
    // need to fix this for extra space for div relative
    {
      name: "Dropdown",
      component: Dropdown_1
    },
    {
      name: "Background color",
      component: BackgroundColor
    },
    {
      name: "User dropdown",
      component: UserDropdown
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
      var text$1 = text("Navbar");
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
            labelClass: "w-40 my-1",
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
