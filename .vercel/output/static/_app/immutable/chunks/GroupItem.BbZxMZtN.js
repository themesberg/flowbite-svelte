const name = "GroupItem";
const props = [
  [
    "timelines",
    "interface GroupTimelineType {\n  name: string | HTMLElement;\n  src: string;\n  alt: string;\n  href?: string;\n  isPrivate?: boolean;\n  comment?: string | HTMLElement;\n}[]",
    ""
  ],
  [
    "aClass",
    "string",
    ""
  ],
  [
    "imgClass",
    "string",
    ""
  ],
  [
    "divClass",
    "string",
    ""
  ],
  [
    "titleClass",
    "string",
    ""
  ],
  [
    "spanClass",
    "string",
    ""
  ]
];
const GroupItem = {
  name,
  props
};
export {
  GroupItem as default,
  name,
  props
};
