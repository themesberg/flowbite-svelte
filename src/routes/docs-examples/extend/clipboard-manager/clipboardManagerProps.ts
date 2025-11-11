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
    description: "Input placeholder text"
  },
  {
    prop: "saveLabel",
    type: "string",
    default: '"Save"',
    description: "Label for the save button"
  },
  {
    prop: "clearLabel",
    type: "string",
    default: '"Clear All"',
    description: "Label for the clear all button"
  },
  {
    prop: "limit",
    type: "number",
    default: "20",
    description: "Maximum number of clipboard items to store"
  },
  {
    prop: "saveToStorage",
    type: "boolean",
    default: "true",
    description: "Whether to persist clipboard items to localStorage"
  },
  {
    prop: "toastDuration",
    type: "number",
    default: "2000",
    description: "Duration in milliseconds to show toast notifications"
  },
  {
    prop: "filterSensitive",
    type: "boolean",
    default: "true",
    description: "Whether to filter out sensitive data (credit cards, passwords, etc.)"
  },
  {
    prop: "maxLength",
    type: "number",
    default: "10000",
    description: "Maximum character length for clipboard items"
  },
  {
    prop: "enableSelectionMenu",
    type: "boolean",
    default: "false",
    description: "Enable text selection menu for saving selected text"
  },
  {
    prop: "selectionTarget",
    type: "string",
    default: '"body"',
    description: "CSS selector for elements where selection menu should be enabled"
  },
  {
    prop: "showInput",
    type: "boolean",
    default: "true",
    description: "Whether to show the input field for adding new clipboard items"
  },
  {
    prop: "class",
    type: "ClassValue",
    default: '""',
    description: "Additional CSS classes for the component container"
  },
  {
    prop: "classes",
    type: "ClipboardManagerVariants",
    default: "undefined",
    description: "Object containing CSS classes for component parts"
  },
  {
    prop: "storageKey",
    type: "string",
    default: "undefined",
    description: "Custom localStorage key (defaults to 'flowbite-clipboard-manager')"
  },
  {
    prop: "open",
    type: "boolean",
    default: "undefined",
    description: "Control modal state. If undefined, renders inline; if defined, renders as modal"
  },
  {
    prop: "badgeProps",
    type: "Omit<BadgeProps, 'children'>",
    default: "{ color: 'blue', class: 'text-xs' }",
    description: "Props to pass to the pinned badge component"
  },
  {
    prop: "modalProps",
    type: "ModalProps",
    default: "undefined",
    description: "Props to pass to the modal component when rendering as modal"
  },
  {
    prop: "detectSensitiveData",
    type: "(text: string) => boolean",
    default: "undefined",
    description: "Custom function to detect sensitive data. Overrides default detection"
  },
  {
    prop: "children",
    type: "Snippet",
    default: "undefined",
    description: "Custom render function for clipboard items. Receives item, copyItem, deleteItem, and togglePin"
  },
  {
    prop: "emptyState",
    type: "Snippet",
    default: "undefined",
    description: "Custom render function for the empty state"
  }
];