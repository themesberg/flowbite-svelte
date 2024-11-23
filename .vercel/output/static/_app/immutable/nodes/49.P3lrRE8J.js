import { a as append, t as template, c as comment, n as ns_template, b as text } from "../chunks/disclose-version.0TX42Q8e.js";
import { p as push, t as template_effect, a as pop, c as child, r as reset, s as sibling, f as first_child, b as get, d as derived, u as user_effect, a7 as set, n as next, a6 as state } from "../chunks/runtime.BkfDdwap.js";
import { a as set_text } from "../chunks/store.B2xZ3Ft6.js";
import { p as prop, i as if_block, r as rest_props, b as proxy, c as component } from "../chunks/props.B7eOu8hW.js";
import { e as each, i as index } from "../chunks/each.CtHIoDcm.js";
import { a as set_attributes, aR as select, az as Dropdown, V as uiHelpers, aS as sineIn } from "../chunks/theme.BtjZjf2R.js";
import { B as Button } from "../chunks/markdown.Ba9FtS5g.js";
import { L as Label, C as CompoAttributesViewer, R as Radio } from "../chunks/CompoAttributesViewer.HsPJjrMu.js";
import { H as Helper } from "../chunks/Helper.CNgurqbV.js";
import { s as snippet } from "../chunks/snippet.BDfn85k4.js";
import { b as bind_select_value } from "../chunks/select.Ce8st8ek.js";
import { H as HighlightCompo } from "../chunks/HighlightCompo.D1kgIYBY.js";
import { D as DynamicCodeBlockHighlight } from "../chunks/DynamicCodeBlockHighlight.BS23lgW_.js";
import { C as CodeWrapper } from "../chunks/CodeWrapper.CdoIAYb8.js";
import { H as H1 } from "../chunks/H1.DunGd_Oq.js";
import { H as H2 } from "../chunks/H2.qsp5CBkK.js";
import { g as getExampleFileName, i as isGeneratedCodeOverflow, d as isSvelteOverflow } from "../chunks/helpers.B9KbZW0W.js";
import { B as ButtonGroup } from "../chunks/ButtonGroup.CoXuPkoy.js";
import { D as DropdownUl } from "../chunks/DropdownUl.CBcIivYZ.js";
import { D as DropdownLi } from "../chunks/DropdownLi.DjyFOMgJ.js";
import { C as ChevronDownOutline } from "../chunks/ChevronDownOutline.C3ncqrR6.js";
import "../chunks/legacy.DvF4DOPZ.js";
var root_1$1 = template(`<option disabled selected> </option>`);
var root_3$1 = template(`<option> </option>`);
var root$7 = template(`<select><!><!><!></select>`);
function Select($$anchor, $$props) {
  push($$props, true);
  let value = prop($$props, "value", 15), size = prop($$props, "size", 3, "md"), placeholder = prop($$props, "placeholder", 3, "Choose option ..."), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "items",
    "value",
    "underline",
    "size",
    "class",
    "placeholder"
  ]);
  const selectStyle = derived(() => select({
    underline: $$props.underline,
    size: size(),
    className: $$props.class
  }));
  var select$1 = root$7();
  let attributes;
  var node = child(select$1);
  if_block(node, placeholder, ($$anchor2) => {
    var option = root_1$1();
    option.value = null == (option.__value = "") ? "" : "";
    var text2 = child(option, true);
    reset(option);
    template_effect(() => set_text(text2, placeholder()));
    append($$anchor2, option);
  });
  var node_1 = sibling(node);
  if_block(node_1, () => $$props.items, ($$anchor2) => {
    var fragment = comment();
    var node_2 = first_child(fragment);
    const $$array = () => $$props.items;
    each(node_2, 17, $$array, index, ($$anchor3, $$item) => {
      let value2 = () => get($$item).value;
      let name = () => get($$item).name;
      var option_1 = root_3$1();
      var option_1_value = {};
      var text_1 = child(option_1, true);
      reset(option_1);
      template_effect(() => {
        if (option_1_value !== (option_1_value = value2())) {
          option_1.value = null == (option_1.__value = value2()) ? "" : value2();
        }
        set_text(text_1, name());
      });
      append($$anchor3, option_1);
    });
    append($$anchor2, fragment);
  });
  var node_3 = sibling(node_1);
  if_block(node_3, () => $$props.children, ($$anchor2) => {
    var fragment_1 = comment();
    var node_4 = first_child(fragment_1);
    snippet(node_4, () => $$props.children);
    append($$anchor2, fragment_1);
  });
  reset(select$1);
  template_effect(() => attributes = set_attributes(select$1, attributes, { ...restProps, class: get(selectStyle) }));
  bind_select_value(select$1, value);
  append($$anchor, select$1);
  pop();
}
const __vite_glob_0_0 = '<script lang="ts">\n  import { Label, Select } from "$lib";\n\n  interface Country {\n    value: string;\n    name: string;\n    href?: string;\n  }\n  interface State {\n    value: string;\n    name: string;\n  }\n\n  let countries: Country[] = [\n    { value: "us", name: "United States", href: "/" },\n    { value: "ca", name: "Canada", href: "/" },\n    { value: "fr", name: "France", href: "/" }\n  ];\n  let customSelected: State | undefined = $state();\n<\/script>\n\n<div class="h-36">\n  <Label for="countries">Select an option</Label>\n  <Select id="countries" class="mt-2" bind:value={customSelected} placeholder="">\n    <option selected value="all">All</option>\n    {#each countries as { value, name }}\n      <option {value}>{name}</option>\n    {/each}\n  </Select>\n</div>\n';
const __vite_glob_0_1 = '<script lang="ts">\n  import { sineIn } from "svelte/easing";\n  import { Button, ButtonGroup, Dropdown, DropdownLi, DropdownUl, Select, uiHelpers } from "$lib";\n  import { ChevronDownOutline } from "flowbite-svelte-icons";\n  import Usa from "../../../utils/icons/Usa.svelte";\n  import Germany from "../../../utils/icons/Germany.svelte";\n  import Italy from "../../../utils/icons/Italy.svelte";\n  import China from "../../../utils/icons/China.svelte";\n  interface State {\n    value: string;\n    name: string;\n  }\n  let dropdown = uiHelpers();\n  let dropdownStatus = $state(false);\n  let closeDropdown = dropdown.close;\n  $effect(() => {\n    // this can be done adding nav.navStatus directly to DOM element\n    // without using effect\n    dropdownStatus = dropdown.isOpen;\n  });\n  let transitionParams = {\n    y: 0,\n    duration: 100,\n    easing: sineIn\n  };\n  let states: State[] = [\n    { value: "CA", name: "California" },\n    { value: "TX", name: "Texas" },\n    { value: "WH", name: "Washinghton" },\n    { value: "FL", name: "Florida" },\n    { value: "VG", name: "Virginia" },\n    { value: "GE", name: "Georgia" },\n    { value: "MI", name: "Michigan" }\n  ];\n<\/script>\n\n<div class="h-48">\n  <ButtonGroup class="w-full">\n    <Button onclick={dropdown.toggle}>\n      <Usa />\n      USA\n      <ChevronDownOutline class="ms-2 h-6 w-6" />\n    </Button>\n    <div class="relative">\n      <Dropdown {dropdownStatus} {closeDropdown} params={transitionParams} class="absolute -left-[120px] top-[40px]">\n        <DropdownUl>\n          <DropdownLi aClass="flex items-center" href="/">\n            <Usa />\n            United States\n          </DropdownLi>\n          <DropdownLi aClass="flex items-center" href="/">\n            <Germany />\n            Germany\n          </DropdownLi>\n          <DropdownLi aClass="flex items-center" href="/">\n            <Italy />\n            Italy\n          </DropdownLi>\n          <DropdownLi aClass="flex items-center" href="/">\n            <China />\n            China\n          </DropdownLi>\n        </DropdownUl>\n      </Dropdown>\n    </div>\n    <Select items={states} placeholder="Choose the state" class="!rounded-s-none" />\n  </ButtonGroup>\n</div>\n';
const __vite_glob_0_2 = '<script lang="ts">\n  import { Select } from "svelte-5-ui-lib";\n  interface Country {\n    value: string;\n    name: string;\n    href?: string;\n  }\n  interface State {\n    value: string;\n    name: string;\n  }\n  let customSelected: State | undefined = $state();\n  let countries: Country[] = [\n    { value: "us", name: "United States", href: "/" },\n    { value: "ca", name: "Canada", href: "/" },\n    { value: "fr", name: "France", href: "/" }\n  ];\n<\/script>\n';
var root$6 = ns_template(`<svg aria-hidden="true" class="me-2 h-3" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" width="14" height="12" rx="2" fill="white"></rect><mask id="mask0_12694_49953" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="15" height="12"><rect x="0.5" width="14" height="12" rx="2" fill="white"></rect></mask><g mask="url(#mask0_12694_49953)"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 0H0.5V0.8H14.5V0ZM14.5 1.6H0.5V2.4H14.5V1.6ZM0.5 3.2H14.5V4H0.5V3.2ZM14.5 4.8H0.5V5.6H14.5V4.8ZM0.5 6.4H14.5V7.2H0.5V6.4ZM14.5 8H0.5V8.8H14.5V8ZM0.5 9.6H14.5V10.4H0.5V9.6ZM14.5 11.2H0.5V12H14.5V11.2Z" fill="#D02F44"></path><rect x="0.5" width="6" height="5.6" fill="#46467F"></rect><g filter="url(#filter0_d_12694_49953)"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.83317 1.20005C1.83317 1.42096 1.68393 1.60005 1.49984 1.60005C1.31574 1.60005 1.1665 1.42096 1.1665 1.20005C1.1665 0.979135 1.31574 0.800049 1.49984 0.800049C1.68393 0.800049 1.83317 0.979135 1.83317 1.20005ZM3.1665 1.20005C3.1665 1.42096 3.01727 1.60005 2.83317 1.60005C2.64908 1.60005 2.49984 1.42096 2.49984 1.20005C2.49984 0.979135 2.64908 0.800049 2.83317 0.800049C3.01727 0.800049 3.1665 0.979135 3.1665 1.20005ZM4.1665 1.60005C4.3506 1.60005 4.49984 1.42096 4.49984 1.20005C4.49984 0.979135 4.3506 0.800049 4.1665 0.800049C3.98241 0.800049 3.83317 0.979135 3.83317 1.20005C3.83317 1.42096 3.98241 1.60005 4.1665 1.60005ZM5.83317 1.20005C5.83317 1.42096 5.68393 1.60005 5.49984 1.60005C5.31574 1.60005 5.1665 1.42096 5.1665 1.20005C5.1665 0.979135 5.31574 0.800049 5.49984 0.800049C5.68393 0.800049 5.83317 0.979135 5.83317 1.20005ZM2.1665 2.40005C2.3506 2.40005 2.49984 2.22096 2.49984 2.00005C2.49984 1.77913 2.3506 1.60005 2.1665 1.60005C1.98241 1.60005 1.83317 1.77913 1.83317 2.00005C1.83317 2.22096 1.98241 2.40005 2.1665 2.40005ZM3.83317 2.00005C3.83317 2.22096 3.68393 2.40005 3.49984 2.40005C3.31574 2.40005 3.1665 2.22096 3.1665 2.00005C3.1665 1.77913 3.31574 1.60005 3.49984 1.60005C3.68393 1.60005 3.83317 1.77913 3.83317 2.00005ZM4.83317 2.40005C5.01726 2.40005 5.1665 2.22096 5.1665 2.00005C5.1665 1.77913 5.01726 1.60005 4.83317 1.60005C4.64908 1.60005 4.49984 1.77913 4.49984 2.00005C4.49984 2.22096 4.64908 2.40005 4.83317 2.40005ZM5.83317 2.80005C5.83317 3.02096 5.68393 3.20005 5.49984 3.20005C5.31574 3.20005 5.1665 3.02096 5.1665 2.80005C5.1665 2.57914 5.31574 2.40005 5.49984 2.40005C5.68393 2.40005 5.83317 2.57914 5.83317 2.80005ZM4.1665 3.20005C4.3506 3.20005 4.49984 3.02096 4.49984 2.80005C4.49984 2.57914 4.3506 2.40005 4.1665 2.40005C3.98241 2.40005 3.83317 2.57914 3.83317 2.80005C3.83317 3.02096 3.98241 3.20005 4.1665 3.20005ZM3.1665 2.80005C3.1665 3.02096 3.01727 3.20005 2.83317 3.20005C2.64908 3.20005 2.49984 3.02096 2.49984 2.80005C2.49984 2.57914 2.64908 2.40005 2.83317 2.40005C3.01727 2.40005 3.1665 2.57914 3.1665 2.80005ZM1.49984 3.20005C1.68393 3.20005 1.83317 3.02096 1.83317 2.80005C1.83317 2.57914 1.68393 2.40005 1.49984 2.40005C1.31574 2.40005 1.1665 2.57914 1.1665 2.80005C1.1665 3.02096 1.31574 3.20005 1.49984 3.20005ZM2.49984 3.60005C2.49984 3.82096 2.3506 4.00005 2.1665 4.00005C1.98241 4.00005 1.83317 3.82096 1.83317 3.60005C1.83317 3.37913 1.98241 3.20005 2.1665 3.20005C2.3506 3.20005 2.49984 3.37913 2.49984 3.60005ZM3.49984 4.00005C3.68393 4.00005 3.83317 3.82096 3.83317 3.60005C3.83317 3.37913 3.68393 3.20005 3.49984 3.20005C3.31574 3.20005 3.1665 3.37913 3.1665 3.60005C3.1665 3.82096 3.31574 4.00005 3.49984 4.00005ZM5.1665 3.60005C5.1665 3.82096 5.01726 4.00005 4.83317 4.00005C4.64908 4.00005 4.49984 3.82096 4.49984 3.60005C4.49984 3.37913 4.64908 3.20005 4.83317 3.20005C5.01726 3.20005 5.1665 3.37913 5.1665 3.60005ZM5.49984 4.80005C5.68393 4.80005 5.83317 4.62096 5.83317 4.40005C5.83317 4.17913 5.68393 4.00005 5.49984 4.00005C5.31574 4.00005 5.1665 4.17913 5.1665 4.40005C5.1665 4.62096 5.31574 4.80005 5.49984 4.80005ZM4.49984 4.40005C4.49984 4.62096 4.3506 4.80005 4.1665 4.80005C3.98241 4.80005 3.83317 4.62096 3.83317 4.40005C3.83317 4.17913 3.98241 4.00005 4.1665 4.00005C4.3506 4.00005 4.49984 4.17913 4.49984 4.40005ZM2.83317 4.80005C3.01727 4.80005 3.1665 4.62096 3.1665 4.40005C3.1665 4.17913 3.01727 4.00005 2.83317 4.00005C2.64908 4.00005 2.49984 4.17913 2.49984 4.40005C2.49984 4.62096 2.64908 4.80005 2.83317 4.80005ZM1.83317 4.40005C1.83317 4.62096 1.68393 4.80005 1.49984 4.80005C1.31574 4.80005 1.1665 4.62096 1.1665 4.40005C1.1665 4.17913 1.31574 4.00005 1.49984 4.00005C1.68393 4.00005 1.83317 4.17913 1.83317 4.40005Z" fill="url(#paint0_linear_12694_49953)"></path></g></g><defs><filter id="filter0_d_12694_49953" x="1.1665" y="0.800049" width="4.6665" height="5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="1"></feOffset><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_12694_49953"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_12694_49953" result="shape"></feBlend></filter><linearGradient id="paint0_linear_12694_49953" x1="1.1665" y1="0.800049" x2="1.1665" y2="4.80005" gradientUnits="userSpaceOnUse"><stop stop-color="white"></stop><stop offset="1" stop-color="#F0F0F0"></stop></linearGradient></defs></svg>`);
function Usa($$anchor) {
  var svg = root$6();
  append($$anchor, svg);
}
var root$5 = ns_template(`<svg aria-hidden="true" class="me-2 h-3.5 w-3.5 rounded-full" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-de" viewBox="0 0 512 512"><path fill="#ffce00" d="M0 341.3h512V512H0z"></path><path d="M0 0h512v170.7H0z"></path><path fill="#d00" d="M0 170.7h512v170.6H0z"></path></svg>`);
function Germany($$anchor) {
  var svg = root$5();
  append($$anchor, svg);
}
var root$4 = ns_template(`<svg aria-hidden="true" class="me-2 h-3.5 w-3.5 rounded-full" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-it" viewBox="0 0 512 512"><g fill-rule="evenodd" stroke-width="1pt"><path fill="#fff" d="M0 0h512v512H0z"></path><path fill="#009246" d="M0 0h170.7v512H0z"></path><path fill="#ce2b37" d="M341.3 0H512v512H341.3z"></path></g></svg>`);
function Italy($$anchor) {
  var svg = root$4();
  append($$anchor, svg);
}
var root$3 = ns_template(`<svg aria-hidden="true" class="me-2 h-3.5 w-3.5 rounded-full" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="flag-icon-css-cn" viewBox="0 0 512 512"><defs><path id="a" fill="#ffde00" d="M1-.3L-.7.8 0-1 .6.8-1-.3z"></path></defs><path fill="#de2910" d="M0 0h512v512H0z"></path><use width="30" height="20" transform="matrix(76.8 0 0 76.8 128 128)" xlink:href="#a"></use><use width="30" height="20" transform="rotate(-121 142.6 -47) scale(25.5827)" xlink:href="#a"></use><use width="30" height="20" transform="rotate(-98.1 198 -82) scale(25.6)" xlink:href="#a"></use><use width="30" height="20" transform="rotate(-74 272.4 -114) scale(25.6137)" xlink:href="#a"></use><use width="30" height="20" transform="matrix(16 -19.968 19.968 16 256 230.4)" xlink:href="#a"></use></svg>`);
function China($$anchor) {
  var svg = root$3();
  append($$anchor, svg);
}
var root_2$1 = template(`<!> USA <!>`, 1);
var root_5$1 = template(`<!> United States`, 1);
var root_6$1 = template(`<!> Germany`, 1);
var root_7 = template(`<!> Italy`, 1);
var root_8 = template(`<!> China`, 1);
var root_4 = template(`<!> <!> <!> <!>`, 1);
var root_1 = template(`<!> <div class="relative"><!></div> <!>`, 1);
var root$2 = template(`<div class="h-48"><!></div>`);
function DropdownSelect($$anchor, $$props) {
  push($$props, true);
  let dropdown = uiHelpers();
  let dropdownStatus = state(false);
  let closeDropdown = dropdown.close;
  user_effect(() => {
    set(dropdownStatus, proxy(dropdown.isOpen));
  });
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
  var div = root$2();
  var node = child(div);
  ButtonGroup(node, {
    class: "w-full",
    children: ($$anchor2, $$slotProps) => {
      var fragment = root_1();
      var node_1 = first_child(fragment);
      Button(node_1, {
        get onclick() {
          return dropdown.toggle;
        },
        children: ($$anchor3, $$slotProps2) => {
          var fragment_1 = root_2$1();
          var node_2 = first_child(fragment_1);
          Usa(node_2);
          var node_3 = sibling(node_2, 2);
          ChevronDownOutline(node_3, { class: "ms-2 h-6 w-6" });
          append($$anchor3, fragment_1);
        },
        $$slots: { default: true }
      });
      var div_1 = sibling(node_1, 2);
      var node_4 = child(div_1);
      Dropdown(node_4, {
        get dropdownStatus() {
          return get(dropdownStatus);
        },
        closeDropdown,
        params: transitionParams,
        class: "absolute -left-[120px] top-[40px]",
        children: ($$anchor3, $$slotProps2) => {
          DropdownUl($$anchor3, {
            children: ($$anchor4, $$slotProps3) => {
              var fragment_3 = root_4();
              var node_5 = first_child(fragment_3);
              DropdownLi(node_5, {
                aClass: "flex items-center",
                href: "/",
                children: ($$anchor5, $$slotProps4) => {
                  var fragment_4 = root_5$1();
                  var node_6 = first_child(fragment_4);
                  Usa(node_6);
                  next();
                  append($$anchor5, fragment_4);
                },
                $$slots: { default: true }
              });
              var node_7 = sibling(node_5, 2);
              DropdownLi(node_7, {
                aClass: "flex items-center",
                href: "/",
                children: ($$anchor5, $$slotProps4) => {
                  var fragment_5 = root_6$1();
                  var node_8 = first_child(fragment_5);
                  Germany(node_8);
                  next();
                  append($$anchor5, fragment_5);
                },
                $$slots: { default: true }
              });
              var node_9 = sibling(node_7, 2);
              DropdownLi(node_9, {
                aClass: "flex items-center",
                href: "/",
                children: ($$anchor5, $$slotProps4) => {
                  var fragment_6 = root_7();
                  var node_10 = first_child(fragment_6);
                  Italy(node_10);
                  next();
                  append($$anchor5, fragment_6);
                },
                $$slots: { default: true }
              });
              var node_11 = sibling(node_9, 2);
              DropdownLi(node_11, {
                aClass: "flex items-center",
                href: "/",
                children: ($$anchor5, $$slotProps4) => {
                  var fragment_7 = root_8();
                  var node_12 = first_child(fragment_7);
                  China(node_12);
                  next();
                  append($$anchor5, fragment_7);
                },
                $$slots: { default: true }
              });
              append($$anchor4, fragment_3);
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
      reset(div_1);
      var node_13 = sibling(div_1, 2);
      Select(node_13, {
        items: states,
        placeholder: "Choose the state",
        class: "!rounded-s-none"
      });
      append($$anchor2, fragment);
    },
    $$slots: { default: true }
  });
  reset(div);
  append($$anchor, div);
  pop();
}
var root_3 = template(`<option> </option>`);
var root_2 = template(`<option selected>All</option> <!>`, 1);
var root$1 = template(`<div class="h-36"><!> <!></div>`);
function CustomOptions($$anchor) {
  let countries = [
    {
      value: "us",
      name: "United States",
      href: "/"
    },
    { value: "ca", name: "Canada", href: "/" },
    { value: "fr", name: "France", href: "/" }
  ];
  let customSelected = state(void 0);
  var div = root$1();
  var node = child(div);
  Label(node, {
    for: "countries",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text("Select an option");
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
  var node_1 = sibling(node, 2);
  Select(node_1, {
    id: "countries",
    class: "mt-2",
    get value() {
      return get(customSelected);
    },
    set value($$value) {
      set(customSelected, proxy($$value));
    },
    placeholder: "",
    children: ($$anchor2, $$slotProps) => {
      var fragment = root_2();
      var option = first_child(fragment);
      option.value = null == (option.__value = "all") ? "" : "all";
      var node_2 = sibling(option, 2);
      each(node_2, 17, () => countries, index, ($$anchor3, $$item) => {
        let value = () => get($$item).value;
        let name = () => get($$item).name;
        var option_1 = root_3();
        var option_1_value = {};
        var text_1 = child(option_1, true);
        reset(option_1);
        template_effect(() => {
          if (option_1_value !== (option_1_value = value())) {
            option_1.value = null == (option_1.__value = value()) ? "" : value();
          }
          set_text(text_1, name());
        });
        append($$anchor3, option_1);
      });
      append($$anchor2, fragment);
    },
    $$slots: { default: true }
  });
  reset(div);
  append($$anchor, div);
}
var root_6 = template(`<!> <!>`, 1);
var root_5 = template(`<div class="h-32"><!> <!> <!></div> <div class="mb-4 flex flex-wrap space-x-2"><!> <!></div> <div class="flex flex-wrap justify-center gap-2 md:justify-start"><!> <!> <!></div>`, 1);
var root_19 = template(`<div class="mb-12 flex flex-wrap"><!> <!></div> <!>`, 1);
var root = template(`<!> <!> <!> <!> <!> <!> <!> <!> <!>`, 1);
function _page($$anchor, $$props) {
  push($$props, true);
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
  let selectedExample = state(proxy(exampleArr[0].name));
  let svelteCode = derived(() => getExampleFileName(get(selectedExample), exampleArr));
  function findObject(arr, name) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = derived(() => findObject(exampleArr, get(selectedExample)));
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
  let selectSize = state("md");
  const sizeDisplay = { sm: "Small", md: "Medium", lg: "Large" };
  let underline = state(false);
  const changeUnderline = () => {
    set(underline, !get(underline));
  };
  let disabled = state(false);
  const changeDiabled = () => {
    set(disabled, !get(disabled));
  };
  let selected = state("");
  let bindValue = state(false);
  const changeBindValue = () => {
    set(bindValue, !get(bindValue));
  };
  let generatedCode = derived(() => (() => {
    let props = [];
    if (get(selectSize) !== "md") props.push(` size="${get(selectSize)}"`);
    if (get(underline)) props.push(" underline");
    if (get(disabled)) props.push(" disabled");
    if (get(bindValue)) props.push(" bind:value={selected}");
    const propsString = props.length > 0 ? props.map((prop2) => `
  ${prop2}`).join("") + "\n" : "";
    return `<Select${propsString} />${get(bindValue) ? "\nSelected value: {selected}" : ""}`;
  })());
  let builder = uiHelpers();
  let builderExpand = state(false);
  let showBuilderExpandButton = derived(() => isGeneratedCodeOverflow(get(generatedCode)));
  const handleBuilderExpandClick = () => {
    set(builderExpand, !get(builderExpand));
  };
  let codeBlock = uiHelpers();
  let exampleExpand = state(false);
  let showExpandButton = derived(() => isSvelteOverflow(get(svelteCode), exampleModules));
  const handleExpandClick = () => {
    set(exampleExpand, !get(exampleExpand));
  };
  user_effect(() => {
    set(exampleExpand, proxy(codeBlock.isOpen));
    set(builderExpand, proxy(builder.isOpen));
  });
  var fragment = root();
  var node = first_child(fragment);
  H1(node, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text("Select");
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
      var text_2 = text("Interactive Select Builder");
      append($$anchor2, text_2);
    },
    $$slots: { default: true }
  });
  var node_4 = sibling(node_3, 2);
  {
    const codeblock = ($$anchor2) => {
      DynamicCodeBlockHighlight($$anchor2, {
        handleExpandClick: handleBuilderExpandClick,
        get expand() {
          return get(builderExpand);
        },
        get showExpandButton() {
          return get(showBuilderExpandButton);
        },
        get code() {
          return get(generatedCode);
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
          for: "select-sm",
          class: "mb-4",
          children: ($$anchor3, $$slotProps2) => {
            var fragment_3 = root_6();
            var node_6 = first_child(fragment_3);
            if_block(node_6, () => get(disabled), ($$anchor4) => {
              var text_3 = text("Disabled");
              append($$anchor4, text_3);
            });
            var node_7 = sibling(node_6, 2);
            if_block(node_7, () => get(selectSize), ($$anchor4) => {
              var text_4 = text();
              template_effect(() => set_text(text_4, `${sizeDisplay[get(selectSize)] ?? ""} select`));
              append($$anchor4, text_4);
            });
            append($$anchor3, fragment_3);
          },
          $$slots: { default: true }
        });
        var node_8 = sibling(node_5, 2);
        Select(node_8, {
          id: "select-sm",
          get size() {
            return get(selectSize);
          },
          items: countries,
          get underline() {
            return get(underline);
          },
          get disabled() {
            return get(disabled);
          },
          get value() {
            return get(selected);
          },
          set value($$value) {
            set(selected, proxy($$value));
          },
          class: "mb-2"
        });
        var node_9 = sibling(node_8, 2);
        if_block(node_9, () => get(bindValue), ($$anchor3) => {
          Helper($$anchor3, {
            class: "text-base",
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_5 = text();
              template_effect(() => set_text(text_5, `Selected value: ${get(selected) ?? ""}`));
              append($$anchor4, text_5);
            },
            $$slots: { default: true }
          });
        });
        reset(div);
        var div_1 = sibling(div, 2);
        var node_10 = child(div_1);
        Label(node_10, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_6 = text("Size");
            append($$anchor3, text_6);
          },
          $$slots: { default: true }
        });
        var node_11 = sibling(node_10, 2);
        each(node_11, 17, () => sizes, index, ($$anchor3, option) => {
          Radio($$anchor3, {
            labelClass: "w-24 my-1",
            name: "input_size",
            get group() {
              return get(selectSize);
            },
            set group($$value) {
              set(selectSize, proxy($$value));
            },
            get value() {
              return get(option);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_7 = text();
              template_effect(() => set_text(text_7, get(option)));
              append($$anchor4, text_7);
            },
            $$slots: { default: true }
          });
        });
        reset(div_1);
        var div_2 = sibling(div_1, 2);
        var node_12 = child(div_2);
        Button(node_12, {
          class: "w-40",
          onclick: changeUnderline,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_8 = text();
            template_effect(() => set_text(text_8, get(underline) ? "Default" : "Underline"));
            append($$anchor3, text_8);
          },
          $$slots: { default: true }
        });
        var node_13 = sibling(node_12, 2);
        Button(node_13, {
          class: "w-40",
          color: "secondary",
          onclick: changeDiabled,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_9 = text();
            template_effect(() => set_text(text_9, get(disabled) ? "Enabled" : "Disabled"));
            append($$anchor3, text_9);
          },
          $$slots: { default: true }
        });
        var node_14 = sibling(node_13, 2);
        Button(node_14, {
          class: "w-40",
          color: "rose",
          onclick: changeBindValue,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_10 = text();
            template_effect(() => set_text(text_10, get(bindValue) ? "Unbind" : "Bind value"));
            append($$anchor3, text_10);
          },
          $$slots: { default: true }
        });
        reset(div_2);
        append($$anchor2, fragment_2);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_15 = sibling(node_4, 2);
  H2(node_15, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_11 = text("Examples");
      append($$anchor2, text_11);
    },
    $$slots: { default: true }
  });
  var node_16 = sibling(node_15, 2);
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
    CodeWrapper(node_16, {
      codeblock,
      children: ($$anchor2, $$slotProps) => {
        var fragment_13 = root_19();
        var div_3 = first_child(fragment_13);
        var node_17 = child(div_3);
        Label(node_17, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_12 = text("Example");
            append($$anchor3, text_12);
          },
          $$slots: { default: true }
        });
        var node_18 = sibling(node_17, 2);
        each(node_18, 17, () => exampleArr, index, ($$anchor3, style) => {
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
              var text_13 = text();
              template_effect(() => set_text(text_13, get(style).name));
              append($$anchor4, text_13);
            },
            $$slots: { default: true }
          });
        });
        reset(div_3);
        var node_19 = sibling(div_3, 2);
        component(node_19, () => get(SelectedComponent), ($$anchor3, $$component) => {
          $$component($$anchor3, {});
        });
        append($$anchor2, fragment_13);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_20 = sibling(node_16, 2);
  H2(node_20, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_14 = text("Component data");
      append($$anchor2, text_14);
    },
    $$slots: { default: true }
  });
  var node_21 = sibling(node_20, 2);
  CompoAttributesViewer(node_21, { dirName });
  append($$anchor, fragment);
  pop();
}
export {
  _page as component
};
