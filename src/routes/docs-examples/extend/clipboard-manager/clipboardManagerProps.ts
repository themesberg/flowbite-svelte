export const clipboardManagerProps = [
  {
    prop: "items",
    type: "ClipboardItem[]",
    default: "[]",
    description: "Initial clipboard items"
  },
  {
    prop: "placeholder",
    type: "string",
    default: '"Type and save to clipboard"',
    description: "Input placeholder"
  },
  {
    prop: "saveLabel",
    type: "string",
    default: '"Save"',
    description: "Save button label"
  },
  {
    prop: "clearLabel",
    type: "string",
    default: '"Clear All"',
    description: "Clear button label"
  },
  {
    prop: "limit",
    type: "number",
    default: "20",
    description: "Max items to store"
  },
  {
    prop: "saveToStorage",
    type: "boolean",
    default: "true",
    description: "Persist items to localStorage"
  },
  {
    prop: "toastDuration",
    type: "number",
    default: "2000",
    description: "Toast duration (ms)"
  },
  {
    prop: "filterSensitive",
    type: "boolean",
    default: "true",
    description: "Block sensitive data"
  },
  {
    prop: "maxLength",
    type: "number",
    default: "10000",
    description: "Max chars per item"
  },
  {
    prop: "enableSelectionMenu",
    type: "boolean",
    default: "false",
    description: "Show selection bubble"
  },
  {
    prop: "selectionTarget",
    type: "string",
    default: '"body"',
    description: "Selection menu target"
  },
  {
    prop: "showInput",
    type: "boolean",
    default: "true",
    description: "Show input field"
  },
  {
    prop: "class",
    type: "string",
    default: '""',
    description: "Additional classes"
  },
  {
    prop: "storageKey",
    type: "string | undefined",
    default: "undefined",
    description: "localStorage key"
  },
  {
    prop: "children",
    type: "Snippet | undefined",
    default: "undefined",
    description: "Custom item renderer"
  },
  {
    prop: "empty",
    type: "Snippet | undefined",
    default: "undefined",
    description: "Custom empty state"
  },
  {
    prop: "open",
    type: "boolean | undefined",
    default: "undefined",
    description: "Modal state (bindable)"
  }
]