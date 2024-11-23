import { a as append, t as template, n as ns_template, b as text, c as comment } from "../chunks/disclose-version.0TX42Q8e.js";
import { p as push, g as getContext, c as child, r as reset, t as template_effect, a as pop, s as sibling, b as get, d as derived, n as next, f as first_child, a7 as set, a6 as state, u as user_effect, h as noop } from "../chunks/runtime.BkfDdwap.js";
import { a as set_text, d as delegate } from "../chunks/store.B2xZ3Ft6.js";
import { r as rest_props, p as prop, i as if_block, b as proxy, c as component } from "../chunks/props.B7eOu8hW.js";
import { e as each, i as index } from "../chunks/each.CtHIoDcm.js";
import { t as twMerge, a as set_attributes, s as set_attribute, N as CloseButton, az as Dropdown, V as uiHelpers, aS as sineIn, x as remove_input_defaults, z as bind_value, O as input } from "../chunks/theme.BtjZjf2R.js";
import { B as Button } from "../chunks/markdown.Ba9FtS5g.js";
import { L as Label, C as CompoAttributesViewer, R as Radio } from "../chunks/CompoAttributesViewer.HsPJjrMu.js";
import { H as Helper } from "../chunks/Helper.CNgurqbV.js";
import { c as clampSize, I as Input } from "../chunks/index.CCICtSX3.js";
import { H as HighlightCompo } from "../chunks/HighlightCompo.D1kgIYBY.js";
import { D as DynamicCodeBlockHighlight } from "../chunks/DynamicCodeBlockHighlight.BS23lgW_.js";
import { C as CodeWrapper } from "../chunks/CodeWrapper.CdoIAYb8.js";
import { H as H1 } from "../chunks/H1.DunGd_Oq.js";
import { H as H2 } from "../chunks/H2.qsp5CBkK.js";
import { g as getExampleFileName, i as isGeneratedCodeOverflow, d as isSvelteOverflow } from "../chunks/helpers.B9KbZW0W.js";
import "../chunks/legacy.DvF4DOPZ.js";
import { C as Checkbox } from "../chunks/Checkbox.CJJZSeRG.js";
import { A } from "../chunks/A.XuSt3J-W.js";
import { E as EnvelopeSolid } from "../chunks/EnvelopeSolid.D3NXeFbI.js";
import { B as ButtonGroup } from "../chunks/ButtonGroup.CoXuPkoy.js";
import { s as snippet } from "../chunks/snippet.BDfn85k4.js";
import { S as SearchOutline } from "../chunks/SearchOutline.CyH-RaHz.js";
import { D as DropdownUl } from "../chunks/DropdownUl.CBcIivYZ.js";
import { D as DropdownLi } from "../chunks/DropdownLi.DjyFOMgJ.js";
import { C as ChevronDownOutline } from "../chunks/ChevronDownOutline.C3ncqrR6.js";
var root$b = template(`<div><!></div>`);
function InputAddon($$anchor, $$props) {
  push($$props, true);
  let restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "class",
    "size"
  ]);
  let background = getContext("background");
  let group = getContext("group");
  const borderClasses = {
    base: "border-gray-300 dark:border-gray-600",
    tinted: "border-gray-300 dark:border-gray-500"
  };
  const darkBgClasses = {
    base: "dark:bg-gray-600 dark:text-gray-400",
    tinted: "dark:bg-gray-500 dark:text-gray-300"
  };
  const divider = {
    base: "dark:border-e-gray-700 dark:last:border-e-gray-600",
    tinted: "dark:border-e-gray-600 dark:last:border-e-gray-500"
  };
  const textSizes = {
    sm: "sm:text-xs",
    md: "text-sm",
    lg: "sm:text-base"
  };
  const prefixPadding = { sm: "px-2", md: "px-3", lg: "px-4" };
  let _size = $$props.size || clampSize(group == null ? void 0 : group.size) || "md";
  let divClass = twMerge(textSizes[_size], prefixPadding[_size], "text-gray-500 bg-gray-200", background ? darkBgClasses.tinted : darkBgClasses.base, background ? divider.tinted : divider.base, background ? borderClasses["tinted"] : borderClasses["base"], "inline-flex items-center border", group && "[&:not(:first-child)]:-ms-px", "first:rounded-s-lg last:rounded-e-lg", $$props.class);
  var div = root$b();
  let attributes;
  var node = child(div);
  snippet(node, () => $$props.children);
  reset(div);
  template_effect(() => attributes = set_attributes(div, attributes, { ...restProps, class: divClass }));
  append($$anchor, div);
  pop();
}
var root_1$5 = ns_template(`<title> </title>`);
var root_2$4 = ns_template(`<desc> </desc>`);
var root$a = ns_template(`<svg><!><!><path stroke="currentColor" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"></path><path stroke="currentColor" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path></svg>`);
function EyeOutline($$anchor, $$props) {
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
  let size = prop($$props, "size", 19, () => ctx.size || "md"), color = prop($$props, "color", 19, () => ctx.color || "currentColor"), strokeWidth = prop($$props, "strokeWidth", 19, () => ctx.strokeWidth || "2"), ariaLabel = prop($$props, "ariaLabel", 3, "eye outline"), restProps = rest_props($$props, [
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
  var svg = root$a();
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
    var desc_1 = root_2$4();
    var text_1 = child(desc_1, true);
    reset(desc_1);
    template_effect(() => {
      set_attribute(desc_1, "id", $$props.desc.id);
      set_text(text_1, $$props.desc.desc);
    });
    append($$anchor2, desc_1);
  });
  var path = sibling(node_1);
  var path_1 = sibling(path);
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
    set_attribute(path_1, "stroke-width", strokeWidth());
  });
  append($$anchor, svg);
  pop();
}
var root_1$4 = ns_template(`<title> </title>`);
var root_2$3 = ns_template(`<desc> </desc>`);
var root$9 = ns_template(`<svg><!><!><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.933 13.909A4.357 4.357 0 0 1 3 12c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 21 12c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M5 19 19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path></svg>`);
function EyeSlashOutline($$anchor, $$props) {
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
  let size = prop($$props, "size", 19, () => ctx.size || "md"), color = prop($$props, "color", 19, () => ctx.color || "currentColor"), strokeWidth = prop($$props, "strokeWidth", 19, () => ctx.strokeWidth || "2"), ariaLabel = prop($$props, "ariaLabel", 3, "eye slash outline"), restProps = rest_props($$props, [
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
  var svg = root$9();
  let attributes;
  var node = child(svg);
  if_block(node, () => {
    var _a2;
    return ((_a2 = $$props.title) == null ? void 0 : _a2.id) && $$props.title.title;
  }, ($$anchor2) => {
    var title_1 = root_1$4();
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
    var desc_1 = root_2$3();
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
const __vite_glob_0_0 = '<script lang="ts">\n  import { Input, Helper } from "$lib";\n  let value = $state();\n<\/script>\n\n<Input placeholder="Your lucky number">\n  {#snippet children(prop)}\n    <input type="number" bind:value {...prop} />\n  {/snippet}\n</Input>\n<Helper class="mt-2">Your lucky number: {value}</Helper>\n';
const __vite_glob_0_1 = '<script lang="ts">\n  import { Input } from "$lib";\n<\/script>\n\n<Input clearable placeholder="Clearable input" />\n';
const __vite_glob_0_2 = '<script lang="ts">\n  import { EyeOutline, EyeSlashOutline } from "flowbite-svelte-icons";\n  import { Input, Label, InputAddon, ButtonGroup } from "$lib";\n  let show = $state(false);\n  let show1 = $state(false);\n<\/script>\n\n<form class="mb-4">\n  <Label for="show-password" class="mb-2">Your password</Label>\n  <Input id="show-password" name="show-password" autocomplete="new-password" type={show ? "text" : "password"} placeholder="Your password here" size="lg" class="pl-10">\n    {#snippet left()}\n      <button onclick={() => (show = !show)} class="pointer-events-auto">\n        {#if show}\n          <EyeOutline class="h-6 w-6" />\n        {:else}\n          <EyeSlashOutline class="h-6 w-6" />\n        {/if}\n      </button>\n    {/snippet}\n  </Input>\n</form>\n\n<form>\n  <Label for="show-password1" class="mb-2">Your password</Label>\n  <ButtonGroup class="w-full">\n    <InputAddon>\n      <button onclick={() => (show1 = !show1)}>\n        {#if show1}\n          <EyeOutline class="h-6 w-6" />\n        {:else}\n          <EyeSlashOutline class="h-6 w-6" />\n        {/if}\n      </button>\n    </InputAddon>\n    <Input id="show-password1" type={show1 ? "text" : "password"} name="show-password1" autocomplete="new-password" placeholder="Your password here" />\n    <Input id="usename" name="usename" type="text" class="hidden" />\n  </ButtonGroup>\n</form>\n';
const __vite_glob_0_3 = '<script lang="ts">\n  import { Button, ButtonGroup, Dropdown, DropdownLi, DropdownUl, Input, uiHelpers } from "$lib";\n  import { sineIn } from "svelte/easing";\n  import { ChevronDownOutline, SearchOutline } from "flowbite-svelte-icons";\n\n  let dropdown = uiHelpers();\n  let dropdownStatus = $state(false);\n  let closeDropdown = dropdown.close;\n  let transitionParams = {\n    y: 0,\n    duration: 200,\n    easing: sineIn\n  };\n  $effect(() => {\n    // this can be done adding nav.navStatus directly to DOM element\n    // without using effect\n    dropdownStatus = dropdown.isOpen;\n  });\n<\/script>\n\n<div class="h-48">\n  <ButtonGroup class="w-full">\n    <Button onclick={dropdown.toggle} class="flex-shrink-0 border border-gray-300 bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800">\n      All categories<ChevronDownOutline class="ms-2 h-6 w-6" />\n    </Button>\n    <div class="relative">\n      <Dropdown {dropdownStatus} {closeDropdown} params={transitionParams} class="absolute -left-[160px] top-[40px]">\n        <DropdownUl>\n          <DropdownLi href="/">Shopping</DropdownLi>\n          <DropdownLi href="/">Images</DropdownLi>\n          <DropdownLi href="/">News</DropdownLi>\n          <DropdownLi href="/">Finance</DropdownLi>\n        </DropdownUl>\n      </Dropdown>\n    </div>\n    <Input placeholder="Search" />\n    <Button color="primary" class="!p-2.5" type="submit">\n      <SearchOutline class="h-5 w-5" />\n    </Button>\n  </ButtonGroup>\n</div>\n';
const __vite_glob_0_4 = '<script lang="ts">\n  import { Input, Label, Checkbox, Button, A } from "$lib";\n<\/script>\n\n<form>\n  <div class="mb-6 grid gap-6 md:grid-cols-2">\n    <div>\n      <Label for="first_name" class="mb-2">First name</Label>\n      <Input type="text" id="first_name" placeholder="John" required />\n    </div>\n    <div>\n      <Label for="last_name" class="mb-2">Last name</Label>\n      <Input type="text" id="last_name" placeholder="Doe" required />\n    </div>\n    <div>\n      <Label for="company" class="mb-2">Company</Label>\n      <Input type="text" id="company" placeholder="Flowbite" required />\n    </div>\n    <div>\n      <Label for="phone" class="mb-2">Phone number</Label>\n      <Input type="tel" id="phone" placeholder="123-45-678" pattern={"[0-9]{3}-[0-9]{2}-[0-9]{3}"} required />\n    </div>\n    <div>\n      <Label for="website" class="mb-2">Website URL</Label>\n      <Input type="url" id="website" placeholder="flowbite.com" required />\n    </div>\n    <div>\n      <Label for="visitors" class="mb-2">Unique visitors (per month)</Label>\n      <Input type="number" id="visitors" placeholder="" required />\n    </div>\n  </div>\n  <div class="mb-6">\n    <Label for="email" class="mb-2">Email address</Label>\n    <Input type="email" id="email" autocomplete="email" placeholder="john.doe@company.com" required />\n  </div>\n  <div class="mb-6">\n    <Label for="password" class="mb-2">Password</Label>\n    <Input type="password" name="password" autocomplete="new-password" id="password" placeholder="•••••••••" required />\n  </div>\n  <div class="mb-6">\n    <Label for="confirm_password" class="mb-2">Confirm password</Label>\n    <Input type="password" id="confirm_password" name="confirm_password" autocomplete="new-password" placeholder="•••••••••" required />\n  </div>\n  <Checkbox classLabel="mb-6 space-x-1 rtl:space-x-reverse" required>\n    I agree with the <A href="/" class="text-primary-700 hover:underline dark:text-primary-600">terms and conditions</A>.\n  </Checkbox>\n  <Button type="submit">Submit</Button>\n</form>\n';
const __vite_glob_0_5 = '<script lang="ts">\n  import { ButtonGroup, Input, InputAddon, Label, Button, Checkbox } from "$lib";\n<\/script>\n\n<div>\n  <Label class="mb-2" for="input-addon-sm">Small additional text</Label>\n  <ButtonGroup class="w-full" size="sm">\n    <InputAddon>@</InputAddon>\n    <Input id="input-addon-sm" type="email" placeholder="Your name" />\n  </ButtonGroup>\n</div>\n\n<div>\n  <Label class="mb-2" for="input-addon-md">Default additional text</Label>\n  <ButtonGroup class="w-full" size="md">\n    <Input id="input-addon-md" type="email" placeholder="Your name" />\n    <InputAddon>.com</InputAddon>\n  </ButtonGroup>\n</div>\n\n<div>\n  <Label class="mb-2" for="input-addon-lg">Large additional text</Label>\n  <ButtonGroup class="w-full" size="lg">\n    <InputAddon>@</InputAddon>\n    <Input id="input-addon-lg" type="email" placeholder="Your name" />\n    <InputAddon>.com</InputAddon>\n  </ButtonGroup>\n</div>\n\n<div class="pt-8">\n  <Label for="input-addon" class="mb-2">Grouped with button</Label>\n  <ButtonGroup class="w-full">\n    <InputAddon>@</InputAddon>\n    <Input id="input-addon" type="email" placeholder="Your name" />\n    <Button color="primary">Search</Button>\n  </ButtonGroup>\n</div>\n\n<div>\n  <Label for="input-addon" class="mb-2">Crazy example</Label>\n  <ButtonGroup class="w-full">\n    <InputAddon><Checkbox /></InputAddon>\n    <Button color="primary">Search</Button>\n    <InputAddon>http://</InputAddon>\n    <Input id="input-addon" type="email" placeholder="Your name" />\n    <InputAddon><Checkbox /></InputAddon>\n    <Button color="blue">Send</Button>\n  </ButtonGroup>\n</div>\n';
const __vite_glob_0_6 = '<script lang="ts">\n  import { Input, Label, CloseButton } from "$lib";\n  import { EnvelopeSolid } from "flowbite-svelte-icons";\n<\/script>\n\n<Label class="mb-4 space-y-2">\n  <span>Small input - left icon</span>\n  <Input type="email" placeholder="name@flowbite.com" size="sm" class="pl-8">\n    {#snippet left()}\n      <EnvelopeSolid class="h-4 w-4" />\n    {/snippet}\n  </Input>\n</Label>\n\n<Label class="mb-4 space-y-2">\n  <span>Default input - right icon</span>\n  <Input type="email" placeholder="name@flowbite.com" size="md">\n    {#snippet right()}\n      <EnvelopeSolid class="h-5 w-5" />\n    {/snippet}\n  </Input>\n</Label>\n\n<Label class="space-y-2">\n  <span>Large input - both icons</span>\n  <Input type="email" placeholder="name@flowbite.com" size="lg" class="pl-10">\n    {#snippet left()}\n      <EnvelopeSolid class="h-6 w-6" />\n    {/snippet}\n    {#snippet right()}\n      <CloseButton />\n    {/snippet}\n  </Input>\n</Label>\n';
const __vite_glob_0_7 = '<script lang="ts">\n  import { Input, Label } from "$lib";\n  let value = $state(5);\n<\/script>\n\n<Label class="mb-4 space-y-2">\n  <span>Your lucky number</span>\n  <Input type="number" bind:value />\n</Label>\n\n<p>Value: {value}</p>\n<p>Type of value: {typeof value}</p>\n';
const __vite_glob_0_8 = '<script lang="ts">\n  import { Input, Label, Button } from "$lib";\n  import { SearchOutline } from "flowbite-svelte-icons";\n<\/script>\n\n<form>\n  <Label for="search" class="mb-2 block">Your Email</Label>\n  <Input id="search" placeholder="Search" size="lg" class="pl-10">\n    {#snippet left()}\n      <SearchOutline class="h-6 w-6 text-gray-500 dark:text-gray-400" />\n    {/snippet}\n    {#snippet right()}\n      <Button size="sm" type="submit">Search</Button>\n    {/snippet}\n  </Input>\n</form>\n';
const __vite_glob_0_9 = '<script lang="ts">\n  import { Input } from "$lib";\n  let { text = $bindable("") } = $props();\n<\/script>\n';
var root_10$1 = template(`I agree with the <!>.`, 1);
var root$8 = template(`<form><div class="mb-6 grid gap-6 md:grid-cols-2"><div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div><!> <!></div></div> <div class="mb-6"><!> <!></div> <div class="mb-6"><!> <!></div> <div class="mb-6"><!> <!></div> <!> <!></form>`);
function Form($$anchor) {
  var form = root$8();
  var div = child(form);
  var div_1 = child(div);
  var node = child(div_1);
  Label(node, {
    for: "first_name",
    class: "mb-2",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text("First name");
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
  var node_1 = sibling(node, 2);
  Input(node_1, {
    type: "text",
    id: "first_name",
    placeholder: "John",
    required: true
  });
  reset(div_1);
  var div_2 = sibling(div_1, 2);
  var node_2 = child(div_2);
  Label(node_2, {
    for: "last_name",
    class: "mb-2",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_1 = text("Last name");
      append($$anchor2, text_1);
    },
    $$slots: { default: true }
  });
  var node_3 = sibling(node_2, 2);
  Input(node_3, {
    type: "text",
    id: "last_name",
    placeholder: "Doe",
    required: true
  });
  reset(div_2);
  var div_3 = sibling(div_2, 2);
  var node_4 = child(div_3);
  Label(node_4, {
    for: "company",
    class: "mb-2",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_2 = text("Company");
      append($$anchor2, text_2);
    },
    $$slots: { default: true }
  });
  var node_5 = sibling(node_4, 2);
  Input(node_5, {
    type: "text",
    id: "company",
    placeholder: "Flowbite",
    required: true
  });
  reset(div_3);
  var div_4 = sibling(div_3, 2);
  var node_6 = child(div_4);
  Label(node_6, {
    for: "phone",
    class: "mb-2",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_3 = text("Phone number");
      append($$anchor2, text_3);
    },
    $$slots: { default: true }
  });
  var node_7 = sibling(node_6, 2);
  Input(node_7, {
    type: "tel",
    id: "phone",
    placeholder: "123-45-678",
    pattern: "[0-9]{3}-[0-9]{2}-[0-9]{3}",
    required: true
  });
  reset(div_4);
  var div_5 = sibling(div_4, 2);
  var node_8 = child(div_5);
  Label(node_8, {
    for: "website",
    class: "mb-2",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_4 = text("Website URL");
      append($$anchor2, text_4);
    },
    $$slots: { default: true }
  });
  var node_9 = sibling(node_8, 2);
  Input(node_9, {
    type: "url",
    id: "website",
    placeholder: "flowbite.com",
    required: true
  });
  reset(div_5);
  var div_6 = sibling(div_5, 2);
  var node_10 = child(div_6);
  Label(node_10, {
    for: "visitors",
    class: "mb-2",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_5 = text("Unique visitors (per month)");
      append($$anchor2, text_5);
    },
    $$slots: { default: true }
  });
  var node_11 = sibling(node_10, 2);
  Input(node_11, {
    type: "number",
    id: "visitors",
    placeholder: "",
    required: true
  });
  reset(div_6);
  reset(div);
  var div_7 = sibling(div, 2);
  var node_12 = child(div_7);
  Label(node_12, {
    for: "email",
    class: "mb-2",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_6 = text("Email address");
      append($$anchor2, text_6);
    },
    $$slots: { default: true }
  });
  var node_13 = sibling(node_12, 2);
  Input(node_13, {
    type: "email",
    id: "email",
    autocomplete: "email",
    placeholder: "john.doe@company.com",
    required: true
  });
  reset(div_7);
  var div_8 = sibling(div_7, 2);
  var node_14 = child(div_8);
  Label(node_14, {
    for: "password",
    class: "mb-2",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_7 = text("Password");
      append($$anchor2, text_7);
    },
    $$slots: { default: true }
  });
  var node_15 = sibling(node_14, 2);
  Input(node_15, {
    type: "password",
    name: "password",
    autocomplete: "new-password",
    id: "password",
    placeholder: "•••••••••",
    required: true
  });
  reset(div_8);
  var div_9 = sibling(div_8, 2);
  var node_16 = child(div_9);
  Label(node_16, {
    for: "confirm_password",
    class: "mb-2",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_8 = text("Confirm password");
      append($$anchor2, text_8);
    },
    $$slots: { default: true }
  });
  var node_17 = sibling(node_16, 2);
  Input(node_17, {
    type: "password",
    id: "confirm_password",
    name: "confirm_password",
    autocomplete: "new-password",
    placeholder: "•••••••••",
    required: true
  });
  reset(div_9);
  var node_18 = sibling(div_9, 2);
  Checkbox(node_18, {
    classLabel: "mb-6 space-x-1 rtl:space-x-reverse",
    required: true,
    children: ($$anchor2, $$slotProps) => {
      next();
      var fragment = root_10$1();
      var node_19 = sibling(first_child(fragment));
      A(node_19, {
        href: "/",
        class: "text-primary-700 hover:underline dark:text-primary-600",
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text_9 = text("terms and conditions");
          append($$anchor3, text_9);
        },
        $$slots: { default: true }
      });
      next();
      append($$anchor2, fragment);
    },
    $$slots: { default: true }
  });
  var node_20 = sibling(node_18, 2);
  Button(node_20, {
    type: "submit",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_10 = text("Submit");
      append($$anchor2, text_10);
    },
    $$slots: { default: true }
  });
  reset(form);
  append($$anchor, form);
}
var root_1$3 = template(`<span>Small input - left icon</span> <!>`, 1);
var root_3 = template(`<span>Default input - right icon</span> <!>`, 1);
var root_5$2 = template(`<span>Large input - both icons</span> <!>`, 1);
var root$7 = template(`<!> <!> <!>`, 1);
function Icon($$anchor) {
  var fragment = root$7();
  var node = first_child(fragment);
  Label(node, {
    class: "mb-4 space-y-2",
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1$3();
      var node_1 = sibling(first_child(fragment_1), 2);
      {
        const left = ($$anchor3) => {
          EnvelopeSolid($$anchor3, { class: "h-4 w-4" });
        };
        Input(node_1, {
          type: "email",
          placeholder: "name@flowbite.com",
          size: "sm",
          class: "pl-8",
          left,
          $$slots: { left: true }
        });
      }
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
  var node_2 = sibling(node, 2);
  Label(node_2, {
    class: "mb-4 space-y-2",
    children: ($$anchor2, $$slotProps) => {
      var fragment_3 = root_3();
      var node_3 = sibling(first_child(fragment_3), 2);
      {
        const right = ($$anchor3) => {
          EnvelopeSolid($$anchor3, { class: "h-5 w-5" });
        };
        Input(node_3, {
          type: "email",
          placeholder: "name@flowbite.com",
          size: "md",
          right,
          $$slots: { right: true }
        });
      }
      append($$anchor2, fragment_3);
    },
    $$slots: { default: true }
  });
  var node_4 = sibling(node_2, 2);
  Label(node_4, {
    class: "space-y-2",
    children: ($$anchor2, $$slotProps) => {
      var fragment_5 = root_5$2();
      var node_5 = sibling(first_child(fragment_5), 2);
      {
        const left = ($$anchor3) => {
          EnvelopeSolid($$anchor3, { class: "h-6 w-6" });
        };
        const right = ($$anchor3) => {
          CloseButton($$anchor3, {});
        };
        Input(node_5, {
          type: "email",
          placeholder: "name@flowbite.com",
          size: "lg",
          class: "pl-10",
          left,
          right,
          $$slots: { left: true, right: true }
        });
      }
      append($$anchor2, fragment_5);
    },
    $$slots: { default: true }
  });
  append($$anchor, fragment);
}
var root_2$2 = template(`<!> <!>`, 1);
var root_5$1 = template(`<!> <!>`, 1);
var root_8 = template(`<!> <!> <!>`, 1);
var root_12 = template(`<!> <!> <!>`, 1);
var root_16 = template(`<!> <!> <!> <!> <!> <!>`, 1);
var root$6 = template(`<div><!> <!></div> <div><!> <!></div> <div><!> <!></div> <div class="pt-8"><!> <!></div> <div><!> <!></div>`, 1);
function Group($$anchor) {
  var fragment = root$6();
  var div = first_child(fragment);
  var node = child(div);
  Label(node, {
    class: "mb-2",
    for: "input-addon-sm",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text("Small additional text");
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
  var node_1 = sibling(node, 2);
  ButtonGroup(node_1, {
    class: "w-full",
    size: "sm",
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_2$2();
      var node_2 = first_child(fragment_1);
      InputAddon(node_2, {
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text_1 = text("@");
          append($$anchor3, text_1);
        },
        $$slots: { default: true }
      });
      var node_3 = sibling(node_2, 2);
      Input(node_3, {
        id: "input-addon-sm",
        type: "email",
        placeholder: "Your name"
      });
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
  reset(div);
  var div_1 = sibling(div, 2);
  var node_4 = child(div_1);
  Label(node_4, {
    class: "mb-2",
    for: "input-addon-md",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_2 = text("Default additional text");
      append($$anchor2, text_2);
    },
    $$slots: { default: true }
  });
  var node_5 = sibling(node_4, 2);
  ButtonGroup(node_5, {
    class: "w-full",
    size: "md",
    children: ($$anchor2, $$slotProps) => {
      var fragment_2 = root_5$1();
      var node_6 = first_child(fragment_2);
      Input(node_6, {
        id: "input-addon-md",
        type: "email",
        placeholder: "Your name"
      });
      var node_7 = sibling(node_6, 2);
      InputAddon(node_7, {
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text_3 = text(".com");
          append($$anchor3, text_3);
        },
        $$slots: { default: true }
      });
      append($$anchor2, fragment_2);
    },
    $$slots: { default: true }
  });
  reset(div_1);
  var div_2 = sibling(div_1, 2);
  var node_8 = child(div_2);
  Label(node_8, {
    class: "mb-2",
    for: "input-addon-lg",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_4 = text("Large additional text");
      append($$anchor2, text_4);
    },
    $$slots: { default: true }
  });
  var node_9 = sibling(node_8, 2);
  ButtonGroup(node_9, {
    class: "w-full",
    size: "lg",
    children: ($$anchor2, $$slotProps) => {
      var fragment_3 = root_8();
      var node_10 = first_child(fragment_3);
      InputAddon(node_10, {
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text_5 = text("@");
          append($$anchor3, text_5);
        },
        $$slots: { default: true }
      });
      var node_11 = sibling(node_10, 2);
      Input(node_11, {
        id: "input-addon-lg",
        type: "email",
        placeholder: "Your name"
      });
      var node_12 = sibling(node_11, 2);
      InputAddon(node_12, {
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text_6 = text(".com");
          append($$anchor3, text_6);
        },
        $$slots: { default: true }
      });
      append($$anchor2, fragment_3);
    },
    $$slots: { default: true }
  });
  reset(div_2);
  var div_3 = sibling(div_2, 2);
  var node_13 = child(div_3);
  Label(node_13, {
    for: "input-addon",
    class: "mb-2",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_7 = text("Grouped with button");
      append($$anchor2, text_7);
    },
    $$slots: { default: true }
  });
  var node_14 = sibling(node_13, 2);
  ButtonGroup(node_14, {
    class: "w-full",
    children: ($$anchor2, $$slotProps) => {
      var fragment_4 = root_12();
      var node_15 = first_child(fragment_4);
      InputAddon(node_15, {
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text_8 = text("@");
          append($$anchor3, text_8);
        },
        $$slots: { default: true }
      });
      var node_16 = sibling(node_15, 2);
      Input(node_16, {
        id: "input-addon",
        type: "email",
        placeholder: "Your name"
      });
      var node_17 = sibling(node_16, 2);
      Button(node_17, {
        color: "primary",
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text_9 = text("Search");
          append($$anchor3, text_9);
        },
        $$slots: { default: true }
      });
      append($$anchor2, fragment_4);
    },
    $$slots: { default: true }
  });
  reset(div_3);
  var div_4 = sibling(div_3, 2);
  var node_18 = child(div_4);
  Label(node_18, {
    for: "input-addon",
    class: "mb-2",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_10 = text("Crazy example");
      append($$anchor2, text_10);
    },
    $$slots: { default: true }
  });
  var node_19 = sibling(node_18, 2);
  ButtonGroup(node_19, {
    class: "w-full",
    children: ($$anchor2, $$slotProps) => {
      var fragment_5 = root_16();
      var node_20 = first_child(fragment_5);
      InputAddon(node_20, {
        children: ($$anchor3, $$slotProps2) => {
          Checkbox($$anchor3, {});
        },
        $$slots: { default: true }
      });
      var node_21 = sibling(node_20, 2);
      Button(node_21, {
        color: "primary",
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text_11 = text("Search");
          append($$anchor3, text_11);
        },
        $$slots: { default: true }
      });
      var node_22 = sibling(node_21, 2);
      InputAddon(node_22, {
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text_12 = text("http://");
          append($$anchor3, text_12);
        },
        $$slots: { default: true }
      });
      var node_23 = sibling(node_22, 2);
      Input(node_23, {
        id: "input-addon",
        type: "email",
        placeholder: "Your name"
      });
      var node_24 = sibling(node_23, 2);
      InputAddon(node_24, {
        children: ($$anchor3, $$slotProps2) => {
          Checkbox($$anchor3, {});
        },
        $$slots: { default: true }
      });
      var node_25 = sibling(node_24, 2);
      Button(node_25, {
        color: "blue",
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text_13 = text("Send");
          append($$anchor3, text_13);
        },
        $$slots: { default: true }
      });
      append($$anchor2, fragment_5);
    },
    $$slots: { default: true }
  });
  reset(div_4);
  append($$anchor, fragment);
}
var on_click = (_, show) => set(show, !get(show));
var root_2$1 = template(`<button class="pointer-events-auto"><!></button>`);
var on_click_1 = (__1, show1) => set(show1, !get(show1));
var root_7 = template(`<button><!></button>`);
var root_6 = template(`<!> <!> <!>`, 1);
var root$5 = template(`<form class="mb-4"><!> <!></form> <form><!> <!></form>`, 1);
function ClickHandler($$anchor) {
  let show = state(false);
  let show1 = state(false);
  var fragment = root$5();
  var form = first_child(fragment);
  var node = child(form);
  Label(node, {
    for: "show-password",
    class: "mb-2",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text("Your password");
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
  var node_1 = sibling(node, 2);
  var type = derived(() => get(show) ? "text" : "password");
  {
    const left = ($$anchor2) => {
      var button = root_2$1();
      button.__click = [on_click, show];
      var node_2 = child(button);
      if_block(
        node_2,
        () => get(show),
        ($$anchor3) => {
          EyeOutline($$anchor3, { class: "h-6 w-6" });
        },
        ($$anchor3) => {
          EyeSlashOutline($$anchor3, { class: "h-6 w-6" });
        }
      );
      reset(button);
      append($$anchor2, button);
    };
    Input(node_1, {
      id: "show-password",
      name: "show-password",
      autocomplete: "new-password",
      get type() {
        return get(type);
      },
      placeholder: "Your password here",
      size: "lg",
      class: "pl-10",
      left,
      $$slots: { left: true }
    });
  }
  reset(form);
  var form_1 = sibling(form, 2);
  var node_3 = child(form_1);
  Label(node_3, {
    for: "show-password1",
    class: "mb-2",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_1 = text("Your password");
      append($$anchor2, text_1);
    },
    $$slots: { default: true }
  });
  var node_4 = sibling(node_3, 2);
  ButtonGroup(node_4, {
    class: "w-full",
    children: ($$anchor2, $$slotProps) => {
      var fragment_3 = root_6();
      var node_5 = first_child(fragment_3);
      InputAddon(node_5, {
        children: ($$anchor3, $$slotProps2) => {
          var button_1 = root_7();
          button_1.__click = [on_click_1, show1];
          var node_6 = child(button_1);
          if_block(
            node_6,
            () => get(show1),
            ($$anchor4) => {
              EyeOutline($$anchor4, { class: "h-6 w-6" });
            },
            ($$anchor4) => {
              EyeSlashOutline($$anchor4, { class: "h-6 w-6" });
            }
          );
          reset(button_1);
          append($$anchor3, button_1);
        },
        $$slots: { default: true }
      });
      var node_7 = sibling(node_5, 2);
      var type_1 = derived(() => get(show1) ? "text" : "password");
      Input(node_7, {
        id: "show-password1",
        get type() {
          return get(type_1);
        },
        name: "show-password1",
        autocomplete: "new-password",
        placeholder: "Your password here"
      });
      var node_8 = sibling(node_7, 2);
      Input(node_8, {
        id: "usename",
        name: "usename",
        type: "text",
        class: "hidden"
      });
      append($$anchor2, fragment_3);
    },
    $$slots: { default: true }
  });
  reset(form_1);
  append($$anchor, fragment);
}
delegate(["click"]);
var root_1$2 = template(`<span>Your lucky number</span> <!>`, 1);
var root$4 = template(`<!> <p> </p> <p> </p>`, 1);
function Number($$anchor) {
  let value = state(5);
  var fragment = root$4();
  var node = first_child(fragment);
  Label(node, {
    class: "mb-4 space-y-2",
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1$2();
      var node_1 = sibling(first_child(fragment_1), 2);
      Input(node_1, {
        type: "number",
        get value() {
          return get(value);
        },
        set value($$value) {
          set(value, proxy($$value));
        }
      });
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
  var p = sibling(node, 2);
  var text2 = child(p);
  reset(p);
  var p_1 = sibling(p, 2);
  var text_1 = child(p_1);
  reset(p_1);
  template_effect(() => {
    set_text(text2, `Value: ${get(value) ?? ""}`);
    set_text(text_1, `Type of value: ${typeof get(value)}`);
  });
  append($$anchor, fragment);
}
var root$3 = template(`<form><!> <!></form>`);
function Search($$anchor) {
  var form = root$3();
  var node = child(form);
  Label(node, {
    for: "search",
    class: "mb-2 block",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text("Your Email");
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
  var node_1 = sibling(node, 2);
  {
    const left = ($$anchor2) => {
      SearchOutline($$anchor2, {
        class: "h-6 w-6 text-gray-500 dark:text-gray-400"
      });
    };
    const right = ($$anchor2) => {
      Button($$anchor2, {
        size: "sm",
        type: "submit",
        children: ($$anchor3, $$slotProps) => {
          next();
          var text_1 = text("Search");
          append($$anchor3, text_1);
        },
        $$slots: { default: true }
      });
    };
    Input(node_1, {
      id: "search",
      placeholder: "Search",
      size: "lg",
      class: "pl-10",
      left,
      right,
      $$slots: { left: true, right: true }
    });
  }
  reset(form);
  append($$anchor, form);
}
var root_2 = template(`All categories<!>`, 1);
var root_4 = template(`<!> <!> <!> <!>`, 1);
var root_1$1 = template(`<!> <div class="relative"><!></div> <!> <!>`, 1);
var root$2 = template(`<div class="h-48"><!></div>`);
function Dropdown_1($$anchor, $$props) {
  push($$props, true);
  let dropdown = uiHelpers();
  let dropdownStatus = state(false);
  let closeDropdown = dropdown.close;
  let transitionParams = { y: 0, duration: 200, easing: sineIn };
  user_effect(() => {
    set(dropdownStatus, proxy(dropdown.isOpen));
  });
  var div = root$2();
  var node = child(div);
  ButtonGroup(node, {
    class: "w-full",
    children: ($$anchor2, $$slotProps) => {
      var fragment = root_1$1();
      var node_1 = first_child(fragment);
      Button(node_1, {
        get onclick() {
          return dropdown.toggle;
        },
        class: "flex-shrink-0 border border-gray-300 bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800",
        children: ($$anchor3, $$slotProps2) => {
          next();
          var fragment_1 = root_2();
          var node_2 = sibling(first_child(fragment_1));
          ChevronDownOutline(node_2, { class: "ms-2 h-6 w-6" });
          append($$anchor3, fragment_1);
        },
        $$slots: { default: true }
      });
      var div_1 = sibling(node_1, 2);
      var node_3 = child(div_1);
      Dropdown(node_3, {
        get dropdownStatus() {
          return get(dropdownStatus);
        },
        closeDropdown,
        params: transitionParams,
        class: "absolute -left-[160px] top-[40px]",
        children: ($$anchor3, $$slotProps2) => {
          DropdownUl($$anchor3, {
            children: ($$anchor4, $$slotProps3) => {
              var fragment_3 = root_4();
              var node_4 = first_child(fragment_3);
              DropdownLi(node_4, {
                href: "/",
                children: ($$anchor5, $$slotProps4) => {
                  next();
                  var text$1 = text("Shopping");
                  append($$anchor5, text$1);
                },
                $$slots: { default: true }
              });
              var node_5 = sibling(node_4, 2);
              DropdownLi(node_5, {
                href: "/",
                children: ($$anchor5, $$slotProps4) => {
                  next();
                  var text_1 = text("Images");
                  append($$anchor5, text_1);
                },
                $$slots: { default: true }
              });
              var node_6 = sibling(node_5, 2);
              DropdownLi(node_6, {
                href: "/",
                children: ($$anchor5, $$slotProps4) => {
                  next();
                  var text_2 = text("News");
                  append($$anchor5, text_2);
                },
                $$slots: { default: true }
              });
              var node_7 = sibling(node_6, 2);
              DropdownLi(node_7, {
                href: "/",
                children: ($$anchor5, $$slotProps4) => {
                  next();
                  var text_3 = text("Finance");
                  append($$anchor5, text_3);
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
      var node_8 = sibling(div_1, 2);
      Input(node_8, { placeholder: "Search" });
      var node_9 = sibling(node_8, 2);
      Button(node_9, {
        color: "primary",
        class: "!p-2.5",
        type: "submit",
        children: ($$anchor3, $$slotProps2) => {
          SearchOutline($$anchor3, { class: "h-5 w-5" });
        },
        $$slots: { default: true }
      });
      append($$anchor2, fragment);
    },
    $$slots: { default: true }
  });
  reset(div);
  append($$anchor, div);
  pop();
}
var root_1 = template(`<input>`);
var root$1 = template(`<!> <!>`, 1);
function AdvancedUsage($$anchor) {
  let value = state(void 0);
  var fragment = root$1();
  var node = first_child(fragment);
  {
    const children = ($$anchor2, prop2 = noop) => {
      var input2 = root_1();
      remove_input_defaults(input2);
      let attributes;
      template_effect(() => attributes = set_attributes(input2, attributes, { type: "number", ...prop2() }));
      bind_value(input2, () => get(value), ($$value) => set(value, $$value));
      append($$anchor2, input2);
    };
    Input(node, {
      placeholder: "Your lucky number",
      children,
      $$slots: { default: true }
    });
  }
  var node_1 = sibling(node, 2);
  Helper(node_1, {
    class: "mt-2",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text();
      template_effect(() => set_text(text$1, `Your lucky number: ${get(value) ?? ""}`));
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
  append($$anchor, fragment);
}
function Clearable($$anchor) {
  Input($$anchor, {
    clearable: true,
    placeholder: "Clearable input"
  });
}
var root_10 = template(`<span class="font-medium">Well done!</span> Some helper message.`, 1);
var root_5 = template(`<div class="mb-4 md:h-24"><!> <!> <!></div> <div class="mb-4 flex flex-wrap space-x-2"><!> <!></div> <div class="mb-4 flex flex-wrap space-x-2"><!> <!></div> <div class="mb-4 flex flex-wrap space-x-2"><!> <!> <!></div> <div class="flex flex-wrap justify-center gap-2 md:justify-start"><!> <!></div>`, 1);
var root_25 = template(`<div class="mb-8 flex flex-wrap"><!> <!></div> <!>`, 1);
var root = template(`<!> <!> <!> <!> <!> <!> <!> <!> <!>`, 1);
function _page($$anchor, $$props) {
  push($$props, true);
  let text$1 = prop($$props, "text", 15, "");
  const dirName = "forms/input";
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/AdvancedUsage.svelte": __vite_glob_0_0,
    "./examples/Clearable.svelte": __vite_glob_0_1,
    "./examples/ClickHandler.svelte": __vite_glob_0_2,
    "./examples/Dropdown.svelte": __vite_glob_0_3,
    "./examples/Form.svelte": __vite_glob_0_4,
    "./examples/Group.svelte": __vite_glob_0_5,
    "./examples/Icon.svelte": __vite_glob_0_6,
    "./examples/Number.svelte": __vite_glob_0_7,
    "./examples/Search.svelte": __vite_glob_0_8,
    "./examples/Setup.svelte": __vite_glob_0_9
  });
  const exampleArr = [
    {
      name: "Click handler",
      component: ClickHandler
    },
    {
      name: "Dropdown",
      component: Dropdown_1
    },
    {
      name: "Form",
      component: Form
    },
    {
      name: "Group",
      component: Group
    },
    {
      name: "Icon",
      component: Icon
    },
    {
      name: "Number",
      component: Number
    },
    {
      name: "Search",
      component: Search
    },
    {
      name: "Clearable",
      component: Clearable
    },
    {
      name: "Advanced usage",
      component: AdvancedUsage
    }
  ];
  let selectedExample = state(proxy(exampleArr[0].name));
  let svelteCode = derived(() => getExampleFileName(get(selectedExample), exampleArr));
  function findObject(arr, name) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = derived(() => findObject(exampleArr, get(selectedExample)));
  const sizes = ["sm", "md", "lg"];
  let inputSize = state("md");
  const colors = Object.keys(input.variants.color);
  let inputColor = state("default");
  let disabled = state(false);
  const changeDisabled = () => {
    set(disabled, !get(disabled));
  };
  let helperColor = state("default");
  let helperSlot = state(false);
  const changeHelperSlot = () => {
    set(helperSlot, !get(helperSlot));
    set(helperColor, "default");
  };
  let closeBtnStatus = state(false);
  const changeCloseBtnStatus = () => {
    set(closeBtnStatus, !get(closeBtnStatus));
  };
  let generatedCode = derived(() => (() => {
    let props = [];
    if (get(inputColor) !== "default") props.push(` color="${get(inputColor)}"`);
    if (get(disabled)) props.push(" disabled");
    if (get(inputSize) !== "md") props.push(` size="${get(inputSize)}"`);
    const propsString = props.length > 0 ? props.map((prop2) => `
  ${prop2}`).join("") + "\n" : "";
    return `<Input${propsString}${get(closeBtnStatus) ? `>
{#snippet right()}
  <CloseButton onclick={() => (text = '')} />
{/snippet}` : "/>"}
${get(closeBtnStatus) ? `</Input>` : ""}${get(helperSlot) ? `<Helper class="ps-6" color="${get(helperColor)}">Helper text</Helper>` : ""}`;
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
      var text_1 = text("Input field");
      append($$anchor2, text_1);
    },
    $$slots: { default: true }
  });
  var node_1 = sibling(node, 2);
  H2(node_1, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_2 = text("Setup");
      append($$anchor2, text_2);
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
      var text_3 = text("Interactive Input Builder");
      append($$anchor2, text_3);
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
          for: "color-example",
          get color() {
            return get(inputColor);
          },
          class: "mb-2 block",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_4 = text("Your name");
            append($$anchor3, text_4);
          },
          $$slots: { default: true }
        });
        var node_6 = sibling(node_5, 2);
        var placeholder = derived(() => get(disabled) ? "Disabled " : "Placeholder");
        {
          const right = ($$anchor3) => {
            var fragment_3 = comment();
            var node_7 = first_child(fragment_3);
            if_block(node_7, () => get(closeBtnStatus), ($$anchor4) => {
              CloseButton($$anchor4, { onclick: () => text$1("") });
            });
            append($$anchor3, fragment_3);
          };
          Input(node_6, {
            id: "color-example",
            get value() {
              return text$1();
            },
            set value($$value) {
              text$1($$value);
            },
            get disabled() {
              return get(disabled);
            },
            get color() {
              return get(inputColor);
            },
            get size() {
              return get(inputSize);
            },
            get placeholder() {
              return get(placeholder);
            },
            right,
            $$slots: { right: true }
          });
        }
        var node_8 = sibling(node_6, 2);
        if_block(node_8, () => get(helperSlot), ($$anchor3) => {
          Helper($$anchor3, {
            class: "mt-2",
            get color() {
              return get(helperColor);
            },
            children: ($$anchor4, $$slotProps2) => {
              var fragment_6 = root_10();
              next();
              append($$anchor4, fragment_6);
            },
            $$slots: { default: true }
          });
        });
        reset(div);
        var div_1 = sibling(div, 2);
        var node_9 = child(div_1);
        Label(node_9, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_5 = text("Color");
            append($$anchor3, text_5);
          },
          $$slots: { default: true }
        });
        var node_10 = sibling(node_9, 2);
        each(node_10, 17, () => colors, index, ($$anchor3, colorOption) => {
          Radio($$anchor3, {
            labelClass: "w-20 my-1",
            name: "input_color",
            get group() {
              return get(inputColor);
            },
            set group($$value) {
              set(inputColor, proxy($$value));
            },
            get color() {
              return get(colorOption);
            },
            get value() {
              return get(colorOption);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_6 = text();
              template_effect(() => set_text(text_6, get(colorOption)));
              append($$anchor4, text_6);
            },
            $$slots: { default: true }
          });
        });
        reset(div_1);
        var div_2 = sibling(div_1, 2);
        var node_11 = child(div_2);
        Label(node_11, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_7 = text("Size");
            append($$anchor3, text_7);
          },
          $$slots: { default: true }
        });
        var node_12 = sibling(node_11, 2);
        each(node_12, 17, () => sizes, index, ($$anchor3, option) => {
          Radio($$anchor3, {
            labelClass: "w-20 my-1",
            name: "input_size",
            get group() {
              return get(inputSize);
            },
            set group($$value) {
              set(inputSize, proxy($$value));
            },
            get value() {
              return get(option);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_8 = text();
              template_effect(() => set_text(text_8, get(option)));
              append($$anchor4, text_8);
            },
            $$slots: { default: true }
          });
        });
        reset(div_2);
        var div_3 = sibling(div_2, 2);
        var node_13 = child(div_3);
        Button(node_13, {
          class: "mb-4 w-40",
          color: "secondary",
          onclick: changeHelperSlot,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_9 = text();
            template_effect(() => set_text(text_9, get(helperSlot) ? "Remove helper" : "Add helper"));
            append($$anchor3, text_9);
          },
          $$slots: { default: true }
        });
        var node_14 = sibling(node_13, 2);
        Label(node_14, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_10 = text("Helper Color");
            append($$anchor3, text_10);
          },
          $$slots: { default: true }
        });
        var node_15 = sibling(node_14, 2);
        each(node_15, 17, () => colors, index, ($$anchor3, colorOption) => {
          var labelClass = derived(() => `w-20 my-1 ${(get(helperSlot) ? "" : "opacity-30 cursor-not-allowed") ?? ""}`);
          var disabled_1 = derived(() => get(helperSlot) ? false : true);
          Radio($$anchor3, {
            get labelClass() {
              return get(labelClass);
            },
            get disabled() {
              return get(disabled_1);
            },
            name: "helper_color",
            get group() {
              return get(helperColor);
            },
            set group($$value) {
              set(helperColor, proxy($$value));
            },
            get color() {
              return get(colorOption);
            },
            get value() {
              return get(colorOption);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_11 = text();
              template_effect(() => set_text(text_11, get(colorOption)));
              append($$anchor4, text_11);
            },
            $$slots: { default: true }
          });
        });
        reset(div_3);
        var div_4 = sibling(div_3, 2);
        var node_16 = child(div_4);
        Button(node_16, {
          class: "w-44",
          onclick: changeDisabled,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_12 = text();
            template_effect(() => set_text(text_12, get(disabled) ? "Remove disabled" : "Add disabled"));
            append($$anchor3, text_12);
          },
          $$slots: { default: true }
        });
        var node_17 = sibling(node_16, 2);
        Button(node_17, {
          class: "w-44",
          color: "secondary",
          onclick: changeCloseBtnStatus,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_13 = text();
            template_effect(() => set_text(text_13, get(closeBtnStatus) ? "Remove close button" : "Add close button"));
            append($$anchor3, text_13);
          },
          $$slots: { default: true }
        });
        reset(div_4);
        append($$anchor2, fragment_2);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_18 = sibling(node_4, 2);
  H2(node_18, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_14 = text("Examples");
      append($$anchor2, text_14);
    },
    $$slots: { default: true }
  });
  var node_19 = sibling(node_18, 2);
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
    CodeWrapper(node_19, {
      codeblock,
      children: ($$anchor2, $$slotProps) => {
        var fragment_17 = root_25();
        var div_5 = first_child(fragment_17);
        var node_20 = child(div_5);
        Label(node_20, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_15 = text("Example");
            append($$anchor3, text_15);
          },
          $$slots: { default: true }
        });
        var node_21 = sibling(node_20, 2);
        each(node_21, 17, () => exampleArr, index, ($$anchor3, style) => {
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
              var text_16 = text();
              template_effect(() => set_text(text_16, get(style).name));
              append($$anchor4, text_16);
            },
            $$slots: { default: true }
          });
        });
        reset(div_5);
        var node_22 = sibling(div_5, 2);
        component(node_22, () => get(SelectedComponent), ($$anchor3, $$component) => {
          $$component($$anchor3, {});
        });
        append($$anchor2, fragment_17);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_23 = sibling(node_19, 2);
  H2(node_23, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_17 = text("Component data");
      append($$anchor2, text_17);
    },
    $$slots: { default: true }
  });
  var node_24 = sibling(node_23, 2);
  CompoAttributesViewer(node_24, { dirName });
  append($$anchor, fragment);
  pop();
}
export {
  _page as component
};
