import { c as comment, a as append, t as template, b as text } from "./disclose-version.0TX42Q8e.js";
import { p as push, e as setContext, a6 as state, a7 as set, f as first_child, b as get, t as template_effect, a as pop, c as child, s as sibling, r as reset, d as derived, n as next, g as getContext } from "./runtime.BkfDdwap.js";
import { p as prop, b as proxy, i as if_block, r as rest_props } from "./props.B7eOu8hW.js";
import { s as snippet } from "./snippet.BDfn85k4.js";
import { b as set_class, a as set_attributes, ag as table, ah as TableBodyCell, ai as tablebodyrow, aj as tableheadcell, ak as tablehead } from "./theme.BtjZjf2R.js";
import { a as set_text } from "./store.B2xZ3Ft6.js";
import { e as each, i as index } from "./each.CtHIoDcm.js";
var root_2 = template(`<!> <!>`, 1);
var root$4 = template(`<div><table><!><!><!></table></div>`);
function Table($$anchor, $$props) {
  push($$props, true);
  let divClass = prop($$props, "divClass", 3, "relative overflow-x-auto"), color = prop($$props, "color", 3, "default"), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "footerSlot",
    "captionSlot",
    "tableItems",
    "divClass",
    "striped",
    "hoverable",
    "noborder",
    "shadow",
    "color",
    "class"
  ]);
  const $$d = derived(() => table({ color: color(), shadow: $$props.shadow })), base = derived(() => get($$d).base), table$1 = derived(() => get($$d).table);
  let tableCtx = {
    get striped() {
      return $$props.striped;
    },
    get hoverable() {
      return $$props.hoverable;
    },
    get noborder() {
      return $$props.noborder;
    },
    get color() {
      return color();
    }
  };
  setContext("tableCtx", tableCtx);
  let headItems = state(proxy([]));
  let bodyItems = state(proxy([]));
  if ($$props.tableItems) {
    set(headItems, proxy(Object.keys($$props.tableItems[0]).map((key) => ({
      text: key.charAt(0).toUpperCase() + key.slice(1)
    }))));
    set(bodyItems, proxy($$props.tableItems.map((item) => Object.values(item))));
  }
  var div = root$4();
  const class_derived = derived(() => get(base)({ class: divClass() }));
  var table_1 = child(div);
  let attributes;
  var node = child(table_1);
  if_block(node, () => $$props.captionSlot, ($$anchor2) => {
    var fragment = comment();
    var node_1 = first_child(fragment);
    snippet(node_1, () => $$props.captionSlot);
    append($$anchor2, fragment);
  });
  var node_2 = sibling(node);
  if_block(
    node_2,
    () => $$props.tableItems,
    ($$anchor2) => {
      var fragment_1 = root_2();
      var node_3 = first_child(fragment_1);
      TableHead(node_3, {
        get headItems() {
          return get(headItems);
        }
      });
      var node_4 = sibling(node_3, 2);
      TableBody(node_4, {
        get bodyItems() {
          return get(bodyItems);
        }
      });
      append($$anchor2, fragment_1);
    },
    ($$anchor2) => {
      var fragment_2 = comment();
      var node_5 = first_child(fragment_2);
      if_block(
        node_5,
        () => $$props.children,
        ($$anchor3) => {
          var fragment_3 = comment();
          var node_6 = first_child(fragment_3);
          snippet(node_6, () => $$props.children);
          append($$anchor3, fragment_3);
        },
        null,
        true
      );
      append($$anchor2, fragment_2);
    }
  );
  var node_7 = sibling(node_2);
  if_block(node_7, () => $$props.footerSlot, ($$anchor2) => {
    var fragment_4 = comment();
    var node_8 = first_child(fragment_4);
    snippet(node_8, () => $$props.footerSlot);
    append($$anchor2, fragment_4);
  });
  reset(table_1);
  reset(div);
  template_effect(() => {
    set_class(div, get(class_derived));
    attributes = set_attributes(table_1, attributes, {
      ...restProps,
      class: get(table$1)({ className: $$props.class })
    });
  });
  append($$anchor, div);
  pop();
}
var root$3 = template(`<tbody><!></tbody>`);
function TableBody($$anchor, $$props) {
  push($$props, true);
  let restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "bodyItems",
    "class"
  ]);
  function getCellValues(row) {
    if (Array.isArray(row)) {
      return row;
    } else {
      return Object.values(row);
    }
  }
  var tbody = root$3();
  let attributes;
  var node = child(tbody);
  if_block(
    node,
    () => $$props.bodyItems,
    ($$anchor2) => {
      var fragment = comment();
      var node_1 = first_child(fragment);
      each(node_1, 17, () => $$props.bodyItems, index, ($$anchor3, row) => {
        TableBodyRow($$anchor3, {
          children: ($$anchor4, $$slotProps) => {
            var fragment_2 = comment();
            var node_2 = first_child(fragment_2);
            each(node_2, 17, () => getCellValues(get(row)), index, ($$anchor5, cellValue) => {
              TableBodyCell($$anchor5, {
                children: ($$anchor6, $$slotProps2) => {
                  next();
                  var text$1 = text();
                  template_effect(() => set_text(text$1, get(cellValue) ?? ""));
                  append($$anchor6, text$1);
                },
                $$slots: { default: true }
              });
            });
            append($$anchor4, fragment_2);
          },
          $$slots: { default: true }
        });
      });
      append($$anchor2, fragment);
    },
    ($$anchor2) => {
      var fragment_5 = comment();
      var node_3 = first_child(fragment_5);
      if_block(
        node_3,
        () => $$props.children,
        ($$anchor3) => {
          var fragment_6 = comment();
          var node_4 = first_child(fragment_6);
          snippet(node_4, () => $$props.children);
          append($$anchor3, fragment_6);
        },
        null,
        true
      );
      append($$anchor2, fragment_5);
    }
  );
  reset(tbody);
  template_effect(() => attributes = set_attributes(tbody, attributes, { ...restProps, class: $$props.class }));
  append($$anchor, tbody);
  pop();
}
var root$2 = template(`<tr><!></tr>`);
function TableBodyRow($$anchor, $$props) {
  push($$props, true);
  let restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "class",
    "color",
    "striped",
    "hoverable",
    "noborder"
  ]);
  const tableCtx = getContext("tableCtx");
  let compoColor = derived(() => $$props.color ? $$props.color : tableCtx.color || "default");
  let compoHoverable = derived(() => $$props.hoverable ? $$props.hoverable : tableCtx.hoverable || false);
  let compoStriped = derived(() => $$props.striped ? $$props.striped : tableCtx.striped || false);
  let compoNoborder = derived(() => $$props.noborder ? $$props.noborder : tableCtx.noborder || false);
  const base = derived(() => tablebodyrow({
    color: get(compoColor),
    hoverable: get(compoHoverable),
    striped: get(compoStriped),
    border: get(compoNoborder),
    className: $$props.class
  }));
  var tr = root$2();
  let attributes;
  var node = child(tr);
  if_block(node, () => $$props.children, ($$anchor2) => {
    var fragment = comment();
    var node_1 = first_child(fragment);
    snippet(node_1, () => $$props.children);
    append($$anchor2, fragment);
  });
  reset(tr);
  template_effect(() => attributes = set_attributes(tr, attributes, { ...restProps, class: get(base) }));
  append($$anchor, tr);
  pop();
}
var root$1 = template(`<th><!></th>`);
function TableHeadCell($$anchor, $$props) {
  push($$props, true);
  let restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "class"
  ]);
  const base = derived(() => tableheadcell({ className: $$props.class }));
  var th = root$1();
  let attributes;
  var node = child(th);
  if_block(node, () => $$props.children, ($$anchor2) => {
    var fragment = comment();
    var node_1 = first_child(fragment);
    snippet(node_1, () => $$props.children);
    append($$anchor2, fragment);
  });
  reset(th);
  template_effect(() => attributes = set_attributes(th, attributes, { ...restProps, class: get(base) }));
  append($$anchor, th);
  pop();
}
var root_1 = template(`<!> <!>`, 1);
var root_7 = template(`<tr><!></tr>`);
var root = template(`<thead><!></thead>`);
function TableHead($$anchor, $$props) {
  push($$props, true);
  let defaultRow = prop($$props, "defaultRow", 3, true), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "headerSlot",
    "color",
    "striped",
    "noborder",
    "class",
    "headItems",
    "defaultRow"
  ]);
  const tableCtx = getContext("tableCtx");
  let compoColor = derived(() => $$props.color ? $$props.color : tableCtx.color || "default");
  let compoStriped = derived(() => $$props.striped ? $$props.striped : tableCtx.striped || false);
  let compoNoborder = derived(() => $$props.noborder ? $$props.noborder : tableCtx.noborder || false);
  const base = derived(() => tablehead({
    color: get(compoColor),
    noborder: get(compoNoborder),
    striped: get(compoStriped),
    className: $$props.class
  }));
  function getItemText(item) {
    if (typeof item === "object" && "text" in item) {
      return item.text;
    }
    return String(item);
  }
  var thead = root();
  let attributes;
  var node = child(thead);
  if_block(
    node,
    () => $$props.headItems,
    ($$anchor2) => {
      var fragment = root_1();
      var node_1 = first_child(fragment);
      if_block(node_1, () => $$props.headerSlot, ($$anchor3) => {
        var fragment_1 = comment();
        var node_2 = first_child(fragment_1);
        snippet(node_2, () => $$props.headerSlot);
        append($$anchor3, fragment_1);
      });
      var node_3 = sibling(node_1, 2);
      each(node_3, 17, () => $$props.headItems, index, ($$anchor3, item) => {
        TableHeadCell($$anchor3, {
          children: ($$anchor4, $$slotProps) => {
            next();
            var text$1 = text();
            template_effect(() => set_text(text$1, getItemText(get(item))));
            append($$anchor4, text$1);
          },
          $$slots: { default: true }
        });
      });
      append($$anchor2, fragment);
    },
    ($$anchor2) => {
      var fragment_4 = comment();
      var node_4 = first_child(fragment_4);
      if_block(
        node_4,
        () => $$props.children,
        ($$anchor3) => {
          var fragment_5 = comment();
          var node_5 = first_child(fragment_5);
          if_block(
            node_5,
            defaultRow,
            ($$anchor4) => {
              var tr = root_7();
              var node_6 = child(tr);
              snippet(node_6, () => $$props.children);
              reset(tr);
              append($$anchor4, tr);
            },
            ($$anchor4) => {
              var fragment_6 = comment();
              var node_7 = first_child(fragment_6);
              snippet(node_7, () => $$props.children);
              append($$anchor4, fragment_6);
            }
          );
          append($$anchor3, fragment_5);
        },
        null,
        true
      );
      append($$anchor2, fragment_4);
    }
  );
  reset(thead);
  template_effect(() => attributes = set_attributes(thead, attributes, { ...restProps, class: get(base) }));
  append($$anchor, thead);
  pop();
}
export {
  Table as T,
  TableHead as a,
  TableHeadCell as b,
  TableBody as c,
  TableBodyRow as d
};
