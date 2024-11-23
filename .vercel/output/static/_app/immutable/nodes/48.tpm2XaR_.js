import { a as append, n as ns_template, b as text, c as comment, t as template } from "../chunks/disclose-version.0TX42Q8e.js";
import { p as push, g as getContext, c as child, r as reset, t as template_effect, s as sibling, n as next, a as pop, b as get, d as derived, u as user_effect, a7 as set, f as first_child, a6 as state } from "../chunks/runtime.BkfDdwap.js";
import { a as set_text, d as delegate, i as event } from "../chunks/store.B2xZ3Ft6.js";
import { e as each, i as index } from "../chunks/each.CtHIoDcm.js";
import { p as prop, i as if_block, r as rest_props, b as proxy, c as component } from "../chunks/props.B7eOu8hW.js";
import { s as set_attribute, a as set_attributes, t as twMerge, az as Dropdown, V as uiHelpers, aS as sineIn } from "../chunks/theme.BtjZjf2R.js";
import { C as CompoAttributesViewer, L as Label, R as Radio } from "../chunks/CompoAttributesViewer.HsPJjrMu.js";
import { H as HighlightCompo } from "../chunks/HighlightCompo.D1kgIYBY.js";
import { D as DynamicCodeBlockHighlight } from "../chunks/DynamicCodeBlockHighlight.BS23lgW_.js";
import { C as CodeWrapper } from "../chunks/CodeWrapper.CdoIAYb8.js";
import { H as H1 } from "../chunks/H1.DunGd_Oq.js";
import { H as H2 } from "../chunks/H2.qsp5CBkK.js";
import { g as getExampleFileName, d as isSvelteOverflow } from "../chunks/helpers.B9KbZW0W.js";
import "../chunks/legacy.DvF4DOPZ.js";
import { B as Button } from "../chunks/markdown.Ba9FtS5g.js";
import { S as Search } from "../chunks/Search.HiILrOcW.js";
import { D as DropdownUl } from "../chunks/DropdownUl.CBcIivYZ.js";
import { D as DropdownLi } from "../chunks/DropdownLi.DjyFOMgJ.js";
import { C as ChevronDownOutline } from "../chunks/ChevronDownOutline.C3ncqrR6.js";
import { S as SearchOutline } from "../chunks/SearchOutline.CyH-RaHz.js";
var root_1$3 = ns_template(`<title> </title>`);
var root_2$1 = ns_template(`<desc> </desc>`);
var root$6 = ns_template(`<svg><!><!><path fill-rule="evenodd" d="M5 8a1 1 0 0 1 1 1v3a4.006 4.006 0 0 0 4 4h4a4.006 4.006 0 0 0 4-4V9a1 1 0 1 1 2 0v3.001A6.006 6.006 0 0 1 14.001 18H13v2h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2v-2H9.999A6.006 6.006 0 0 1 4 12.001V9a1 1 0 0 1 1-1Z" clip-rule="evenodd"></path><path d="M7 6a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v5a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4V6Z"></path></svg>`);
function MicrophoneSolid($$anchor, $$props) {
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
  let size = prop($$props, "size", 19, () => ctx.size || "md"), color = prop($$props, "color", 19, () => ctx.color || "currentColor"), ariaLabel = prop($$props, "ariaLabel", 3, "microphone solid"), restProps = rest_props($$props, [
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
  var svg = root$6();
  let attributes;
  var node = child(svg);
  if_block(node, () => {
    var _a2;
    return ((_a2 = $$props.title) == null ? void 0 : _a2.id) && $$props.title.title;
  }, ($$anchor2) => {
    var title_1 = root_1$3();
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
    var desc_1 = root_2$1();
    var text_1 = child(desc_1, true);
    reset(desc_1);
    template_effect(() => {
      set_attribute(desc_1, "id", $$props.desc.id);
      set_text(text_1, $$props.desc.desc);
    });
    append($$anchor2, desc_1);
  });
  next(2);
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
const __vite_glob_0_0 = `<script lang="ts">
  import { sineIn } from "svelte/easing";
  import { Search, Button, Dropdown, DropdownUl, DropdownLi, uiHelpers } from "$lib";
  import { ChevronDownOutline, SearchOutline } from "flowbite-svelte-icons";
  const items = [{ label: "All categories" }, { label: "Mockups" }, { label: "Templates" }, { label: "Design" }, { label: "Logos" }];
  let selectCategory = $state("All categories");
  let dropdown = uiHelpers();
  let dropdownStatus = $state(false);
  let closeDropdown = dropdown.close;
  let transitionParams = {
    y: 0,
    duration: 200,
    easing: sineIn
  };
  const handleClick = (label: string) => {
    selectCategory = label;
    console.log("selectCategory", selectCategory);
    dropdown.close();
  };
  $effect(() => {
    dropdownStatus = dropdown.isOpen;
  });
<\/script>

<div class="h-48">
  <form class="flex">
    <Button class="whitespace-nowrap rounded-e-none border border-e-0 border-primary-700" onclick={dropdown.toggle}>
      {selectCategory}
      <ChevronDownOutline class="ms-2.5 h-2.5 w-2.5" />
    </Button>
    <div class="relative">
      <Dropdown {dropdownStatus} {closeDropdown} params={transitionParams} class="absolute -left-[160px] top-[40px]">
        <DropdownUl>
          {#each items as { label }}
            <DropdownLi onclick={() => handleClick(label)} liClass="hover:cursor-pointer py-1 pl-4 {selectCategory === label ? 'underline' : ''}">
              {label}
            </DropdownLi>
          {/each}
        </DropdownUl>
      </Dropdown>
    </div>
    <Search inputClass="rounded-none py-3 pl-8" placeholder="Searching {selectCategory}" />
    <Button class="rounded-s-none !p-2.5">
      <SearchOutline class="h-6 w-6" />
    </Button>
  </form>
</div>
`;
const __vite_glob_0_1 = `<script lang="ts">
  import { sineIn } from "svelte/easing";
  import { Search, Button, Dropdown, DropdownUl, DropdownLi, uiHelpers } from "$lib";
  import { ChevronDownOutline, SearchOutline } from "flowbite-svelte-icons";
  const countries = [
    {
      label: "United States",
      labelSelected: "USA",
      icon: "/images/forms/search-input/usa-flag.svg"
    },
    {
      label: "Germany",
      labelSelected: "DE",
      icon: "/images/forms/search-input/de-flag.svg"
    },
    {
      label: "Italy",
      labelSelected: "ITA",
      icon: "/images/forms/search-input/it-flag.svg"
    },
    {
      label: "China",
      labelSelected: "CH",
      icon: "/images/forms/search-input/ch-flag.svg"
    }
  ];
  let selectCountry = $state("USA");
  let buttonLabel = $derived(countries.find(({ labelSelected }) => labelSelected === selectCountry));
  let selectCategory = $state("All categories");
  let dropdown = uiHelpers();
  let dropdownStatus = $state(false);
  let closeDropdown = dropdown.close;
  let transitionParams = {
    y: 0,
    duration: 200,
    easing: sineIn
  };

  $effect(() => {
    dropdownStatus = dropdown.isOpen;
  });
<\/script>

<div class="h-48">
  <form class="flex">
    <Button class="whitespace-nowrap rounded-e-none border border-e-0 border-primary-700" onclick={dropdown.toggle}>
      <img class="me-2 h-3.5 w-3.5 rounded-full" src={buttonLabel?.icon} alt={buttonLabel?.label} />
      {buttonLabel?.labelSelected}
      <ChevronDownOutline class="ms-2.5 h-2.5 w-2.5" />
    </Button>
    <div class="relative">
      <Dropdown {dropdownStatus} {closeDropdown} params={transitionParams} class="absolute -left-[110px] top-[45px]">
        <DropdownUl>
          {#each countries as country}
            <DropdownLi onclick={() => (selectCountry = country.labelSelected)} liClass="font-medium py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 w-full text-left inline-flex items-center {selectCountry === country.labelSelected ? 'underline' : ''}">
              <img class="me-2 h-3.5 w-3.5 rounded-full" src={country.icon} alt={country.label} />
              {country.label}
            </DropdownLi>
          {/each}
        </DropdownUl>
      </Dropdown>
    </div>
    <Search inputClass="rounded-none py-3 pl-8" placeholder="Searching {selectCategory}" />
    <Button class="rounded-s-none !p-2.5">
      <SearchOutline class="h-6 w-6" />
    </Button>
  </form>
</div>
`;
const __vite_glob_0_2 = '<script lang="ts">\n  import { Search } from "$lib";\n<\/script>\n';
const __vite_glob_0_3 = '<script lang="ts">\n  import { Search, Button } from "$lib";\n  import { SearchOutline } from "flowbite-svelte-icons";\n<\/script>\n\n<form class="flex gap-2">\n  <Search />\n  <Button class="p-2.5">\n    <SearchOutline class="h-5 w-5" />\n  </Button>\n</form>\n';
const __vite_glob_0_4 = '<script lang="ts">\n  import { Search, Button } from "$lib";\n<\/script>\n\n<Search size="lg">\n  <Button class="mr-2">Search</Button>\n</Search>\n';
const __vite_glob_0_5 = '<script lang="ts">\n  import { Search, Button } from "$lib";\n  import { SearchOutline } from "flowbite-svelte-icons";\n  let value = $state("");\n  const submitted = () => {\n    alert(`You are searching: ${value}`);\n  };\n<\/script>\n\n<form class="flex gap-2" onsubmit={submitted}>\n  <Search bind:value />\n  <Button class="p-2.5" type="submit">\n    <SearchOutline class="h-5 w-5" />\n  </Button>\n</form>\n<p>You are searching: {value}</p>\n';
const __vite_glob_0_6 = '<script lang="ts">\n  import { Search, Button } from "$lib";\n  import { SearchOutline, MicrophoneSolid } from "flowbite-svelte-icons";\n  function handleVoiceBtn() {\n    alert("You clicked voice button");\n  }\n<\/script>\n\n<form class="flex gap-2">\n  <Search size="md" class="flex items-center gap-2" placeholder="Search Mockups, Logos, Design Templates...">\n    <button type="button" onclick={handleVoiceBtn} class="outline-none">\n      <MicrophoneSolid class="me-2 h-5 w-5" />\n    </button>\n  </Search>\n  <Button size="sm">\n    <SearchOutline class="-ms-1 me-2 h-6 w-6" />\n    Search\n  </Button>\n</form>\n';
function SizeLarge($$anchor) {
  Search($$anchor, {
    size: "lg",
    children: ($$anchor2, $$slotProps) => {
      Button($$anchor2, {
        class: "mr-2",
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text$1 = text("Search");
          append($$anchor3, text$1);
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
}
var root_1$2 = template(` <!>`, 1);
var root$5 = template(`<div class="h-48"><form class="flex"><!> <div class="relative"><!></div> <!> <!></form></div>`);
function Dropdown_1($$anchor, $$props) {
  push($$props, true);
  const items = [
    { label: "All categories" },
    { label: "Mockups" },
    { label: "Templates" },
    { label: "Design" },
    { label: "Logos" }
  ];
  let selectCategory = state("All categories");
  let dropdown = uiHelpers();
  let dropdownStatus = state(false);
  let closeDropdown = dropdown.close;
  let transitionParams = { y: 0, duration: 200, easing: sineIn };
  const handleClick = (label) => {
    set(selectCategory, proxy(label));
    console.log("selectCategory", get(selectCategory));
    dropdown.close();
  };
  user_effect(() => {
    set(dropdownStatus, proxy(dropdown.isOpen));
  });
  var div = root$5();
  var form = child(div);
  var node = child(form);
  Button(node, {
    class: "whitespace-nowrap rounded-e-none border border-e-0 border-primary-700",
    get onclick() {
      return dropdown.toggle;
    },
    children: ($$anchor2, $$slotProps) => {
      next();
      var fragment = root_1$2();
      var text2 = first_child(fragment);
      var node_1 = sibling(text2);
      ChevronDownOutline(node_1, { class: "ms-2.5 h-2.5 w-2.5" });
      template_effect(() => set_text(text2, `${get(selectCategory) ?? ""} `));
      append($$anchor2, fragment);
    },
    $$slots: { default: true }
  });
  var div_1 = sibling(node, 2);
  var node_2 = child(div_1);
  Dropdown(node_2, {
    get dropdownStatus() {
      return get(dropdownStatus);
    },
    closeDropdown,
    params: transitionParams,
    class: "absolute -left-[160px] top-[40px]",
    children: ($$anchor2, $$slotProps) => {
      DropdownUl($$anchor2, {
        children: ($$anchor3, $$slotProps2) => {
          var fragment_2 = comment();
          var node_3 = first_child(fragment_2);
          each(node_3, 17, () => items, index, ($$anchor4, $$item) => {
            let label = () => get($$item).label;
            var liClass = derived(() => `hover:cursor-pointer py-1 pl-4 ${(get(selectCategory) === label() ? "underline" : "") ?? ""}`);
            DropdownLi($$anchor4, {
              onclick: () => handleClick(label()),
              get liClass() {
                return get(liClass);
              },
              children: ($$anchor5, $$slotProps3) => {
                next();
                var text_1 = text();
                template_effect(() => set_text(text_1, label()));
                append($$anchor5, text_1);
              },
              $$slots: { default: true }
            });
          });
          append($$anchor3, fragment_2);
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
  reset(div_1);
  var node_4 = sibling(div_1, 2);
  Search(node_4, {
    inputClass: "rounded-none py-3 pl-8",
    get placeholder() {
      return `Searching ${get(selectCategory) ?? ""}`;
    }
  });
  var node_5 = sibling(node_4, 2);
  Button(node_5, {
    class: "rounded-s-none !p-2.5",
    children: ($$anchor2, $$slotProps) => {
      SearchOutline($$anchor2, { class: "h-6 w-6" });
    },
    $$slots: { default: true }
  });
  reset(form);
  reset(div);
  append($$anchor, div);
  pop();
}
var root$4 = template(`<form class="flex gap-2"><!> <!></form>`);
function SimpleSearch($$anchor) {
  var form = root$4();
  var node = child(form);
  Search(node, {});
  var node_1 = sibling(node, 2);
  Button(node_1, {
    class: "p-2.5",
    children: ($$anchor2, $$slotProps) => {
      SearchOutline($$anchor2, { class: "h-5 w-5" });
    },
    $$slots: { default: true }
  });
  reset(form);
  append($$anchor, form);
}
var root_1$1 = template(`<img class="me-2 h-3.5 w-3.5 rounded-full"> <!>`, 1);
var root_5$1 = template(`<img class="me-2 h-3.5 w-3.5 rounded-full"> `, 1);
var root$3 = template(`<div class="h-48"><form class="flex"><!> <div class="relative"><!></div> <!> <!></form></div>`);
function Location($$anchor, $$props) {
  push($$props, true);
  const countries = [
    {
      label: "United States",
      labelSelected: "USA",
      icon: "/images/forms/search-input/usa-flag.svg"
    },
    {
      label: "Germany",
      labelSelected: "DE",
      icon: "/images/forms/search-input/de-flag.svg"
    },
    {
      label: "Italy",
      labelSelected: "ITA",
      icon: "/images/forms/search-input/it-flag.svg"
    },
    {
      label: "China",
      labelSelected: "CH",
      icon: "/images/forms/search-input/ch-flag.svg"
    }
  ];
  let selectCountry = state("USA");
  let buttonLabel = derived(() => countries.find(({ labelSelected }) => labelSelected === get(selectCountry)));
  let selectCategory = "All categories";
  let dropdown = uiHelpers();
  let dropdownStatus = state(false);
  let closeDropdown = dropdown.close;
  let transitionParams = { y: 0, duration: 200, easing: sineIn };
  user_effect(() => {
    set(dropdownStatus, proxy(dropdown.isOpen));
  });
  var div = root$3();
  var form = child(div);
  var node = child(form);
  Button(node, {
    class: "whitespace-nowrap rounded-e-none border border-e-0 border-primary-700",
    get onclick() {
      return dropdown.toggle;
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment = root_1$1();
      var img = first_child(fragment);
      var text2 = sibling(img);
      var node_1 = sibling(text2);
      ChevronDownOutline(node_1, { class: "ms-2.5 h-2.5 w-2.5" });
      template_effect(() => {
        var _a, _b, _c;
        set_attribute(img, "src", (_a = get(buttonLabel)) == null ? void 0 : _a.icon);
        set_attribute(img, "alt", (_b = get(buttonLabel)) == null ? void 0 : _b.label);
        set_text(text2, ` ${((_c = get(buttonLabel)) == null ? void 0 : _c.labelSelected) ?? ""} `);
      });
      append($$anchor2, fragment);
    },
    $$slots: { default: true }
  });
  var div_1 = sibling(node, 2);
  var node_2 = child(div_1);
  Dropdown(node_2, {
    get dropdownStatus() {
      return get(dropdownStatus);
    },
    closeDropdown,
    params: transitionParams,
    class: "absolute -left-[110px] top-[45px]",
    children: ($$anchor2, $$slotProps) => {
      DropdownUl($$anchor2, {
        children: ($$anchor3, $$slotProps2) => {
          var fragment_2 = comment();
          var node_3 = first_child(fragment_2);
          each(node_3, 17, () => countries, index, ($$anchor4, country) => {
            var liClass = derived(() => `font-medium py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 w-full text-left inline-flex items-center ${(get(selectCountry) === get(country).labelSelected ? "underline" : "") ?? ""}`);
            DropdownLi($$anchor4, {
              onclick: () => set(selectCountry, proxy(get(country).labelSelected)),
              get liClass() {
                return get(liClass);
              },
              children: ($$anchor5, $$slotProps3) => {
                var fragment_4 = root_5$1();
                var img_1 = first_child(fragment_4);
                var text_1 = sibling(img_1);
                template_effect(() => {
                  set_attribute(img_1, "src", get(country).icon);
                  set_attribute(img_1, "alt", get(country).label);
                  set_text(text_1, ` ${get(country).label ?? ""}`);
                });
                append($$anchor5, fragment_4);
              },
              $$slots: { default: true }
            });
          });
          append($$anchor3, fragment_2);
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
  reset(div_1);
  var node_4 = sibling(div_1, 2);
  Search(node_4, {
    inputClass: "rounded-none py-3 pl-8",
    get placeholder() {
      return `Searching ${selectCategory}`;
    }
  });
  var node_5 = sibling(node_4, 2);
  Button(node_5, {
    class: "rounded-s-none !p-2.5",
    children: ($$anchor2, $$slotProps) => {
      SearchOutline($$anchor2, { class: "h-6 w-6" });
    },
    $$slots: { default: true }
  });
  reset(form);
  reset(div);
  append($$anchor, div);
  pop();
}
function handleVoiceBtn() {
  alert("You clicked voice button");
}
var root_1 = template(`<button type="button" class="outline-none"><!></button>`);
var root_2 = template(`<!> Search`, 1);
var root$2 = template(`<form class="flex gap-2"><!> <!></form>`);
function Voice($$anchor) {
  var form = root$2();
  var node = child(form);
  Search(node, {
    size: "md",
    class: "flex items-center gap-2",
    placeholder: "Search Mockups, Logos, Design Templates...",
    children: ($$anchor2, $$slotProps) => {
      var button = root_1();
      button.__click = [handleVoiceBtn];
      var node_1 = child(button);
      MicrophoneSolid(node_1, { class: "me-2 h-5 w-5" });
      reset(button);
      append($$anchor2, button);
    },
    $$slots: { default: true }
  });
  var node_2 = sibling(node, 2);
  Button(node_2, {
    size: "sm",
    children: ($$anchor2, $$slotProps) => {
      var fragment = root_2();
      var node_3 = first_child(fragment);
      SearchOutline(node_3, { class: "-ms-1 me-2 h-6 w-6" });
      next();
      append($$anchor2, fragment);
    },
    $$slots: { default: true }
  });
  reset(form);
  append($$anchor, form);
}
delegate(["click"]);
var root$1 = template(`<form class="flex gap-2"><!> <!></form> <p> </p>`, 1);
function ValueBinding($$anchor) {
  let value = state("");
  const submitted = () => {
    alert(`You are searching: ${get(value)}`);
  };
  var fragment = root$1();
  var form = first_child(fragment);
  var node = child(form);
  Search(node, {
    get value() {
      return get(value);
    },
    set value($$value) {
      set(value, proxy($$value));
    }
  });
  var node_1 = sibling(node, 2);
  Button(node_1, {
    class: "p-2.5",
    type: "submit",
    children: ($$anchor2, $$slotProps) => {
      SearchOutline($$anchor2, { class: "h-5 w-5" });
    },
    $$slots: { default: true }
  });
  reset(form);
  var p = sibling(form, 2);
  var text2 = child(p);
  reset(p);
  template_effect(() => set_text(text2, `You are searching: ${get(value) ?? ""}`));
  event("submit", form, submitted);
  append($$anchor, fragment);
}
var root_5 = template(`<div class="mb-8 flex flex-wrap"><!> <!></div> <!>`, 1);
var root = template(`<!> <!> <!> <!> <!> <!> <!>`, 1);
function _page($$anchor, $$props) {
  push($$props, true);
  const dirName = "forms/search";
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/Dropdown.svelte": __vite_glob_0_0,
    "./examples/Location.svelte": __vite_glob_0_1,
    "./examples/Setup.svelte": __vite_glob_0_2,
    "./examples/SimpleSearch.svelte": __vite_glob_0_3,
    "./examples/SizeLarge.svelte": __vite_glob_0_4,
    "./examples/ValueBinding.svelte": __vite_glob_0_5,
    "./examples/Voice.svelte": __vite_glob_0_6
  });
  const exampleArr = [
    {
      name: "Size large",
      component: SizeLarge
    },
    {
      name: "Simple search",
      component: SimpleSearch
    },
    {
      name: "Dropdown",
      component: Dropdown_1
    },
    {
      name: "Location",
      component: Location
    },
    {
      name: "Voice",
      component: Voice
    },
    {
      name: "Value binding",
      component: ValueBinding
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
      var text$1 = text("Search input");
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
  var node_1 = sibling(node, 2);
  H2(node_1, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_1 = text("Setup");
      append($$anchor2, text_1);
    },
    $$slots: { default: true }
  });
  var node_2 = sibling(node_1, 2);
  HighlightCompo(node_2, {
    get code() {
      return exampleModules[`./examples/Setup.svelte`];
    }
  });
  var node_3 = sibling(node_2, 2);
  H2(node_3, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_2 = text("Examples");
      append($$anchor2, text_2);
    },
    $$slots: { default: true }
  });
  var node_4 = sibling(node_3, 2);
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
    CodeWrapper(node_4, {
      codeblock,
      children: ($$anchor2, $$slotProps) => {
        var fragment_2 = root_5();
        var div = first_child(fragment_2);
        var node_5 = child(div);
        Label(node_5, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_3 = text("Example");
            append($$anchor3, text_3);
          },
          $$slots: { default: true }
        });
        var node_6 = sibling(node_5, 2);
        each(node_6, 17, () => exampleArr, index, ($$anchor3, style) => {
          Radio($$anchor3, {
            labelClass: "w-44 my-1",
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
              var text_4 = text();
              template_effect(() => set_text(text_4, get(style).name));
              append($$anchor4, text_4);
            },
            $$slots: { default: true }
          });
        });
        reset(div);
        var node_7 = sibling(div, 2);
        component(node_7, () => get(SelectedComponent), ($$anchor3, $$component) => {
          $$component($$anchor3, {});
        });
        append($$anchor2, fragment_2);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_8 = sibling(node_4, 2);
  H2(node_8, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_5 = text("Component data");
      append($$anchor2, text_5);
    },
    $$slots: { default: true }
  });
  var node_9 = sibling(node_8, 2);
  CompoAttributesViewer(node_9, { dirName });
  append($$anchor, fragment);
  pop();
}
export {
  _page as component
};
