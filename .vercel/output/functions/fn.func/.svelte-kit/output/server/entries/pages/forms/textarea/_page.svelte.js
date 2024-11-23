import { Q as push, R as setContext, Z as store_get, a0 as spread_attributes, W as attr, $ as unsubscribe_stores, S as pop, a1 as getContext, V as escape_html, a9 as store_set, a3 as copy_payload, a4 as assign_payload, Y as ensure_array_like } from "../../../../chunks/index.js";
import { aP as toolbar, aQ as toolbarButton, aR as toolbarGroup } from "../../../../chunks/theme.js";
import { B as Button } from "../../../../chunks/markdown.js";
import { L as Label, R as Radio, C as CompoAttributesViewer } from "../../../../chunks/CompoAttributesViewer.js";
import { H as Helper } from "../../../../chunks/Helper.js";
import { T as Textarea } from "../../../../chunks/Textarea.js";
import { D as DynamicCodeBlockHighlight } from "../../../../chunks/DynamicCodeBlockHighlight.js";
import { C as CodeWrapper } from "../../../../chunks/CodeWrapper.js";
import { a as H1 } from "../../../../chunks/H1.js";
import { H as H2 } from "../../../../chunks/H2.js";
import { g as getExampleFileName, a as isGeneratedCodeOverflow, i as isSvelteOverflow } from "../../../../chunks/helpers.js";
import { w as writable } from "../../../../chunks/index2.js";
import { twMerge } from "tailwind-merge";
function Toolbar($$payload, $$props) {
  push();
  var $$store_subs;
  let {
    children,
    end,
    color = "default",
    embedded,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const separators = writable(false);
  setContext("toolbar", separators);
  let frameColor = embedded ? "default" : color;
  let { base, content } = toolbar({
    color: frameColor,
    embedded,
    separators: store_get($$store_subs ??= {}, "$separators", separators)
  });
  $$payload.out += `<div${spread_attributes({
    ...restProps,
    class: base({ className })
  })}><div${attr("class", content())}>`;
  children($$payload);
  $$payload.out += `<!----></div> `;
  if (end) {
    $$payload.out += "<!--[-->";
    end($$payload);
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function ToolbarButton($$payload, $$props) {
  push();
  const background = getContext("background");
  let {
    children,
    color = "default",
    name,
    ariaLabel,
    size = "md",
    href,
    class: className,
    onclick,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const buttonClass = toolbarButton({
    color,
    size,
    background: !!background,
    class: className
  });
  if (href) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<a${spread_attributes({
      href,
      ...restProps,
      class: buttonClass,
      "aria-label": ariaLabel ?? name
    })}>`;
    if (name) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<span class="sr-only">${escape_html(name)}</span>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> `;
    children($$payload);
    $$payload.out += `<!----></a>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<button${spread_attributes({
      type: "button",
      ...restProps,
      class: buttonClass,
      "aria-label": ariaLabel ?? name
    })}>`;
    if (name) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<span class="sr-only">${escape_html(name)}</span>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> `;
    children($$payload);
    $$payload.out += `<!----></button>`;
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function ToolbarGroup($$payload, $$props) {
  push();
  let {
    children,
    spacing = "default",
    padding = "default",
    position = "middle",
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const groupClass = toolbarGroup({
    spacing,
    padding,
    position,
    class: className
  });
  const options = getContext("toolbar");
  if (options) store_set(options, true);
  $$payload.out += `<div${spread_attributes({ ...restProps, class: groupClass })}>`;
  children($$payload);
  $$payload.out += `<!----></div>`;
  pop();
}
function CodeOutline($$payload, $$props) {
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
    ariaLabel = "code outline",
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
  $$payload.out += `<!--]--><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${attr("stroke-width", strokeWidth)} d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"></path></svg>`;
  pop();
}
function FaceGrinOutline($$payload, $$props) {
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
    ariaLabel = "face grin outline",
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
  $$payload.out += `<!--]--><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${attr("stroke-width", strokeWidth)} d="M14.99 9H15M8.99 9H9m12 3a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM7 13c0 1 .507 2.397 1.494 3.216a5.5 5.5 0 0 0 7.022 0C16.503 15.397 17 14 17 13c0 0-1.99 1-4.995 1S7 13 7 13Z"></path></svg>`;
  pop();
}
function ImageOutline($$payload, $$props) {
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
    ariaLabel = "image outline",
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
  $$payload.out += `<!--]--><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${attr("stroke-width", strokeWidth)} d="m3 16 5-7 6 6.5m6.5 2.5L16 13l-4.286 6M14 10h.01M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"></path></svg>`;
  pop();
}
function MapPinAltSolid($$payload, $$props) {
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
    ariaLabel = "map pin alt solid",
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
  $$payload.out += `<!--]--><path fill-rule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clip-rule="evenodd"></path></svg>`;
  pop();
}
function PaperClipOutline($$payload, $$props) {
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
    ariaLabel = "paper clip outline",
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
  $$payload.out += `<!--]--><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${attr("stroke-width", strokeWidth)} d="M7 8v8a5 5 0 1 0 10 0V6.5a3.5 3.5 0 1 0-7 0V15a2 2 0 0 0 4 0V8"></path></svg>`;
  pop();
}
function PaperPlaneOutline($$payload, $$props) {
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
    ariaLabel = "paper plane outline",
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
  $$payload.out += `<!--]--><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${attr("stroke-width", strokeWidth)} d="m12 18-7 3 7-18 7 18-7-3Zm0 0v-5"></path></svg>`;
  pop();
}
const __vite_glob_0_0 = '<script lang="ts">\n  import { Textarea, ToolbarButton } from "$lib";\n  import { ImageOutline, FaceGrinOutline, PaperPlaneOutline } from "flowbite-svelte-icons";\n<\/script>\n\n<form>\n  <label for="chat" class="sr-only">Your message</label>\n  <div class="flex items-center rounded-lg bg-gray-50 px-3 py-2 dark:bg-gray-700">\n    <ToolbarButton color="dark" class="text-gray-500 dark:text-gray-400">\n      <ImageOutline class="h-6 w-6" />\n      <span class="sr-only">Upload image</span>\n    </ToolbarButton>\n    <ToolbarButton color="dark" class="text-gray-500 dark:text-gray-400">\n      <FaceGrinOutline class="h-6 w-6" />\n      <span class="sr-only">Add emoji</span>\n    </ToolbarButton>\n    <Textarea id="chat" class="mx-4 bg-white dark:bg-gray-800" rows={1} placeholder="Your message..." />\n    <ToolbarButton color="blue" class="rounded-full text-primary-600 dark:text-primary-500">\n      <PaperPlaneOutline class="h-6 w-6 rotate-45" />\n      <span class="sr-only">Send message</span>\n    </ToolbarButton>\n  </div>\n</form>\n';
const __vite_glob_0_1 = '<script lang="ts">\n  import { Textarea, Toolbar, ToolbarButton, Button, Helper } from "$lib";\n  import { PaperClipOutline, MapPinAltSolid, ImageOutline } from "flowbite-svelte-icons";\n<\/script>\n\n<form>\n  <Textarea class="mb-4" placeholder="Write a comment">\n    {#snippet footer()}\n      <div class="flex items-center justify-between">\n        <Button type="submit">Post comment</Button>\n        <Toolbar embedded>\n          <ToolbarButton name="Attach file"><PaperClipOutline class="h-6 w-6" /></ToolbarButton>\n          <ToolbarButton name="Set location"><MapPinAltSolid class="h-6 w-6" /></ToolbarButton>\n          <ToolbarButton name="Upload image"><ImageOutline class="h-6 w-6" /></ToolbarButton>\n        </Toolbar>\n      </div>\n    {/snippet}\n  </Textarea>\n</form>\n<Helper class="mt-4">\n  Remember, contributions to this topic should follow our <a href="/" class="text-primary-600 hover:underline dark:text-primary-500">Community Guidelines</a>\n  .\n</Helper>\n';
const __vite_glob_0_2 = '<script lang="ts">\n  import { Textarea, Label } from "$lib";\n<\/script>\n\n<Label for="textarea-id" class="mb-2">Your message</Label>\n<Textarea id="textarea-id" placeholder="Your message" rows={4} name="message" />\n';
const __vite_glob_0_3 = '<script lang="ts">\n  import { Textarea, Toolbar, ToolbarButton, ToolbarGroup, Label, Button } from "$lib";\n  import { PaperClipOutline, MapPinAltSolid, ImageOutline, CodeOutline, FaceGrinOutline, PaperPlaneOutline } from "flowbite-svelte-icons";\n<\/script>\n\n<form>\n  <Label for="editor" class="sr-only">Publish post</Label>\n  <Textarea id="editor" rows={8} class="mb-4" placeholder="Write a comment">\n    {#snippet header()}\n      <Toolbar embedded>\n        <ToolbarGroup>\n          <ToolbarButton name="Attach file"><PaperClipOutline class="h-6 w-6 rotate-45" /></ToolbarButton>\n          <ToolbarButton name="Embed map"><MapPinAltSolid class="h-6 w-6" /></ToolbarButton>\n          <ToolbarButton name="Upload image"><ImageOutline class="h-6 w-6" /></ToolbarButton>\n        </ToolbarGroup>\n        <ToolbarGroup>\n          <ToolbarButton name="Format code"><CodeOutline class="h-6 w-6" /></ToolbarButton>\n          <ToolbarButton name="Add emoji"><FaceGrinOutline class="h-6 w-6" /></ToolbarButton>\n        </ToolbarGroup>\n        {#snippet end()}\n          <ToolbarButton name="Send"><PaperPlaneOutline class="h-6 w-6 rotate-45" /></ToolbarButton>\n        {/snippet}\n      </Toolbar>\n    {/snippet}\n  </Textarea>\n  <Button class="mt-4">Publish post</Button>\n</form>\n';
function WysiwygEditor($$payload) {
  $$payload.out += `<form>`;
  Label($$payload, {
    for: "editor",
    class: "sr-only",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Publish post`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  {
    let header = function($$payload2) {
      {
        let end = function($$payload3) {
          ToolbarButton($$payload3, {
            name: "Send",
            children: ($$payload4) => {
              PaperPlaneOutline($$payload4, { class: "h-6 w-6 rotate-45" });
            },
            $$slots: { default: true }
          });
        };
        Toolbar($$payload2, {
          embedded: true,
          end,
          children: ($$payload3) => {
            ToolbarGroup($$payload3, {
              children: ($$payload4) => {
                ToolbarButton($$payload4, {
                  name: "Attach file",
                  children: ($$payload5) => {
                    PaperClipOutline($$payload5, { class: "h-6 w-6 rotate-45" });
                  },
                  $$slots: { default: true }
                });
                $$payload4.out += `<!----> `;
                ToolbarButton($$payload4, {
                  name: "Embed map",
                  children: ($$payload5) => {
                    MapPinAltSolid($$payload5, { class: "h-6 w-6" });
                  },
                  $$slots: { default: true }
                });
                $$payload4.out += `<!----> `;
                ToolbarButton($$payload4, {
                  name: "Upload image",
                  children: ($$payload5) => {
                    ImageOutline($$payload5, { class: "h-6 w-6" });
                  },
                  $$slots: { default: true }
                });
                $$payload4.out += `<!---->`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!----> `;
            ToolbarGroup($$payload3, {
              children: ($$payload4) => {
                ToolbarButton($$payload4, {
                  name: "Format code",
                  children: ($$payload5) => {
                    CodeOutline($$payload5, { class: "h-6 w-6" });
                  },
                  $$slots: { default: true }
                });
                $$payload4.out += `<!----> `;
                ToolbarButton($$payload4, {
                  name: "Add emoji",
                  children: ($$payload5) => {
                    FaceGrinOutline($$payload5, { class: "h-6 w-6" });
                  },
                  $$slots: { default: true }
                });
                $$payload4.out += `<!---->`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!---->`;
          },
          $$slots: { end: true, default: true }
        });
      }
    };
    Textarea($$payload, {
      id: "editor",
      rows: 8,
      class: "mb-4",
      placeholder: "Write a comment",
      header,
      $$slots: { header: true }
    });
  }
  $$payload.out += `<!----> `;
  Button($$payload, {
    class: "mt-4",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Publish post`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></form>`;
}
function CommentBox($$payload) {
  $$payload.out += `<form>`;
  {
    let footer = function($$payload2) {
      $$payload2.out += `<div class="flex items-center justify-between">`;
      Button($$payload2, {
        type: "submit",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Post comment`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Toolbar($$payload2, {
        embedded: true,
        children: ($$payload3) => {
          ToolbarButton($$payload3, {
            name: "Attach file",
            children: ($$payload4) => {
              PaperClipOutline($$payload4, { class: "h-6 w-6" });
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          ToolbarButton($$payload3, {
            name: "Set location",
            children: ($$payload4) => {
              MapPinAltSolid($$payload4, { class: "h-6 w-6" });
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          ToolbarButton($$payload3, {
            name: "Upload image",
            children: ($$payload4) => {
              ImageOutline($$payload4, { class: "h-6 w-6" });
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----></div>`;
    };
    Textarea($$payload, {
      class: "mb-4",
      placeholder: "Write a comment",
      footer,
      $$slots: { footer: true }
    });
  }
  $$payload.out += `<!----></form> `;
  Helper($$payload, {
    class: "mt-4",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Remember, contributions to this topic should follow our <a href="/" class="text-primary-600 hover:underline dark:text-primary-500">Community Guidelines</a> .`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!---->`;
}
function ChatroomInput($$payload) {
  $$payload.out += `<form><label for="chat" class="sr-only">Your message</label> <div class="flex items-center rounded-lg bg-gray-50 px-3 py-2 dark:bg-gray-700">`;
  ToolbarButton($$payload, {
    color: "dark",
    class: "text-gray-500 dark:text-gray-400",
    children: ($$payload2) => {
      ImageOutline($$payload2, { class: "h-6 w-6" });
      $$payload2.out += `<!----> <span class="sr-only">Upload image</span>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  ToolbarButton($$payload, {
    color: "dark",
    class: "text-gray-500 dark:text-gray-400",
    children: ($$payload2) => {
      FaceGrinOutline($$payload2, { class: "h-6 w-6" });
      $$payload2.out += `<!----> <span class="sr-only">Add emoji</span>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Textarea($$payload, {
    id: "chat",
    class: "mx-4 bg-white dark:bg-gray-800",
    rows: 1,
    placeholder: "Your message..."
  });
  $$payload.out += `<!----> `;
  ToolbarButton($$payload, {
    color: "blue",
    class: "rounded-full text-primary-600 dark:text-primary-500",
    children: ($$payload2) => {
      PaperPlaneOutline($$payload2, { class: "h-6 w-6 rotate-45" });
      $$payload2.out += `<!----> <span class="sr-only">Send message</span>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div></form>`;
}
function _page($$payload, $$props) {
  push();
  const dirName = "forms/textarea";
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/ChatroomInput.svelte": __vite_glob_0_0,
    "./examples/CommentBox.svelte": __vite_glob_0_1,
    "./examples/Default.svelte": __vite_glob_0_2,
    "./examples/WysiwygEditor.svelte": __vite_glob_0_3
  });
  const exampleArr = [
    // { name: 'Default', component: ExampleComponents.Default },
    {
      name: "Wysiwyg editor",
      component: WysiwygEditor
    },
    {
      name: "Comment box",
      component: CommentBox
    },
    {
      name: "Chatroom input",
      component: ChatroomInput
    }
  ];
  let selectedExample = exampleArr[0].name;
  let svelteCode = getExampleFileName(selectedExample, exampleArr);
  function findObject(arr, name) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = findObject(exampleArr, selectedExample);
  let value = "";
  const changeValue = () => {
    value = value !== "" ? "" : "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  };
  let disabled = false;
  const changeDisabled = () => {
    disabled = !disabled;
  };
  let required = false;
  const changeRequired = () => {
    required = !required;
  };
  let placeholder = "";
  const changePlaceholder = () => {
    placeholder = placeholder !== "" ? "" : "Your message";
    value = placeholder !== "" ? "" : "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  };
  let rows = void 0;
  const changeRows = () => {
    rows = rows !== void 0 ? void 0 : 5;
  };
  let maxlength = void 0;
  const changeMaxlength = () => {
    maxlength = maxlength !== void 0 ? void 0 : 20;
    value = maxlength === 20 ? "" : "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  };
  let textAreaClass = "";
  const changeClass = () => {
    textAreaClass = textAreaClass === "" ? "w-48" : "";
  };
  let generatedCode = (() => {
    let props = [];
    if (required) props.push(`required`);
    if (placeholder) props.push(`placeholder="${placeholder}"`);
    if (rows !== void 0) props.push(`rows="${rows}"`);
    if (maxlength) props.push(`maxlength="${maxlength}"`);
    if (textAreaClass) props.push(`class="${textAreaClass}"`);
    if (disabled) props.push(`disabled`);
    if (value) props.push(`value="${value}"`);
    const propsString = props.length > 0 ? props.map((prop) => `
  ${prop}`).join("") + "\n" : "";
    return `<Textarea${propsString} />`;
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
        $$payload3.out += `<!---->Textarea`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    H2($$payload2, {
      children: ($$payload3) => {
        $$payload3.out += `<!---->Interactive Textarea Bilder`;
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
          $$payload3.out += `<div class="mb-4 h-64">`;
          Label($$payload3, {
            for: "textarea-id",
            class: "mb-2",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Your message `;
              if (required) {
                $$payload4.out += "<!--[-->";
                Helper($$payload4, {
                  color: "red",
                  class: "inline",
                  children: ($$payload5) => {
                    $$payload5.out += `<!---->* Required`;
                  },
                  $$slots: { default: true }
                });
              } else {
                $$payload4.out += "<!--[!-->";
              }
              $$payload4.out += `<!--]-->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Textarea($$payload3, {
            id: "textarea-id",
            name: "message",
            value,
            required,
            rows,
            maxlength,
            placeholder,
            divClass: textAreaClass,
            disabled
          });
          $$payload3.out += `<!----></div> <div class="flex flex-wrap justify-center gap-2 md:justify-start">`;
          Button($$payload3, {
            class: "w-48",
            color: "blue",
            onclick: changeRequired,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(required ? "Remove required" : "Add required")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-48",
            color: "red",
            onclick: changePlaceholder,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(placeholder ? "Remove placeholder" : "Add placeholder")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-48",
            color: "yellow",
            onclick: changeRows,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(rows !== void 0 ? "Remove rows" : "Add rows")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-48",
            color: "green",
            onclick: changeMaxlength,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(maxlength ? "Remove maxlength" : "Add maxlength")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-48",
            color: "pink",
            onclick: changeClass,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(textAreaClass !== "" ? "Remove class" : "Add class")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-48",
            color: "purple",
            onclick: changeDisabled,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(disabled ? "Remove disabled" : "Add disabled")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-48",
            color: "orange",
            onclick: changeValue,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(value ? "Remove value" : "Add value")}`;
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
