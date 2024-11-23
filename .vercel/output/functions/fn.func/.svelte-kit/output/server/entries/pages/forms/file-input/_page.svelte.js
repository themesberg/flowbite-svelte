import { Q as push, W as attr, a0 as spread_attributes, a2 as bind_props, S as pop, V as escape_html, a3 as copy_payload, a4 as assign_payload, Y as ensure_array_like } from "../../../../chunks/index.js";
import { aJ as dropzone, aK as fileupload } from "../../../../chunks/theme.js";
import { B as Button } from "../../../../chunks/markdown.js";
import { L as Label, R as Radio, C as CompoAttributesViewer } from "../../../../chunks/CompoAttributesViewer.js";
import { C as CloseButton } from "../../../../chunks/CloseButton.js";
import { H as Helper } from "../../../../chunks/Helper.js";
import { H as HighlightCompo } from "../../../../chunks/HighlightCompo.js";
import { D as DynamicCodeBlockHighlight } from "../../../../chunks/DynamicCodeBlockHighlight.js";
import { C as CodeWrapper } from "../../../../chunks/CodeWrapper.js";
import { a as H1 } from "../../../../chunks/H1.js";
import { H as H2 } from "../../../../chunks/H2.js";
import { g as getExampleFileName, i as isSvelteOverflow } from "../../../../chunks/helpers.js";
function Dropzone($$payload, $$props) {
  push();
  let {
    children,
    files = void 0,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const base = dropzone({ className });
  $$payload.out += `<button${attr("class", base)} type="button">`;
  children($$payload);
  $$payload.out += `<!----></button> <label class="hidden"><input${spread_attributes({ ...restProps, type: "file" })}></label>`;
  bind_props($$props, { files });
  pop();
}
function Fileupload($$payload, $$props) {
  push();
  let {
    files = void 0,
    size = "md",
    clearable = false,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const { base, wrapper, right } = fileupload({ size, class: className });
  const clearAll = () => {
  };
  const hasFiles = files && files.length > 0;
  if (clearable) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div${attr("class", wrapper())}><input${spread_attributes({
      type: "file",
      ...restProps,
      class: base({ className })
    })}> `;
    if (hasFiles) {
      $$payload.out += "<!--[-->";
      CloseButton($$payload, { onclick: clearAll, class: right() });
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<input${spread_attributes({
      type: "file",
      ...restProps,
      class: base({ className })
    })}>`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { files });
  pop();
}
const __vite_glob_0_0 = '<script lang="ts">\n  import { Fileupload, Helper } from "$lib";\n  let selectedFiles: FileList | undefined = $state();\n  let fileNames = $derived(\n    selectedFiles\n      ? Array.from(selectedFiles)\n          .map((file) => file.name)\n          .join(", ")\n      : "No files selected"\n  );\n<\/script>\n\n<Fileupload clearable bind:files={selectedFiles} multiple />\n\n<Helper color="emerald" class="mt-2">Selected files: {fileNames}</Helper>\n';
const __vite_glob_0_1 = '<script lang="ts">\n  import { Dropzone } from "$lib";\n\n  let value = $state<string[]>([]);\n\n  const dropHandle = (event: DragEvent) => {\n    if (event.dataTransfer?.items) {\n      const newFiles = Array.from(event.dataTransfer.items)\n        .filter((item) => item.kind === "file")\n        .map((item) => item.getAsFile())\n        .filter((file): file is File => file !== null)\n        .map((file) => file.name);\n      value = [...value, ...newFiles];\n      console.log("Dropped files:", value); // Debugging\n    } else if (event.dataTransfer?.files) {\n      const newFiles = Array.from(event.dataTransfer.files).map((file) => file.name);\n      value = [...value, ...newFiles];\n      console.log("Dropped files:", value); // Debugging\n    }\n  };\n\n  const handleChange = (event: Event) => {\n    console.log("onChange event triggered!"); // Check if the event is firing\n    const target = event.target as HTMLInputElement;\n    const files = target.files;\n    console.log("Files in input:", files); // Check if files are being captured\n\n    if (files) {\n      const newFiles = Array.from(files).map((file) => file.name);\n      console.log("Selected file names:", newFiles); // Log file names\n      value = [...value, ...newFiles]; // Update your state with file names\n    }\n  };\n\n  const showFiles = (files: string[]): string => {\n    if (files.length === 1) return files[0];\n    let concat = files.join(", ");\n    if (concat.length > 40) {\n      concat = concat.slice(0, 40) + "...";\n    }\n    return concat;\n  };\n<\/script>\n\n<Dropzone multiple id="dropzone" ondrop={dropHandle} onchange={handleChange}>\n  <svg aria-hidden="true" class="mb-3 h-10 w-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>\n  {#if value.length === 0}\n    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span></p>\n    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>\n  {:else}\n    <p>{showFiles(value)}</p>\n  {/if}\n</Dropzone>\n';
const __vite_glob_0_2 = '<script lang="ts">\n  import { Label, Fileupload, Helper } from "$lib";\n<\/script>\n';
function DropzoneExample($$payload, $$props) {
  push();
  let value = [];
  const dropHandle = (event) => {
    if (event.dataTransfer?.items) {
      const newFiles = Array.from(event.dataTransfer.items).filter((item) => item.kind === "file").map((item) => item.getAsFile()).filter((file) => file !== null).map((file) => file.name);
      value = [...value, ...newFiles];
      console.log("Dropped files:", value);
    } else if (event.dataTransfer?.files) {
      const newFiles = Array.from(event.dataTransfer.files).map((file) => file.name);
      value = [...value, ...newFiles];
      console.log("Dropped files:", value);
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
      value = [...value, ...newFiles];
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
  Dropzone($$payload, {
    multiple: true,
    id: "dropzone",
    ondrop: dropHandle,
    onchange: handleChange,
    children: ($$payload2) => {
      $$payload2.out += `<svg aria-hidden="true" class="mb-3 h-10 w-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg> `;
      if (value.length === 0) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span></p> <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>`;
      } else {
        $$payload2.out += "<!--[!-->";
        $$payload2.out += `<p>${escape_html(showFiles(value))}</p>`;
      }
      $$payload2.out += `<!--]-->`;
    },
    $$slots: { default: true }
  });
  pop();
}
function Clearable($$payload, $$props) {
  push();
  let selectedFiles = void 0;
  let fileNames = selectedFiles ? Array.from(selectedFiles).map((file) => file.name).join(", ") : "No files selected";
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    Fileupload($$payload2, {
      clearable: true,
      get files() {
        return selectedFiles;
      },
      set files($$value) {
        selectedFiles = $$value;
        $$settled = false;
      },
      multiple: true
    });
    $$payload2.out += `<!----> `;
    Helper($$payload2, {
      color: "emerald",
      class: "mt-2",
      children: ($$payload3) => {
        $$payload3.out += `<!---->Selected files: ${escape_html(fileNames)}`;
      },
      $$slots: { default: true }
    });
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
function _page($$payload, $$props) {
  push();
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
  let selectedExample = exampleArr[0].name;
  let svelteCode = getExampleFileName(selectedExample, exampleArr);
  function findObject(arr, name) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = findObject(exampleArr, selectedExample);
  let files = void 0;
  const sizes = Object.keys(fileupload.variants.size);
  let size = "md";
  let helperState = false;
  const changeHelperState = () => {
    helperState = !helperState;
  };
  let fileNames = true;
  const changeBindFile = () => {
    fileNames = !fileNames;
  };
  let multiple = false;
  const changeMultiple = () => {
    multiple = !multiple;
  };
  let generatedCode = (() => {
    let props = [];
    if (size !== "md") props.push(` size="${size}"`);
    if (multiple) props.push(" multiple");
    if (fileNames) props.push(" bind:files");
    const propsString = props.length > 0 ? props.map((prop) => `
  ${prop}`).join("") + "\n" : "";
    return `<Fileupload${propsString} />${helperState ? `
<Helper>Helper text</Helper>` : ""}
${fileNames ? `{#each files as file}<p>{file.name}</p>{/each}` : ""}`;
  })();
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
        $$payload3.out += `<!---->File input`;
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
        $$payload3.out += `<!---->Interactive Fileupload Builder`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    {
      let codeblock = function($$payload3) {
        HighlightCompo($$payload3, { code: generatedCode });
      };
      CodeWrapper($$payload2, {
        codeblock,
        children: ($$payload3) => {
          const each_array_1 = ensure_array_like(sizes);
          $$payload3.out += `<div class="md:h-24">`;
          Fileupload($$payload3, {
            id: "small_size",
            size,
            class: "mb-2",
            multiple,
            get files() {
              return files;
            },
            set files($$value) {
              files = $$value;
              $$settled = false;
            }
          });
          $$payload3.out += `<!----> `;
          if (helperState) {
            $$payload3.out += "<!--[-->";
            Helper($$payload3, {
              children: ($$payload4) => {
                $$payload4.out += `<!---->SVG, PNG, JPG or GIF (MAX. 800x400px).`;
              },
              $$slots: { default: true }
            });
          } else {
            $$payload3.out += "<!--[!-->";
          }
          $$payload3.out += `<!--]--> `;
          if (fileNames && files) {
            $$payload3.out += "<!--[-->";
            const each_array = ensure_array_like(files);
            $$payload3.out += `<div class="h-16 overflow-y-scroll"><!--[-->`;
            for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
              let file = each_array[$$index];
              $$payload3.out += `<p>${escape_html(file.name)}</p>`;
            }
            $$payload3.out += `<!--]--></div>`;
          } else {
            $$payload3.out += "<!--[!-->";
          }
          $$payload3.out += `<!--]--></div> <div class="mb-4 mt-4 flex flex-wrap space-x-2">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Size`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
            let sizeOption = each_array_1[$$index_1];
            Radio($$payload3, {
              labelClass: "w-16 my-1",
              name: "file_input_size",
              get group() {
                return size;
              },
              set group($$value) {
                size = $$value;
                $$settled = false;
              },
              value: sizeOption,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(sizeOption)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> <div class="flex flex-wrap justify-center gap-2 md:justify-start">`;
          Button($$payload3, {
            class: "w-40",
            onclick: changeHelperState,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(helperState ? "Remove helper" : "Add helper")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-40",
            color: "emerald",
            onclick: changeBindFile,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(fileNames ? "Hide file names" : "Show file names")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-40",
            color: "sky",
            onclick: changeMultiple,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(multiple ? "Remove multiple" : "Add multiple")}`;
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
          const each_array_2 = ensure_array_like(exampleArr);
          $$payload3.out += `<div class="mb-12 flex flex-wrap">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Example`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
            let style = each_array_2[$$index_2];
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
