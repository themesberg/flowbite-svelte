import { a as append, t as template, n as ns_template, b as text } from "../chunks/disclose-version.0TX42Q8e.js";
import { p as push, c as child, r as reset, t as template_effect, a as pop, g as getContext, s as sibling, n as next, b as get, d as derived, f as first_child, a7 as set, a6 as state, u as user_effect } from "../chunks/runtime.BkfDdwap.js";
import { a as set_text } from "../chunks/store.B2xZ3Ft6.js";
import { e as each, i as index } from "../chunks/each.CtHIoDcm.js";
import { r as rest_props, p as prop, i as if_block, b as proxy, c as component } from "../chunks/props.B7eOu8hW.js";
import { a$ as kbd, a as set_attributes, t as twMerge, s as set_attribute, ah as TableBodyCell, V as uiHelpers } from "../chunks/theme.BtjZjf2R.js";
import { C as CompoAttributesViewer, L as Label, R as Radio } from "../chunks/CompoAttributesViewer.HsPJjrMu.js";
import { D as DynamicCodeBlockHighlight } from "../chunks/DynamicCodeBlockHighlight.BS23lgW_.js";
import { C as CodeWrapper } from "../chunks/CodeWrapper.CdoIAYb8.js";
import { H as H1 } from "../chunks/H1.DunGd_Oq.js";
import { H as H2 } from "../chunks/H2.qsp5CBkK.js";
import { g as getExampleFileName, d as isSvelteOverflow } from "../chunks/helpers.B9KbZW0W.js";
import "../chunks/legacy.DvF4DOPZ.js";
import { s as snippet } from "../chunks/snippet.BDfn85k4.js";
import { T as Table, a as TableHead, b as TableHeadCell, c as TableBody, d as TableBodyRow } from "../chunks/TableHead.CXrqw3Md.js";
import { I as Input } from "../chunks/index.CCICtSX3.js";
var root$9 = template(`<kbd><!></kbd>`);
function Kbd($$anchor, $$props) {
  push($$props, true);
  let restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "class"
  ]);
  const kbdCls = kbd();
  var kbd_1 = root$9();
  let attributes;
  var node = child(kbd_1);
  snippet(node, () => $$props.children);
  reset(kbd_1);
  template_effect(() => attributes = set_attributes(kbd_1, attributes, {
    ...restProps,
    class: twMerge(kbdCls, $$props.class)
  }));
  append($$anchor, kbd_1);
  pop();
}
var root_1$5 = ns_template(`<title> </title>`);
var root_2$5 = ns_template(`<desc> </desc>`);
var root$8 = ns_template(`<svg><!><!><path fill-rule="evenodd" d="M18.425 10.271C19.499 8.967 18.57 7 16.88 7H7.12c-1.69 0-2.618 1.967-1.544 3.271l4.881 5.927a2 2 0 0 0 3.088 0l4.88-5.927Z" clip-rule="evenodd"></path></svg>`);
function CaretDownSolid($$anchor, $$props) {
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
  let size = prop($$props, "size", 19, () => ctx.size || "md"), color = prop($$props, "color", 19, () => ctx.color || "currentColor"), ariaLabel = prop($$props, "ariaLabel", 3, "caret down solid"), restProps = rest_props($$props, [
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
  var svg = root$8();
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
    var desc_1 = root_2$5();
    var text_1 = child(desc_1, true);
    reset(desc_1);
    template_effect(() => {
      set_attribute(desc_1, "id", $$props.desc.id);
      set_text(text_1, $$props.desc.desc);
    });
    append($$anchor2, desc_1);
  });
  next();
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
var root_1$4 = ns_template(`<title> </title>`);
var root_2$4 = ns_template(`<desc> </desc>`);
var root$7 = ns_template(`<svg><!><!><path fill-rule="evenodd" d="M13.729 5.575c1.304-1.074 3.27-.146 3.27 1.544v9.762c0 1.69-1.966 2.618-3.27 1.544l-5.927-4.881a2 2 0 0 1 0-3.088l5.927-4.88Z" clip-rule="evenodd"></path></svg>`);
function CaretLeftSolid($$anchor, $$props) {
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
  let size = prop($$props, "size", 19, () => ctx.size || "md"), color = prop($$props, "color", 19, () => ctx.color || "currentColor"), ariaLabel = prop($$props, "ariaLabel", 3, "caret left solid"), restProps = rest_props($$props, [
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
  var svg = root$7();
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
    var desc_1 = root_2$4();
    var text_1 = child(desc_1, true);
    reset(desc_1);
    template_effect(() => {
      set_attribute(desc_1, "id", $$props.desc.id);
      set_text(text_1, $$props.desc.desc);
    });
    append($$anchor2, desc_1);
  });
  next();
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
var root_1$3 = ns_template(`<title> </title>`);
var root_2$3 = ns_template(`<desc> </desc>`);
var root$6 = ns_template(`<svg><!><!><path fill-rule="evenodd" d="M10.271 5.575C8.967 4.501 7 5.43 7 7.12v9.762c0 1.69 1.967 2.618 3.271 1.544l5.927-4.881a2 2 0 0 0 0-3.088l-5.927-4.88Z" clip-rule="evenodd"></path></svg>`);
function CaretRightSolid($$anchor, $$props) {
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
  let size = prop($$props, "size", 19, () => ctx.size || "md"), color = prop($$props, "color", 19, () => ctx.color || "currentColor"), ariaLabel = prop($$props, "ariaLabel", 3, "caret right solid"), restProps = rest_props($$props, [
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
    var desc_1 = root_2$3();
    var text_1 = child(desc_1, true);
    reset(desc_1);
    template_effect(() => {
      set_attribute(desc_1, "id", $$props.desc.id);
      set_text(text_1, $$props.desc.desc);
    });
    append($$anchor2, desc_1);
  });
  next();
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
var root_1$2 = ns_template(`<title> </title>`);
var root_2$2 = ns_template(`<desc> </desc>`);
var root$5 = ns_template(`<svg><!><!><path fill-rule="evenodd" d="M5.575 13.729C4.501 15.033 5.43 17 7.12 17h9.762c1.69 0 2.618-1.967 1.544-3.271l-4.881-5.927a2 2 0 0 0-3.088 0l-4.88 5.927Z" clip-rule="evenodd"></path></svg>`);
function CaretUpSolid($$anchor, $$props) {
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
  let size = prop($$props, "size", 19, () => ctx.size || "md"), color = prop($$props, "color", 19, () => ctx.color || "currentColor"), ariaLabel = prop($$props, "ariaLabel", 3, "caret up solid"), restProps = rest_props($$props, [
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
  var svg = root$5();
  let attributes;
  var node = child(svg);
  if_block(node, () => {
    var _a2;
    return ((_a2 = $$props.title) == null ? void 0 : _a2.id) && $$props.title.title;
  }, ($$anchor2) => {
    var title_1 = root_1$2();
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
  next();
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
const __vite_glob_0_0 = '<script lang="ts">\n  import { Kbd } from "$lib";\n  import { CaretDownSolid, CaretLeftSolid, CaretRightSolid, CaretUpSolid } from "flowbite-svelte-icons";\n<\/script>\n\n<div class="flex flex-wrap justify-center">\n  <Kbd class="me-1 inline-flex items-center px-2 py-1.5">\n    <CaretUpSolid size="xs" />\n    <span class="sr-only">Arrow key up</span>\n  </Kbd>\n  <Kbd class="me-1 inline-flex items-center px-2 py-1.5">\n    <CaretDownSolid size="xs" />\n    <span class="sr-only">Arrow key down</span>\n  </Kbd>\n  <Kbd class="me-1 inline-flex items-center px-2 py-1.5">\n    <CaretLeftSolid size="xs" />\n    <span class="sr-only">Arrow key left</span>\n  </Kbd>\n  <Kbd class="me-1 inline-flex items-center px-2 py-1.5">\n    <CaretRightSolid size="xs" />\n    <span class="sr-only">Arrow key right</span>\n  </Kbd>\n</div>\n';
const __vite_glob_0_1 = '<script lang="ts">\n  import { Kbd } from "$lib";\n<\/script>\n\n<div class="flex flex-wrap justify-center gap-1">\n  <Kbd class="px-2 py-1.5">Shift</Kbd>\n  <Kbd class="px-2 py-1.5">Ctrl</Kbd>\n  <Kbd class="px-2 py-1.5">Tab</Kbd>\n  <Kbd class="px-2 py-1.5">Caps Lock</Kbd>\n  <Kbd class="px-2 py-1.5">Esc</Kbd>\n  <Kbd class="px-4 py-1.5">Spacebar</Kbd>\n  <Kbd class="px-2 py-1.5">Enter</Kbd>\n</div>\n';
const __vite_glob_0_2 = '<script lang="ts">\n  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Kbd } from "$lib";\n  import { CaretDownSolid, CaretUpSolid, CaretLeftSolid, CaretRightSolid } from "flowbite-svelte-icons";\n<\/script>\n\n<Table>\n  <TableHead>\n    <TableHeadCell>Key</TableHeadCell>\n    <TableHeadCell>Description</TableHeadCell>\n  </TableHead>\n  <TableBody class="divide-y">\n    <TableBodyRow>\n      <TableBodyCell>\n        <Kbd class="px-2 py-1.5">Shift</Kbd> or <Kbd class="px-2 py-1.5">Tab</Kbd>\n      </TableBodyCell>\n      <TableBodyCell>Navigate to interactive elements</TableBodyCell>\n    </TableBodyRow>\n    <TableBodyRow>\n      <TableBodyCell>\n        <Kbd class="px-2 py-1.5">Enter</Kbd> or <Kbd class="px-4 py-1.5">Space bar</Kbd>\n      </TableBodyCell>\n      <TableBodyCell>Ensure elements with ARIA role="button" can be activated with both key commands.</TableBodyCell>\n    </TableBodyRow>\n    <TableBodyRow>\n      <TableBodyCell>\n        <Kbd class="me-1 inline-flex items-center px-2 py-1.5">\n          <CaretUpSolid size="xs" />\n          <span class="sr-only">Arrow key up</span>\n        </Kbd>\n        <Kbd class="me-1 inline-flex items-center px-2 py-1.5">\n          <CaretDownSolid size="xs" />\n          <span class="sr-only">Arrow key down</span>\n        </Kbd> or\n        <Kbd class="me-1 inline-flex items-center px-2 py-1.5">\n          <CaretLeftSolid size="xs" />\n          <span class="sr-only">Arrow key left</span>\n        </Kbd>\n        <Kbd class="me-1 inline-flex items-center px-2 py-1.5">\n          <CaretRightSolid size="xs" />\n          <span class="sr-only">Arrow key right</span>\n        </Kbd>\n      </TableBodyCell>\n      <TableBodyCell>Choose and activate previous/next tab.</TableBodyCell>\n    </TableBodyRow>\n  </TableBody>\n</Table>\n';
const __vite_glob_0_3 = '<script lang="ts">\n  import { Kbd } from "$lib";\n<\/script>\n\n<div class="flex flex-wrap justify-center">\n  <p class="text-gray-500 dark:text-gray-400">\n    Please press <Kbd class="px-2 py-1.5">Ctrl</Kbd> + <Kbd class="px-2 py-1.5">Shift</Kbd> + <Kbd class="px-2 py-1.5">R</Kbd> to re-render an MDN page.\n  </p>\n</div>\n';
const __vite_glob_0_4 = '<script lang="ts">\n  import { Kbd, Input } from "$lib";\n  let letter = $state("");\n<\/script>\n\n<div class="space-y-4">\n  <Kbd class="px-2 py-1.5">{letter === "" ? "Type a letter" : letter}</Kbd>\n  <Input bind:value={letter} placeholder="Type a letter" />\n</div>\n';
var root_1$1 = template(`<!> <span class="sr-only">Arrow key up</span>`, 1);
var root_2$1 = template(`<!> <span class="sr-only">Arrow key down</span>`, 1);
var root_3$1 = template(`<!> <span class="sr-only">Arrow key left</span>`, 1);
var root_4 = template(`<!> <span class="sr-only">Arrow key right</span>`, 1);
var root$4 = template(`<div class="flex flex-wrap justify-center"><!> <!> <!> <!></div>`);
function ArrowKeys($$anchor) {
  var div = root$4();
  var node = child(div);
  Kbd(node, {
    class: "me-1 inline-flex items-center px-2 py-1.5",
    children: ($$anchor2, $$slotProps) => {
      var fragment = root_1$1();
      var node_1 = first_child(fragment);
      CaretUpSolid(node_1, { size: "xs" });
      next(2);
      append($$anchor2, fragment);
    },
    $$slots: { default: true }
  });
  var node_2 = sibling(node, 2);
  Kbd(node_2, {
    class: "me-1 inline-flex items-center px-2 py-1.5",
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_2$1();
      var node_3 = first_child(fragment_1);
      CaretDownSolid(node_3, { size: "xs" });
      next(2);
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
  var node_4 = sibling(node_2, 2);
  Kbd(node_4, {
    class: "me-1 inline-flex items-center px-2 py-1.5",
    children: ($$anchor2, $$slotProps) => {
      var fragment_2 = root_3$1();
      var node_5 = first_child(fragment_2);
      CaretLeftSolid(node_5, { size: "xs" });
      next(2);
      append($$anchor2, fragment_2);
    },
    $$slots: { default: true }
  });
  var node_6 = sibling(node_4, 2);
  Kbd(node_6, {
    class: "me-1 inline-flex items-center px-2 py-1.5",
    children: ($$anchor2, $$slotProps) => {
      var fragment_3 = root_4();
      var node_7 = first_child(fragment_3);
      CaretRightSolid(node_7, { size: "xs" });
      next(2);
      append($$anchor2, fragment_3);
    },
    $$slots: { default: true }
  });
  reset(div);
  append($$anchor, div);
}
var root$3 = template(`<div class="flex flex-wrap justify-center gap-1"><!> <!> <!> <!> <!> <!> <!></div>`);
function Default($$anchor) {
  var div = root$3();
  var node = child(div);
  Kbd(node, {
    class: "px-2 py-1.5",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text("Shift");
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
  var node_1 = sibling(node, 2);
  Kbd(node_1, {
    class: "px-2 py-1.5",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_1 = text("Ctrl");
      append($$anchor2, text_1);
    },
    $$slots: { default: true }
  });
  var node_2 = sibling(node_1, 2);
  Kbd(node_2, {
    class: "px-2 py-1.5",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_2 = text("Tab");
      append($$anchor2, text_2);
    },
    $$slots: { default: true }
  });
  var node_3 = sibling(node_2, 2);
  Kbd(node_3, {
    class: "px-2 py-1.5",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_3 = text("Caps Lock");
      append($$anchor2, text_3);
    },
    $$slots: { default: true }
  });
  var node_4 = sibling(node_3, 2);
  Kbd(node_4, {
    class: "px-2 py-1.5",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_4 = text("Esc");
      append($$anchor2, text_4);
    },
    $$slots: { default: true }
  });
  var node_5 = sibling(node_4, 2);
  Kbd(node_5, {
    class: "px-4 py-1.5",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_5 = text("Spacebar");
      append($$anchor2, text_5);
    },
    $$slots: { default: true }
  });
  var node_6 = sibling(node_5, 2);
  Kbd(node_6, {
    class: "px-2 py-1.5",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_6 = text("Enter");
      append($$anchor2, text_6);
    },
    $$slots: { default: true }
  });
  reset(div);
  append($$anchor, div);
}
var root_2 = template(`<!> <!>`, 1);
var root_7 = template(`<!> or <!>`, 1);
var root_6 = template(`<!> <!>`, 1);
var root_12 = template(`<!> or <!>`, 1);
var root_11 = template(`<!> <!>`, 1);
var root_18 = template(`<!> <span class="sr-only">Arrow key up</span>`, 1);
var root_19 = template(`<!> <span class="sr-only">Arrow key down</span>`, 1);
var root_20 = template(`<!> <span class="sr-only">Arrow key left</span>`, 1);
var root_21 = template(`<!> <span class="sr-only">Arrow key right</span>`, 1);
var root_17 = template(`<!> <!> or <!> <!>`, 1);
var root_16 = template(`<!> <!>`, 1);
var root_5 = template(`<!> <!> <!>`, 1);
var root_1 = template(`<!> <!>`, 1);
function InsideTable($$anchor) {
  Table($$anchor, {
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1();
      var node = first_child(fragment_1);
      TableHead(node, {
        children: ($$anchor3, $$slotProps2) => {
          var fragment_2 = root_2();
          var node_1 = first_child(fragment_2);
          TableHeadCell(node_1, {
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text$1 = text("Key");
              append($$anchor4, text$1);
            },
            $$slots: { default: true }
          });
          var node_2 = sibling(node_1, 2);
          TableHeadCell(node_2, {
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_1 = text("Description");
              append($$anchor4, text_1);
            },
            $$slots: { default: true }
          });
          append($$anchor3, fragment_2);
        },
        $$slots: { default: true }
      });
      var node_3 = sibling(node, 2);
      TableBody(node_3, {
        class: "divide-y",
        children: ($$anchor3, $$slotProps2) => {
          var fragment_3 = root_5();
          var node_4 = first_child(fragment_3);
          TableBodyRow(node_4, {
            children: ($$anchor4, $$slotProps3) => {
              var fragment_4 = root_6();
              var node_5 = first_child(fragment_4);
              TableBodyCell(node_5, {
                children: ($$anchor5, $$slotProps4) => {
                  var fragment_5 = root_7();
                  var node_6 = first_child(fragment_5);
                  Kbd(node_6, {
                    class: "px-2 py-1.5",
                    children: ($$anchor6, $$slotProps5) => {
                      next();
                      var text_2 = text("Shift");
                      append($$anchor6, text_2);
                    },
                    $$slots: { default: true }
                  });
                  var node_7 = sibling(node_6, 2);
                  Kbd(node_7, {
                    class: "px-2 py-1.5",
                    children: ($$anchor6, $$slotProps5) => {
                      next();
                      var text_3 = text("Tab");
                      append($$anchor6, text_3);
                    },
                    $$slots: { default: true }
                  });
                  append($$anchor5, fragment_5);
                },
                $$slots: { default: true }
              });
              var node_8 = sibling(node_5, 2);
              TableBodyCell(node_8, {
                children: ($$anchor5, $$slotProps4) => {
                  next();
                  var text_4 = text("Navigate to interactive elements");
                  append($$anchor5, text_4);
                },
                $$slots: { default: true }
              });
              append($$anchor4, fragment_4);
            },
            $$slots: { default: true }
          });
          var node_9 = sibling(node_4, 2);
          TableBodyRow(node_9, {
            children: ($$anchor4, $$slotProps3) => {
              var fragment_6 = root_11();
              var node_10 = first_child(fragment_6);
              TableBodyCell(node_10, {
                children: ($$anchor5, $$slotProps4) => {
                  var fragment_7 = root_12();
                  var node_11 = first_child(fragment_7);
                  Kbd(node_11, {
                    class: "px-2 py-1.5",
                    children: ($$anchor6, $$slotProps5) => {
                      next();
                      var text_5 = text("Enter");
                      append($$anchor6, text_5);
                    },
                    $$slots: { default: true }
                  });
                  var node_12 = sibling(node_11, 2);
                  Kbd(node_12, {
                    class: "px-4 py-1.5",
                    children: ($$anchor6, $$slotProps5) => {
                      next();
                      var text_6 = text("Space bar");
                      append($$anchor6, text_6);
                    },
                    $$slots: { default: true }
                  });
                  append($$anchor5, fragment_7);
                },
                $$slots: { default: true }
              });
              var node_13 = sibling(node_10, 2);
              TableBodyCell(node_13, {
                children: ($$anchor5, $$slotProps4) => {
                  next();
                  var text_7 = text('Ensure elements with ARIA role="button" can be activated with both key commands.');
                  append($$anchor5, text_7);
                },
                $$slots: { default: true }
              });
              append($$anchor4, fragment_6);
            },
            $$slots: { default: true }
          });
          var node_14 = sibling(node_9, 2);
          TableBodyRow(node_14, {
            children: ($$anchor4, $$slotProps3) => {
              var fragment_8 = root_16();
              var node_15 = first_child(fragment_8);
              TableBodyCell(node_15, {
                children: ($$anchor5, $$slotProps4) => {
                  var fragment_9 = root_17();
                  var node_16 = first_child(fragment_9);
                  Kbd(node_16, {
                    class: "me-1 inline-flex items-center px-2 py-1.5",
                    children: ($$anchor6, $$slotProps5) => {
                      var fragment_10 = root_18();
                      var node_17 = first_child(fragment_10);
                      CaretUpSolid(node_17, { size: "xs" });
                      next(2);
                      append($$anchor6, fragment_10);
                    },
                    $$slots: { default: true }
                  });
                  var node_18 = sibling(node_16, 2);
                  Kbd(node_18, {
                    class: "me-1 inline-flex items-center px-2 py-1.5",
                    children: ($$anchor6, $$slotProps5) => {
                      var fragment_11 = root_19();
                      var node_19 = first_child(fragment_11);
                      CaretDownSolid(node_19, { size: "xs" });
                      next(2);
                      append($$anchor6, fragment_11);
                    },
                    $$slots: { default: true }
                  });
                  var node_20 = sibling(node_18, 2);
                  Kbd(node_20, {
                    class: "me-1 inline-flex items-center px-2 py-1.5",
                    children: ($$anchor6, $$slotProps5) => {
                      var fragment_12 = root_20();
                      var node_21 = first_child(fragment_12);
                      CaretLeftSolid(node_21, { size: "xs" });
                      next(2);
                      append($$anchor6, fragment_12);
                    },
                    $$slots: { default: true }
                  });
                  var node_22 = sibling(node_20, 2);
                  Kbd(node_22, {
                    class: "me-1 inline-flex items-center px-2 py-1.5",
                    children: ($$anchor6, $$slotProps5) => {
                      var fragment_13 = root_21();
                      var node_23 = first_child(fragment_13);
                      CaretRightSolid(node_23, { size: "xs" });
                      next(2);
                      append($$anchor6, fragment_13);
                    },
                    $$slots: { default: true }
                  });
                  append($$anchor5, fragment_9);
                },
                $$slots: { default: true }
              });
              var node_24 = sibling(node_15, 2);
              TableBodyCell(node_24, {
                children: ($$anchor5, $$slotProps4) => {
                  next();
                  var text_8 = text("Choose and activate previous/next tab.");
                  append($$anchor5, text_8);
                },
                $$slots: { default: true }
              });
              append($$anchor4, fragment_8);
            },
            $$slots: { default: true }
          });
          append($$anchor3, fragment_3);
        },
        $$slots: { default: true }
      });
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
}
var root$2 = template(`<div class="flex flex-wrap justify-center"><p class="text-gray-500 dark:text-gray-400">Please press <!> + <!> + <!> to re-render an MDN page.</p></div>`);
function InsideText($$anchor) {
  var div = root$2();
  var p = child(div);
  var node = sibling(child(p));
  Kbd(node, {
    class: "px-2 py-1.5",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text("Ctrl");
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
  var node_1 = sibling(node, 2);
  Kbd(node_1, {
    class: "px-2 py-1.5",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_1 = text("Shift");
      append($$anchor2, text_1);
    },
    $$slots: { default: true }
  });
  var node_2 = sibling(node_1, 2);
  Kbd(node_2, {
    class: "px-2 py-1.5",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_2 = text("R");
      append($$anchor2, text_2);
    },
    $$slots: { default: true }
  });
  next();
  reset(p);
  reset(div);
  append($$anchor, div);
}
var root$1 = template(`<div class="space-y-4"><!> <!></div>`);
function LetterKeys($$anchor) {
  let letter = state("");
  var div = root$1();
  var node = child(div);
  Kbd(node, {
    class: "px-2 py-1.5",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text();
      template_effect(() => set_text(text$1, get(letter) === "" ? "Type a letter" : get(letter)));
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
  var node_1 = sibling(node, 2);
  Input(node_1, {
    get value() {
      return get(letter);
    },
    set value($$value) {
      set(letter, proxy($$value));
    },
    placeholder: "Type a letter"
  });
  reset(div);
  append($$anchor, div);
}
var root_3 = template(`<div class="mb-12 flex flex-wrap"><!> <!></div> <!>`, 1);
var root = template(`<!> <!> <!> <!>`, 1);
function _page($$anchor, $$props) {
  push($$props, true);
  const dirName = "kbd";
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/ArrowKeys.svelte": __vite_glob_0_0,
    "./examples/Default.svelte": __vite_glob_0_1,
    "./examples/InsideTable.svelte": __vite_glob_0_2,
    "./examples/InsideText.svelte": __vite_glob_0_3,
    "./examples/LetterKeys.svelte": __vite_glob_0_4
  });
  const exampleArr = [
    {
      name: "Default",
      component: Default
    },
    {
      name: "Letter keys",
      component: LetterKeys
    },
    {
      name: "Inside text",
      component: InsideText
    },
    {
      name: "Inside table",
      component: InsideTable
    },
    {
      name: "Arrow keys",
      component: ArrowKeys
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
      var text$1 = text("KBD (Keyboard)");
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
            labelClass: "w-32 my-1",
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
