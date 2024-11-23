const name = "Checkbox";
const props = [
  [
    "children",
    "Snippet",
    ""
  ],
  [
    "aria_describedby",
    "string",
    ""
  ],
  [
    "color",
    '"primary" | "secondary" | "gray" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose" | undefined',
    '"primary"'
  ],
  [
    "custom",
    "boolean",
    ""
  ],
  [
    "inline",
    "boolean",
    ""
  ],
  [
    "tinted",
    "boolean",
    ""
  ],
  [
    "rounded",
    "boolean",
    ""
  ],
  [
    "group",
    "(string | number)[]",
    "$bindable([])"
  ],
  [
    "choices",
    "{\n  value: string[]",
    "[]"
  ],
  [
    "checked",
    "any",
    "$bindable(false)"
  ],
  [
    "classLabel",
    "string",
    ""
  ],
  [
    "indeterminate",
    "boolean",
    ""
  ],
  [
    "class",
    "string",
    ""
  ]
];
const Checkbox = {
  name,
  props
};
export {
  Checkbox as default,
  name,
  props
};
