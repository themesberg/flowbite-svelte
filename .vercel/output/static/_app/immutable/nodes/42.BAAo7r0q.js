import { c as comment, a as append, t as template, b as text } from "../chunks/disclose-version.0TX42Q8e.js";
import { p as push, f as first_child, t as template_effect, b as get, a as pop, d as derived, c as child, a7 as set, s as sibling, r as reset, a6 as state, n as next, u as user_effect } from "../chunks/runtime.BkfDdwap.js";
import { a as set_text } from "../chunks/store.B2xZ3Ft6.js";
import { p as prop, i as if_block, d as bind_this, r as rest_props, b as proxy, c as component } from "../chunks/props.B7eOu8hW.js";
import { e as each, i as index } from "../chunks/each.CtHIoDcm.js";
import { av as bind_files, N as CloseButton, x as remove_input_defaults, a as set_attributes, b as set_class, aw as fileupload, ax as Dropzone, V as uiHelpers } from "../chunks/theme.BtjZjf2R.js";
import { B as Button } from "../chunks/markdown.Ba9FtS5g.js";
import { C as CompoAttributesViewer, L as Label, R as Radio } from "../chunks/CompoAttributesViewer.HsPJjrMu.js";
import { H as Helper } from "../chunks/Helper.CNgurqbV.js";
import { H as HighlightCompo } from "../chunks/HighlightCompo.D1kgIYBY.js";
import { D as DynamicCodeBlockHighlight } from "../chunks/DynamicCodeBlockHighlight.BS23lgW_.js";
import { C as CodeWrapper } from "../chunks/CodeWrapper.CdoIAYb8.js";
import { H as H1 } from "../chunks/H1.DunGd_Oq.js";
import { H as H2 } from "../chunks/H2.qsp5CBkK.js";
import { g as getExampleFileName, d as isSvelteOverflow } from "../chunks/helpers.B9KbZW0W.js";
var root_1$1 = template(`<div><input> <!></div>`);
var root_3$1 = template(`<input>`);
function Fileupload($$anchor, $$props) {
  push($$props, true);
  let files = prop($$props, "files", 15), size = prop($$props, "size", 3, "md"), clearable = prop($$props, "clearable", 3, false), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "files",
    "size",
    "clearable",
    "class"
  ]);
  const $$d = derived(() => fileupload({ size: size(), class: $$props.class })), base = derived(() => get($$d).base), wrapper = derived(() => get($$d).wrapper), right = derived(() => get($$d).right);
  let fileInputRef = state(void 0);
  const clearAll = () => {
    if (get(fileInputRef)) {
      get(fileInputRef).value = "";
      files(void 0);
    }
  };
  const hasFiles = derived(() => files() && files().length > 0);
  var fragment = comment();
  var node = first_child(fragment);
  if_block(
    node,
    clearable,
    ($$anchor2) => {
      var div = root_1$1();
      const class_derived = derived(() => get(wrapper)());
      var input = child(div);
      remove_input_defaults(input);
      let attributes;
      bind_this(input, ($$value) => set(fileInputRef, $$value), () => get(fileInputRef));
      var node_1 = sibling(input, 2);
      if_block(node_1, () => get(hasFiles), ($$anchor3) => {
        var class_1 = derived(() => get(right)());
        CloseButton($$anchor3, {
          onclick: clearAll,
          get class() {
            return get(class_1);
          }
        });
      });
      reset(div);
      template_effect(() => {
        set_class(div, get(class_derived));
        attributes = set_attributes(input, attributes, {
          type: "file",
          ...restProps,
          class: get(base)({ className: $$props.class })
        });
      });
      bind_files(input, files);
      append($$anchor2, div);
    },
    ($$anchor2) => {
      var input_1 = root_3$1();
      remove_input_defaults(input_1);
      let attributes_1;
      template_effect(() => attributes_1 = set_attributes(input_1, attributes_1, {
        type: "file",
        ...restProps,
        class: get(base)({ className: $$props.class })
      }));
      bind_files(input_1, files);
      append($$anchor2, input_1);
    }
  );
  append($$anchor, fragment);
  pop();
}
const __vite_glob_0_0 = '<script lang="ts">\n  import { Fileupload, Helper } from "$lib";\n  let selectedFiles: FileList | undefined = $state();\n  let fileNames = $derived(\n    selectedFiles\n      ? Array.from(selectedFiles)\n          .map((file) => file.name)\n          .join(", ")\n      : "No files selected"\n  );\n<\/script>\n\n<Fileupload clearable bind:files={selectedFiles} multiple />\n\n<Helper color="emerald" class="mt-2">Selected files: {fileNames}</Helper>\n';
const __vite_glob_0_1 = '<script lang="ts">\n  import { Dropzone } from "$lib";\n\n  let value = $state<string[]>([]);\n\n  const dropHandle = (event: DragEvent) => {\n    if (event.dataTransfer?.items) {\n      const newFiles = Array.from(event.dataTransfer.items)\n        .filter((item) => item.kind === "file")\n        .map((item) => item.getAsFile())\n        .filter((file): file is File => file !== null)\n        .map((file) => file.name);\n      value = [...value, ...newFiles];\n      console.log("Dropped files:", value); // Debugging\n    } else if (event.dataTransfer?.files) {\n      const newFiles = Array.from(event.dataTransfer.files).map((file) => file.name);\n      value = [...value, ...newFiles];\n      console.log("Dropped files:", value); // Debugging\n    }\n  };\n\n  const handleChange = (event: Event) => {\n    console.log("onChange event triggered!"); // Check if the event is firing\n    const target = event.target as HTMLInputElement;\n    const files = target.files;\n    console.log("Files in input:", files); // Check if files are being captured\n\n    if (files) {\n      const newFiles = Array.from(files).map((file) => file.name);\n      console.log("Selected file names:", newFiles); // Log file names\n      value = [...value, ...newFiles]; // Update your state with file names\n    }\n  };\n\n  const showFiles = (files: string[]): string => {\n    if (files.length === 1) return files[0];\n    let concat = files.join(", ");\n    if (concat.length > 40) {\n      concat = concat.slice(0, 40) + "...";\n    }\n    return concat;\n  };\n<\/script>\n\n<Dropzone multiple id="dropzone" ondrop={dropHandle} onchange={handleChange}>\n  <svg aria-hidden="true" class="mb-3 h-10 w-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>\n  {#if value.length === 0}\n    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span></p>\n    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>\n  {:else}\n    <p>{showFiles(value)}</p>\n  {/if}\n</Dropzone>\n';
const __vite_glob_0_2 = '<script lang="ts">\n  import { Label, Fileupload, Helper } from "$lib";\n<\/script>\n';
var root_2 = template(`<p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span></p> <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>`, 1);
var root_3 = template(`<p> </p>`);
var root_1 = template(`<svg aria-hidden="true" class="mb-3 h-10 w-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg> <!>`, 1);
function DropzoneExample($$anchor, $$props) {
  push($$props, true);
  let value = state(proxy([]));
  const dropHandle = (event) => {
    var _a, _b;
    if ((_a = event.dataTransfer) == null ? void 0 : _a.items) {
      const newFiles = Array.from(event.dataTransfer.items).filter((item) => item.kind === "file").map((item) => item.getAsFile()).filter((file) => file !== null).map((file) => file.name);
      set(value, proxy([...get(value), ...newFiles]));
      console.log("Dropped files:", get(value));
    } else if ((_b = event.dataTransfer) == null ? void 0 : _b.files) {
      const newFiles = Array.from(event.dataTransfer.files).map((file) => file.name);
      set(value, proxy([...get(value), ...newFiles]));
      console.log("Dropped files:", get(value));
    }
  };
  const handleChange = (event) => {
    console.log("onChange event triggered!");
    const target = event.target;
    const files = target.files;
    console.log("Files in input:", files);
    if (files) {
      const newFiles = Array.from(files).map((file) => file.name);
      console.log("Selected file names:", newFiles);
      set(value, proxy([...get(value), ...newFiles]));
    }
  };
  const showFiles = (files) => {
    if (files.length === 1) return files[0];
    let concat = files.join(", ");
    if (concat.length > 40) {
      concat = concat.slice(0, 40) + "...";
    }
    return concat;
  };
  Dropzone($$anchor, {
    multiple: true,
    id: "dropzone",
    ondrop: dropHandle,
    onchange: handleChange,
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1();
      var node = sibling(first_child(fragment_1), 2);
      if_block(
        node,
        () => get(value).length === 0,
        ($$anchor3) => {
          var fragment_2 = root_2();
          next(2);
          append($$anchor3, fragment_2);
        },
        ($$anchor3) => {
          var p = root_3();
          var text2 = child(p, true);
          template_effect(() => set_text(text2, showFiles(get(value))));
          reset(p);
          append($$anchor3, p);
        }
      );
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
  pop();
}
var root$1 = template(`<!> <!>`, 1);
function Clearable($$anchor, $$props) {
  push($$props, true);
  let selectedFiles = state(void 0);
  let fileNames = derived(() => get(selectedFiles) ? Array.from(get(selectedFiles)).map((file) => file.name).join(", ") : "No files selected");
  var fragment = root$1();
  var node = first_child(fragment);
  Fileupload(node, {
    clearable: true,
    get files() {
      return get(selectedFiles);
    },
    set files($$value) {
      set(selectedFiles, proxy($$value));
    },
    multiple: true
  });
  var node_1 = sibling(node, 2);
  Helper(node_1, {
    color: "emerald",
    class: "mt-2",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text();
      template_effect(() => set_text(text$1, `Selected files: ${get(fileNames) ?? ""}`));
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
  append($$anchor, fragment);
  pop();
}
var root_9 = template(`<p> </p>`);
var root_8 = template(`<div class="h-16 overflow-y-scroll"></div>`);
var root_5 = template(`<div class="md:h-24"><!> <!> <!></div> <div class="mb-4 mt-4 flex flex-wrap space-x-2"><!> <!></div> <div class="flex flex-wrap justify-center gap-2 md:justify-start"><!> <!> <!></div>`, 1);
var root_18 = template(`<div class="mb-12 flex flex-wrap"><!> <!></div> <!>`, 1);
var root = template(`<!> <!> <!> <!> <!> <!> <!> <!> <!>`, 1);
function _page($$anchor, $$props) {
  push($$props, true);
  const dirName = "forms/fileupload";
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/Clearable.svelte": __vite_glob_0_0,
    "./examples/DropzoneExample.svelte": __vite_glob_0_1,
    "./examples/Setup.svelte": __vite_glob_0_2
  });
  const exampleArr = [
    {
      name: "Clearable",
      component: Clearable
    },
    {
      name: "Dropzone example",
      component: DropzoneExample
    }
  ];
  let selectedExample = state(proxy(exampleArr[0].name));
  let svelteCode = derived(() => getExampleFileName(get(selectedExample), exampleArr));
  function findObject(arr, name) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = derived(() => findObject(exampleArr, get(selectedExample)));
  let files = state(void 0);
  const sizes = Object.keys(fileupload.variants.size);
  let size = state("md");
  let helperState = state(false);
  const changeHelperState = () => {
    set(helperState, !get(helperState));
  };
  let fileNames = state(true);
  const changeBindFile = () => {
    set(fileNames, !get(fileNames));
  };
  let multiple = state(false);
  const changeMultiple = () => {
    set(multiple, !get(multiple));
  };
  let generatedCode = derived(() => (() => {
    let props = [];
    if (get(size) !== "md") props.push(` size="${get(size)}"`);
    if (get(multiple)) props.push(" multiple");
    if (get(fileNames)) props.push(" bind:files");
    const propsString = props.length > 0 ? props.map((prop2) => `
  ${prop2}`).join("") + "\n" : "";
    return `<Fileupload${propsString} />${get(helperState) ? `
<Helper>Helper text</Helper>` : ""}
${get(fileNames) ? `{#each files as file}<p>{file.name}</p>{/each}` : ""}`;
  })());
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
      var text$1 = text("File input");
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
      var text_2 = text("Interactive Fileupload Builder");
      append($$anchor2, text_2);
    },
    $$slots: { default: true }
  });
  var node_4 = sibling(node_3, 2);
  {
    const codeblock = ($$anchor2) => {
      HighlightCompo($$anchor2, {
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
        Fileupload(node_5, {
          id: "small_size",
          get size() {
            return get(size);
          },
          class: "mb-2",
          get multiple() {
            return get(multiple);
          },
          get files() {
            return get(files);
          },
          set files($$value) {
            set(files, proxy($$value));
          }
        });
        var node_6 = sibling(node_5, 2);
        if_block(node_6, () => get(helperState), ($$anchor3) => {
          Helper($$anchor3, {
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_3 = text("SVG, PNG, JPG or GIF (MAX. 800x400px).");
              append($$anchor4, text_3);
            },
            $$slots: { default: true }
          });
        });
        var node_7 = sibling(node_6, 2);
        if_block(node_7, () => get(fileNames) && get(files), ($$anchor3) => {
          var div_1 = root_8();
          each(div_1, 21, () => get(files), index, ($$anchor4, file) => {
            var p = root_9();
            var text_4 = child(p, true);
            reset(p);
            template_effect(() => set_text(text_4, get(file).name));
            append($$anchor4, p);
          });
          reset(div_1);
          append($$anchor3, div_1);
        });
        reset(div);
        var div_2 = sibling(div, 2);
        var node_8 = child(div_2);
        Label(node_8, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_5 = text("Size");
            append($$anchor3, text_5);
          },
          $$slots: { default: true }
        });
        var node_9 = sibling(node_8, 2);
        each(node_9, 17, () => sizes, index, ($$anchor3, sizeOption) => {
          Radio($$anchor3, {
            labelClass: "w-16 my-1",
            name: "file_input_size",
            get group() {
              return get(size);
            },
            set group($$value) {
              set(size, proxy($$value));
            },
            get value() {
              return get(sizeOption);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_6 = text();
              template_effect(() => set_text(text_6, get(sizeOption)));
              append($$anchor4, text_6);
            },
            $$slots: { default: true }
          });
        });
        reset(div_2);
        var div_3 = sibling(div_2, 2);
        var node_10 = child(div_3);
        Button(node_10, {
          class: "w-40",
          onclick: changeHelperState,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_7 = text();
            template_effect(() => set_text(text_7, get(helperState) ? "Remove helper" : "Add helper"));
            append($$anchor3, text_7);
          },
          $$slots: { default: true }
        });
        var node_11 = sibling(node_10, 2);
        Button(node_11, {
          class: "w-40",
          color: "emerald",
          onclick: changeBindFile,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_8 = text();
            template_effect(() => set_text(text_8, get(fileNames) ? "Hide file names" : "Show file names"));
            append($$anchor3, text_8);
          },
          $$slots: { default: true }
        });
        var node_12 = sibling(node_11, 2);
        Button(node_12, {
          class: "w-40",
          color: "sky",
          onclick: changeMultiple,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_9 = text();
            template_effect(() => set_text(text_9, get(multiple) ? "Remove multiple" : "Add multiple"));
            append($$anchor3, text_9);
          },
          $$slots: { default: true }
        });
        reset(div_3);
        append($$anchor2, fragment_2);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_13 = sibling(node_4, 2);
  H2(node_13, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_10 = text("Examples");
      append($$anchor2, text_10);
    },
    $$slots: { default: true }
  });
  var node_14 = sibling(node_13, 2);
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
    CodeWrapper(node_14, {
      codeblock,
      children: ($$anchor2, $$slotProps) => {
        var fragment_10 = root_18();
        var div_4 = first_child(fragment_10);
        var node_15 = child(div_4);
        Label(node_15, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_11 = text("Example");
            append($$anchor3, text_11);
          },
          $$slots: { default: true }
        });
        var node_16 = sibling(node_15, 2);
        each(node_16, 17, () => exampleArr, index, ($$anchor3, style) => {
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
              var text_12 = text();
              template_effect(() => set_text(text_12, get(style).name));
              append($$anchor4, text_12);
            },
            $$slots: { default: true }
          });
        });
        reset(div_4);
        var node_17 = sibling(div_4, 2);
        component(node_17, () => get(SelectedComponent), ($$anchor3, $$component) => {
          $$component($$anchor3, {});
        });
        append($$anchor2, fragment_10);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_18 = sibling(node_14, 2);
  H2(node_18, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_13 = text("Component data");
      append($$anchor2, text_13);
    },
    $$slots: { default: true }
  });
  var node_19 = sibling(node_18, 2);
  CompoAttributesViewer(node_19, { dirName });
  append($$anchor, fragment);
  pop();
}
export {
  _page as component
};
