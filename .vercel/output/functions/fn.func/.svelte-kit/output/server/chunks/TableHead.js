import { Q as push, R as setContext, W as attr, a0 as spread_attributes, S as pop, Y as ensure_array_like, V as escape_html, a1 as getContext } from "./index.js";
import { ai as table, aj as tablebodycell, ak as tablebodyrow, al as tableheadcell, am as tablehead } from "./theme.js";
function Table($$payload, $$props) {
  push();
  let {
    children,
    footerSlot,
    captionSlot,
    tableItems,
    divClass = "relative overflow-x-auto",
    striped,
    hoverable,
    noborder,
    shadow,
    color = "default",
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const { base, table: table$1 } = table({ color, shadow });
  let tableCtx = {
    get striped() {
      return striped;
    },
    get hoverable() {
      return hoverable;
    },
    get noborder() {
      return noborder;
    },
    get color() {
      return color;
    }
  };
  setContext("tableCtx", tableCtx);
  let headItems = [];
  let bodyItems = [];
  if (tableItems) {
    headItems = Object.keys(tableItems[0]).map((key) => ({
      text: key.charAt(0).toUpperCase() + key.slice(1)
    }));
    bodyItems = tableItems.map((item) => Object.values(item));
  }
  $$payload.out += `<div${attr("class", base({ class: divClass }))}><table${spread_attributes({
    ...restProps,
    class: table$1({ className })
  })}>`;
  if (captionSlot) {
    $$payload.out += "<!--[-->";
    captionSlot($$payload);
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if (tableItems) {
    $$payload.out += "<!--[-->";
    TableHead($$payload, { headItems });
    $$payload.out += `<!----> `;
    TableBody($$payload, { bodyItems });
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
    if (children) {
      $$payload.out += "<!--[-->";
      children($$payload);
      $$payload.out += `<!---->`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]-->`;
  if (footerSlot) {
    $$payload.out += "<!--[-->";
    footerSlot($$payload);
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></table></div>`;
  pop();
}
function TableBody($$payload, $$props) {
  push();
  let {
    children,
    bodyItems,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  function getCellValues(row) {
    if (Array.isArray(row)) {
      return row;
    } else {
      return Object.values(row);
    }
  }
  $$payload.out += `<tbody${spread_attributes({ ...restProps, class: className })}>`;
  if (bodyItems) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(bodyItems);
    $$payload.out += `<!--[-->`;
    for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
      let row = each_array[$$index_1];
      TableBodyRow($$payload, {
        children: ($$payload2) => {
          const each_array_1 = ensure_array_like(getCellValues(row));
          $$payload2.out += `<!--[-->`;
          for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
            let cellValue = each_array_1[$$index];
            TableBodyCell($$payload2, {
              children: ($$payload3) => {
                $$payload3.out += `<!---->${escape_html(cellValue ?? "")}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload2.out += `<!--]-->`;
        },
        $$slots: { default: true }
      });
    }
    $$payload.out += `<!--]-->`;
  } else {
    $$payload.out += "<!--[!-->";
    if (children) {
      $$payload.out += "<!--[-->";
      children($$payload);
      $$payload.out += `<!---->`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></tbody>`;
  pop();
}
function TableBodyCell($$payload, $$props) {
  push();
  let {
    children,
    class: className,
    colspan,
    onclick,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const base = tablebodycell({ className });
  $$payload.out += `<td${spread_attributes({
    ...restProps,
    class: base,
    colspan: colspan ?? 1
  })}>`;
  if (onclick) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<button>`;
    if (children) {
      $$payload.out += "<!--[-->";
      children($$payload);
      $$payload.out += `<!---->`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></button>`;
  } else {
    $$payload.out += "<!--[!-->";
    if (children) {
      $$payload.out += "<!--[-->";
      children($$payload);
      $$payload.out += `<!---->`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></td>`;
  pop();
}
function TableBodyRow($$payload, $$props) {
  push();
  let {
    children,
    class: className,
    color,
    striped,
    hoverable,
    noborder,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const tableCtx = getContext("tableCtx");
  let compoColor = color ? color : tableCtx.color || "default";
  let compoHoverable = hoverable ? hoverable : tableCtx.hoverable || false;
  let compoStriped = striped ? striped : tableCtx.striped || false;
  let compoNoborder = noborder ? noborder : tableCtx.noborder || false;
  const base = tablebodyrow({
    color: compoColor,
    hoverable: compoHoverable,
    striped: compoStriped,
    border: compoNoborder,
    className
  });
  $$payload.out += `<tr${spread_attributes({ ...restProps, class: base })}>`;
  if (children) {
    $$payload.out += "<!--[-->";
    children($$payload);
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></tr>`;
  pop();
}
function TableHeadCell($$payload, $$props) {
  push();
  let {
    children,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const base = tableheadcell({ className });
  $$payload.out += `<th${spread_attributes({ ...restProps, class: base })}>`;
  if (children) {
    $$payload.out += "<!--[-->";
    children($$payload);
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></th>`;
  pop();
}
function TableHead($$payload, $$props) {
  push();
  let {
    children,
    headerSlot,
    color,
    striped,
    noborder,
    class: className,
    headItems,
    defaultRow = true,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const tableCtx = getContext("tableCtx");
  let compoColor = color ? color : tableCtx.color || "default";
  let compoStriped = striped ? striped : tableCtx.striped || false;
  let compoNoborder = noborder ? noborder : tableCtx.noborder || false;
  const base = tablehead({
    color: compoColor,
    noborder: compoNoborder,
    striped: compoStriped,
    className
  });
  function getItemText(item) {
    if (typeof item === "object" && "text" in item) {
      return item.text;
    }
    return String(item);
  }
  $$payload.out += `<thead${spread_attributes({ ...restProps, class: base })}>`;
  if (headItems) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(headItems);
    if (headerSlot) {
      $$payload.out += "<!--[-->";
      headerSlot($$payload);
      $$payload.out += `<!---->`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> <!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let item = each_array[$$index];
      TableHeadCell($$payload, {
        children: ($$payload2) => {
          $$payload2.out += `<!---->${escape_html(getItemText(item))}`;
        },
        $$slots: { default: true }
      });
    }
    $$payload.out += `<!--]-->`;
  } else {
    $$payload.out += "<!--[!-->";
    if (children) {
      $$payload.out += "<!--[-->";
      if (defaultRow) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<tr>`;
        children($$payload);
        $$payload.out += `<!----></tr>`;
      } else {
        $$payload.out += "<!--[!-->";
        children($$payload);
        $$payload.out += `<!---->`;
      }
      $$payload.out += `<!--]-->`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></thead>`;
  pop();
}
export {
  Table as T,
  TableHead as a,
  TableHeadCell as b,
  TableBody as c,
  TableBodyRow as d,
  TableBodyCell as e
};
