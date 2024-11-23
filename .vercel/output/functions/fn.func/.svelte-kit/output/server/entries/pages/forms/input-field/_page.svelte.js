import { Q as push, a1 as getContext, a0 as spread_attributes, S as pop, W as attr, V as escape_html, a3 as copy_payload, a4 as assign_payload, a2 as bind_props, Y as ensure_array_like, X as stringify } from "../../../../chunks/index.js";
import { ab as input } from "../../../../chunks/theme.js";
import { B as Button } from "../../../../chunks/markdown.js";
import { C as CloseButton } from "../../../../chunks/CloseButton.js";
import { L as Label, R as Radio, C as CompoAttributesViewer } from "../../../../chunks/CompoAttributesViewer.js";
import { H as Helper } from "../../../../chunks/Helper.js";
import { c as clampSize, I as Input } from "../../../../chunks/index5.js";
import { H as HighlightCompo } from "../../../../chunks/HighlightCompo.js";
import { D as DynamicCodeBlockHighlight } from "../../../../chunks/DynamicCodeBlockHighlight.js";
import { C as CodeWrapper } from "../../../../chunks/CodeWrapper.js";
import { a as H1 } from "../../../../chunks/H1.js";
import { H as H2 } from "../../../../chunks/H2.js";
import { g as getExampleFileName, a as isGeneratedCodeOverflow, i as isSvelteOverflow } from "../../../../chunks/helpers.js";
import { C as Checkbox } from "../../../../chunks/Checkbox.js";
import { A } from "../../../../chunks/A.js";
import { E as EnvelopeSolid } from "../../../../chunks/EnvelopeSolid.js";
import { B as ButtonGroup } from "../../../../chunks/ButtonGroup.js";
import { twMerge } from "tailwind-merge";
import { S as SearchOutline } from "../../../../chunks/SearchOutline.js";
import { u as uiHelpers } from "../../../../chunks/uiHelpers.svelte.js";
import { D as Dropdown, a as DropdownUl } from "../../../../chunks/DropdownUl.js";
import { D as DropdownLi } from "../../../../chunks/DropdownLi.js";
import { s as sineIn } from "../../../../chunks/index4.js";
import { C as ChevronDownOutline } from "../../../../chunks/ChevronDownOutline.js";
function InputAddon($$payload, $$props) {
  push();
  let {
    children,
    class: className,
    size,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
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
  let _size = size || clampSize(group?.size) || "md";
  let divClass = twMerge(textSizes[_size], prefixPadding[_size], "text-gray-500 bg-gray-200", background ? darkBgClasses.tinted : darkBgClasses.base, background ? divider.tinted : divider.base, background ? borderClasses["tinted"] : borderClasses["base"], "inline-flex items-center border", group && "[&:not(:first-child)]:-ms-px", "first:rounded-s-lg last:rounded-e-lg", className);
  $$payload.out += `<div${spread_attributes({ ...restProps, class: divClass })}>`;
  children($$payload);
  $$payload.out += `<!----></div>`;
  pop();
}
function EyeSlashOutline($$payload, $$props) {
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
    ariaLabel = "eye slash outline",
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
  $$payload.out += `<!--]--><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${attr("stroke-width", strokeWidth)} d="M3.933 13.909A4.357 4.357 0 0 1 3 12c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 21 12c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M5 19 19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path></svg>`;
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
function Form($$payload) {
  $$payload.out += `<form><div class="mb-6 grid gap-6 md:grid-cols-2"><div>`;
  Label($$payload, {
    for: "first_name",
    class: "mb-2",
    children: ($$payload2) => {
      $$payload2.out += `<!---->First name`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Input($$payload, {
    type: "text",
    id: "first_name",
    placeholder: "John",
    required: true
  });
  $$payload.out += `<!----></div> <div>`;
  Label($$payload, {
    for: "last_name",
    class: "mb-2",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Last name`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Input($$payload, {
    type: "text",
    id: "last_name",
    placeholder: "Doe",
    required: true
  });
  $$payload.out += `<!----></div> <div>`;
  Label($$payload, {
    for: "company",
    class: "mb-2",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Company`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Input($$payload, {
    type: "text",
    id: "company",
    placeholder: "Flowbite",
    required: true
  });
  $$payload.out += `<!----></div> <div>`;
  Label($$payload, {
    for: "phone",
    class: "mb-2",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Phone number`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Input($$payload, {
    type: "tel",
    id: "phone",
    placeholder: "123-45-678",
    pattern: "[0-9]{3}-[0-9]{2}-[0-9]{3}",
    required: true
  });
  $$payload.out += `<!----></div> <div>`;
  Label($$payload, {
    for: "website",
    class: "mb-2",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Website URL`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Input($$payload, {
    type: "url",
    id: "website",
    placeholder: "flowbite.com",
    required: true
  });
  $$payload.out += `<!----></div> <div>`;
  Label($$payload, {
    for: "visitors",
    class: "mb-2",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Unique visitors (per month)`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Input($$payload, {
    type: "number",
    id: "visitors",
    placeholder: "",
    required: true
  });
  $$payload.out += `<!----></div></div> <div class="mb-6">`;
  Label($$payload, {
    for: "email",
    class: "mb-2",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Email address`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Input($$payload, {
    type: "email",
    id: "email",
    autocomplete: "email",
    placeholder: "john.doe@company.com",
    required: true
  });
  $$payload.out += `<!----></div> <div class="mb-6">`;
  Label($$payload, {
    for: "password",
    class: "mb-2",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Password`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Input($$payload, {
    type: "password",
    name: "password",
    autocomplete: "new-password",
    id: "password",
    placeholder: "•••••••••",
    required: true
  });
  $$payload.out += `<!----></div> <div class="mb-6">`;
  Label($$payload, {
    for: "confirm_password",
    class: "mb-2",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Confirm password`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Input($$payload, {
    type: "password",
    id: "confirm_password",
    name: "confirm_password",
    autocomplete: "new-password",
    placeholder: "•••••••••",
    required: true
  });
  $$payload.out += `<!----></div> `;
  Checkbox($$payload, {
    classLabel: "mb-6 space-x-1 rtl:space-x-reverse",
    required: true,
    children: ($$payload2) => {
      $$payload2.out += `<!---->I agree with the `;
      A($$payload2, {
        href: "/",
        class: "text-primary-700 hover:underline dark:text-primary-600",
        children: ($$payload3) => {
          $$payload3.out += `<!---->terms and conditions`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->.`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Button($$payload, {
    type: "submit",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Submit`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></form>`;
}
function Icon($$payload) {
  Label($$payload, {
    class: "mb-4 space-y-2",
    children: ($$payload2) => {
      $$payload2.out += `<span>Small input - left icon</span> `;
      {
        let left = function($$payload3) {
          EnvelopeSolid($$payload3, { class: "h-4 w-4" });
        };
        Input($$payload2, {
          type: "email",
          placeholder: "name@flowbite.com",
          size: "sm",
          class: "pl-8",
          left,
          $$slots: { left: true }
        });
      }
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Label($$payload, {
    class: "mb-4 space-y-2",
    children: ($$payload2) => {
      $$payload2.out += `<span>Default input - right icon</span> `;
      {
        let right = function($$payload3) {
          EnvelopeSolid($$payload3, { class: "h-5 w-5" });
        };
        Input($$payload2, {
          type: "email",
          placeholder: "name@flowbite.com",
          size: "md",
          right,
          $$slots: { right: true }
        });
      }
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Label($$payload, {
    class: "space-y-2",
    children: ($$payload2) => {
      $$payload2.out += `<span>Large input - both icons</span> `;
      {
        let left = function($$payload3) {
          EnvelopeSolid($$payload3, { class: "h-6 w-6" });
        }, right = function($$payload3) {
          CloseButton($$payload3, {});
        };
        Input($$payload2, {
          type: "email",
          placeholder: "name@flowbite.com",
          size: "lg",
          class: "pl-10",
          left,
          right,
          $$slots: { left: true, right: true }
        });
      }
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!---->`;
}
function Group($$payload) {
  $$payload.out += `<div>`;
  Label($$payload, {
    class: "mb-2",
    for: "input-addon-sm",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Small additional text`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  ButtonGroup($$payload, {
    class: "w-full",
    size: "sm",
    children: ($$payload2) => {
      InputAddon($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!---->@`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Input($$payload2, {
        id: "input-addon-sm",
        type: "email",
        placeholder: "Your name"
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div> <div>`;
  Label($$payload, {
    class: "mb-2",
    for: "input-addon-md",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Default additional text`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  ButtonGroup($$payload, {
    class: "w-full",
    size: "md",
    children: ($$payload2) => {
      Input($$payload2, {
        id: "input-addon-md",
        type: "email",
        placeholder: "Your name"
      });
      $$payload2.out += `<!----> `;
      InputAddon($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!---->.com`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div> <div>`;
  Label($$payload, {
    class: "mb-2",
    for: "input-addon-lg",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Large additional text`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  ButtonGroup($$payload, {
    class: "w-full",
    size: "lg",
    children: ($$payload2) => {
      InputAddon($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!---->@`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Input($$payload2, {
        id: "input-addon-lg",
        type: "email",
        placeholder: "Your name"
      });
      $$payload2.out += `<!----> `;
      InputAddon($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!---->.com`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div> <div class="pt-8">`;
  Label($$payload, {
    for: "input-addon",
    class: "mb-2",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Grouped with button`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  ButtonGroup($$payload, {
    class: "w-full",
    children: ($$payload2) => {
      InputAddon($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!---->@`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Input($$payload2, {
        id: "input-addon",
        type: "email",
        placeholder: "Your name"
      });
      $$payload2.out += `<!----> `;
      Button($$payload2, {
        color: "primary",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Search`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div> <div>`;
  Label($$payload, {
    for: "input-addon",
    class: "mb-2",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Crazy example`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  ButtonGroup($$payload, {
    class: "w-full",
    children: ($$payload2) => {
      InputAddon($$payload2, {
        children: ($$payload3) => {
          Checkbox($$payload3, {});
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Button($$payload2, {
        color: "primary",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Search`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      InputAddon($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!---->http://`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Input($$payload2, {
        id: "input-addon",
        type: "email",
        placeholder: "Your name"
      });
      $$payload2.out += `<!----> `;
      InputAddon($$payload2, {
        children: ($$payload3) => {
          Checkbox($$payload3, {});
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Button($$payload2, {
        color: "blue",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Send`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div>`;
}
function ClickHandler($$payload) {
  $$payload.out += `<form class="mb-4">`;
  Label($$payload, {
    for: "show-password",
    class: "mb-2",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Your password`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  {
    let left = function($$payload2) {
      $$payload2.out += `<button class="pointer-events-auto">`;
      {
        $$payload2.out += "<!--[!-->";
        EyeSlashOutline($$payload2, { class: "h-6 w-6" });
      }
      $$payload2.out += `<!--]--></button>`;
    };
    Input($$payload, {
      id: "show-password",
      name: "show-password",
      autocomplete: "new-password",
      type: "password",
      placeholder: "Your password here",
      size: "lg",
      class: "pl-10",
      left,
      $$slots: { left: true }
    });
  }
  $$payload.out += `<!----></form> <form>`;
  Label($$payload, {
    for: "show-password1",
    class: "mb-2",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Your password`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  ButtonGroup($$payload, {
    class: "w-full",
    children: ($$payload2) => {
      InputAddon($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<button>`;
          {
            $$payload3.out += "<!--[!-->";
            EyeSlashOutline($$payload3, { class: "h-6 w-6" });
          }
          $$payload3.out += `<!--]--></button>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Input($$payload2, {
        id: "show-password1",
        type: "password",
        name: "show-password1",
        autocomplete: "new-password",
        placeholder: "Your password here"
      });
      $$payload2.out += `<!----> `;
      Input($$payload2, {
        id: "usename",
        name: "usename",
        type: "text",
        class: "hidden"
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></form>`;
}
function Number($$payload) {
  let value = 5;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    Label($$payload2, {
      class: "mb-4 space-y-2",
      children: ($$payload3) => {
        $$payload3.out += `<span>Your lucky number</span> `;
        Input($$payload3, {
          type: "number",
          get value() {
            return value;
          },
          set value($$value) {
            value = $$value;
            $$settled = false;
          }
        });
        $$payload3.out += `<!---->`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> <p>Value: ${escape_html(value)}</p> <p>Type of value: ${escape_html(typeof value)}</p>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
}
function Search($$payload) {
  $$payload.out += `<form>`;
  Label($$payload, {
    for: "search",
    class: "mb-2 block",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Your Email`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  {
    let left = function($$payload2) {
      SearchOutline($$payload2, {
        class: "h-6 w-6 text-gray-500 dark:text-gray-400"
      });
    }, right = function($$payload2) {
      Button($$payload2, {
        size: "sm",
        type: "submit",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Search`;
        },
        $$slots: { default: true }
      });
    };
    Input($$payload, {
      id: "search",
      placeholder: "Search",
      size: "lg",
      class: "pl-10",
      left,
      right,
      $$slots: { left: true, right: true }
    });
  }
  $$payload.out += `<!----></form>`;
}
function Dropdown_1($$payload, $$props) {
  push();
  let dropdown = uiHelpers();
  let dropdownStatus = false;
  let closeDropdown = dropdown.close;
  let transitionParams = { y: 0, duration: 200, easing: sineIn };
  $$payload.out += `<div class="h-48">`;
  ButtonGroup($$payload, {
    class: "w-full",
    children: ($$payload2) => {
      Button($$payload2, {
        onclick: dropdown.toggle,
        class: "flex-shrink-0 border border-gray-300 bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800",
        children: ($$payload3) => {
          $$payload3.out += `<!---->All categories`;
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
        class: "absolute -left-[160px] top-[40px]",
        children: ($$payload3) => {
          DropdownUl($$payload3, {
            children: ($$payload4) => {
              DropdownLi($$payload4, {
                href: "/",
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Shopping`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              DropdownLi($$payload4, {
                href: "/",
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Images`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              DropdownLi($$payload4, {
                href: "/",
                children: ($$payload5) => {
                  $$payload5.out += `<!---->News`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              DropdownLi($$payload4, {
                href: "/",
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Finance`;
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
      Input($$payload2, { placeholder: "Search" });
      $$payload2.out += `<!----> `;
      Button($$payload2, {
        color: "primary",
        class: "!p-2.5",
        type: "submit",
        children: ($$payload3) => {
          SearchOutline($$payload3, { class: "h-5 w-5" });
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div>`;
  pop();
}
function AdvancedUsage($$payload) {
  let value = void 0;
  {
    let children = function($$payload2, prop) {
      $$payload2.out += `<input${spread_attributes({ type: "number", value, ...prop })}>`;
    };
    Input($$payload, {
      placeholder: "Your lucky number",
      children,
      $$slots: { default: true }
    });
  }
  $$payload.out += `<!----> `;
  Helper($$payload, {
    class: "mt-2",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Your lucky number: ${escape_html(value)}`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!---->`;
}
function Clearable($$payload) {
  Input($$payload, {
    clearable: true,
    placeholder: "Clearable input"
  });
}
function _page($$payload, $$props) {
  push();
  let { text = "" } = $$props;
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
  let selectedExample = exampleArr[0].name;
  let svelteCode = getExampleFileName(selectedExample, exampleArr);
  function findObject(arr, name) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = findObject(exampleArr, selectedExample);
  const sizes = ["sm", "md", "lg"];
  let inputSize = "md";
  const colors = Object.keys(input.variants.color);
  let inputColor = "default";
  let disabled = false;
  const changeDisabled = () => {
    disabled = !disabled;
  };
  let helperColor = "default";
  let helperSlot = false;
  const changeHelperSlot = () => {
    helperSlot = !helperSlot;
    helperColor = "default";
  };
  let closeBtnStatus = false;
  const changeCloseBtnStatus = () => {
    closeBtnStatus = !closeBtnStatus;
  };
  let generatedCode = (() => {
    let props = [];
    if (inputColor !== "default") props.push(` color="${inputColor}"`);
    if (disabled) props.push(" disabled");
    if (inputSize !== "md") props.push(` size="${inputSize}"`);
    const propsString = props.length > 0 ? props.map((prop) => `
  ${prop}`).join("") + "\n" : "";
    return `<Input${propsString}${closeBtnStatus ? `>
{#snippet right()}
  <CloseButton onclick={() => (text = '')} />
{/snippet}` : "/>"}
${closeBtnStatus ? `</Input>` : ""}${helperSlot ? `<Helper class="ps-6" color="${helperColor}">Helper text</Helper>` : ""}`;
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
        $$payload3.out += `<!---->Input field`;
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
        $$payload3.out += `<!---->Interactive Input Builder`;
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
          const each_array = ensure_array_like(colors);
          const each_array_1 = ensure_array_like(sizes);
          const each_array_2 = ensure_array_like(colors);
          $$payload3.out += `<div class="mb-4 md:h-24">`;
          Label($$payload3, {
            for: "color-example",
            color: inputColor,
            class: "mb-2 block",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Your name`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          {
            let right = function($$payload4) {
              if (closeBtnStatus) {
                $$payload4.out += "<!--[-->";
                CloseButton($$payload4, { onclick: () => text = "" });
              } else {
                $$payload4.out += "<!--[!-->";
              }
              $$payload4.out += `<!--]-->`;
            };
            Input($$payload3, {
              id: "color-example",
              get value() {
                return text;
              },
              set value($$value) {
                text = $$value;
                $$settled = false;
              },
              disabled,
              color: inputColor,
              size: inputSize,
              placeholder: disabled ? "Disabled " : "Placeholder",
              right,
              $$slots: { right: true }
            });
          }
          $$payload3.out += `<!----> `;
          if (helperSlot) {
            $$payload3.out += "<!--[-->";
            Helper($$payload3, {
              class: "mt-2",
              color: helperColor,
              children: ($$payload4) => {
                $$payload4.out += `<span class="font-medium">Well done!</span> Some helper message.`;
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
              $$payload4.out += `<!---->Color`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let colorOption = each_array[$$index];
            Radio($$payload3, {
              labelClass: "w-20 my-1",
              name: "input_color",
              get group() {
                return inputColor;
              },
              set group($$value) {
                inputColor = $$value;
                $$settled = false;
              },
              color: colorOption,
              value: colorOption,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(colorOption)}`;
              },
              $$slots: { default: true }
            });
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
          for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
            let option = each_array_1[$$index_1];
            Radio($$payload3, {
              labelClass: "w-20 my-1",
              name: "input_size",
              get group() {
                return inputSize;
              },
              set group($$value) {
                inputSize = $$value;
                $$settled = false;
              },
              value: option,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(option)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> <div class="mb-4 flex flex-wrap space-x-2">`;
          Button($$payload3, {
            class: "mb-4 w-40",
            color: "secondary",
            onclick: changeHelperSlot,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(helperSlot ? "Remove helper" : "Add helper")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Helper Color`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
            let colorOption = each_array_2[$$index_2];
            Radio($$payload3, {
              labelClass: `w-20 my-1 ${stringify(helperSlot ? "" : "opacity-30 cursor-not-allowed")}`,
              disabled: helperSlot ? false : true,
              name: "helper_color",
              get group() {
                return helperColor;
              },
              set group($$value) {
                helperColor = $$value;
                $$settled = false;
              },
              color: colorOption,
              value: colorOption,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(colorOption)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> <div class="flex flex-wrap justify-center gap-2 md:justify-start">`;
          Button($$payload3, {
            class: "w-44",
            onclick: changeDisabled,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(disabled ? "Remove disabled" : "Add disabled")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-44",
            color: "secondary",
            onclick: changeCloseBtnStatus,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(closeBtnStatus ? "Remove close button" : "Add close button")}`;
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
          const each_array_3 = ensure_array_like(exampleArr);
          $$payload3.out += `<div class="mb-8 flex flex-wrap">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Example`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
            let style = each_array_3[$$index_3];
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
  bind_props($$props, { text });
  pop();
}
export {
  _page as default
};
