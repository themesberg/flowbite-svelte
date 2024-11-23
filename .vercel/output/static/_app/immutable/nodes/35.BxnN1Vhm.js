import { c as comment, a as append, t as template, b as text } from "../chunks/disclose-version.0TX42Q8e.js";
import { p as push, e as setContext, c as child, s as sibling, r as reset, f as first_child, t as template_effect, a as pop, n as next, b as get, a7 as set, a6 as state, d as derived, u as user_effect } from "../chunks/runtime.BkfDdwap.js";
import { a as set_text } from "../chunks/store.B2xZ3Ft6.js";
import { e as each, i as index } from "../chunks/each.CtHIoDcm.js";
import { p as prop, i as if_block, r as rest_props, b as proxy, c as component } from "../chunks/props.B7eOu8hW.js";
import { t as twMerge, b as set_class, x as remove_input_defaults, z as bind_value, c as set_svg_class, s as set_attribute, a as set_attributes, ah as TableBodyCell, ag as table, V as uiHelpers } from "../chunks/theme.BtjZjf2R.js";
import { B as Button } from "../chunks/markdown.Ba9FtS5g.js";
import { T as Table, a as TableHead, c as TableBody, b as TableHeadCell, d as TableBodyRow } from "../chunks/TableHead.CXrqw3Md.js";
import { C as CompoAttributesViewer, L as Label, R as Radio } from "../chunks/CompoAttributesViewer.HsPJjrMu.js";
import { D as DynamicCodeBlockHighlight } from "../chunks/DynamicCodeBlockHighlight.BS23lgW_.js";
import { H as HighlightCompo } from "../chunks/HighlightCompo.D1kgIYBY.js";
import { C as CodeWrapper } from "../chunks/CodeWrapper.CdoIAYb8.js";
import { H as H1 } from "../chunks/H1.DunGd_Oq.js";
import { H as H2 } from "../chunks/H2.qsp5CBkK.js";
import { g as getExampleFileName, i as isGeneratedCodeOverflow, d as isSvelteOverflow } from "../chunks/helpers.B9KbZW0W.js";
import "../chunks/legacy.DvF4DOPZ.js";
import { C as Checkbox } from "../chunks/Checkbox.CJJZSeRG.js";
import { s as snippet } from "../chunks/snippet.BDfn85k4.js";
var root$1 = template(`<div><div><label for="table-search" class="sr-only">Search</label> <div><div><svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg></div> <input type="text" id="table-search"></div> <!></div> <table><!></table> <!></div>`);
function TableSearch($$anchor, $$props) {
  push($$props, true);
  let divClass = prop($$props, "divClass", 3, "relative overflow-x-auto shadow-md sm:rounded-lg"), inputValue = prop($$props, "inputValue", 15), customColor = prop($$props, "customColor", 3, ""), color = prop($$props, "color", 3, "default"), innerDivClass = prop($$props, "innerDivClass", 3, "p-4"), searchClass = prop($$props, "searchClass", 3, "relative mt-1"), svgClass = prop($$props, "svgClass", 3, "w-5 h-5 text-gray-500 dark:text-gray-400"), tableClass = prop($$props, "tableClass", 3, "w-full text-left text-sm"), placeholder = prop($$props, "placeholder", 3, "Search"), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "header",
    "footer",
    "divClass",
    "inputValue",
    "striped",
    "hoverable",
    "customColor",
    "color",
    "innerDivClass",
    "inputClass",
    "searchClass",
    "svgDivClass",
    "svgClass",
    "tableClass",
    "class",
    "placeholder"
  ]);
  let inputCls = twMerge("bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 ps-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", $$props.inputClass);
  let svgDivCls = twMerge("absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none", $$props.svgDivClass);
  const colors = {
    default: "text-gray-500 dark:text-gray-400",
    blue: "text-blue-100 dark:text-blue-100",
    green: "text-green-100 dark:text-green-100",
    red: "text-red-100 dark:text-red-100",
    yellow: "text-yellow-100 dark:text-yellow-100",
    purple: "text-purple-100 dark:text-purple-100",
    indigo: "text-indigo-100 dark:text-indigo-100",
    pink: "text-pink-100 dark:text-pink-100",
    custom: customColor()
  };
  const tableSearchCtx = {
    striped: $$props.striped,
    hoverable: $$props.hoverable,
    color: color()
  };
  setContext("tableCtx", tableSearchCtx);
  var div = root$1();
  var div_1 = child(div);
  var div_2 = sibling(child(div_1), 2);
  var div_3 = child(div_2);
  set_class(div_3, svgDivCls);
  var svg = child(div_3);
  reset(div_3);
  var input = sibling(div_3, 2);
  remove_input_defaults(input);
  set_class(input, inputCls);
  reset(div_2);
  var node = sibling(div_2, 2);
  if_block(node, () => $$props.header, ($$anchor2) => {
    var fragment = comment();
    var node_1 = first_child(fragment);
    snippet(node_1, () => $$props.header);
    append($$anchor2, fragment);
  });
  reset(div_1);
  var table2 = sibling(div_1, 2);
  let attributes;
  var node_2 = child(table2);
  if_block(node_2, () => $$props.children, ($$anchor2) => {
    var fragment_1 = comment();
    var node_3 = first_child(fragment_1);
    snippet(node_3, () => $$props.children);
    append($$anchor2, fragment_1);
  });
  reset(table2);
  var node_4 = sibling(table2, 2);
  if_block(node_4, () => $$props.footer, ($$anchor2) => {
    var fragment_2 = comment();
    var node_5 = first_child(fragment_2);
    snippet(node_5, () => $$props.footer);
    append($$anchor2, fragment_2);
  });
  reset(div);
  template_effect(() => {
    set_class(div, divClass());
    set_class(div_1, innerDivClass());
    set_class(div_2, searchClass());
    set_svg_class(svg, svgClass());
    set_attribute(input, "placeholder", placeholder());
    attributes = set_attributes(table2, attributes, {
      ...restProps,
      class: twMerge(tableClass(), colors[color()], $$props.class)
    });
  });
  bind_value(input, inputValue);
  append($$anchor, div);
  pop();
}
const __vite_glob_0_0 = '<script lang="ts">\n  import { Table, TableHead, TableHeadCell, TableBody, TableBodyRow, TableBodyCell } from "$lib";\n<\/script>\n\n<Table hoverable>\n  <TableHead>\n    <TableHeadCell>Product name</TableHeadCell>\n    <TableHeadCell>Color</TableHeadCell>\n    <TableHeadCell>Category</TableHeadCell>\n    <TableHeadCell>Price</TableHeadCell>\n    <TableHeadCell>\n      <span class="sr-only">Edit</span>\n    </TableHeadCell>\n  </TableHead>\n  <TableBody class="divide-y">\n    <TableBodyRow>\n      <TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>\n      <TableBodyCell>Sliver</TableBodyCell>\n      <TableBodyCell>Laptop</TableBodyCell>\n      <TableBodyCell>$2999</TableBodyCell>\n      <TableBodyCell>\n        <a href="/tables" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Edit</a>\n      </TableBodyCell>\n    </TableBodyRow>\n    <TableBodyRow>\n      <TableBodyCell>Microsoft Surface Pro</TableBodyCell>\n      <TableBodyCell>White</TableBodyCell>\n      <TableBodyCell>Laptop PC</TableBodyCell>\n      <TableBodyCell>$1999</TableBodyCell>\n      <TableBodyCell>\n        <a href="/tables" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Edit</a>\n      </TableBodyCell>\n    </TableBodyRow>\n    <TableBodyRow>\n      <TableBodyCell>Magic Mouse 2</TableBodyCell>\n      <TableBodyCell>Black</TableBodyCell>\n      <TableBodyCell>Accessories</TableBodyCell>\n      <TableBodyCell>$99</TableBodyCell>\n      <TableBodyCell>\n        <a href="/tables" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Edit</a>\n      </TableBodyCell>\n    </TableBodyRow>\n    <TableBodyRow>\n      <TableBodyCell>Google Pixel Phone</TableBodyCell>\n      <TableBodyCell>Gray</TableBodyCell>\n      <TableBodyCell>Phone</TableBodyCell>\n      <TableBodyCell>$799</TableBodyCell>\n      <TableBodyCell>\n        <a href="/tables" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Edit</a>\n      </TableBodyCell>\n    </TableBodyRow>\n    <TableBodyRow>\n      <TableBodyCell>Apple Watch 5</TableBodyCell>\n      <TableBodyCell>Red</TableBodyCell>\n      <TableBodyCell>Wearables</TableBodyCell>\n      <TableBodyCell>$999</TableBodyCell>\n      <TableBodyCell>\n        <a href="/tables" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Edit</a>\n      </TableBodyCell>\n    </TableBodyRow>\n  </TableBody>\n</Table>\n';
const __vite_glob_0_1 = '<script lang="ts">\n  import { Table, TableHead, TableHeadCell, TableBody, TableBodyRow, TableBodyCell, Checkbox } from "$lib";\n<\/script>\n\n<Table hoverable={true}>\n  <TableHead>\n    <TableHeadCell class="!p-4">\n      <Checkbox />\n    </TableHeadCell>\n    <TableHeadCell>Product name</TableHeadCell>\n    <TableHeadCell>Color</TableHeadCell>\n    <TableHeadCell>Category</TableHeadCell>\n    <TableHeadCell>Price</TableHeadCell>\n    <TableHeadCell>\n      <span class="sr-only">Edit</span>\n    </TableHeadCell>\n  </TableHead>\n  <TableBody class="divide-y">\n    <TableBodyRow>\n      <TableBodyCell class="!p-4">\n        <Checkbox />\n      </TableBodyCell>\n      <TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>\n      <TableBodyCell>Sliver</TableBodyCell>\n      <TableBodyCell>Laptop</TableBodyCell>\n      <TableBodyCell>$2999</TableBodyCell>\n      <TableBodyCell>\n        <a href="/components/table" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Edit</a>\n      </TableBodyCell>\n    </TableBodyRow>\n    <TableBodyRow>\n      <TableBodyCell class="!p-4">\n        <Checkbox />\n      </TableBodyCell>\n      <TableBodyCell>Microsoft Surface Pro</TableBodyCell>\n      <TableBodyCell>White</TableBodyCell>\n      <TableBodyCell>Laptop PC</TableBodyCell>\n      <TableBodyCell>$1999</TableBodyCell>\n      <TableBodyCell>\n        <a href="/components/table" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Edit</a>\n      </TableBodyCell>\n    </TableBodyRow>\n    <TableBodyRow>\n      <TableBodyCell class="!p-4">\n        <Checkbox />\n      </TableBodyCell>\n      <TableBodyCell>Magic Mouse 2</TableBodyCell>\n      <TableBodyCell>Black</TableBodyCell>\n      <TableBodyCell>Accessories</TableBodyCell>\n      <TableBodyCell>$99</TableBodyCell>\n      <TableBodyCell>\n        <a href="/components/table" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Edit</a>\n      </TableBodyCell>\n    </TableBodyRow>\n  </TableBody>\n</Table>\n';
const __vite_glob_0_2 = `<script lang="ts">
  import { slide } from "svelte/transition";
  import { Table, TableHead, TableHeadCell, TableBody, TableBodyRow, TableBodyCell, ImagePlaceholder } from "$lib";
  const items2 = [
    {
      name: 'Apple MacBook Pro 17"',
      color: "Sliver",
      type: "Laptop",
      price: "$2999"
    },
    {
      name: "Microsoft Surface Pro",
      color: "White",
      type: "Laptop PC",
      price: "$1999"
    },
    {
      name: "Magic Mouse 2",
      color: "Black",
      type: "Accessories",
      price: "$99"
    }
  ];

  let openRow = $state();
  const toggleRow = (i: number) => {
    openRow = openRow === i ? null : i;
  };
<\/script>

<Table>
  <TableHead>
    <TableHeadCell>Product name</TableHeadCell>
    <TableHeadCell>Color</TableHeadCell>
    <TableHeadCell>Category</TableHeadCell>
    <TableHeadCell>Price</TableHeadCell>
  </TableHead>
  <TableBody class="divide-y">
    {#each items2 as item, i}
      <TableBodyRow onclick={() => toggleRow(i)}>
        <TableBodyCell>{item.name}</TableBodyCell>
        <TableBodyCell>{item.color}</TableBodyCell>
        <TableBodyCell>{item.type}</TableBodyCell>
        <TableBodyCell>{item.price}</TableBodyCell>
      </TableBodyRow>
      {#if openRow === i}
        <TableBodyRow ondblclick={() => console.log("double click")}>
          <TableBodyCell colspan={4} class="p-0">
            <div class="px-2 py-3" transition:slide={{ duration: 300, axis: "y" }}>
              <ImagePlaceholder />
            </div>
          </TableBodyCell>
        </TableBodyRow>
      {/if}
    {/each}
  </TableBody>
</Table>
`;
const __vite_glob_0_3 = `<script lang="ts">
  import { Table } from "$lib";
  const tableItems = [
    { name: 'Apple MacBook Pro 17"', qty: "1", price: "$2999" },
    { name: "Microsoft Surface Pro", qty: "1", price: "$1999" },
    { name: "Magic Mouse 2", qty: "1", price: "$99" }
  ];
<\/script>

<Table {tableItems} hoverable>
  {#snippet footerSlot()}
    <tfoot>
      <tr class="font-semibold text-gray-900 dark:text-white">
        <th scope="row" class="px-6 py-3 text-base">Total</th>
        <td class="px-6 py-3">3</td>
        <td class="px-6 py-3">$5,097</td>
      </tr>
    </tfoot>
  {/snippet}
</Table>
`;
const __vite_glob_0_4 = `<script lang="ts">
  import { Table, TableHead, TableBody } from "$lib";
  const headItems = ["Name", "Color", "Type", "Price"];
  const bodyItems = [
    ['Apple MacBook Pro 17"', "Sliver", "Laptop", "$2999"],
    ["Microsoft Surface Pro", "White", "Laptop PC", "$1999"],
    ["Magic Mouse 2", "Black", "Accessories", "$99"],
    ["Google Pixel Phone", "Gray", "Phone", "$799"],
    ["Apple Watch 5", "Red", "Wearables", "$999"]
  ];
<\/script>

<Table hoverable>
  <TableHead {headItems} />
  <TableBody {bodyItems} />
</Table>
`;
const __vite_glob_0_5 = `<script lang="ts">
  import { Table, TableHead, TableHeadCell, TableBody } from "$lib";
  const headItems = ["Brand", "Name", "Color", "Type", "Price"];
  const bodyItems = [
    ["Apple", 'MacBook Pro 17"', "Sliver", "Laptop", "$2999"],
    ["Microsoft", "Surface Pro", "White", "Laptop PC", "$1999"],
    ["Apple", "Magic Mouse 2", "Black", "Accessories", "$99"],
    ["Google", " Pixel Phone", "Gray", "Phone", "$799"],
    ["Apple", "Watch 5", "Red", "Wearables", "$999"]
  ];
<\/script>

<Table>
  <TableHead {headItems} defaultRow={false}>
    {#snippet headerSlot()}
      <tr>
        <TableHeadCell colspan={2}>Product</TableHeadCell>
        <TableHeadCell colspan={3}>Info</TableHeadCell>
      </tr>
    {/snippet}
  </TableHead>
  <TableBody {bodyItems} />
</Table>
`;
const __vite_glob_0_6 = `<script lang="ts">
  import { Table } from "$lib";
  const tableItems = [
    { name: 'Apple MacBook Pro 17"', color: "Sliver", type: "Laptop", price: "$2999" },
    { name: "Microsoft Surface Pro", color: "White", type: "Laptop PC", price: "$1999" },
    { name: "Magic Mouse 2", color: "Black", type: "Accessories", price: "$99" },
    { name: "Google Pixel Phone", color: "Gray", type: "Phone", price: "$799" },
    { name: "Apple Watch 5", color: "Red", type: "Wearables", price: "$999" }
  ];
<\/script>

<Table {tableItems} hoverable />
`;
const __vite_glob_0_7 = `<script lang="ts">
  import { Table } from "$lib";
  const tableItems = [
    { name: 'Apple MacBook Pro 17"', color: "Sliver", type: "Laptop", price: "$2999" },
    { name: "Microsoft Surface Pro", color: "White", type: "Laptop PC", price: "$1999" },
    { name: "Magic Mouse 2", color: "Black", type: "Accessories", price: "$99" },
    { name: "Google Pixel Phone", color: "Gray", type: "Phone", price: "$799" },
    { name: "Apple Watch 5", color: "Red", type: "Wearables", price: "$999" }
  ];
<\/script>

<Table {tableItems} noborder />
`;
const __vite_glob_0_8 = `<script lang="ts">
  import { Table } from "$lib";
  const tableItems = [
    { name: 'Apple MacBook Pro 17"', color: "Sliver", category: "Laptop", accessories: "Yes", available: "Yes", price: "$2999", weight: "2.3kg", qty: "1" },
    { name: "Microsoft Surface Pro", color: "White", category: "Laptop PC", accessories: "No", available: "Yes", price: "$1999", weight: "1.8kg", qty: "1" },
    { name: "Magic Mouse 2", color: "Black", category: "Accessories", accessories: "Yes", available: "No", price: "$99", weight: "0.6kg", qty: "2" }
  ];
<\/script>

<Table {tableItems} />
`;
const __vite_glob_0_9 = '<script lang="ts">\n  import { TableSearch, TableHead, TableBody, TableBodyRow, TableBodyCell } from "$lib";\n  const headItems = ["ID", "Maker", "Type", "Make"];\n  let searchTerm = $state("");\n  let items = [\n    { id: 1, maker: "Toyota", type: "ABC", make: 2017 },\n    { id: 2, maker: "Ford", type: "CDE", make: 2018 },\n    { id: 3, maker: "Volvo", type: "FGH", make: 2019 },\n    { id: 4, maker: "Saab", type: "IJK", make: 2020 }\n  ];\n  let filteredItems = $derived(items.filter((item) => item.maker.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1));\n<\/script>\n\n<TableSearch placeholder="Search by maker name" hoverable={true} bind:inputValue={searchTerm}>\n  <TableHead {headItems} />\n  <TableBody>\n    {#each filteredItems as item}\n      <TableBodyRow>\n        <TableBodyCell>{item.id}</TableBodyCell>\n        <TableBodyCell>{item.maker}</TableBodyCell>\n        <TableBodyCell>{item.type}</TableBodyCell>\n        <TableBodyCell>{item.make}</TableBodyCell>\n      </TableBodyRow>\n    {/each}\n  </TableBody>\n</TableSearch>\n';
const __vite_glob_0_10 = `<script>
  import { Table } from "$lib";
  const tableItems = [
    { name: 'Apple MacBook Pro 17"', color: "Sliver", type: "Laptop", price: "$2999" },
    { name: "Microsoft Surface Pro", color: "White", type: "Laptop PC", price: "$1999" },
    { name: "Magic Mouse 2", color: "Black", type: "Accessories", price: "$99" },
    { name: "Google Pixel Phone", color: "Gray", type: "Phone", price: "$799" },
    { name: "Apple Watch 5", color: "Red", type: "Wearables", price: "$999" }
  ];
<\/script>
`;
const __vite_glob_0_11 = `<script lang="ts">
  import { Table } from "$lib";
  const tableItems = [
    { name: 'Apple MacBook Pro 17"', color: "Sliver", type: "Laptop", price: "$2999" },
    { name: "Microsoft Surface Pro", color: "White", type: "Laptop PC", price: "$1999" },
    { name: "Magic Mouse 2", color: "Black", type: "Accessories", price: "$99" },
    { name: "Google Pixel Phone", color: "Gray", type: "Phone", price: "$799" },
    { name: "Apple Watch 5", color: "Red", type: "Wearables", price: "$999" }
  ];
<\/script>

<Table {tableItems} shadow />
`;
const __vite_glob_0_12 = `<script lang="ts">
  import { Table } from "$lib";
  const tableItems = [
    { name: 'Apple MacBook Pro 17"', color: "Sliver", type: "Laptop", price: "$2999" },
    { name: "Microsoft Surface Pro", color: "White", type: "Laptop PC", price: "$1999" },
    { name: "Magic Mouse 2", color: "Black", type: "Accessories", price: "$99" },
    { name: "Google Pixel Phone", color: "Gray", type: "Phone", price: "$799" },
    { name: "Apple Watch 5", color: "Red", type: "Wearables", price: "$999" }
  ];
<\/script>

<Table {tableItems} striped />
`;
const __vite_glob_0_13 = `<script lang="ts">
  import { Table, TableHead, TableBody } from "$lib";
  const headItems = ["Brand", "Name", "Color", "Type", "Price"];
  const bodyItems = [
    ["Apple", 'MacBook Pro 17"', "Sliver", "Laptop", "$2999"],
    ["Microsoft", "Surface Pro", "White", "Laptop PC", "$1999"],
    ["Apple", "Magic Mouse 2", "Black", "Accessories", "$99"],
    ["Google", " Pixel Phone", "Gray", "Phone", "$799"],
    ["Apple", "Watch 5", "Red", "Wearables", "$999"]
  ];
<\/script>

<Table>
  {#snippet captionSlot()}
    <caption class="bg-white p-5 text-left text-lg font-semibold text-gray-900 dark:bg-gray-800 dark:text-white">
      Our products
      <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.</p>
    </caption>
  {/snippet}
  <TableHead {headItems} />
  <TableBody {bodyItems} />
</Table>
`;
const __vite_glob_0_14 = `<script lang="ts">
  import { Table } from "$lib";
  const tableItems = [
    { name: 'Apple MacBook Pro 17"', color: "Sliver", type: "Laptop", price: "$2999" },
    { name: "Microsoft Surface Pro", color: "White", type: "Laptop PC", price: "$1999" },
    { name: "Magic Mouse 2", color: "Black", type: "Accessories", price: "$99" },
    { name: "Google Pixel Phone", color: "Gray", type: "Phone", price: "$799" },
    { name: "Apple Watch 5", color: "Red", type: "Wearables", price: "$999" }
  ];
<\/script>

<Table {tableItems} hoverable />
`;
var root_1$6 = template(`<!> <!>`, 1);
function HeadBodyItems($$anchor) {
  const headItems = ["Name", "Color", "Type", "Price"];
  const bodyItems = [
    [
      'Apple MacBook Pro 17"',
      "Sliver",
      "Laptop",
      "$2999"
    ],
    [
      "Microsoft Surface Pro",
      "White",
      "Laptop PC",
      "$1999"
    ],
    [
      "Magic Mouse 2",
      "Black",
      "Accessories",
      "$99"
    ],
    [
      "Google Pixel Phone",
      "Gray",
      "Phone",
      "$799"
    ],
    ["Apple Watch 5", "Red", "Wearables", "$999"]
  ];
  Table($$anchor, {
    hoverable: true,
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1$6();
      var node = first_child(fragment_1);
      TableHead(node, { headItems });
      var node_1 = sibling(node, 2);
      TableBody(node_1, { bodyItems });
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
}
function TableItems($$anchor) {
  const tableItems = [
    {
      name: 'Apple MacBook Pro 17"',
      color: "Sliver",
      type: "Laptop",
      price: "$2999"
    },
    {
      name: "Microsoft Surface Pro",
      color: "White",
      type: "Laptop PC",
      price: "$1999"
    },
    {
      name: "Magic Mouse 2",
      color: "Black",
      type: "Accessories",
      price: "$99"
    },
    {
      name: "Google Pixel Phone",
      color: "Gray",
      type: "Phone",
      price: "$799"
    },
    {
      name: "Apple Watch 5",
      color: "Red",
      type: "Wearables",
      price: "$999"
    }
  ];
  Table($$anchor, { tableItems, hoverable: true });
}
var root_7 = template(`<span class="sr-only">Edit</span>`);
var root_2$3 = template(`<!> <!> <!> <!> <!>`, 1);
var root_14 = template(`<a href="/tables" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Edit</a>`);
var root_9$1 = template(`<!> <!> <!> <!> <!>`, 1);
var root_20 = template(`<a href="/tables" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Edit</a>`);
var root_15$1 = template(`<!> <!> <!> <!> <!>`, 1);
var root_26 = template(`<a href="/tables" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Edit</a>`);
var root_21 = template(`<!> <!> <!> <!> <!>`, 1);
var root_32 = template(`<a href="/tables" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Edit</a>`);
var root_27 = template(`<!> <!> <!> <!> <!>`, 1);
var root_38 = template(`<a href="/tables" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Edit</a>`);
var root_33 = template(`<!> <!> <!> <!> <!>`, 1);
var root_8$1 = template(`<!> <!> <!> <!> <!>`, 1);
var root_1$5 = template(`<!> <!>`, 1);
function Cells($$anchor) {
  Table($$anchor, {
    hoverable: true,
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1$5();
      var node = first_child(fragment_1);
      TableHead(node, {
        children: ($$anchor3, $$slotProps2) => {
          var fragment_2 = root_2$3();
          var node_1 = first_child(fragment_2);
          TableHeadCell(node_1, {
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text$1 = text("Product name");
              append($$anchor4, text$1);
            },
            $$slots: { default: true }
          });
          var node_2 = sibling(node_1, 2);
          TableHeadCell(node_2, {
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_1 = text("Color");
              append($$anchor4, text_1);
            },
            $$slots: { default: true }
          });
          var node_3 = sibling(node_2, 2);
          TableHeadCell(node_3, {
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_2 = text("Category");
              append($$anchor4, text_2);
            },
            $$slots: { default: true }
          });
          var node_4 = sibling(node_3, 2);
          TableHeadCell(node_4, {
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_3 = text("Price");
              append($$anchor4, text_3);
            },
            $$slots: { default: true }
          });
          var node_5 = sibling(node_4, 2);
          TableHeadCell(node_5, {
            children: ($$anchor4, $$slotProps3) => {
              var span = root_7();
              append($$anchor4, span);
            },
            $$slots: { default: true }
          });
          append($$anchor3, fragment_2);
        },
        $$slots: { default: true }
      });
      var node_6 = sibling(node, 2);
      TableBody(node_6, {
        class: "divide-y",
        children: ($$anchor3, $$slotProps2) => {
          var fragment_3 = root_8$1();
          var node_7 = first_child(fragment_3);
          TableBodyRow(node_7, {
            children: ($$anchor4, $$slotProps3) => {
              var fragment_4 = root_9$1();
              var node_8 = first_child(fragment_4);
              TableBodyCell(node_8, {
                children: ($$anchor5, $$slotProps4) => {
                  next();
                  var text_4 = text('Apple MacBook Pro 17"');
                  append($$anchor5, text_4);
                },
                $$slots: { default: true }
              });
              var node_9 = sibling(node_8, 2);
              TableBodyCell(node_9, {
                children: ($$anchor5, $$slotProps4) => {
                  next();
                  var text_5 = text("Sliver");
                  append($$anchor5, text_5);
                },
                $$slots: { default: true }
              });
              var node_10 = sibling(node_9, 2);
              TableBodyCell(node_10, {
                children: ($$anchor5, $$slotProps4) => {
                  next();
                  var text_6 = text("Laptop");
                  append($$anchor5, text_6);
                },
                $$slots: { default: true }
              });
              var node_11 = sibling(node_10, 2);
              TableBodyCell(node_11, {
                children: ($$anchor5, $$slotProps4) => {
                  next();
                  var text_7 = text("$2999");
                  append($$anchor5, text_7);
                },
                $$slots: { default: true }
              });
              var node_12 = sibling(node_11, 2);
              TableBodyCell(node_12, {
                children: ($$anchor5, $$slotProps4) => {
                  var a = root_14();
                  append($$anchor5, a);
                },
                $$slots: { default: true }
              });
              append($$anchor4, fragment_4);
            },
            $$slots: { default: true }
          });
          var node_13 = sibling(node_7, 2);
          TableBodyRow(node_13, {
            children: ($$anchor4, $$slotProps3) => {
              var fragment_5 = root_15$1();
              var node_14 = first_child(fragment_5);
              TableBodyCell(node_14, {
                children: ($$anchor5, $$slotProps4) => {
                  next();
                  var text_8 = text("Microsoft Surface Pro");
                  append($$anchor5, text_8);
                },
                $$slots: { default: true }
              });
              var node_15 = sibling(node_14, 2);
              TableBodyCell(node_15, {
                children: ($$anchor5, $$slotProps4) => {
                  next();
                  var text_9 = text("White");
                  append($$anchor5, text_9);
                },
                $$slots: { default: true }
              });
              var node_16 = sibling(node_15, 2);
              TableBodyCell(node_16, {
                children: ($$anchor5, $$slotProps4) => {
                  next();
                  var text_10 = text("Laptop PC");
                  append($$anchor5, text_10);
                },
                $$slots: { default: true }
              });
              var node_17 = sibling(node_16, 2);
              TableBodyCell(node_17, {
                children: ($$anchor5, $$slotProps4) => {
                  next();
                  var text_11 = text("$1999");
                  append($$anchor5, text_11);
                },
                $$slots: { default: true }
              });
              var node_18 = sibling(node_17, 2);
              TableBodyCell(node_18, {
                children: ($$anchor5, $$slotProps4) => {
                  var a_1 = root_20();
                  append($$anchor5, a_1);
                },
                $$slots: { default: true }
              });
              append($$anchor4, fragment_5);
            },
            $$slots: { default: true }
          });
          var node_19 = sibling(node_13, 2);
          TableBodyRow(node_19, {
            children: ($$anchor4, $$slotProps3) => {
              var fragment_6 = root_21();
              var node_20 = first_child(fragment_6);
              TableBodyCell(node_20, {
                children: ($$anchor5, $$slotProps4) => {
                  next();
                  var text_12 = text("Magic Mouse 2");
                  append($$anchor5, text_12);
                },
                $$slots: { default: true }
              });
              var node_21 = sibling(node_20, 2);
              TableBodyCell(node_21, {
                children: ($$anchor5, $$slotProps4) => {
                  next();
                  var text_13 = text("Black");
                  append($$anchor5, text_13);
                },
                $$slots: { default: true }
              });
              var node_22 = sibling(node_21, 2);
              TableBodyCell(node_22, {
                children: ($$anchor5, $$slotProps4) => {
                  next();
                  var text_14 = text("Accessories");
                  append($$anchor5, text_14);
                },
                $$slots: { default: true }
              });
              var node_23 = sibling(node_22, 2);
              TableBodyCell(node_23, {
                children: ($$anchor5, $$slotProps4) => {
                  next();
                  var text_15 = text("$99");
                  append($$anchor5, text_15);
                },
                $$slots: { default: true }
              });
              var node_24 = sibling(node_23, 2);
              TableBodyCell(node_24, {
                children: ($$anchor5, $$slotProps4) => {
                  var a_2 = root_26();
                  append($$anchor5, a_2);
                },
                $$slots: { default: true }
              });
              append($$anchor4, fragment_6);
            },
            $$slots: { default: true }
          });
          var node_25 = sibling(node_19, 2);
          TableBodyRow(node_25, {
            children: ($$anchor4, $$slotProps3) => {
              var fragment_7 = root_27();
              var node_26 = first_child(fragment_7);
              TableBodyCell(node_26, {
                children: ($$anchor5, $$slotProps4) => {
                  next();
                  var text_16 = text("Google Pixel Phone");
                  append($$anchor5, text_16);
                },
                $$slots: { default: true }
              });
              var node_27 = sibling(node_26, 2);
              TableBodyCell(node_27, {
                children: ($$anchor5, $$slotProps4) => {
                  next();
                  var text_17 = text("Gray");
                  append($$anchor5, text_17);
                },
                $$slots: { default: true }
              });
              var node_28 = sibling(node_27, 2);
              TableBodyCell(node_28, {
                children: ($$anchor5, $$slotProps4) => {
                  next();
                  var text_18 = text("Phone");
                  append($$anchor5, text_18);
                },
                $$slots: { default: true }
              });
              var node_29 = sibling(node_28, 2);
              TableBodyCell(node_29, {
                children: ($$anchor5, $$slotProps4) => {
                  next();
                  var text_19 = text("$799");
                  append($$anchor5, text_19);
                },
                $$slots: { default: true }
              });
              var node_30 = sibling(node_29, 2);
              TableBodyCell(node_30, {
                children: ($$anchor5, $$slotProps4) => {
                  var a_3 = root_32();
                  append($$anchor5, a_3);
                },
                $$slots: { default: true }
              });
              append($$anchor4, fragment_7);
            },
            $$slots: { default: true }
          });
          var node_31 = sibling(node_25, 2);
          TableBodyRow(node_31, {
            children: ($$anchor4, $$slotProps3) => {
              var fragment_8 = root_33();
              var node_32 = first_child(fragment_8);
              TableBodyCell(node_32, {
                children: ($$anchor5, $$slotProps4) => {
                  next();
                  var text_20 = text("Apple Watch 5");
                  append($$anchor5, text_20);
                },
                $$slots: { default: true }
              });
              var node_33 = sibling(node_32, 2);
              TableBodyCell(node_33, {
                children: ($$anchor5, $$slotProps4) => {
                  next();
                  var text_21 = text("Red");
                  append($$anchor5, text_21);
                },
                $$slots: { default: true }
              });
              var node_34 = sibling(node_33, 2);
              TableBodyCell(node_34, {
                children: ($$anchor5, $$slotProps4) => {
                  next();
                  var text_22 = text("Wearables");
                  append($$anchor5, text_22);
                },
                $$slots: { default: true }
              });
              var node_35 = sibling(node_34, 2);
              TableBodyCell(node_35, {
                children: ($$anchor5, $$slotProps4) => {
                  next();
                  var text_23 = text("$999");
                  append($$anchor5, text_23);
                },
                $$slots: { default: true }
              });
              var node_36 = sibling(node_35, 2);
              TableBodyCell(node_36, {
                children: ($$anchor5, $$slotProps4) => {
                  var a_4 = root_38();
                  append($$anchor5, a_4);
                },
                $$slots: { default: true }
              });
              append($$anchor4, fragment_8);
            },
            $$slots: { default: true }
          });
          append($$anchor3, fragment_3);
        },
        $$slots: { default: true }
      });
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
}
var root_8 = template(`<span class="sr-only">Edit</span>`);
var root_2$2 = template(`<!> <!> <!> <!> <!> <!>`, 1);
var root_16 = template(`<a href="/components/table" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Edit</a>`);
var root_10 = template(`<!> <!> <!> <!> <!> <!>`, 1);
var root_23 = template(`<a href="/components/table" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Edit</a>`);
var root_17 = template(`<!> <!> <!> <!> <!> <!>`, 1);
var root_30 = template(`<a href="/components/table" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Edit</a>`);
var root_24 = template(`<!> <!> <!> <!> <!> <!>`, 1);
var root_9 = template(`<!> <!> <!>`, 1);
var root_1$4 = template(`<!> <!>`, 1);
function Checkbox_1($$anchor) {
  Table($$anchor, {
    hoverable: true,
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1$4();
      var node = first_child(fragment_1);
      TableHead(node, {
        children: ($$anchor3, $$slotProps2) => {
          var fragment_2 = root_2$2();
          var node_1 = first_child(fragment_2);
          TableHeadCell(node_1, {
            class: "!p-4",
            children: ($$anchor4, $$slotProps3) => {
              Checkbox($$anchor4, {});
            },
            $$slots: { default: true }
          });
          var node_2 = sibling(node_1, 2);
          TableHeadCell(node_2, {
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text$1 = text("Product name");
              append($$anchor4, text$1);
            },
            $$slots: { default: true }
          });
          var node_3 = sibling(node_2, 2);
          TableHeadCell(node_3, {
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_1 = text("Color");
              append($$anchor4, text_1);
            },
            $$slots: { default: true }
          });
          var node_4 = sibling(node_3, 2);
          TableHeadCell(node_4, {
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_2 = text("Category");
              append($$anchor4, text_2);
            },
            $$slots: { default: true }
          });
          var node_5 = sibling(node_4, 2);
          TableHeadCell(node_5, {
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_3 = text("Price");
              append($$anchor4, text_3);
            },
            $$slots: { default: true }
          });
          var node_6 = sibling(node_5, 2);
          TableHeadCell(node_6, {
            children: ($$anchor4, $$slotProps3) => {
              var span = root_8();
              append($$anchor4, span);
            },
            $$slots: { default: true }
          });
          append($$anchor3, fragment_2);
        },
        $$slots: { default: true }
      });
      var node_7 = sibling(node, 2);
      TableBody(node_7, {
        class: "divide-y",
        children: ($$anchor3, $$slotProps2) => {
          var fragment_4 = root_9();
          var node_8 = first_child(fragment_4);
          TableBodyRow(node_8, {
            children: ($$anchor4, $$slotProps3) => {
              var fragment_5 = root_10();
              var node_9 = first_child(fragment_5);
              TableBodyCell(node_9, {
                class: "!p-4",
                children: ($$anchor5, $$slotProps4) => {
                  Checkbox($$anchor5, {});
                },
                $$slots: { default: true }
              });
              var node_10 = sibling(node_9, 2);
              TableBodyCell(node_10, {
                children: ($$anchor5, $$slotProps4) => {
                  next();
                  var text_4 = text('Apple MacBook Pro 17"');
                  append($$anchor5, text_4);
                },
                $$slots: { default: true }
              });
              var node_11 = sibling(node_10, 2);
              TableBodyCell(node_11, {
                children: ($$anchor5, $$slotProps4) => {
                  next();
                  var text_5 = text("Sliver");
                  append($$anchor5, text_5);
                },
                $$slots: { default: true }
              });
              var node_12 = sibling(node_11, 2);
              TableBodyCell(node_12, {
                children: ($$anchor5, $$slotProps4) => {
                  next();
                  var text_6 = text("Laptop");
                  append($$anchor5, text_6);
                },
                $$slots: { default: true }
              });
              var node_13 = sibling(node_12, 2);
              TableBodyCell(node_13, {
                children: ($$anchor5, $$slotProps4) => {
                  next();
                  var text_7 = text("$2999");
                  append($$anchor5, text_7);
                },
                $$slots: { default: true }
              });
              var node_14 = sibling(node_13, 2);
              TableBodyCell(node_14, {
                children: ($$anchor5, $$slotProps4) => {
                  var a = root_16();
                  append($$anchor5, a);
                },
                $$slots: { default: true }
              });
              append($$anchor4, fragment_5);
            },
            $$slots: { default: true }
          });
          var node_15 = sibling(node_8, 2);
          TableBodyRow(node_15, {
            children: ($$anchor4, $$slotProps3) => {
              var fragment_7 = root_17();
              var node_16 = first_child(fragment_7);
              TableBodyCell(node_16, {
                class: "!p-4",
                children: ($$anchor5, $$slotProps4) => {
                  Checkbox($$anchor5, {});
                },
                $$slots: { default: true }
              });
              var node_17 = sibling(node_16, 2);
              TableBodyCell(node_17, {
                children: ($$anchor5, $$slotProps4) => {
                  next();
                  var text_8 = text("Microsoft Surface Pro");
                  append($$anchor5, text_8);
                },
                $$slots: { default: true }
              });
              var node_18 = sibling(node_17, 2);
              TableBodyCell(node_18, {
                children: ($$anchor5, $$slotProps4) => {
                  next();
                  var text_9 = text("White");
                  append($$anchor5, text_9);
                },
                $$slots: { default: true }
              });
              var node_19 = sibling(node_18, 2);
              TableBodyCell(node_19, {
                children: ($$anchor5, $$slotProps4) => {
                  next();
                  var text_10 = text("Laptop PC");
                  append($$anchor5, text_10);
                },
                $$slots: { default: true }
              });
              var node_20 = sibling(node_19, 2);
              TableBodyCell(node_20, {
                children: ($$anchor5, $$slotProps4) => {
                  next();
                  var text_11 = text("$1999");
                  append($$anchor5, text_11);
                },
                $$slots: { default: true }
              });
              var node_21 = sibling(node_20, 2);
              TableBodyCell(node_21, {
                children: ($$anchor5, $$slotProps4) => {
                  var a_1 = root_23();
                  append($$anchor5, a_1);
                },
                $$slots: { default: true }
              });
              append($$anchor4, fragment_7);
            },
            $$slots: { default: true }
          });
          var node_22 = sibling(node_15, 2);
          TableBodyRow(node_22, {
            children: ($$anchor4, $$slotProps3) => {
              var fragment_9 = root_24();
              var node_23 = first_child(fragment_9);
              TableBodyCell(node_23, {
                class: "!p-4",
                children: ($$anchor5, $$slotProps4) => {
                  Checkbox($$anchor5, {});
                },
                $$slots: { default: true }
              });
              var node_24 = sibling(node_23, 2);
              TableBodyCell(node_24, {
                children: ($$anchor5, $$slotProps4) => {
                  next();
                  var text_12 = text("Magic Mouse 2");
                  append($$anchor5, text_12);
                },
                $$slots: { default: true }
              });
              var node_25 = sibling(node_24, 2);
              TableBodyCell(node_25, {
                children: ($$anchor5, $$slotProps4) => {
                  next();
                  var text_13 = text("Black");
                  append($$anchor5, text_13);
                },
                $$slots: { default: true }
              });
              var node_26 = sibling(node_25, 2);
              TableBodyCell(node_26, {
                children: ($$anchor5, $$slotProps4) => {
                  next();
                  var text_14 = text("Accessories");
                  append($$anchor5, text_14);
                },
                $$slots: { default: true }
              });
              var node_27 = sibling(node_26, 2);
              TableBodyCell(node_27, {
                children: ($$anchor5, $$slotProps4) => {
                  next();
                  var text_15 = text("$99");
                  append($$anchor5, text_15);
                },
                $$slots: { default: true }
              });
              var node_28 = sibling(node_27, 2);
              TableBodyCell(node_28, {
                children: ($$anchor5, $$slotProps4) => {
                  var a_2 = root_30();
                  append($$anchor5, a_2);
                },
                $$slots: { default: true }
              });
              append($$anchor4, fragment_9);
            },
            $$slots: { default: true }
          });
          append($$anchor3, fragment_4);
        },
        $$slots: { default: true }
      });
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
}
var root_4 = template(`<!> <!> <!> <!>`, 1);
var root_1$3 = template(`<!> <!>`, 1);
function Search($$anchor, $$props) {
  push($$props, true);
  const headItems = ["ID", "Maker", "Type", "Make"];
  let searchTerm = state("");
  let items = [
    {
      id: 1,
      maker: "Toyota",
      type: "ABC",
      make: 2017
    },
    {
      id: 2,
      maker: "Ford",
      type: "CDE",
      make: 2018
    },
    {
      id: 3,
      maker: "Volvo",
      type: "FGH",
      make: 2019
    },
    {
      id: 4,
      maker: "Saab",
      type: "IJK",
      make: 2020
    }
  ];
  let filteredItems = derived(() => items.filter((item) => item.maker.toLowerCase().indexOf(get(searchTerm).toLowerCase()) !== -1));
  TableSearch($$anchor, {
    placeholder: "Search by maker name",
    hoverable: true,
    get inputValue() {
      return get(searchTerm);
    },
    set inputValue($$value) {
      set(searchTerm, proxy($$value));
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1$3();
      var node = first_child(fragment_1);
      TableHead(node, { headItems });
      var node_1 = sibling(node, 2);
      TableBody(node_1, {
        children: ($$anchor3, $$slotProps2) => {
          var fragment_2 = comment();
          var node_2 = first_child(fragment_2);
          each(node_2, 17, () => get(filteredItems), index, ($$anchor4, item) => {
            TableBodyRow($$anchor4, {
              children: ($$anchor5, $$slotProps3) => {
                var fragment_4 = root_4();
                var node_3 = first_child(fragment_4);
                TableBodyCell(node_3, {
                  children: ($$anchor6, $$slotProps4) => {
                    next();
                    var text$1 = text();
                    template_effect(() => set_text(text$1, get(item).id));
                    append($$anchor6, text$1);
                  },
                  $$slots: { default: true }
                });
                var node_4 = sibling(node_3, 2);
                TableBodyCell(node_4, {
                  children: ($$anchor6, $$slotProps4) => {
                    next();
                    var text_1 = text();
                    template_effect(() => set_text(text_1, get(item).maker));
                    append($$anchor6, text_1);
                  },
                  $$slots: { default: true }
                });
                var node_5 = sibling(node_4, 2);
                TableBodyCell(node_5, {
                  children: ($$anchor6, $$slotProps4) => {
                    next();
                    var text_2 = text();
                    template_effect(() => set_text(text_2, get(item).type));
                    append($$anchor6, text_2);
                  },
                  $$slots: { default: true }
                });
                var node_6 = sibling(node_5, 2);
                TableBodyCell(node_6, {
                  children: ($$anchor6, $$slotProps4) => {
                    next();
                    var text_3 = text();
                    template_effect(() => set_text(text_3, get(item).make));
                    append($$anchor6, text_3);
                  },
                  $$slots: { default: true }
                });
                append($$anchor5, fragment_4);
              },
              $$slots: { default: true }
            });
          });
          append($$anchor3, fragment_2);
        },
        $$slots: { default: true }
      });
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
  pop();
}
var root_2$1 = template(`<tr><!><!></tr>`);
var root_1$2 = template(`<!> <!>`, 1);
function HeaderSlot($$anchor) {
  const headItems = ["Brand", "Name", "Color", "Type", "Price"];
  const bodyItems = [
    [
      "Apple",
      'MacBook Pro 17"',
      "Sliver",
      "Laptop",
      "$2999"
    ],
    [
      "Microsoft",
      "Surface Pro",
      "White",
      "Laptop PC",
      "$1999"
    ],
    [
      "Apple",
      "Magic Mouse 2",
      "Black",
      "Accessories",
      "$99"
    ],
    [
      "Google",
      " Pixel Phone",
      "Gray",
      "Phone",
      "$799"
    ],
    [
      "Apple",
      "Watch 5",
      "Red",
      "Wearables",
      "$999"
    ]
  ];
  Table($$anchor, {
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1$2();
      var node = first_child(fragment_1);
      {
        const headerSlot = ($$anchor3) => {
          var tr = root_2$1();
          var node_1 = child(tr);
          TableHeadCell(node_1, {
            colspan: 2,
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text$1 = text("Product");
              append($$anchor4, text$1);
            },
            $$slots: { default: true }
          });
          var node_2 = sibling(node_1);
          TableHeadCell(node_2, {
            colspan: 3,
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_1 = text("Info");
              append($$anchor4, text_1);
            },
            $$slots: { default: true }
          });
          reset(tr);
          append($$anchor3, tr);
        };
        TableHead(node, {
          headItems,
          defaultRow: false,
          headerSlot,
          $$slots: { headerSlot: true }
        });
      }
      var node_3 = sibling(node, 2);
      TableBody(node_3, { bodyItems });
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
}
var root_1$1 = template(`<tfoot><tr class="font-semibold text-gray-900 dark:text-white"><th scope="row" class="px-6 py-3 text-base">Total</th><td class="px-6 py-3">3</td><td class="px-6 py-3">$5,097</td></tr></tfoot>`);
function FooterSlot($$anchor) {
  const tableItems = [
    {
      name: 'Apple MacBook Pro 17"',
      qty: "1",
      price: "$2999"
    },
    {
      name: "Microsoft Surface Pro",
      qty: "1",
      price: "$1999"
    },
    {
      name: "Magic Mouse 2",
      qty: "1",
      price: "$99"
    }
  ];
  {
    const footerSlot = ($$anchor2) => {
      var tfoot = root_1$1();
      append($$anchor2, tfoot);
    };
    Table($$anchor, {
      tableItems,
      hoverable: true,
      footerSlot,
      $$slots: { footerSlot: true }
    });
  }
}
var root_1 = template(`<caption class="bg-white p-5 text-left text-lg font-semibold text-gray-900 dark:bg-gray-800 dark:text-white">Our products <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.</p></caption>`);
var root_2 = template(`<!> <!>`, 1);
function TableCaption($$anchor) {
  const headItems = ["Brand", "Name", "Color", "Type", "Price"];
  const bodyItems = [
    [
      "Apple",
      'MacBook Pro 17"',
      "Sliver",
      "Laptop",
      "$2999"
    ],
    [
      "Microsoft",
      "Surface Pro",
      "White",
      "Laptop PC",
      "$1999"
    ],
    [
      "Apple",
      "Magic Mouse 2",
      "Black",
      "Accessories",
      "$99"
    ],
    [
      "Google",
      " Pixel Phone",
      "Gray",
      "Phone",
      "$799"
    ],
    [
      "Apple",
      "Watch 5",
      "Red",
      "Wearables",
      "$999"
    ]
  ];
  {
    const captionSlot = ($$anchor2) => {
      var caption = root_1();
      append($$anchor2, caption);
    };
    Table($$anchor, {
      captionSlot,
      children: ($$anchor2, $$slotProps) => {
        var fragment_1 = root_2();
        var node = first_child(fragment_1);
        TableHead(node, { headItems });
        var node_1 = sibling(node, 2);
        TableBody(node_1, { bodyItems });
        append($$anchor2, fragment_1);
      },
      $$slots: { captionSlot: true, default: true }
    });
  }
}
function Overflow($$anchor) {
  const tableItems = [
    {
      name: 'Apple MacBook Pro 17"',
      color: "Sliver",
      category: "Laptop",
      accessories: "Yes",
      available: "Yes",
      price: "$2999",
      weight: "2.3kg",
      qty: "1"
    },
    {
      name: "Microsoft Surface Pro",
      color: "White",
      category: "Laptop PC",
      accessories: "No",
      available: "Yes",
      price: "$1999",
      weight: "1.8kg",
      qty: "1"
    },
    {
      name: "Magic Mouse 2",
      color: "Black",
      category: "Accessories",
      accessories: "Yes",
      available: "No",
      price: "$99",
      weight: "0.6kg",
      qty: "2"
    }
  ];
  Table($$anchor, { tableItems });
}
var root_5 = template(`<!> <div class="my-4 flex flex-wrap space-x-4"><!> <!></div> <div class="mb-4 flex gap-4"><!> <!> <!> <!></div>`, 1);
var root_15 = template(`<div class="mb-12 flex flex-wrap"><!> <!></div> <!>`, 1);
var root = template(`<!> <!> <!> <!> <!> <!> <!> <!> <!>`, 1);
function _page($$anchor, $$props) {
  push($$props, true);
  const dirName = "table";
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/Cells.svelte": __vite_glob_0_0,
    "./examples/Checkbox.svelte": __vite_glob_0_1,
    "./examples/ClickDoubleClick.svelte": __vite_glob_0_2,
    "./examples/FooterSlot.svelte": __vite_glob_0_3,
    "./examples/HeadBodyItems.svelte": __vite_glob_0_4,
    "./examples/HeaderSlot.svelte": __vite_glob_0_5,
    "./examples/Hover.svelte": __vite_glob_0_6,
    "./examples/NoBorder.svelte": __vite_glob_0_7,
    "./examples/Overflow.svelte": __vite_glob_0_8,
    "./examples/Search.svelte": __vite_glob_0_9,
    "./examples/Setup.svelte": __vite_glob_0_10,
    "./examples/Shadow.svelte": __vite_glob_0_11,
    "./examples/Striped.svelte": __vite_glob_0_12,
    "./examples/TableCaption.svelte": __vite_glob_0_13,
    "./examples/TableItems.svelte": __vite_glob_0_14
  });
  const exampleArr = [
    {
      name: "Table items",
      component: TableItems
    },
    {
      name: "Head body items",
      component: HeadBodyItems
    },
    {
      name: "Cells",
      component: Cells
    },
    {
      name: "Checkbox",
      component: Checkbox_1
    },
    {
      name: "Search",
      component: Search
    },
    {
      name: "Header slot",
      component: HeaderSlot
    },
    {
      name: "Footer slot",
      component: FooterSlot
    },
    {
      name: "Table caption",
      component: TableCaption
    },
    {
      name: "Overflow",
      component: Overflow
    }
    // { name: "Click double click", component: ExampleComponents.ClickDoubleClick }
  ];
  let selectedExample = state(proxy(exampleArr[0].name));
  let svelteCode = derived(() => getExampleFileName(get(selectedExample), exampleArr));
  function findObject(arr, name) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = derived(() => findObject(exampleArr, get(selectedExample)));
  let color = state("default");
  const colors = Object.keys(table.variants.color);
  let striped = state(false);
  const changeStriped = () => {
    set(striped, !get(striped));
  };
  let hoverable = state(false);
  const changeHoverable = () => {
    set(hoverable, !get(hoverable));
  };
  let noborder = state(false);
  const changeNoborder = () => {
    set(noborder, !get(noborder));
  };
  let shadow = state(false);
  const changeShadow = () => {
    set(shadow, !get(shadow));
  };
  const tableItems = [
    {
      name: 'Apple MacBook Pro 17"',
      color: "Sliver",
      type: "Laptop",
      price: "$2999"
    },
    {
      name: "Microsoft Surface Pro",
      color: "White",
      type: "Laptop PC",
      price: "$1999"
    },
    {
      name: "Magic Mouse 2",
      color: "Black",
      type: "Accessories",
      price: "$99"
    },
    {
      name: "Google Pixel Phone",
      color: "Gray",
      type: "Phone",
      price: "$799"
    },
    {
      name: "Apple Watch 5",
      color: "Red",
      type: "Wearables",
      price: "$999"
    }
  ];
  let generatedCode = derived(() => (() => {
    let props = [];
    if (get(color) !== "default") props.push(` color="${get(color)}"`);
    if (get(striped)) props.push(" striped");
    if (get(hoverable)) props.push(" hoverable");
    if (!get(noborder)) props.push(" noborder");
    if (get(shadow)) props.push(" shadow");
    const propsString = props.length > 0 ? props.map((prop2) => `
  ${prop2}`).join("") + "\n" : "";
    return `<Table {tableItems}${propsString} />`;
  })());
  let builder = uiHelpers();
  let builderExpand = state(false);
  let showBuilderExpandButton = derived(() => isGeneratedCodeOverflow(get(generatedCode)));
  const handleBuilderExpandClick = () => {
    set(builderExpand, !get(builderExpand));
  };
  let codeBlock = uiHelpers();
  let exampleExpand = state(false);
  let showExpandButton = derived(() => isSvelteOverflow(get(svelteCode), exampleModules));
  const handleExpandClick = () => {
    set(exampleExpand, !get(exampleExpand));
  };
  user_effect(() => {
    set(exampleExpand, proxy(codeBlock.isOpen));
    set(builderExpand, proxy(builder.isOpen));
  });
  var fragment = root();
  var node = first_child(fragment);
  H1(node, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text("Table");
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
  var node_1 = sibling(node, 2);
  H2(node_1, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_1 = text("Setup");
      append($$anchor2, text_1);
    },
    $$slots: { default: true }
  });
  var node_2 = sibling(node_1, 2);
  HighlightCompo(node_2, {
    get code() {
      return exampleModules[`./examples/Setup.svelte`];
    }
  });
  var node_3 = sibling(node_2, 2);
  H2(node_3, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_2 = text("Interactive Table Builder");
      append($$anchor2, text_2);
    },
    $$slots: { default: true }
  });
  var node_4 = sibling(node_3, 2);
  {
    const codeblock = ($$anchor2) => {
      DynamicCodeBlockHighlight($$anchor2, {
        handleExpandClick: handleBuilderExpandClick,
        get expand() {
          return get(builderExpand);
        },
        get showExpandButton() {
          return get(showBuilderExpandButton);
        },
        get code() {
          return get(generatedCode);
        }
      });
    };
    CodeWrapper(node_4, {
      codeblock,
      children: ($$anchor2, $$slotProps) => {
        var fragment_2 = root_5();
        var node_5 = first_child(fragment_2);
        Table(node_5, {
          tableItems,
          get hoverable() {
            return get(hoverable);
          },
          get color() {
            return get(color);
          },
          get striped() {
            return get(striped);
          },
          get noborder() {
            return get(noborder);
          },
          get shadow() {
            return get(shadow);
          }
        });
        var div = sibling(node_5, 2);
        var node_6 = child(div);
        Label(node_6, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_3 = text("Color");
            append($$anchor3, text_3);
          },
          $$slots: { default: true }
        });
        var node_7 = sibling(node_6, 2);
        each(node_7, 17, () => colors, index, ($$anchor3, colorOption) => {
          Radio($$anchor3, {
            labelClass: "w-24 my-1",
            name: "table_color",
            get group() {
              return get(color);
            },
            set group($$value) {
              set(color, proxy($$value));
            },
            get color() {
              return get(colorOption);
            },
            get value() {
              return get(colorOption);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_4 = text();
              template_effect(() => set_text(text_4, get(colorOption)));
              append($$anchor4, text_4);
            },
            $$slots: { default: true }
          });
        });
        reset(div);
        var div_1 = sibling(div, 2);
        var node_8 = child(div_1);
        Button(node_8, {
          class: "w-40",
          onclick: changeStriped,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_5 = text();
            template_effect(() => set_text(text_5, get(striped) ? "Unstriped" : "Striped"));
            append($$anchor3, text_5);
          },
          $$slots: { default: true }
        });
        var node_9 = sibling(node_8, 2);
        Button(node_9, {
          class: "w-40",
          color: "secondary",
          onclick: changeHoverable,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_6 = text();
            template_effect(() => set_text(text_6, get(hoverable) ? "Unhoverable" : "Hoverable"));
            append($$anchor3, text_6);
          },
          $$slots: { default: true }
        });
        var node_10 = sibling(node_9, 2);
        Button(node_10, {
          class: "w-40",
          color: "indigo",
          onclick: changeNoborder,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_7 = text();
            template_effect(() => set_text(text_7, get(noborder) ? "Borderless" : "Border"));
            append($$anchor3, text_7);
          },
          $$slots: { default: true }
        });
        var node_11 = sibling(node_10, 2);
        Button(node_11, {
          class: "w-40",
          color: "rose",
          onclick: changeShadow,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_8 = text();
            template_effect(() => set_text(text_8, get(shadow) ? "No Shadow" : "Shadow"));
            append($$anchor3, text_8);
          },
          $$slots: { default: true }
        });
        reset(div_1);
        append($$anchor2, fragment_2);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_12 = sibling(node_4, 2);
  H2(node_12, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_9 = text("Examples");
      append($$anchor2, text_9);
    },
    $$slots: { default: true }
  });
  var node_13 = sibling(node_12, 2);
  {
    const codeblock = ($$anchor2) => {
      DynamicCodeBlockHighlight($$anchor2, {
        replaceLib: true,
        handleExpandClick,
        get expand() {
          return get(exampleExpand);
        },
        get showExpandButton() {
          return get(showExpandButton);
        },
        get code() {
          return exampleModules[`./examples/${get(svelteCode)}`];
        }
      });
    };
    CodeWrapper(node_13, {
      codeblock,
      children: ($$anchor2, $$slotProps) => {
        var fragment_10 = root_15();
        var div_2 = first_child(fragment_10);
        var node_14 = child(div_2);
        Label(node_14, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_10 = text("Example");
            append($$anchor3, text_10);
          },
          $$slots: { default: true }
        });
        var node_15 = sibling(node_14, 2);
        each(node_15, 17, () => exampleArr, index, ($$anchor3, style) => {
          Radio($$anchor3, {
            labelClass: "w-40 my-1",
            onclick: () => set(exampleExpand, false),
            name: "block_style",
            get group() {
              return get(selectedExample);
            },
            set group($$value) {
              set(selectedExample, proxy($$value));
            },
            get value() {
              return get(style).name;
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_11 = text();
              template_effect(() => set_text(text_11, get(style).name));
              append($$anchor4, text_11);
            },
            $$slots: { default: true }
          });
        });
        reset(div_2);
        var node_16 = sibling(div_2, 2);
        component(node_16, () => get(SelectedComponent), ($$anchor3, $$component) => {
          $$component($$anchor3, {});
        });
        append($$anchor2, fragment_10);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_17 = sibling(node_13, 2);
  H2(node_17, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_12 = text("Component data");
      append($$anchor2, text_12);
    },
    $$slots: { default: true }
  });
  var node_18 = sibling(node_17, 2);
  CompoAttributesViewer(node_18, { dirName });
  append($$anchor, fragment);
  pop();
}
export {
  _page as component
};
