const name = "BottomNav";
const props = [
  [
    "children",
    "Snippet",
    ""
  ],
  [
    "header",
    "Snippet",
    ""
  ],
  [
    "position",
    '"static" | "fixed" | "absolute" | "relative" | "sticky" | undefined',
    '"fixed"'
  ],
  [
    "navType",
    '"border" | "application" | "group" | "default" | "pagination" | "card" | "meeting" | "video" | undefined',
    '"default"'
  ],
  [
    "outerClass",
    "string",
    ""
  ],
  [
    "innerClass",
    "string",
    ""
  ],
  [
    "activeClass",
    "string",
    ""
  ],
  [
    "activeUrl",
    "string",
    '""'
  ]
];
const BottomNav = {
  name,
  props
};
export {
  BottomNav as default,
  name,
  props
};
