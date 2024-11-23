import { Q as push, a1 as getContext, a0 as spread_attributes, W as attr, V as escape_html, S as pop, Y as ensure_array_like, X as stringify, a3 as copy_payload, a4 as assign_payload } from "../../../../chunks/index.js";
import "../../../../chunks/theme.js";
import { L as Label, R as Radio, C as CompoAttributesViewer } from "../../../../chunks/CompoAttributesViewer.js";
import { H as HighlightCompo } from "../../../../chunks/HighlightCompo.js";
import { D as DynamicCodeBlockHighlight } from "../../../../chunks/DynamicCodeBlockHighlight.js";
import { C as CodeWrapper } from "../../../../chunks/CodeWrapper.js";
import { a as H1 } from "../../../../chunks/H1.js";
import { H as H2 } from "../../../../chunks/H2.js";
import { g as getExampleFileName, i as isSvelteOverflow } from "../../../../chunks/helpers.js";
import { B as Button } from "../../../../chunks/markdown.js";
import { S as Search } from "../../../../chunks/Search.js";
import { s as sineIn } from "../../../../chunks/index4.js";
import { u as uiHelpers } from "../../../../chunks/uiHelpers.svelte.js";
import { D as Dropdown, a as DropdownUl } from "../../../../chunks/DropdownUl.js";
import { D as DropdownLi } from "../../../../chunks/DropdownLi.js";
import { C as ChevronDownOutline } from "../../../../chunks/ChevronDownOutline.js";
import { S as SearchOutline } from "../../../../chunks/SearchOutline.js";
import { twMerge } from "tailwind-merge";
function MicrophoneSolid($$payload, $$props) {
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
    desc,
    class: className,
    ariaLabel = "microphone solid",
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let ariaDescribedby = `${title?.id || ""} ${desc?.id || ""}`;
  const hasDescription = !!(title?.id || desc?.id);
  $$payload.out += `<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
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
  $$payload.out += `<!--]--><path fill-rule="evenodd" d="M5 8a1 1 0 0 1 1 1v3a4.006 4.006 0 0 0 4 4h4a4.006 4.006 0 0 0 4-4V9a1 1 0 1 1 2 0v3.001A6.006 6.006 0 0 1 14.001 18H13v2h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2v-2H9.999A6.006 6.006 0 0 1 4 12.001V9a1 1 0 0 1 1-1Z" clip-rule="evenodd"></path><path d="M7 6a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v5a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4V6Z"></path></svg>`;
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
function SizeLarge($$payload) {
  Search($$payload, {
    size: "lg",
    children: ($$payload2) => {
      Button($$payload2, {
        class: "mr-2",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Search`;
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
}
function Dropdown_1($$payload, $$props) {
  push();
  const items = [
    { label: "All categories" },
    { label: "Mockups" },
    { label: "Templates" },
    { label: "Design" },
    { label: "Logos" }
  ];
  let selectCategory = "All categories";
  let dropdown = uiHelpers();
  let dropdownStatus = false;
  let closeDropdown = dropdown.close;
  let transitionParams = { y: 0, duration: 200, easing: sineIn };
  const handleClick = (label) => {
    selectCategory = label;
    console.log("selectCategory", selectCategory);
    dropdown.close();
  };
  $$payload.out += `<div class="h-48"><form class="flex">`;
  Button($$payload, {
    class: "whitespace-nowrap rounded-e-none border border-e-0 border-primary-700",
    onclick: dropdown.toggle,
    children: ($$payload2) => {
      $$payload2.out += `<!---->${escape_html(selectCategory)} `;
      ChevronDownOutline($$payload2, { class: "ms-2.5 h-2.5 w-2.5" });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <div class="relative">`;
  Dropdown($$payload, {
    dropdownStatus,
    closeDropdown,
    params: transitionParams,
    class: "absolute -left-[160px] top-[40px]",
    children: ($$payload2) => {
      DropdownUl($$payload2, {
        children: ($$payload3) => {
          const each_array = ensure_array_like(items);
          $$payload3.out += `<!--[-->`;
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let { label } = each_array[$$index];
            DropdownLi($$payload3, {
              onclick: () => handleClick(label),
              liClass: `hover:cursor-pointer py-1 pl-4 ${stringify(selectCategory === label ? "underline" : "")}`,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(label)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]-->`;
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div> `;
  Search($$payload, {
    inputClass: "rounded-none py-3 pl-8",
    placeholder: `Searching ${stringify(selectCategory)}`
  });
  $$payload.out += `<!----> `;
  Button($$payload, {
    class: "rounded-s-none !p-2.5",
    children: ($$payload2) => {
      SearchOutline($$payload2, { class: "h-6 w-6" });
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></form></div>`;
  pop();
}
function SimpleSearch($$payload) {
  $$payload.out += `<form class="flex gap-2">`;
  Search($$payload, {});
  $$payload.out += `<!----> `;
  Button($$payload, {
    class: "p-2.5",
    children: ($$payload2) => {
      SearchOutline($$payload2, { class: "h-5 w-5" });
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></form>`;
}
function Location($$payload, $$props) {
  push();
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
  let selectCountry = "USA";
  let buttonLabel = countries.find(({ labelSelected }) => labelSelected === selectCountry);
  let selectCategory = "All categories";
  let dropdown = uiHelpers();
  let dropdownStatus = false;
  let closeDropdown = dropdown.close;
  let transitionParams = { y: 0, duration: 200, easing: sineIn };
  $$payload.out += `<div class="h-48"><form class="flex">`;
  Button($$payload, {
    class: "whitespace-nowrap rounded-e-none border border-e-0 border-primary-700",
    onclick: dropdown.toggle,
    children: ($$payload2) => {
      $$payload2.out += `<img class="me-2 h-3.5 w-3.5 rounded-full"${attr("src", buttonLabel?.icon)}${attr("alt", buttonLabel?.label)}> ${escape_html(buttonLabel?.labelSelected)} `;
      ChevronDownOutline($$payload2, { class: "ms-2.5 h-2.5 w-2.5" });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <div class="relative">`;
  Dropdown($$payload, {
    dropdownStatus,
    closeDropdown,
    params: transitionParams,
    class: "absolute -left-[110px] top-[45px]",
    children: ($$payload2) => {
      DropdownUl($$payload2, {
        children: ($$payload3) => {
          const each_array = ensure_array_like(countries);
          $$payload3.out += `<!--[-->`;
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let country = each_array[$$index];
            DropdownLi($$payload3, {
              onclick: () => selectCountry = country.labelSelected,
              liClass: `font-medium py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 w-full text-left inline-flex items-center ${stringify(selectCountry === country.labelSelected ? "underline" : "")}`,
              children: ($$payload4) => {
                $$payload4.out += `<img class="me-2 h-3.5 w-3.5 rounded-full"${attr("src", country.icon)}${attr("alt", country.label)}> ${escape_html(country.label)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]-->`;
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div> `;
  Search($$payload, {
    inputClass: "rounded-none py-3 pl-8",
    placeholder: `Searching ${stringify(selectCategory)}`
  });
  $$payload.out += `<!----> `;
  Button($$payload, {
    class: "rounded-s-none !p-2.5",
    children: ($$payload2) => {
      SearchOutline($$payload2, { class: "h-6 w-6" });
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></form></div>`;
  pop();
}
function Voice($$payload) {
  $$payload.out += `<form class="flex gap-2">`;
  Search($$payload, {
    size: "md",
    class: "flex items-center gap-2",
    placeholder: "Search Mockups, Logos, Design Templates...",
    children: ($$payload2) => {
      $$payload2.out += `<button type="button" class="outline-none">`;
      MicrophoneSolid($$payload2, { class: "me-2 h-5 w-5" });
      $$payload2.out += `<!----></button>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Button($$payload, {
    size: "sm",
    children: ($$payload2) => {
      SearchOutline($$payload2, { class: "-ms-1 me-2 h-6 w-6" });
      $$payload2.out += `<!----> Search`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></form>`;
}
function ValueBinding($$payload) {
  let value = "";
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<form class="flex gap-2">`;
    Search($$payload2, {
      get value() {
        return value;
      },
      set value($$value) {
        value = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----> `;
    Button($$payload2, {
      class: "p-2.5",
      type: "submit",
      children: ($$payload3) => {
        SearchOutline($$payload3, { class: "h-5 w-5" });
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----></form> <p>You are searching: ${escape_html(value)}</p>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
}
function _page($$payload, $$props) {
  push();
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
        $$payload3.out += `<!---->Search input`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    H2($$payload2, {
      children: ($$payload3) => {
        $$payload3.out += `<!---->Setup`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    HighlightCompo($$payload2, {
      code: exampleModules[`./examples/Setup.svelte`]
    });
    $$payload2.out += `<!----> `;
    H2($$payload2, {
      children: ($$payload3) => {
        $$payload3.out += `<!---->Examples`;
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
          $$payload3.out += `<div class="mb-8 flex flex-wrap">`;
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
              labelClass: "w-44 my-1",
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
