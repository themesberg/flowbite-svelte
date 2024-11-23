const name = "EnhancedImg";
const props = [
  [
    "src",
    "any",
    ""
  ],
  [
    "href",
    "string",
    ""
  ],
  [
    "caption",
    "string",
    ""
  ],
  [
    "size",
    '"sm" | "md" | "lg" | "xl" | "2xl" | "none" | "xs" | "full" | undefined',
    ""
  ],
  [
    "alignment",
    '"left" | "center" | "right" | undefined',
    ""
  ],
  [
    "shadow",
    '"sm" | "md" | "lg" | "xl" | "2xl" | "none" | "regular" | "inner" | undefined',
    ""
  ],
  [
    "rounded",
    '"sm" | "md" | "lg" | "xl" | "2xl" | "full" | "none" | "regular" | "3xl" | undefined',
    ""
  ],
  [
    "figClass",
    "string",
    ""
  ],
  [
    "imgClass",
    "string",
    ""
  ],
  [
    "captionClass",
    "string",
    ""
  ]
];
const EnhancedImg = {
  name,
  props
};
export {
  EnhancedImg as default,
  name,
  props
};
