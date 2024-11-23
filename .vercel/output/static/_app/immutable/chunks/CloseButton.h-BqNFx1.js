const name = "CloseButton";
const props = [
  [
    "color",
    '"primary" | "secondary" | "gray" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose" | undefined',
    '"gray"'
  ],
  [
    "onclick",
    "() => void",
    ""
  ],
  [
    "name",
    "string",
    '"Close"'
  ],
  [
    "ariaLabel",
    "string",
    ""
  ],
  [
    "size",
    '"md" | "xs" | "sm" | "lg" | undefined',
    '"md"'
  ],
  [
    "href",
    "string",
    ""
  ],
  [
    "class",
    "string",
    ""
  ]
];
const CloseButton = {
  name,
  props
};
export {
  CloseButton as default,
  name,
  props
};
