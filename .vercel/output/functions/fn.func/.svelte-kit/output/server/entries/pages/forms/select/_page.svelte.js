import { Q as push, a0 as spread_attributes, V as escape_html, Y as ensure_array_like, W as attr, a2 as bind_props, S as pop, a3 as copy_payload, a4 as assign_payload } from "../../../../chunks/index.js";
import { aO as select } from "../../../../chunks/theme.js";
import { B as Button } from "../../../../chunks/markdown.js";
import { L as Label, R as Radio, C as CompoAttributesViewer } from "../../../../chunks/CompoAttributesViewer.js";
import { H as Helper } from "../../../../chunks/Helper.js";
import { H as HighlightCompo } from "../../../../chunks/HighlightCompo.js";
import { D as DynamicCodeBlockHighlight } from "../../../../chunks/DynamicCodeBlockHighlight.js";
import { C as CodeWrapper } from "../../../../chunks/CodeWrapper.js";
import { a as H1 } from "../../../../chunks/H1.js";
import { H as H2 } from "../../../../chunks/H2.js";
import { g as getExampleFileName, a as isGeneratedCodeOverflow, i as isSvelteOverflow } from "../../../../chunks/helpers.js";
import { s as sineIn } from "../../../../chunks/index4.js";
import { u as uiHelpers } from "../../../../chunks/uiHelpers.svelte.js";
import { B as ButtonGroup } from "../../../../chunks/ButtonGroup.js";
import { D as Dropdown, a as DropdownUl } from "../../../../chunks/DropdownUl.js";
import { D as DropdownLi } from "../../../../chunks/DropdownLi.js";
import { C as ChevronDownOutline } from "../../../../chunks/ChevronDownOutline.js";
function Select($$payload, $$props) {
  push();
  let {
    children,
    items,
    value = void 0,
    underline,
    size = "md",
    class: className,
    placeholder = "Choose option ...",
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const selectStyle = select({ underline, size, className });
  $$payload.out += `<select${spread_attributes({ ...restProps, class: selectStyle })}>`;
  if (placeholder) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<option disabled selected value="">${escape_html(placeholder)}</option>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if (items) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(items);
    $$payload.out += `<!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let { value: value2, name } = each_array[$$index];
      $$payload.out += `<option${attr("value", value2)}>${escape_html(name)}</option>`;
    }
    $$payload.out += `<!--]-->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if (children) {
    $$payload.out += "<!--[-->";
    children($$payload);
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></select>`;
  bind_props($$props, { value });
  pop();
}
const __vite_glob_0_0 = '<script lang="ts">\n  import { Label, Select } from "$lib";\n\n  interface Country {\n    value: string;\n    name: string;\n    href?: string;\n  }\n  interface State {\n    value: string;\n    name: string;\n  }\n\n  let countries: Country[] = [\n    { value: "us", name: "United States", href: "/" },\n    { value: "ca", name: "Canada", href: "/" },\n    { value: "fr", name: "France", href: "/" }\n  ];\n  let customSelected: State | undefined = $state();\n<\/script>\n\n<div class="h-36">\n  <Label for="countries">Select an option</Label>\n  <Select id="countries" class="mt-2" bind:value={customSelected} placeholder="">\n    <option selected value="all">All</option>\n    {#each countries as { value, name }}\n      <option {value}>{name}</option>\n    {/each}\n  </Select>\n</div>\n';
const __vite_glob_0_1 = '<script lang="ts">\n  import { sineIn } from "svelte/easing";\n  import { Button, ButtonGroup, Dropdown, DropdownLi, DropdownUl, Select, uiHelpers } from "$lib";\n  import { ChevronDownOutline } from "flowbite-svelte-icons";\n  import Usa from "../../../utils/icons/Usa.svelte";\n  import Germany from "../../../utils/icons/Germany.svelte";\n  import Italy from "../../../utils/icons/Italy.svelte";\n  import China from "../../../utils/icons/China.svelte";\n  interface State {\n    value: string;\n    name: string;\n  }\n  let dropdown = uiHelpers();\n  let dropdownStatus = $state(false);\n  let closeDropdown = dropdown.close;\n  $effect(() => {\n    // this can be done adding nav.navStatus directly to DOM element\n    // without using effect\n    dropdownStatus = dropdown.isOpen;\n  });\n  let transitionParams = {\n    y: 0,\n    duration: 100,\n    easing: sineIn\n  };\n  let states: State[] = [\n    { value: "CA", name: "California" },\n    { value: "TX", name: "Texas" },\n    { value: "WH", name: "Washinghton" },\n    { value: "FL", name: "Florida" },\n    { value: "VG", name: "Virginia" },\n    { value: "GE", name: "Georgia" },\n    { value: "MI", name: "Michigan" }\n  ];\n<\/script>\n\n<div class="h-48">\n  <ButtonGroup class="w-full">\n    <Button onclick={dropdown.toggle}>\n      <Usa />\n      USA\n      <ChevronDownOutline class="ms-2 h-6 w-6" />\n    </Button>\n    <div class="relative">\n      <Dropdown {dropdownStatus} {closeDropdown} params={transitionParams} class="absolute -left-[120px] top-[40px]">\n        <DropdownUl>\n          <DropdownLi aClass="flex items-center" href="/">\n            <Usa />\n            United States\n          </DropdownLi>\n          <DropdownLi aClass="flex items-center" href="/">\n            <Germany />\n            Germany\n          </DropdownLi>\n          <DropdownLi aClass="flex items-center" href="/">\n            <Italy />\n            Italy\n          </DropdownLi>\n          <DropdownLi aClass="flex items-center" href="/">\n            <China />\n            China\n          </DropdownLi>\n        </DropdownUl>\n      </Dropdown>\n    </div>\n    <Select items={states} placeholder="Choose the state" class="!rounded-s-none" />\n  </ButtonGroup>\n</div>\n';
const __vite_glob_0_2 = '<script lang="ts">\n  import { Select } from "svelte-5-ui-lib";\n  interface Country {\n    value: string;\n    name: string;\n    href?: string;\n  }\n  interface State {\n    value: string;\n    name: string;\n  }\n  let customSelected: State | undefined = $state();\n  let countries: Country[] = [\n    { value: "us", name: "United States", href: "/" },\n    { value: "ca", name: "Canada", href: "/" },\n    { value: "fr", name: "France", href: "/" }\n  ];\n<\/script>\n';
function Usa($$payload) {
  $$payload.out += `<svg aria-hidden="true" class="me-2 h-3" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" width="14" height="12" rx="2" fill="white"></rect><mask id="mask0_12694_49953" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="15" height="12"><rect x="0.5" width="14" height="12" rx="2" fill="white"></rect></mask><g mask="url(#mask0_12694_49953)"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 0H0.5V0.8H14.5V0ZM14.5 1.6H0.5V2.4H14.5V1.6ZM0.5 3.2H14.5V4H0.5V3.2ZM14.5 4.8H0.5V5.6H14.5V4.8ZM0.5 6.4H14.5V7.2H0.5V6.4ZM14.5 8H0.5V8.8H14.5V8ZM0.5 9.6H14.5V10.4H0.5V9.6ZM14.5 11.2H0.5V12H14.5V11.2Z" fill="#D02F44"></path><rect x="0.5" width="6" height="5.6" fill="#46467F"></rect><g filter="url(#filter0_d_12694_49953)"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.83317 1.20005C1.83317 1.42096 1.68393 1.60005 1.49984 1.60005C1.31574 1.60005 1.1665 1.42096 1.1665 1.20005C1.1665 0.979135 1.31574 0.800049 1.49984 0.800049C1.68393 0.800049 1.83317 0.979135 1.83317 1.20005ZM3.1665 1.20005C3.1665 1.42096 3.01727 1.60005 2.83317 1.60005C2.64908 1.60005 2.49984 1.42096 2.49984 1.20005C2.49984 0.979135 2.64908 0.800049 2.83317 0.800049C3.01727 0.800049 3.1665 0.979135 3.1665 1.20005ZM4.1665 1.60005C4.3506 1.60005 4.49984 1.42096 4.49984 1.20005C4.49984 0.979135 4.3506 0.800049 4.1665 0.800049C3.98241 0.800049 3.83317 0.979135 3.83317 1.20005C3.83317 1.42096 3.98241 1.60005 4.1665 1.60005ZM5.83317 1.20005C5.83317 1.42096 5.68393 1.60005 5.49984 1.60005C5.31574 1.60005 5.1665 1.42096 5.1665 1.20005C5.1665 0.979135 5.31574 0.800049 5.49984 0.800049C5.68393 0.800049 5.83317 0.979135 5.83317 1.20005ZM2.1665 2.40005C2.3506 2.40005 2.49984 2.22096 2.49984 2.00005C2.49984 1.77913 2.3506 1.60005 2.1665 1.60005C1.98241 1.60005 1.83317 1.77913 1.83317 2.00005C1.83317 2.22096 1.98241 2.40005 2.1665 2.40005ZM3.83317 2.00005C3.83317 2.22096 3.68393 2.40005 3.49984 2.40005C3.31574 2.40005 3.1665 2.22096 3.1665 2.00005C3.1665 1.77913 3.31574 1.60005 3.49984 1.60005C3.68393 1.60005 3.83317 1.77913 3.83317 2.00005ZM4.83317 2.40005C5.01726 2.40005 5.1665 2.22096 5.1665 2.00005C5.1665 1.77913 5.01726 1.60005 4.83317 1.60005C4.64908 1.60005 4.49984 1.77913 4.49984 2.00005C4.49984 2.22096 4.64908 2.40005 4.83317 2.40005ZM5.83317 2.80005C5.83317 3.02096 5.68393 3.20005 5.49984 3.20005C5.31574 3.20005 5.1665 3.02096 5.1665 2.80005C5.1665 2.57914 5.31574 2.40005 5.49984 2.40005C5.68393 2.40005 5.83317 2.57914 5.83317 2.80005ZM4.1665 3.20005C4.3506 3.20005 4.49984 3.02096 4.49984 2.80005C4.49984 2.57914 4.3506 2.40005 4.1665 2.40005C3.98241 2.40005 3.83317 2.57914 3.83317 2.80005C3.83317 3.02096 3.98241 3.20005 4.1665 3.20005ZM3.1665 2.80005C3.1665 3.02096 3.01727 3.20005 2.83317 3.20005C2.64908 3.20005 2.49984 3.02096 2.49984 2.80005C2.49984 2.57914 2.64908 2.40005 2.83317 2.40005C3.01727 2.40005 3.1665 2.57914 3.1665 2.80005ZM1.49984 3.20005C1.68393 3.20005 1.83317 3.02096 1.83317 2.80005C1.83317 2.57914 1.68393 2.40005 1.49984 2.40005C1.31574 2.40005 1.1665 2.57914 1.1665 2.80005C1.1665 3.02096 1.31574 3.20005 1.49984 3.20005ZM2.49984 3.60005C2.49984 3.82096 2.3506 4.00005 2.1665 4.00005C1.98241 4.00005 1.83317 3.82096 1.83317 3.60005C1.83317 3.37913 1.98241 3.20005 2.1665 3.20005C2.3506 3.20005 2.49984 3.37913 2.49984 3.60005ZM3.49984 4.00005C3.68393 4.00005 3.83317 3.82096 3.83317 3.60005C3.83317 3.37913 3.68393 3.20005 3.49984 3.20005C3.31574 3.20005 3.1665 3.37913 3.1665 3.60005C3.1665 3.82096 3.31574 4.00005 3.49984 4.00005ZM5.1665 3.60005C5.1665 3.82096 5.01726 4.00005 4.83317 4.00005C4.64908 4.00005 4.49984 3.82096 4.49984 3.60005C4.49984 3.37913 4.64908 3.20005 4.83317 3.20005C5.01726 3.20005 5.1665 3.37913 5.1665 3.60005ZM5.49984 4.80005C5.68393 4.80005 5.83317 4.62096 5.83317 4.40005C5.83317 4.17913 5.68393 4.00005 5.49984 4.00005C5.31574 4.00005 5.1665 4.17913 5.1665 4.40005C5.1665 4.62096 5.31574 4.80005 5.49984 4.80005ZM4.49984 4.40005C4.49984 4.62096 4.3506 4.80005 4.1665 4.80005C3.98241 4.80005 3.83317 4.62096 3.83317 4.40005C3.83317 4.17913 3.98241 4.00005 4.1665 4.00005C4.3506 4.00005 4.49984 4.17913 4.49984 4.40005ZM2.83317 4.80005C3.01727 4.80005 3.1665 4.62096 3.1665 4.40005C3.1665 4.17913 3.01727 4.00005 2.83317 4.00005C2.64908 4.00005 2.49984 4.17913 2.49984 4.40005C2.49984 4.62096 2.64908 4.80005 2.83317 4.80005ZM1.83317 4.40005C1.83317 4.62096 1.68393 4.80005 1.49984 4.80005C1.31574 4.80005 1.1665 4.62096 1.1665 4.40005C1.1665 4.17913 1.31574 4.00005 1.49984 4.00005C1.68393 4.00005 1.83317 4.17913 1.83317 4.40005Z" fill="url(#paint0_linear_12694_49953)"></path></g></g><defs><filter id="filter0_d_12694_49953" x="1.1665" y="0.800049" width="4.6665" height="5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="1"></feOffset><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_12694_49953"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_12694_49953" result="shape"></feBlend></filter><linearGradient id="paint0_linear_12694_49953" x1="1.1665" y1="0.800049" x2="1.1665" y2="4.80005" gradientUnits="userSpaceOnUse"><stop stop-color="white"></stop><stop offset="1" stop-color="#F0F0F0"></stop></linearGradient></defs></svg>`;
}
function Germany($$payload) {
  $$payload.out += `<svg aria-hidden="true" class="me-2 h-3.5 w-3.5 rounded-full" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-de" viewBox="0 0 512 512"><path fill="#ffce00" d="M0 341.3h512V512H0z"></path><path d="M0 0h512v170.7H0z"></path><path fill="#d00" d="M0 170.7h512v170.6H0z"></path></svg>`;
}
function Italy($$payload) {
  $$payload.out += `<svg aria-hidden="true" class="me-2 h-3.5 w-3.5 rounded-full" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-it" viewBox="0 0 512 512"><g fill-rule="evenodd" stroke-width="1pt"><path fill="#fff" d="M0 0h512v512H0z"></path><path fill="#009246" d="M0 0h170.7v512H0z"></path><path fill="#ce2b37" d="M341.3 0H512v512H341.3z"></path></g></svg>`;
}
function China($$payload) {
  $$payload.out += `<svg aria-hidden="true" class="me-2 h-3.5 w-3.5 rounded-full" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="flag-icon-css-cn" viewBox="0 0 512 512"><defs><path id="a" fill="#ffde00" d="M1-.3L-.7.8 0-1 .6.8-1-.3z"></path></defs><path fill="#de2910" d="M0 0h512v512H0z"></path><use width="30" height="20" transform="matrix(76.8 0 0 76.8 128 128)" xlink:href="#a"></use><use width="30" height="20" transform="rotate(-121 142.6 -47) scale(25.5827)" xlink:href="#a"></use><use width="30" height="20" transform="rotate(-98.1 198 -82) scale(25.6)" xlink:href="#a"></use><use width="30" height="20" transform="rotate(-74 272.4 -114) scale(25.6137)" xlink:href="#a"></use><use width="30" height="20" transform="matrix(16 -19.968 19.968 16 256 230.4)" xlink:href="#a"></use></svg>`;
}
function DropdownSelect($$payload, $$props) {
  push();
  let dropdown = uiHelpers();
  let dropdownStatus = false;
  let closeDropdown = dropdown.close;
  let transitionParams = { y: 0, duration: 100, easing: sineIn };
  let states = [
    { value: "CA", name: "California" },
    { value: "TX", name: "Texas" },
    { value: "WH", name: "Washinghton" },
    { value: "FL", name: "Florida" },
    { value: "VG", name: "Virginia" },
    { value: "GE", name: "Georgia" },
    { value: "MI", name: "Michigan" }
  ];
  $$payload.out += `<div class="h-48">`;
  ButtonGroup($$payload, {
    class: "w-full",
    children: ($$payload2) => {
      Button($$payload2, {
        onclick: dropdown.toggle,
        children: ($$payload3) => {
          Usa($$payload3);
          $$payload3.out += `<!----> USA `;
          ChevronDownOutline($$payload3, { class: "ms-2 h-6 w-6" });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> <div class="relative">`;
      Dropdown($$payload2, {
        dropdownStatus,
        closeDropdown,
        params: transitionParams,
        class: "absolute -left-[120px] top-[40px]",
        children: ($$payload3) => {
          DropdownUl($$payload3, {
            children: ($$payload4) => {
              DropdownLi($$payload4, {
                aClass: "flex items-center",
                href: "/",
                children: ($$payload5) => {
                  Usa($$payload5);
                  $$payload5.out += `<!----> United States`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              DropdownLi($$payload4, {
                aClass: "flex items-center",
                href: "/",
                children: ($$payload5) => {
                  Germany($$payload5);
                  $$payload5.out += `<!----> Germany`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              DropdownLi($$payload4, {
                aClass: "flex items-center",
                href: "/",
                children: ($$payload5) => {
                  Italy($$payload5);
                  $$payload5.out += `<!----> Italy`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              DropdownLi($$payload4, {
                aClass: "flex items-center",
                href: "/",
                children: ($$payload5) => {
                  China($$payload5);
                  $$payload5.out += `<!----> China`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----></div> `;
      Select($$payload2, {
        items: states,
        placeholder: "Choose the state",
        class: "!rounded-s-none"
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div>`;
  pop();
}
function CustomOptions($$payload) {
  let countries = [
    {
      value: "us",
      name: "United States",
      href: "/"
    },
    { value: "ca", name: "Canada", href: "/" },
    { value: "fr", name: "France", href: "/" }
  ];
  let customSelected = void 0;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<div class="h-36">`;
    Label($$payload2, {
      for: "countries",
      children: ($$payload3) => {
        $$payload3.out += `<!---->Select an option`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    Select($$payload2, {
      id: "countries",
      class: "mt-2",
      get value() {
        return customSelected;
      },
      set value($$value) {
        customSelected = $$value;
        $$settled = false;
      },
      placeholder: "",
      children: ($$payload3) => {
        const each_array = ensure_array_like(countries);
        $$payload3.out += `<option selected value="all">All</option> <!--[-->`;
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let { value, name } = each_array[$$index];
          $$payload3.out += `<option${attr("value", value)}>${escape_html(name)}</option>`;
        }
        $$payload3.out += `<!--]-->`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----></div>`;
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
  const dirName = "forms/select";
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/CustomOptions.svelte": __vite_glob_0_0,
    "./examples/DropdownSelect.svelte": __vite_glob_0_1,
    "./examples/Setup.svelte": __vite_glob_0_2
  });
  const exampleArr = [
    {
      name: "Dropdown Select",
      component: DropdownSelect
    },
    {
      name: "Custom Options",
      component: CustomOptions
    }
    // { name: 'My options', component: ExampleComponents.MyOptions },
  ];
  let selectedExample = exampleArr[0].name;
  let svelteCode = getExampleFileName(selectedExample, exampleArr);
  function findObject(arr, name) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = findObject(exampleArr, selectedExample);
  let countries = [
    {
      value: "us",
      name: "United States",
      href: "/"
    },
    { value: "ca", name: "Canada", href: "/" },
    { value: "fr", name: "France", href: "/" }
  ];
  const sizes = ["sm", "md", "lg"];
  let selectSize = "md";
  const sizeDisplay = { sm: "Small", md: "Medium", lg: "Large" };
  let underline = false;
  const changeUnderline = () => {
    underline = !underline;
  };
  let disabled = false;
  const changeDiabled = () => {
    disabled = !disabled;
  };
  let selected = "";
  let bindValue = false;
  const changeBindValue = () => {
    bindValue = !bindValue;
  };
  let generatedCode = (() => {
    let props = [];
    if (selectSize !== "md") props.push(` size="${selectSize}"`);
    if (underline) props.push(" underline");
    if (disabled) props.push(" disabled");
    if (bindValue) props.push(" bind:value={selected}");
    const propsString = props.length > 0 ? props.map((prop) => `
  ${prop}`).join("") + "\n" : "";
    return `<Select${propsString} />${bindValue ? "\nSelected value: {selected}" : ""}`;
  })();
  let builderExpand = false;
  let showBuilderExpandButton = isGeneratedCodeOverflow(generatedCode);
  const handleBuilderExpandClick = () => {
    builderExpand = !builderExpand;
  };
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
        $$payload3.out += `<!---->Select`;
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
        $$payload3.out += `<!---->Interactive Select Builder`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    {
      let codeblock = function($$payload3) {
        DynamicCodeBlockHighlight($$payload3, {
          handleExpandClick: handleBuilderExpandClick,
          expand: builderExpand,
          showExpandButton: showBuilderExpandButton,
          code: generatedCode
        });
      };
      CodeWrapper($$payload2, {
        codeblock,
        children: ($$payload3) => {
          const each_array = ensure_array_like(sizes);
          $$payload3.out += `<div class="h-32">`;
          Label($$payload3, {
            for: "select-sm",
            class: "mb-4",
            children: ($$payload4) => {
              if (disabled) {
                $$payload4.out += "<!--[-->";
                $$payload4.out += `Disabled`;
              } else {
                $$payload4.out += "<!--[!-->";
              }
              $$payload4.out += `<!--]--> `;
              if (selectSize) {
                $$payload4.out += "<!--[-->";
                $$payload4.out += `${escape_html(sizeDisplay[selectSize])} select`;
              } else {
                $$payload4.out += "<!--[!-->";
              }
              $$payload4.out += `<!--]-->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Select($$payload3, {
            id: "select-sm",
            size: selectSize,
            items: countries,
            underline,
            disabled,
            get value() {
              return selected;
            },
            set value($$value) {
              selected = $$value;
              $$settled = false;
            },
            class: "mb-2"
          });
          $$payload3.out += `<!----> `;
          if (bindValue) {
            $$payload3.out += "<!--[-->";
            Helper($$payload3, {
              class: "text-base",
              children: ($$payload4) => {
                $$payload4.out += `<!---->Selected value: ${escape_html(selected)}`;
              },
              $$slots: { default: true }
            });
          } else {
            $$payload3.out += "<!--[!-->";
          }
          $$payload3.out += `<!--]--></div> <div class="mb-4 flex flex-wrap space-x-2">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Size`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let option = each_array[$$index];
            Radio($$payload3, {
              labelClass: "w-24 my-1",
              name: "input_size",
              get group() {
                return selectSize;
              },
              set group($$value) {
                selectSize = $$value;
                $$settled = false;
              },
              value: option,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(option)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> <div class="flex flex-wrap justify-center gap-2 md:justify-start">`;
          Button($$payload3, {
            class: "w-40",
            onclick: changeUnderline,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(underline ? "Default" : "Underline")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-40",
            color: "secondary",
            onclick: changeDiabled,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(disabled ? "Enabled" : "Disabled")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-40",
            color: "rose",
            onclick: changeBindValue,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(bindValue ? "Unbind" : "Bind value")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----></div>`;
        },
        $$slots: { codeblock: true, default: true }
      });
    }
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
          const each_array_1 = ensure_array_like(exampleArr);
          $$payload3.out += `<div class="mb-12 flex flex-wrap">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Example`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
            let style = each_array_1[$$index_1];
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
