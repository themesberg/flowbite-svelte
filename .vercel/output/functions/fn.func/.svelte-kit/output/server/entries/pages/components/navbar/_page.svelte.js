import { Q as push, a1 as getContext, a0 as spread_attributes, S as pop, Z as store_get, $ as unsubscribe_stores, a3 as copy_payload, a4 as assign_payload, Y as ensure_array_like, V as escape_html } from "../../../../chunks/index.js";
import { M as navhamburger } from "../../../../chunks/theme.js";
import { L as Label, R as Radio, C as CompoAttributesViewer } from "../../../../chunks/CompoAttributesViewer.js";
import { D as DynamicCodeBlockHighlight } from "../../../../chunks/DynamicCodeBlockHighlight.js";
import { C as CodeWrapper } from "../../../../chunks/CodeWrapper.js";
import { a as H1 } from "../../../../chunks/H1.js";
import { H as H2 } from "../../../../chunks/H2.js";
import { g as getExampleFileName, i as isSvelteOverflow } from "../../../../chunks/helpers.js";
import { u as uiHelpers } from "../../../../chunks/uiHelpers.svelte.js";
import { N as Navbar, a as NavUl, c as NavLi, b as NavBrand } from "../../../../chunks/NavUl.js";
import { p as page } from "../../../../chunks/stores.js";
import { S as Skeleton, I as ImagePlaceholder } from "../../../../chunks/Skeleton.js";
import { T as TextPlaceholder } from "../../../../chunks/TextPlaceholder.js";
import { D as Dropdown, a as DropdownUl } from "../../../../chunks/DropdownUl.js";
import { D as DropdownLi } from "../../../../chunks/DropdownLi.js";
import { C as ChevronDownOutline } from "../../../../chunks/ChevronDownOutline.js";
import { B as Button } from "../../../../chunks/markdown.js";
import { I as Input } from "../../../../chunks/index5.js";
import { S as SearchOutline } from "../../../../chunks/SearchOutline.js";
import { A as Avatar } from "../../../../chunks/Avatar.js";
import { D as DropdownHeader } from "../../../../chunks/DropdownHeader.js";
import { D as DropdownFooter } from "../../../../chunks/DropdownFooter.js";
import { s as sineIn } from "../../../../chunks/index4.js";
function NavHamburger($$payload, $$props) {
  push();
  let {
    toggleNav,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let breakPoint;
  const context = getContext("navbarContext");
  breakPoint = context.breakPoint ?? "md";
  const toggleButton = navhamburger({ breakPoint, className });
  $$payload.out += `<button${spread_attributes({
    type: "button",
    ...restProps,
    class: toggleButton
  })}><span class="sr-only">Open main menu</span> <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path></svg></button>`;
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
function Default($$payload, $$props) {
  push();
  var $$store_subs;
  let activeUrl = store_get($$store_subs ??= {}, "$page", page).url.pathname;
  let nav = uiHelpers();
  let navStatus = false;
  let toggleNav = nav.toggle;
  let closeNav = nav.close;
  {
    let brand = function($$payload2) {
      NavBrand($$payload2, {
        siteName: "Svelte 5",
        children: ($$payload3) => {
          $$payload3.out += `<img width="30" src="/images/svelte-icon.png" alt="svelte icon">`;
        },
        $$slots: { default: true }
      });
    };
    Navbar($$payload, {
      toggleNav,
      closeNav,
      navStatus,
      breakPoint: "md",
      brand,
      children: ($$payload2) => {
        NavUl($$payload2, {
          activeUrl,
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
              href: "/components/navbar",
              children: ($$payload4) => {
                $$payload4.out += `<!---->Navbar`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!----> `;
            NavLi($$payload3, {
              href: "/components/footer",
              children: ($$payload4) => {
                $$payload4.out += `<!---->Footer`;
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
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function Breakpoint($$payload, $$props) {
  push();
  var $$store_subs;
  let activeUrl = store_get($$store_subs ??= {}, "$page", page).url.pathname;
  let nav = uiHelpers();
  let navStatus = false;
  let toggleNav = nav.toggle;
  let closeNav = nav.close;
  {
    let brand = function($$payload2) {
      NavBrand($$payload2, {
        siteName: "Svelte 5",
        children: ($$payload3) => {
          $$payload3.out += `<img width="30" src="/images/svelte-icon.png" alt="svelte icon">`;
        },
        $$slots: { default: true }
      });
    };
    Navbar($$payload, {
      toggleNav,
      closeNav,
      navStatus,
      breakPoint: "lg",
      brand,
      children: ($$payload2) => {
        NavUl($$payload2, {
          activeUrl,
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
              href: "/components/navbar",
              children: ($$payload4) => {
                $$payload4.out += `<!---->Navbar`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!----> `;
            NavLi($$payload3, {
              href: "/components/footer",
              children: ($$payload4) => {
                $$payload4.out += `<!---->Footer`;
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
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function Sticky($$payload, $$props) {
  push();
  var $$store_subs;
  let activeUrl = store_get($$store_subs ??= {}, "$page", page).url.pathname;
  let nav = uiHelpers();
  let navStatus = false;
  let toggleNav = nav.toggle;
  let closeNav = nav.close;
  $$payload.out += `<div class="relative">`;
  {
    let brand = function($$payload2) {
      NavBrand($$payload2, {
        siteName: "Svelte 5",
        children: ($$payload3) => {
          $$payload3.out += `<img width="30" src="/images/svelte-icon.png" alt="svelte icon">`;
        },
        $$slots: { default: true }
      });
    };
    Navbar($$payload, {
      toggleNav,
      closeNav,
      navStatus,
      breakPoint: "md",
      navClass: "absolute w-full z-20 top-0 start-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700",
      brand,
      children: ($$payload2) => {
        NavUl($$payload2, {
          activeUrl,
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
              href: "/components/navbar",
              children: ($$payload4) => {
                $$payload4.out += `<!---->Navbar`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!----> `;
            NavLi($$payload3, {
              href: "/components/footer",
              children: ($$payload4) => {
                $$payload4.out += `<!---->Footer`;
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
  $$payload.out += `<!----> <div style="height:300px;" class="overflow-auto px-8 py-24">`;
  Skeleton($$payload, { class: "mb-8 mt-16" });
  $$payload.out += `<!----> `;
  ImagePlaceholder($$payload, { class: "my-8" });
  $$payload.out += `<!----> `;
  TextPlaceholder($$payload, { class: "my-8" });
  $$payload.out += `<!----></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function Dropdown_1($$payload, $$props) {
  push();
  var $$store_subs;
  let activeUrl = store_get($$store_subs ??= {}, "$page", page).url.pathname;
  let nav = uiHelpers();
  let navStatus = false;
  let toggleNav = nav.toggle;
  let closeNav = nav.close;
  let dropdown = uiHelpers();
  let dropdownStatus = false;
  let closeDropdown = dropdown.close;
  $$payload.out += `<div class="h-64">`;
  {
    let brand = function($$payload2) {
      NavBrand($$payload2, {
        siteName: "Svelte 5",
        children: ($$payload3) => {
          $$payload3.out += `<img width="30" src="/images/svelte-icon.png" alt="svelte icon">`;
        },
        $$slots: { default: true }
      });
    };
    Navbar($$payload, {
      toggleNav,
      closeNav,
      navStatus,
      breakPoint: "md",
      brand,
      children: ($$payload2) => {
        NavUl($$payload2, {
          activeUrl,
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
              href: "/components/navbar",
              children: ($$payload4) => {
                $$payload4.out += `<!---->Navbar`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!----> `;
            NavLi($$payload3, {
              onclick: dropdown.toggle,
              class: "cursor-pointer",
              children: ($$payload4) => {
                $$payload4.out += `<!---->Dropdown`;
                ChevronDownOutline($$payload4, {
                  class: "ms-2 inline h-6 w-6 text-primary-800 dark:text-white"
                });
                $$payload4.out += `<!---->`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!----> <div class="relative">`;
            Dropdown($$payload3, {
              dropdownStatus,
              closeDropdown,
              class: "absolute -top-[20px] left-[100px] md:-left-[170px] md:top-[20px]",
              children: ($$payload4) => {
                DropdownUl($$payload4, {
                  children: ($$payload5) => {
                    DropdownLi($$payload5, {
                      href: "/components/alert",
                      children: ($$payload6) => {
                        $$payload6.out += `<!---->Alert`;
                      },
                      $$slots: { default: true }
                    });
                    $$payload5.out += `<!----> `;
                    DropdownLi($$payload5, {
                      href: "/components/button",
                      children: ($$payload6) => {
                        $$payload6.out += `<!---->Button`;
                      },
                      $$slots: { default: true }
                    });
                    $$payload5.out += `<!----> `;
                    DropdownLi($$payload5, {
                      href: "/components/drawer",
                      children: ($$payload6) => {
                        $$payload6.out += `<!---->Drawer`;
                      },
                      $$slots: { default: true }
                    });
                    $$payload5.out += `<!---->`;
                  },
                  $$slots: { default: true }
                });
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!----></div> `;
            NavLi($$payload3, {
              href: "/components/footer",
              children: ($$payload4) => {
                $$payload4.out += `<!---->Footer`;
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
  $$payload.out += `<!----></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function SearchNavbar($$payload, $$props) {
  push();
  var $$store_subs;
  let activeUrl = store_get($$store_subs ??= {}, "$page", page).url.pathname;
  let nav = uiHelpers();
  let navStatus = false;
  let toggleNav = nav.toggle;
  {
    let brand = function($$payload2) {
      NavBrand($$payload2, {
        siteName: "Svelte 5 UI Lib",
        children: ($$payload3) => {
          $$payload3.out += `<img width="30" src="/images/svelte-icon.png" alt="svelte icon">`;
        },
        $$slots: { default: true }
      });
    }, navSlotBlock = function($$payload2) {
      $$payload2.out += `<div class="flex items-center space-x-1 md:order-2">`;
      Button($$payload2, {
        class: "me-1 rounded-lg bg-white p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700",
        children: ($$payload3) => {
          SearchOutline($$payload3, { class: "h-5 w-5" });
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> <div class="relative hidden md:block"><div class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">`;
      SearchOutline($$payload2, { class: "h-4 w-4" });
      $$payload2.out += `<!----></div> `;
      Input($$payload2, {
        id: "search-navbar",
        class: "bg-transparent ps-10",
        placeholder: "Search..."
      });
      $$payload2.out += `<!----></div> `;
      NavHamburger($$payload2, { toggleNav });
      $$payload2.out += `<!----></div>`;
    };
    Navbar($$payload, {
      navStatus,
      breakPoint: "lg",
      hamburgerMenu: false,
      brand,
      navSlotBlock,
      children: ($$payload2) => {
        NavUl($$payload2, {
          class: "order-1",
          activeUrl,
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
              href: "/components/navbar",
              children: ($$payload4) => {
                $$payload4.out += `<!---->Navbar`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!----> `;
            NavLi($$payload3, {
              href: "/components/footer",
              children: ($$payload4) => {
                $$payload4.out += `<!---->Footer`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!---->`;
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
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function CtaButton($$payload, $$props) {
  push();
  var $$store_subs;
  let activeUrl = store_get($$store_subs ??= {}, "$page", page).url.pathname;
  let nav = uiHelpers();
  let navStatus = false;
  let toggleNav = nav.toggle;
  {
    let brand = function($$payload2) {
      NavBrand($$payload2, {
        siteName: "Svelte 5 UI Lib",
        children: ($$payload3) => {
          $$payload3.out += `<img width="30" src="/images/svelte-icon.png" alt="svelte icon">`;
        },
        $$slots: { default: true }
      });
    }, navSlotBlock = function($$payload2) {
      $$payload2.out += `<div class="flex items-center space-x-1 md:order-2">`;
      Button($$payload2, {
        size: "sm",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Get started`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      NavHamburger($$payload2, { toggleNav });
      $$payload2.out += `<!----></div>`;
    };
    Navbar($$payload, {
      navStatus,
      breakPoint: "md",
      hamburgerMenu: false,
      brand,
      navSlotBlock,
      children: ($$payload2) => {
        NavUl($$payload2, {
          class: "order-1",
          activeUrl,
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
              href: "/components/navbar",
              children: ($$payload4) => {
                $$payload4.out += `<!---->Navbar`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!----> `;
            NavLi($$payload3, {
              href: "/components/footer",
              children: ($$payload4) => {
                $$payload4.out += `<!---->Footer`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!---->`;
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
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function BackgroundColor($$payload, $$props) {
  push();
  var $$store_subs;
  let activeUrl = store_get($$store_subs ??= {}, "$page", page).url.pathname;
  let nav = uiHelpers();
  let navStatus = false;
  let toggleNav = nav.toggle;
  let closeNav = nav.close;
  {
    let brand = function($$payload2) {
      NavBrand($$payload2, {
        siteName: "Svelte 5",
        children: ($$payload3) => {
          $$payload3.out += `<img width="30" src="/images/svelte-icon.png" alt="svelte icon">`;
        },
        $$slots: { default: true }
      });
    };
    Navbar($$payload, {
      toggleNav,
      closeNav,
      navStatus,
      breakPoint: "md",
      navClass: "bg-gray-100 rounded-xl",
      brand,
      children: ($$payload2) => {
        NavUl($$payload2, {
          activeUrl,
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
              href: "/components/navbar",
              children: ($$payload4) => {
                $$payload4.out += `<!---->Navbar`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!----> `;
            NavLi($$payload3, {
              href: "/components/footer",
              children: ($$payload4) => {
                $$payload4.out += `<!---->Footer`;
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
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function UserDropdown($$payload, $$props) {
  push();
  var $$store_subs;
  let activeUrl = store_get($$store_subs ??= {}, "$page", page).url.pathname;
  let nav = uiHelpers();
  let navStatus = false;
  let toggleNav = nav.toggle;
  let dropdownUser = uiHelpers();
  let dropdownUserStatus = false;
  let closeDropdownUser = dropdownUser.close;
  $$payload.out += `<div class="h-80">`;
  {
    let brand = function($$payload2) {
      NavBrand($$payload2, {
        siteName: "Svelte 5 UI Lib",
        children: ($$payload3) => {
          $$payload3.out += `<img width="30" src="/images/svelte-icon.png" alt="svelte icon">`;
        },
        $$slots: { default: true }
      });
    }, navSlotBlock = function($$payload2) {
      $$payload2.out += `<div class="flex items-center space-x-1 md:order-2">`;
      Avatar($$payload2, {
        onclick: dropdownUser.toggle,
        src: "/images/profile-picture-3.webp",
        dot: { color: "green" }
      });
      $$payload2.out += `<!----> <div class="relative">`;
      Dropdown($$payload2, {
        dropdownStatus: dropdownUserStatus,
        closeDropdown: closeDropdownUser,
        params: { y: 0, duration: 200, easing: sineIn },
        class: "absolute -left-[110px] top-[14px] md:-left-[160px] ",
        children: ($$payload3) => {
          DropdownHeader($$payload3, {
            class: "px-4 py-2",
            children: ($$payload4) => {
              $$payload4.out += `<span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span> <span class="block truncate text-sm font-medium">name@flowbite.com</span>`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          DropdownUl($$payload3, {
            children: ($$payload4) => {
              DropdownLi($$payload4, {
                href: "/",
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Dashboard`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              DropdownLi($$payload4, {
                href: "/components/drawer",
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Drawer`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              DropdownLi($$payload4, {
                href: "/components/footer",
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Footer`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              DropdownLi($$payload4, {
                href: "/components",
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Alert`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          DropdownFooter($$payload3, {
            class: "px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Sign out`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----></div> `;
      NavHamburger($$payload2, { toggleNav });
      $$payload2.out += `<!----></div>`;
    };
    Navbar($$payload, {
      navStatus,
      hamburgerMenu: false,
      brand,
      navSlotBlock,
      children: ($$payload2) => {
        NavUl($$payload2, {
          class: "order-1",
          activeUrl,
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
              href: "/components/navbar",
              children: ($$payload4) => {
                $$payload4.out += `<!---->Navbar`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!----> `;
            NavLi($$payload3, {
              href: "/components/footer",
              children: ($$payload4) => {
                $$payload4.out += `<!---->Footer`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!---->`;
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
  $$payload.out += `<!----></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function _page($$payload, $$props) {
  push();
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
        $$payload3.out += `<!---->Navbar`;
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
              labelClass: "w-40 my-1",
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
